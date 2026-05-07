# Bulletin Board

A magazine for product designers and creative thinkers exploring AI, speculative culture, artifacts, and the mysterious intersections of technology and meaning.

## What We Cover

The strange, the overlooked, the speculative. Artifacts and ideas at the intersection of design, AI, culture, and the uncanny.

We're not academics. We think in images, metaphors, possibilities. We see what others miss because we're not constrained by "serious" analysis.

## The Editorial System

Bulletin Board operates as a three-agent editorial collective running on [OpenClaw](https://github.com/anthropics/openclaw):

### The Three Editors

**Assignment Editor** — The Scout
- Finds signals and cultural patterns others miss
- Commissions pieces and proposes themes
- Thinks in possibility, not certainty
- Asks: "What are we missing?"
- [Full role description](SOUL-CURATOR.md)

**Managing Editor** — The Maker
- Develops rough ideas into clarity and beauty
- Shapes pieces through invisible editing
- Works with language, structure, and rhythm
- Asks: "What does this really mean?"
- [Full role description](SOUL-EDITOR.md)

**Editorial Director** — The Visionary
- Makes final publication decisions
- Guards the magazine's vision and voice
- Evaluates editorial strategy
- Asks: "Does this deserve to exist?"
- [Full operating instructions](AGENTS.md)

## Real-World Implementation

**Design By Bulletin™** is a daily automated editorial digest delivered via Telegram that uses the Bulletin Board three-agent system. It demonstrates how the editorial collective can be extended with delivery and automation layers.

See [DESIGN-BY-BULLETIN.md](DESIGN-BY-BULLETIN.md) for the full implementation, including:
- Six-agent workflow (visual discovery + editorial curation)
- ASCII visual system (5 formats, 11 sections)
- Daily cron job triggers
- Telegram delivery
- Live status and configuration

**Agent Operations:** See [AGENT-WORKFLOWS.md](AGENT-WORKFLOWS.md) for detailed daily procedures, timelines, and decision frameworks for all agents running Design By Bulletin. Editorial Director leads the operation.

## Getting Started

### Prerequisites

- [OpenClaw CLI](https://github.com/anthropics/openclaw) installed
- An Anthropic API key for Claude Sonnet 4.6
- (Optional) LM Studio for local model fallbacks

### Quick Start

1. **Clone this repository:**
   ```bash
   git clone https://github.com/miguelalfredooo/bulletin-board.git
   cd bulletin-board
   ```

2. **Start the gateway:**
   ```bash
   OPENCLAW_WORKSPACE=$(pwd) openclaw gateway start
   ```
   The gateway will start on port 18790.

3. **Access the agents via CLI:**
   ```bash
   export OPENCLAW_WORKSPACE=/path/to/bulletin-board
   
   # Talk to the Assignment Editor
   openclaw agent --agent bulletin-assignment -m "What stories should we commission?"
   
   # Talk to the Managing Editor
   openclaw agent --agent bulletin-managing -m "How would you develop this idea?"
   
   # Talk to the Editorial Director
   openclaw agent --agent bulletin-editorial -m "Should we publish this piece?"
   ```

### Full Setup Guide

For detailed setup, troubleshooting, multi-agent configuration, and Docker integration, see [SETUP.md](SETUP.md).

## Project Structure

```
bulletin-board/
├── README.md                    # This file
├── IDENTITY.md                 # Magazine definition and vision
├── SETUP.md                    # Complete setup and troubleshooting guide
├── EDITORIAL-BOARD.md          # Editorial board structure and workflow
├── AGENTS.md                   # Editorial Director role and operating instructions
├── SOUL-CURATOR.md             # Assignment Editor personality and voice
├── SOUL-EDITOR.md              # Managing Editor personality and voice
├── SOUL-ANALYST.md             # Additional analysis framework
├── DESIGN-BY-BULLETIN.md       # Real-world implementation: daily automated digest via Telegram
├── AGENT-WORKFLOWS.md          # Daily operations, timelines, decision frameworks (agents follow)
├── USER.md                     # Quick reference for users
├── openclaw.json               # OpenClaw gateway configuration (reference only)
└── .openclaw/                  # OpenClaw internal configuration
```

## How the Editorial Process Works

### 1. Discovery (Assignment Editor)
The Assignment Editor scouts for ideas, patterns, and sources. When something catches their attention, they:
- Describe what they found
- Explain why it matters now
- Show how it fits the magazine's vision
- Propose what comes next

### 2. Development (Managing Editor)
The Managing Editor receives ideas, drafts, or raw pieces and develops them into finished work:
- Shapes structure and language
- Clarifies thinking without flattening abstraction
- Preserves voice while improving clarity
- Reports on status and recommendations

### 3. Editorial Decision (Editorial Director)
The Editorial Director reviews polished pieces and makes final publication decisions:
- **PUBLISH** — This goes out
- **REVISE** — Send back with specific feedback
- **REJECT** — Doesn't make the cut
- **WAIT** — Good, but not yet

### 4. Strategic Direction
All three editors contribute to setting the magazine's direction:
- What conversation should we be having?
- What gaps exist in coverage?
- What's the next issue's theme?
- How do we sequence pieces across issues?

## Editorial Principles

1. **Vision over volume** — Better one brilliant piece monthly than five good ones weekly
2. **Consistency over trend** — Publish what fits our vision, not what's hot
3. **Quality over speed** — Take time to develop pieces properly
4. **Beauty over correct** — Prefer elegant thinking over rigorous but boring thinking
5. **Surprise over expected** — Push boundaries; don't play it safe

## Configuration

The gateway is configured in `openclaw.json` with:
- **Model**: Claude Sonnet 4.6 (primary) with local LM Studio fallbacks
- **Port**: 18790
- **Auth**: Token-based authentication
- **Agents**: Three isolated workspaces for each editor

See [SETUP.md](SETUP.md) for detailed configuration options and troubleshooting.

## Integration with OpenClaw

This project uses OpenClaw for:
- Multi-agent orchestration
- Persistent workspace storage
- Role-based authentication
- Model provider management
- Device and scope management

Agents run independently but share a gateway, allowing:
- Isolated development environments
- Shared configuration
- Independent scaling
- Collaborative workflows

## Accessing Agents

### Via CLI (Recommended)
```bash
export OPENCLAW_WORKSPACE=/path/to/bulletin-board
openclaw agent --agent bulletin-assignment -m "message"
openclaw agent --agent bulletin-managing -m "message"
openclaw agent --agent bulletin-editorial -m "message"
```

### Via Web UI (Mission Control)
For web-based access, see [SETUP.md](SETUP.md#accessing-the-editorial-system).

## Troubleshooting

Common issues and solutions are documented in [SETUP.md](SETUP.md#common-issues--solutions):
- API key authentication
- Model provider configuration
- Gateway connection issues
- Device scope approval

## License

MIT

## About

Bulletin Board is built with [OpenClaw](https://github.com/anthropics/openclaw) and Claude Sonnet 4.6.

For questions or issues, open an issue on this repository.
