// Fortune in a Pot — make.fun entry.
// Writes one line (at most 120 characters) to /output/entry.txt: a
// kind, funny fortune for a houseplant. This week you outgrow your
// pot, and your keeper buys you the big one — the one with the
// drainage hole.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "This week you outgrow your pot, and your keeper buys you the big one — the one with the drainage hole.";

// Gate guard: the entry must be 1–120 characters and not only whitespace.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
