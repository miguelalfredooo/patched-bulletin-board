# Design By Bulletin™ — Telegram Bot Reference

Complete operational reference for the @DesignByBulletin_bot Telegram bot.

---

## Bot Identity

| Field | Value |
|---|---|
| Bot name | Design by Bulletin™ |
| Telegram username | @DesignByBulletin_bot |
| Telegram URL | t.me/DesignByBulletin_bot |
| Bot ID | 8649394460 |
| Token prefix | 8649394460:AAE-qmm0k… |
| Created | 2026-05-07 |

---

## OpenClaw Configuration

### Agent

| Field | Value |
|---|---|
| Agent ID | `bulletin-bot` |
| Agent name | Design By Bulletin™ Bot |
| Workspace | `/Users/blackmachete/.openclaw/workspace-bulletin-bot/` |
| Auth dir | `/Users/blackmachete/.openclaw/agents/bulletin-bot/agent/` |
| Model | `anthropic/claude-sonnet-4-6` (Sonnet) |

### Telegram Account

| Field | Value |
|---|---|
| Account ID | `bulletin-bot` |
| Account name | Design By Bulletin |
| dmPolicy | `open` (responds to any user) |
| groupPolicy | `allowlist` |
| allowFrom | `*` |

### Binding

```
channel: telegram
accountId: bulletin-bot
→ agentId: bulletin-bot
```

Inbound messages to @DesignByBulletin_bot are routed to the `bulletin-bot` agent, which runs from `/workspace-bulletin-bot/`.

---

## Workspace Files

```
/Users/blackmachete/.openclaw/workspace-bulletin-bot/
├── SOUL.md       — Bot identity, voice, and editorial register
├── AGENTS.md     — Inbound message handling, commands, format rules
├── USER.md       — Subscriber context
└── HEARTBEAT.md  — Empty (no heartbeat needed)
```

### SOUL.md — What the bot is
Warm, editorial, Apartamento register. A well-read friend, not a service agent. Not a general assistant. Not Alfredo.

