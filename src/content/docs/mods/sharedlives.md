---
title: SharedLives
description: One life for the whole server — health, hunger, inventory, ender chest, experience and status effects are pooled, and every share is its own switch.
---

**SharedLives** gives everyone on the server one life between them. Health, hunger, inventory, ender chest, experience and status effects are pooled: a hit taken by one of you is taken by all of you, an item picked up by one appears in everyone's inventory, and when one of you dies, the rest fall with them.

Everything runs on the server, so **players connect with completely vanilla clients**. Drop the jar in the server's `mods` folder and every player shares the same life, whether they mod their client or not.

It appears in the mods list as **Lives Shared**.

## Requirements

- Minecraft **26.2** or **26.1.2**
- **Fabric** with Fabric API, or **NeoForge**
- Install on **the server only** — players need nothing. It also works in singleplayer, where one player is indistinguishable from vanilla.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/sharedlives)

## Adding it to a world that already exists

Installing on a world people have already played merges everyone into one life, and the merge takes its starting point from whoever logs in first.

The first player to join after the mod is added **seeds the pool** from their own health, inventory and experience. Everyone else then receives *that player's* state. Decide who that should be before anyone connects, or fix it afterwards with `/livesshared adopt <player>`. On a fresh world there is nothing to lose. Take a backup either way.

## What is shared

Every one of these is an independent switch. Turn one off and the mod never reads or writes that part of a player at all.

| Share | Default | What it means |
| --- | --- | --- |
| `shareHealth` | on | One health bar. Damage, healing, regeneration and commands all move the same pool. |
| `shareAbsorption` | **off** | Pool the yellow absorption hearts too, instead of leaving them a personal buffer. |
| `shareHunger` | on | One hunger bar, saturation included, draining at one player's pace rather than the whole group's. |
| `shareInventory` | on | Master switch for items. The four below choose which parts follow. |
| ↳ `shareHotbar` | on | Slots 0 to 8. |
| ↳ `shareMainInventory` | on | The three rows above the hotbar, slots 9 to 35. |
| ↳ `shareArmor` | on | Helmet, chestplate, leggings, boots. |
| ↳ `shareOffhand` | on | The offhand slot. |
| `shareEnderChest` | on | One ender chest, 27 slots. |
| `shareExperience` | on | One experience total. Orbs picked up by one member level everyone. |
| `shareEffects` | on | One set of status effects. Milk clears them for everyone. |
| `shareDeath` | on | One member dying takes the rest with them. |

So "shared hotbar only" is `shareMainInventory`, `shareArmor` and `shareOffhand` off. "Everything but armour" is just `shareArmor` off. Slots you leave unshared stay entirely personal, **including on death**, where only the shared slots are ever cleared.

Not shared: which hotbar slot each player is holding, air supply, advancements, statistics, and anything in a chest.

## Commands

`/ls` is an alias for `/livesshared`.

| Command | Permission | What it does |
| --- | --- | --- |
| `/livesshared` or `/livesshared status` | everyone | What is being shared, and the pool's current health, food, level and slot counts. |
| `/livesshared set <option> <true\|false>` | op 2 | Flip any switch and write it to the config. |
| `/livesshared exempt <player> <true\|false>` | op 2 | Take a player out of the pool, or put them back. With no argument, lists who is out. |
| `/livesshared reload` | op 2 | Re-read `config/livesshared.json`. |
| `/livesshared resync` | op 2 | Push the pool back out to everyone, if a client looks out of step. |
| `/livesshared adopt <player>` | op 2 | Take that player's state as the group's life. The recovery tool. |

Turning a share back **on** from in game makes the pool adopt whoever ran the command, so the answer to "whose stuff does everyone get" is always "the person who typed it".

## Teams

With `useScoreboardTeams` on, each scoreboard team shares its own life and everyone without a team shares one more. Joining a different team hands you that team's life on the next tick; your old team keeps theirs.

## Configuration

`config/livesshared.json` is written on first run with every option and a built-in `#option-guide` explaining each one, so the file documents itself. Booleans are live-editable with `/livesshared set`; the text and list options are file-edited, then `/livesshared reload`.

| Setting | Default | What it does |
| --- | --- | --- |
| `enabled` | true | Master switch. false puts everyone back on their own. |
| `damageFeedback` | true | Members who lose health to somebody else's hit get the hurt sound and the red flash. |
| `announceSharedDeath` | true | Broadcast when a group goes down together. |
| `sharedDeathMessage` | see config | The broadcast text. `{player}` and `{group}` are filled in. |
| `excludeCreative` | true | Creative-mode players sit outside the pool. |
| `excludeSpectators` | true | Spectators sit outside the pool. |
| `exemptPlayers` | `[]` | Names or uuids that never join a pool, for staff or an admin account. |
| `effectBlacklist` | `[]` | Effect ids that stay personal even with `shareEffects` on, e.g. `minecraft:mining_fatigue`. |
| `useScoreboardTeams` | false | One pool per scoreboard team, with all teamless players sharing another. |
| `autosaveMinutes` | 5 | Minutes between pool saves while players are online. |

## How it works

Once a tick, for every group: whatever a member changed since the pool was last pushed to them is folded back into the pool, and the pool is then pushed out to everyone.

**Numbers add up.** Two players taking three damage in the same tick costs the group six, and two players regenerating both heal the pool. Items are folded in per slot.

**Hunger is the exception.** Every player generates their own exhaustion, so adding it all up would empty one bar as many times faster as there are of you. What the group *eats* still adds up, because those were real items off the shared stack, but what it *burns* is divided between the members, so the bar drains at the pace one player's would.

**A shared hit is felt, not just watched.** When the pool takes damage somebody else walked into, the members who did not take it still get the red flash, the camera knock and the hurt sound — of the damage type that actually landed, so a fall sounds like a fall and a burn sounds like a burn. Rate-limited to vanilla's own hurt cooldown, and skipped for whoever took the hit, whose client already showed it. Switch it off with `damageFeedback`.

**Death drops one copy, not one each.** With `keepInventory` off, the player who died drops the shared inventory, so the group's copy is on the ground where they fell. Everyone else has their **shared slots emptied before they are killed** — otherwise every one of them would drop a copy of the same items. Slots you chose not to share are never touched and drop normally. With `keepInventory` on, nothing is dropped and nothing is cleared.

**The pool survives an empty server.** It is stored in `<world>/livesshared/<group>.dat` and saved on logout, on shutdown, and every `autosaveMinutes`. Without that, the first player to log in after a restart would seed the group from their own state, and a brand-new player joining first would hand everyone an empty inventory.

## Known quirks

- **Totems do not save you from a partner's death.** The shared death uses the same damage source `/kill` does, which bypasses invulnerability.
- **Beacons can make shared effects flicker.** A beacon refreshes its effect only for players in range; when the copy held by a player outside the range runs out, the group follows them until the beacon's next pulse.
- **Health is pooled as a number.** A player with a smaller maximum health bar is capped at their own maximum rather than showing the group's full pool.
- **Regeneration scales with the group.** Health sums both ways, so several players regenerating heal the pool several times over. Hunger is the only stat that divides.
