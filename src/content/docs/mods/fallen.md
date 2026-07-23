---
title: Fallen
description: A lootable corpse holds your items and XP on death until you reclaim it — with a death-history moderation tool.
---

When you die, your stuff normally scatters across the ground and ticks down to nothing. **Fallen** keeps it together: your body stays where you fell — a corpse wearing your own skin, lying flat — holding everything you were carrying plus your experience. Walk back, right-click, and take your gear; everything returns to the slot it came from.

## Requirements

- Minecraft **26.2** or **26.1.2**
- **Fabric** with Fabric API
- Install on **both the client and the server** — this is not a server-only mod.

## Download

- [GitHub — 26.2](https://github.com/Andrewwwwwwwwwwwwwww/fallen) · [GitHub — 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/fallen-mc26.1.2)

## Features

- **Your body, your skin** — the corpse renders as you, matching your wide or slim model, lying where you died. The owner's name is on the loot screen, not floating over the world.
- **Everything is kept** — your whole inventory and your XP go into the body. Nothing scatters, nothing burns.
- **Items go back where they belong** — reclaiming returns each item to its original slot (armor to armor, offhand to offhand). Sneak-right-click sweeps it all back at once.
- **Yours first** — for a grace period only you (and operators) can loot your body; after that, anyone can.
- **It ages** — left alone, a corpse eventually turns to a bare skeleton, a visual cue that it's been there a while.
- **Nothing is ever lost** — a body left far too long drops its contents instead of vanishing, and it won't fall into the void or burn up in lava on its own (both configurable).

## Death History (press U)

A built-in moderation and recovery tool. Every death is recorded permanently. A **green check** means the body is still out there; a **red X** means it's gone. Open any record for a **read-only snapshot** of exactly what was carried at the moment of death — accurate even after the body was looted. Operators can review any player's history.

## Configuration

`config/fallen.json`:

| Setting | Default | What it does |
| --- | --- | --- |
| `ownerGraceMinutes` | 120 | How long the body is lootable only by its owner (and ops). |
| `despawnMinutes` | 240 | When the body despawns and drops its contents. 0 = never. |
| `skeletonMinutes` | 60 | When the corpse ages into a skeleton. 0 = never. |
| `keepExperience` | true | Store the player's XP in the body and return it on retrieval. |
| `spawnOverVoid` / `spawnInLava` | true | Whether to place a body at a void/lava death (else items drop as vanilla). |
| `opsBypassProtection` | true | Operators can loot any body, ignoring the owner grace. |
| `deathHistorySize` | 20 | How many past deaths to keep per player. |

## Add-ons

- **[Fallen: Backpacked](/modhub/mods/fallen-backpacked/)** — makes MrCrayfish's Backpacked backpacks go into your corpse instead of dropping. It's backed by a compatibility API, so other backpack/curio-style mods can add support too.

## Links

- [GitHub (26.2)](https://github.com/Andrewwwwwwwwwwwwwww/fallen)
- [GitHub (26.1.2)](https://github.com/Andrewwwwwwwwwwwwwww/fallen-mc26.1.2)
