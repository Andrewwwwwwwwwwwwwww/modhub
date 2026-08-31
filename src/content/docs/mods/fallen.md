---
title: Fallen
description: A lootable corpse holds your items and XP on death until you reclaim it — with a death-history moderation tool.
---

When you die, your stuff normally scatters across the ground and ticks down to nothing. **Fallen** keeps it together: your body stays where you fell — a corpse wearing your own skin, lying flat — holding everything you were carrying plus your experience. Walk back, right-click, and take your gear; everything returns to the slot it came from.

## Requirements

- Minecraft **26.2** or **26.1.2**
- **Fabric** with Fabric API
- Install on **both the client and the server** — this is not a server-only mod.

## Features

- **Your body, your skin** — the corpse renders as you, matching your wide or slim model, lying where you died. The owner's name is on the loot screen, not floating over the world.
- **Everything is kept** — your whole inventory and your XP go into the body. Nothing scatters, nothing burns.
- **Items go back where they belong** — reclaiming returns each item to its original slot (armor to armor, offhand to offhand). Sneak-right-click sweeps it all back at once. You only ever take *out* of a body, never put things in.
- **Settles like a real body** — a corpse drops to the ground where you died instead of hanging in the air, floats on still lava or water, and over the void is held just inside the world. In flowing lava or water it rests on the nearest open surface rather than riding the fall down or lying hidden under the flow — your loot is never left sunk, burning, or out of reach. Currents can't drag it, and a knocked body falls back and re-settles.
- **Yours until it's bone** — for a day, only you (and operators) can loot your body; once it ages into a skeleton it becomes fair game for anyone. Both times are configurable, and it can stay yours for good.
- **Never spills your loot** — reclaiming only takes what fits. If your pack is full, the rest stays in the body until you have room, so nothing is ever dropped into lava or the void from under you.
- **Trinkets & Traveler's Backpack aware** — with Trinkets installed, equipped accessories are stored in the body too instead of vanishing on death; a worn Traveler's Backpack likewise goes into the corpse (instead of being dropped at the death spot, where lava burned it) and returns to your back on recovery. Both are soft compat — neither mod is required.
- **Nothing is ever lost** — a body left far too long drops its contents instead of vanishing.

## Death History (press U)

A built-in moderation and recovery tool. Every death is recorded permanently. A **green check** means the body is still out there; a **red X** means it's gone. Open any record for a **read-only snapshot** of exactly what was carried at the moment of death — accurate even after the body was looted. Operators can review any player's history with `/deathhistory <player>`.

**Operator body tools** — no death is ever unrecoverable:

- **Respawn** (on red-X records) re-creates the body at the recorded death spot from the record's full snapshot: every item in its original slot, the XP, and stored backpacks/accessories. Refused while the body still exists, so it can never duplicate one.
- **Move** (on green-check records) teleports the existing body to the operator — across dimensions if needed — the rescue for a body that's stuck somewhere unreachable or invisible. If the body genuinely can't be found, the record is marked lost and its button flips to Respawn.

## Configuration

`config/fallen.json`:

| Setting | Default | What it does |
| --- | --- | --- |
| `enabled` | true | Master switch. false = deaths behave exactly like vanilla. |
| `skeletonMinutes` | 1440 | When a body ages into a skeleton — the point it unlocks (1 day). 0 = never. |
| `skeletonStageIsPublic` | true | Once skeletal, anyone can loot it. false = it stays owner-only forever. |
| `despawnMinutes` | 2880 | When the body despawns and drops its contents (2 days). 0 = never. |
| `keepExperience` | true | Store the player's XP in the body and return it on recovery. |
| `spawnInLava` / `spawnOverVoid` | true | Whether to place a body at a lava/void death (else items drop as vanilla). |
| `voidScanDepth` | 12 | How far down to look for ground before a spot counts as "over the void". |
| `opsBypassProtection` | true | Operators can loot any body, ignoring the owner lock. |
| `deathHistorySize` | 20 | How many past deaths to keep per player. |

The owner lock is driven entirely by these last two timers: a body is yours until it skeletonizes, then it's public. Set `skeletonStageIsPublic` to false (or `skeletonMinutes` to 0) to keep bodies owner-only for good.

## Claim mods (Open Parties and Claims)

A corpse is an entity, so claim mods treat looting one as "interacting with an entity" and refuse it inside claims. Fallen ships an entity tag for exactly this. Add it to OPAC's forced exceptions in `<world>/serverconfig/openpartiesandclaims-server.toml` — the server has to be stopped to edit that file:

```toml
forcedEntityProtectionExceptionList = ["minecraft:minecart", "anything$#fallen:corpses"]
```

The `anything$` prefix matters. Without it the exception only applies when the item in your hand isn't itself blocked, so a player holding a sword still couldn't loot their own body. Because the tag names `fallen:corpse` specifically, nothing else on your server loses protection.

Claims never make a body public: Fallen's own owner-lock applies regardless, so a body stays locked to its owner until it skeletonises either way. Fallen prints this config line to the console at startup whenever it detects OPAC.

## Diagnosing a missing body

If a body doesn't appear, `/fallen debug true` logs every decision the death handler makes, including each reason it declines to create one — `keepInventory` being on, dying in spectator, an empty inventory, a `spawnInLava`/`spawnOverVoid` setting, or the world refusing the corpse entity. A missing body otherwise looks exactly like an ordinary death, so there is nothing to go on without it.

A body that can't be placed logs a warning naming the player, position and dimension. The usual cause is another mod vetoing entity spawning at that spot; the player's items drop the vanilla way instead.

Corpses are ordinary entities, so vanilla selectors find the ones that do exist:

```
/execute as @e[type=fallen:corpse] run tp @s ~ ~ ~
```

:::caution[Update to 1.3.0 if you are on an older version]
Before 1.3.0, a body that failed to spawn cleared the player's inventory anyway and cancelled the vanilla drop, deleting their items outright. 1.3.0 places the body first and falls back to a normal death if the world refuses it.
:::

## Add-ons

- **[Fallen: Backpacked](/modhub/mods/fallen-backpacked/)** — makes MrCrayfish's Backpacked backpacks go into your corpse instead of dropping. It's backed by a compatibility API, so other backpack/curio-style mods can add support too.

## Links

- [GitHub — 26.2](https://github.com/Andrewwwwwwwwwwwwwww/fallen)
- [GitHub — 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/fallen-mc26.1.2)
