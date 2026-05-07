# Documentation Index

A guide to all project documentation and where to find things.

---

## Project Documentation (Root)

Everything you need to use and extend Design By Bulletin.

### [README.md](README.md)
Quick project overview, structure, and how to get started. Start here.

### [DESIGN-BY-BULLETIN.md](DESIGN-BY-BULLETIN.md)
Complete system documentation:
- Editorial structure (11 sections)
- ASCII system (character palette, visual formats)
- Telegram constraints and delivery
- Workflow from curation to delivery
- Issue 006 Momentum case study

### [SETUP.md](SETUP.md)
Practical how-to guides:
- Configuration and dependencies
- Creating new issues (step-by-step)
- Workflow examples
- Common operations

### [TOOLS.md](TOOLS.md)
Reference for all production scripts:
- ASCII cover generator (browser + CLI)
- Telegram delivery scripts
- Colored ASCII generation
- Dependencies and file structure

---

## Framework Documentation

The Patched framework — philosophy and vocabulary for building AI-driven systems.

### [framework/README.md](framework/README.md)
Quick overview of what Patched is and why it matters.

### [framework/PATCHED.md](framework/PATCHED.md)
Complete framework documentation:
- Core concepts (module layer, behavior layer, governance layer)
- Signal flow and architecture patterns
- How to apply Patched thinking to your project
- Shared vocabulary for teams

### [framework/PATCHED-EXAMPLE.md](framework/PATCHED-EXAMPLE.md)
Worked example applying Patched framework to a real system.

---

## System Documentation

Infrastructure, tooling, and system-level configuration.

### [_system/CLAUDE.md](_system/CLAUDE.md)
OpenClaw setup and configuration:
- API key setup
- Gateway configuration
- Agent bootstrap files
- Troubleshooting multi-agent systems
- Complete architecture reference

### [_system/ANDERSON-SYMMETRY-LENS.md](_system/ANDERSON-SYMMETRY-LENS.md)
Optional stylistic constraint for design:
- Wes Anderson-inspired visual discipline
- Symmetry and centered composition principles
- Apply when specified in generation prompts

---

## Which Document Should I Read?

**I want to create a new issue**
→ Start with [README.md](README.md), then see [SETUP.md](SETUP.md)

**I want to understand the system**
→ Read [DESIGN-BY-BULLETIN.md](DESIGN-BY-BULLETIN.md)

**I need to run a tool/script**
→ See [TOOLS.md](TOOLS.md)

**I want to understand Patched framework**
→ Read [framework/README.md](framework/README.md) → [framework/PATCHED.md](framework/PATCHED.md)

**I'm setting up OpenClaw/infrastructure**
→ See [_system/CLAUDE.md](_system/CLAUDE.md)

**I'm debugging something**
→ Check [TOOLS.md](TOOLS.md) for script troubleshooting, [_system/CLAUDE.md](_system/CLAUDE.md) for infrastructure issues

---

## File Structure

```
bulletin-board/
├── README.md                        ← Start here
├── DOCS.md                          ← This file
├── DESIGN-BY-BULLETIN.md           ← System deep-dive
├── SETUP.md                        ← How-to guides
├── TOOLS.md                        ← Script reference
│
├── framework/                      ← Patched philosophy
│   ├── README.md
│   ├── PATCHED.md
│   └── PATCHED-EXAMPLE.md
│
├── _system/                        ← Infrastructure docs
│   ├── CLAUDE.md
│   └── ANDERSON-SYMMETRY-LENS.md
│
├── covers/                         ← Assets & tools
│   ├── ascii-cover-generator.html
│   └── momentum-006-cover.png
│
├── ISSUE-006-*.txt                ← Pure text issues
│
└── *.js                           ← Production scripts
    ├── export-ascii-cover.js
    └── finalize-issue-006-delivery.js
```

---

## What Got Cleaned Up

Removed outdated/redundant documentation:
- Daily editorial workflow docs (AGENT-WORKFLOWS.md, COLLABORATION-SPACE.md)
- Old agent identity files (SOUL-*.md, AGENTS.md)
- Framework documentation moved to `/framework`
- Transient session files (MEMORY.md, SESSION-SUMMARY.md)
- Redundant delivery docs (consolidated into TOOLS.md)

Current documentation is **lean, focused, and directly applicable** to the system as it exists today.
