const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync("tmp/body_replaced_strings.js", "utf8");
console.log("Parsing code...");
const ast = parser.parse(code, {
  sourceType: "script",
  allowReturnOutsideFunction: true,
});
console.log("AST parsed successfully!");
