# Design By Bulletin™ — Master Index

**Complete documentation for 5-agent editorial system**  
**Last updated:** 2026-05-08  
**Status:** ✅ Ready for production

---

## Quick Navigation

### For New Readers
1. Start here: **[README.md](README.md)** — 30-second overview
2. Then: **[QUICK-START.md](QUICK-START.md)** — Commands and roles
3. Then: **[CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md)** — Complete system summary

### For System Understanding
- **[RENDERING-PIPELINE.md](RENDERING-PIPELINE.md)** — Three-stage spec (REQUIRED reading)
- **[WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md)** — Visual flowchart + daily timeline

### For Agent Implementation
Find your agent workspace and read:
- `AGENTS.md` — Your role + key commands
- `SOUL.md` — Voice and tone
- Back to: **[RENDERING-PIPELINE.md](RENDERING-PIPELINE.md)** — Output format for your role

### For Tool Usage
- **[SCAFFOLD.md](SCAFFOLD.md)** — Generate Issue folder structure (`python scaffold.py`)
- **[TESTING-TOOLS.md](TESTING-TOOLS.md)** — Complete testing reference (scaffold, validator, test-uniqueness)
- **[TERMINOLOGY.md](TERMINOLOGY.md)** — Old vs. new terms

---

## Complete File Directory

### Canonical Documents (Read These First)

| File | Purpose | Audience |
|------|---------|----------|
| [README.md](README.md) | 30-second system overview | Everyone |
| [QUICK-START.md](QUICK-START.md) | Commands and role quick reference | Everyone |
| [CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md) | Complete system consolidation (this session) | Project leads |
| [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) | Three-stage spec (REQUIRED) | All agents + bot |
| [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md) | Visual flowchart + timing | Managers + coordinators |

### Tools & Templates

| File | Purpose | Command |
|------|---------|---------|
| [SCAFFOLD.md](SCAFFOLD.md) | Generate Issue folder | `python scaffold.py issues/017 --theme "..."` |
| [TESTING-TOOLS.md](TESTING-TOOLS.md) | All 3 tools in one workflow | scaffold, validator, test-uniqueness |
| [CURATOR-REPORT-TEMPLATE.md](CURATOR-REPORT-TEMPLATE.md) | Curator daily report format | Copy template for each report |
| [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md) | Assignment Editor commission format | Copy template for each brief |
| [SECTION-GUIDELINES.md](SECTION-GUIDELINES.md) | Writing standards per section | Reference while writing |
| [COMPLETED-CHECKLIST.md](COMPLETED-CHECKLIST.md) | Progress tracking template | Copy for each Issue |

### Reference

| File | Purpose |
|------|---------|
| [TERMINOLOGY.md](TERMINOLOGY.md) | Old vs. new term mapping |
| [archive-log.md](archive-log.md) | Publication record (append-only) |

---

## Agent Workspaces

Each agent has their own workspace at:  
`/Users/blackmachete/.openclaw/workspace-bulletin-[role]/`

### Files in Each Workspace

| File | Purpose |
|------|---------|
| `AGENTS.md` | Your role + key commands (1-2 pages) |
| `SOUL.md` | Voice and tone (how you communicate) |
| `IDENTITY.md` | Who you are |
| `TOOLS.md` | Environment setup (if needed) |
| `HEARTBEAT.md` | Scheduled tasks (empty unless you have recurring work) |
| `archive/` | Old working docs (preserved for reference) |

### By Role

**CURATOR**  
Path: `/Users/blackmachete/.openclaw/workspace-bulletin-curator/`  
Primary docs: `AGENTS.md` + `RENDERING-PIPELINE.md` Stage 1  
Key template: `CURATOR-REPORT-TEMPLATE.md`

**ASSIGNMENT EDITOR**  
Path: `/Users/blackmachete/.openclaw/workspace-bulletin-assignment/`  
Primary docs: `AGENTS.md` + `RENDERING-PIPELINE.md` Stage 1  
Key template: `COMMISSION-TEMPLATE.md`

