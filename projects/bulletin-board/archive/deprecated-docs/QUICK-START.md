# QUICK START — Commands Reference

**Copy-paste ready commands for each agent role.**

**For complete system guide, read: [COMPLETE-SYSTEM-GUIDE.md](COMPLETE-SYSTEM-GUIDE.md)**  
**This file is for quick command reference only.**

---

## Editorial Director

### Write and send the Editorial Brief

```bash
# Create Issue structure
python scaffold.py issues/021 --theme "Your Theme Here"

# Now write the Editorial Brief
# Use: EDITORIAL-BRIEF-TEMPLATE.md
# Include:
#  • Theme + core idea
#  • Visual direction
#  • Section focus table (11 sections × 1 angle each)
#  • Tone guidance
#  • Sources to prioritize + avoid
#  • CURATION GUIDANCE FOR ART DEPARTMENT (2-3 narrative angles)
#  • Timeline & deadlines
#  • Validation checklist

# Send brief to all agents by 6pm PT (day before)
```

### Validate and publish

```bash
# Check workflow status
python checkpoint.py status 021

# Validate file structure
python validator.py issues/021

# If validation fails, auto-fix common issues
python validator.py issues/021 --fix

# Preview on Telegram
/admin-preview 021

# Signal approval
python checkpoint.py signal editorial 021 "Approved for publishing"

# Publish to all subscribers
/admin-send-issue 021
```

---

## The Art Department

### Read the Brief

```bash
# Read EDITORIAL-BRIEF-TEMPLATE.md to understand the format
# Read the actual brief sent by Editorial Director
# Pay special attention to:
#  • CURATION GUIDANCE FOR ART DEPARTMENT section
#  • The 2-3 narrative angles (organize your selections around these)
#  • Editorial insight being pursued
#  • Sources to prioritize
```

### Evaluate and Curate

```bash
# 1. Read your workspace
cat /Users/blackmachete/.openclaw/workspace-bulletin-art-department/AGENTS.md

# 2. Learn evaluation framework
cat /Users/blackmachete/.openclaw/workspace-bulletin-art-department/EVALUATION-FRAMEWORK.md

# 3. Learn curation guidelines
cat /Users/blackmachete/.openclaw/workspace-bulletin-art-department/CURATION-GUIDELINES.md

# 4. Start scanning sources (7:30am PT)
# Find 48+ URLs related to the theme

# 5. Evaluate each using 5 dimensions:
#    • Technical execution
#    • Conceptual strength
#    • Innovation
#    • Communication value
#    • Relevance to theme

# 6. Select 14-16 PASS pieces (quality over quantity)

# 7. Organize by narrative angle (from the brief)

# 8. Annotate each with Why/Insight/Connection

# 9. Write editorial insight paragraph (what do selections teach together?)

# 10. Prepare report
# Use: ART-DEPARTMENT-REPORT-TEMPLATE.md
```

### Submit Your Curation

```bash
# Signal completion (by 9:15am PT)
python checkpoint.py signal art-department 021 "14 pieces curated and annotated. Narrative angles: [Angle 1], [Angle 2], [Angle 3]"

# Your report should include:
#  • 14-16 selected pieces
#  • Organized by narrative angle (not random)
#  • Each with Why/Insight/Connection annotations
#  • Editorial insight paragraph
#  • Flagged pieces (merit but below bar)
#  • Rejected pieces (explain why)
```

---

## Assignment Editor

### Receive and Map

```bash
# 1. Read Editorial Brief + Art Department curation

# 2. Understand the narrative angles
#    (from brief's CURATION GUIDANCE section)

# 3. Map curated pieces to 11 sections
#    Preserve the narrative angles Art Department established

# 4. Identify gaps
#    What angles need custom commissioning?

# 5. Create commissions for gaps
#    Use: COMMISSION-TEMPLATE.md
#    Include:
#     • Section name
#     • Theme
#     • Art Department angle this supports
#     • Curated sources (from Art Department)
#     • Commissioned sources (to fill gap)
```

### Brief Managing Editor

```bash
# For each of 11 sections, send commission brief:

SECTION: Art
THEME: Geometry
ART DEPARTMENT ANGLE: Geometry as Abstraction
DIRECTION: Opens issue, establishes visual direction
CURATED SOURCES:
  - [URL from Art Department selection]
  - [URL from Art Department selection]
COMMISSIONED SOURCES:
  - [Custom URL to fill gap]
LENGTH: 3-4 sentences, ~100 words
NARRATIVE: This section supports the "Geometry as Abstraction" angle. Show how designers simplify to essential forms.
DUE: Today
```

### Signal Completion

```bash
# Signal completion (by 11am PT)
python checkpoint.py signal assignment 021 "11 sections mapped, commissions ready"
```

---

## Managing Editor

### Setup

```bash
# 1. Read the Editorial Brief
# 2. Read the Art Department's curated report
# 3. Understand the 2-3 narrative angles
# 4. Receive commission briefs from Assignment Editor
```

### Create the Issue

```bash
# Issue structure already created by Editorial Director
# Now edit the 24 files:

# 00-COVER-ART.txt
#   → ASCII art for cover
#   → No backticks, no escaping
#   → Match visual direction from brief

# NN-SECTION-ART.txt (for each of 11 sections)
#   → ASCII art for the section
#   → Match visual direction
#   → No backticks

# NN-SECTION-COPY.md (for each of 11 sections)
#   → Markdown prose (title + 2-4 sentences, 60-120 words)
#   → Use sources from commission brief (curated + commissioned)
#   → Support the narrative angle this section belongs to
#   → No backticks, no escaping
#   → Plain URLs: https://example.com

# 12-METADATA-FOOTER.txt
#   → Closing quote or statement
#   → Reinforces the theme
```

