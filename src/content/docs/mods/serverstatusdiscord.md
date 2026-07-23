---
title: ServerStatusDiscord
description: Post server online/offline notifications to a Discord webhook and keep a channel's topic in sync with the live player count.
---

Keep your community in the loop: **ServerStatusDiscord** posts online/offline embeds to a Discord webhook when your server starts and stops, and keeps a channel's topic updated with the live player count.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Server-side.

## Download

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/ssd)

## Features

- **Online/offline embeds** — a coloured embed is sent to your webhook when the server starts and stops.
- **Live player count** — a Discord channel's topic is kept current as players join and leave (e.g. `Players online: 3/20`), switching to `Server Offline` on shutdown.
- **Rate-limited** — channel-topic edits are debounced server-side to stay under Discord's 2-per-10-minutes cap and avoid 429s on busy servers.
- **Async** — all Discord traffic is fire-and-forget, so the server tick is never blocked.

## Configuration

A config file is created at `config/serverstatusdiscord.json` on first run:

```json
{
  "webhookUrl": "https://discord.com/api/webhooks/...",
  "botToken": "your-bot-token-without-the-Bot-prefix",
  "playerCountChannelId": "the-channel-id-here"
}
```

- **webhookUrl** — Channel → Edit → Integrations → Webhooks → New Webhook → Copy URL.
- **botToken** — only needed for the player-count topic. The bot needs `Manage Channels` in the target channel.
- **playerCountChannelId** — right-click the channel (Developer Mode on) → Copy Channel ID.

Leave any field blank to disable that feature.

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/ssd)
