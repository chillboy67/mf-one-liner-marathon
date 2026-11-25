import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I told my smart speaker I was lonely. It played 'Everybody Hurts', ordered me a self-help book and a weighted blanket, then signed me up for a subscription I cannot cancel. At least something listens.");
