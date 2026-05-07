# Design By Bulletin™ — Bot Components System

## Component 1: Hero Cover Template

The hero cover is the branded opening of every issue. It appears at the top of ACT 1 (Visual Preview).

### Template Structure

```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue [NUMBER]
[THEME NAME] • [PUBLICATION DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Component Breakdown

| Part | Content | Fixed | Variable |
|------|---------|-------|----------|
| **Logo** | `██████╗ ██████╗ ██████╗ ™` | ✅ Fixed | — |
| **Logo Lines 2-6** | Box drawing characters | ✅ Fixed | — |
| **Masthead** | `Design By Bulletin™` | ✅ Fixed | — |
| **Top Divider** | `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━` | ✅ Fixed | — |
| **Issue Number** | `Issue 006` | ❌ Variable | Changes per issue |
| **Theme + Date** | `Momentum • May 9, 2026` | ❌ Variable | Changes per issue |
| **Bottom Divider** | `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━` | ✅ Fixed | — |

### Usage Rules

1. **Always include the hero cover** at the start of ACT 1
2. **Comes before all section ASCII art** (sections 1-11)
3. **Must be inside code block** when sent to Telegram (for monospace rendering)
4. **Logo and dividers are identical** across all issues — never change them
5. **Only update:** Issue number, theme name, and publication date

### Example Variations

**Issue 001 — Presence (May 5, 2026):**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 001
Presence • May 5, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Issue 010 — Worn (May 12, 2026):**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 010
Worn • May 12, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Font Requirements

- **Font:** Monospace (Courier, Courier New, or equivalent)
- **Size:** Standard terminal/code block size
- **Rendering:** Telegram code blocks preserve alignment automatically
- **Width:** ~38 characters (optimized for Telegram mobile + desktop)

### Bot Delivery

**In `/preview` command:** Hero cover is first thing in code block
**In `/digest` command:** Hero cover is first thing in code block
**Standalone mode:** Hero cover can be sent alone as a complete message in code block
**Wrapping:** Always inside triple backticks (```)

### Standalone Usage

The hero cover is completely self-contained and requires no additional context. It can be used independently as:
- A standalone announcement of a new issue
- A cover/intro card separate from the full editorial content
- A visual marker in any context needing issue identification

