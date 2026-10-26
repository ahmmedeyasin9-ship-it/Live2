const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

let remaining = 0;
traverse(ast, {
  WhileStatement(path) {
    if (t.isSwitchStatement(path.node.body)) {
      remaining++;
      console.log(`\n--- Remaining WhileSwitch #${remaining} ---`);
      console.log(generate(path.parentPath.node).code);
    }
  }
});
console.log("\nTotal remaining while-switches:", remaining);
