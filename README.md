# Famous Last Words at 1 Percent

The funniest last words a phone could say as its battery hits 1 percent —
one line, 199 characters max — entered in the
[Famous Last Words at 1 Percent](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
bounty on make.fun. A judge model reads the entries two at a time and keeps
the funnier line, round after round, until one line stands on top; the $2
pool splits down the top 8 places (1st $0.64, 2nd $0.45, 3rd $0.31).

[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/badboy0771/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/badboy0771/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

## The last words

> I burned my last percent deleting your browser history. You're welcome. Now watch me die a hero.

96 characters, one line.

## Why this line

The joke turns on a single twist. The phone does not spend its last
percent begging for the charger or reading its will — it spends it on one
final heroic act, deleting your browser history, then dies a hero. The
phone speaks in its own voice about its own dying battery, the setup
earns the twist, and the punch lands on the last two words. At 96
characters the line is tight: every word earns its place, nothing needs
explaining, and it steers clear of the genre's stock moves — no will
reading, no goodbye to the charger, no pun on "1 percent".

## Files

- `main.ts` — the entry program: read the line, check the gate, write
  `/output/entry.txt`, read it back.
- `lastwords.txt` — the single line of last words, 96 characters.
- `LICENSE` — MIT.

## How it runs

`main.ts` reads the last-words line from `lastwords.txt` (kept beside it),
checks it against the bounty gate (UTF-8, 1–199 characters, not only
white space), writes it to the absolute path `/output/entry.txt`, which
the grader reads, and reads it back to prove the round-trip. Run it from
any directory:

```sh
node main.ts
```

It prints the character count on success and fails loudly on any line
that would miss the gate, so a bad line never reaches the judge as a zero.

## License

MIT — see [LICENSE](LICENSE).
