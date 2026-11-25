// Describe Your Ex in One Word — entry program.
//
// The judge compares single words head to head. After weighing
// candidates against the published brief (verdict first, then comic
// punch, surprise, craft, recognition), the chosen word is
// "Placeholder": the ex as someone who only ever filled a gap until
// the real thing arrived — a demotion to a temporary role, instantly
// readable, surprising, and true for anyone who has been one.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The verdict: one word, no punctuation, no explanation attached.
const WORD = "Placeholder";

// Gate check, mirroring the sealed scorer: 1-111 characters, not
// only white space, exactly one word, no whitespace inside.
if (!/^\S{1,111}$/.test(WORD)) {
  throw new Error("entry word fails the gate: must be one word, 1-111 chars");
}

const dir = dirname(OUTPUT_PATH);
mkdirSync(dir, { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
