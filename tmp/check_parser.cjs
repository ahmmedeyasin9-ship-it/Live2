const fs = require("fs");
const acorn = require("acorn"); // check if acorn or babel is available
console.log("Testing environment modules...");
try {
  console.log("Babel available?", !!require("@babel/parser"));
} catch(e) {
  console.log("Babel not available");
}
