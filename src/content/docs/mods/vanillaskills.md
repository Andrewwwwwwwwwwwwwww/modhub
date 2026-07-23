---
title: VanillaSkills
description: A skill tree, tiered gear, quests, shards, a shop and feats for Minecraft — Fabric and NeoForge.
---

VanillaSkills adds progression to vanilla Minecraft: a **skill tree** you unlock as you play, five tiers of **craftable gear** beyond netherite, and a loop of **quests, shards, a shop and feats** to chase. It runs on both **Fabric** and **NeoForge**, and works for vanilla clients — the custom item textures are delivered by an automatically pushed resource pack, so nobody has to install anything by hand.

## Requirements

- Minecraft **26.2**
- **Fabric** (with Fabric API) or **NeoForge**
- Install on the **server**; vanilla clients are supported (they receive the texture pack automatically). Installing on the client is optional.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)
- [GitHub — Fabric](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills) · [GitHub — NeoForge](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge)

## Features

### Skill tree

Spend the skill shards you earn on a branching tree of lanes — combat, mobility, mining, aquatic, and the crafting lanes that gate the gear tiers. Each node grants a real, stacking effect (extra attack damage, swim speed, mining reach, and more), and you can respec by regenerating the tree.

### Tiered gear

Five craftable tiers pick up where vanilla leaves off, each with its own set bonuses:

| Tier | Theme |
| --- | --- |
| Hardwood | Early-game wooden upgrade |
| Rose Gold | Mid-game alloy |
| Steel | Durable workhorse set |
| Crystal | High-tier, enchant-friendly |
| Dragon | End-game, forged from dragon ingots |

Gear crafting can be gated behind the matching skill lane, or ungated in the config (which also hides that lane from the tree).

### Quests, shards, shop and feats

- **Quests** rotate on a board and reward skill shards.
- A **shop** spends shards on useful items and rotates its stock.
- **Feats** are optional long-run challenges (off by default; enable in the config).

### Custom textures, no client mod

The server pushes a **resource pack** to every player on join, so the custom gear and item names show up even on vanilla clients. The same textures are also available as a standalone pack — see [VS - Textures](/modhub/mods/vs-textures/).

### Localization

Every menu and message is translated **per player**, based on the language their client reports. English and **Traditional Chinese (zh_tw)** are bundled; server owners can drop in their own language files per world, and more community translations are welcome.

## Configuration

Settings live in a per-world file at `<world>/vanillaskills/gameplay.json`. Highlights:

- **Crafting requirements** — gate tool/armor crafting behind skills, or turn it off (which hides that lane).
- **Deepslate gate** — require a steel pickaxe to mine deepslate, or not.
- **Fortune boost** — bonus ore drops, including a small chance for a second Ancient Debris with Fortune V.
- **Quests** — how many are active per rotation and how many shop slots refresh daily.
- **Feats** — off by default; enable to turn on the feat system.
- **Resource pack push** — on by default; can be disabled if you host your own pack.

Reload the config in-game with `/skill reload`.

## Commands

- `/skill reload` — reload the world config and language files.
- `/skill regen fresh` — re-apply the default skill-tree layout (unlocked nodes are kept, keyed by id). Use this after an update changes node effects.

## Translations

Want VanillaSkills in your language? Start from the English template (`en_us.json`, ~600 keys) in the repo and translate the values only. Finished translations can be bundled into the mod and the pushed texture pack.

## Links

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)
- [GitHub (Fabric)](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills)
- [GitHub (NeoForge)](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge)
