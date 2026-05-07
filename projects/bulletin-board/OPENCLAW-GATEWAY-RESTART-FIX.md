# OpenClaw Gateway Restart Notification Fix
## Preventing System Messages From Reaching Public Telegram Users

**Date:** May 7, 2026  
**Status:** Implemented and tested  
**Related Configuration:** `openclaw.json` → `session.mainKey`

---

## The Problem

When the OpenClaw gateway restarts, it sends a "restarted successfully" notification to track that the restart completed. However, this notification was landing in public Telegram user chats instead of staying in the admin workspace.

**Impact:** Public users of @DesignByBulletinBot receiving unexpected system messages:
```
[System] Gateway restarted successfully
```

This breaks the editorial isolation: the bot should be a clean, professional interface for readers. System messages are leaking through.

---

## Root Cause

OpenClaw's default behavior for restart pings:

1. The gateway restarts and needs to notify *something* that it came back online
2. It looks for the "main" session to notify
3. **By default**, it resolves "main" dynamically to whichever session was **most recently touched**
4. If a public Telegram user just sent `/digest`, that session becomes "most recently touched"
5. OpenClaw routes the restart ping to that session (the public Telegram chat)
6. The notification appears in the user's chat

**The dynamic resolution:** OpenClaw has no fixed understanding of "what is the admin session?" — it just uses "last active" as a proxy.

---

## The Fix

Explicitly pin the "main" session to a specific, stable key via `session.mainKey` in `openclaw.json`:

```json
{
  "session": {
    "mainKey": "agent:alfredo:main"
  },
  "agents": {
    "list": [
      {
        "id": "alfredo",
        "name": "Alfredo — General Assistant",
        ...
      },
      {
        "id": "bulletin-bot",
        "name": "Design By Bulletin™ Bot",
        ...
      }
    ]
  }
}
```

**What this does:**
- `session.mainKey: "agent:alfredo:main"` tells OpenClaw: "the canonical 'main' session is Alfredo's webchat session"
- All system notifications, restart pings, and anything else routing to "main" now go directly to that stable key
- **Regardless of** which session touched last, restart notifications bypass the Telegram session completely
- The notification lands in the admin workspace, where it belongs

**Where it lives:**
- **Location in file:** Top-level configuration, alongside `agents`, `channels`, `plugins`, `auth`, `models`
- **Required fields:** Just the string key following OpenClaw's session key format
- **Format:** `"agent:{agentId}:{sessionType}"` where `sessionType` is typically `"main"` for the primary session

---

## How It Works

### Before Fix (Dynamic Resolution)
```
Gateway Restart
    ↓
"Where is 'main'?" (asks OpenClaw)
    ↓
OpenClaw checks: "What session was last touched?"
    ↓
Bulletin-bot Telegram session (user just sent /digest)
    ↓
Notification → Public user's Telegram chat ❌
```

### After Fix (Pinned Resolution)
```
Gateway Restart
    ↓
"Where is 'main'?" (asks OpenClaw)
    ↓
OpenClaw checks: session.mainKey = "agent:alfredo:main"
    ↓
Alfredo's admin webchat session (pinned, never changes)
    ↓
Notification → Admin workspace ✅
```

---

## What This Fix Does NOT Do

**This is important:** The fix does NOT suppress notifications. It **redirects** them.

- ❌ Does NOT silence the restart message
- ❌ Does NOT make the gateway stop notifying
- ❌ Does NOT affect bulletin-bot's own configuration or behavior
- ✅ DOES redirect the notification away from public users
- ✅ DOES ensure only admin sessions receive system messages

---

## Implementation Details

### Configuration Example
```json
{
  "gateway": {
    "mode": "local",
    "auth": { ... }
  },
  "session": {
    "mainKey": "agent:alfredo:main",
    "dmScope": "per-account-channel-peer"
  },
  "agents": {
    "defaults": { ... },
    "list": [
      {
        "id": "alfredo",
        "name": "Alfredo — General Assistant",
        "workspace": "/Users/blackmachete/.openclaw/workspace-general",
        "default": true
      },
      {
        "id": "bulletin-bot",
        "name": "Design By Bulletin™ Bot",
        "workspace": "/Users/blackmachete/.openclaw/workspace-bulletin-bot"
      }
    ]
  }
}
```

