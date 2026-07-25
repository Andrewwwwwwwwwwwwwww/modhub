---
title: VanillaSkills Casino
description: Slots, blackjack and video poker on the VanillaSkills skill screen, played with Quest Shards.
---

An add-on for **[VanillaSkills](/modhub/mods/vanillaskills/)** that puts a casino on the skill
screen. Bet your Quest Shards on slots, blackjack or video poker.

Fully **server-side** — every screen is drawn and translated by the server, so vanilla clients can
play with nothing installed, and the card and chip artwork is pushed to them automatically on join.

## Requirements

- Minecraft **26.2** or **26.1.2**, **Fabric** with Fabric API
- **VanillaSkills 1.7.6 or newer** (same Minecraft version)

## Getting in

Open the skill tree and click the **Casino** button above your stats head, or run `/casino`.

## The games

### Slots

Three weighted reels. Three of a kind pays big, two of a kind pays small, no match loses the stake.
Symbols run from common Coal up to a rare Diamond jackpot, and the reels spin and stop one at a time.

The machine's payout rate is a single number in the config, and the paytable is scaled automatically
to hit it — so retuning which symbols are rare changes *how wins feel* without changing what the
machine pays out overall.

### Blackjack

Beat the dealer without going over 21. The dealer stands on 17 and blackjack pays 3:2 by default.

- **Double Down** on any two-card hand for exactly one more card
- **Split** two cards of equal value into two hands, each with its own stake
- Split Aces get one card each; a 21 made after splitting is a normal 21, not a blackjack
- You are never forced to stand — only a bust ends your hand

Close the screen mid-hand and it picks up exactly where you left off.

### Video Poker

Five-card draw against a paytable, not against other players. Hold the cards you like, draw
replacements for the rest, and get paid on the final hand. A pair of Jacks or better pays; a royal
flush pays 250x.

## Chips

There are no chip items. Everything is wagered directly in **Quest Shards**, read from and written
back to VanillaSkills — so there is nothing to lose on a crash, nothing to dupe, and nothing to drop.
Your balance is always the single source of truth.

## Luck pays off

Your **luck** attribute — which VanillaSkills' Fortune Finder lane raises — improves your return at
the tables. A fully invested lane is worth about **+2% on winnings**. It is a nudge rather than a
strategy, and it is applied to payouts rather than to the odds, so it can never push a game past
break-even.

## How to play

Every game has a **How to play** book with a clickable contents page — the rules, the payouts, and
for video poker a full explanation of every hand type. All of it is translatable.

## Configuration

Per-world, at `<world>/vscasino/casino.json`. Reload it live with `/casino reload`.

Bet limits, a net-winnings cap, per-game on/off switches, the slots payout rate and per-symbol reel
odds, the entire video poker paytable, the dealer's stand-on total, whether double and split are
offered, bet step sizes, every sound effect, and the reel animation speed are all configurable.

### A note on the economy

Quest Shards convert into Skill Shards, which buy the skill tree — so a casino that pays out too
generously inflates VanillaSkills' whole progression. The defaults are deliberately house-favoured,
and the slots payout rate is clamped below 100% so the machine can never be made to print shards.

## Commands

- `/casino` — open the lobby
- `/casino reload` — reload config and language files (operators)
- `/casino resetcaps` — clear everyone's winnings cap (operators)
- `/casino cards` — preview the card artwork (operators)

## Translations

Every string, including the playing cards and all the rules books, lives in the language file. See
[TRANSLATING.md](https://github.com/Andrewwwwwwwwwwwwwww/vscasino/blob/main/TRANSLATING.md).

## Links

- [GitHub — 26.2](https://github.com/Andrewwwwwwwwwwwwwww/vscasino)
- [GitHub — 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/vscasino-mc26.1.2)
- [VanillaSkills](/modhub/mods/vanillaskills/) — required
