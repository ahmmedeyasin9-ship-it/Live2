const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Collect all unique non-ASCII identifiers
const nonAsciiIds = new Set();
traverse(ast, {
  Identifier(path) {
    if (/[^\x00-\x7F]/.test(path.node.name)) {
      nonAsciiIds.add(path.node.name);
    }
  }
});

console.log("Total non-ASCII identifiers:", nonAsciiIds.size);
fs.writeFileSync("tmp/non_ascii_ids.json", JSON.stringify(Array.from(nonAsciiIds), null, 2));
