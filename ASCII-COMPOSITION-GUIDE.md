<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}
</style>

# ASCII Composition Guide — Layout & Vertical Flow

When assembling ASCII art for editorial issues, think beyond individual pieces. The full issue is a composed experience. The reader's eye travels down the page, and you control that journey through size, density, and negative space.

---

## Core Principle

**Visual weight must be balanced vertically.** Heavy sections (dense ASCII, intricate borders) need breathing room. Light sections (sparse elements, negative space) can anchor the page and reset the reader's attention.

---

## Layout Techniques

### 1. Vary Element Size

Mix large and small across the 11 sections. Don't place three dense, full-width pieces in a row.

**Good rhythm:**
```
[Dense box — full width, heavy linework]
[Sparse element — minimal, breathing room]
[Medium box — balanced complexity]
[Single line or minimal graphic — reset]
[Full spread — visual climax]
```

**Bad rhythm:**
```
[Dense box]
[Dense box]
[Dense box]
← eye fatigue, no relief
```

### 2. Negative Space as Design

Negative space in ASCII isn't wasted space—it's a design choice. A code block that's mostly empty with one small element carries more weight than a crowded one.

**Example of intentional negative space:**
```
        │
        │
    ◊   │   ◊
        │
        │
```

This feels more powerful than:
```
╭───────────────────────────────╮
│ ◊◊◊◊◊◊◊ ◊◊◊◊◊◊◊ ◊◊◊◊◊◊◊ ◊◊◊ │
│ ◊ stuff stuff stuff stuff ◊   │
╰───────────────────────────────╯
```

### 3. Vertical Rhythm & Eye Guide

Use size and spacing to guide the reader down. Think of it like a musical score—crescendos and rests.

**The flow:**
- **Intro/Masthead** (dense) → reader is oriented
- **Sections 1–3** (medium density) → settle in
- **Section 4–5** (can go heavier) → building momentum
- **Section 6** (sparse or negative space) → breath, reset
- **Sections 7–9** (increasing complexity) → mid-page climax
- **Section 10** (medium, grounded) → anchor the page
- **Section 11** (can be light or elegant) → close gently

### 4. Weight Distribution

**Heavy:** Full-width boxes, dense grids, complex linework, lots of fills (█▓▒░)
**Medium:** Bordered elements, 2–3 nested layers, moderate detail
**Light:** Sparse frames, single lines, lots of air, braille or geometric-only

Avoid placing two heavy sections back-to-back. If section N is dense, make section N+1 lighter.

### 5. Negative Space in Code Blocks

A code block doesn't have to be full. Use empty lines intentionally.

```
                    ┌─────────┐
                    │ lonely  │
                    │ element │
                    └─────────┘


                (large gap signals importance)
```

vs.

```
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│ box │ │ box │ │ box │ │ box │
└─────┘ └─────┘ └─────┘ └─────┘
(crowded, no breathing room)
```

---

## Format Selection for Flow

Pair formats by visual density:

| Format | Density | Best Paired After |
|--------|---------|-------------------|
| **A** (Classic Object) | Medium | Dense or heavy sections |
| **B** (Geometric Frame) | Heavy | Light sections for contrast |
| **C** (Typographic) | Medium–Heavy | Light sections to balance |
| **D** (Two Column) | Medium | Heavy sections to split the weight |
| **E** (Full Spread) | Very Heavy | Light sections on both sides |

**Example sequence:**
```
1. Format B (heavy) → dense borders
2. Format A (medium) → object balances weight
3. Format E (very heavy) → full spread, visual climax
4. Format D (medium) → two columns split density
5. Format C (heavy) → typographic punch
6. Format A (medium) → breathing room
```

---

## Practical Checklist

When assembling an issue, ask:

- [ ] **Visual weight balanced?** No three heavy pieces in a row
- [ ] **Negative space intentional?** Are sparse sections chosen for rhythm, not accidents?
- [ ] **Eye guided downward?** Does size/density create a natural flow?
- [ ] **Breathing room after density?** Every heavy section followed by lighter one
- [ ] **Page feels open or claustrophobic?** Adjust spacing in code blocks
- [ ] **Formats varied?** No consecutive same-format pieces (already required)
- [ ] **Climax positioned well?** Does the densest/most complex section land around section 6–8?

---

## Examples: Good vs. Poor Flow

### Poor Flow (Monotonous)
```
[Medium box] → [Medium box] → [Medium box] → [Medium box]
All same density, same visual weight. Eye doesn't know where to focus.
```

### Good Flow (Guided)
```
[Dense intro]
↓
[Sparse element] ← breath
↓
[Medium building] 
↓
[Very dense climax] ← visual peak
↓
[Sparse close] ← landing
↓
[Medium footer]
```

---

## Advanced Technique: Negative Space Within a Code Block

You don't need to fill every line. Use empty lines and side padding to create air.

```
            ╭─────────────╮
            │   sparse    │
            │   element   │
            │   centered  │
            ╰─────────────╯




            (big gap signals weight)
```

This is more impactful than:

```
╭──────────────────────────────┐
│ ╔════════════════════════╗   │
│ ║ packed in tight        ║   │
│ ║ no room to breathe     ║   │
│ ║ dense and heavy        ║   │
│ ╚════════════════════════╝   │
└──────────────────────────────┘
```

---

## Key Principle

**In ASCII art, emptiness is a tool.** Use it to make the full sections feel heavier, to guide the eye, to give the reader permission to pause. The page should feel composed, not crammed.

Think of it like typography: leading (line height) and margins create readability. Negative space in ASCII creates composition.

---

## When Applying to Issues

1. **Review the full 11-section sequence** before finalizing any one piece
2. **Map visual weight** (light / medium / heavy) for sections 1–11
3. **Adjust individual sections** to balance the overall rhythm
4. **Use code block spacing** (empty lines, centered elements) to control breathing room
5. **Test the flow** by reading top to bottom—does your eye know where to go?

This is the difference between a collection of ASCII pieces and a composed publication.
