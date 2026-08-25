---
title: VanillaSkills
description: A skill tree, five tiers of craftable gear, quests, shards, a shop and crates for Minecraft — Fabric and NeoForge.
---

VanillaSkills replaces vanilla's progression with one of its own: **experience is removed entirely** and **Skill Shards** take its place — earned from advancements, spent in a **15-lane skill tree**, at the anvil, and at the **Infusing Table** that replaces enchanting. On top of that sit **five tiers of craftable gear** that slot in between the vanilla tiers, a **Bounty Board** with a rotating shop, and **crates** you fish out of the water.

Almost all of its content — the skill tree, quests, shop, crates and feats — lives in **datapack files**, so a server can rewrite any of it without touching code. It runs on **Fabric** and **NeoForge**, and custom textures reach vanilla clients through an automatically pushed resource pack: nobody installs anything by hand.

## Requirements

- Minecraft **26.2** or **26.1.2**
- **Fabric** (with Fabric API) or **NeoForge**
- Install on the **server**. Vanilla clients are fully supported (they receive the texture pack on join); a client install is optional.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)

## The documentation

- **[Quick guide](/modhub/mods/vanillaskills/quick-guide/)** — the short version: what changed, how shards work, and fast answers to the questions everyone asks. **Start here.**
- **[Progression & economy](/modhub/mods/vanillaskills/progression/)** — the two shard currencies, the 15-lane skill tree, quests, the shop, crates, feats, and how other mods' advancements feed in.
- **[Gear & crafting](/modhub/mods/vanillaskills/gear/)** — the five gear tiers, the Dragon end-game chain, the Infusing Table, the re-priced anvil, the Satchel, and the mining gates.
- **[Running a server](/modhub/mods/vanillaskills/server-guide/)** — configuration, commands, datapacks, translations, and how textures reach vanilla clients.

## Upgrading from 1.7.x

**2.0 is a breaking release. Back up your world, and test the upgrade on a copy first** — the save changes are one way.

What carries over on its own:

- **Gear** keeps working. Pieces crafted before 2.0 are repointed to the new textures as their owner logs in. That now includes the two cases that used to slip through: a piece that had lost its marker altogether and was rendering as a plain vanilla sword or helmet, and gear sitting **inside a shulker box** rather than loose in the inventory. Enchantments, damage and anvil names are untouched.
- **Skill points, unlocked nodes and bounty progress** carry over. Quests move from list positions to stable ids automatically.

What needs a decision:

- **Two vanilla blocks change meaning.** Reinforced deepslate becomes the Unstable Skill Shard Block and lodestone the Stable one. Ancient cities only generate obsidian in *newly generated* chunks, so cities already in your world keep their reinforced deepslate and become farmable.
- **Experience is removed** by default, so existing levels stop mattering and the XP bar shows banked Skill Shards instead. Set `experienceEnabled` to put vanilla experience back.
- **Steel moved** from the anvil to the furnace: an iron block smelts into three ingots.
- Some commands were removed, and `/skill points` is now `/skill skillshards`.

## Playing via the VSP modpack

VanillaSkills is the centerpiece of **VanillaSkillsPlus (VSP)**, a ready-to-play modpack that bundles it with the rest of the server's mods. It comes as two separate CurseForge downloads:

- **[VSP - Player Pack](https://www.curseforge.com/minecraft/modpacks/vsp-player-pack)** — for anyone *joining* the server. Install it through the CurseForge app; it pulls VanillaSkills and every other mod automatically. Launch it and connect to the server's address — nothing to configure.
- **[VSP - Server Pack](https://www.curseforge.com/minecraft/modpacks/vsp-server-pack)** — for whoever *hosts* the server. Download it, unzip it on your host machine (or upload it to your hosting panel), then run the included start script (`start.bat` on Windows, `start.sh` on Linux). It boots a Fabric server with all the server-side mods already in place. Once it's up, share your server's IP with players so they can connect using the Player Pack.

You don't need both — players only need the Player Pack, and a host only needs the Server Pack.

## Add-ons

- **[Casino](/modhub/mods/vscasino/)** — adds a casino to the skill screen: slots, blackjack and
  video poker, all played with your Quest Shards.
- **[VS - Textures](/modhub/mods/vs-textures/)** — the mod's textures as a standalone resource pack,
  for using the look without the mod.

## Links

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/vanilla-skills)
- [GitHub — Fabric, 26.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills)
- [GitHub — NeoForge, 26.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge)
- [GitHub — Fabric, 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-mc26.1.2)
- [GitHub — NeoForge, 26.1.2](https://github.com/Andrewwwwwwwwwwwwwww/vanillaskills-neoforge-mc26.1.2)
