import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const required = [
  "卡塔尔", "瑞士", "巴西", "摩洛哥", "海地", "苏格兰",
  "澳大利亚", "土耳其", "加拿大 1-1 波黑", "美国 4-1 巴拉圭",
  "墨西哥 2-0 南非", "韩国 2-1 捷克", "预测全中",
  "data-evidence-filter", "data-prob-view", "homeBoost", "awayBoost",
  "搜索过程与证据链", "五维分析", "已完场复盘", "大胆预测"
];

const missing = required.filter((text) => !html.includes(text));
if (missing.length) {
  throw new Error(`页面缺少必要内容: ${missing.join(", ")}`);
}

if (html.includes("锟斤拷") || html.includes("馃")) {
  throw new Error("页面包含乱码");
}

const probabilitySets = [...html.matchAll(/probs:\s*\[(\d+),\s*(\d+),\s*(\d+)\]/g)];
if (probabilitySets.length !== 4) {
  throw new Error(`应有4组胜平负概率，实际为${probabilitySets.length}组`);
}

const boldScores = [...html.matchAll(/boldScore:"(\d+)\s*:\s*(\d+)"/g)];
if (boldScores.length !== 4) {
  throw new Error(`应有4个大胆预测比分，实际为${boldScores.length}个`);
}
for (const [, a, b, c] of probabilitySets) {
  if (+a + +b + +c !== 100) throw new Error(`概率总和不为100: ${a}/${b}/${c}`);
}

console.log("页面静态契约检查通过");
