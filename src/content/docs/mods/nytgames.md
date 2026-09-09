---
title: NYTGames
description: Craftle, Connectle and CrossCraft in one mod, with a hub and a hotkey to pick today's puzzle.
---

**NYTGames** bundles the three daily puzzles into one Fabric mod for Minecraft 26.2. Every day, everyone gets the same three puzzles, resetting together at **midnight US Eastern**. Press **H** (rebindable under Controls) or run `/dailies` for the hub: one row per game with today's status, your streak, a Play/Resume/View button and a Practice button, plus a countdown to the next puzzles.

- **[Craftle](/modhub/mods/craftle/)** is Wordle for crafting recipes.
- **[Connectle](/modhub/mods/connectle/)** is Connections with Minecraft items.
- **[CrossCraft](/modhub/mods/crosscraft/)** is a mini crossword where every answer is something from the game.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Install on **both client and server**. In singleplayer it just works.
- **Remove the standalone Craftle, Connectle and CrossCraft jars first.** The bundle replaces all three and refuses to load beside them.

## Download

NYTGames is in testing and hasn't been published yet. This page will link to the download when it is.

## Upgrading from the standalone mods

Your games, stats and streaks are imported from the old save files on the first start, each once and only into empty slots; the old files are never modified. Each game deals exactly the same puzzle on a given day as its standalone did, so a server that upgrades keeps its daily sequence.

1. Take a world backup.
2. Stop the server.
3. Remove `craftle-*.jar`, `connectle-*.jar` and `crosscraft-*.jar` from `mods` on the server and on every client, and add the NYTGames jar.
4. Start the server. The import runs once and logs what it copied.

Going back to the standalones restores the pre-upgrade state and drops anything played on the bundle.

## The hub

| Row | What it shows |
| --- | --- |
| **Status** | Not started, in progress ("3/10 guesses", "2/4 groups · 1 mistake", "12/21 letters · 2:14"), or the result |
| **Streak** | As it stands today, with "at risk" when yesterday was solved and today isn't yet |
| **Play / Resume / View** | Opens today's puzzle |
| **Practice** | Deals an endless practice puzzle that never spoils the daily |

The countdown at the bottom says when the next puzzles arrive, and a note appears if the server runs a different version than you. The **H** key also works inside Craftle, Connectle and the hub; inside CrossCraft, where letters go into the grid, use the **H** button on the board. The `?` page carries the high contrast toggle shared by all three games.

## Commands

| Command | What it does |
| --- | --- |
| `/dailies` (or `/nytgames`) | Opens the hub |
| `/dailies craftle`, `/dailies connectle`, `/dailies crosscraft` | Opens that game's daily |
| `/craftle`, `/connectle`, `/crosscraft` | Each game's own command, as before, with `random` and `random new` for practice |

## Credits

Craftle is an independent fan recreation of the browser game [Minecraftle](https://minecraftle.zachmanson.com) by Tamura Boog, Zach Manson, Harrison Oates and Ivan Sossa Gongora. Connectle recreates Connections, and CrossCraft is inspired by the mini crosswords of newspaper puzzle pages. Not affiliated with or endorsed by The New York Times or Mojang.
