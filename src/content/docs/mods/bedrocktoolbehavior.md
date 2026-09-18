---
title: BedrockToolBehavior
description: Hold-to-use for hoes, shovels and axes that keeps up with the crosshair, so a sweep works every block it passes instead of every fourth.
---

On Bedrock you hold right-click, drag across the ground, and every block you pass gets tilled. On Java the same sweep skips most of them. **BedrockToolBehavior** makes held right-click track the crosshair instead of a fixed clock, so hoes, shovels and axes keep up with how fast you actually move.

Client-side only. It works in singleplayer and on **any server, vanilla included**, with nothing installed server-side.

## Requirements

- Minecraft **26.3** or **26.2**
- **Fabric** with Fabric API, or **NeoForge**
- Client only — servers need nothing.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/bedrocktoolbehavior)

## Why Java feels different

The rate is hard-coded. `Minecraft.startUseItem` sets a four-tick cooldown as its very first statement, before it has checked whether your hands are busy, before it has looked at what is under the crosshair, and whether or not the use does anything at all. The game only tries again once that counter reaches zero, so holding right-click gives exactly five uses per second however fast you sweep. Move quicker than that and the blocks in between are never touched.

## What it changes

The cooldown is what decides how often the game *looks* at the crosshair, and while it is running the game is blind — it cannot notice that you have moved onto new ground. So while an enabled tool is in your hand, the game checks every tick, and the rate limiting moves to where it belongs: **per block**.

The result is that a block you have just moved onto is used immediately, while a block you are still standing on keeps vanilla's timing exactly. Every block gets one interaction and never a repeat, which is both what makes a sweep feel continuous and what keeps the interaction rate looking like a player rather than an autoclicker.

Nothing else changes. Interacting with entities, using other items, and any tool you have switched off all behave exactly as they always have.

## Tools

| Tool | What a sweep does |
| --- | --- |
| **Hoe** | Tills grass, dirt, coarse dirt, dirt paths and rooted dirt into farmland |
| **Shovel** | Flattens ground into grass paths |
| **Axe** | Strips logs, and scrapes or unwaxes copper |

Eligibility is the vanilla `hoes`, `shovels` and `axes` item tags, so modded tools are covered automatically — as are modded blocks those tools already know how to work.

## Keys

Rebindable under **Options → Controls → BedrockToolBehavior**:

| Key | Action |
| --- | --- |
| `'` | Toggle Fast Tool Use |

The new state flashes above the hotbar in colour (green ON / red OFF) and is saved.

## Configuration

`config/bedrocktoolbehavior.json`:

| Setting | Default | What it does |
| --- | --- | --- |
| `enabled` | true | Master switch, same as the toggle key. false = vanilla timing everywhere. |
| `hoe` / `shovel` / `axe` | true | Which tools get the faster repeat. |
| `pollDelay` | 1 | Ticks between checks while a tool is held. 1 checks every tick; raising it reintroduces the gaps that make a sweep skip ground, and 4 is identical to vanilla. |
| `sameBlockCooldown` | 4 | Ticks before the same block may be used again. 4 matches vanilla, so holding the button on one spot behaves as it always has. |

:::tip[Playing on a high-ping server?]
`sameBlockCooldown` also has to outlast the round trip. Your client predicts the use, but the block does not visibly change until the server's update arrives, so a value below your ping can let one block be used twice. Raising it is the fix.
:::

## Durability

Tilling, pathing and stripping each cost a point of durability, in vanilla and here alike. Being able to actually sweep means spending that durability roughly four times faster, so a wooden hoe goes quickly. That is inherent to the feature rather than a side effect — if you want the reach without the cost, bring a better tool.

## Links

- [GitHub — Fabric](https://github.com/Andrewwwwwwwwwwwwwww/bedrocktoolbehavior)
- [GitHub — NeoForge](https://github.com/Andrewwwwwwwwwwwwwww/bedrocktoolbehavior-neoforge)
