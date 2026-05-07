<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}
</style>

# Bauhaus ASCII Principles — Grid, Hierarchy, Reduction

Apply Bauhaus design thinking to ASCII composition. The Bauhaus philosophy—*form follows function*, geometric clarity, reduction to essentials, asymmetric balance—translates directly to editorial layout.

---

## The Bauhaus Grid

Bauhaus relied on invisible grids. For ASCII, the grid is literal: the character grid itself.

### Grid-Based Thinking

Align elements to consistent vertical and horizontal positions. Don't scatter things randomly.

**Grid structure for 11 sections:**
```
Section width: 42 characters (Telegram safe)
Gutters: 0–2 characters (ASCII can't have true gutters, use border)
Heights: 6–15 lines per section (variable, not fixed)
Rhythm: Use grid lines as alignment, not constraint
```

**Example: Elements aligned to invisible columns**
```
┌────────────────────────────────────────┐
│ ┌──────────────┐    ┌──────────────┐  │
│ │ column 1     │    │ column 2     │  │
│ └──────────────┘    └──────────────┘  │
└────────────────────────────────────────┘
(everything aligns to column starts and ends)
```

---

## Hierarchy Through Contrast

Bauhaus used scale and weight to create hierarchy. In ASCII:

### Size as Hierarchy
- **Large elements** = primary focus
- **Medium elements** = secondary
- **Small elements** = accent, reference

```
╔════════════════════════════════════════╗  ← Large: dominates
║  Important concept centered            ║
╚════════════════════════════════════════╝

    ┌──────────────┐                      ← Medium: secondary
    │ supporting  │
    └──────────────┘

    ◆                                     ← Small: accent
```

### Weight as Hierarchy
- **Heavy linework** (double borders ╔╗, bold fills █) = primary
- **Medium linework** (single borders ┌┐) = secondary
- **Light linework** (sparse, dashes ─) = tertiary

```
╔════════════════════════════════════════╗  ← Heavy: primary focus
║ ╭────────────────────────────────────╮ ║
║ │ ┌──────────────────────────────┐  │ ║
║ │ │  nested hierarchy            │  │ ║
║ │ └──────────────────────────────┘  │ ║
║ ╰────────────────────────────────────╯ ║
╚════════════════════════════════════════╝
```

---

## Reduction to Essentials

Bauhaus: *Strip away the unnecessary.* Every element must serve a purpose.

### In ASCII Terms

**Good reduction:**
```
        ╭─────────┮
        │ element │
        ╰─────────╯
```
(clean, minimal, everything visible has purpose)

**Bad excess:**
```
    ╔═══════════════════════════════════╗
    ║  ╔═══════════════════════════╗   ║
    ║  ║ ┌─────────────────────┐   ║   ║
    ║  ║ │ element             │   ║   ║
    ║  ║ └─────────────────────┘   ║   ║
    ║  ╚═══════════════════════════╝   ║
    ╚═══════════════════════════════════╝
```
(excessive nesting, no functional purpose)

**Principle:** If a line of characters doesn't add meaning or structure, remove it.

---

## Asymmetric Balance

Bauhaus rejected centered, symmetrical layouts. Instead: **asymmetric balance**—different elements of different weights balance each other through position and scale.

### Asymmetric vs. Symmetric

**Symmetric (static, formal):**
```
         ╭────────────╮
         │  centered  │
         │  perfectly │
         │  balanced  │
         ╰────────────╯
```

**Asymmetric (dynamic, Bauhaus):**
```
╭──────────────────────╮
│  element ╭────────╮  │
│          │ offset │  │
│          │ creates│  │
│          │ tension│  │
└──────────╰────────┘──┘
```

Asymmetry creates visual tension and movement. The reader's eye is drawn to the unusual placement.

### In Issue Layout

Place a large, heavy element on the left (sections 1–3), then offset with lighter elements on the right (sections 4–6). This creates forward momentum.

---

## Typography as Structure

Bauhaus elevated typography to primary design element, not decoration.

### In ASCII Context

Use **typographic structure** to organize the page:
- Section headers in consistent format
- Visual "chapter markers" (like the Design By Bulletin™ masthead)
- Consistent use of characters for meaning

