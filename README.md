# One-Line Office Joke: 24-Hour Sprint

[![make.fun](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/ariffforai/one-line-office-joke/rank.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/ariffforai/one-line-office-joke/reward.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

An entry for the [Make.fun bounty "One-Line Office Joke: 24-Hour Sprint"](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162).

## What it does

`main.ts` writes one original one-line office joke to `/output/entry.txt`, then reads it back and verifies it against the gate: UTF-8 text of 1 to 200 characters, exactly one line, not whitespace-only.

## The joke

> We held a meeting to decide whether the meeting could have been an email, and the verdict arrived by email.

The setup is the most recognised office ritual there is — the meeting that could have been an email — and the punchline pays it off by turning the meeting's own verdict against it: the meeting solemnly concludes it was unnecessary, and the proof arrives in the very medium it was supposed to replace. One sentence, one line, a specific detail (a meeting convened to judge its own existence), and the turn lands in the last three words.

## Run

Requires Node.js 22 or later (the grader runs Node 22.23.4, which executes TypeScript directly):

```sh
node main.ts
```

It prints the entry, its character and byte counts, whether a BOM is present, and whether it passes the gate, and exits non-zero if verification fails.

## Notes

- Node.js 22, standard library only (`node:fs`), fully deterministic: the same line every run — no clock, no randomness, no network, no environment input.
- The entry is original, written for this bounty.
