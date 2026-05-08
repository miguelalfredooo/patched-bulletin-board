# Design By Bulletin™ — Workflow Order of Operations

**Version:** 1.0  
**Last Updated:** May 7, 2026  
**Context:** Complete workflow from project open to delivery

---

## PHASE 1: PROJECT SETUP & ORIENTATION

### 1. Read Critical Documentation (5 min)
**Files to scan first:**
```
projects/bulletin-board/
├── BOT-COMPONENTS.md          ← Component system architecture
├── COMPONENTS-MASTER-GUIDE.txt ← Full template reference
├── QA-DELIVERY-CHECKLIST.md    ← Delivery standards (THIS IS LAW)
└── WORKFLOW-ORDER-OF-OPERATIONS.md ← You are here
```

**What to understand:**
- ACT 1 = Visual cover + section previews
- ACT 2 = Full 11-section editorial (prose + links)
- MarkdownV2 escaping = non-negotiable for Telegram
- Each issue follows: Create → Build → Verify → Deliver → QA

### 2. Check Git Status (2 min)
```bash
git status
git log --oneline -10
```

**What to verify:**
- No uncommitted changes that will interfere
- Last commit message tells you what's done
- Current branch is `main`

### 3. Understand Current Project State (3 min)
```bash
ls -1 projects/bulletin-board/ISSUE-*.md | wc -l
```

**Know:**
- How many issues exist (001-011 base, plus any new ones)
- Which issues are committed vs. in progress
- Latest issue number (what comes next)

---

## PHASE 2: TASK UNDERSTANDING

### 4. Clarify the Task (Read, Don't Assume)
Before starting ANY work:

**Ask yourself:**
- [ ] Am I creating a NEW issue or MODIFYING an existing one?
- [ ] What is the theme/subject for this issue?
- [ ] Do I need to run the curator pipeline or are sources provided?
- [ ] Is this editorial (writing) or technical (code/config)?
- [ ] What format is the output (ACT 1, ACT 2, both)?

**If unclear, go back to user message and re-read.**

### 5. Map File Locations (2 min)
```
projects/bulletin-board/
├── ISSUE-NNN-theme-complete.md     ← Main file (read/edit here)
├── sessions/ISSUE-NNN-*-session.md ← Session record (read-only reference)
├── ascii-art-library/              ← Section ASCII art source
│   ├── master/COMPONENT-*.txt
│   └── sections/[issue]/
└── curator-reports/                ← Curator agent output (reference)
    └── YYYY-MM-DD-curator-report.md
```

**Before editing:** Always know the exact file path.

---

## PHASE 3: INFORMATION GATHERING

### 6. Read Existing Issue File (5 min)
If modifying an existing issue:
```bash
cat projects/bulletin-board/ISSUE-NNN-theme-complete.md | head -50
```

**Scan for:**
- [ ] Current ACT 1 structure (cover design, characters)
- [ ] Current ACT 2 structure (11 sections, prose)
- [ ] Links in ACT 2 (are they working?)
- [ ] Any TODOs or FIXMEs in comments
- [ ] Metadata (date, theme, closing sentence)

### 7. Check Session Record (3 min)
```bash
cat projects/bulletin-board/sessions/ISSUE-NNN-*-session.md
```

**Understand:**
- How this issue was created
- What curator sources were used
- What editorial decisions were made
- Any problems encountered

### 8. Review Related Documentation (2 min)
```bash
grep -l "Issue NNN\|theme-name" projects/bulletin-board/*.md
```

**Look for:**
- References in MAY-7-2026-UPDATES.md
- Links in BOT-COMPONENTS.md
- Examples in COMPONENTS-MASTER-GUIDE.txt

---

## PHASE 4: VERIFICATION BEFORE WORK

### 9. Understand Output Format (3 min)
**Ask:**
- [ ] Is output going to Telegram? (Use MarkdownV2 standard)
- [ ] Is output a markdown file? (Use markdown syntax)
- [ ] Is output ASCII art? (Use correct character, check width ≤35 chars)

**Reference:** QA-DELIVERY-CHECKLIST.md section "ACT 1 FORMAT" and "ACT 2 FORMAT"

