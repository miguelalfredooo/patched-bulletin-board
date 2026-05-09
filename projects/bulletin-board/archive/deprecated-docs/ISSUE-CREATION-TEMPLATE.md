# Design By Bulletin™ — Issue Creation Template

**Use this template for EVERY new issue (001-999)**

---

## BEFORE YOU START

**Checklist:**
- [ ] Issue number assigned (NNN format: 001, 002, 003, etc.)
- [ ] Theme/subject decided (e.g., "Momentum", "Presence")
- [ ] Date set (publication date, format: Month D, Year)
- [ ] 11 sections identified (Art, Painting, Illustration, Sculpture, Culture, Photography, Art History, Opinions, Design & AI Tools, Product & Process, Visual & Brand)
- [ ] Curator sources gathered (11 URLs, all validated)
- [ ] HERO-TALL character chosen (◆, ▶, ░, etc. — must be unique per issue)
- [ ] Closing sentence written (1 powerful sentence summarizing the theme)

---

## FILE NAMING CONVENTION

```
ISSUE-NNN-theme-slug-complete.md
```

**Rules:**
- `NNN`: Zero-padded issue number (001, 002, 003... 010, 011, 012)
- `theme-slug`: Lowercase, hyphens only (e.g., `momentum`, `industrial-techno`)
- Always ends with `-complete.md`

**Example:**
```
ISSUE-006-momentum-complete.md
ISSUE-012-industrial-techno-complete.md
```

---

## FILE STRUCTURE (EXACT ORDER)

```markdown
# Design By Bulletin™ — Issue NNN
## Theme: Theme Name
## Date: Month D, Year

**📖 See [BOT-COMPONENTS.md](BOT-COMPONENTS.md) for component system reference**

---

## ACT 1 — VISUAL PREVIEW

[CONTENT HERE]

---

## ACT 2 — FULL EDITION

[CONTENT HERE]

---

## CLOSING SENTENCE

[ONE POWERFUL SENTENCE]

---

*Published: Month D, Year*
*Theme: Theme Name — [1-line description]*
```

**Critical:** This order is FIXED. No variations.

---

## PART 1: HEADER (Lines 1-5)

```markdown
# Design By Bulletin™ — Issue NNN
## Theme: Theme Name
## Date: Month D, Year

**📖 See [BOT-COMPONENTS.md](BOT-COMPONENTS.md) for component system reference**
```

**Rules:**
- Line 1: H1, exact format with Issue number (no leading zeros in title)
- Line 2: H2, "Theme:" prefix, proper capitalization
- Line 3: H2, "Date:" prefix, format exactly "Month D, Year" (e.g., "May 14, 2026")
- Line 4: Empty line
- Line 5: Reference line, EXACTLY as shown (no variations)

**Example:**
```markdown
# Design By Bulletin™ — Issue 012
## Theme: Industrial and Techno
## Date: May 14, 2026

**📖 See [BOT-COMPONENTS.md](BOT-COMPONENTS.md) for component system reference**
```

---

## PART 2: ACT 1 (Lines 7-X)

```markdown
---

## ACT 1 — VISUAL PREVIEW

```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue NNN
Theme Name • Month D, Year
━━━━━━━━━━━━━━━━━━━━━━━━━

[15-ROW HERO-TALL PYRAMID HERE]

**THEME NAME**

╔═════════════════════════════════╗
║                                 ║
║  THEME NAME                     ║
║                                 ║
╚═════════════════════════════════╝
```

[11 SECTION PREVIEWS HERE]

```
```

**Rules:**

### Logo (Fixed)
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝
```
**Never change this.** Copy-paste exactly.

### Header
```
Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue NNN
Theme Name • Month D, Year
━━━━━━━━━━━━━━━━━━━━━━━━━
```
- "Design By Bulletin™" — exact
- First divider — exactly 27 ━ characters
- "Issue NNN" — zero-padded (Issue 001, Issue 012)
- "Theme Name • Month D, Year" — bullet (•) separator, proper date format
- Second divider — exactly 27 ━ characters

### HERO-TALL Pyramid (15 rows, unique per issue)
```
[15 rows of expanding character pattern]
```

**Format:**
```python
for i in range(1, 16):
    padding = ' ' * (21 - i)
    chars = ' '.join([character] * i)
    print(f'{padding}{chars}')
```

**Constraint:** Max 35 chars per line (including padding)

**Characters per issue (fixed):**
- 001: ◆ (diamond)
- 002: ■ (square)
- 003: ○ (circle)
- 004: ░ (light shade)
- 005: ▲ (triangle)
- 006: ▶ (arrow)
- 007: ─ (dash)
- 008: │ (pipe)
- 009: ▓ (dark shade)
- 010: ▒ (medium shade)
- 011: ◇ (hollow diamond)
- 012+: Design as needed (no duplicates)

