// Writes this entry's one-liner out to entry.txt for the make.fun run.
// The script is deliberately tiny: make the folder, drop the line in, done.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryLine =
  "I told my smart speaker I was lonely. It played 'Everybody Hurts', ordered me a self-help book and a weighted blanket, then signed me up for a subscription I cannot cancel. At least something listens.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryLine);
console.log("entry written to " + join(outDir, "entry.txt"));
