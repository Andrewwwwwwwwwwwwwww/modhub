---
title: VanillaSkills
description: A skill tree, five tiers of craftable gear, quests, shards, a shop and crates for Minecraft — Fabric and NeoForge.
---

VanillaSkills replaces vanilla's progression with one of its own: **experience is removed entirely** and **Skill Shards** take its place — earned from advancements, spent in a **15-lane skill tree**, at the anvil, and at the **Infusing Table** that replaces enchanting. On top of that sit **five tiers of craftable gear** that pick up where netherite leaves off, a **Bounty Board** with a rotating shop, and **crates** you fish out of the water.

Almost all of its content — the skill tree, quests, shop, crates and feats — lives in **datapack files**, so a server can rewrite any of it without touching code. It runs on **Fabric** and **NeoForge**, and custom textures reach vanilla clients through an automatically pushed resource pack: nobody installs anything by hand.

## Requirements

- Minecraft **26.2** or **26.1.2**
- **Fabric** (with Fabric API) or **NeoForge**
- Install on the **server**. Vanilla clients are fully supported (they receive the texture pack on join); a client install is optional.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)

## Playing via the VSP modpack

VanillaSkills is the centerpiece of **VanillaSkillsPlus (VSP)**, a ready-to-play modpack that bundles it with the rest of the server's mods. It comes as two separate CurseForge downloads:

