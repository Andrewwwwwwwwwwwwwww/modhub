---
title: Connectle
description: Connections with Minecraft items — sixteen items, four hidden groups of four, the same board for everyone each day.
---

**Connectle** recreates the New York Times' *Connections* as a native in-game screen, with items in place of words. Every day, everyone gets the same board: **sixteen items** hiding **four groups of four**. Select four tiles you think belong together and press **Submit**. Find all four groups before you make **four mistakes**.

- 🟨 **Yellow** is the straightforward group
- 🟩 **Green**
- 🟦 **Blue**
- 🟪 **Purple** is the tricky one: wordplay, trivia, or an angle you didn't see coming

Most boards carry a red herring or two, an item that fits two groups until the titles are known, so the trick is to find the set that only works one way.

## Part of MCTGames

Connectle now ships inside **[MCTGames](/modhub/mods/mctgames/)**, one mod with all three daily puzzles and a hub to pick from. The rules, boards and daily sequence on this page are unchanged in the bundle; the standalone mod is no longer updated. Remove the standalone jar before installing the bundle.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Install on **both client and server**. In singleplayer it just works. Players without the mod can't open the board, and nothing else breaks for them.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/connectle)

## How to play

Run `/connectle`. Click a tile to select it (up to four), click again or right-click to deselect, then press **Submit**.

| Result | Meaning |
| --- | --- |
| **Solved** | Those four belong together. The group collapses into a coloured banner with its theme |
| **One away!** | Three of the four were right. It still costs a life |
| **Miss** | Costs a life. Four misses and the remaining groups are revealed |

Every group has to be submitted, the last one included. **Shuffle** rearranges the unsolved tiles, **Clear** empties your selection, and repeating a guess is refused for free. Every guess you submit stays on screen beside the board, coloured by tier once its group is known, so by the end the flanks are your results grid with the items drawn in.

## Commands

| Command | What it does |
| --- | --- |
| `/connectle` | Today's daily puzzle (or your finished board, once done) |
| `/connectle random` | Practice mode, unlimited boards |
| `/connectle random new` | Abandon the current practice board, deal a fresh one |

## Features

- **A global daily** that resets at **midnight US Eastern**. Every server on the same version has the same board, and everyone sees the same starting layout.
- **Four tiers.** Groups climb from an obvious yellow to a purple built on wordplay or trivia, shown as coloured banners as you solve them.
- **Streaks and stats.** Played, won, current streak, best streak and flawless solves.
- **Share your run.** After the game, **Share** copies a grid of coloured squares to your clipboard, one row per guess, ready to paste into chat or Discord.
- **Practice mode** that never deals you today's daily, so it can't spoil it.
- **High contrast mode** with a colourblind-safe palette and numbered banners.
- **Nothing to cheat with.** The server holds the group memberships and grades your guesses. Your client only learns which tiles go together once a group is solved or the game is over.
- **Hand-written boards**, every one built from vanilla items, dealt like a deck so none repeats within a cycle.
- **Saves your progress.** Log out mid-board and pick up where you left off.
- **Login nudge.** A clickable `/connectle` in chat when a new daily is waiting.

## The other daily puzzles

- **[Craftle](/modhub/mods/craftle/)** is Wordle for crafting recipes.
- **[CrossCraft](/modhub/mods/crosscraft/)** is a mini crossword where every answer is something from the game.

All three share one daily rhythm: the same puzzle for everyone, resetting at midnight US Eastern.

## Credits

Connectle is an independent fan recreation of [Connections](https://www.nytimes.com/games/connections) from The New York Times. All credit for the game's concept and rules goes to them. Not affiliated with or endorsed by the NYT or Mojang.
