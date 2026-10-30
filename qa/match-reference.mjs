// Reference implementation of the ask-box matcher, for QA only.
//
// The site's own matcher is built in Emergent from a spoken description of the
// same rules (build-log/briefs.md, step 7). This file exists so the intents data
// can be tested before it is pasted into the site, and so the live site can be
// compared against a known-good answer for every test utterance.
//
//   node qa/match-reference.mjs            run the test set in content/intents.json
//   node qa/match-reference.mjs "any text" score one utterance

import { readFileSync } from "node:fs";

const data = JSON.parse(
  readFileSync(new URL("../content/intents.json", import.meta.url), "utf8"),
);
const stop = new Set(data.stopwords);

// Longest aliases first, so "skip app" wins over "skip".
const aliases = Object.entries(data.aliases).sort((a, b) => b[0].length - a[0].length);

export function normalise(text) {
  let t = ` ${text.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9\s]/g, " ")} `;
  t = t.replace(/\s+/g, " ");
  for (const [from, to] of aliases) {
    t = t.replaceAll(` ${from} `, ` ${to} `);
  }
  return t.trim();
}

const words = (t) => normalise(t).split(" ").filter((w) => w && !stop.has(w));

function overlap(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  const shared = [...A].filter((w) => B.has(w)).length;
  const all = new Set([...A, ...B]).size;
  return all === 0 ? 0 : shared / all;
}

export function match(text) {
  const norm = ` ${normalise(text)} `;
  const said = words(text);
  const scored = data.intents.map((intent) => {
    let phrase = 0;
    for (const p of intent.phrases) {
      const np = normalise(p);
      if (norm.includes(` ${np} `)) {
        phrase = 1;
        break;
      }
      phrase = Math.max(phrase, overlap(said, words(p)));
    }
    const saidSet = new Set(said);
    const hits = intent.keywords.filter((k) => saidSet.has(normalise(k))).length;
    const keyword = Math.min(1, hits / 2);
    return { id: intent.id, score: 0.6 * phrase + 0.4 * keyword };
  });
  scored.sort((a, b) => b.score - a.score);
  const [top] = scored;
  const alternatives = scored.slice(0, 3);
  if (top.score < data.noMatchBelow) return { id: null, score: top.score, state: "no-match", alternatives };
  if (top.score < data.threshold) return { id: null, score: top.score, state: "low-confidence", alternatives };
  return { id: top.id, score: top.score, state: "matched", alternatives };
}

if (process.argv[2]) {
  console.log(JSON.stringify(match(process.argv.slice(2).join(" ")), null, 2));
} else {
  let pass = 0;
  for (const t of data.tests) {
    const r = match(t.say);
    // A low-confidence answer still passes when the right intent is offered as a chip.
    const offered = r.alternatives.map((a) => a.id);
    const ok =
      t.expect === null
        ? r.id === null && r.state !== "matched"
        : r.id === t.expect || (r.state === "low-confidence" && offered.includes(t.expect));
    if (ok) pass++;
    const shown = r.id ?? `${r.state} [${offered.join(", ")}]`;
    console.log(`${ok ? "PASS" : "FAIL"}  ${t.say.padEnd(48)} → ${shown} (${r.score.toFixed(2)})${ok ? "" : `  expected ${t.expect}`}`);
  }
  const pct = Math.round((100 * pass) / data.tests.length);
  console.log(`\n${pass}/${data.tests.length} passed (${pct}%). Target: 90% or more.`);
  process.exitCode = pct >= 90 ? 0 : 1;
}
