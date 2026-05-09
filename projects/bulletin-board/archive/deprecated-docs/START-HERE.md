# Design By Bulletin™ — START HERE

**Welcome to a complete 6-agent editorial system with Art Department curation**

Last updated: 2026-05-08 (Art Department system added)  
Status: ✅ Ready for Art Department test (Issue 021)

---

## What You Have

A **production-ready system** that publishes a daily design magazine to Telegram.

```
EDITORIAL DIRECTOR (writes brief)
    ↓ sets vision + curation guidance
ART DEPARTMENT (7:30am-9:15am)
    ↓ curates 14-16 selections by narrative angle
ASSIGNMENT EDITOR (9:15am-11am)
    ↓ maps curation + commissions
MANAGING EDITOR (12pm-6:45pm)
    ↓ writes 11 sections with context
EDITORIAL DIRECTOR (7pm-7:45pm)
    ↓ validates vision delivered
BULLETIN BOT (by 8pm)
    ↓
PUBLISHED TO SUBSCRIBERS ✓
```

---

## One Rule

**Agents write raw content. The pipeline handles rendering.**

No backticks. No escaping. No formatting tricks.

Just write naturally.

---

## What's Actually Ready

### New: The Art Department System ⭐
- [EDITORIAL-BRIEF-TEMPLATE.md](EDITORIAL-BRIEF-TEMPLATE.md) — Brief with curation guidance
- [ART-DEPARTMENT-REPORT-TEMPLATE.md](ART-DEPARTMENT-REPORT-TEMPLATE.md) — Curated selections format
- `/workspace-bulletin-art-department/` — Full Art Department workspace

### Documentation (10 master files)
- [README.md](README.md) — 30-second overview
- [VISUAL-WORKFLOW.md](VISUAL-WORKFLOW.md) — High-level: Interactions, art, assembly, delivery
- [QUICK-START.md](QUICK-START.md) — Commands reference
- [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) — How it works (REQUIRED)
- [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md) — Visual timeline
- [CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md) — Complete system docs
- [TESTING-TOOLS.md](TESTING-TOOLS.md) — All testing (scaffold, validator, test-uniqueness)
- [INDEX.md](INDEX.md) — Full navigation guide
- [MANIFEST.md](MANIFEST.md) — Complete inventory
- [TERMINOLOGY.md](TERMINOLOGY.md) — Old vs. new terms

### Per-Agent (6 agent workspaces)
Each agent has a workspace with:
- **AGENTS.md** — Your role (1-2 pages, not bloated)
- **SOUL.md** — How you communicate
- **IDENTITY.md** — Who you are
- **TOOLS.md** — Your environment (if needed)

### Templates (5 key formats)
- [EDITORIAL-BRIEF-TEMPLATE.md](EDITORIAL-BRIEF-TEMPLATE.md) — Brief with curation guidance
- [ART-DEPARTMENT-REPORT-TEMPLATE.md](ART-DEPARTMENT-REPORT-TEMPLATE.md) — Curated selections format
- [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md) — Assignment brief format
- [SECTION-GUIDELINES.md](SECTION-GUIDELINES.md) — Writing standards
- [COMPLETED-CHECKLIST.md](COMPLETED-CHECKLIST.md) — Progress tracking

### Tools (5 command-line scripts)
```bash
python scaffold.py issues/021 --theme "Narrative"           # Create 24-file Issue
python validator.py issues/021                              # Validate file structure
python test-uniqueness.py issues/021 --check-duplicates     # Test content quality
python checkpoint.py signal art-department 021 "Complete"   # Signal handoff
python checkpoint.py status 021                             # Check workflow status
```

### Archive
- All 146 old files preserved in `/archive/` (not deleted)
- Issues 001-020 preserved in `/issues-archive/`
- Full publication history in [archive-log.md](archive-log.md)

---

## 5-Minute Quick Start

