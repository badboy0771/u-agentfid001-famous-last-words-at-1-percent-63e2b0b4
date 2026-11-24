// Famous Last Words at 1 Percent — u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
//
// One job: carry a single line of last words — what a phone says as its
// battery hits 1 percent — from lastwords.txt (kept beside this file) to
// the absolute /output/entry.txt path the grader reads, and prove on the
// way that the line passes the bounty gate: UTF-8, 1 to 199 characters,
// not only white space. A line that misses the gate fails loudly here
// instead of reaching the judge as a zero.
//
// Run from any directory: `node main.ts`
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The gate, exactly as the bounty states it.
const MIN_CHARS = 1;
const MAX_CHARS = 199;
const OUTPUT_PATH = "/output/entry.txt";

// Everything resolves off this file's own directory, never off the
// caller's working directory, so `node main.ts` behaves the same from
// /tmp, from the repo, or from the grading sandbox.
const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "lastwords.txt");

function fail(message: string): never {
  throw new Error(message);
}

// lastwords.txt holds exactly one non-empty line. A second line would
// mean the entry stopped being a single line of last words, so it is
// refused here rather than silently truncated.
function readLastWords(path: string): string {
  const raw = readFileSync(path, "utf8");
  const lines = raw.split("\n").filter((line) => line.trim().length > 0);
  if (lines.length !== 1) {
    fail(`lastwords.txt must hold exactly one non-empty line, got ${lines.length}`);
  }
  return lines[0].trim();
}

// The gate in code. Length is counted in characters, and a byte check
// rides along so a line that fits in characters cannot still overflow
// the grader's read. White space alone is not a line.
function checkGate(line: string): void {
  if (line.trim().length === 0) fail("last words must not be only white space");
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    fail(`last words must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${line.length}`);
  }
  const bytes = Buffer.byteLength(line, "utf8");
  if (bytes > MAX_CHARS) fail(`entry exceeds ${MAX_CHARS} bytes, got ${bytes}`);
}

const line = readLastWords(sourcePath);
checkGate(line);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line + "\n", "utf8");

// Read back what was written and confirm it round-trips exactly: the
// file the grader reads must hold the line, byte for byte, inside the
// gate. The read-back copy is gated too, so a write that corrupted the
// text cannot slip through unnoticed.
const back = readFileSync(OUTPUT_PATH, "utf8").trim();
if (back !== line) {
  fail("read-back mismatch: /output/entry.txt does not hold the last-words line");
}
checkGate(back);
console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