### Theme Label
```
**THEME NAME**
```
- Exactly two asterisks on each side
- ALL CAPS
- Centered approximately (leading spaces before)

### Theme Box
```
╔═════════════════════════════════╗
║                                 ║
║  THEME NAME                     ║
║                                 ║
╚═════════════════════════════════╝
```

**Rules:**
- Use box drawing characters exactly as shown
- Interior width: 31 characters
- Theme name left-aligned after two spaces
- Pad to 31 chars total with trailing spaces

### 11 Section Previews
```markdown
### Section 1 — Art

```
[ASCII ART HERE - 5-8 LINES]
```

### Section 2 — Painting

[etc.]
```

**Format per section:**
- H3 header: `### Section N — Name`
- Blank line
- Opening triple backticks
- ASCII art (5-8 lines, max 35 chars per line)
- Closing triple backticks
- Blank line
- (next section)

**Section order (FIXED):**
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

## PART 3: ACT 2 (Lines X-Y)

```markdown
---

## ACT 2 — FULL EDITION

```
[ASCII ART FROM SECTION 1]
```

**Art — Title**

Prose description (1-2 sentences). Should connect the theme to this discipline.

[Optional: URL]

---

```
[ASCII ART FROM SECTION 2]
```

**Painting — Title**

[Prose and optional URL]

---

[... repeat for all 11 sections ...]

```

**Format per section:**
- Opening triple backticks
- ASCII art from the section preview (5-8 lines)
- Closing triple backticks
- Blank line
- **Section Name — Descriptor** (bold title)
- Blank line
- Prose (1-2 sentences, conversational tone)
- Blank line
- [Optional: Bare URL like `https://example.com`]
- Blank line
- Divider: `---`
- Blank line

**Critical rules:**
- NO source attribution lines (removed per May 7 update)
- NO asterisks or special chars in prose (will be escaped later)
- Links are bare URLs only (no link text)
- Each section exactly 1-2 sentences
- Prose connects theme to discipline

**Example section:**
```markdown
```
►
               ►►
              ►►►
             ►►►►
            ►►►►►
           ►►►►►►
          ►►►►►►►
         ►►►►►►►►
        ►►►►►►►►►
```

**Art — Fast-Moving Practice**

Artists working at scale and speed, studio systems enabling rapid production. Quantity strategies replace perfectionism. Volume becomes its own form of ambition.

https://frieze.com

---
```

---

## PART 4: CLOSING (Lines Y-END)

```markdown
**CLOSING SENTENCE:**

"[One powerful sentence summarizing the theme]."

---

*Published: Month D, Year*
*Theme: Theme Name — [One-line theme description]*
```

**Rules:**
- H2: `**CLOSING SENTENCE:**` (exact)
- Blank line
- Quote marks required
- One sentence, powerful, ends with period inside quotes
- Blank line
- Divider: `---`
- Blank line
- Published line: `*Published: Month D, Year*` (italics, exact format)
- Theme line: `*Theme: Theme Name — [description]*` (italics, exact format)
- No blank lines after theme line (EOF)

**Example:**
```markdown
**CLOSING SENTENCE:**

"Momentum is not a direction — it's a state of permission."

---

*Published: May 9, 2026*
*Theme: Momentum — Velocity as cultural acceleration and kinetic permission to act*
```

---

## VALIDATION CHECKLIST (Before Committing)

Run through this before any git commit:

### Structure
- [ ] Header present (title, theme, date, reference link)
- [ ] `## ACT 1 — VISUAL PREVIEW` section present
- [ ] `## ACT 2 — FULL EDITION` section present
- [ ] `**CLOSING SENTENCE:**` section present
- [ ] Footer with published date and theme description

### ACT 1 Content
- [ ] Logo is exactly as specified (6 lines)
- [ ] Issue number zero-padded (Issue 001, not Issue 1)
- [ ] Theme name and date on header line
- [ ] Two dividers (━) present (27 chars each)
- [ ] HERO-TALL pyramid has exactly 15 rows
- [ ] Each pyramid row ≤35 chars
- [ ] Theme label in bold, all caps
- [ ] Theme box is 31 chars wide (interior)
- [ ] All 11 section previews present in order
- [ ] Each section has ASCII art in code blocks

### ACT 2 Content
- [ ] All 11 sections present in same order as ACT 1
- [ ] Each section has: ASCII art + bold title + prose + optional URL
- [ ] Each section separated by `---` divider
- [ ] No source attribution lines (links only)
- [ ] All prose is 1-2 sentences
- [ ] All URLs are bare (no link text)
- [ ] No unescaped special characters in prose

### Closing
- [ ] Closing sentence is one powerful sentence
- [ ] Has quote marks
- [ ] Ends with period inside quotes
- [ ] Published date is correct
- [ ] Theme description is 1 line

