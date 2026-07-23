---
title: Spawn Management
description: Set an exact world spawn, protect the area around it, and add random-wilderness travel with placeable portals.
---

A server-side mod that pins your world spawn to an exact block, locks down the area around it against griefing, and adds random-wilderness travel so players can scatter out to fresh land. Works with vanilla clients.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Server-side; vanilla clients supported. In singleplayer the Mod Menu screen edits every setting.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/spawn-management)
- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/spawnmanager)

## Features

- **Exact spawn point** — `setexactspawn <pos>` sets the world spawn to a precise block (relative coords like `~ ~ ~` work). New players and bed-less respawns land exactly there, not on vanilla's "nearest safe spot" above it.
- **Spawn protection** — a configurable circular zone (default 32 blocks) where non-ops can't break/place, open containers, use redstone, or touch armor stands, item frames and paintings. Players take no damage, hostile mobs won't spawn, and **all explosions are cancelled** so nothing can scar the spawn build. Players are notified when they leave the zone.
- **Wilderness travel** — `/wild` scatters a player to a random safe spot in the Overworld (avoids lava, the void, and the spawn zone), with a per-player cooldown (default 15 min, ops bypass) and a configurable max distance.
- **Wild portals** — ops can stamp a fully 3D region with `/wild place <width> [height] [depth]` that teleports anyone who steps in (no cooldown) — drop one into your spawn build. Each axis is independent.
- **On/off switches** — toggle wild travel or the `/spawn` command with `/wild enable|disable` and `/spawn enable|disable`.
- **Overworld only** — the Nether and End are untouched. Config saves to `config/spawnmanager.json`.

## Commands

| Command | Who | Does |
| --- | --- | --- |
| `/spawn` | anyone | Teleport to the exact spawn block |
| `/wild` | anyone | Teleport to a random safe Overworld spot (cooldown) |
| `/spawnmanager setexactspawn <pos>` | op | Set the world spawn to an exact block |
| `/spawnmanager setspawnradius <r>` | op | Change the protection radius |
| `/spawnmanager setwildradius <r>` | op | Max `/wild` distance (0 = full border) |
| `/spawnmanager setwildcooldown <s>` | op | `/wild` cooldown (0 = none) |
| `/spawnmanager status` | op | Show the zone, toggles, and your position |
| `/wild place <w> [h] [d]` | op | Place a 3D wild-portal region |
| `/wild remove` · `/wild list` | op | Remove/list wild portals |
| `/wild enable\|disable` · `/spawn enable\|disable` | op | Turn wild travel / `/spawn` on or off |

## Links

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/spawn-management)
- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/spawnmanager)
