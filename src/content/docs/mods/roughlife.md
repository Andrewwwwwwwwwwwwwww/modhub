---
title: Rough Life
description: A hardcore survival overhaul — thirst, body temperature, bleeding and broken bones, and a flint age before you ever hold an axe.
---

**Rough Life** is an RLCraft-*inspired* hardcore survival overhaul. Survival is no longer free: you get thirsty, you get cold, you bleed, and you can't punch trees. All code and art are original — no assets from RLCraft or any of its mods are used.

## Requirements

- Minecraft **26.3** or **26.2**, **Fabric** with Fabric API
- Install on **both client and server** — the HUD and the new items need it on each side.

## Download

- [GitHub releases](https://github.com/Andrewwwwwwwwwwwwwww/roughlife/releases)

## Thirst

A row of droplets sits above the food bar.

- It drains slowly over time, and much faster while sprinting, in heat, or while sick.
- Low thirst slows and weakens you. At zero you take damage, stopping short of killing you unless `thirstDamageKills` is turned on.
- Drink from a **Leather Canteen** — right-click water to fill it, right-click air to sip. Raw water risks **Grimy Gut**.
- Or craft **Purified Water** (any bottle plus a **Charcoal Filter**) for a big, safe restore.

## Body temperature

A thermometer sits left of the hotbar, computed from biome, night and storms, rain, swimming, fire, the Nether, and nearby heat blocks like campfires, furnaces, lava and torches. Armor insulates.

- **Freezing** drives the vanilla freezing system — frost overlay, shivering, slowdown, then freeze damage. Leather armor blocks it, exactly as it does with powder snow.
- **Overheating** causes Heatstroke: rapid hunger drain, then burn damage.
- Warm up by a campfire; cool off in water or shade.

## Injuries

- Melee hits can cause **Bleeding** — damage over time until you use a **Bandage** (paper, string and plant fiber).
- Hard falls cause a **Fractured Bone** — heavy slowness until you apply a **Splint** (sticks and plant fiber).

## The flint age

- **No tree punching.** Bare-handed, logs break slowly and drop nothing — the wood just splinters. You need an axe.
- **Tree felling.** Chopping a log with any axe brings down every connected log above the cut, one durability per log. Sneak to break a single log.
- **Rocks.** Sneak and right-click dirt, stone, sand or gravel with an empty hand to gather them off the ground. Three rocks craft into flint, and gravel still drops it.
- **Knapping.** Right-click stone holding flint (60%) or a rock (40%) for **Flint Shards**. Shard and stick make a **Flint Knife**; shard, fiber and stick make a **Flint Hatchet**.
- Breaking grass sometimes drops **Plant Fiber** — three make string. Punching leaves knocks loose sticks.
- Lost? `/roughlife guide` explains the whole progression in game.

## No free regeneration

Vanilla food-based regeneration is replaced with a much slower version: 1 HP every 8 seconds, only while well-fed and not bleeding. Set `naturalRegen` to `"slow"` (the default), `"off"` or `"vanilla"`.

## Configuration

`config/roughlife.json`. Every system has its own enable toggle, alongside `thirstDrainMultiplier`, `thirstDamageKills`, `dirtyWaterSickness` and `naturalRegen`.

| Command | What it does |
| --- | --- |
| `/roughlife status` | Show your thirst and body temperature. |
| `/roughlife guide` | Explain the early-game progression in chat. |
| `/roughlife thirst <0-20>` | Set your thirst (operators). |
| `/roughlife reload` | Re-read the config (operators). |

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/roughlife)
- [Latest release](https://github.com/Andrewwwwwwwwwwwwwww/roughlife/releases/latest)

The Wailing Skull's texture comes from BetterNether (Team BetterX, MIT); see the mod's third-party notices.
