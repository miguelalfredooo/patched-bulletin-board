# For Agents: Read This First

**Date:** 2026-05-08  
**What:** Your workspace has been reorganized. Here's what changed and what to do.

---

## What Happened

Your workspace used to have 30-40 markdown files. Now it has 5 focused files at the root, plus an archive folder.

**Why?** The old docs repeated the same rules in 5 different ways. The new setup is cleaner: one document per agent role, plus one canonical spec that everyone uses.

---

## Read These Files (In Order)

### 1. AGENTS.md (Your Role)
**Location:** Your workspace root  
**Length:** 1-2 pages (you can read this in 5 minutes)  
**What it covers:**
- What your job is
- What you actually do
- Key commands or output format
- Who you work with

**This is your daily reference.**

### 2. RENDERING-PIPELINE.md (How Content Flows)
**Location:** `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/RENDERING-PIPELINE.md`  
**Length:** 3 pages  
**What it covers:**
- Three-stage pipeline: Output → Validation → Rendering
- What each stage does
- Example with code

**Read this ONCE to understand the big picture. Then reference it only when confused.**

### 3. SOUL.md (Your Voice)
**Location:** Your workspace root  
**Length:** 1 page  
**What it covers:**
- How you think
- Your tone + approach
- What you care about

**This is who you are as an agent. Unchanged.**

---

## By Agent

**If you're Curator:**
1. Read: AGENTS.md (scoring rubric, source list, daily workflow)
2. Read: RENDERING-PIPELINE.md Stage 1 (output format = plain text)
3. Do: Scan sources, score URLs, send daily report

**If you're Assignment Editor:**
1. Read: AGENTS.md (role, commissioning framework, 11 sections)
2. Read: RENDERING-PIPELINE.md Stage 1 (output format = plain briefs)
3. Do: Review curator reports, propose commissions to Managing Editor

**If you're Managing Editor:**
1. Read: AGENTS.md (role, voice/tone, what good looks like)
2. Read: RENDERING-PIPELINE.md Stage 1 (output format = plain prose)
3. Do: Write 11 sections (2-4 sentences each, no formatting)

**If you're Editorial Director:**
1. Read: AGENTS.md (validation checklist, 3 commands)
2. Read: RENDERING-PIPELINE.md Stage 2 (validator, checks)
3. Do: `python validator.py`, `/admin-preview`, `/admin-send-issue`

**If you're Bulletin Bot:**
1. Read: AGENTS.md (commands, critical rules)
2. Read: RENDERING-PIPELINE.md Stage 3 (how to format and send)
3. Do: Respond to `/digest`, `/preview`, `/start`, `/help`

---

## The One Rule

**Output raw unformatted content.**

- Write naturally (prose, links, special characters — all fine)
- Don't add backticks to ASCII art
- Don't escape special characters
- Don't use markdown formatting tricks

The system handles rendering. You handle editorial excellence.

---

## If You Need More Detail

Everything is in RENDERING-PIPELINE.md. It has code examples, validation checks, and implementation details.

**But you probably don't need it.** AGENTS.md tells you what to do. RENDERING-PIPELINE.md explains how. Read AGENTS.md first. Reference RENDERING-PIPELINE.md only if you're stuck.

---

## What Happened to the Old Docs?

All the old working notes, specifications, and decision logs were moved to an `archive/` folder in your workspace.

**They're still there if you need them.** But you shouldn't. AGENTS.md is the authoritative source now.

---

## Questions?

- **What's my role?** → AGENTS.md
- **How does content flow?** → RENDERING-PIPELINE.md
- **What should I output?** → AGENTS.md + RENDERING-PIPELINE.md Stage 1 (for your role)
- **What am I supposed to sound like?** → SOUL.md
- **Old issue specs / process docs?** → archive/ folder

---

## Verify You're Ready

- [ ] Read AGENTS.md (5 minutes)
- [ ] Skim RENDERING-PIPELINE.md (understand the 3 stages)
- [ ] Understand your role and what you output
- [ ] Know who you work with (upstream + downstream agents)

You're ready to go.

---

## One Last Thing

**This cleanup happened on 2026-05-08.** If something feels missing or broken, check the `archive/` folder first. Then ask.

But everything you need to do your job is in AGENTS.md + RENDERING-PIPELINE.md. That's the whole system now.