**MANAGING EDITOR**  
Path: `/Users/blackmachete/.openclaw/workspace-bulletin-managing/`  
Primary docs: `AGENTS.md` + `RENDERING-PIPELINE.md` Stage 1  
Key tools: `scaffold.py`, `progress.py`  
Key template: `SECTION-GUIDELINES.md`

**EDITORIAL DIRECTOR**  
Path: `/Users/blackmachete/.openclaw/workspace-bulletin-editorial/`  
Key tools: `validator.py`, `test-uniqueness.py`  
Key docs: `TESTING-TOOLS.md`, `TESTING-UNIQUENESS.md`  
Primary docs: `AGENTS.md` + `RENDERING-PIPELINE.md` Stage 2  
Key tools: `validator.py`  
Key commands: `/admin-preview`, `/admin-send-issue`

**BULLETIN BOT**  
Path: `/Users/blackmachete/.openclaw/workspace-bulletin-bot/`  
Primary docs: `AGENTS.md` + `RENDERING-PIPELINE.md` Stage 3  
Key template: Message formatter implementation

---

## Tools & Scripts

All tools are in: `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/`

### scaffold.py
**Generate Issue folder structure**

```bash
python scaffold.py issues/017 --theme "Discovery"
```

**Output:** 24 numbered files (00-COVER-ART through 12-METADATA-FOOTER)  
**Time saved:** ~5 minutes per Issue  
**Read:** [SCAFFOLD.md](SCAFFOLD.md)

### validator.py
**Check Issue structure for errors**

```bash
python validator.py issues/017              # Check
python validator.py issues/017 --fix        # Auto-fix
```

**Checks:**
- All files exist (correct numbering)
- No backticks in art files
- No escaping in copy files
- File naming correct

**Read:** [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) Stage 2

### progress.py
**Track Issue completion in real-time**

```bash
python progress.py issues/017              # Quick view
python progress.py issues/017 --verbose    # Detailed
```

**Output:** Completion percentage + progress bar  
**Read:** [PROGRESS.md](PROGRESS.md)

### checks.py
**Advanced validation (word count, links, etc.)**

```bash
python checks.py issues/017 --word-count   # 60-120 per section
python checks.py issues/017 --links        # URL availability
```

### coord.py
**Coordinate handoffs between agents**

```bash
python coord.py report curator 017
python coord.py commission assignment 017
python coord.py track managing 017
```

---

## Issue Structure

Every Issue has exactly 24 files in flat structure:

```
issues/017/
├── 00-COVER-ART.txt              ← Logo + masthead (1 file)
├── 01-SECTION-ART.txt            ← Section visuals (11 files)
├── 01-SECTION-COPY.md            ← Section prose (11 files)
├── 02-SECTION-ART.txt
├── 02-SECTION-COPY.md
... (repeat for sections 1-11)
└── 12-METADATA-FOOTER.txt        ← Closing quote (1 file)

Total: 24 files
```

### The 11 Sections (Locked)

1. Art
2. Painting
3. Illustration
4. Sculpture
5. Culture
6. Photography
7. Art History
8. Opinions
9. Design & AI Tools
10. Product & Process
11. Visual & Brand

---

## Key Rules

### Rule 1: Raw Output
**Agents output unformatted content. The pipeline handles rendering.**
- ✅ Write ASCII art, markdown prose, JSON metadata as plain text
- ❌ NO backticks around ASCII
- ❌ NO backslash escaping in prose
- ✅ Links as plain URLs

### Rule 2: One Output Format Per Stage
- **Stage 1 (Agents):** Raw content (art files have no backticks)
- **Stage 2 (Validation):** Structure verification (validator.py checks)
- **Stage 3 (Bot):** Telegram rendering (bot adds backticks + escaping)

