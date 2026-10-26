const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_replaced_strings.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Evaluate numeric expressions first
traverse(ast, {
  NumericLiteral(path) {
    delete path.node.extra;
  },
  BinaryExpression(path) {
    const res = path.evaluate();
    if (res.confident && typeof res.value === "number") {
      path.replaceWith(t.numericLiteral(res.value));
    }
  }
});

let threeCaseCount = 0;
traverse(ast, {
  WhileStatement(path) {
    if (t.isSwitchStatement(path.node.body) && path.node.body.cases.length === 3) {
      threeCaseCount++;
      if (threeCaseCount <= 5) {
        console.log(`\n=== 3-Case Block ${threeCaseCount} ===`);
        console.log("While:", generate(path.node.test).code);
        for (const c of path.node.body.cases) {
          console.log("  case", generate(c.test).code, ":");
          for (const s of c.consequent) {
            console.log("    ", generate(s).code);
          }
        }
      }
    }
  }
});
