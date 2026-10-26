const fs = require("fs");
const content = fs.readFileSync("public/assets/aistudio/Paste_October_26__2026_-_10_44AM_5fdb8bc3", "utf8");

// The eval is:
// let t12hb;!function(){const kujub=Array.prototype.slice.call(arguments);return eval("...")}();
// If we run the EXACT header WITHOUT modifying k6mA:
// In the original header:
// let t12hb;
// !function(){... return eval("(function k6mA(Tlus){... try{let Pgps=eval(nJms); return Pgps.apply(null, kujub);}...})")}()
// Note: "let Pgps=eval(nJms); return Pgps.apply(null, kujub);"
// What is kujub? kujub = Array.prototype.slice.call(arguments), which is []!
// What is Pgps? Pgps is the result of eval(nJms)!
// What does Pgps.apply(null, kujub) return? It calls Pgps() and returns the result!
// BUT where does t12hb get assigned?
// Does eval(nJms) assign t12hb = ...? Or does the wrapper assign t12hb?
// Wait! In the original code:
// let t12hb;!function(){...}()
// It doesn't do "t12hb = !function()..."! It does "let t12hb;!function()..."!
// That means inside nJms, it does "t12hb = ..."!

// If we run the exact header in a node script, let us see if t12hb gets defined!
const header = content.match(/^(let t12hb;!function\(\)\{[\s\S]*?\}\(\);)/)[1];
const testScript = `
${header}
console.log("t12hb defined?", typeof t12hb);
if (typeof t12hb !== "undefined") {
  console.log("t12hb properties:", Object.keys(t12hb));
}
`;
fs.writeFileSync("/tmp/test_orig.js", testScript);
try {
  const out = require("child_process").execSync("node /tmp/test_orig.js").toString();
  console.log("Output:\n", out);
} catch (e) {
  console.error("Exec error:", e.stdout ? e.stdout.toString() : e.message);
}
