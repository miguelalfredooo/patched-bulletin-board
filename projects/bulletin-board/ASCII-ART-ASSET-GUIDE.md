# ASCII Art Asset Guide

Complete reference for all 550 ASCII art files and component templates.

**Master location:** `ascii-art-library/`

---

## Directory Structure

### Master Components (Reference & Templates)
```
master/
├── COMPONENTS-MASTER-GUIDE.txt              (System documentation)
├── COMPONENT-1-ISSUE-COVER.txt              (Cover template)
├── COMPONENT-2-ISSUE-SECTIONS.txt           (6 ASCII variations)
├── COMPONENT-2-ISSUE-HERO-BELOW.txt         (HERO-TALL for cover)
├── COMPONENT-3-EDITORIAL-GRID.txt           (Editorial examples)
├── COMPONENT-4-CLOSING-SENTENCE.txt         (Closing examples)
├── COMPONENT-5-METADATA-FOOTER.txt          (Footer examples)
├── COMPONENT-ENTRY-PREVIEW.txt              (Text-only previews)
├── COMPONENT-SECTION-CARD-TEMPLATE.txt      (Full section cards)
├── ACT-1-LAYOUT-TEMPLATE.txt                (Complete layout)
├── MOCK-ISSUE-005-ACT-1.txt                 (Rendered example)
└── MOCK-ISSUE-005-ACT-1-WITH-COMPONENTS.txt (Example with components)
```

### ASCII Art Variations (550 files total, 110 per variation)

```
source/              (110 originals — pure ASCII art, no labels)
├── issue-001-art-neon.txt
├── issue-001-painting-neon.txt
├── issue-001-illustration-neon.txt
├── ... (11 sections × 10 issues)
└── issue-010-visual-brand-neon.txt

expanded/            (110 hero centered — 5-line centered diamond)
├── issue-001-art-expanded-neon.txt
├── issue-001-painting-expanded-neon.txt
├── ... (11 sections × 10 issues)
└── issue-010-visual-brand-expanded-neon.txt

labeled/             (110 with section names — ASCII left, name right at vertical midpoint)
├── issue-001-art-labeled-neon.txt
├── issue-001-painting-labeled-neon.txt
├── ... (11 sections × 10 issues)
└── issue-010-visual-brand-labeled-neon.txt

compact/             (220 left & right variations)
├── issue-001-art-compact-left-neon.txt
├── issue-001-art-compact-right-neon.txt
├── issue-001-painting-compact-left-neon.txt
├── issue-001-painting-compact-right-neon.txt
├── ... (11 sections × 10 issues × 2 alignments)
└── issue-010-visual-brand-compact-right-neon.txt

hero-tall/           (110 portrait format — 15-line centered diamond)
├── issue-001-art-hero-tall-neon.txt
├── issue-001-painting-hero-tall-neon.txt
├── ... (11 sections × 10 issues)
└── issue-010-visual-brand-hero-tall-neon.txt
```

---

## 11 Section Names (Per Issue)

1. **Art** — Visual design and composition
2. **Painting** — Pigment and surface
3. **Illustration** — Icon-like clarity
4. **Sculpture** — Form as argument
5. **Culture** — Direct address aesthetics
6. **Photography** — High-contrast imagery
7. **Art History** — Historical context and movements
8. **Opinions** — Critical perspectives
9. **Design & AI Tools** — Technology and process
10. **Product & Process** — Creation and iteration
11. **Visual & Brand** — Identity and velocity

---

## Finding Assets

### By Composition Approach

**ACT 1 v1 (Grid Layout):** Use LABELED variation
```bash
ls labeled/issue-001-*-labeled-neon.txt
```
All 11 sections from any issue in LABELED variation (ASCII left, name right)

**ACT 1 v2 (Cards):** Use SOURCE variation
```bash
ls source/issue-001-*-neon.txt
```
Pure ASCII art without labels, used in individual section cards

**ACT 1 v3 (Template):** Use HERO-TALL variation
```bash
ls hero-tall/issue-001-*-hero-tall-neon.txt
```
Portrait format for issue covers (included in COMPONENT-1-ISSUE-COVER)

**Compact variations:** Use COMPACT-LEFT or COMPACT-RIGHT
```bash
ls compact/issue-001-*-compact-left-neon.txt
ls compact/issue-001-*-compact-right-neon.txt
```

