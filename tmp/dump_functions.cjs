const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Map function names to their body
const fns = {};
traverse(ast, {
  FunctionDeclaration(path) {
    const name = path.node.id ? path.node.id.name : "anon";
    fns[name] = generate(path.node).code;
  }
});

let analysis = "";
for (const [name, fnCode] of Object.entries(fns)) {
  analysis += `\n\n// ==================== FUNCTION ${name} ====================\n` + fnCode;
}
fs.writeFileSync("tmp/all_functions_clean.js", analysis);
console.log("Functions dumped to tmp/all_functions_clean.js, total length:", analysis.length);
