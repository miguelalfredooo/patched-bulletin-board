# Section Art Style Guide — Stardrift / Cosmic Scatter

**Version:** 1.0  
**Date:** May 9, 2026  
**Status:** Experimental — proposed 7th style direction  
**Origin:** Issue 025 Universe exploration

---

## Overview

**Stardrift** is a density-based style built entirely from scattered point-characters at varying visual weights. No fills, no solid blocks, no enclosing frames.

Visual mass emerges from *clustering and thinning* — the eye reads a dense region as a gravitational center, sparse scatter as void. The style operates like a stellar field: the closer you are to the core, the more matter there is.

**Core Principle:** Density is the design element. Space is not absence — it is texture.

---

## Character Vocabulary

### Brightness Hierarchy (dimmest → brightest)
- `·` — background dust (faintest, most abundant)
- `°` — gas cloud (medium, scattered)
- `*` — mid-field star (brighter, less frequent)
- `✦` `✧` — stellar object (focal, rare)
- `★` `●` — gravitational center (one per composition, maximum one)

### Structural Connectors (Constellation variant only)
- `╌` `╍` — tenuous edge, graph link
- `╲` `╱` — diagonal connector
- `|` — vertical axis
- `+` — intersection node

---

## Three Primary Approaches

### 1. RADIAL DRIFT (Expanding field)

**Best for:** Scale, expansion, the vastness of the universe, cosmology

**Characteristics:**
- Symmetric scatter, densest at center, thinning outward
- Single bright focal point (`●` or `★`) at true center
- Concentric density rings: `✧★✧` → `✦` → `*` → `°` → `·`
- Cover-scale: 18 lines, full symmetry top/bottom, left/right

**Example (section, 34×7):**
```
  ·        ·         ·       ·   
        °       ·   °            
 ·    ·       *         ·       
              ★                  
 °      ·         ·     °       
    ·        °       ·       ·  
  ·              ·     ·        
```

**When to use:**
- Art, painting, photography (artist/observer at center)
- Cosmology, scale, vastness
- Solitude in infinite space
- The single object surrounded by void

---

### 2. CONVERGENCE (Bilateral flow)

**Best for:** Duality meeting, forces colliding, cultural synthesis

**Characteristics:**
- Dense scatter at left and right margins
- Particles lean *inward* toward a central axis
- Bright cluster `✧✦✧·✦✧✦` at meeting point (horizontal axis)
- Mirror symmetry top/bottom (reinforces inevitability)

**Example (section, 34×7):**
```
°    ·   ·          ·     ·  °  
  ·    °     ·    ·    °        
    ·     *   · *    ·     ·   
 °     ·  ✧✦✧·✦✧✦  ·  °     °   
    ·     *   · *    ·     ·   
  ·    °     ·    ·    °        
°    ·   ·          ·     ·  °  
```

**When to use:**
- Culture, opinion, history (forces meeting)
- Duality themes, dialogue, encounter
- Two traditions converging
- Before/after meeting at a threshold

---

### 3. CONSTELLATION MAP (Graph topology)

**Best for:** Systems, networks, connections, AI/design tools

**Characteristics:**
- Named nodes (`✦` `✧`) connected by faint lines (`╌╌╌`)
- Structural backbone visible in void
- Background scatter gives spatial context
- Nodes = ideas, edges = relationships

**Example (section, 34×7):**
```
  ✦         ·         ✦          
    ╲  ·      °   ·  ╱           
  ·  ✧╌╌╌╌╌╌╌+╌╌╌╌╌╌✧  ·        
         °   |   °               
  ·  ✧╌╌╌╌╌╌╌+╌╌╌╌╌╌✧  ·        
    ╱  ·      °   ·  ╲           
  ✦         ·         ✦          
```

**When to use:**
- Design & AI Tools, Product & Process
- Systems thinking, network effects
- Visual/brand relationships
- History of connections (art history lineages)

---

## Density Principles

### Scatter Ratios (per 34-char line)
- **Deep void:** 1-3 chars placed, 31+ spaces
- **Sparse field:** 4-6 chars placed, 28+ spaces
- **Medium drift:** 7-10 chars, remainder spaces
- **Dense approach:** 11-15 chars (only near core)
- **Core itself:** Never more than 5 glyphs in a cluster (`✧★✧`)

### Distribution Rules
- No two `★` or `●` in the same composition
- No two adjacent bright chars except at the core cluster
- Avoid patterns that look like a grid or regular rhythm (that's Bauhaus)
- Left/right scatter should feel *random but balanced* — test by eye

---

## Technical Specs

- **Width:** 34 characters FIXED (every line padded to 34)
- **Height:** Max 15 lines for sections (cover = 18-line visual zone)
- **Characters:** All single-column Unicode (verified: `·` `°` `★` `✦` `✧` `●` `╌`)
- **No backticks, no escaping**
- **Cover:** Use Radial Drift centered on `●` core

---

## Design Checklist

- [ ] Approach chosen: Radial / Convergence / Constellation
- [ ] Density gradient correct (not uniform scatter)
- [ ] Core is singular and distinct (one `★` or `●` maximum)
- [ ] Background uses only `·` and `°` (no `✦` in periphery)
- [ ] Every line = exactly 34 characters
- [ ] Max 15 lines (section) or 18 lines (cover visual zone)
- [ ] No fill characters (no `█` `░` — that's Bold Fill style)
- [ ] No enclosing frames or boxes (that's different styles)
- [ ] Composition feels like space — not pattern, not grid

---

## What Distinguishes This From Other Styles

| Feature | Stardrift | Bold Fill | Bauhaus | Minimal/Void |
|---------|-----------|-----------|---------|--------------|
| Fill chars | None | █ ░ ▓ | None | None |
| Frames | None | Sometimes | Sometimes | Sometimes |
| Density | Variable | Uniform | Uniform | Near-zero |
| Mass/weight | From scatter | From fills | From form | From single mark |
| Motion feel | Drift/gravity | Static | Static | Still |
| Best scale | Full field | Panel | Structure | Single object |

---

## When NOT to Use Stardrift

- When the section needs architectural structure (use Bauhaus)
- When a single bold mark is the message (use Minimal/Void)
- When weight and balance are the primary goal (use Bold Fill)
- When literal representation is needed (use Iconic/Representational)

---

## Status

Proposed as 7th style direction based on Issue 025 Universe exploration.  
Approve for production use after editorial review of issue.

**Add to SECTION-ART-STYLES-INDEX.md when approved.**

---

**Last updated:** May 9, 2026  
**Created by:** Design Department — Issue 025 exploration
