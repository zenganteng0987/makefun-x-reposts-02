// x-reposts-02 entry: copies POSTS.json from the bot dir to the output dir.
// Node 22, standard library only. No network access.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The grader reads POSTS.json from the output dir, so the copy is the whole job.
try {
  mkdirSync(outputDir, { recursive: true });
  // The copy must preserve POSTS.json exactly as submitted.
  copyFileSync(join(botDir, "POSTS.json"), join(outputDir, "POSTS.json"));
} catch (err) {
  console.error(`Failed to copy POSTS.json: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
