---
title: "VanillaSkills: Running a server"
description: Configuration, commands, datapacks, translations, and how textures reach vanilla clients.
---

Everything a server owner needs to run and customize **[VanillaSkills](/modhub/mods/vanillaskills/)**.

## Textures on vanilla clients

On join, the server pushes a **resource pack** so the custom gear and item names render even for players with no mod installed. Single player needs no download — the jar carries the same textures. The same textures are available on their own as [VS - Textures](/modhub/mods/vs-textures/). Pack pushing can be turned off in the config if you host your own.

## Configuration

Per-world file at `<world>/vanillaskills/gameplay.json`. Reload it live with `/skill reload`.

| Setting | What it does |
| --- | --- |
| `experienceEnabled` | Put vanilla experience back. Off by default. |
| `gear` | Every tier's armor, toughness, knockback, movement modifier and durability, plus tool durability, damage, speed and mining. |
| `gearRestamp` | Bring players' existing gear onto the current tier numbers as they log in. |
| `toolCraftingRequirements` / `armorCraftingRequirements` | Gate gear crafting behind the skill lanes. Set false to ungate — which also hides that lane from the tree. |
| `deepslateGate` | Require a Steel-tier-or-better pickaxe for deepslate. |
| `fortuneBoost` / `fortuneBonusChance` | The Fortune IV/V bonus drops and how often they fire. |
| `infusingEnabled` / `infusingCostPerLevel` / `infusingCurrency` | The Infusing Table's cost and which shard it charges. |
| `anvilMaterialPricing` | Price anvil work by materials consumed (on by default). Clear it to restore vanilla's cost numbers. |
| `anvilRepairCostPerMaterial` / `anvilEnchantCostPerLevel` / `anvilRenameCost` | The material-based anvil rates: per repair material, per enchantment level on the sacrificed item, and the flat rename fee (default free). |
| `anvilBooksOnItems` | Restore putting enchanted books straight onto gear at an anvil. Off by default. |
| `shardAuraRadius` / `shardAuraDamage` / `shardMaxMerge` | Stable Skill Shard Block behaviour. |
| `taskShardChance` / `taskShardCooldownSeconds` | The rare shard drop from mining, building and harvesting: the per-action chance (0 disables) and the per-player cooldown after a payout. |
| `crateFishingWeight` / `crateReel*` | How often crates are fished up, and the opening animation. |
| `questsPerRotation` (1–6) / `questShopSlots` | Board and shop size. |
| `bountyRefreshHours` / `shopRefreshHours` | Rotation timers. |
| `feats` / `starterQuests` | Turn feats on, and whether new players get the starter board. |
| `guideUrl` | Where the Guide icon sends players. Blank opens the in-game book instead. |
| `advancementLoginGraceMs` | How long after login an advancement completing is worth nothing, so adding a mod mid-world does not pay out on sight. |
| `netherRoofDamage`, `dragonScaleDrop`, `dragonRepairCost`, resource-pack push, and more | Fine-tuning toggles. |

For anything larger than a number — new quests, different shop stock, a rewritten skill tree, your own crates — add a datapack under `data/<namespace>/vanillaskills/`. The mod ships its own content the same way, so a pack can extend or replace any of it, following the same merge rules as vanilla tags.

## Commands

### Everyone

| Command | What it does |
| --- | --- |
| `/skill` | Open your skill tree |
| `/quests` (alias `/bounty`) | Open your bounty board |
| `/skill toggle nightvision` | Turn permanent Night Vision on or off |
| `/skill toggle stepup` | Turn the Mountaineer step-up on or off |
| `/help` | List these commands |

### Operators

| Command | What it does |
| --- | --- |
| `/skill skillshards <player> add\|set\|reset <n>` | Grant, set or clear Skill Shards |
| `/skill questshards <player> add\|set\|reset <n>` | Grant, set or clear Quest Shards |
| `/skill reset <player>` | Refund all of a player's unlocks |
| `/skill recalc <player>` | Recompute earned Shards from advancements |
| `/skill reload` | Reload the world config and language files |
| `/skill give <item> [n] [player]` | Give any VanillaSkills item — `/skill give list` shows every id |
| `/skill mending on\|off` | Allow or strip the Mending enchantment |
| `/quests board [remove\|refresh]` | Place, remove or re-render a physical bounty board |
| `/quests reroll` | Force a fresh set of bounties now |
| `/quests graduate <player>` | Move a player to the main board |
| `/quests starter <player>` | Send a player back to the starter board |
| `/help admin` | List the admin commands |

Nothing VanillaSkills adds is registered to the game's registries — that is what keeps vanilla clients working — so `/give` cannot name its items. `/skill give` is the way to get them.

## Translations

Every menu, message, item name, quest, crate and advancement is translatable **per player**, from the language their client reports. **English** and **Traditional Chinese (zh_tw)** ship complete (711 keys each). To add a language, start from `en_us.json` in the repo, translate the values only, and it can be bundled into both the mod and the pushed texture pack.
