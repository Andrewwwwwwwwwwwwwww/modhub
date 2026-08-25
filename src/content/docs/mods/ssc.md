---
title: Server Sided Corpse (SSC)
description: Lootable corpses on death for fully vanilla clients — the whole mod runs on the server; players install nothing.
---

**Server Sided Corpse** brings Fallen's corpses to servers where players connect with **completely vanilla clients**. The whole mod runs on the server: drop it in the mods folder and every player gets a lootable body on death — whether they mod their client or not. When you die, your body stays where you fell, wearing your skin, holding everything you were carrying plus your XP. Walk back and right-click to reclaim it.

## Requirements

- Minecraft **26.2**
- A **Fabric** server with Fabric API
- Install on **the server only** — players need nothing. (It also works in singleplayer, where it runs on the integrated server.)

## Features

- **Your body, your skin** — the corpse appears as you, lying flat where you died, rendered from your real skin. No nametag floats over it.
- **Everything is kept** — your whole inventory and your XP go into the body. Nothing scatters, nothing burns.
- **A familiar chest screen** — right-click opens the body as a plain chest: armor across the top row, then your inventory and hotbar laid out in their own slots. Take-only — nothing can be put in.
- **Items go back where they belong** — sneak-right-click sweeps everything back to its original slots (armor to armor, offhand to offhand) plus your XP. If your pack is full, the rest stays in the body until you have room — loot is never spilled.
- **Settles like a real body** — it falls to the ground where you died, floats on still lava or water, and over the void is held just inside the world. Break the block under a resting body and it drops and settles again.
- **Yours until it isn't** — for a configurable time only you (and operators) can loot your body; afterwards it's fair game. A body left far too long drops its contents instead of vanishing, so nothing is ever truly lost.
- **`/deathhistory`** — lists your recent deaths with location, item count, XP, and whether the body is still out there. Operators can review any player with `/deathhistory <player>`.

## How can vanilla clients see it?

Three vanilla-protocol tricks, all driven from the server:

- The **visible body** is a packet-level fake player in the sleeping pose (which lies flat without a bed), carrying the dead player's real skin through an unlisted tab entry.
- The **hitbox** is a pair of invisible vanilla `minecraft:interaction` entities hugging the lying body.
- The **loot screen** is a vanilla 6-row chest menu — only the server knows its slots map back to your inventory.

## Configuration

`config/ssc.json`:

| Setting | Default | What it does |
| --- | --- | --- |
| `enabled` | true | Master switch. false = deaths behave exactly like vanilla. |
| `skeletonMinutes` | 1440 | When a body unlocks for other players (1 day). 0 = never. |
| `skeletonStageIsPublic` | true | Whether an aged body may be looted by anyone. false = owner-only forever. |
| `despawnMinutes` | 2880 | When the body despawns and drops its contents (2 days). 0 = never. |
| `keepExperience` | true | Store the player's XP in the body and return it on recovery. |
| `spawnInLava` / `spawnOverVoid` | true | Whether to place a body at a lava/void death (else items drop as vanilla). |
| `voidScanDepth` | 12 | How far down to look for ground before a spot counts as "over the void". |
| `opsBypassProtection` | true | Operators can loot any body, ignoring the owner lock. |
| `deathHistorySize` | 20 | How many past deaths to keep per player. |

## SSC or Fallen?

- **[Fallen](/modhub/mods/fallen/)** is the full experience — custom corpse screen, death-history UI with operator respawn/move tools, Trinkets and backpack support — and requires the mod on **both client and server**.
- **SSC** is the drop-in server version: the same corpse rules with vanilla-client-compatible presentation, for servers that can't ask players to install mods.

Don't run both on the same server.

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/ssc)
- [Latest release](https://github.com/Andrewwwwwwwwwwwwwww/ssc/releases/latest)
