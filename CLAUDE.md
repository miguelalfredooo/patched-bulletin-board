# CLAUDE.md — OpenClaw Setup & Bootstrap

## Critical: First Time Setup

### 1. Environment

Export the Anthropic API key in `~/.zshrc`:

```bash
export ANTHROPIC_API_KEY="your-anthropic-api-key-here"
```

Source it:
```bash
source ~/.zshrc
```

### 2. Gateway Configuration

Edit `~/.openclaw/openclaw.json`:

```json
{
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "your-gateway-token-here"
    }
  },
  "agents": {
    "defaults": {
      "workspace": "/Users/blackmachete/openclaw-artifacts",
      "model": {
        "primary": "anthropic/claude-sonnet-4-6"
      }
    }
  },
  "auth": {
    "profiles": {
      "anthropic:default": {
        "provider": "anthropic",
        "mode": "api_key"
      }
    }
  },
  "plugins": {
    "entries": {
      "anthropic": {
        "enabled": true
      },
      "discord": {
        "enabled": true
      }
    }
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "your-discord-bot-token-here"
    }
  }
}
```

**Key requirements:**
- `gateway.mode`: must be `"local"`
- `agents.defaults.workspace`: must point to `/Users/blackmachete/openclaw-artifacts`
- `agents.defaults.model.primary`: must be `"anthropic/claude-sonnet-4-6"`
- `auth.profiles.anthropic:default.mode`: must be `"api_key"` (reads from `$ANTHROPIC_API_KEY` env var)

### 3. Bootstrap Files (Required for Max Arias)

The following files must exist in the repository root. OpenClaw auto-loads them:

- `IDENTITY.md` — Agent identity
- `SOUL.md` — Voice & stance
- `AGENTS.md` — Operating instructions
- `USER.md` — User (Alfred) profile

These define Max Arias and his behavior. Never delete them.

## Boot Sequence

### Start the Gateway

```bash
openclaw gateway &
```

Wait 3–5 seconds for full initialization. Check:

```bash
ps aux | grep openclaw | grep -v grep
```

Should see `openclaw-gateway` running.

### Access the UI

```
http://127.0.0.1:18789/
```

Should load the OpenClaw control panel.

### Troubleshooting Startup Issues

**Port 18789 already in use:**
```bash
lsof -i :18789
pkill -f openclaw-gateway
sleep 2
openclaw gateway &
```

**API key not found:**
```bash
# Verify env var is set
echo $ANTHROPIC_API_KEY

# If empty, source ~/.zshrc
source ~/.zshrc
```

**Agent can't connect to gateway:**
```bash
# Check logs
openclaw logs --follow

# Run diagnostics
openclaw doctor
```

**Workspace not loading:**
- Verify `agents.defaults.workspace` in `~/.openclaw/openclaw.json` is `/Users/blackmachete/openclaw-artifacts`
- Verify bootstrap files exist in repo root
- Restart gateway

## Workflow

1. **Start gateway** (`openclaw gateway &`)
2. **Access UI** (http://127.0.0.1:18789/)
3. **Max Arias** loads with bootstrap files automatically
4. **Discord integration** ready to send Midjourney prompts to `#general-20`

Never commit to git:
- `openclaw.json` (contains tokens)
- Session transcripts
- Channel state files
- API keys

The `.gitignore` handles this.

## Key Concepts

**Gateway** — The HTTP/WebSocket server that runs OpenClaw. Must be started once per session.

**Agent** — Max Arias, running in the workspace with his bootstrap files loaded.

**Bootstrap files** — IDENTITY.md, SOUL.md, AGENTS.md, USER.md. Define the agent's personality and behavior.

**Workspace** — `/Users/blackmachete/openclaw-artifacts`. Where the agent operates and where bootstrap files live.

**Channels** — Discord bot integration. Lets Max send prompts to `#general-20` for Midjourney.
