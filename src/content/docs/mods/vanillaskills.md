---
title: VanillaSkills
description: A skill tree, five tiers of craftable gear, quests, shards, a shop and feats for Minecraft — Fabric and NeoForge.
---

VanillaSkills adds real progression on top of vanilla: a **15-lane skill tree** you buy with shards earned from advancements, **five tiers of craftable gear** that pick up where netherite leaves off (topping out at a **Dragon** tier with an Elytra-fused chestplate and deepslate-insta-mining tools), plus a loop of **quests, a shop and optional feats**. It runs on **Fabric** and **NeoForge**, and the custom textures reach vanilla clients through an automatically pushed resource pack — nobody installs anything by hand.

## Requirements

- Minecraft **26.2**
- **Fabric** (with Fabric API) or **NeoForge**
- Install on the **server**. Vanilla clients are fully supported (they receive the texture pack on join); a client install is optional.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)

## How you earn shards

There are two currencies:

- **Skill Shards** — earned by completing **advancements** (both vanilla Minecraft and VanillaSkills' own). They pay for most of the skill tree. Only real advancements count — datapack advancements (e.g. VanillaTweaks) do not.
- **Quest Shards** — earned from the **Bounty Board** quests. They pay for the gear-unlock lanes (Armorsmith and Toolsmith) and the Quest Shop.

Open the tree and stats screens from the VanillaSkills menu; refund a node to get its shards back (refunds cascade to anything that depended on it).

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

## Gear tiers

Five craftable tiers extend the vanilla ladder. Each is built on a vanilla base item (so it inherits that base's behaviour) but with its own stats, durability and colour. Crafting a tier is gated behind the matching **Armorsmith** / **Toolsmith** node unless you disable that in the config.

### Armor

| Tier | Armor (total) | Toughness | Knockback resist | Durability (H/C/L/B) | Full-set bonus |
| --- | --- | --- | --- | --- | --- |
| **Hardwood** | 9 | 0 | 0 | 99 / 144 / 135 / 117 | +10% movement speed |
| **Rose Gold** | 13 | 0 | 0 | 143 / 208 / 195 / 169 | Immune to all negative status effects |
| **Steel** | 18 | 0 | 0 | 330 / 481 / 451 / 390 | (heavy: −4% movement) |
| **Crystalline** | 20 | 2.5 | 0.05 / piece | 385 / 560 / 490 / 455 | Reflect 25% of melee damage back at attackers |
| **Dragon** | 24 | 4 | 0.15 / piece | 555 / 796 / 722 / 650 | Fire/lava/dragon's-breath immunity + a sneak dive-dash |

Set bonuses are checked live — take off one piece and the bonus reverts instantly. For reference, Crystalline sits between diamond and netherite; Dragon is clearly above netherite (24 armor vs 20, toughness 4 vs 3).

### Tools

Every tier covers pickaxe, axe, shovel, hoe, sword and spear.

| Tier | Harvest tier | Mining speed | Extra attack damage | Durability |
| --- | --- | --- | --- | --- |
| **Hardwood** | stone | 4 | — | 160 |
| **Rose Gold** | gold | 12 (fastest miner) | +1.5 | 220 |
| **Steel** | iron | 6 | +0.5 | 800 |
| **Crystalline** | diamond | 8 | +0.5 | 1800 |
| **Dragon** | netherite | 9, plus **+18 mining efficiency** | +1.5 | 3500 |

Rose Gold is the "fast but low harvest tier" pick — it mines quickly but, like gold, can't harvest the hardest blocks. Steel and up can mine deepslate (see below).

## The Dragon tier

The top tier is a small end-game quest chain:

1. **Dragon Scales** drop from **The Ender Dragon (8x)** — the tier's crafting and repair material.
2. A **Dragon Ingot** is forged by surrounding a **Netherite Ingot with eight Dragon Scales**.
3. **Dragon gear** is made at a **smithing table** from netherite gear + Dragon Ingots + A Dragon Template
4. Fully repair with 1 Dragon Ingots and 20 levels (this fully fixes one piece of gear)

Two signature perks:

- **Dragon + Elytra fusion** — combine an Elytra into the **Dragon chestplate** and it gains gliding while keeping full Dragon armor. The elytra is stored inside the item, so you can split them apart later with **both** items' enchantments intact — they're never merged.
- **Deepslate insta-mine** — the Dragon pickaxe carries +18 mining efficiency. With **Efficiency V + Haste II + a fully-leveled Prospector lane**, it **instantly breaks deepslate**.

## Mining, gates and Fortune

- **Deepslate gate** (optional, on by default) — deepslate and its ores require a **Steel-tier-or-better pickaxe** (vanilla diamond/netherite also qualify). Try to mine it with a weaker pick and you're told why. Creative bypasses it.
- **Fortune boost** (optional, on by default) — **Fortune IV and V** grant extra base ore drops beyond what vanilla gives (one extra roll per level above III), on all the common ores. **Fortune V** additionally has a **0.5% chance to drop a bonus Ancient Debris**, which vanilla Fortune normally ignores entirely.

## Quests, shop and feats

- **Bounty Board** — quests rotate on a board and reward **Quest Shards** (used for the gear-unlock lanes and the shop).
- **Quest Shop** — spends Quest Shards on useful items, with a rotating daily stock.
- **Feats** — optional long-run challenges. **Off by default**; enable them in the config.

## Advancements

VanillaSkills adds its own advancement tree (crafting each alloy and set, forging Dragon Ingots, fusing the armored elytra, unlocking the whole skill tree, and more) — and since Skill Shards come from advancements, these directly feed your progression.

## Textures on vanilla clients

On join, the server pushes a **resource pack** so the custom gear and item names render even for players with no mod installed. The same textures are available on their own as [VS - Textures](/modhub/mods/vs-textures/). Pack pushing can be turned off in the config if you host your own.

## Configuration

Per-world file at `<world>/vanillaskills/gameplay.json`:

| Setting | What it does |
| --- | --- |
| `toolCraftingRequirements` / `armorCraftingRequirements` | Gate gear crafting behind the skill lanes. Set false to ungate — which also hides that lane from the tree. |
| `deepslateGate` | Require a Steel-tier-or-better pickaxe for deepslate. |
| `fortuneBoost` | Enable the Fortune IV/V bonus drops and the Ancient Debris chance. |
| `questsPerRotation` (1–6) | How many quests are active on the board at once. |
| `questShopSlots` | How many shop offers refresh daily. |
| `feats` | Turn the feat system on (off by default). |
| `starterQuests` | Give new players starter quests (or graduate them immediately). |
| resource-pack push, anvil cost cap, dragon repair cost, and more | Fine-tuning toggles. |

Reload it live with `/skill reload`.

## Commands

- `/skill reload` — reload the world config and language files.
- `/skill regen fresh` — re-apply the default tree layout after an update changes node effects (unlocked nodes are preserved by id).
- `/skill toggle stepup` / `/skill toggle nightvision` — per-player toggles for the Mountaineer step-up and permanent Night Vision.

## Translations

Every menu, message, item name and advancement is translatable **per player**, from the language their client reports. **English** and **Traditional Chinese (zh_tw)** ship complete (612 keys). To add a language, start from `en_us.json` in the repo, translate the values only, and it can be bundled into both the mod and the pushed texture pack.

## Links

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)
- [GitHub (Fabric)](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills)
- [GitHub (NeoForge)](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge)
