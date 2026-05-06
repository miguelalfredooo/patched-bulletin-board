# OpenClaw Auth Fix — "No API key found for provider 'anthropic'"

## Problem

Agent fails with error:
```
⚠️ No API key found for provider "anthropic". 
Auth store: /Users/blackmachete/.openclaw/agents/main/agent/auth-profiles.json
```

Even though `auth-profiles.json` exists with the correct API key.

## Root Cause

The auth profiles file is in **legacy flat format**. OpenClaw's gateway expects the **canonical version/profiles format**.

**Legacy format (broken):**
```json
{
  "anthropic:default": {
    "provider": "anthropic",
    "mode": "api_key",
    "apiKey": "sk-ant-..."
  }
}
```

**Canonical format (working):**
```json
{
  "version": 1,
  "profiles": {
    "anthropic:default:default": {
      "type": "api_key",
      "provider": "anthropic",
      "key": "sk-ant-..."
    }
  }
}
```

## Solution

Run the automated repair:

```bash
openclaw doctor --fix
```

This command:
1. Detects the legacy auth format
2. Backs up the old file: `auth-profiles.json.legacy-flat.[timestamp].bak`
3. Rewrites `auth-profiles.json` to canonical format
4. Restarts the gateway LaunchAgent

## Verify

After running `doctor --fix`:

```bash
cat /Users/blackmachete/.openclaw/agents/main/agent/auth-profiles.json | jq .
```

Should show:
```json
{
  "version": 1,
  "profiles": {
    "anthropic:default:default": {
      "type": "api_key",
      "provider": "anthropic",
      "key": "sk-ant-..."
    }
  }
}
```

Then refresh http://127.0.0.1:18789/chat?session=agent%3Amain%3Amain

The agent should respond without auth errors.

## Prevention

- Never manually edit `auth-profiles.json` — use `openclaw onboard` or `openclaw config` commands
- Always run `openclaw doctor --fix` when config issues arise
- Check `openclaw logs --follow` if problems persist
