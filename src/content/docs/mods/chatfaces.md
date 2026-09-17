---
title: ChatFaces
description: Each player's head drawn next to their name in chat — server-side only, for completely vanilla clients.
---

**ChatFaces** puts every player's head beside their name in chat. It runs on the server and nowhere else: players connect with an unmodified client and see the heads straight away, with no mod to install, no resource pack to accept and nothing to click through.

## Requirements

- Minecraft **26.1.2**, **26.2** or **26.3** — one jar covers all of them
- **Fabric** or **NeoForge**
- Install on **the server only** — players need nothing. It works in singleplayer too, where it runs on the integrated server.

## Download

- [GitHub releases](https://github.com/Andrewwwwwwwwwwwwwww/chatfaces/releases)

## How it works

A head here isn't an image pasted into the chat window. It's a sprite object — one of the content types a text component can already carry — so the whole feature is a rewritten sender name on the way out, and the client draws the head from a skin it already holds.

- **Nothing but a UUID crosses the wire.** Clients resolve it against their own player list, which carries the profile of everyone online, so the head arrives in full colour without skin data being sent and without anyone calling out to the session servers. A UUID that misses falls back to the default skin rather than an empty box.
- **Chat stays signed.** A chat packet keeps the signed body in a field of its own, separate from the name, so messages keep their verification instead of picking up the "unverified" marker that comes with reformatting chat through system messages.

## Scope

Heads appear on ordinary player chat. The tab list, death messages, join and leave lines, `/me`, `/say` and `/msg` are left alone.

## Configuration

`config/chatfaces.json`, read at startup and rewritten with an option guide:

| Option | Default | What it does |
| --- | --- | --- |
| `enabled` | true | Master switch. false leaves chat exactly as vanilla sends it. |
| `hatLayer` | true | Draw the skin's outer layer (hat, hair) over the face. |
| `gapAfterFace` | true | A space between the head and the name instead of sitting them flush. |

## One jar, both loaders

Every API the mod touches is identical across the supported game versions, so the same compiled code runs on all of them, and a jar can carry both loaders' metadata at once with each loader reading only its own. Shared code lives apart from either loader; each loader contributes one entrypoint and one metadata file.

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/chatfaces)
- [Latest release](https://github.com/Andrewwwwwwwwwwwwwww/chatfaces/releases/latest)
