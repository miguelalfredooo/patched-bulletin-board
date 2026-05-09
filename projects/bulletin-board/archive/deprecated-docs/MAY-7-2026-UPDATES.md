# May 7, 2026 — Design By Bulletin Updates

## Summary of Changes

Complete normalization and integration updates across the bulletin-board editorial system.

---

## 1. ACT 2 Format Normalization ✅

**What changed:** All 11 issues now use consistent format: ASCII art IN codeblock, metadata OUTSIDE codeblock.

**Format per section:**
```
```
[ASCII art — MANDATORY codeblock]
```

**Section — Title** (bold markdown — OUTSIDE codeblock)

[Prose text, 2-4 sentences — OUTSIDE codeblock]

*[Source: Attribution]* (italic markdown — OUTSIDE codeblock)

[URL on separate line — OUTSIDE codeblock, renders as Telegram preview card]
```

**Critical rule:** ASCII art ALWAYS in codeblocks (```). No exceptions. Section metadata outside.

**Files updated:**
- ISSUE-001-presence-complete.md
- ISSUE-002-the-mark-complete.md
- ISSUE-003-handmade-complete.md
- ISSUE-004-traces-complete.md
- ISSUE-005-signal-complete.md
- ISSUE-006-momentum-complete.md
- ISSUE-007-interval-complete.md
- ISSUE-008-threshold-complete.md
- ISSUE-009-material-complete.md
- ISSUE-010-worn-complete.md
- ISSUE-011-invisible-complete.md

**Key change:** No codeblocks (```) around ASCII art in plain text sections. Markdown formatting works naturally.

---

## 2. Links Added to All Sections ✅

**What changed:** All 11 issues now have URLs linked to their editorial sections.

**Source-to-URL mapping extracted from ISSUE-011:**
- Design Observer → designobserver.com
- WikiArt → wikiart.org
- Eye on Design → eyeondesign.aiga.org
- Frieze → frieze.com
- The New Yorker → newyorker.com
- Magnum Photos → magnumphotos.com
- The Art Newspaper → theartnewspaper.com
- Aeon → aeon.co
- Brand New → underconsideration.com/brandnew
- AIGA Eye on Design → eyeondesign.aiga.org
- Horses → horses.land

**Total links added:**
- ISSUE-001: 7 links
- ISSUE-002: 4 links
- ISSUE-003: 4 links
- ISSUE-004: 3 links
- ISSUE-005: 8 links
- ISSUE-006: 5 links
- ISSUE-007: 6 links
- ISSUE-008: 5 links
- ISSUE-009: 5 links
- ISSUE-010: 5 links
- ISSUE-011: 11 links

---

## 3. HERO-TALL Cover Portraits ✅

**What changed:** All 11 issues have unique HERO-TALL pyramid covers with theme-specific Unicode characters.

**Per-issue character assignments:**

| Issue | Theme     | Character | Unicode |
|-------|-----------|-----------|---------|
| 001   | Presence  | ◆         | U+25C6  |
| 002   | The Mark  | ■         | U+25A0  |
| 003   | Handmade  | ○         | U+25CB  |
| 004   | Traces    | ░         | U+2591  |
| 005   | Signal    | ▲         | U+25B2  |
| 006   | Momentum  | ▶         | U+25B6  |
| 007   | Interval  | ─         | U+2500  |
| 008   | Threshold | │         | U+2502  |
| 009   | Material  | ▓         | U+2593  |
| 010   | Worn      | ▒         | U+2592  |
| 011   | Invisible | ◇         | U+25C7  |

**Format:** 15-row centered pyramid portrait in cover section, max 35 chars per line.

---

## 4. Telegram Delivery Format Update ✅

**What changed:** Removed parse_mode parameter for correct plain text rendering.

**Previous (BROKEN):**
```json
{
  "chat_id": 7774590281,
  "text": "```\n[content]\n```",
  "parse_mode": "MarkdownV2"
}
```
Result: ASCII art mangled, backticks rendered as literal text ❌

**Current (WORKING):**
```json
{
  "chat_id": 7774590281,
  "text": "[plain text with markdown + links]"
}
```
Result: ASCII art clean, markdown formats naturally, links render as preview cards ✅

**Key insight:** Sending without parse_mode lets Telegram handle formatting naturally, including link preview cards with metadata.

---

## 5. Curator Agent Integration ✅

**What changed:** New automated Curator agent workspace created for daily content discovery and validation.

**Curator responsibilities:**
1. Daily scan of publications (Frieze, Design Observer, etc.)
2. Monitor communities (Bluesky, Reddit, Substack, Medium)
3. Validate URLs (accessibility, metadata, real articles vs. paywalls)
4. Score on 4 dimensions (relevance, credibility, freshness, title integrity)
5. Report PASSED (7.0+) and FLAGGED (5.0-6.9) to Assignment Editor daily at 7:30am PT

**New workspace:** `/Users/blackmachete/.openclaw/workspace-bulletin-curator/`

**Files created:**
- SOUL.md — Curator personality and voice
- AGENTS.md — Operating instructions (194 lines)
- TOOLS.md — Validation functions (273 lines)
- curator_validation.py — Main skill implementation (299 lines)
- IDENTITY.md, HEARTBEAT.md, README.md, USER.md — Supporting docs

**Updated files:**
- `/Users/blackmachete/.openclaw/workspace-bulletin-assignment/AGENTS.md` — Integration notes
- `CURATOR-INTEGRATION.md` — Full workflow documentation

**New pipeline:**
```
Curator (discovers + validates URLs daily)
    ↓ [7:30am report with validated URLs + metadata + scores]
Assignment Editor (editorial judgment: which fit today's theme?)
    ↓ [commissions pieces based on curator's findings]
Managing Editor (develops narratives)
    ↓
Editorial Director (final approval)
    ↓
Bot (Telegram delivery — plain text, no parse_mode)
```

---

## 6. Documentation Updates ✅

**Files updated with latest guidance:**

1. **README.md**
   - Added Curator → Assignment Editor → Editorial Director pipeline
   - Updated issue building workflow to reflect plain text format
   - Added Curator integration reference

2. **BOT-COMPONENTS.md**
   - Removed parse_mode requirements
   - Updated Telegram rendering section with plain text guidance
   - Added link preview card behavior explanation

3. **DEPLOYMENT-GUIDE.md**
   - Updated Telegram Bot API requirements section
   - Removed MarkdownV2 mandate, added plain text guidance
   - Updated example code

4. **COMPONENTS-MASTER-GUIDE.txt**
   - Updated TELEGRAM BOT API REQUIREMENTS section
   - Updated FOR AGENTS section
   - Updated STATUS with new achievements

---

## Git Commits

**Session commits (this conversation):**
1. `ba249d0` — "Restore all issues with proper ACT 2 format: codeblock + section + source + link"
2. `3e8deb9` — "docs: Update all bulletin-board documentation with May 7 updates"

---

## Next Steps

- ⏭️ Run Curator daily report trigger (7:30am PT schedule)
- ⏭️ Test Curator validation pipeline with sample URLs
- ⏭️ Gather Assignment Editor feedback on curator findings
- ⏭️ Monitor Telegram rendering on live bot (no parse_mode)
- ⏭️ Iterate on source-to-URL mapping as needed

---

**Date:** May 7, 2026
**Updated by:** Claude Code
**Status:** All updates complete and committed to git
