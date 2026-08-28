---
title: "VanillaSkills: Gear & crafting"
description: The five gear tiers, the Dragon end-game chain, the Infusing Table, the re-priced anvil, the Satchel and the mining gates.
---

The crafting half of **[VanillaSkills](/modhub/mods/vanillaskills/)**: five tiers of gear woven in between the vanilla tiers, and the stations that enchant and repair them.

## Gear tiers

Five craftable tiers slot into the vanilla ladder. Each is built on a vanilla base item (so it inherits that base's behaviour) but with its own stats, durability and colour. Crafting a tier is gated behind the matching **Armorsmith** / **Toolsmith** node unless you disable that in the config.

### Armor

| Tier | Armor (total) | Toughness | Knockback resist | Durability (H/C/L/B) | Full-set bonus |
| --- | --- | --- | --- | --- | --- |
| **Hardwood** | 9 | 0 | 0 | 99 / 144 / 135 / 117 | +16% movement speed |
| **Rose Gold** | 13 | 0 | 0 | 143 / 208 / 195 / 169 | Immune to all negative status effects, plus fire resistance |
| **Steel** | 18 | 0 | 0 | 330 / 481 / 451 / 390 | (heavy: −10% movement) |
| **Crystalline** | 20 | 2.5 | 0.05 / piece | 385 / 560 / 490 / 455 | Reflect 25% of melee damage, plus Strength and Resistance I |
| **Dragon** | 24 | 4 | 0.15 / piece | 555 / 796 / 722 / 650 | Fire/lava/dragon's-breath immunity + a sneak dive-dash |

Set bonuses are checked live — take off one piece and the bonus reverts instantly. For reference, Crystalline sits between diamond and netherite; Dragon is clearly above netherite (24 armor vs 20, toughness 4 vs 3).

Steel's weight is the price of its 18 armor: it is the sturdiest mid-tier by a wide margin, and the only one that costs you speed.

Steel is smelted rather than crafted: an **iron block** in a furnace or blast furnace yields **three Steel Ingots**.

### Tools

Every tier covers pickaxe, axe, shovel, hoe, sword and spear.

| Tier | Harvest tier | Mining speed | Extra attack damage | Durability |
| --- | --- | --- | --- | --- |
| **Hardwood** | stone | 4 | — | 160 |
| **Rose Gold** | gold (+ gold and iron ores) | 12 (fastest miner) | +1.5 | 220 |
| **Steel** | iron | 6 | +0.5 | 800 |
| **Crystalline** | diamond | 8 | +0.5 | 1800 |
| **Dragon** | netherite | 9, plus **+18 mining efficiency** | +1.5 | 3500 |

Rose Gold is the "fast but low harvest tier" pick — it mines quickly and, unusually for a gold base, reaches gold and iron ores. Steel and up can mine deepslate (see below).

### Tuning it

Every number in both tables lives in the config as a `gear` block, so a server can rebalance any tier without a rebuild. Gear already in players' inventories is brought onto the new numbers as they log in — enchantments, damage and anvil renames are left alone.

## The Dragon tier

The top tier is a small end-game quest chain:

1. **Dragon Scales** drop from **The Ender Dragon** — 8 per kill, and **32 for the world's first kill only**. Player kills only, so a scripted or automated dragon death cannot claim them.
2. A **Dragon Ingot** is forged from a **Netherite Ingot and four Dragon Scales**.
3. **Dragon gear** is made at a **smithing table** from netherite gear + a Dragon Ingot + a Dragon Template.
4. **One Dragon Scale** fully repairs a piece, for **2 Skill Shards** — however damaged it was.

Two signature perks:

- **Dragon + Elytra fusion** — **drop an Elytra and a Dragon chestplate together on top of an anvil** and they fuse into one chestplate that glides while keeping full Dragon armor. To undo it, **drop the fused chestplate on a grindstone** and it splits back into the two items. The elytra is stored inside the chestplate rather than merged into it, so **both** come back out with their own enchantments intact. (Dropped items on the block, not the anvil GUI — combining an elytra in the anvil screen is not something Minecraft supports.)
- **Deepslate insta-mine** — the Dragon pickaxe carries +18 mining efficiency. With **Efficiency V + Haste II + a fully-leveled Prospector lane**, it **instantly breaks deepslate**.

## The Infusing Table

The enchanting table becomes the **Infusing Table** — same block, no lapis, no levels.

- It reads enchanted books out of **chiseled bookshelves** placed around it, in the same layout a vanilla table wants its bookshelves.
- It offers exactly the enchantments those books hold, and you can pick **several at once**.
- It charges **Skill Shards** — exactly the enchantment level: 1 shard for a level-I book, 5 for a level-V.
- **Books are not consumed.** Shelve a book once and that enchantment is available forever — which is why the Quest Shop sells low-level books, and why anvils no longer apply books directly to gear.

## The anvil

Anvils charge **Skill Shards** instead of levels — and as of **2.0.2** the price is what the operation actually consumes, not vanilla's cost formula. Vanilla's curve was designed around experience, which regrows; shards are finite — a world holds a fixed number of them, so under the old one-for-one conversion a late-game combine could eat 39 shards, and the prior-work penalty doubled on every visit until a piece was effectively unrepairable.

The material-based price:

- **Repairing with materials** costs **1 shard per material consumed**.
- **Combining two items** costs **1 shard per enchantment level on the sacrificed item**, plus a flat **2 shards** when the combine restores durability (the spare is consumed for it).
- **A plain rename** is a flat fee — **free by default**.
- Vanilla's prior-work penalty no longer compounds the price.

Anvils **do not put enchanted books onto gear** — that is the [Infusing Table](#the-infusing-table)'s job. Combining two books together still works, priced the same way.

**Every repairable item has a repair material.** Vanilla ships nine damageable items with none at all — a trident can only be mended with a second trident. VanillaSkills gives them one: **Trident ← Prismarine**, **Bow / Crossbow / Fishing Rod ← String**, **Flint and Steel / Shears ← Iron Ingot**, **Brush ← Copper Ingot** (the two "on a stick" rods stay combine-only). Toggle: `vanillaRepairMaterials`.

All of it is configurable: `anvilMaterialPricing` switches the scheme (clear it to restore vanilla's numbers), and `anvilRepairCostPerMaterial`, `anvilEnchantCostPerLevel`, `anvilCombineRepairCost` and `anvilRenameCost` set the rates.

## The Satchel

Portable storage for players who are nowhere near an End city yet. Surround a **chest with eight leather** and you get a **Satchel** — a brown shulker box under the name, so it holds 27 stacks, keeps everything inside when you break it, and travels full.

It costs no shards and sits behind no skill node. The recipe appears in your recipe book as soon as you are holding the leather.

## Mining, gates and Fortune

- **Deepslate gate** (optional, on by default) — deepslate and its ores require a **Steel-tier-or-better pickaxe** (vanilla diamond/netherite also qualify). Try to mine it with a weaker pick and you're told why. Creative bypasses it.
- **Fortune boost** (optional, on by default) — **Fortune IV and V** grant extra base ore drops beyond what vanilla gives (a 75% chance of one extra roll per level above III), on all the common ores. **Fortune V** additionally has a **0.5% chance to drop a bonus Ancient Debris**, which vanilla Fortune normally ignores entirely.
- **Nether roof** (optional, on by default) — standing above Y 128 in the Nether hurts.
