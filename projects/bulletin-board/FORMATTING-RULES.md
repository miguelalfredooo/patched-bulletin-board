# Design By Bulletin™ — Formatting Rules for Consistency

## Based on Issue 012 Industrial & Techno Standard

### ACT 1 — VISUAL PREVIEW

**Header Block (code block, wrapped in ```)**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━
Issue [#]
[Theme] • [Date]
━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Theme Visual (code block)**
- Single theme-specific ASCII art
- Should represent the issue's core visual metaphor
- Examples:
  - Scarcity: circles (◯) in decreasing density
  - Industrial & Techno: gears (⚙) in pyramid formation
  - UFO & Paranormal: alien geometry (◇◆▲▼█) fragmented pattern
- Keep within 36-character width for Telegram safety

**Final Line:**
```
                 **[THEME IN CAPS]**
```
Centered, bold markdown formatting.

---

### ACT 2 — FULL EDITION

#### Opening Block (REQUIRED)
```
┌─────────────────────────────┐
│ [Thematic tagline 1]        │
│ [Thematic tagline 2]        │
└─────────────────────────────┘
```
- 29 chars inside border (┌─ / ─┐)
- 2 lines of thematic language, specific to the issue
- Sets tone for all 11 sections

#### Section Structure (Repeated 11 times)

**Section Header (code block with ASCII art)**
```
┌─────────────────────────────┐
│ [Section-specific tagline 1]│
│ [Section-specific tagline 2]│
└─────────────────────────────┘
```
- Same box format as opening
- 2 lines of prose that relate directly to the section title
- Thematically coherent with overall issue tone

**Section Title (Bold Markdown)**
```
**[Section Name] — [Subtitle]**
```
Example: `**Art — Desolate Beauty**`

**Section Content (Plain Prose)**
- 2-3 paragraphs of editorial content
- Ends with 1-2 source links (https://...)
- Follows the section's thematic direction

**Separator**
```
---
```
Full line break between sections (markdown `---`)

---

### The 11 Sections (In Order)

1. **Art**
2. **Painting**
3. **Illustration**
4. **Sculpture**
5. **Culture**
6. **Photography**
7. **Art History**
8. **Opinions**
9. **Design & AI Tools**
10. **Product & Process**
11. **Visual & Brand**

---

### Closing Section

**After the final section (Visual & Brand), NO separator line.**

**Closing Sentence (Bold markdown on its own line)**
```
**CLOSING:**
"[Single powerful closing quote or statement]"
```

Example from Industrial & Techno:
```
**CLOSING:**
"The machine is not the opposite of craft—it is craft refined to its essence."
```

---

### Metadata (Optional, at end of file)

```
## METADATA

*Published: [Date]*
*Theme: [Theme Name] — [Thematic description]*
```

---

## Telegram Delivery Checklist

- [ ] ACT 1 header + theme visual in single code block
- [ ] Opening tagline box (29 chars, 2 lines)
- [ ] 11 sections, each with:
  - [ ] Tagline box (29 chars, 2 lines)
  - [ ] **Section Title — Subtitle**
  - [ ] 2-3 paragraphs prose
  - [ ] 1-2 source URLs
  - [ ] `---` separator (except after final section)
- [ ] Closing sentence (bold, in quotes)
- [ ] No trailing metadata in Telegram sends (optional for files only)

---

## Section Tagline Guidelines

Write taglines that:
- Reflect the specific section's content
- Use 25-28 characters (leaves 1-2 char margin in box)
- Are poetic, not explanatory
- Connect to the overall theme
- Avoid repeating the section title

Example (Industrial & Techno, Art section):
```
┌─────────────────────────────┐
│ Concrete. Steel. Machinery. │
│ The shapes that build worlds. │
└─────────────────────────────┘
```

---

## Width Standards

- **Tagline boxes**: 29 chars inside (┌─────────────────────────┐)
- **Theme visual (ACT 1)**: Max 36 chars (Telegram code block safe)
- **Section ASCII art**: Max 36 chars
- **All inside code blocks** for monospace rendering in Telegram

---

## Metadata Fields (For File, Not Telegram)

- Issue number
- Theme name
- Date
- Editorial Mix (Music %, Visual %, Research %, Process %, Theme %, AI Culture %)
- Sonic Reference (album/artist if applicable)
- Closing Sentence
- Status (Draft, Ready for Delivery, Published)

---

## Quick Reference

**Copy-paste template for new issues:**

```markdown
# Design By Bulletin™ — Issue [#]
## Theme: [Theme Name]
## Date: [Date]

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
Issue [#]
[Theme] • [Date]
━━━━━━━━━━━━━━━━━━━━━━━━━

[THEME ASCII ART]

                 **[THEME IN CAPS]**
```

---

## ACT 2 — FULL EDITION

```
┌─────────────────────────────┐
│ [Tagline 1]                 │
│ [Tagline 2]                 │
└─────────────────────────────┘
```

**Art — [Subtitle]**

[2-3 paragraphs]

[URL 1]

---

```
┌─────────────────────────────┐
│ [Tagline 1]                 │
│ [Tagline 2]                 │
└─────────────────────────────┘
```

**Painting — [Subtitle]**

[2-3 paragraphs]

[URL 1]

---

[... continue for all 11 sections ...]

---

**CLOSING:**
"[Closing statement]"

---

## METADATA

*Published: [Date]*
*Theme: [Theme] — [Description]*
```

---

## Summary

**Key consistency points:**
1. ✅ ACT 1 = Header + Theme Visual + Bold Theme Label
2. ✅ ACT 2 = Opening Tagline + 11 Sections + Closing
3. ✅ Each section = Tagline Box + Title + Prose + URLs
4. ✅ Separator lines between sections (not after last)
5. ✅ All ASCII art in code blocks for Telegram monospace
6. ✅ Tagline boxes always 29 chars inside border
7. ✅ Tone shifts with theme, format stays constant
