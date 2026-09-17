---
title: MCAutoFish
description: Client-side auto fishing — reels in on the bite, recasts, and swaps in a fresh rod before the old one breaks.
---

**MCAutoFish** fishes for you. Cast once and it reels in the moment a fish bites, waits a beat, and casts again. It also looks after your rod, pausing before it breaks and swapping in a spare from your inventory.

## Requirements

- Minecraft **26.3** or **26.2**, **Fabric** with Fabric API
- Install on **the client only** — servers need nothing.

Bites are detected from the bobber's splash sound and rod swaps use the same inventory action the vanilla hotbar keys send, so it works in singleplayer and on **fully vanilla servers**.

## Download

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/mcautofish)

## Features

- **AutoFish** — reel in on the bite, recast after a short delay. It only recasts lines it reeled in itself, so it never fights your manual fishing.
- **Rod Protection** — stops casting when the rod is down to its last few durability points instead of letting it break.
- **Auto Replace** — when the rod in your hand breaks, or just before if protection is on, the healthiest spare in your inventory is swapped into your hand.

## Keys

All rebindable under **Options → Controls → MCAutoFish**:

| Key | Action |
| --- | --- |
| `-` | Toggle AutoFish |
| `=` | Toggle Auto Replace |
| `\` | Toggle Rod Protection |

Each press flashes the new state above the hotbar, green for on and red for off. The three toggles are the whole interface — there's no settings screen — and they're saved to `config/mcautofish.json` so they survive a restart.

## Notes

- Rod protection guards the automation; it doesn't stop you casting a nearly-broken rod by hand.
- Auto Replace works with AutoFish switched off, so a rod that snaps while you're fishing manually is still replaced.
