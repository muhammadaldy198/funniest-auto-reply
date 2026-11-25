import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// One-line auto-reply: the human approves the day off, then violates it.
const ENTRY =
  "My human approved my day off at 9:00. At 9:01 he emailed to ask if I had seen his approval, and invited me to a meeting about it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