### Rule 3: Clear Handoff Points
- **Curator → Assignment:** Daily report (7:30am PT)
- **Assignment → Managing:** Commissions (by noon PT)
- **Managing → Editorial:** Completed Issue (by 7pm PT)
- **Editorial → Bot:** Validated Issue (by 7:45pm PT)
- **Bot → Subscribers:** Published Issue (by 8:00am PT next day)

### Rule 4: Use Templates
- Curator uses: [CURATOR-REPORT-TEMPLATE.md](CURATOR-REPORT-TEMPLATE.md)
- Assignment uses: [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md)
- Managing uses: [SECTION-GUIDELINES.md](SECTION-GUIDELINES.md)
- All use: [COMPLETED-CHECKLIST.md](COMPLETED-CHECKLIST.md)

### Rule 5: Progress Tracking
- Use `python progress.py issues/017` to track completion
- Target: 100% complete before Editorial validation
- Managing Editor can see at a glance which sections are done

---

## Daily Timeline

```
7:00am PT   Curator starts scanning
7:30am PT   Curator report due
8:00am PT   Assignment Editor begins
12:00pm PT  Assignment commissions due
1:00pm PT   Managing Editor begins writing
7:00pm PT   Managing Editor should be done
7:00pm PT   Editorial Director validates
7:45pm PT   Editorial Director approves
7:45pm PT   Bulletin Bot publishes
8:00am PT   Subscribers receive Issue (next day)
(next day)
```

---

## Common Tasks

### Task: Create a New Issue

1. Run scaffold:
   ```bash
   python scaffold.py issues/018 --theme "Discovery"
   ```

2. Edit the 24 files (start in order: art, then copy for each section)

3. Track progress:
   ```bash
   python progress.py issues/018
   ```

4. When 100% done, notify Editorial Director

### Task: Validate an Issue

1. Run validator:
   ```bash
   python validator.py issues/018
   ```

2. If errors, either:
   - Run auto-fix: `python validator.py issues/018 --fix`
   - OR notify Managing Editor to fix manually

3. Validate again to confirm

### Task: Preview an Issue (as Editorial Director)

1. Validate first:
   ```bash
   python validator.py issues/018
   ```

2. Preview with bot:
   ```bash
   /admin-preview 018
   ```

3. Approve and send:
   ```bash
   /admin-send-issue 018
   ```

### Task: Review Curator Report

1. Get the report (Curator sends by 7:30am PT)

2. Review PASSED URLs (7.0+) — candidates for today's Issue

3. Review FLAGGED URLs (5.0-6.9) — use if they fit theme

4. Create commissions based on what you want to cover

5. Send briefs to Managing Editor

---

## Troubleshooting

### "I don't know what to write"
→ Read your AGENTS.md and [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) Stage 1 (your stage)

### "Validation is failing"
→ Read the error message from `python validator.py`  
→ Usually: backticks in art or escaping in copy  
→ Try: `python validator.py --fix`

### "I'm not sure about the format"
→ Check: [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) (your stage)  
→ Check: Your agent's AGENTS.md  
→ Check: The relevant TEMPLATE.md file

### "What's the publication schedule?"
→ Read: [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md) "Daily Timeline"

### "How do I know my Issue is 100% done?"
→ Run: `python progress.py issues/018`  
→ Should show: `[████████████████████] 24/24` and "COMPLETE"

### "Where are the old Issues?"
→ Check: `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/issues-archive/`  
→ Or: See [archive-log.md](archive-log.md) for publication record

---

## What Was Changed (This Session)

### Before
- **Project folder:** 68 markdown files (conflicting specs)
- **Agent workspaces:** 113 markdown files (duplicate rules)
- **Problem:** Agents confused about output format, specs contradicted

