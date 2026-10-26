const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_simplified_constants.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Helper to clean case body
function cleanCaseBody(stmts, stateVarName) {
  const result = [];
  for (const s of stmts) {
    if (t.isBreakStatement(s)) continue;
    if (t.isExpressionStatement(s) && t.isAssignmentExpression(s.expression)) {
      if (t.isIdentifier(s.expression.left, { name: stateVarName })) continue;
    }
    if (t.isBlockStatement(s)) {
      result.push(...cleanCaseBody(s.body, stateVarName));
    } else {
      result.push(s);
    }
  }
  return result;
}

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

  if (!t.isBinaryExpression(whileNode.test) || whileNode.test.operator !== "<") return null;
  if (!t.isIdentifier(whileNode.test.left, { name: stateVarName })) return null;
  if (!t.isNumericLiteral(whileNode.test.right)) return null;
  const exitBound = whileNode.test.right.value;

  if (!prevVarDeclPath || !t.isVariableDeclaration(prevVarDeclPath.node)) return null;
  const declarator = prevVarDeclPath.node.declarations.find(d => t.isIdentifier(d.id, { name: stateVarName }));
  if (!declarator || !t.isNumericLiteral(declarator.init)) return null;
  const initState = declarator.init.value;

  const caseMap = new Map();
  for (const c of switchNode.cases) {
    if (!c.test || !t.isNumericLiteral(c.test)) return null;
    caseMap.set(c.test.value, c.consequent);
  }

  // Check 4-case for-loop pattern
  if (switchNode.cases.length === 4) {
    // E.g.
    // case init: stateVar = testState; loopVar = 0; break;
    // case test: stateVar = loopVar < limit ? bodyState : exitBound; break;
    // case step: stateVar = testState; loopVar++; break;
    // case body: stateVar = stepState; { body } break;
    const entryCase = caseMap.get(initState);
    if (entryCase) {
      let loopVarInit = null;
      let nextState = null;
      for (const s of entryCase) {
        if (t.isExpressionStatement(s) && t.isAssignmentExpression(s.expression)) {
          const assign = s.expression;
          if (t.isIdentifier(assign.left, { name: stateVarName }) && t.isNumericLiteral(assign.right)) {
            nextState = assign.right.value;
          } else if (t.isAssignmentExpression(assign)) {
            loopVarInit = assign;
          }
        }
      }
      if (loopVarInit && nextState !== null) {
        const testCase = caseMap.get(nextState);
        let condAssign = null;
        if (testCase) {
          for (const s of testCase) {
            if (t.isExpressionStatement(s) && t.isAssignmentExpression(s.expression)) {
              if (t.isIdentifier(s.expression.left, { name: stateVarName }) && t.isConditionalExpression(s.expression.right)) {
                condAssign = s.expression.right;
              }
            }
          }
        }
        if (condAssign && t.isNumericLiteral(condAssign.consequent) && t.isNumericLiteral(condAssign.alternate)) {
          const bodyState = condAssign.consequent.value;
          const bodyCase = caseMap.get(bodyState);
          // find step state
          let stepState = null;
          if (bodyCase) {
            for (const s of bodyCase) {
              if (t.isExpressionStatement(s) && t.isAssignmentExpression(s.expression)) {
                if (t.isIdentifier(s.expression.left, { name: stateVarName }) && t.isNumericLiteral(s.expression.right)) {
                  stepState = s.expression.right.value;
                }
              }
            }
          }
          const stepCase = stepState !== null ? caseMap.get(stepState) : null;
          let updateExpr = null;
          if (stepCase) {
            for (const s of stepCase) {
              if (t.isExpressionStatement(s)) {
                if (t.isUpdateExpression(s.expression)) {
                  updateExpr = s.expression;
                } else if (t.isAssignmentExpression(s.expression) && !t.isIdentifier(s.expression.left, { name: stateVarName })) {
                  updateExpr = s.expression;
                }
              }
            }
          }

          if (bodyCase && updateExpr) {
            const cleanBody = cleanCaseBody(bodyCase, stateVarName);
            return {
              type: "for",
              init: loopVarInit,
              test: condAssign.test,
              update: updateExpr,
              body: t.blockStatement(cleanBody),
              stateVarName
            };
          }
        }
      }
    }
  }

  // 2-case pattern
  if (switchNode.cases.length === 2) {
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
    if (!condAssign || !t.isNumericLiteral(condAssign.consequent) || !t.isNumericLiteral(condAssign.alternate)) return null;

    const nextTrue = condAssign.consequent.value;
    const nextFalse = condAssign.alternate.value;

    if (nextFalse >= exitBound && nextTrue < exitBound) {
      const targetCase = caseMap.get(nextTrue);
      if (!targetCase) return null;
      return {
        type: "if",
        test: condAssign.test,
        consequent: cleanCaseBody(targetCase, stateVarName),
        alternate: null,
        stateVarName
      };
    } else if (nextTrue >= exitBound && nextFalse < exitBound) {
      const targetCase = caseMap.get(nextFalse);
      if (!targetCase) return null;
      return {
        type: "if",
        test: t.isUnaryExpression(condAssign.test) && condAssign.test.operator === "!" ? condAssign.test.argument : t.unaryExpression("!", condAssign.test),
        consequent: cleanCaseBody(targetCase, stateVarName),
        alternate: null,
        stateVarName
      };
    }
  }

  // 3-case pattern
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
    if (!condAssign || !t.isNumericLiteral(condAssign.consequent) || !t.isNumericLiteral(condAssign.alternate)) return null;

    const nextTrue = condAssign.consequent.value;
    const nextFalse = condAssign.alternate.value;

    const caseTrue = caseMap.get(nextTrue);
    const caseFalse = caseMap.get(nextFalse);
    if (caseTrue && caseFalse) {
      return {
        type: "if",
        test: condAssign.test,
        consequent: cleanCaseBody(caseTrue, stateVarName),
        alternate: cleanCaseBody(caseFalse, stateVarName),
        stateVarName
      };
    }
  }

  return null;
}

