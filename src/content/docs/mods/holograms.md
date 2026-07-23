---
title: Holograms
description: Server-side multi-line holograms using native display entities, with a chest-GUI editor.
---

Create floating holograms on your server using vanilla **display entities** (`text_display`, `item_display`, `block_display`) — so vanilla clients need nothing installed, and the holograms render natively and persist with their chunks. A clean reimplementation of the old armor-stand-packet approach for modern Minecraft.

## Requirements

- Minecraft **26.1.2**, **Fabric** with Fabric API
- Server-side; vanilla clients supported.

## Download

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/holograms)

## Features

- **Multi-line** holograms mixing text, item icons, and block models.
- **Rows** — several item/block icons side-by-side on one line, great for showing a recipe or a list of required materials.
- **Chest-GUI editor** (`/holo edit <name>`) — reorder, edit, and delete lines visually, add lines from the item/block in your hand, manage click actions, and tune line spacing. No command-typing for layout.
- **Text formatting** — legacy `&` colour/format codes plus `&#rrggbb` 24-bit hex colours.
- **Click actions** (right-click) — run command(s) as the clicking player (elevated), send a message, and/or play a sound, via an invisible interaction entity over the hologram.
- Definitions persist in `<world>/holograms/holograms.dat`.

## The editor (recommended)

`/holo edit <name>` opens a chest menu: one row per line with reorder/edit/delete, a control bar to add text/items/blocks/rows, manage click actions, page through, and adjust line spacing. A row editor builds horizontal icon strips (hold each ingredient and click Add to lay out a recipe).

## Commands

`/holograms` (aliases `/holo`, `/hd`), op level 2. Highlights: `create`, `edit`, `remove`, `list`, `info`, `movehere`, `teleport`, `spacing`, and the line/icon commands (`addline`, `setline`, `insertline`, `removeline`, `moveline`, `additem`, `addblock`, `additemhand`).

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/holograms)
