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

## Claim mods (Open Parties and Claims)

The corpse hitbox is an ordinary `minecraft:interaction` entity, so claim mods see looting a body as "interacting with an entity" and block it inside claims. SSC ships an entity tag for exactly this. Add it to OPAC's forced exceptions in `<world>/serverconfig/openpartiesandclaims-server.toml` — the server has to be stopped to edit that file:

```toml
forcedEntityProtectionExceptionList = ["minecraft:minecart", "anything$#ssc:corpses"]
```

The `anything$` prefix matters. Without it the exception only applies when the item in your hand isn't itself blocked, so a player holding a sword still couldn't loot their own body. Claims never make a body public: SSC does its own owner check regardless, so a body stays locked to its owner either way.

One caveat — `#ssc:corpses` resolves to `minecraft:interaction`, the vanilla type SSC uses for hitboxes, so whitelisting it exempts every interaction entity on the server rather than only corpses. That only matters if something else on your server uses interaction entities and wants them protected.

SSC prints this config line to the console at startup whenever it detects OPAC.

## Diagnosing a missing body

Bodies are drawn with packets instead of being real entities, so `/data` and the F3 entity list can't see them. These operator commands can:

| Command | What it does |
| --- | --- |
| `/ssc list` | Every body on the server — owner, position, dimension, items, XP, age, and **how many players can currently see it**. |
| `/ssc resend [player]` | Forget what that player's client has been sent, so every body in range is re-sent within two seconds. |
| `/ssc debug <true\|false>` | Log every decision the death handler makes, including each reason it declines to create a body. |

**No body appeared for anyone.** Turn on `/ssc debug true` and watch the console on the next death — every path that skips a body says why (keepInventory, empty inventory, a hazard setting, or the world refusing the hitbox entity). A body that can't be placed logs a warning naming the player and position; the usual cause is another mod blocking entity spawning there, and the player's items drop normally rather than being lost.

**A body everyone can see except one player.** That client lost the packets. `/ssc resend <player>` puts it back immediately, and since v1.1.0 an automatic resync catches this within two seconds — clients silently drop packet-only bodies whenever they rebuild their world, which is what respawning, changing dimension and reconnecting all do.

## SSC or Fallen?

- **[Fallen](/modhub/mods/fallen/)** is the full experience — custom corpse screen, death-history UI with operator respawn/move tools, Trinkets and backpack support — and requires the mod on **both client and server**.
- **SSC** is the drop-in server version: the same corpse rules with vanilla-client-compatible presentation, for servers that can't ask players to install mods.

Don't run both on the same server.

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/ssc)
- [Latest release](https://github.com/Andrewwwwwwwwwwwwwww/ssc/releases/latest)
