# Design By Bulletin™ — Deployment Guide

Quick reference for composing and deploying new issues.

---

## Component-Based Issue Composition

Every issue uses reusable components. Read **[BOT-COMPONENTS.md](BOT-COMPONENTS.md)** first for complete system reference.

---

## Quick Workflow

### 1. Choose ACT 1 Composition (1 min)

Pick one of three approaches:

**Option A: Grid Layout (v1)**
- Use: COMPONENT-1-ISSUE-COVER + COMPONENT-2-ISSUE-SECTIONS
- Result: All 11 sections in single codeblock (LABELED variation)
- Best for: Showing complete visual grid at once
- Reference: `ascii-art-library/master/ACT-1-LAYOUT-TEMPLATE.txt`

**Option B: Card-by-Card (v2)**
- Use: COMPONENT-1-ISSUE-COVER + COMPONENT-SECTION-CARD-TEMPLATE (×11)
- Result: Cover + 11 individual section cards in separate codeblocks
- Best for: One section per message, scannable format
- Reference: `ascii-art-library/master/COMPONENT-SECTION-CARD-TEMPLATE.txt`

**Option C: Full Template (v3)**
- Use: MOCK-ISSUE-005-ACT-1 (adapted)
- Result: Complete rendered example
- Best for: Reference/implementation guide
- Reference: `ascii-art-library/master/MOCK-ISSUE-005-ACT-1.txt`

---

### 2. Prepare Components (5 min)

#### Cover Component
Update `ascii-art-library/master/COMPONENT-1-ISSUE-COVER.txt`:
- Issue number: `Issue [#]`
- Theme: `[THEME NAME]`
- Date: `[Month DD, Year]`

**Key:** Logo + dividers are fixed, only update issue/theme/date

#### Section Components (for chosen v1/v2/v3)

**v1 (Grid):** Use `COMPONENT-2-ISSUE-SECTIONS.txt` 
- LABELED variation ready
- 11 sections separated by dividers (━━━━━━━━━━━━━━━━━━━━━━━━━)
- ASCII art left, section name right at vertical midpoint

**v2 (Cards):** Use `COMPONENT-SECTION-CARD-TEMPLATE.txt`
- Each section gets: ASCII art + name below + article details
- 11 copies for 11 sections

**v3 (Template):** Use `MOCK-ISSUE-005-ACT-1.txt`
- Adapt all variables (issue number, theme, dates, content)
- Keep structure as-is

---

### 3. Prepare ACT 2 Editorial (5 min)

For all versions, include ACT 2 with:

**Structure (11 sections, each in own codeblock):**
```
[Codeblock 1: COMPONENT-1-ISSUE-COVER]

[Codeblock 2: Editorial Section 1]
**Art — [Subtitle]**
[2-4 sentences of prose]
*[Source: Attribution]*

[Plain text link]

[Codeblock 3: Editorial Section 2]
[Section content]
[Plain text link]

... (repeat for all 11 sections)
```

**Editorial section template** (from `COMPONENT-3-EDITORIAL-GRID.txt`):
```
**[SECTION NAME] — [SUBTITLE]**
[2-4 sentences of narrative prose]
*[Source: Publication Name]*
```

**Reference:** `ascii-art-library/master/COMPONENT-3-EDITORIAL-GRID.txt`

---

### 4. Finalize & Deliver (3 min)

#### Add Closing Sentence
After all 11 editorial sections, add:
```
"[8-15 word thematic statement]"
```

Reference: `ascii-art-library/master/COMPONENT-4-CLOSING-SENTENCE.txt`

#### Add Metadata Footer
At end:
```
*Published: [Date]*
*Theme: [Name] — [8-15 word description]*
```

Reference: `ascii-art-library/master/COMPONENT-5-METADATA-FOOTER.txt`

#### Delivery Format
- **Cover:** Codeblock 1 (always)
- **Sections:** Own codeblocks (2+)
- **Links:** Plain text outside codeblocks (no backticks)
- **Dividers:** 24-character EM DASH (━━━━━━━━━━━━━━━━━━━━━━━━━) between sections

---

## Asset Locations

### Master Components (reference/templates)
```
ascii-art-library/master/
├── COMPONENTS-MASTER-GUIDE.txt         (System documentation)
├── COMPONENT-1-ISSUE-COVER.txt         (Cover template)
├── COMPONENT-2-ISSUE-SECTIONS.txt      (6 ASCII variations)
├── COMPONENT-3-EDITORIAL-GRID.txt      (Editorial examples)
├── COMPONENT-4-CLOSING-SENTENCE.txt    (Closing examples)
├── COMPONENT-5-METADATA-FOOTER.txt     (Footer examples)
├── ACT-1-LAYOUT-TEMPLATE.txt           (Full layout reference)
└── MOCK-ISSUE-005-ACT-1.txt            (Complete example)
```

### ASCII Art Files (550 total)
```
ascii-art-library/
├── source/        (110 originals — pure art)
├── expanded/      (110 centered hero versions)
├── labeled/       (110 with section names)
├── compact/       (220 left/right variations)
├── hero-tall/     (110 portrait format)
└── master/        (Component reference files)
```

**Usage:**
- ACT 1 v1: Use `labeled/` directory
- ACT 1 v2: Use `source/` directory
- ACT 1 v3: Use `hero-tall/` in cover

---

## Codeblock Rules

✅ **Always:**
- Cover in Codeblock 1
- Each section in own codeblock
- Use triple backticks (```)
- Monospace rendering for ASCII art

✅ **Links are plain text:**
```
https://example.com/article
```
(No backticks, no formatting)

✅ **Dividers between sections:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━
```
24 characters to prevent Telegram line breaks

---

## Complete Example Structure

```
**ISSUE #005 — SIGNAL**

[Codeblock 1]
██████╗ ██████╗ ██████╗ ™
...
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 005
Signal • May 8, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━
[HERO-TALL portrait + **SIGNAL**]
[/Codeblock 1]

**ACT 1 v1 example (Grid Layout):**
[Codeblock 2]
[11 sections in LABELED variation with dividers]
[/Codeblock 2]

**ACT 2:**
[Codeblock 3]
**Art — Bold Geometric Work**
Minimalism cuts through...
*[Source: MOMA]*
[/Codeblock 3]

https://www.moma.org/

[Codeblock 4]
**Painting — Color as Communication**
Restricted palettes...
*[Source: WikiArt]*
[/Codeblock 4]

https://www.wikiart.org/

... (continue for all 11 sections)

**CLOSING:**
"Your presence changes the room."

*Published: May 8, 2026*
*Theme: Signal — Direct communication that cuts through visual noise*
```

---

## For More Details

- **Component system:** [BOT-COMPONENTS.md](BOT-COMPONENTS.md)
- **Master guide:** `ascii-art-library/master/COMPONENTS-MASTER-GUIDE.txt`
- **Published issues:** `ISSUE-001-*.md` through `ISSUE-010-*.md`
