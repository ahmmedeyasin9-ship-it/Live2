const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_unflattened.js", "utf8");
const ast = parser.parse(code, { sourceType: "script" });

// Find all string literals that look like URLs or endpoints
const urls = new Set();
const storageKeys = new Set();
const domSelectors = new Set();

traverse(ast, {
  StringLiteral(path) {
    const val = path.node.value;
    if (val.startsWith("http://") || val.startsWith("https://")) {
      urls.add(val);
    }
    if (path.parentPath.isCallExpression()) {
      const callee = path.parentPath.get("callee");
      if (callee.isMemberExpression()) {
        const obj = callee.node.object.name;
        const prop = callee.node.property.name;
        if (obj === "localStorage" && (prop === "getItem" || prop === "setItem" || prop === "removeItem")) {
          storageKeys.add(val);
        }
        if (prop === "querySelector" || prop === "querySelectorAll" || prop === "closest") {
          domSelectors.add(val);
        }
      }
    }
  }
});

console.log("URLs:", Array.from(urls));
console.log("\nStorage keys:", Array.from(storageKeys));
console.log("\nDOM Selectors:", Array.from(domSelectors));