- **[VSP - Player Pack](https://www.curseforge.com/minecraft/modpacks/vsp-player-pack)** — for anyone *joining* the server. Install it through the CurseForge app; it pulls VanillaSkills and every other mod automatically. Launch it and connect to the server's address — nothing to configure.
- **[VSP - Server Pack](https://www.curseforge.com/minecraft/modpacks/vsp-server-pack)** — for whoever *hosts* the server. Download it, unzip it on your host machine (or upload it to your hosting panel), open `eula.txt` and set `eula=true`, then run the included start script (`start.bat` on Windows, `start.sh` on Linux). It boots a Fabric server with all the server-side mods already in place. Once it's up, share your server's IP with players so they can connect using the Player Pack.

You don't need both — players only need the Player Pack, and a host only needs the Server Pack.

## Experience is gone

Nothing drops or grants XP: not mobs, not mining, not smelting, not breeding, not furnaces. No orbs spawn at all, and Bottles o' Enchanting no longer appear in loot or villager trades. The experience bar shows your banked **Skill Shards** instead.

Everything that used to cost levels now costs Skill Shards — anvil work, and the Infusing Table that replaces the enchanting table.

## The two currencies

- **Skill Shards** — earned by completing **advancements** (both vanilla and VanillaSkills' own). They pay for most of the skill tree, anvil costs and infusing. Only real advancements count; datapack advancements (e.g. VanillaTweaks) do not.
- **Quest Shards** — earned from **Bounty Board** quests. They pay for the gear-unlock lanes (Armorsmith and Toolsmith) and the Quest Shop. Convert 3 Quest Shards into 1 Skill Shard at the shop, one way only.

## Skill Shards are a real item

Skill Shards are not just a number any more. Withdraw them from the skill tree as **Unstable Skill Shards**, and right-click one to bank it again — so they can be traded, stored or handed to another player.

- **Unstable Skill Shard Block** — nine shards compressed. It also **generates naturally** in all three dimensions, deep underground, and is the mod's ore. Only a **Crystalline-or-better pickaxe** can harvest it; anything weaker shatters it for nothing.
- **Stable Skill Shard Block** — crafted, not found. It **damages hostile mobs** in a 3-block radius every second, **merges** with adjacent blocks (up to 4) to widen that area, is **immune to explosions**, and works as a **beacon base** with triple range and a bonus amplifier level.

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

## Gear tiers

Five craftable tiers extend the vanilla ladder. Each is built on a vanilla base item (so it inherits that base's behaviour) but with its own stats, durability and colour. Crafting a tier is gated behind the matching **Armorsmith** / **Toolsmith** node unless you disable that in the config.

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
4. **One Dragon Scale** fully repairs a piece, for 20 Skill Shards.

Two signature perks:

- **Dragon + Elytra fusion** — combine an Elytra into the **Dragon chestplate** and it gains gliding while keeping full Dragon armor. The elytra is stored inside the item, so you can split them apart later with **both** items' enchantments intact — they're never merged.
- **Deepslate insta-mine** — the Dragon pickaxe carries +18 mining efficiency. With **Efficiency V + Haste II + a fully-leveled Prospector lane**, it **instantly breaks deepslate**.

## The Infusing Table

The enchanting table becomes the **Infusing Table** — same block, no lapis, no levels.

- It reads enchanted books out of **chiseled bookshelves** placed around it, in the same layout a vanilla table wants its bookshelves.
- It offers exactly the enchantments those books hold, and you can pick **several at once**.
- It charges **Skill Shards** (3 per level by default).
- **Books are not consumed.** Shelve a book once and that enchantment is available forever — which is why the Quest Shop sells low-level books, and why anvils no longer apply books directly to gear.

Anvils still combine two books together, and still charge Skill Shards.

## Crates

Fished out of the water, right-clicked to open. Opening one spins a slot-machine reel in front of you before it pays out.

| Crate | Where |
| --- | --- |
| **Wooden**, **Copper**, **Iron**, **Diamond** | anywhere — a rarity ladder |
| **Frozen** | frozen and snowy biomes |
| **Lush** | jungle, swamp and lush caves |
| **Desert** | desert, badlands and savanna |

Every crate can contain Unstable Skill Shards, and each biome variant has its own themed loot. **Unboxing** is a fishing-rod enchantment that raises your crate rate — found in crates and sold in the shop.

Crates are datapack-defined, so a server can add its own, change any loot table, or turn them off.

## Mining, gates and Fortune

- **Deepslate gate** (optional, on by default) — deepslate and its ores require a **Steel-tier-or-better pickaxe** (vanilla diamond/netherite also qualify). Try to mine it with a weaker pick and you're told why. Creative bypasses it.
- **Fortune boost** (optional, on by default) — **Fortune IV and V** grant extra base ore drops beyond what vanilla gives (a 75% chance of one extra roll per level above III), on all the common ores. **Fortune V** additionally has a **0.5% chance to drop a bonus Ancient Debris**, which vanilla Fortune normally ignores entirely.
- **Nether roof** (optional, on by default) — standing above Y 128 in the Nether hurts.

## Quests, shop and feats

- **Bounty Board** — new players work a fixed 15-quest starter board, then graduate to a shared board of 6 quests that rerolls every 5 hours. Rewards are **Quest Shards**.
- **Quest Shop** — 8 offers, restocked daily, bought with Quest Shards or Skill Shards. Stock runs from food and building blocks up to **enchanted books**, which are capped at level I–II and priced well above everything else: a shelved book is permanent, so two cheap ones combined at an anvil is meant to be the route to a high level.
- **Feats** — one-time achievements for discoveries, bosses and the End.

All three are datapack-defined.

## Advancements

VanillaSkills adds its own advancement tree (crafting each alloy and set, forging Dragon Ingots, fusing the armored elytra, unlocking the whole skill tree, and more) — and since Skill Shards come from advancements, these directly feed your progression.

## Textures on vanilla clients

On join, the server pushes a **resource pack** so the custom gear and item names render even for players with no mod installed. The same textures are available on their own as [VS - Textures](/modhub/mods/vs-textures/). Pack pushing can be turned off in the config if you host your own.

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
| `anvilBooksOnItems` | Restore putting enchanted books straight onto gear at an anvil. Off by default. |
| `shardAuraRadius` / `shardAuraDamage` / `shardMaxMerge` | Stable Skill Shard Block behaviour. |
| `crateFishingWeight` / `crateReel*` | How often crates are fished up, and the opening animation. |
| `questsPerRotation` (1–6) / `questShopSlots` | Board and shop size. |
| `bountyRefreshHours` / `shopRefreshHours` | Rotation timers. |
| `feats` / `starterQuests` | Turn feats on, and whether new players get the starter board. |
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

Every menu, message, item name, quest, crate and advancement is translatable **per player**, from the language their client reports. **English** and **Traditional Chinese (zh_tw)** ship complete (689 keys). To add a language, start from `en_us.json` in the repo, translate the values only, and it can be bundled into both the mod and the pushed texture pack.

## Add-ons

- **[Casino](/modhub/mods/vscasino/)** — adds a casino to the skill screen: slots, blackjack and
  video poker, all played with your Quest Shards.

## Links

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)
- [GitHub — Fabric, 26.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills)
- [GitHub — NeoForge, 26.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge)
- [GitHub — Fabric, 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-mc26.1.2)
- [GitHub — NeoForge, 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge-mc26.1.2)
