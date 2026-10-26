const fs = require("fs");
const body = fs.readFileSync("tmp/body.js", "utf8");

console.log("Body starts with:", body.slice(0, 500));
console.log("\nBody ends with:", body.slice(-500));