### 10. Think About the End State (2 min)
**Before writing any code or prose:**

Visualize what the user will see in Telegram:
- [ ] Will the cover pyramid look right at max width?
- [ ] Will the section titles be bold and readable?
- [ ] Will links create preview cards?
- [ ] Is the prose clear and 1-2 sentences?

**If you can't visualize it, ask or read an example issue first.**

### 11. Check Dependencies (2 min)
```bash
# If creating new issue, do we have all sources?
grep -c "https://" ISSUE-NNN-theme-complete.md

# If using curator, is the report complete?
cat projects/bulletin-board/curator-reports/*.md | tail -20
```

**Verify:**
- [ ] All links are present
- [ ] All 11 sections have content
- [ ] No "TODO" or placeholder text remains

---

## PHASE 5: EXECUTION (ISSUE-SPECIFIC)

### IF: Creating a NEW Issue
**Order:**
1. Run curator agent (if needed) → generates curator-reports/YYYY-MM-DD-curator-report.md
2. Assignment editor selects URLs from curator report
3. Managing editor writes ACT 2 prose (11 sections)
4. Editorial director designs ACT 1 cover (unique HERO-TALL)
5. Validate all sections have prose + links
6. Commit to git with message: `"add: Issue NNN Theme to bulletin board (ACT 1 + ACT 2)"`
7. Proceed to PHASE 6 (Delivery)

