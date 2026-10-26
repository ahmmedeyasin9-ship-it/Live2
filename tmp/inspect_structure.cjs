const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Find the main program structure
console.log("Top level statements in AST:");
for (const stmt of ast.program.body) {
  if (t.isExpressionStatement(stmt) && t.isCallExpression(stmt.expression)) {
    const callee = stmt.expression.callee;
    if (t.isFunctionExpression(callee)) {
      console.log(`IIFE ${callee.id ? callee.id.name : "anon"}, async: ${callee.async}, body statements: ${callee.body.body.length}`);
    }
  } else {
    console.log(stmt.type);
  }
}
