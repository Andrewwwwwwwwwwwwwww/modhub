---
title: Traveler's Backpack Extras
description: Reskins for Traveler's Backpack — craft any backpack into a new look and it keeps its ability, tier, upgrades and contents.
---

**Traveler's Backpack Extras** adds backpack skins to [Traveler's Backpack](https://modrinth.com/mod/travelersbackpack). Craft any backpack into a new look and what you get back is *the same backpack*: same ability, same tier, same upgrades, same contents. Only its name and its model change.

So a bookshelf backpack reskinned as a Firewatch still does everything a bookshelf backpack does.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- **Traveler's Backpack 11.3.0** or newer
- Install on **both client and server**, since the skins are drawn on the client.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/travelers-backpack-extras)

## The skins

**Firewatch Backpack** and **Trapper's Backpack**, each a purpose-built model rather than a repaint.

## Recipes

Both are crafted from any Traveler's Backpack plus an empty bundle, ringed with the skin's material:

| | | |
| --- | --- | --- |
| material | material | material |
| material | any backpack | material |
| material | empty bundle | material |

- **Firewatch Backpack** — the material is a **campfire**
- **Trapper's Backpack** — the material is an **iron ingot**

Reskinning is one-way. If you want a plain-looking pack with no ability, reskin a plain backpack.

Each skin also appears in the Traveler's Backpack creative tab, and so in JEI and REI, which build their item lists from the creative tabs.

## Why the ability survives

A reskin is a data component on Traveler's Backpack's own item, not a new item of ours.

That distinction is the whole design. Traveler's Backpack chooses a pack's ability by item identity — it checks whether the item *is* the bookshelf backpack, and so on — which means a separate item could never carry the buff across. Keeping the original item and changing only how it is presented is what lets the ability survive the craft.

## How the models are drawn

The rendering is intercepted rather than replaced, because neither Traveler's Backpack's own renderer nor vanilla model JSON can express these shapes.

Traveler's Backpack paints a flat 64x64 texture onto one fixed silhouette. Vanilla model JSON allows rotation on a single axis, at fixed steps. Both of these models hang sub-assemblies at free angles on all three axes: a bear trap, antlers, straps, a shovel. So the geometry is baked out of the Blockbench export into a compact quad list and drawn directly.

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/tbextra)
- [Latest release](https://github.com/Andrewwwwwwwwwwwwwww/tbextra/releases/latest)
