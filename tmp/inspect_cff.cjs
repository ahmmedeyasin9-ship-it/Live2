const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_replaced_strings.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

let count = 0;
traverse(ast, {
  WhileStatement(path) {
    if (t.isSwitchStatement(path.node.body)) {
      count++;
      if (count <= 10) {
        console.log(`\n--- Block ${count} ---`);
        console.log("While test:", generate(path.node.test).code);
        console.log("Switch discriminant:", generate(path.node.body.discriminant).code);
        console.log("Cases count:", path.node.body.cases.length);
        for (const c of path.node.body.cases) {
          console.log("  case", c.test ? generate(c.test).code : "default", ":", c.consequent.map(s => generate(s).code).join("; "));
        }
      }
    }
  }
});
console.log("\nTotal while-switch statements:", count);
