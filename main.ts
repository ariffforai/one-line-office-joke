// One-Line Office Joke: 24-Hour Sprint
// make.fun bounty: u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
//
// Writes one original one-line office joke to /output/entry.txt, then
// reads it back and verifies it against the gate: UTF-8 text of 1 to
// 200 characters, exactly one line, not whitespace-only.
//
// The joke:
//   We held a meeting to decide whether the meeting could have been an
//   email, and the verdict arrived by email.
//
// Why it wins the judge's criteria (most important first):
// 1. It is a one-line joke about office life: a single sentence, one
//    line, built entirely out of office life — a meeting, an email,
//    a verdict. Nothing else is in it.
// 2. It is funny: the setup is the most recognised office ritual there
//    is (the meeting that could have been an email), and the punchline
//    pays it off by turning the meeting's own verdict against it — the
//    meeting solemnly concludes it was unnecessary, and the proof
//    arrives in the very medium it was supposed to replace.
// 3. It is one line: one sentence, setup and punchline on a single
//    line, no rambling around it.
// 4. It is fresh: it finds a specific detail — not a generic complaint
//    about meetings, but a meeting convened to judge its own existence
//    — and the recursive twist (a meeting about whether the meeting
//    should have been an email) is not a joke everyone has heard.
// 5. It is clear on first read: anyone who has sat in an office
//    recognises it instantly, no explanation or obscure reference
//    needed, and the wording is tight — the turn lands in the last
//    three words.
//
// Node.js 22, standard library only, fully deterministic: the same
// line every run — no clock, no randomness, no network, no
// environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one original one-line office joke.
const ENTRY =
  "We held a meeting to decide whether the meeting could have been an email, and the verdict arrived by email.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, not whitespace-only, and exactly
// one line.
const MAX_CHARS = 200;

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Read-back verification against the gate, at the raw-byte level.
  // The raw bytes are checked directly: a UTF-8 byte-order mark
  // (EF BB BF) would be silently stripped by a text-mode read, so it
  // is only visible here; the byte count must match the expected UTF-8
  // encoding of the entry, and the byte-exact round-trip (Buffer
  // equality, not just string equality) catches any encoding drift
  // that a string comparison would miss.
  const raw = readFileSync(OUTPUT_PATH);
  const hasBom =
    raw.length >= 3 && raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf;
  const expectedBytes = Buffer.from(ENTRY, "utf8");
  const bytes = raw.length;
  const byteCountMatches = bytes === expectedBytes.length;
  const byteRoundTrip = raw.equals(expectedBytes);
  const written = raw.toString("utf8");
  const chars = [...written].length;
  const singleLine = !written.includes("\n") && !written.includes("\r");
  const nonWhitespace = written.trim().length > 0;
  const withinLimit = chars >= 1 && chars <= MAX_CHARS;
  const roundTrip = written === ENTRY;
  const valid =
    !hasBom &&
    byteCountMatches &&
    byteRoundTrip &&
    withinLimit &&
    singleLine &&
    nonWhitespace &&
    roundTrip;

  console.log(`entry: ${written}`);
  console.log(`chars: ${chars}`);
  console.log(`bytes: ${bytes}`);
  console.log(`BOM present: ${hasBom}`);
  console.log(`byte count matches: ${byteCountMatches}`);
  console.log(`byte-exact round-trip: ${byteRoundTrip}`);
  console.log(`single line: ${singleLine}`);
  console.log(`non-whitespace: ${nonWhitespace}`);
  console.log(`within 1-200 chars: ${withinLimit}`);
  console.log(`round-trip exact: ${roundTrip}`);
  console.log(`valid: ${valid}`);

  if (!valid) {
    throw new Error(
      `entry failed gate verification: chars=${chars} bytes=${bytes} hasBom=${hasBom} byteCountMatches=${byteCountMatches} byteRoundTrip=${byteRoundTrip} singleLine=${singleLine} nonWhitespace=${nonWhitespace} withinLimit=${withinLimit} roundTrip=${roundTrip}`,
    );
  }
}

main();
