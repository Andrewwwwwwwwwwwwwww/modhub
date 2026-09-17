---
title: ItemSaver
description: Armor takes itself off before it breaks, and worn-out hotbar tools flash a warning. Client-side, works on vanilla servers.
---

Losing a Mending-and-Protection-IV chestplate to one unlucky creeper is the kind of thing that ends a session. **ItemSaver** watches your gear and steps in first: armor moves itself into your inventory while it still has durability left, and a tool that is nearly finished tells you before you swing it one time too many.

Client-side only. It works in singleplayer and on **any server, vanilla included**, with nothing installed server-side.

## Requirements

- Minecraft **26.3** or **26.2**
- **Fabric** with Fabric API, or **NeoForge**
- Client only — servers need nothing.

## Features

- **Armor Guard** — the moment a helmet, chestplate, leggings or boots drop to their last 10 durability points, the piece is moved into your inventory. A full inventory is reported on the action bar instead of failing quietly, so you are never left thinking you were covered when you weren't.
- **Tool Warnings** — any damageable item in your hotbar or offhand that falls under 5% durability gets a pulsing red slot with the exact percentage printed above it, plus a chime and an action-bar line the moment it crosses.

Both work on anything with a durability bar, modded gear included. There is no hardcoded item list.

## How the armor move works

Nothing is installed server-side, so the piece is moved with the same inventory action a shift-click sends, against your own inventory menu — which the server keeps open whether or not a screen is showing. From the server's point of view you are a player tidying your own gear.

That has two consequences worth knowing. The move needs a free inventory slot, and while a chest or any other container is open the guard holds off, because the server only accepts inventory actions against the screen it believes you have open. It resumes the moment you close it.

## Pieces it can't rescue

Rather than skip these silently and leave you wondering, ItemSaver says what is happening:

- **An elytra is never taken off.** Minecraft stops an elytra gliding at one durability point instead of destroying it, so there is nothing to rescue — and taking it off would strand you. You get a warning that it is nearly worn out instead. Nothing is unequipped at all while you are gliding.
- **Curse of Binding** cannot be removed by anything, this mod included. You are told once and then left alone, rather than being promised a rescue that never comes.

## Keys

Rebindable under **Options → Controls → ItemSaver**:

| Key | Action |
| --- | --- |
| `;` | Toggle Armor Guard |
| `'` | Toggle Tool Warnings |

Each press flashes the new state above the hotbar in colour and saves immediately.

## Settings

`config/itemsaver.json`, written on first launch:

| Setting | Default | What it does |
| --- | --- | --- |
| `armorGuard` | `true` | Take armor off before it breaks |
| `armorTrigger` | `10` | Unequip at this many durability points left, or fewer |
| `armorSound` | `true` | Chime when a piece is pulled off |
| `toolWarning` | `true` | Watch the hotbar and offhand |
| `toolWarnPercent` | `5.0` | Warn at or under this percentage of durability |
| `toolHighlight` | `true` | Tint and outline the slot |
| `toolPercentLabel` | `true` | Print the percentage above the slot |
| `toolSound` | `true` | Chime once when an item crosses the threshold |

The trigger is 10 points rather than 1 because a single hard hit can strip several points off a piece at once — at a trigger of 1 the armor can jump straight over it and break. Lower it if you would rather squeeze out every last point.

Nothing happens in creative or spectator mode, where durability does not apply.

## Links

- [GitHub — Fabric](https://github.com/Andrewwwwwwwwwwwwwww/itemsaver)
- [GitHub — NeoForge](https://github.com/Andrewwwwwwwwwwwwwww/itemsaver-neoforge)
