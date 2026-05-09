# Bulletin Board — Setup & Troubleshooting

This guide covers the complete setup for the Bulletin Board multi-agent editorial system and common issues encountered during initialization.

## Project Overview

Bulletin Board is a four-agent editorial collective running on OpenClaw:

- **Curator** — Researcher, discovers and validates high-quality content daily
- **Assignment Editor** — Scout, identifies commissions based on curator findings
- **Managing Editor** — Maker, develops ideas into clarity and beauty
- **Editorial Director** — Visionary, makes publication decisions and guards vision

All four agents are integrated into the main OpenClaw gateway (port 18789) with shared configuration and isolated workspaces.

## Gateway Configuration

### File Locations

**Agent workspace directories:**
- `~/.openclaw/workspace-bulletin-curator/` — Curator (content discovery & validation)
- `~/.openclaw/workspace-bulletin-assignment/` — Assignment Editor
- `~/.openclaw/workspace-bulletin-managing/` — Managing Editor
- `~/.openclaw/workspace-bulletin-editorial/` — Editorial Director

**Main gateway configuration:**
- `~/.openclaw/openclaw.json` — Main gateway config (port 18789)
- `~/.openclaw/projects.json` — Registry of all gateway instances

**This repository:**
- `/Users/blackmachete/bulletin-board/openclaw.json` — Reference only (agents accessed via main gateway)

## Multi-Agent Setup Checklist

### 1. Agent-Specific Configuration

Each agent needs its own workspace and authentication profile:

```bash
OPENCLAW_WORKSPACE=/Users/blackmachete/bulletin-board
openclaw agent --agent bulletin-curator -m "test"
openclaw agent --agent bulletin-assignment -m "test"
openclaw agent --agent bulletin-managing -m "test"
openclaw agent --agent bulletin-editorial -m "test"
```

### 2. API Key Authentication

**Critical:** Agent API keys must be literal strings in `auth-profiles.json`, not environment variable references.

Each agent workspace contains:
```
~/.openclaw/workspace-[agent-id]/.openclaw/agent/auth-profiles.json
```

Example (correct):
```json
{
  "anthropic:default": {
    "provider": "anthropic",
    "mode": "api_key",
    "api_key": "sk-ant-..."
  }
}
```

❌ **Wrong:**
```json
{
  "anthropic:default": {
    "api_key": "$ANTHROPIC_API_KEY"  // Will not work
  }
}
```

### 3. Model Provider Configuration

The gateway must declare all model providers used by agents:

```json
{
  "models": {
    "providers": {
      "anthropic": {
        "baseUrl": "https://api.anthropic.com",
        "models": [
          {
            "id": "claude-sonnet-4-6",
            "name": "Claude Sonnet 4.6",
            "contextWindow": 200000,
            "maxTokens": 16000
          }
        ]
      },
      "lmstudio": {
        "baseUrl": "http://127.0.0.1:1234/v1",
        "apiKey": "lmstudio"
      }
    }
  }
}
```

**If a model is listed in `agents.defaults.fallbacks` but not in `models.providers`, agents will fail with:**
```
Invalid config at openclaw.json. models.providers.anthropic.baseUrl: Invalid input: expected string, received undefined
```

### 4. Playwright MCP Configuration (Curator Agent)

The Curator agent uses Playwright MCP for robust web scraping with JavaScript rendering support. This is configured globally via Claude Code settings:

**Global configuration** (`~/.claude/settings.json`):
```json
{
  "enableAllProjectMcpServers": true
}
```

**MCP servers configuration** (`~/.mcp.json`):
```json
{
  "mcpServers": {
    "playwright": {
      "command": "playwright-mcp",
      "args": [],
      "disabled": false,
      "env": {}
    }
  }
}
```

**What Playwright MCP provides:**
- Headless browser automation (Chromium)
- JavaScript rendering for dynamic content
- Paywall detection and page content validation
- User agent spoofing to avoid blocks
- Timeout handling and graceful fallbacks

**How Curator uses it:**
1. Fast path: `requests + BeautifulSoup` for simple pages
2. Smart detection: Identifies JS-heavy sites (large `<script>` tags, minimal initial HTML)
3. Playwright fallback: Uses browser automation for complex/dynamic content
4. Robust validation: Extracts metadata, validates image URLs, detects paywalls

See [CURATOR-INTEGRATION.md](CURATOR-INTEGRATION.md) for full curator workflow.

### Feedly (Optional)

To enable Curator's Feedly board discovery:

1. **Create Feedly Account (Free):**
   - Visit feedly.com and sign up
   - No cost, no API key needed
   - Free tier is sufficient

2. **Create "Curator's Daily" Board:**
   - Log in to Feedly
   - Create new board/collection: "Curator's Daily"
   - Add feeds per FEEDLY-BOARD-SETUP.md (40-50 feeds)
   - Feeds auto-update as new articles publish

3. **Create Topic Boards for Team:**
   - "Design Systems & Tools"
   - "AI in Practice"
   - "Speculative & Culture"
   - "Research & Theory"
   - (Optional) "Community Signals"
   - Add relevant feeds to each board

4. **Share with Team:**
   - Share Feedly login credentials with team
   - Or: Each team member creates own account and you add them as collaborators
   - Each member browses relevant boards during editorial work

### Feedly Workflow

No setup required beyond account creation and board population. Curator manually browses "Curator's Daily" each morning at 7:30am PT.

