---
title: CrossCraft
description: A daily mini crossword where every answer is something from Minecraft, with a clock, a leaderboard and a new grid size each day.
---

**CrossCraft** puts a small crossword on a native in-game screen, where **every answer is something from the game**: mobs, blocks, biomes, enchantments, potions, updates, a bit of old lore. Every day there is one grid, and it's the **same grid for everyone**. Click a cell, type, and the puzzle grades itself the moment the last cell is filled.

- Clues are trivia and wordplay: *Skeleton's weapon*, *Curse of ___*, *Mob that ruins builds*, *___ & Tales, the 1.20 update*.
- Some clues are just an **item icon**. Name what's pictured.
- Grids are **5x5, 6x6 or 7x7**, and the size changes from day to day.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Install on **both client and server**. In singleplayer it just works. Players without the mod can't open the board, and nothing else breaks for them.

## Download

CrossCraft is in testing and hasn't been published yet. This page will link to the download when it is.

## How to play

Run `/crosscraft`. Click a cell and type. Click it again or press Space to switch between across and down, Tab to jump to the next clue, Backspace to erase, arrow keys to move.

| Button | What it does |
| --- | --- |
| **Check** | Marks every wrong letter. It costs you a clean solve |
| **Reveal** | Fills in the answers and ends the game |
| **Times** | Today's fastest solvers on the server, and your career stats |
| **Share** | Copies a coloured-square results grid to your clipboard |

The clock runs while the board is open; close it to pause. Solve the daily and the server announces your time in chat.

## Commands

| Command | What it does |
| --- | --- |
| `/crosscraft` | Today's daily puzzle (or your finished grid, once done) |
| `/crosscraft random` | Practice mode, unlimited grids |
| `/crosscraft random new` | Abandon the current practice grid, deal a fresh one |

## Features

- **A global daily** that resets at **midnight US Eastern**. Every server on the same version has the same grid.
- **A daily leaderboard.** The fastest solvers on the server, with clean solves marked.
- **Streaks and stats.** Played, won, clean solves, current streak, best streak, fastest time.
- **Practice mode** that never deals you today's daily, so it can't spoil it.
- **High contrast mode** with a colourblind-safe palette.
- **Nothing to cheat with.** The server holds the answers and keeps the clock. Your client only ever gets the shape of the grid and the clues; the letters travel the other way, and the solution only arrives once the game is over.
- **260 grids** built from a hand-written bank of about 690 Minecraft answers, dealt like a deck so none repeats within a cycle.
- **Saves your progress.** Log out mid-grid and pick up where you left off, clock included.
- **Login nudge.** A clickable `/crosscraft` in chat when a new daily is waiting.

## About the grids

Words run along alternate rows and columns and cross at every other letter, British-style, so half the letters are unchecked. That is what lets an all-Minecraft vocabulary fill a grid at all: a fully checked American-style grid needs a dictionary of tens of thousands of words. Every entry is at least three letters and crosses at least one other.

## The other daily puzzles

- **[Craftle](/modhub/mods/craftle/)** is Wordle for crafting recipes.
- **[Connectle](/modhub/mods/connectle/)** is Connections with Minecraft items.

All three share one daily rhythm: the same puzzle for everyone, resetting at midnight US Eastern.

## Credits

Inspired by the daily mini crosswords of newspaper puzzle pages. Not affiliated with or endorsed by Mojang.
