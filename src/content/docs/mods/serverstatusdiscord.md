---
title: ServerStatusDiscord
description: A single-server Minecraft <-> Discord bridge — live status in a channel topic, two-way chat with skin-head avatars, account linking, an OP-gated console channel, and in-game @mentions.
---

**ServerStatusDiscord (SSD)** bridges one Minecraft server and one Discord server: a live status line in your chat channel's topic, two-way chat with skin-head avatars, MC-first account linking, an OP-gated console channel, in-game `@mentions`, and an update checker.

## Requirements

- Minecraft **26.2**, **Fabric** with Fabric API
- Server-side (vanilla clients are fine).

## Features

- **Live status in the chat channel topic** — the chat channel's topic shows a live status line, e.g. `✅ 2/12 player(s) online | Server started <14 hours ago> | Last updated: <today 6:40 PM>`, using Discord's live timestamp pills. It becomes `🛑 Server offline …` when the server stops.
- **Two-way chat bridge** — in-game chat appears in a Discord channel and messages there are broadcast in-game (with a distinct blurple `[Discord]` tag).
- **Skin-head chat avatars** — Minecraft messages post to Discord as a pseudo-user showing the player's name and skin head (works for everyone, keyed on UUID).
- **Formatted event messages** — join/leave, deaths, advancements (with the description underneath), `/say`, and server start/stop are posted by the bot with per-type icons.
- **Account linking (MC-first)** — players run `/link` in-game for a 6-character click-to-copy code, then `/link <code>` on Discord (slash command, or typed in the chat channel). Linking can only ever start in-game. Unlinked players get a short reminder on join.
- **In-game @mentions** — typing `@DiscordName` in chat pings that linked user on Discord (only the resolved user — never `@everyone`).
- **OP-gated console channel** — messages in a designated private channel run as server commands, with the output replied back, but only for users whose linked Minecraft account is a server operator.
- **Slash commands** — `/link`, `/unlink`, `/update` (checks for a newer SSD release).

## Configuration

A config file is created at `config/serverstatusdiscord.json` on first run:

```json
{
  "botToken": "your-bot-token-without-the-Bot-prefix",
  "chatChannelId": "the-chat-channel-id-here",
  "chatWebhookUrl": "https://discord.com/api/webhooks/...",
  "consoleChannelId": "the-console-channel-id-here"
}
```

- **botToken** — required for everything. Discord Developer Portal → your app → Bot → Reset Token. Enable the **Message Content Intent**, and invite the bot with the `applications.commands` scope (for slash commands) and **Manage Channels** on the chat channel (to edit its topic).
- **chatChannelId** — the two-way chat bridge channel; its topic shows the live status line.
- **chatWebhookUrl** — a webhook on the chat channel, used to post player messages with skin-head avatars.
- **consoleChannelId** — a private channel where OP-linked users can run console commands.

Leave any field blank to disable that feature. Account bindings are stored in `config/serverstatusdiscord/links.json`.

## Links

- [GitHub](https://github.com/Andrewwwwwwwwwwwwwww/ssd)
