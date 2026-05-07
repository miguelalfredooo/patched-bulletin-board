# Design By Bulletin™ Telegram Bot Setup — Complete Documentation

**Date:** 2026-05-07  
**Status:** ✅ Working  
**Bot:** @DesignByBulletin_bot (ID: 8649394460)

---

## Architecture

### Components
- **Public Bot:** `@DesignByBulletin_bot` — Telegram interface for readers/subscribers
- **Agent:** `bulletin-bot` in OpenClaw — handles all bot logic
- **Workspace:** `~/.openclaw/workspace-bulletin-bot/` — agent configuration
- **Gateway:** Local OpenClaw gateway (port 18789) — routes messages to agent

### Session Isolation Pattern
Each Telegram user gets a completely isolated session with no cross-user context bleed. This is achieved via OpenClaw's `dmScope` configuration.

---

## Configuration

### 1. OpenClaw Config (`~/.openclaw/openclaw.json`)

#### Top-level session config
```json
{
  "session": {
    "dmScope": "per-account-channel-peer"
  }
}
```

**What this does:** Each Telegram user (peer) gets their own isolated session. No conversation history from other users is injected into agent context.

**Why:** Without this, all DMs would collapse into a single shared session (`agent:bulletin-bot:main`), and the agent would see all users' conversations together.

#### Telegram channel config
```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "accounts": {
        "bulletin-bot": {
          "name": "Design By Bulletin",
          "botToken": "8649394460:AAE-qmm0kZWk0g7DtGiFwJsloSlzO1aUFiU",
          "dmPolicy": "open",
          "groupPolicy": "allowlist",
          "allowFrom": ["*"],
          "dmHistoryLimit": 0,
          "streaming": {
            "mode": "off"
          }
        }
      }
    }
  }
}
```

