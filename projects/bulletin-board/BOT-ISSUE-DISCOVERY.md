# Bot Issue Discovery Configuration
## How the Bot Finds and Reports Available Issues

**Date Created:** May 7, 2026  
**Last Updated:** May 7, 2026  
**Status:** Documented for future reference

---

## The Problem

When a user asks the bot "How many issues are available?" or "What issues do you have?", the bot only reported issues that were in its discovery list, not necessarily all published issues.

**Example issue:** When all 9 issues (001-010) were published and available for serving, the bot was only reporting 2 issues (002 and 007) as available.

---

## Root Cause

The bot discovers available issues through two configuration points:

1. **AGENTS.md** — Bot workspace configuration file listing available issues
2. **archive-log.md** — Publication history that bot reads to discover issues

If either of these files is not updated with new issue entries, the bot won't report them as available, even if the complete issue files exist and are accessible.

---

## The Solution

### Step 1: Update Bot Configuration
**File:** `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`

**Section:** "File Locations"

**Update the line:**
```
- **Available issues:** [OLD LIST]
```

To list all published issues:
```
- **Available issues:** 001, 002, 003, 004, 005, 006, 008, 009, 010 (all publication-ready)
```

**Why:** This tells the bot what issues to report when users ask for a list.

### Step 2: Update Publication Archive
**File:** `/projects/bulletin-board/archive-log.md`

**Add entries** for all published issues in reverse chronological order (newest first).

**Entry format:**
```markdown
## Issue [NUMBER] — [DATE]
- **THEME:** [Theme Name]
- **EDITORIAL MIX:** Music [%], Visual [%], Research [%], Process [%], Theme [%], AI Culture [%]
- **SONIC REFERENCE:** [Audio description]
- **RENDERING:** Text-only markdown
- **CLOSING SENTENCE:** "[The issue's closing sentence]"
- **STATUS:** Published [DATE]
- **CURATOR NOTE:** [Brief description of issue's focus]
```

**Why:** The archive-log is the source of truth for publication history. When the bot reads it, it discovers all issues. Users can also reference this for publication metadata.

---

## When to Apply This Update

**Every time:**
- A new issue is published
- An issue is re-published with different metadata
- The list of available issues changes

**Specifically:**
- After running `git commit` to finalize a new issue
- Before pushing to production
- When onboarding new team members who might publish issues

---

## Example: Publishing Issue 011

If you publish Issue 011 (Theme: "Velocity") on May 13, 2026:

### 1. Update AGENTS.md:
```
- **Available issues:** 001, 002, 003, 004, 005, 006, 008, 009, 010, 011 (all publication-ready)
```

### 2. Add to archive-log.md (at the top, before Issue 010):
```markdown
## Issue 011 — 2026-05-13
- **THEME:** Velocity
- **EDITORIAL MIX:** Music 70%, Visual 85%, Research 60%, Process 50%, Theme 75%, AI Culture 55%
- **SONIC REFERENCE:** Fast-paced electronic, driving rhythm (150+ BPM)
- **RENDERING:** Text-only markdown
- **CLOSING SENTENCE:** "[Your closing sentence for the issue]"
- **STATUS:** Published May 7, 2026
- **CURATOR NOTE:** [Brief editorial note about the issue's focus]
```

### 3. Commit:
```bash
git add .openclaw/workspace-bulletin-bot/AGENTS.md archive-log.md
git commit -m "Update bot configuration: Add Issue 011 to available issues"
```

---

## Files to Update (Checklist)

When publishing a new issue:

- [ ] Create `ISSUE-[#]-[theme]-complete.md` (the issue file itself)
- [ ] Update `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md` (add issue number to available list)
- [ ] Update `archive-log.md` (add complete entry with metadata)
- [ ] Commit all three files to git

---

## Verification

After updating, verify the bot can see your issue:

1. **Check AGENTS.md:** Issue number appears in "Available issues" list
2. **Check archive-log.md:** New issue entry exists at the top with all metadata
3. **Check git:** Changes are committed with message mentioning the issue
4. **Test bot (optional):** Send message to @DesignByBulletinBot asking "How many issues?" — bot should report the updated number

---

## Architecture Notes

### Why Two Files?

- **AGENTS.md:** Quick reference for bot behavior and available issues
- **archive-log.md:** Source of truth for publication history, metadata, and editorial decisions

Having both ensures:
- Bot has fast access to available issues (AGENTS.md)
- Complete publication record exists for audit and reference (archive-log.md)
- Changes are version-controlled in git

### Bot Discovery Logic

When user asks "What issues are available?":
1. Bot reads `AGENTS.md` for the available issues list
2. Bot reads `archive-log.md` to get metadata about each issue
3. Bot reports: "Issues 001-010 available. Which would you like?"

If archive-log.md is incomplete, the bot may still serve the issues (files exist) but won't report them in the discovery list.

---

## Common Mistakes to Avoid

❌ **Don't:** Only create the `ISSUE-*-complete.md` file and forget to update AGENTS.md and archive-log.md  
✅ **Do:** Update all three files before committing

❌ **Don't:** Update archive-log.md but forget the AGENTS.md list  
✅ **Do:** Keep both in sync

❌ **Don't:** List issues in AGENTS.md that don't have `ISSUE-*-complete.md` files  
✅ **Do:** Only list issues that have been fully published and tested

---

## Future Improvements

Potential enhancements to consider:
- Automate AGENTS.md update from archive-log.md parsing
- Add bot command to refresh available issues without restarting
- Create a verification script that checks consistency between all three sources

---

## Questions?

If the bot still doesn't report new issues after updating:
1. Verify both AGENTS.md and archive-log.md have been updated
2. Verify the `ISSUE-*-complete.md` file exists and is readable
3. Check that the bot workspace has been reloaded (may require restart)
4. Review [TELEGRAM-BOT-SETUP.md](TELEGRAM-BOT-SETUP.md) for bot configuration details

---

**Document Version:** 1.0  
**Created:** May 7, 2026  
**Purpose:** Reference guide for bot issue discovery configuration  
**Audience:** Anyone publishing new issues or maintaining the bot