### By Issue + Section

**Issue 5, Art section, original:**
```bash
cat source/issue-005-art-neon.txt
```

**Issue 10, Painting, labeled (for v1 grid layout):**
```bash
cat labeled/issue-010-painting-labeled-neon.txt
```

**Issue 3, Culture, compact-right:**
```bash
cat compact/issue-003-culture-compact-right-neon.txt
```

**All issues, Photography, hero-tall (for covers):**
```bash
ls hero-tall/issue-*-photography-hero-tall-neon.txt
```

### By Variation Type

**All source variations (no labels):**
```bash
ls source/
```

**All hero-tall (portrait) variations:**
```bash
ls hero-tall/
```

**All compact variations (left only):**
```bash
ls compact/*-compact-left-neon.txt
```

---

## File Naming Convention

**Pattern:** `issue-[NNN]-[section]-[variation]-neon.txt`

**Examples:**
- `issue-005-art-neon.txt` — Issue 5, Art, SOURCE variation
- `issue-010-painting-labeled-neon.txt` — Issue 10, Painting, LABELED variation
- `issue-003-culture-compact-right-neon.txt` — Issue 3, Culture, COMPACT-RIGHT variation
- `issue-007-design-tools-hero-tall-neon.txt` — Issue 7, Design & AI Tools, HERO-TALL variation

**Notes:**
- Section names use hyphens: `design-tools` for "Design & AI Tools", `art-history` for "Art History", `visual-brand` for "Visual & Brand"
- Variations: `neon` (original), `expanded-neon`, `labeled-neon`, `compact-left-neon`, `compact-right-neon`, `hero-tall-neon`

---

## Using Components in Issues

### Component 1: Issue Cover
- Location: `master/COMPONENT-1-ISSUE-COVER.txt`
- Includes: HERO-TALL portrait
- Update: Issue number, theme, date
- Example HERO-TALL: `hero-tall/issue-005-signal-hero-tall-neon.txt`

### Component 2: ASCII Variations
- Location: `master/COMPONENT-2-ISSUE-SECTIONS.txt`
- Contains: 6 variation examples
- Use in composition:
  - v1 (Grid): `labeled/` files
  - v2 (Cards): `source/` files
  - v3 (Template): `hero-tall/` in cover

### Component 3: Editorial Grid
- Location: `master/COMPONENT-3-EDITORIAL-GRID.txt`
- Examples: 3 section templates
- All 110 full sections: `ISSUE-[#]-*-complete.md` files

### Component 4: Closing Sentence
- Location: `master/COMPONENT-4-CLOSING-SENTENCE.txt`
- Examples: 5 thematic statements

### Component 5: Metadata Footer
- Location: `master/COMPONENT-5-METADATA-FOOTER.txt`
- Examples: 3 footer templates

---

## Quick Reference: Which Files for Which Composition

| Approach | Components | Files |
|----------|-----------|-------|
| **ACT 1 v1 (Grid)** | Cover + all 11 sections | `master/COMPONENT-1-ISSUE-COVER.txt` + `labeled/*` (11 files) |
| **ACT 1 v2 (Cards)** | Cover + 11 cards | `master/COMPONENT-1-ISSUE-COVER.txt` + `source/*` (11 files) |
| **ACT 1 v3 (Template)** | Full rendered | `master/MOCK-ISSUE-005-ACT-1.txt` (reference) |
| **ACT 2 (Editorial)** | Cover + 11 prose | `master/COMPONENT-1-ISSUE-COVER.txt` + `ISSUE-[#]-*-complete.md` |

---

## Asset Summary

- **Total files:** 550+ (110 per variation + master components)
- **Naming:** `issue-[NNN]-[section]-[variation]-neon.txt`
- **Variations:** source, expanded, labeled, compact-left, compact-right, hero-tall
- **Sections:** 11 per issue (Art through Visual & Brand)
- **Issues:** 10 complete (001-010)
- **Master files:** All component templates in `master/`

---

## For More Details

- **Component system:** [BOT-COMPONENTS.md](BOT-COMPONENTS.md)
- **Deployment guide:** [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)
- **Master guide:** `master/COMPONENTS-MASTER-GUIDE.txt`