**Example: Typography-driven structure**
```
───────────────────────────────────────────
  SECTION 1 — Art
───────────────────────────────────────────

content

═══════════════════════════════════════════
  SECTION 2 — Painting
═══════════════════════════════════════════

content
```

(Heavy line ══ for primary, light line ── for secondary — typography creates hierarchy)

---

## Modularity & Repetition

Bauhaus emphasized systems and repetition. Build a **modular system** for ASCII elements.

### Modular Thinking

Define reusable patterns:
- **Header module:** Always ═══ + title + ═══
- **Box module:** ╔═╗ border system (never mix styles)
- **Spacer module:** Empty lines used consistently
- **Footer module:** ━━━ or ──── with consistent width

```
╔════════════════════════════════════════╗  ← Module: Header
║  Title                                 ║
╚════════════════════════════════════════╝

[content]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ← Module: Divider

[content]

────────────────────────────────────────  ← Module: Soft divider
```

### Benefits
- Consistency across the 11-section issue
- Modular approach scales (easy to redesign by changing one module)
- Reader learns the visual language quickly

---

## Form Follows Function

Everything in Bauhaus had a purpose. In ASCII:

**Function-driven questions:**
- Does this border clarify or obscure the content? (Keep if clarify, remove if obscure)
- Does this spacing serve the eye's path? (Keep if yes, reduce if no)
- Can this element do double duty? (Prefer yes)

**Example:**
```
Good: ╔═══╗ Border clarifies the content AND creates visual hierarchy
Bad:  ╔═╧═╗ Decorative flourish, no function
```

---

## Applying to Issue Layout

### Step 1: Establish Grid
```
42-char width (fixed)
Variable height per section (6–15 lines)
Visual grid: align elements to column positions
```

### Step 2: Define Hierarchy
```
Section 1–3: Medium weight (establish baseline)
Section 4–5: Can increase weight (build)
Section 6: Reduce (breathing room)
Section 7–9: Increase again (toward climax)
Section 10–11: Settle back (resolution)
```

### Step 3: Strip to Essentials
```
For each section:
- Remove every border that doesn't add clarity
- Remove every line that doesn't serve structure
- Keep only what guides the eye or organizes content
```

### Step 4: Create Asymmetric Balance
```
Don't mirror sections. Vary:
- Size (large/medium/small across issue)
- Weight (heavy/medium/light)
- Position (left/centered/right alignment)
```

### Step 5: Build Modular System
```
Define:
- Header format (consistent across all sections)
- Box types (when to use ╔═╗, when to use ┌─┐, etc.)
- Spacer rules (when to use blank lines)
- Footer/divider style
Then apply consistently.
```

---

## Bauhaus Checklist for ASCII Issues

- [ ] **Grid-aligned?** Elements align to consistent columns, not scattered
- [ ] **Clear hierarchy?** Size and weight show what's primary/secondary/tertiary
- [ ] **Reduced to essentials?** Every character serves structure or meaning
- [ ] **Asymmetrically balanced?** Not centered; creates visual tension (and not rigid grid-locked spacing)
- [ ] **Typography-driven?** Consistent header/footer structure across sections
- [ ] **Modular?** Reusable patterns (header, art block, breathing room) applied consistently
- [ ] **Function-focused?** Every element clarifies or guides; nothing decorative
- [ ] **Vertical flow?** Clear path for eye down the page with natural pause points
- [ ] **Gallery pattern applied?** Three-part structure (header → art → breathing room) repeats throughout
- [ ] **Scale varied?** No two consecutive sections same dimensions (3-5 lines next to 40+ lines)
- [ ] **Weight counterbalanced?** Simple pieces follow complex pieces; prevents fatigue
- [ ] **Organic spacing?** Uses asymmetric, variable spacing (not rigid grid intervals)

---

## Key Bauhaus Insight

> *The most beautiful object is the one stripped of everything unnecessary.*

In ASCII: Remove borders, empty lines, and variations that don't serve the reading experience. What remains should be **essential, purposeful, and composed**.

This is the Bauhaus way: clarity through reduction, hierarchy through contrast, beauty through function.
