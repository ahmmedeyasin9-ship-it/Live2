const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_replaced_strings.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Evaluate any static literal expression (octals, arithmetic on numbers)
traverse(ast, {
  NumericLiteral(path) {
    // Already numeric literal, but normalize formatting
    delete path.node.extra;
  },
  BinaryExpression(path) {
    const evalRes = path.evaluate();
    if (evalRes.confident && typeof evalRes.value === "number") {
      path.replaceWith(t.numericLiteral(evalRes.value));
    }
  },
  UnaryExpression(path) {
    if (path.node.operator === "!" && t.isArrayExpression(path.node.argument) && path.node.argument.elements.length === 0) {
      // ![] -> false
      path.replaceWith(t.booleanLiteral(false));
    }
  }
});

// Check all while-switch blocks
const types = { ifThen: 0, ifElse: 0, forLoop: 0, other: [] };

traverse(ast, {
  WhileStatement(path) {
    if (t.isSwitchStatement(path.node.body)) {
      const cases = path.node.body.cases;
      // print case tests
      const caseVals = cases.map(c => {
        if (!c.test) return "default";
        const evalRes = path.get("body.cases." + cases.indexOf(c) + ".test").evaluate();
        return evalRes.confident ? evalRes.value : generate(c.test).code;
      });
      // console.log("WhileSwitch case values:", caseVals);
    }
  }
});

console.log("AST evaluation complete!");
