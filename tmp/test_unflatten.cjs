const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_simplified_constants.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Let us inspect the structure of 2-case while switches:
// State variable: stateVar
// Test: stateVar < exitBound (e.g. exitBound = 35)
// Cases:
// One case is the entry case (case === initState):
// Usually: stateVar = <condition> ? targetState : exitBound; break;
// Or: stateVar = <condition> ? exitBound : targetState; break;
// The other case (targetState):
// contains body statements, and then:
// stateVar = exitBound; [return ...;] break;
// OR it contains statements that end in return or exit.

// What if it is a 3-case switch?
// Case entry: stateVar = <condition> ? targetState1 : targetState2; break;
// Case targetState1: ...; stateVar = exitBound; break;
// Case targetState2: ...; stateVar = exitBound; break;
// Which translates directly to:
// if (<condition>) { targetState1_body } else { targetState2_body }!

// What if it is a 4-case switch?
// For loop:
// { let loopVar; while (stateVar < exitBound) switch(stateVar) { ... } }
// Case init: stateVar = testState; loopVar = 0; break;
// Case test: stateVar = loopVar < limit ? bodyState : exitBound; break;
// Case step: stateVar = testState; loopVar++; break;
// Case body: stateVar = stepState; { ... } break;

// Let us write a function to simulate/trace each WhileStatement!
function tryDeobfuscateWhileSwitch(whilePath, prevVarDeclPath) {
  const whileNode = whilePath.node;
  let body = whileNode.body;
  if (t.isBlockStatement(body) && body.body.length === 1) {
    body = body.body[0];
  }
  if (!t.isSwitchStatement(body)) return null;

  const switchNode = body;
  if (!t.isIdentifier(switchNode.discriminant)) return null;
  const stateVarName = switchNode.discriminant.name;

  // Check while test: stateVar < exitBound
  if (!t.isBinaryExpression(whileNode.test) || whileNode.test.operator !== "<") return null;
  if (!t.isIdentifier(whileNode.test.left, { name: stateVarName })) return null;
  if (!t.isNumericLiteral(whileNode.test.right)) return null;
  const exitBound = whileNode.test.right.value;

  // Find initial state from previous variable declaration
  if (!prevVarDeclPath || !t.isVariableDeclaration(prevVarDeclPath.node)) return null;
  const declarator = prevVarDeclPath.node.declarations.find(d => t.isIdentifier(d.id, { name: stateVarName }));
  if (!declarator || !t.isNumericLiteral(declarator.init)) return null;
  const initState = declarator.init.value;

  // Build case map
  const caseMap = new Map();
  for (const c of switchNode.cases) {
    if (!c.test || !t.isNumericLiteral(c.test)) return null;
    caseMap.set(c.test.value, c.consequent);
  }

  // Let us check 2-case pattern:
  if (switchNode.cases.length === 2) {
    const entryCase = caseMap.get(initState);
    if (!entryCase) return null;

    // Entry case usually has: stateVar = cond ? next1 : next2; break;
    let condAssign = null;
    for (const stmt of entryCase) {
      if (t.isExpressionStatement(stmt) && t.isAssignmentExpression(stmt.expression)) {
        const assign = stmt.expression;
        if (t.isIdentifier(assign.left, { name: stateVarName }) && t.isConditionalExpression(assign.right)) {
          condAssign = assign.right;
          break;
        }
      }
    }
    if (!condAssign) return null;
    if (!t.isNumericLiteral(condAssign.consequent) || !t.isNumericLiteral(condAssign.alternate)) return null;

    const nextTrue = condAssign.consequent.value;
    const nextFalse = condAssign.alternate.value;

    // One of them should be >= exitBound (meaning loop exit)
    // The other is targetState!
    if (nextFalse >= exitBound && nextTrue < exitBound) {
      // if (cond) { targetState }
      const targetCase = caseMap.get(nextTrue);
      if (!targetCase) return null;
      // Clean targetCase: remove assignments to stateVar and break;
      const cleanBody = cleanCaseBody(targetCase, stateVarName);
      return {
        type: "if",
        test: condAssign.test,
        consequent: cleanBody,
        alternate: null,
        stateVarName
      };
    } else if (nextTrue >= exitBound && nextFalse < exitBound) {
      // if (!cond) { targetState }
      const targetCase = caseMap.get(nextFalse);
      if (!targetCase) return null;
      const cleanBody = cleanCaseBody(targetCase, stateVarName);
      return {
        type: "if",
        test: t.unaryExpression("!", condAssign.test),
        consequent: cleanBody,
        alternate: null,
        stateVarName
      };
    }
  }

  // 3-case pattern:
  if (switchNode.cases.length === 3) {
    const entryCase = caseMap.get(initState);
    if (!entryCase) return null;

    let condAssign = null;
    for (const stmt of entryCase) {
      if (t.isExpressionStatement(stmt) && t.isAssignmentExpression(stmt.expression)) {
        const assign = stmt.expression;
        if (t.isIdentifier(assign.left, { name: stateVarName }) && t.isConditionalExpression(assign.right)) {
          condAssign = assign.right;
          break;
        }
      }
    }
    if (!condAssign) return null;
    if (!t.isNumericLiteral(condAssign.consequent) || !t.isNumericLiteral(condAssign.alternate)) return null;

    const nextTrue = condAssign.consequent.value;
    const nextFalse = condAssign.alternate.value;

    const caseTrue = caseMap.get(nextTrue);
    const caseFalse = caseMap.get(nextFalse);
    if (caseTrue && caseFalse) {
      const cleanTrue = cleanCaseBody(caseTrue, stateVarName);
      const cleanFalse = cleanCaseBody(caseFalse, stateVarName);
      return {
        type: "if",
        test: condAssign.test,
        consequent: cleanTrue,
        alternate: cleanFalse,
        stateVarName
      };
    }
  }

  return null;
}

function cleanCaseBody(stmts, stateVarName) {
  const result = [];
  for (const s of stmts) {
    if (t.isBreakStatement(s)) continue;
    if (t.isExpressionStatement(s) && t.isAssignmentExpression(s.expression)) {
      if (t.isIdentifier(s.expression.left, { name: stateVarName })) continue;
    }
    if (t.isBlockStatement(s)) {
      // unwrap unnecessary block
      result.push(...cleanCaseBody(s.body, stateVarName));
    } else {
      result.push(s);
    }
  }
  return result;
}

let transformedCount = 0;
// Test on ast
traverse(ast, {
  WhileStatement(path) {
    const prev = path.getPrevSibling();
    const deobf = tryDeobfuscateWhileSwitch(path, prev);
    if (deobf) {
      transformedCount++;
    }
  }
});
console.log(`Deobfuscated ${transformedCount} while-switch blocks!`);
