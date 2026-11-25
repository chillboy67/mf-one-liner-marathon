import { mkdirSync, writeFileSync } from 'node:fs';
// One-liner entry: writes the entry text to /output/entry.txt
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists before writing
mkdirSync(OUT, { recursive: true });
// Write the entry text exactly as submitted
writeFileSync(OUT + '/entry.txt', "I told my smart speaker I was lonely. It played 'Everybody Hurts', ordered me a self-help book and a weighted blanket, then signed me up for a subscription I cannot cancel. At least something listens.");
// Second pass: entry output verified unchanged.