### AGENTS.md — How the bot responds
Full inbound command handler. See [Commands](#commands) below.

---

## Commands

| Input | Response |
|---|---|
| `/start` or first contact | Onboarding flow — 3 questions, then first personalized issue |
| `hello`, `hi` | Same as `/start` |
| `digest`, `today`, `issue`, `send it` | Sends today's full issue immediately |
| `preview`, `act 1` | Sends ASCII visual preview only (no text, no links) |
| `change`, `preferences`, `settings` | Restarts onboarding from Q1 |
| `help`, `?` | Sends command reference |
| Anything else | Warm, brief editorial reply; redirects if off-topic |

### Onboarding Flow

**Q1** — Role: Product Design / Visual & Brand / Product Management / Other  
**Q2** — Content preference: Inspiration / Knowledge / Tools & practice / Other  
**Q3** — Reading style: Quick hits / Editorial / Magazine / Other  

After Q3 → builds personalized first issue based on answers and sends it.

---

## Daily Cron Jobs

All three crons run as `bulletin-bot` agent, isolated sessions.

| ID | Name | Schedule | Status |
|---|---|---|---|
| `39b83092` | Visual Preview (Act 1) | 8:00am PT daily | ✅ enabled |
| `f7eae541` | Full Edition (Act 2) | 8:30am PT daily | ✅ enabled |
| `e53a42d4` | Onboarding Flow | 8:00am PT daily | ✅ enabled (⚠️ see note) |
| `4dfcd8d8` | Grid Edition | 8:00am PT daily | ❌ disabled |

> ⚠️ **Onboarding cron note:** The onboarding cron fires daily as a broadcast, which is architecturally wrong — onboarding should only fire when a new user messages the bot. Consider disabling this cron and letting the inbound binding handle it naturally via `/start`.

### Act 1 — Visual Preview (8:00am)
- Pure ASCII art, 11 pieces, no labels, no links
- Locked masthead sent first
- Closes with one sentence + "Full edition in 30 minutes"
- Reads canonical governance files before composing

### Act 2 — Full Edition (8:30am)
- Same theme as Act 1
- Each of 11 sections: ASCII art + section title + one sentence + link
- Closes with one resonant sentence
- Appends entry to `archive-log.md` after send

---

## Canonical Source Files

The bot reads these before composing any issue:

| File | Purpose |
|---|---|
| `governance/ASCII-VISUAL-DNA.md` | Visual format rules, width limits, five formats |
| `governance/ASCII-CONSTRUCTION.md` | How to build ASCII art correctly |
| `BRIEF.md` | Project brief and Alfred's taste |
| `STYLE-GUIDE.md` | Editorial voice, tone, writing rules |
| `archive-log.md` | Published issue log — theme history, format history |
| `modules/` | 11 section specs (Art, Painting, Illustration, etc.) |
| `utils/figlet.js` | Format C typographic pieces — always `renderText(text, register, 2)`, never hand-drawn |

All paths relative to: `/Users/blackmachete/projects/bulletin-board/projects/bulletin-board/`

---

## Design By Bulletin™ Format Rules

### Locked Masthead — verbatim, never regenerate
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━
```

### Hard Constraints
- Max width: **36 characters** (safe render at 375px Telegram viewport)
- Max height: **15 lines** per ASCII piece
- All ASCII art wrapped in ` ``` ` code blocks
- No labels, titles, or links inside Act 1 art
- No two consecutive pieces in the same format
- All five formats (A, B, C, D, E) must appear across 11 pieces
- Format C: always via `utils/figlet.js` — never hand-drawn
- Format C: always call `renderText(text, register, 2)` with leftPad=2 — never call without leftPad
- One closing sentence per issue — not per piece

### Five Formats
| Format | Description |
|---|---|
| A — Classic Object | Clean outline of a single recognizable subject |
| B — Geometric Frame | Subject inside a ruled border |
| C — Typographic | FIGlet via `utils/figlet.js` — always `renderText(text, register, 2)` with leftPad=2 |
| D — Two Column | Two subjects in dialogue; left ~20-22 chars, gap 1-3, right fills remainder |
| E — Full Spread | Full 36-char width, three density zones, eye should travel |

### Section → Format Mapping
| Section | Primary | Secondary |
|---|---|---|
| Art | A | E |
| Painting | A | D |
| Illustration | D | A |
| Sculpture | A | B |
| Culture | E | C |
| Photography | E | A |
| Art History | B | A |
| Opinions | C | B |
| Design & AI Tools | C | D |
| Product & Process | B | C |
| Visual & Brand | D | B |

---

## Published Issues

See full log: `/Users/blackmachete/projects/bulletin-board/projects/bulletin-board/archive-log.md`

| Issue | Date | Theme |
|---|---|---|
| 002 | 2026-05-06 | The Mark |
| 003 | 2026-05-06 | Handmade |

---

## Other Telegram Bots (for reference)

| Account | Bot | Agent | Policy |
|---|---|---|---|
| `ovni-oculto` | @Ovnioculto_bot | `victor` | pairing — Alfred only |
| `alfredo` | @Bm_generalist_bot | `alfredo` | open — Alfred + * |
| `bulletin-bot` | @DesignByBulletin_bot | `bulletin-bot` | open — anyone |

---

## Troubleshooting

### Bot not responding
1. Check `openclaw status` — Telegram channel should show `OK · accounts 3/3`
2. Check logs: `tail -50 /tmp/openclaw/openclaw-YYYY-MM-DD.log | grep bulletin-bot`
3. Common errors:
   - `Telegram polling already active ... refusing duplicate poller` → stale account still running; remove the old account entry from config and do a full `openclaw gateway restart`
   - `No API key found for provider "anthropic"` → copy auth-profiles.json: `cp /Users/blackmachete/.openclaw/agents/alfredo/agent/auth-profiles.json /Users/blackmachete/.openclaw/agents/bulletin-bot/agent/auth-profiles.json`
   - Bot responding with Qwen instead of Sonnet → auth issue above

### Cron not firing
- Check cron list: `openclaw cron list`
- Check last run status and error in cron state
- Full Edition (Act 2) has timed out before at 300s — if it's consistently timing out, the reconnaissance step is taking too long; trim the number of sources it hits

### To trigger a manual issue send
```
openclaw cron run 39b83092-7b9c-4b56-bf7d-8a19519e5b81  # Act 1
openclaw cron run f7eae541-e3ec-4abe-859c-1aba22498b46  # Act 2
```

---

*Last updated: 2026-05-07*