### IF: Modifying an Existing Issue
**Order:**
1. Identify what changed (cover? prose? links?)
2. Read current file completely
3. Make surgical edits (don't rewrite everything)
4. Verify no formatting breaks
5. Commit with message: `"update: Issue NNN — [specific change]"`
6. If sending to Telegram, proceed to PHASE 6

### IF: Sending to Telegram
**Skip to PHASE 6**

---

## PHASE 6: DELIVERY (TELEGRAM)

### 12. Extract Correct Section
```bash
# For ACT 1:
sed -n '/## ACT 1 — VISUAL PREVIEW/,/^---$/p' ISSUE-NNN-theme-complete.md

# For ACT 2:
sed -n '/## ACT 2 — FULL EDITION/,$p' ISSUE-NNN-theme-complete.md
```

**Verify:**
- [ ] Content starts and ends cleanly
- [ ] No stray markdown from adjacent sections
- [ ] All triple backticks are present and paired

### 13. Apply MarkdownV2 Escaping
**ALWAYS use this function:**
```python
import re

def escape_markdown_v2(text):
    """Escape special chars for MarkdownV2, preserving code blocks"""
    parts = re.split(r'(```[\s\S]*?```)', text)
    result = []
    for part in parts:
        if part.startswith('```'):
            result.append(part)
        else:
            escaped = re.sub(r'([\[\]()~`>#+=\-|{}._!])', r'\\\1', part)
            result.append(escaped)
    return ''.join(result)
```

**Critical:** Copy from QA-DELIVERY-CHECKLIST.md, don't improvise.

### 14. Split Content by Dividers
```python
sections = content.split('\n---\n')
# Now you have list of section chunks
# Each chunk = one Telegram message
```

**Verify:**
- [ ] No chunk exceeds ~4000 characters
- [ ] Each chunk is complete (starts with content, ends cleanly)

### 15. Send to Telegram
**For each section:**
```python
payload = {
    'chat_id': 7774590281,
    'text': escape_markdown_v2(section.strip()),
    'parse_mode': 'MarkdownV2'
}
# Use urllib to POST to Telegram API
```

**Critical fields:**
- `chat_id`: Always 7774590281 (Alfred's chat)
- `parse_mode`: Always `MarkdownV2` (no exceptions)
- `text`: Always escaped output (no raw content)

See QA-DELIVERY-CHECKLIST.md for complete Python template.

---

## PHASE 7: VERIFICATION (POST-SEND)

### 16. Check Each Message in Telegram
**For EVERY message sent:**

- [ ] **Code blocks render** — ASCII art is monospace and aligned
- [ ] **Bold titles work** — `**Title**` appears bold, no asterisks visible
- [ ] **Links are clickable** — URLs have preview cards
- [ ] **Prose flows** — no escaped characters visible
- [ ] **Unicode preserved** — ◆ ▶ ░ etc. display correctly
- [ ] **Message count matches** — right number of chunks received

**If ANY check fails:** Do not proceed. Troubleshoot immediately.

### 17. Take Screenshot (Optional but Helpful)
Screenshot the Telegram chat showing the issue. Save as:
```
projects/bulletin-board/delivery-screenshots/ISSUE-NNN-telegram-confirmation.png
```

This provides visual proof of delivery for records.

### 18. Commit Delivery Record
```bash
git add [modified files]
git commit -m "send: Issue NNN [Theme] to Telegram (ACT 1 + ACT 2)

- Sent ACT 1 cover with [character] HERO-TALL design
- Sent 11 editorial sections (ACT 2)
- Applied MarkdownV2 escaping for proper rendering
- Code blocks, bold titles, and links verified in Telegram"
```

---

## PHASE 8: DOCUMENTATION & CLOSURE

### 19. Update Session Record (If New Issue)
Create `sessions/ISSUE-NNN-theme-session.md`:
```markdown
# Issue NNN Session Record — [Theme]

**Date Generated:** [date]
**Theme:** [Theme]
**Publication Date:** [date]

## CURATOR SOURCES
[List of URLs and scores]

## EDITORIAL DECISIONS
[What changed, why]

## COVER DESIGN
[Character chosen, rationale]

## CLOSING SENTENCE
[The sentence]

## DELIVERY
✅ Sent to Telegram [date]
✅ ACT 1 cover verified
✅ ACT 2 sections (11/11) verified
```

### 20. Final Git Status Check
```bash
git status
git log --oneline -3
```

**Verify:**
- [ ] Working directory clean
- [ ] Last 3 commits include your work
- [ ] No uncommitted changes remaining

---

## TROUBLESHOOTING QUICK REFERENCE

| Problem | Check First | Solution |
|---------|------------|----------|
| Code blocks not rendering | parse_mode parameter | Reread QA checklist, resend with `parse_mode=MarkdownV2` |
| Bold not working | Escaping applied | Check for unescaped `*` outside code blocks |
| Links not previewing | URL format | Use bare URLs like `https://example.com` |
| Message truncated | Content length | Split by `---` more aggressively |
| ASCII alignment broken | Character width | Verify each line ≤35 chars (use `wc -c`) |
| Escaping shows to user | parse_mode omitted | Always include parse_mode parameter |

---

## CHECKLIST: AM I READY TO WORK?

Before touching any file:

- [ ] Read WORKFLOW-ORDER-OF-OPERATIONS.md (you just did)
- [ ] Read QA-DELIVERY-CHECKLIST.md
- [ ] Ran `git status` (understand current state)
- [ ] Know which issue I'm working on (number + theme)
- [ ] Know what I'm doing (create, modify, deliver)
- [ ] Understand end state (what user will see)
- [ ] Have all information I need (curator report, theme, etc.)

**If all checked:** Proceed. Otherwise, go back and fill gaps.

---

## QUICK COMMANDS (Copy-Paste Ready)

```bash
# Check project state
git status && git log --oneline -5

# Read an issue file
cat projects/bulletin-board/ISSUE-NNN-theme-complete.md

# Extract ACT 1
sed -n '/## ACT 1 — VISUAL PREVIEW/,/^---$/p' projects/bulletin-board/ISSUE-NNN-theme-complete.md

# Extract ACT 2
sed -n '/## ACT 2 — FULL EDITION/,$p' projects/bulletin-board/ISSUE-NNN-theme-complete.md

# Check line widths (must be ≤35 for codeblocks)
cat projects/bulletin-board/ISSUE-NNN-theme-complete.md | awk '{print length, $0}' | sort -rn | head -10

# Commit changes
git add projects/bulletin-board/ISSUE-NNN-theme-complete.md
git commit -m "send: Issue NNN to Telegram (ACT 1 + ACT 2)"
```

---

**This is your map. Follow it step-by-step. Don't skip phases.**
