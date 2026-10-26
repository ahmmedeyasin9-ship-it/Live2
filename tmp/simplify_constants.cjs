const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

// Let us write an unflattening algorithm and test it
function unflatten(bodyCode) {
  const ast = parser.parse(bodyCode, { sourceType: "script" });

  // 1. Simplify static expressions
  traverse(ast, {
    NumericLiteral(path) {
      delete path.node.extra; // converts 0o42 to 34 etc.
    },
    BinaryExpression(path) {
      const res = path.evaluate();
      if (res.confident) {
        if (typeof res.value === "number") path.replaceWith(t.numericLiteral(res.value));
        else if (typeof res.value === "boolean") path.replaceWith(t.booleanLiteral(res.value));
        else if (typeof res.value === "string") path.replaceWith(t.stringLiteral(res.value));
      }
    },
    UnaryExpression(path) {
      const res = path.evaluate();
      if (res.confident) {
        if (typeof res.value === "boolean") path.replaceWith(t.booleanLiteral(res.value));
        else if (typeof res.value === "number") path.replaceWith(t.numericLiteral(res.value));
      }
    }
  });

  return generate(ast).code;
}

const code = fs.readFileSync("tmp/body_replaced_strings.js", "utf8");
const simplified = unflatten(code);
fs.writeFileSync("tmp/body_simplified_constants.js", simplified);
console.log("Simplified constants saved, length:", simplified.length);
