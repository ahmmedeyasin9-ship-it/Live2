const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Let us find all top-level functions and constants inside the async IIFE
const functionSummaries = [];

traverse(ast, {
  FunctionDeclaration(path) {
    const name = path.node.id ? path.node.id.name : "anonymous";
    const params = path.node.params.map(p => generate(p).code).join(", ");
    const bodyCode = generate(path.node).code;
    functionSummaries.push({
      name,
      params,
      length: bodyCode.length,
      snippet: bodyCode.slice(0, 150)
    });
  }
});

console.log("Functions found:", functionSummaries.length);
for (const f of functionSummaries) {
  console.log(`- ${f.name}(${f.params}) [${f.length} chars]`);
}