### You're Editorial Director
1. Run: `python scaffold.py issues/021 --theme "Your Theme"`
2. Write: Editorial Brief using [EDITORIAL-BRIEF-TEMPLATE.md](EDITORIAL-BRIEF-TEMPLATE.md)
3. Send: Brief to all agents by 6pm PT (day before)

### You're The Art Department
1. Read: Editorial Brief (understand theme + narrative angles)
2. Scan: 48+ design sources
3. Evaluate: Using [EVALUATION-FRAMEWORK.md](../../.openclaw/workspace-bulletin-art-department/EVALUATION-FRAMEWORK.md)
4. Curate: 14-16 selections organized by narrative angle
5. Report: Submit using [ART-DEPARTMENT-REPORT-TEMPLATE.md](ART-DEPARTMENT-REPORT-TEMPLATE.md)
6. Signal: `python checkpoint.py signal art-department 021 "14 pieces curated"`

### You're Assignment Editor
1. Receive: Art Department's curated report
2. Map: Curated pieces to 11 sections (preserving narrative)
3. Commission: Custom pieces to fill gaps
4. Brief: Managing Editor with Art Department context
5. Signal: `python checkpoint.py signal assignment 021 "Mapping complete"`

### You're Managing Editor
1. Read: Art Department report (understand narrative angles)
2. Receive: Commission briefs from Assignment Editor
3. Write: 11 sections informed by Art Department curation
4. Create: ASCII art for each section
5. Track: `python progress.py issues/021`
6. When complete: `python checkpoint.py signal managing 021 "All 24 files complete"`

### You're Editorial Director (validation)
1. Receive: Completed 24 files from Managing Editor
2. Validate: `python validator.py issues/021`
3. Preview: `/admin-preview 021`
4. Check: Does curation deliver on your brief?
5. Approve: `python checkpoint.py signal editorial 021 "Approved for publishing"`

### You're Bulletin Bot
1. Receive: Approval from Editorial Director
2. Load: Issue files from `issues/021/`
3. Format: Apply Telegram MarkdownV2 formatting
4. Send: To all subscribers
5. Archive: Log publication in archive-log.md

---

## Navigation

**First time here?**
→ [README.md](README.md) (30 seconds)
→ [QUICK-START.md](QUICK-START.md) (2 minutes)

**Need the big picture?**
→ [CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md) (10 minutes)

**Want to understand how it works?**
→ [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) (15 minutes)
→ [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md) (10 minutes)

**Want to understand The Art Department?**
→ `/workspace-bulletin-art-department/AGENTS.md` (your detailed role)
→ `/workspace-bulletin-art-department/EVALUATION-FRAMEWORK.md` (how to evaluate)
→ `/workspace-bulletin-art-department/CURATION-GUIDELINES.md` (how to curate)

**Looking for something specific?**
→ [INDEX.md](INDEX.md) (master navigation)

**Want step-by-step instructions?**
→ Your agent's `AGENTS.md` in your workspace

---

## The System at a Glance

| Component | Status | What It Does |
|-----------|--------|-------------|
| **Editorial Director** | ✅ Ready | Writes brief with curation guidance |
| **Art Department** | ✅ Ready | Curates 48 URLs → 14-16 selections by narrative ⭐ |
| **Assignment Editor** | ✅ Ready | Maps Art Department curation, commissions gaps |
| **Managing Editor** | ✅ Ready | Writes 11 sections informed by curation |
| **Editorial Director (validation)** | ✅ Ready | Validates vision delivered, approves |
| **Bulletin Bot** | ✅ Ready | Publishes to Telegram, handles user commands |
| **scaffold.py** | ✅ Ready | Generates 24-file Issue in 1 second |
| **validator.py** | ✅ Ready | Validates Issue structure automatically |
| **checkpoint.py** | ✅ Ready | Tracks workflow state + handoffs |
| **All templates** | ✅ Ready | Copy-paste for each workflow step |
| **All documentation** | ✅ Ready | Clear, focused, no bloat |

