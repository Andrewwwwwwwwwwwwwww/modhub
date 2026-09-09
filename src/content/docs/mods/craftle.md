---
title: Craftle
description: Wordle for crafting recipes — ten guesses to crack one secret recipe, the same one for everyone each day.
---

**Craftle** is the daily crafting-recipe guessing game, played on a real 3x3 grid inside the game. Every day there is one secret shaped recipe, and it's the **same recipe for everyone**. Place ingredients from an 18-item palette, press **Craft**, and every cell you filled comes back colour-coded, Wordle-style. Ten guesses to work it out.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Install on **both client and server**. In singleplayer it just works. Players without the mod can't open the board; the command tells them what's missing, and nothing else breaks for them.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/craftle)
- [GitHub releases](https://github.com/Andrewwwwwwwwwwwwwww/craftle/releases)

## How to play

Run `/craftle`. Pick an ingredient from the palette, click the grid to place it, right-click a cell to clear it, then press **Craft**.

| Result | Meaning |
| --- | --- |
| **Green cell** | Right ingredient, and it's in the right cell |
| **Orange cell** | That ingredient is in the recipe, but it belongs somewhere else |
| **Grey cell** | That ingredient isn't in the recipe, or all its copies are already accounted for |

Empty cells give nothing away, and recipes smaller than 3x3 are always anchored to the **top-left** of the grid. Duplicates work the way Wordle does: an ingredient only earns orange while unclaimed copies of it remain, so placing three sticks when the recipe wants one tells you exactly that.

The output slot shows what your current arrangement would actually craft. Your last attempt stays on the grid, so the next guess can be a one-cell tweak, and every attempt stays on screen beside the board for cross-referencing.

## Commands

| Command | What it does |
| --- | --- |
| `/craftle` | Today's daily puzzle (or your finished board, once done) |
| `/craftle random` | Practice mode, unlimited puzzles |
| `/craftle random new` | Abandon the current practice puzzle, deal a fresh one |

## Features

- **A global daily.** The puzzle is derived from the calendar day, so every server on the same version has the same daily. It resets at **midnight US Eastern**, and the zone follows daylight saving.
- **The palette carries what you've learned.** Each ingredient keeps the best colour it has earned across your guesses, so you can see what's confirmed and what's ruled out at a glance.
- **Chat announcements** when someone solves the daily or runs out of guesses, without giving away the answer.
- **Streaks and stats.** Played, won, current streak and best streak, shown on the board when you finish.
- **Practice mode** that never deals you today's daily, so it can't spoil it.
- **High contrast mode** for colourblind players, swapping green and orange for blue and orange.
- **Nothing to cheat with.** The server holds the answer and grades your guesses. The answer never reaches your client until the game is over.
- **The same puzzle everywhere.** The pool is 127 vanilla recipes baked into the mod, not read from whatever a server happens to have loaded, so datapacks and other mods can't hand your server a different daily.
- **Dealt like a deck.** Every puzzle comes up exactly once per 127-day cycle, never two days running.
- **Saves your progress.** Log out mid-puzzle and pick up exactly where you left off.
- **Login nudge.** A clickable `/craftle` in chat when a new daily is waiting.

## The other daily puzzles

- **[Connectle](/modhub/mods/connectle/)** is Connections with Minecraft items.
- **[CrossCraft](/modhub/mods/crosscraft/)** is a mini crossword where every answer is something from the game.

All three share one daily rhythm: the same puzzle for everyone, resetting at midnight US Eastern.

## Credits

Craftle is an independent fan recreation, built for in-game play, of the browser game [Minecraftle](https://minecraftle.zachmanson.com) by Tamura Boog, Zach Manson, Harrison Oates and Ivan Sossa Gongora. All credit for the game's concept and rules goes to them. Not affiliated with Mojang.