**Notes:**
- `botToken`: Current active token from BotFather (not the deleted bot's token)
- `dmPolicy: "open"`: Allows any user to DM the bot
- `dmHistoryLimit: 0`: Optional — prevents Telegram-side chat history from being prepended to context (redundant with per-peer sessions, but doesn't hurt)
- `streaming.mode: "off"`: Disables streaming preview (typing indicator). Bot sends complete message at once. Tradeoff: no visual feedback during long message generation, but cleaner UX

#### Agent entry
```json
{
  "agents": {
    "list": [
      {
        "id": "bulletin-bot",
        "name": "Design By Bulletin™ Bot",
        "workspace": "/Users/blackmachete/.openclaw/workspace-bulletin-bot",
        "thinkingDefault": "off",
        "reasoningDefault": "off",
        "verboseDefault": "off"
      }
    ]
  }
}
```

**Critical fields:**
- `thinkingDefault: "off"` — Disables extended thinking budget at model level
- `reasoningDefault: "off"` — Suppresses reasoning visibility in delivery
- `verboseDefault: "off"` — Suppresses verbose tool progress output (prevents "Exec: list files" leaking to Telegram)

#### Binding
```json
{
  "bindings": [
    {
      "agentId": "bulletin-bot",
      "match": {
        "channel": "telegram",
        "accountId": "bulletin-bot"
      }
    }
  ]
}
```

### 2. Agent Workspace (`~/.openclaw/workspace-bulletin-bot/`)

#### AGENTS.md
Contains bot instructions. Current version is minimal for testing:
- No assumption of previous context
- Responds to basic commands
- Treats every message as fresh input

Full production instructions will include:
- `/start` → onboarding (3 questions)
- `digest` → send today's edition
- `preview` → ASCII visual only
- `change` → restart onboarding
- `help` → command reference

#### auth-profiles.json
```json
{
  "anthropic:default": {
    "provider": "anthropic",
    "mode": "api_key",
    "api_key": "sk-ant-..."
  }
}
```

**Critical:** Must use literal API key string, not environment variable reference like `$ANTHROPIC_API_KEY`.

---

## Session Isolation — The Right Way

### The Problem We Solved

When the bot was first deployed, **all Telegram users' conversations were collapsing into a single shared session**. The agent would see:

```
User A: "What's today's issue?"
User B: "Send digest"
User A: "Change my preferences"
User B: "Help"
User A: "..." (sees User B's messages in context)
```

This happened because:
1. Default `dmScope` was `"main"` — all DMs map to the same session key
2. Session transcripts accumulate in `~/.openclaw/agents/bulletin-bot/sessions/sessions.json`
3. Each new message was added to the same 100k-token transcript
4. The agent saw all previous messages from all users

### What Doesn't Work (And Why)

**Attempt 1: `sessions.memory: "none"` in agent config**
- ❌ Field doesn't exist in agent schema
- ❌ `additionalProperties: false` means unknown fields are silently ignored
- ❌ Doesn't touch the root cause (session transcript accumulation)

**Attempt 2: `dmHistoryLimit: 0` in Telegram account config**
- ⚠️ Valid field, but solves the wrong problem
- ⚠️ Only strips Telegram-side chat history from inbound payload
- ⚠️ Doesn't prevent the agent's own session transcript from accumulating
- ⚠️ Doesn't isolate sessions between users

### The Correct Solution: `dmScope: "per-account-channel-peer"`

**Location:** Top-level `session` object in `openclaw.json`

```json
{
  "session": {
    "dmScope": "per-account-channel-peer"
  }
}
```

**What it does:**
- Each Telegram user (peer) gets a unique session key: `agent:bulletin-bot:telegram:bulletin-bot:<user_id>`
- No cross-user context injection
- Each user's transcript is separate
- Agent only sees one user's messages at a time

**Result:**
- User A's session: Only User A's messages
- User B's session: Only User B's messages
- User A never sees User B's context
- Each session starts fresh

### Cleanup After Enabling dmScope

**Old session transcript must be deleted:**
```bash
rm ~/.openclaw/agents/bulletin-bot/sessions/*.jsonl
echo '{}' > ~/.openclaw/agents/bulletin-bot/sessions/sessions.json
```

Then restart the gateway:
```bash
openclaw gateway restart
```

Without cleanup, the old bloated `main` session persists and could be referenced by new sessions.

### Output Suppression — Three Critical Defaults

**The Problem:** Initial testing showed verbose internal output leaking to Telegram:
- "Exec: list files..." (tool progress during execution)
- "completed: command..." (command completion logs)
- "Thinking..." (Telegram's native typing indicator)

**Root Causes:**
1. `verboseDefault` not set → Tool execution progress sent live to channel
2. `thinkingDefault` and `reasoningDefault` not set → Extended thinking could leak
3. `streaming.mode` not set → Telegram's streaming preview shows typing indicator

**The Solution:** Three configuration layers

**Layer 1: Agent-level defaults (openclaw.json agent entry)**
```json
"thinkingDefault": "off",
"reasoningDefault": "off",
"verboseDefault": "off"
```
- Suppresses extended thinking budget at model level
- Hides reasoning from delivery pipeline
- Prevents verbose tool progress output (the "Exec:" leaks)

**Layer 2: Account-level streaming (openclaw.json Telegram account)**
```json
"streaming": {
  "mode": "off"
}
```
- Disables streaming preview mode
- Bot sends complete message at once instead of live updates
- Eliminates Telegram's typing indicator
- Tradeoff: Users see no feedback during long generation, but cleaner output

**Why This Matters:**
- Public bot should never expose internal reasoning or tool calls
- Typing indicator can look like internal output leaking
- Tool progress spam ruins user experience
- Complete message delivery maintains editorial tone

**Testing:** After making these changes, restart gateway: `openclaw gateway restart`

---

## Testing Checklist

- [x] Bot responds to messages
- [x] No context bleed between users
- [x] Each user sees only their own conversation
- [x] Control UI also properly isolated
- [ ] `/start` onboarding works
- [ ] `digest` command works
- [ ] `preview` command works
- [ ] `change` command works
- [ ] `help` command works
- [ ] Crons fire at scheduled times

---

## Deployment Status

| Component | Status | Notes |
|---|---|---|
| Telegram bot registered | ✅ | @DesignByBulletin_bot, active |
| Bot token in config | ✅ | 8649394460:AAE-qmm0kZWk0g7DtGiFwJsloSlzO1aUFiU |
| OpenClaw gateway | ✅ | Running, Telegram channel OK |
| Session isolation | ✅ | dmScope: per-account-channel-peer |
| Agent workspace | ✅ | Configured, minimal AGENTS.md |
| Auth configured | ✅ | Literal API key in place |
| Crons | ✅ | Act 1 (8:00am), Act 2 (8:30am) enabled |
| Commands | ⏳ | Minimal test version, needs production logic |

---

## OpenClaw Patterns Applied

### 1. Session Scope Isolation
- **Pattern:** `dmScope: "per-account-channel-peer"`
- **Use case:** Multi-user bot where each user needs isolated context
- **Alternative scopes:** `"main"` (shared), `"per-channel"`, `"per-peer"` (across channels)

### 2. DM History Management
- **Pattern:** `dmHistoryLimit: 0` (optional)
- **Use case:** Suppress inbound message history from being prepended to context
- **Note:** Only needed if you want to additionally suppress Telegram's side history; dmScope handles the main isolation

### 3. Literal API Keys
- **Pattern:** Store literal key in `auth-profiles.json`, never `$ENV_VAR` references
- **Why:** OpenClaw agent config is static; environment expansion happens at gateway startup
- **Gotcha:** `$ANTHROPIC_API_KEY` in JSON is treated as literal string "$ ANTHROPIC_API_KEY", not expansion

### 4. Binding Pattern
- **Pattern:** Route channel→account→agent via `bindings` array
- **Structure:** Match on `channel` and `accountId`, route to `agentId`
- **Multiple bots:** Each account gets its own binding

---

## Troubleshooting

### "Deleted Account" in Telegram
- **Cause:** Old bot was deleted, cached in local chat history
- **Fix:** Delete the chat in Telegram, search bot name fresh, start new conversation

### Bot doesn't respond
- **Check 1:** `openclaw status` — verify Telegram channel is "OK"
- **Check 2:** Bot token valid — test with `curl https://api.telegram.org/bot<TOKEN>/getMe`
- **Check 3:** AGENTS.md has no syntax errors — agent tries to parse instructions
- **Check 4:** API key set — check `~/.openclaw/workspace-bulletin-bot/.openclaw/agent/auth-profiles.json`

### Bot references previous conversations
- **Cause:** `dmScope` not set, or old session transcript still exists
- **Fix:** Set `dmScope: "per-account-channel-peer"` and clear `~/.openclaw/agents/bulletin-bot/sessions/`

### Different users see each other's context
- **Cause:** All DMs in same session (`"main"`)
- **Fix:** Set `dmScope: "per-account-channel-peer"` at top level

---

## Next Steps

1. **Implement production AGENTS.md** — Full onboarding, command handling, file reading
2. **Test all commands** — `/start`, `digest`, `preview`, `change`, `help`
3. **Set up admin bot** — Separate interface for operational commands
4. **User testing** — Invite early readers
5. **Monitor logs** — Watch for errors in first week

---

*Last updated: 2026-05-07*