### Why `agent:alfredo:main`?
- `alfredo` is the default general-purpose agent in the OpenClaw instance
- Its webchat session is the natural "admin console"
- Pinning restart notifications there keeps them visible to the person running OpenClaw
- It's sufficiently isolated from public channels

### Session Key Format
OpenClaw session keys follow the pattern: `{prefix}:{agentId}:{sessionType}`

- `prefix` = Usually `"agent"` for agent-based sessions
- `agentId` = The agent's ID from `agents.list[].id`
- `sessionType` = The session type; `"main"` is primary for most agents

---

## Testing & Verification

### Before Fix
1. Start OpenClaw gateway with bulletin-bot active
2. Have a public user send a message to @DesignByBulletinBot
3. Restart the gateway: `openclaw restart` or restart process
4. **Result:** Restart message appears in the user's Telegram chat ❌

### After Fix
1. Apply `session.mainKey: "agent:alfredo:main"` to `openclaw.json`
2. Restart OpenClaw gateway
3. Have a public user send a message to @DesignByBulletinBot (triggering a touch)
4. Restart the gateway again
5. **Result:** Restart message appears ONLY in Alfredo's admin session, not in Telegram ✅

---

## Related Configurations

This fix works alongside other isolation features:

| Feature | Purpose | Config Location |
|---------|---------|-----------------|
| **session.dmScope** | Isolate each Telegram user's conversation | `session.dmScope: "per-account-channel-peer"` |
| **session.mainKey** | Pin system notifications to admin | `session.mainKey: "agent:alfredo:main"` |
| **thinkingDefault** | Hide thinking blocks in public | `agents.list[].thinkingDefault: "off"` |
| **verboseDefault** | Hide command execution details | `agents.list[].verboseDefault: "off"` |
| **streaming.mode** | Disable typing indicators | `channels.telegram.accounts[].streaming.mode: "off"` |

Together, these ensure:
- ✅ No context leakage between users
- ✅ No system messages in public chats
- ✅ No technical details visible to readers
- ✅ Clean, professional editorial interface

---

## Why This Matters for Design By Bulletin™ Bot

The bot is **public-facing editorial software**. Readers expect:
- A clean magazine reading experience
- No exposure to internal systems or restarts
- No technical jargon or system messages
- Complete separation from admin/development conversations

The `session.mainKey` fix ensures the bot maintains that editorial boundary — system infrastructure stays invisible to readers.

---

## OpenClaw Architecture Notes

This fix reveals important architectural principles in OpenClaw:

1. **Flexible session routing:** The default "last active" resolution is powerful but requires being explicit about "main"
2. **Configuration-based resolution:** Rather than code changes, session behavior is pinned via config
3. **Admin workspace isolation:** The distinction between admin (`alfredo`) and public (`bulletin-bot`) agents is maintained at the session level, not just the agent level
4. **No special handling needed:** Once `session.mainKey` is set, notifications route correctly without agent-side configuration

---

## If You Need to Change This

To redirect system notifications to a different admin session:

1. Identify the target agent's ID: check `agents.list[].id`
2. Verify the session type (usually `main`)
3. Update `session.mainKey` to the new key:
   ```json
   "session": {
     "mainKey": "agent:{newAgentId}:main"
   }
   ```
4. Restart OpenClaw for the change to take effect

Example: Redirect to Victor's session:
```json
"session": {
  "mainKey": "agent:victor:main"
}
```

---

## Version & Attribution

**Solution:** Pinned main session via `session.mainKey` configuration  
**Tested:** May 7, 2026  
**Applied to:** openclaw.json in OpenClaw multi-agent instance  
**Status:** Production verified — restart messages now route to admin only

This pattern can be applied to any multi-agent OpenClaw setup where one agent serves public users and others handle admin tasks.