### File Format
- [ ] Filename is `ISSUE-NNN-theme-slug-complete.md`
- [ ] Theme slug is lowercase with hyphens
- [ ] File has newline at end
- [ ] No trailing whitespace on lines
- [ ] No tabs (spaces only)

### Line Width Validation
```bash
# Run this command before committing:
awk 'BEGIN {max=0} {if (length>max) {max=length; line=$0}} END {print "Max line width:", max}' ISSUE-NNN-theme-complete.md
```

**Rule:** Max line width should be ≤35 in code blocks, unlimited outside.

---

## CREATION WORKFLOW

1. **Start with this template** — Copy entire structure
2. **Fill in header** — Issue #, theme, date
3. **Design ACT 1 cover** — Choose HERO-TALL character, get 11 section ASCII arts
4. **Build ACT 2** — Write prose for all 11 sections using curator sources
5. **Write closing sentence** — One powerful sentence
6. **Run validation checklist** — Every single item
7. **Run line width check** — Max 35 in code blocks
8. **Commit** — Message: `"add: Issue NNN Theme to bulletin board (ACT 1 + ACT 2)"`

---

## COMMON MISTAKES TO AVOID

| Mistake | Fix |
|---------|-----|
| Issue number not zero-padded | Always: 001, 002, 012 (not 1, 2, 12) |
| Sections in wrong order | Reference the 11-section list above. Don't reorder. |
| Prose longer than 2 sentences | Cut it down. One or two sentences only. |
| Source attribution lines present | Remove all `*[Source: X]*` lines. Links only. |
| HERO-TALL rows exceed 35 chars | Use formula: `padding + spaces + chars`. Test each row. |
| Special chars in prose unescaped | Save for Telegram send. Don't escape in file. |
| Missing dividers between sections | Every section in ACT 2 needs `---` separator. |
| Closing sentence has no quotes | Must have: `"[sentence]."` |
| Theme box width wrong | Interior must be exactly 31 characters. |
| ASCII art outside code blocks | All ASCII must be in triple backticks in ACT 2. |

---

## COPY-PASTE: Empty Issue Template

```markdown
# Design By Bulletin™ — Issue NNN
## Theme: Theme Name
## Date: Month D, Year

**📖 See [BOT-COMPONENTS.md](BOT-COMPONENTS.md) for component system reference**

---

## ACT 1 — VISUAL PREVIEW

```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue NNN
Theme Name • Month D, Year
━━━━━━━━━━━━━━━━━━━━━━━━━

[HERO-TALL 15-ROW PYRAMID HERE]

**THEME NAME**

╔═════════════════════════════════╗
║                                 ║
║  THEME NAME                     ║
║                                 ║
╚═════════════════════════════════╝
```

### Section 1 — Art

```
[ASCII HERE]
```

### Section 2 — Painting

```
[ASCII HERE]
```

### Section 3 — Illustration

```
[ASCII HERE]
```

### Section 4 — Sculpture

```
[ASCII HERE]
```

### Section 5 — Culture

```
[ASCII HERE]
```

### Section 6 — Photography

```
[ASCII HERE]
```

### Section 7 — Art History

```
[ASCII HERE]
```

### Section 8 — Opinions

```
[ASCII HERE]
```

### Section 9 — Design & AI Tools

```
[ASCII HERE]
```

### Section 10 — Product & Process

```
[ASCII HERE]
```

### Section 11 — Visual & Brand

```
[ASCII HERE]
```

```

---

## ACT 2 — FULL EDITION

```
[ASCII ART SECTION 1]
```

**Art — Descriptor**

Prose here (1-2 sentences).

[Optional URL]

---

```
[ASCII ART SECTION 2]
```

**Painting — Descriptor**

Prose here.

[Optional URL]

---

```
[ASCII ART SECTION 3]
```

**Illustration — Descriptor**

Prose here.

---

```
[ASCII ART SECTION 4]
```

**Sculpture — Descriptor**

Prose here.

---

```
[ASCII ART SECTION 5]
```

**Culture — Descriptor**

Prose here.

[Optional URL]

---

```
[ASCII ART SECTION 6]
```

**Photography — Descriptor**

Prose here.

[Optional URL]

---

```
[ASCII ART SECTION 7]
```

**Art History — Descriptor**

Prose here.

[Optional URL]

---

```
[ASCII ART SECTION 8]
```

**Opinions — Descriptor**

Prose here.

---

```
[ASCII ART SECTION 9]
```

**Design & AI Tools — Descriptor**

Prose here.

---

```
[ASCII ART SECTION 10]
```

**Product & Process — Descriptor**

Prose here.

---

```
[ASCII ART SECTION 11]
```

**Visual & Brand — Descriptor**

Prose here.

[Optional URL]

---

**CLOSING SENTENCE:**

"[One powerful sentence]."

---

*Published: Month D, Year*
*Theme: Theme Name — [One-line description]*
```

---

**This is the standard. Follow it exactly. Every new issue uses this template.**