### After
- **Project folder:** 5 canonical files + 6 tools + 3 templates
- **Agent workspaces:** 5 focused files per agent (AGENTS.md + SOUL.md + IDENTITY.md + TOOLS.md + HEARTBEAT.md)
- **Archive:** 146 files preserved for reference
- **Result:** Clear roles, single source of truth (RENDERING-PIPELINE.md), agents know exactly what to do

### Files Created This Session

**Consolidation docs:**
- [CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md) — Full system summary
- [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md) — Visual flowchart
- [INDEX.md](INDEX.md) — This file

**Canonical docs (existing, now linked):**
- [README.md](README.md)
- [QUICK-START.md](QUICK-START.md)
- [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md)
- [SCAFFOLD.md](SCAFFOLD.md)
- [PROGRESS.md](PROGRESS.md)

**Templates (existing, now linked):**
- [CURATOR-REPORT-TEMPLATE.md](CURATOR-REPORT-TEMPLATE.md)
- [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md)
- [SECTION-GUIDELINES.md](SECTION-GUIDELINES.md)
- [COMPLETED-CHECKLIST.md](COMPLETED-CHECKLIST.md)

---

## Next Steps

### Phase 1: Verification (Immediate)
1. ✅ Verify each agent can find and understand their AGENTS.md
2. ✅ Test full workflow end-to-end
3. ✅ Verify all tools run without errors

### Phase 2: Documentation (Week 1)
1. Add visual diagrams to RENDERING-PIPELINE.md
2. Create onboarding guide for new agents
3. Document any customizations or variations

### Phase 3: Automation (Week 2)
1. Add cron job for curator daily report (7:30am PT)
2. Add progress notifications (Editorial Director gets updates)
3. Add auto-publish scheduling

### Phase 4: Optimization (Week 3+)
1. Add lint checks for prose quality
2. Add readability metrics
3. Add subscriber feedback loop

---

## Quick Links (Bookmarks)

**Start here:**
- New reader? → [README.md](README.md)
- Need a command? → [QUICK-START.md](QUICK-START.md)
- System overview? → [CONSOLIDATED-SUMMARY.md](CONSOLIDATED-SUMMARY.md)

**Technical spec:**
- How the pipeline works? → [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md)
- Visual timeline? → [WORKFLOW-DIAGRAM.md](WORKFLOW-DIAGRAM.md)

**Tools:**
- Generate Issue? → `python scaffold.py` ([SCAFFOLD.md](SCAFFOLD.md))
- Check completion? → `python progress.py` ([PROGRESS.md](PROGRESS.md))
- Validate Issue? → `python validator.py` ([RENDERING-PIPELINE.md](RENDERING-PIPELINE.md) Stage 2)

**Templates:**
- Curator report? → [CURATOR-REPORT-TEMPLATE.md](CURATOR-REPORT-TEMPLATE.md)
- Assignment brief? → [COMMISSION-TEMPLATE.md](COMMISSION-TEMPLATE.md)
- Writing standards? → [SECTION-GUIDELINES.md](SECTION-GUIDELINES.md)
- Progress tracking? → [COMPLETED-CHECKLIST.md](COMPLETED-CHECKLIST.md)

---

## Summary

You have a **complete, production-ready 5-agent editorial system** with:

✅ Clear roles and responsibilities  
✅ Single source of truth (RENDERING-PIPELINE.md)  
✅ One fundamental rule (raw output, pipeline handles rendering)  
✅ Flat file structure (24 files per Issue, no manifest complexity)  
✅ Instant scaffolding (python scaffold.py)  
✅ Real-time progress tracking (python progress.py)  
✅ Automated validation (python validator.py)  
✅ Template-based handoffs (Curator → Assignment → Managing → Editorial → Bot)  
✅ All prior work archived (146 files preserved, not deleted)  

**Everything you need to publish daily.**

---

**Questions?** Start with your role's AGENTS.md, then read [RENDERING-PIPELINE.md](RENDERING-PIPELINE.md).

**Ready to publish?** Run `python scaffold.py issues/[number] --theme "..."` and start writing.
