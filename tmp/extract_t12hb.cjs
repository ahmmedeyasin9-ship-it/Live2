const fs = require("fs");
const content = fs.readFileSync("public/assets/aistudio/Paste_October_26__2026_-_10_44AM_5fdb8bc3", "utf8");
const header = content.match(/^(let t12hb;!function\(\)\{[\s\S]*?\}\(\);)/)[1];

const testScript = `
${header}
console.log("t12hb defined?", typeof t12hb);
if (typeof t12hb !== "undefined") {
  console.log("t12hb methods:", Object.keys(t12hb));
  // dump sample
  for (let k of Object.keys(t12hb)) {
    console.log(k, typeof t12hb[k]);
  }
}
`;
fs.writeFileSync("tmp/test_orig.cjs", testScript);
try {
  const out = require("child_process").execSync("node tmp/test_orig.cjs").toString();
  console.log("Output:\n", out);
} catch (e) {
  console.error("Exec error:", e.stdout ? e.stdout.toString() : e.message);
}