See FEEDLY-BOARD-SETUP.md for feed lists and board descriptions.

## Common Issues & Solutions

### Error: "No API key found for provider 'anthropic'"

**Cause:** Agent's `auth-profiles.json` references an environment variable that doesn't exist in child processes.

**Solution:**
1. Open `~/.openclaw/workspace-[agent-id]/.openclaw/agent/auth-profiles.json`
2. Replace env var reference with literal API key string
3. Restart the agent

### Error: "[assistant turn failed before producing content]"

**Possible causes:**
1. Agent has local `models.json` file overriding gateway config
2. API key is missing or invalid
3. Model provider is not declared in gateway's `models.providers`

**Solutions:**

Check for local model config:
```bash
ls -la ~/.openclaw/workspace-[agent-id]/agents/[agent-id]/agent/models.json
```

If it exists and is wrong, delete it:
```bash
rm ~/.openclaw/workspace-[agent-id]/agents/[agent-id]/agent/models.json
```

Check model provider exists in gateway config:
```bash
grep -A20 '"anthropic"' /Users/blackmachete/bulletin-board/openclaw.json
```

### Error: "scope upgrade pending approval"

**Cause:** Device requesting operator scopes (read, write, pairing, admin) that haven't been approved yet.

**Solution:**
```bash
# List pending device approvals
openclaw devices list

# Approve specific device scope upgrade
openclaw devices approve [requestId]
```

### Connection refused: "[Errno 111] Connection refused"

**If using Mission Control Docker:**
1. Verify `extra_hosts: host.docker.internal:host-gateway` in compose.yml
2. Verify gateway is running: `ps aux | grep openclaw`
3. Verify gateway is listening on correct port: `lsof -i :18790`
4. Test from host: `curl http://127.0.0.1:18790/health`

**If using CLI:**
1. Ensure `OPENCLAW_WORKSPACE` is set correctly
2. Check gateway is running: `ps aux | grep openclaw`
3. Try: `openclaw gateways list`

## Starting the System

### 1. Ensure the main gateway is running
```bash
# Check if gateway is running
lsof -i :18789

# If not running, start it:
OPENCLAW_WORKSPACE=/Users/blackmachete/openclaw-artifacts openclaw gateway start
```

### 2. Access bulletin-board agents via the main gateway

The four agents are automatically available at `http://127.0.0.1:18789`

**Via Web UI:**
- Navigate to `http://127.0.0.1:18789/chat`
- Select agent from the dropdown: bulletin-curator, bulletin-assignment, bulletin-managing, or bulletin-editorial

**Via CLI:**
```bash
export OPENCLAW_WORKSPACE=/Users/blackmachete/bulletin-board

openclaw agent --agent bulletin-curator -m "Who are you?"
openclaw agent --agent bulletin-assignment -m "Who are you?"
openclaw agent --agent bulletin-managing -m "Who are you?"
openclaw agent --agent bulletin-editorial -m "Who are you?"
```

Each should respond in character from their respective `SOUL.md` files.

## Accessing the Editorial System

### Via Web UI (Recommended)
Go to `http://127.0.0.1:18789/chat` and select the agent from the dropdown:
- **bulletin-curator** — Curator
- **bulletin-assignment** — Assignment Editor
- **bulletin-managing** — Managing Editor
- **bulletin-editorial** — Editorial Director

### Via CLI
```bash
export OPENCLAW_WORKSPACE=/Users/blackmachete/bulletin-board

# Send a message to Curator
openclaw agent --agent bulletin-curator -m "Validate this URL: https://example.com/article"

# Send to other agents
openclaw agent --agent bulletin-assignment -m "What stories should we commission?"
openclaw agent --agent bulletin-managing -m "Here's a raw article idea..."
openclaw agent --agent bulletin-editorial -m "How would you evaluate this piece?"
```

### Via Direct Links
- Assignment Editor: `http://127.0.0.1:18789/chat?session=agent%3Abulletin-assignment%3Amain`
- Managing Editor: `http://127.0.0.1:18789/chat?session=agent%3Abulletin-managing%3Amain`
- Editorial Director: `http://127.0.0.1:18789/chat?session=agent%3Abulletin-editorial%3Amain`

## Configuration Reference

### Main Gateway Configuration
The bulletin-board agents are configured in the main gateway at `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "list": [
      {
        "id": "bulletin-assignment",
        "name": "Bulletin Board — Assignment Editor",
        "workspace": "/Users/blackmachete/.openclaw/workspace-bulletin-assignment"
      },
      {
        "id": "bulletin-managing",
        "name": "Bulletin Board — Managing Editor",
        "workspace": "/Users/blackmachete/.openclaw/workspace-bulletin-managing"
      },
      {
        "id": "bulletin-editorial",
        "name": "Bulletin Board — Editorial Director",
        "workspace": "/Users/blackmachete/.openclaw/workspace-bulletin-editorial"
      }
    ]
  }
}
```

Each agent runs in its own isolated workspace with its own configuration and state, but they share the main gateway's model providers and authentication settings.

## Support

For issues not covered in this guide:
- Check Mission Control's troubleshooting docs: `/Users/blackmachete/openclaw-mission-control/docs/troubleshooting/`
- Review OpenClaw documentation in `~/.openclaw/`
- Check agent workspace logs: `~/.openclaw/workspace-[agent-id]/logs/`