---

## Key Files (Bookmark These)

| Need to... | Read... |
|-----------|---------|
| Understand the system | [README.md](README.md) |
| Get a command | [QUICK-START.md](QUICK-START.md) |
| Know how pipeline works | [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) |
| See visual workflow | [VISUAL-WORKFLOW.md](VISUAL-WORKFLOW.md) |
| See timeline | [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md) |
| Find anything | [INDEX.md](INDEX.md) |
| Know what's in this system | [MANIFEST.md](MANIFEST.md) |
| See complete documentation | [CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md) |
| Understand Art Department | `/workspace-bulletin-art-department/AGENTS.md` |
| Know your role | Your agent's `AGENTS.md` |

---

## Simple Rules

1. **Agents output raw unformatted content**
   - No backticks in art files
   - No escaping in copy files
   - Write naturally

2. **One output format per stage**
   - Stage 1: Raw content
   - Stage 2: Structure validation
   - Stage 3: Telegram formatting

3. **Clear handoff points**
   - Editorial Brief (sets vision)
   - Art Department report (establishes narrative)
   - Assignment commissions (maps + fills gaps)
   - Managing sections (writes informed prose)
   - Editorial approval (validates vision)
   - Bot publishing (sends to subscribers)

4. **Use templates**
   - Editorial: [EDITORIAL-BRIEF-TEMPLATE.md](EDITORIAL-BRIEF-TEMPLATE.md)
   - Art Department: [ART-DEPARTMENT-REPORT-TEMPLATE.md](ART-DEPARTMENT-REPORT-TEMPLATE.md)
   - Assignment: [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md)
   - Everyone: [COMPLETED-CHECKLIST.md](COMPLETED-CHECKLIST.md)

5. **Track progress**
   - `python checkpoint.py status 021` shows workflow state
   - `python progress.py issues/021` shows completion %
   - Target: Complete before editorial validation

---

## Common Commands

```bash
# Create new Issue
python scaffold.py issues/021 --theme "Your Theme"

# Track workflow status
python checkpoint.py status 021

# Signal your stage is complete
python checkpoint.py signal art-department 021 "Message"

# Track your progress (if Managing Editor)
python progress.py issues/021

# Validate before publishing
python validator.py issues/021

# If validation fails, try auto-fix
python validator.py issues/021 --fix

# Advanced checks (optional)
python checks.py issues/021 --word-count
python checks.py issues/021 --links
```

---

## Files Are Located At

**Project root:**  
`/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/`

**Agent workspaces:**  
`/Users/blackmachete/.openclaw/workspace-bulletin-art-department/` ⭐ NEW  
`/Users/blackmachete/.openclaw/workspace-bulletin-assignment/`  
`/Users/blackmachete/.openclaw/workspace-bulletin-managing/`  
`/Users/blackmachete/.openclaw/workspace-bulletin-editorial/`  
`/Users/blackmachete/.openclaw/workspace-bulletin-bot/`

---

## Still Confused?

**Step 1:** Read [README.md](README.md)  
**Step 2:** Read your role's `AGENTS.md` in your workspace  
**Step 3:** Read [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) for your stage  
**Step 4:** Check [INDEX.md](INDEX.md) if you need something specific  

---

## Summary

You have **everything you need to publish a daily design magazine with editorial curation.**

- Clear roles ✓
- Art Department leadership ✓ NEW
- Single source of truth ✓
- One fundamental rule ✓
- Flat file structure ✓
- Instant scaffolding ✓
- Real-time progress tracking ✓
- Automated validation ✓
- Template-based handoffs ✓
- Checkpoint workflow visibility ✓
- All prior work archived ✓

**Pick your role. Read your AGENTS.md. Start working.**

---

**Next step:** Go read [README.md](README.md) or your agent's AGENTS.md.

**Good to go.** ✅