// Perform multiple passes until all while-switch blocks are eliminated
let pass = 0;
let totalReplaced = 0;
while (pass < 10) {
  pass++;
  let replacedInPass = 0;
  traverse(ast, {
    WhileStatement(path) {
      const prev = path.getPrevSibling();
      const deobf = tryDeobfuscateWhileSwitch(path, prev);
      if (deobf) {
        if (deobf.type === "for") {
          // Replace while with ForStatement
          const forStmt = t.forStatement(
            deobf.init,
            deobf.test,
            deobf.update,
            deobf.body
          );
          // Check if parent is a block containing "let loopVar"
          path.replaceWith(forStmt);
          prev.remove();
          replacedInPass++;
          totalReplaced++;
        } else if (deobf.type === "if") {
          const consBlock = t.blockStatement(deobf.consequent);
          const altBlock = deobf.alternate && deobf.alternate.length > 0 ? t.blockStatement(deobf.alternate) : null;
          const ifStmt = t.ifStatement(deobf.test, consBlock, altBlock);
          path.replaceWith(ifStmt);
          prev.remove();
          replacedInPass++;
          totalReplaced++;
        }
      }
    }
  });
  console.log(`Pass ${pass}: replaced ${replacedInPass} blocks`);
  if (replacedInPass === 0) break;
}

// Clean up single statement blocks: if (cond) { return null; } etc.
// Clean up { let loopVar; for (loopVar = 0; ...) ... }
traverse(ast, {
  BlockStatement(path) {
    if (path.node.body.length === 2) {
      const first = path.node.body[0];
      const second = path.node.body[1];
      if (t.isVariableDeclaration(first) && first.declarations.length === 1 && !first.declarations[0].init) {
        const varName = first.declarations[0].id.name;
        if (t.isForStatement(second) && t.isAssignmentExpression(second.init) && t.isIdentifier(second.init.left, { name: varName })) {
          // Merge: for (let varName = init; ...)
          second.init = t.variableDeclaration(first.kind, [
            t.variableDeclarator(t.identifier(varName), second.init.right)
          ]);
          path.replaceWith(second);
        }
      }
    }
  },
  MemberExpression(path) {
    if (t.isStringLiteral(path.node.property) && path.node.computed) {
      const propName = path.node.property.value;
      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propName)) {
        path.node.computed = false;
        path.node.property = t.identifier(propName);
      }
    }
  }
});

const unflattenedCode = generate(ast, { retainLines: false, compact: false }).code;
fs.writeFileSync("tmp/body_unflattened.js", unflattenedCode);
console.log(`Total replaced: ${totalReplaced}. Saved tmp/body_unflattened.js, length: ${unflattenedCode.length}`);
