const fs = require("fs");
const content = fs.readFileSync("public/assets/aistudio/Paste_October_26__2026_-_10_44AM_5fdb8bc3", "utf8");
const header = content.match(/^(let t12hb;!function\(\)\{[\s\S]*?\}\(\);)/)[1];

const script = `
const fs = require("fs");
${header}

const accessors = ["Nikgb", "Jdfgb", "Zv2fb", "xQRdb", "tNjeb", "pIeeb", "Naceb", "lFGeb"];
const results = {};
for (const acc of accessors) {
  results[acc] = {};
  for (let i = 0; i <= 900; i++) {
    try {
      const val = t12hb[acc](i);
      results[acc][i] = val;
    } catch (e) {
    }
  }
}
fs.writeFileSync("tmp/t12hb_dump.json", JSON.stringify(results, null, 2));
console.log("Dumped results! Counts:", Object.fromEntries(Object.entries(results).map(([k, v]) => [k, Object.keys(v).length])));

const stateCalls = {};
for (let acc of accessors) {
  for (let i = 0; i <= 900; i++) {
    try {
      const fnName = t12hb[acc](i);
      if (typeof t12hb[fnName] === "function") {
        stateCalls[\`t12hb.\${acc}(\${i})\`] = { fn: fnName, val: t12hb[fnName]() };
      }
    } catch (e) {}
  }
}
fs.writeFileSync("tmp/state_calls.json", JSON.stringify(stateCalls, null, 2));
console.log("State calls count:", Object.keys(stateCalls).length);
`;

fs.writeFileSync("tmp/dump_all.cjs", script);
require("child_process").execSync("node tmp/dump_all.cjs", { stdio: "inherit" });
