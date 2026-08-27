---
title: "VanillaSkills: Progression & economy"
description: The Skill Shard and Quest Shard economies, the 15-lane skill tree, quests, the shop, crates and feats.
---

How progression works in **[VanillaSkills](/modhub/mods/vanillaskills/)**: what replaces experience, where shards come from, and what they buy.

## Experience is gone

Nothing drops or grants XP: not mobs, not mining, not smelting, not breeding, not furnaces. No orbs spawn at all, and Bottles o' Enchanting no longer appear in loot or villager trades. The experience bar shows your banked **Skill Shards** instead.

Everything that used to cost levels now costs Skill Shards — [anvil work](/modhub/mods/vanillaskills/gear/#the-anvil), and the [Infusing Table](/modhub/mods/vanillaskills/gear/#the-infusing-table) that replaces the enchanting table.

## The two currencies

- **Skill Shards** — mainly from **advancements**: common tasks pay **5**, goals **20** and purple challenges **50** by default, with hand-tuned values for the big milestones (killing the dragon pays 70) — all editable per world in `points.json`. Also from shard ore, structure chests, piglin bartering, broken spawners, the wandering trader, crates — and, rarely, **plain hard work**: mining, placing blocks and harvesting crops each have a small chance (0.2% by default, at most one payout every few minutes) to shake a shard loose, so ordinary play keeps a slow trickle coming. Your **luck attribute** (the Fortune Finder lane, Luck potions) raises those odds. They pay for most of the skill tree, anvil costs and infusing. Advancements only count if their namespace is listed in `countedNamespaces` (`minecraft`, `vanillaskills` and `thp` by default), which keeps a 300-advancement datapack from printing money.
- **Quest Shards** — earned from **Bounty Board** quests. They pay for the gear-unlock lanes (Armorsmith and Toolsmith) and the Quest Shop. Convert 3 Quest Shards into 1 Skill Shard at the shop, one way only.

## Skill Shards are a real item

Skill Shards are not just a number any more. Withdraw them from the skill tree as **Unstable Skill Shards**, and right-click one to bank it again — so they can be traded, stored or handed to another player.

- **Unstable Skill Shard Block** — nine shards compressed. It is **reinforced deepslate**, taken over outright: ancient cities generate obsidian instead, so the only reinforced deepslate in the world is this. It also **generates naturally** in all three dimensions, deep underground, and is the mod's ore. Only a **Netherite, Crystalline or Dragon pickaxe** can harvest it; anything weaker shatters it for nothing.
- **Stable Skill Shard Block** — crafted, not found; it is **lodestone**, whose vanilla recipe is removed. It **damages hostile mobs** in a 3-block radius every second, **merges** with adjacent blocks (up to 4) to widen that area, is **immune to explosions**, and works as a **beacon base** with triple range and a bonus amplifier level.

## The skill tree

Fifteen lanes. Every node's effect is a live, stacking modifier — respec any time.

| Lane | Nodes | Per node | At max |
| --- | --- | --- | --- |
| **Vitality** | 10 | +2 hearts (+4 HP) | +40 HP (double health) |
| **Fleet Foot** | 15 | +2% movement speed | +30% movement speed |
| **Prospector** | 5 | +2/+2/+2/+3/+3 mining efficiency | +12 (instamine stone with an Efficiency V diamond pickaxe) |
| **Fortune Finder** | 10 | +0.5 luck | +5 luck |
| **Warrior** | 10 | +0.5 flat **and** +3% weapon damage | +5 flat and +30% (scales with your weapon) |
| **Guardian** | 10 | +1 armor | +10 armor |
| **Reach** | 5 | +0.5 block & entity reach | +2.5 blocks reach |
| **Mountaineer** | 3 | step height (+0.2/+0.2/+0.1) | step up 1.1-block ledges (sneak to walk normally) |
| **Aquatic** | 9 | +breath ×3, then Dolphin's Grace (I→III, stacks with Depth Strider), then underwater mining | full swim speed + full underwater mining |
| **Armorsmith** | 10 | unlocks crafting each armor tier | Hardwood → Dragon armor |
| **Toolsmith** | 10 | unlocks crafting each tool tier | Hardwood → Dragon tools |
| **Brewmaster** | 5 | +10% beneficial-potion duration | +50% duration |
| **Evasion** | 10 | +2% chance to dodge arrows | +20% dodge chance |
| **Cultivator** | 5 | +20% chance for bonus crops | 100% (always bonus) |
| **Night Vision** | 1 | permanent Night Vision | — |

The Warrior lane deliberately combines a flat bonus with a percentage so slow, heavy weapons still out-DPS a fast fist. Mountaineer's step-up and Night Vision can be toggled per player (`/skill toggle stepup`, `/skill toggle nightvision`).

The whole tree is a datapack, so a server can reprice it, rearrange it, or replace it outright. An existing hand-edited tree is migrated into a datapack automatically on first load.

## Quests, shop and feats

- **Bounty Board** — new players work a fixed 15-quest starter board, then graduate to a shared board of 6 quests that rerolls every 5 hours. Rewards are **Quest Shards**.
- **Quest Shop** — 8 offers, restocked daily, bought with Quest Shards or Skill Shards. Stock runs from food and building blocks up to **enchanted books**, which are capped at level I–II and priced well above everything else: a shelved book is permanent, so two cheap ones combined at an anvil is meant to be the route to a high level.
- **Feats** — one-time achievements for discoveries, bosses and the End.
- **Wandering trader** — buys raw materials from you for **Skill Shards**: iron, netherite scrap, crops and blocks. Priced above what the same items fetch as a quest turn-in, and keeping vanilla's behaviour that an X-ed out offer never restocks.

All three are datapack-defined.

## Crates

Fished out of the water, right-clicked to open. Opening one spins a slot-machine reel in front of you before it pays out.

| Crate | Where |
| --- | --- |
| **Wooden**, **Copper**, **Iron**, **Diamond** | anywhere — a rarity ladder |
| **Frozen** | frozen and snowy biomes |
| **Lush** | jungle, swamp and lush caves |
| **Desert** | desert, badlands and savanna |

Every crate can contain Unstable Skill Shards, and each biome variant has its own themed loot. Two things improve your crate fishing, each with its own job:

- **Luck of the Sea** (and the luck attribute — Fortune Finder counts) reels in **a few more crates**: roughly +10% relative odds per point of fishing luck.
- **Unboxing**, a fishing-rod enchantment, upgrades **which crate bites** — it weights the draw toward Diamond (50% / 75% / always at levels I / II / III). It's sold in the shop, and found in every crate at a small chance **tiered to the crate**: Wooden holds Unboxing I, Copper II, and the rest III, so even the humblest crate offers a rung up the ladder. A crate never contains more than one Unboxing book.

Crates are datapack-defined, so a server can add its own, change any loot table, or turn them off.

## Advancements

VanillaSkills adds its own advancement tree (crafting each alloy and set, forging Dragon Ingots, fusing the armored elytra, unlocking the whole skill tree, and more) — and since Skill Shards come from advancements, these directly feed your progression.

## Using other mods

Any mod's advancements can pay Skill Shards: add its namespace to `countedNamespaces` in `<world>/vanillaskills/points.json`. `thp` ships in the default because [The Hungering Portal](/modhub/mods/thp/) is a sibling mod whose End-fight advancements are meant to feed this progression.

Adding one mid-world is safe. A newly added mod completes its root advancement — and anything keyed on items or statistics the player already has — the instant they next log in. Those are recorded but worth **zero**, so nobody gets a windfall for doing nothing, and they cannot pay out later either.
