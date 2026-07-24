---
title: SimpleLandClaim
description: Golden-shovel land claims that protect against griefing, with carveable shapes and admin claim zones.
---

A land-claim and grief-protection mod that's fully server-side — vanilla clients are protected and see everything (outlines are particles, not client rendering). Claim with a golden shovel, shape your claim to fit your build, and keep visitors from breaking in while still letting them shop.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Server-side; vanilla clients supported.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/slc-simplelandclaim)
- [Modrinth](https://modrinth.com/mod/slc-simplelandclaim)

## Claiming (golden shovel)

- **Right-click two corners** to claim that rectangle. Touching claims you own merge, so you can build any shape. Corners can be set from up to 64 blocks away by aiming.
- **Right-click the sky** to toggle CLAIM ↔ CARVE mode. In carve mode the two corners **remove** area instead — trim a claim to fit your build; carve it to nothing to delete it.
- Hold the shovel to see outlines: **green** = your claims, **orange** = other players'.

## Protection

Inside a claim, non-owners can't break or place blocks, open containers, or touch item frames and armor stands — but they **can** still walk through doors/gates/plates and **trade with villager shops**, so a protected shopping district stays fully shoppable. Buttons and levers are blocked for visitors by default. Pistons can't move blocks across a claim border. Ops bypass all protection.

## Admin zones (golden hoe, ops)

Zones define **where players may claim**: no zones = claim anywhere; once any zone exists, claims must sit fully inside one. The golden hoe works just like the claim shovel but on zones (right-click corners to add, sky-toggle to carve, touching zones merge). Players use `/claim show` to see where they're allowed to build.

## Commands

| Command | Who | Does |
| --- | --- | --- |
| `/claim` | anyone | Info on the claim you're in, your claims, and your used/max totals |
| `/claim show` | anyone | Toggle borders (zones red, yours green, others orange) |
| `/claim remove` | owner (ops: any) | Remove the claim you're standing in |
| `/claim trust <player>` | owner | Toggle a player's build access on this claim |
| `/claim zone add\|list\|remove` | ops | Manage claim zones |

## Config (`config/shopguard.json`)

- `maxClaimArea` — max footprint of a single claim (default 10,000)
- `maxTotalPerPlayer` — max total footprint per player (default 40,000; ops exempt)
- `allowRedstoneControls` — let visitors use buttons/levers in claims (default false)

## Links

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/slc-simplelandclaim)
- [Modrinth](https://modrinth.com/mod/slc-simplelandclaim)
- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/shopguard)
