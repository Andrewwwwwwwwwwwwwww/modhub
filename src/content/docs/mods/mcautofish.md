---
title: MC-AutoFish
description: Cast once and let it fish — reel in on the bite, recast, protect the rod before it breaks, and swap in a fresh one when it runs out.
---

**MC-AutoFish** fishes for you. Cast once and it reels in the moment something bites, waits a beat, and casts again. It also looks after the rod: it stops before one breaks, and swaps a spare into your hand when it does.

It runs on the client alone, so it works in singleplayer and on **vanilla servers** with nothing installed server-side. Bites are read from the bobber's splash sound, and a rod swap uses the same inventory action a vanilla hotbar key already sends.

## Requirements

- Minecraft **26.3** or **26.2**
- **Fabric** with Fabric API
- Client only — servers need nothing, and other players need nothing.

## Download

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/mc-autofish)

## Features

- **AutoFish** — reels in on the bite and recasts after a short delay. It only recasts a line it reeled in itself, so it never fights you while you are fishing by hand.
- **Rod Protection** — stops the automation casting once a rod is down to its last few durability points, rather than letting it break.
- **Auto Replace** — when the rod in your hand runs out, the healthiest spare in your inventory is swapped in. This works whether or not AutoFish is on, so a rod that snaps during manual fishing is replaced too.

## Keys

All three are rebindable under **Options → Controls → MCAutoFish**.

| Key | Action |
| --- | --- |
| `-` | Toggle AutoFish |
| `=` | Toggle Auto Replace |
| `\` | Toggle Rod Protection |

Each press flashes the new state above the hotbar in colour — green for on, red for off. The three keys are the whole interface; there is no settings screen.

## Configuration

The toggles are saved to `config/mcautofish.json` and survive a restart.

| Setting | Default | What it does |
| --- | --- | --- |
| `autoFish` | `true` | Reel in on the bite and recast. |
| `autoReplace` | `true` | Swap in a spare rod when the one in hand runs out. |
| `rodProtection` | `true` | Stop the automation before a rod breaks. |

## Notes

Rod protection guards the automation only — it will not stop you casting a nearly-broken rod yourself.