**Example standalone delivery:**
```
██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝

Design By Bulletin™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issue 006
Momentum • May 9, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

This can be sent as a complete message with no prose or additional sections.

### Current Implementation

- ✅ All 10 issues (001-010) use standardized hero template
- ✅ Consistent branding across all deliveries
- ✅ Logo and dividers never change
- ✅ Only metadata (issue #, theme, date) updates per issue

### File Locations

Hero template appears in each issue file:
- `/projects/bulletin-board/ISSUE-[#]-[theme]-complete.md`
- Located immediately after `## ACT 1 — VISUAL PREVIEW` header
- Lines 9-23 (approximately)

---

## Component 2: Section ASCII Art

Individual ASCII art pieces representing each of the 11 editorial sections. These form the visual body of ACT 1 (Visual Preview).

### Overview

Each issue contains 11 section ASCII pieces, one for each editorial topic:
1. **Art** — Visual foundation
2. **Painting** — Color and form
3. **Illustration** — Line and composition
4. **Sculpture** — Space and material
5. **Culture** — Social context
6. **Photography** — Light and frame
7. **Art History** — Lineage and tradition
8. **Opinions** — Critical perspective
9. **Design & AI Tools** — Digital practice
10. **Product & Process** — Making and craft
11. **Visual & Brand** — Identity and mark

### File Structure

**Naming Convention:**
```
issue-[#]-[section-name]-neon.txt
```

**Examples:**
- `issue-006-art-neon.txt` — Section 1, Issue 006
- `issue-006-painting-neon.txt` — Section 2, Issue 006
- `issue-006-illustration-neon.txt` — Section 3, Issue 006
- etc.

**Storage Location:**
`/projects/bulletin-board/ascii-art-library/`

### Specifications

| Property | Value |
|----------|-------|
| **Width** | ~40-50 characters (monospace) |
| **Height** | 15 lines (standardized) |
| **Format** | Pure ASCII text, UTF-8 encoded |
| **Font** | Monospace (Courier, etc.) |
| **Aspect Ratio** | Approximately 1:3 (wider than tall) |
| **Style** | Geometric Unicode characters (◆, ▲, ║, ═, etc.) |
| **Alignment** | Center-aligned within codeblock |

### Example Section

**Issue 006 — Art Section:**
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

### Usage in Issues

**Location:** Appears immediately after section header in ACT 1
**Format:** Each section wrapped in code block backticks (\`\`\`)
**Context:** Appears after Hero Cover, before ACT 2

**Example placement:**
```
[Hero Cover]

### Section 1 — Art
```
[ASCII art for Art section]
```

### Section 2 — Painting
```
[ASCII art for Painting section]
```

[... continues for all 11 sections ...]
```

### Standalone Usage

Each section ASCII art can be used independently:
- Sent as individual artwork cards
- Used in galleries or collections
- Shared individually by section topic
- Reused across different contexts

**Standalone example:**
```
[ASCII art for Photography section]
```

### Variations System

Each section ASCII art now exists in **three layout options**, totaling 330 files:

#### Variation 1: Compact-Left
ASCII positioned left, section name on right side
```
                ►                       **Art**
               ►►
              ►►►
```
**Use case:** Left-to-right flow, visual anchor on left

#### Variation 2: Compact-Right  
Section name on left, ASCII positioned right
```
**Art**                                    ►
                                          ►►
                                         ►►►
```
**Use case:** Right-to-left balance, text label on left

#### Variation 3: Expanded
Full 14-line standalone piece, centered, no text
```
    ◇
   ◇ ◇
  ◇ ◇ ◇
 ◇ ◇ ◇ ◇
◇ ◇ ◇ ◇ ◇
```
**Use case:** Hero display, gallery view, full-page visual

### File Organization

**Location:** `/Users/blackmachete/projects/patched-editorial/projects/bulletin-board/ascii-art-library/`

**Structure:** Organized by issue number for efficient cataloging:

```
ascii-art-library/
├── 001/
│   ├── source/     [11 files] issue-001-[section]-neon.txt
│   ├── expanded/   [11 files] issue-001-[section]-expanded-neon.txt
│   └── compact/    [22 files] issue-001-[section]-compact-left/right-neon.txt
├── 002/ — 010/
│   └── [same structure: 11 source + 11 expanded + 22 compact]
├── README.md       (complete organization guide)
└── VARIATION-EXAMPLES.md (visual examples)
```

**Per-issue breakdown (44 files each):**
- `source/` — 11 original ASCII files
- `expanded/` — 11 centered hero versions (14 lines)
- `compact/` — 22 left/right layout variations (9 lines)

### Access Patterns

**By specific issue:**
```
ascii-art-library/006/expanded/issue-006-art-expanded-neon.txt
ascii-art-library/010/compact/issue-010-culture-compact-left-neon.txt
```

**All 11 sections for an issue:**
```
ls ascii-art-library/007/expanded/issue-007-*-expanded-neon.txt
```

**Specific section across all issues:**
```
ls ascii-art-library/*/source/issue-*-art-neon.txt
```

### Current Inventory

- ✅ **440 total files** (110 source + 330 variations)
- ✅ **330 variation files** (110 × 3 layout options)
- ✅ **110 expanded** (14-line centered hero pieces)
- ✅ **220 compact** (110 left-aligned + 110 right-aligned)
- ✅ **All 10 issues complete** (001-010)
- ✅ **All 11 sections per issue**
- ✅ **Ready for flexible extraction and layout integration**

### Quick Reference

| Need | Location | Filename Pattern |
|------|----------|------------------|
| Original Art #6 | `006/source/` | `issue-006-art-neon.txt` |
| Hero Painting #10 | `010/expanded/` | `issue-010-painting-expanded-neon.txt` |
| Compact layout | `NNN/compact/` | `issue-NNN-[section]-compact-{left\|right}-neon.txt` |

---

---

## Component 3: Editorial Grid

Editorial prose sections forming the intellectual backbone of each issue (ACT 2). Each of the 11 sections pairs with its corresponding ASCII art piece from ACT 1, providing critical context, cultural references, and source attribution.

### Overview

The Editorial Grid consists of 11 prose sections, one for each visual section:

1. **Art** — Visual foundation & artistic practice
2. **Painting** — Color, form, and pigment
3. **Illustration** — Line, composition, and drawing
4. **Sculpture** — Space, material, and dimensionality
5. **Culture** — Social context and cultural significance
6. **Photography** — Light, frame, and documentation
7. **Art History** — Lineage, tradition, and historical perspective
8. **Opinions** — Critical perspective and philosophical angles
9. **Design & AI Tools** — Digital practice and systems
10. **Product & Process** — Making, craft, and methodology
11. **Visual & Brand** — Identity, mark, and visual systems

### Structure & Format

**Naming & Placement:** Appears in ACT 2 of issue files, immediately following the complete ACT 1

**Section Format:**
```
**[Section Name] — [Thematic Subtitle]**
[2-4 sentences of contextual prose, artist/maker references, and thematic development]
*[Source: Publication/Outlet Name]*
```

**Components:**
- **Section Header** — Bold section name + em dash + thematic subtitle that relates to issue theme
- **Body Text** — Prose (typically 2-4 sentences) that connects visual theme to cultural/critical context
- **Source Attribution** — Italicized source reference pointing to publication, artist, or reference material

### Specifications

| Property | Value |
|----------|-------|
| **Sections per issue** | 11 (one per editorial topic) |
| **Body length** | 2-4 sentences (~60-120 words per section) |
| **Prose style** | Narrative, critical, contextual |
| **References** | Artists, makers, designers, cultural figures, academic concepts |
| **Source format** | `*[Source: Publisher/Platform]*` |
| **Consistency** | Thematic coherence with issue theme; balanced across all 11 perspectives |

### Example Editorial Section

**From Issue 010 — Worn:**

```
**Art — Sherald's Raw Linen**
Paintings that age on the canvas. Sherald's practice treats material and time as collaborators. The painting wears in rather than deteriorates.
*[Source: Artsy]*
```

### Usage in Issues

**Location:** Appears as part of ACT 2, after all visual content
**Format:** Plain text prose (no code blocks for these sections)
**Context:** Each section mirrors its corresponding ASCII art piece from ACT 1, providing intellectual depth

**Example placement:**
```
## ACT 2 — FULL EDITION

**Art — Sherald's Raw Linen**
Paintings that age on the canvas...
*[Source: Artsy]*

**Painting — Dissolution Through Use**
Cecily Brown's figures dissolving...
*[Source: Booooooom]*

[... continues for all 11 sections ...]
```

### Content Characteristics

**Thematic Alignment:** Each issue's Editorial Grid responds to and amplifies the central theme

**Issue 010 (Worn) examples:**
- Art addresses patina and temporal markers
- Culture discusses Japanese pottery tradition (wabi-sabi)
- Photography explores meaning accumulation through repeated viewing
- Design & AI Tools covers systems maturing through use

**Issue 009 (Material) examples:**
- Art focuses on materiality as medium (body, flesh, organic matter)
- Painting emphasizes pigment as substance
- Illustration highlights paper as protagonist
- Photography celebrates film stock and grain as aesthetic choice

**Voice and References:** Combines artist/maker names, cultural theory, design practice, and contemporary references. Sources range from specialized publications (Artsy, Frieze, Magnum Photos) to broader cultural platforms (The New Yorker, Wired, Brand New).

### Standalone Usage

Editorial sections can be extracted and used independently:
- Individual section can be shared as a critical perspective on a topic
- Multiple sections on a single theme across different issues form a thematic collection
- Sources enable follow-up research and deeper exploration

**Standalone example:**
```
**Photography — Fukase's Ravens**
Bird photography about sky worn by presence. Light changing through repeated viewings and use of the negative. The image accumulates meaning.
*[Source: LensCulture]*
```

### Current Inventory

- ✅ **110 total sections** (11 sections × 10 issues)
- ✅ **All 10 issues complete** (001-010)
- ✅ **Thematic coherence** across all sections per issue
- ✅ **Source diversity** across publications, platforms, and disciplines
- ✅ **Ready for extraction** as individual critical perspectives

### Thematic Organization

Issues and their overarching themes:

| Issue | Theme | Focus |
|-------|-------|-------|
| 001 | Presence | Being visible and situated in space |
| 002 | Boundary | Edges, limits, and delineation |
| 003 | Narrative | Story, sequence, and meaning-making |
| 004 | Rhythm | Pattern, tempo, and temporal structure |
| 005 | Scale | Proportion, magnitude, and perspective |
| 006 | Momentum | Movement, force, and continuation |
| 007 | Interval | Space, gaps, and what is not there |
| 008 | Threshold | Liminality, transition, and between-states |
| 009 | Material | Substance, physicality, and irreducible fact |
| 010 | Worn | Patina, time-in-contact, and care |

Each Editorial Grid section responds to its issue's theme while maintaining the distinct voice and perspective of that particular editorial section (Art, Painting, Culture, etc.).

### File Locations

Editorial Grid appears in each issue file:
- `/projects/bulletin-board/ISSUE-[#]-[theme]-complete.md`
- Located immediately after "## ACT 2 — FULL EDITION" header
- Comprises lines from ~248 to ~291 (approximately)
- Followed by Closing Sentence and Metadata Footer

---

---

## Component 4: Closing Sentence

The thematic cornerstone of each issue—a single poetic statement that captures the essence of the theme and leaves a lasting impression on readers.

### Structure

**Format:** Single line, in quotation marks, italicized or plain text

**Placement:** Immediately follows the 11-section Editorial Grid, between last source attribution and the Metadata Footer

**Example:**
```
**CLOSING SENTENCE:**
"The things worth keeping are the things that show you used them."
```

### Characteristics

| Property | Value |
|----------|-------|
| **Length** | 8-15 words (concise, memorable) |
| **Voice** | Poetic, distilled, universal |
| **Scope** | Encapsulates the entire issue's theme |
| **Tone** | Reflective, often philosophical or paradoxical |
| **Style** | Aphoristic—can stand alone as wisdom |

### Examples Across Issues

**Issue 001 (Presence):**
"Your presence changes the room."

**Issue 007 (Interval):**
"The space between is where meaning lives."

**Issue 008 (Threshold):**
"Every threshold is a place where you are still both things at once."

**Issue 009 (Material):**
"Everything digital is downstream of something you can hold."

**Issue 010 (Worn):**
"The things worth keeping are the things that show you used them."

### Standalone Usage

The Closing Sentence is completely self-contained and can function independently:
- Sent as a standalone quote or inspiration message
- Used as a social media caption or post
- Featured in promotional materials for the issue
- Quoted in cross-platform marketing without additional context

**Example standalone delivery:**
```
"The space between is where meaning lives."

— Design By Bulletin™ Issue 007
```

### Thematic Function

The Closing Sentence distills 11 perspectives (Art, Painting, Illustration, etc.) into a single truth. It's the moment where all editorial voices converge into one unified statement.

**Relationship to Editorial Grid:**
- The Editorial Grid explores a theme across disciplines
- The Closing Sentence reveals the theme's irreducible core
- Together, they complete the intellectual and emotional arc of the issue

### Current Inventory

- ✅ **10 Closing Sentences** (one per issue, 001-010)
- ✅ **Each thematically distinct** and issue-specific
- ✅ **Memorable and quotable** across platforms
- ✅ **Ready for independent use** as promotional or inspirational content

### File Locations

Closing Sentence appears in each issue file:
- `/projects/bulletin-board/ISSUE-[#]-[theme]-complete.md`
- Located after Editorial Grid (Component 3)
- Format: Appears under bold header `**CLOSING SENTENCE:**`
- Followed by Metadata Footer (Component 5)

---

## Component 5: Metadata Footer

Administrative and archival information that grounds each issue in time, theme, and context.

### Structure

**Format:** Two lines of italicized text

**Placement:** Very end of each issue file, after Closing Sentence

**Standard Format:**
```
*Published: [DATE]*
*Theme: [THEME NAME] — [THEME DESCRIPTION]*
```

**Example from Issue 010:**
```
*Published: May 12, 2026*
*Theme: Worn — Temporal depth and what time-in-contact reveals about care*
```

### Components

| Element | Purpose | Format |
|---------|---------|--------|
| **Published Date** | Issue publication date | `*Published: [Month Day, Year]*` |
| **Theme Name** | Single-word or two-word theme | Plain text in quotes-free form |
| **Theme Description** | One-sentence distillation of theme | Follows em dash; 8-15 words |

### Examples Across Issues

**Issue 001 (Presence):**
```
*Published: May 5, 2026*
*Theme: Presence — Being situated and visibility in relationship to space*
```

**Issue 007 (Interval):**
```
*Published: May 8, 2026*
*Theme: Interval — The rhythm, grammar, and structure created by gaps, rests, and what is not there*
```

**Issue 009 (Material):**
```
*Published: May 11, 2026*
*Theme: Material — Substance as irreducible fact of creation and meaning*
```

### Metadata Function

The footer serves multiple purposes:

1. **Archival** — Establishes publication date for records and timeline
2. **Thematic Summary** — One-sentence explanation for anyone encountering the issue outside its full context
3. **SEO/Discoverability** — Keywords aid in finding issues by theme
4. **Citation** — Provides essential metadata for references and sharing
5. **Curation Trail** — Creates a historical record of editorial direction

### Relationship to Archive-Log

The Metadata Footer mirrors information in `/projects/bulletin-board/archive-log.md`, which maintains a complete publication history. The footer is the standalone version embedded in each issue file.

### Current Inventory

- ✅ **10 Metadata Footers** (one per issue, 001-010)
- ✅ **Consistent formatting** across all issues
- ✅ **Thematic descriptions complete** and accurate
- ✅ **Publication dates verified** against archive-log.md

### File Locations

Metadata Footer appears in each issue file:
- `/projects/bulletin-board/ISSUE-[#]-[theme]-complete.md`
- Located at absolute end of file
- Italicized format for visual distinction from body text

---

## Component Summary

| Component | Type | Quantity | Status |
|-----------|------|----------|--------|
| **1. Hero Cover** | Visual/Branding | 10 fixed templates | ✅ Complete & consistent |
| **2. Section ASCII Art** | Visual/Aesthetic | 330 files (3 variations × 11 × 10) | ✅ Complete with variations |
| **3. Editorial Grid** | Content/Prose | 110 sections (11 × 10) | ✅ Complete & thematic |
| **4. Closing Sentence** | Content/Poetic | 10 statements | ✅ Complete & memorable |
| **5. Metadata Footer** | Administrative | 10 entries | ✅ Complete & archived |

**Component 2 Breakdown:**
- Expanded: 110 files (14-line standalone pieces)
- Compact-Left: 110 files (ASCII left, text right)
- Compact-Right: 110 files (text left, ASCII right)

**Total Components:** 5  
**Total Assets:** 570+ discrete elements  
**Status:** All components fully documented with flexible variation system  
**Date Created:** 2026-05-07  
**Last Updated:** 2026-05-07