### Writing Tips

```bash
# Before writing each section:
# 1. Review Art Department's Why/Insight/Connection for curated sources
# 2. Understand which narrative angle this section supports
# 3. Know how it fits in the overall story
# 4. Write prose that deepens the narrative (not just summarizes sources)

# Voice:
#  • Specific (name artists, works, publications)
#  • Warm (never condescending)
#  • Authoritative (trust your judgment)
#  • Narrative-aware (know how section fits the story)
```

### Track Progress

```bash
# See real-time completion percentage
python progress.py issues/021

# See verbose details
python progress.py issues/021 --verbose

# Expected output:
# 50% complete [██████████░░░░░░░░░░] 12/24
# ✅ 01: ✅ Art  ✅ Copy
# ✅ 02: ✅ Art  ✅ Copy
# ⏳ 03: ✅ Art  ❌ Copy (in progress)
```

### Signal Completion

```bash
# When all 24 files are done (by 6:45pm PT)
python checkpoint.py signal managing 021 "All 11 sections complete, 24/24 files done"
```

---

## Bulletin Bot

### Publish

```bash
# 1. Wait for Editorial Director approval

# 2. Load Issue files
cd /Users/blackmachete/projects/patched-editorial/projects/bulletin-board
ls issues/021/

# 3. Format and send (bot code handles this)
# Apply MarkdownV2 formatting:
#  • Wrap ASCII art in code blocks
#  • Escape special chars in prose
#  • Use parse_mode="MarkdownV2"

# 4. Archive log
# The archive-log.md updates automatically when issue publishes
```

---

## Checkpoint Commands

### Check Status

```bash
# See entire workflow state
python checkpoint.py status 021

# Output:
# 🔍 Art Department Curation
#   Status: ✅ COMPLETE
#   Blocker: None
#
# 📝 Assignment Commissions
#   Status: ✅ COMPLETE
#   Blocker: None
#
# ... etc for all stages
```

### See Blocking Dependencies

```bash
# Show who's blocking whom
python checkpoint.py blocks 021

# Output:
# ⏳ Managing Editor
#    → BLOCKED by Assignment Editor
#    → Assignment Editor hasn't finished yet
#
# ✅ Assignment Editor
#    → Art Department is done, you can start
```

### See Timeline

```bash
# Show completion timestamps
python checkpoint.py timeline 021

# Output:
# ✅ Art Department Curation: 2026-05-08 09:15 PT
# ✅ Assignment Commissions: 2026-05-08 11:00 PT
# ✅ Managing Editor Sections: 2026-05-08 18:45 PT
# ✅ Editorial Approval: 2026-05-08 19:42 PT
# ⏳ Bulletin Bot Publishing: Pending
```

### Signal Checkpoint

```bash
# Standard format (from any agent)
python checkpoint.py signal [role] [issue] "Your message"

# Examples:
python checkpoint.py signal art-department 021 "14 pieces curated. Angles: Abstraction, System, Culture"
python checkpoint.py signal assignment 021 "11 sections mapped, commissions created"
python checkpoint.py signal managing 021 "All 24 files complete"
python checkpoint.py signal editorial 021 "Approved for publishing"
```

---

## Validation Commands

### Basic Validation

```bash
# Check if Issue structure is valid
python validator.py issues/021

# Output:
# ✅ VALID
# 24/24 files present
# No backticks in art files
# No escaping in copy files
# manifest.json present and valid
```

### Auto-Fix

```bash
# If validation finds errors, try auto-fix
python validator.py issues/021 --fix

# Then re-validate
python validator.py issues/021
```

### Content Quality

```bash
# Check for duplicates and placeholders
python test-uniqueness.py issues/021 --check-duplicates

# Output:
# ✅ All sections unique (no duplicates)
# ✅ No placeholder text found
# ✅ All sections meet minimum length
```

---

## Common Scenarios

### "I need to see where we are in the workflow"

```bash
python checkpoint.py status 021
```

### "Something is blocking us"

```bash
python checkpoint.py blocks 021
```

### "How long is each stage taking?"

```bash
python checkpoint.py timeline 021
```

### "I finished my part"

```bash
python checkpoint.py signal [your-role] 021 "Your message"
```

### "I want to see my progress"

```bash
python progress.py issues/021
```

### "Something failed validation"

```bash
python validator.py issues/021 --fix
python validator.py issues/021
```

---

## File Locations

**All commands run from:**  
`/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/`

**Templates:**  
- Editorial Brief: `EDITORIAL-BRIEF-TEMPLATE.md`
- Art Department Report: `ART-DEPARTMENT-REPORT-TEMPLATE.md`
- Commission: `COMMISSION-TEMPLATE.md`
- Section Guidelines: `SECTION-GUIDELINES.md`
- Checklist: `COMPLETED-CHECKLIST.md`

**Issues:**  
`issues/[number]/` (e.g., `issues/021/`)

**Agent workspaces:**  
`~/.openclaw/workspace-bulletin-[role]/AGENTS.md`

---

## Need More Help?

- **Understanding roles:** Your workspace's AGENTS.md
- **How pipeline works:** RENDERING-PIPELINE.md
- **Complete system:** CONSOLIDATED-SUMMARY.md
- **Finding something:** INDEX.md

---

**Copy-paste the commands for your role. You're ready to go.**
