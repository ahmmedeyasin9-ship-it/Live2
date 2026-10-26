const fs = require("fs");
const t12hbDump = JSON.parse(fs.readFileSync("tmp/t12hb_dump.json", "utf8"));
const stateCalls = JSON.parse(fs.readFileSync("tmp/state_calls.json", "utf8"));
const body = fs.readFileSync("tmp/body.js", "utf8");

// Check all t12hb patterns in body
// 1. t12hb[t12hb.<acc>(<num>)]()
// 2. t12hb.<acc>(<num>)

let replaced = body;

// Replace t12hb[t12hb.<acc>(<num>)]()
replaced = replaced.replace(/t12hb\[t12hb\.(\w+)\((\d+)\)\]\(\)/g, (match, acc, num) => {
  const key = `t12hb.${acc}(${num})`;
  if (stateCalls[key]) {
    return stateCalls[key].val; // e.g., 0o42, number
  }
  // If not in stateCalls, evaluate:
  const fnName = t12hbDump[acc]?.[num];
  return `/* ${match} */`;
});

// Replace t12hb.<acc>(<num>)
replaced = replaced.replace(/t12hb\.(\w+)\((\d+)\)/g, (match, acc, num) => {
  const val = t12hbDump[acc]?.[num];
  if (val !== undefined) {
    return JSON.stringify(val);
  }
  return match;
});

// Also evaluate simple arithmetic like (0O264353757%8), (0o202506-66871), (0x21786%3), etc.
// But first let us see how much t12hb remains:
const remainingT12hb = replaced.match(/t12hb/g);
console.log("Remaining t12hb occurrences:", remainingT12hb ? remainingT12hb.length : 0);

fs.writeFileSync("tmp/body_replaced_strings.js", replaced);
console.log("Saved tmp/body_replaced_strings.js, length:", replaced.length);
