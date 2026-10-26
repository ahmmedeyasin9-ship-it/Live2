const fs = require("fs");
const parser = require("@babel/parser");
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });
const body = ast.program.body[1].expression.callee.body.body;

for (let i = 42; i < 70; i++) {
  const stmt = body[i];
  if (t.isFunctionDeclaration(stmt)) {
    console.log(`\n=== [${i}] ${stmt.id.name} ===`);
    console.log(generate(stmt).code.slice(0, 350));
  }
}
