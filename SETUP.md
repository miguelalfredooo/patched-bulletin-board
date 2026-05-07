<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'Unifont', 'Courier New', Courier, monospace;
}
</style>

# Bulletin Board — Setup & Troubleshooting

This guide covers the complete setup for the Bulletin Board multi-agent editorial system and common issues encountered during initialization.

## Project Overview

Bulletin Board is a three-agent editorial collective running on OpenClaw:

- **Assignment Editor** — Scout, identifies commissions, scans for signals
- **Managing Editor** — Maker, develops ideas into clarity and beauty
- **Editorial Director** — Visionary, makes publication decisions and guards vision

All three agents are integrated into the main OpenClaw gateway (port 18789) with shared configuration and isolated workspaces.

## Gateway Configuration

### File Locations

**Agent workspace directories:**
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

The three agents are automatically available at `http://127.0.0.1:18789`

**Via Web UI:**
- Navigate to `http://127.0.0.1:18789/chat`
- Select agent from the dropdown: bulletin-assignment, bulletin-managing, or bulletin-editorial

**Via CLI:**
```bash
export OPENCLAW_WORKSPACE=/Users/blackmachete/openclaw-artifacts

openclaw agent --agent bulletin-assignment -m "Who are you?"
openclaw agent --agent bulletin-managing -m "Who are you?"
openclaw agent --agent bulletin-editorial -m "Who are you?"
```

Each should respond in character from their respective `SOUL.md` files.

## Accessing the Editorial System

### Via Web UI (Recommended)
Go to `http://127.0.0.1:18789/chat` and select the agent from the dropdown:
- **bulletin-assignment** — Assignment Editor
- **bulletin-managing** — Managing Editor
- **bulletin-editorial** — Editorial Director

### Via CLI
```bash
export OPENCLAW_WORKSPACE=/Users/blackmachete/openclaw-artifacts

# Send a message to any agent
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

---

## Creating New Issues

Issues are curated, theme-driven publications. Each issue follows a standard workflow:

### 1. Define the Theme

Choose a theme (e.g., "Momentum", "Acceleration", "Stillness") and establish:
- **Theme statement** — One sentence capturing the core concept
- **Editorial Mix** — Parametric control (six faders: Music, Visual, Research, Process, Theme, AI Culture)
- **Sonic reference** — BPM range, instruments, mood (optional)
- **Cultural thread** — Historical context or contemporary resonance (optional)

### 2. Curate Content

For each of the 11 sections (Art, Painting, Illustration, Sculpture, Culture, Photography, Art History, Opinions, Design & AI Tools, Product & Process, Visual & Brand):

1. Select a source (article, website, artwork)
2. Write a one-sentence narrative explaining why it matters for this theme
3. Add the source link

Example format:
```
[Section Title]
[One sentence explaining the connection to theme]
[Source link]
```

### 3. Generate the ASCII Cover

**Option A: Interactive (Browser)**
```bash
open covers/ascii-cover-generator.html
# → Upload source image (Midjourney render, p5.js screenshot, etc.)
# → Select: HIGH resolution, MEDIUM charset, 20–24px font
# → Download PNG
```

**Option B: CLI (Automated)**
```bash
node export-ascii-cover.js covers/[issue-name]-midjourney.png [issue-name]-cover.png 20
```

### 4. Create the Pure Text Issue

Create a file: `ISSUE-006-[theme]-[scheme].txt`

Structure:
```
[ASCII Art Banner]

ACT 1 — VISUAL NOTICE
[Brief preview note]

[11 Sections with ASCII art + title + narrative + link]

ACT 2 — EDITORIAL
[Sources and editorial content]

[Closing statement]
```

### 5. Prepare Metadata

Create a section in the issue file documenting:
- Theme name and date
- Editorial Mix values
- Sonic reference (if applicable)
- Cultural thread or historical context

### 6. Deliver to Telegram

```bash
node finalize-issue-006-delivery.js
```

This sends:
1. Opening banner
2. ASCII cover image
3. Pure text issue (auto-split for Telegram limits)
4. Theme & editorial mix

---

## Issue File Structure

```
bulletin-board/
├── ISSUE-006-momentum-neon.txt              [Pure text issue]
├── ISSUE-006-momentum-orange-navy.txt       [Alternative scheme]
├── ISSUE-006-momentum-*.txt                 [Other schemes]
│
├── covers/
│   ├── momentum-006-cover.png               [Final ASCII cover]
│   └── momentum-006-midjourney.png          [Source image]
│
└── docs/
    └── DESIGN-BY-BULLETIN.md                [System documentation]
```

---

## Common Workflows

### Quick Start: Generate a New Issue

```bash
# 1. Have source image ready (Midjourney or p5.js)
# 2. Generate ASCII cover
node export-ascii-cover.js covers/my-image.png my-issue-cover.png 20

# 3. Create pure text issue file
# 4. Define theme metadata
# 5. Deliver
node finalize-issue-006-delivery.js
```

### Adjust Cover Style

Experiment with font sizes (larger = more detail due to auto-scaling):
```bash
node export-ascii-cover.js covers/image.png cover.png 12    # Tight, detailed
node export-ascii-cover.js covers/image.png cover.png 20    # Balanced
node export-ascii-cover.js covers/image.png cover.png 28    # Large, bold
```

### Send Text-Only (Testing)

Before full delivery, test text content:
```bash
node send-issue-text-only.js
```

### Generate Colored ASCII Variants

To create alternative ASCII rendering with colors:
```bash
node momentum-image-to-ascii-color.js
# Outputs to covers/ascii-color/ directory
```

Each agent runs in its own isolated workspace with its own configuration and state, but they share the main gateway's model providers and authentication settings.

## Support

For issues not covered in this guide:
- Check Mission Control's troubleshooting docs: `/Users/blackmachete/openclaw-mission-control/docs/troubleshooting/`
- Review OpenClaw documentation in `~/.openclaw/`
- Check agent workspace logs: `~/.openclaw/workspace-[agent-id]/logs/`
