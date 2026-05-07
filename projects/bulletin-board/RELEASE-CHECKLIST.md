# Design By Bulletin™ — Release Checklist

Complete this checklist before publishing any new issue. All items must be verified before the bot can serve the issue.

---

## Phase 1: Content Creation

### Issue File
- [ ] **ISSUE-[#]-[theme]-complete.md** created
- [ ] File follows naming convention: `ISSUE-[#]-[theme]-complete.md`
- [ ] Header contains: Title, Theme name, Publication date
- [ ] ACT 1 (Visual Preview) section complete
  - [ ] Hero cover with ASCII art logo
  - [ ] Issue number and theme name
  - [ ] Publication date in header format
  - [ ] All 11 section ASCII art blocks included
  - [ ] Each section properly formatted with markdown code blocks
- [ ] ACT 2 (Full Edition) section complete
  - [ ] All 11 editorial sections present
  - [ ] Each section has: Title, Description, Source citation
  - [ ] Sections in correct order: Art, Painting, Illustration, Sculpture, Culture, Photography, Art History, Opinions, Design & AI Tools, Product & Process, Visual & Brand
- [ ] Closing sentence included
- [ ] Publication metadata at end: date and theme summary
- [ ] File is UTF-8 encoded
- [ ] No syntax errors in markdown

### ASCII Art Library
- [ ] **11 ASCII art files** created for the issue
- [ ] File naming pattern: `issue-[#]-[section-name]-neon.txt`
- [ ] Files created for all 11 sections:
  - [ ] issue-[#]-art-neon.txt
  - [ ] issue-[#]-painting-neon.txt
  - [ ] issue-[#]-illustration-neon.txt
  - [ ] issue-[#]-sculpture-neon.txt
  - [ ] issue-[#]-culture-neon.txt
  - [ ] issue-[#]-photography-neon.txt
  - [ ] issue-[#]-art-history-neon.txt
  - [ ] issue-[#]-opinions-neon.txt
  - [ ] issue-[#]-design-tools-neon.txt
  - [ ] issue-[#]-product-process-neon.txt
  - [ ] issue-[#]-visual-brand-neon.txt
- [ ] All files stored in: `projects/bulletin-board/ascii-art-library/`
- [ ] Each ASCII file is 15+ lines for proper monospace rendering
- [ ] ASCII art renders cleanly in monospace terminal

---

## Phase 2: Archive Documentation

### Archive Log Entry
- [ ] **archive-log.md** updated with new issue entry
- [ ] Entry placed in correct chronological position (newest first)
- [ ] Entry includes all required metadata:
  - [ ] Issue number and date: `## Issue [#] — YYYY-MM-DD`
  - [ ] **THEME:** [theme name]
  - [ ] **EDITORIAL MIX:** Music %, Visual %, Research %, Process %, Theme %, AI Culture %
  - [ ] **SONIC REFERENCE:** [cultural reference with era/source]
  - [ ] **RENDERING:** Text-only markdown
  - [ ] **CLOSING SENTENCE:** [exact closing line from issue]
  - [ ] **STATUS:** Published [date]
  - [ ] **CURATOR NOTE:** [editorial observation]
- [ ] All percentages are realistic (0-100%, sum not required to equal specific total)
- [ ] Closing sentence matches exactly what's in the issue file
- [ ] Curator note reflects the theme and editorial decisions

### Archive Consistency Check
- [ ] Archive-log.md is append-only (new entries at top)
- [ ] No duplicate issue entries
- [ ] No skipped issue numbers (except intentional gaps documented)
- [ ] All issues 001-010 (or current count) are listed
- [ ] Issues are in reverse chronological order (newest first)

---

## Phase 3: Bot Configuration

### Bot Available Issues List
- [ ] **Bot AGENTS.md** updated (if available at `.openclaw/workspace-bulletin-bot/AGENTS.md`)
- [ ] New issue number added to "Available Issues" list
- [ ] Issue appears in issue-serving commands
- [ ] Bot can parse and serve the new issue file

### Bot Issue File References
- [ ] Bot is configured to find files by pattern: `ISSUE-*-complete.md`
- [ ] Bot file path is correct: `projects/bulletin-board/ISSUE-[#]-*.md`
- [ ] Bot has read permissions on the issue file
- [ ] Bot has read permissions on archive-log.md (for metadata)

### Bot Asset References
- [ ] Bot can access ASCII art from: `projects/bulletin-board/ascii-art-library/`
- [ ] ASCII files are readable by bot
- [ ] ASCII rendering tested in monospace context

---

## Phase 4: Verification & Testing

### File Format Verification
- [ ] All files are UTF-8 encoded (no encoding errors)
- [ ] No BOM (byte order mark) in files
- [ ] Line endings are consistent (LF, not CRLF on Unix systems)
- [ ] Markdown syntax is valid (test render locally if possible)

### Content Verification
- [ ] Issue number is consistent across all files (issue file, archive log, ASCII files)
- [ ] Theme name is consistent across all files (exact spelling and capitalization)
- [ ] Closing sentence appears in both issue file and archive log (word-for-word match)
- [ ] All 11 sections are present in both issue file and ASCII art library
- [ ] No placeholder text remains in issue file (e.g., "[Source: X]" should be actual citation)

### Bot Content Delivery Test
- [ ] Bot can locate the issue file
- [ ] Bot can read the issue file without errors
- [ ] Bot can parse ACT 1 (visual preview) correctly
- [ ] Bot can parse ACT 2 (full edition) correctly
- [ ] Bot can retrieve correct ASCII art for each section
- [ ] Bot displays closing sentence accurately
- [ ] Bot serves correct metadata from archive-log.md

### Monospace Rendering Test
- [ ] ASCII art displays cleanly in Telegram monospace code blocks
- [ ] No characters are corrupted or misaligned
- [ ] Line widths are consistent (typically 40-50 chars wide)
- [ ] No hidden characters or control sequences break rendering

---

## Phase 5: Archive Integration

### Git Commit
- [ ] All new files are staged: `git add projects/bulletin-board/`
- [ ] Commit message follows pattern: "Create Issue [#] — [Theme]" or similar
- [ ] Commit includes:
  - [ ] New ISSUE-[#]-*.md file
  - [ ] 11 new ASCII art files
  - [ ] Updated archive-log.md
  - [ ] (Optional) Updated bot AGENTS.md if applicable
- [ ] Commit is on main branch
- [ ] Commit is signed (if required by project)

### Git History
- [ ] Previous commits reference issue content correctly
- [ ] Git log shows issue progression chronologically
- [ ] No duplicate commits for the same issue
- [ ] Archive-log.md history is clean (append-only in git)

---

## Phase 6: Documentation Updates

### README.md Updates
- [ ] README.md issue table includes the new issue
- [ ] Issue count is updated: "N Complete Issues (001-XXX)"
- [ ] Issue table shows correct theme and date
- [ ] Table is in correct order (001 to latest)

### ASCII Art Catalog Updates
- [ ] ASCII-ART-CATALOG.md issue table updated
- [ ] New issue marked as "Complete" with all 11 sections
- [ ] Sonic reference documented (if not pure text art)
- [ ] Color palette documentation updated (if applicable)

### Quick Reference
- [ ] Quick reference section in README updated with latest issue date
- [ ] All internal links are correct and functional
- [ ] No broken references to issue files

---

## Phase 7: Pre-Deployment Verification

### Dependency Checklist
- [ ] Issue file exists and is readable: `ISSUE-[#]-*.md`
- [ ] ASCII art library files exist and are readable: `issue-[#]-*.txt` (11 files)
- [ ] Archive log is updated: `archive-log.md`
- [ ] Archive log entry is accessible by bot
- [ ] All source citations are accurate and verifiable
- [ ] No circular references or broken links

### Bot Readiness
- [ ] Bot has been notified of new issue (if manual notification required)
- [ ] Bot configuration includes new issue number
- [ ] Bot can serve issue via `/digest` command
- [ ] Bot can serve preview via `/preview` command
- [ ] Bot includes issue in issue list when user requests available options

### Data Integrity
- [ ] No data loss from previous issues
- [ ] Archive-log.md is not corrupted
- [ ] All previous issues are still accessible
- [ ] Previous ASCII art files are intact

---

## Phase 8: Post-Deployment

### Live Verification
- [ ] Bot successfully serves the new issue on Telegram
- [ ] Full digest (`/digest`) displays correctly
- [ ] Preview (`/preview`) displays correctly
- [ ] Archive log is queryable
- [ ] No errors in bot logs when serving the issue

### User Testing
- [ ] Issue displays cleanly on mobile (Telegram mobile)
- [ ] Issue displays cleanly on desktop (Telegram desktop)
- [ ] Monospace rendering is correct
- [ ] All source links are readable
- [ ] Closing sentence is visible and complete

### Documentation Completeness
- [ ] CLAUDE.md or memory updated with new issue info
- [ ] Release notes prepared (if applicable)
- [ ] Changelog updated

---

## Checklist Summary Template

```
New Issue Release Checklist — Issue [#]: [Theme]
Completed: [Date]

CONTENT CREATION:
- [ ] Issue file: ISSUE-[#]-[theme]-complete.md
- [ ] ASCII art: 11 files in ascii-art-library/
- [ ] ACT 1: Complete with ASCII sections
- [ ] ACT 2: Complete with 11 sections + sources

ARCHIVE:
- [ ] archive-log.md entry added
- [ ] Metadata complete and accurate
- [ ] No duplicates or gaps

BOT CONFIGURATION:
- [ ] Bot AGENTS.md updated (if applicable)
- [ ] Issue number in available issues list
- [ ] File paths correct

VERIFICATION:
- [ ] All files UTF-8 encoded
- [ ] Content consistent across files
- [ ] Bot can locate and read files
- [ ] Monospace rendering tested

GIT:
- [ ] All files committed
- [ ] Commit message clear
- [ ] On main branch

DOCUMENTATION:
- [ ] README.md updated
- [ ] ASCII catalog updated
- [ ] All links functional

LIVE TEST:
- [ ] Bot serves issue correctly
- [ ] Desktop and mobile rendering correct
- [ ] No bot errors

Status: ✅ READY FOR DISTRIBUTION
```

---

## Notes

- **Frequency:** Complete this checklist for every new issue before distribution
- **Automation:** Many of these checks can be automated with scripts
- **Backup:** Always verify archive-log.md backup before publishing
- **Testing:** Test in Telegram @DesignByBulletinBot before considering live
- **Rollback:** If issues arise, revert the latest commit and investigate

**Last Updated:** 2026-05-07
