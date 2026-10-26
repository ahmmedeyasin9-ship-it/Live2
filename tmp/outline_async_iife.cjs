const fs = require("fs");
const parser = require("@babel/parser");
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

const asyncIIFE = ast.program.body[1].expression.callee;
console.log("Async IIFE statements:");
asyncIIFE.body.body.forEach((stmt, idx) => {
  let desc = stmt.type;
  if (t.isFunctionDeclaration(stmt)) {
    desc += ` ${stmt.id.name}(${stmt.params.map(p => generate(p).code).join(", ")})`;
  } else if (t.isVariableDeclaration(stmt)) {
    desc += ` ${stmt.kind} ${stmt.declarations.map(d => generate(d.id).code + (d.init ? " = " + generate(d.init).code.slice(0, 40) : "")).join(", ")}`;
  } else if (t.isExpressionStatement(stmt)) {
    desc += ` ${generate(stmt.expression).code.slice(0, 60)}`;
  }
  console.log(`${idx}: ${desc}`);
});
