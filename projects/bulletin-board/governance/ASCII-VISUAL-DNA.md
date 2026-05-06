# ASCII-VISUAL-DNA.md — Design by Bulletin
## ASCII art governance specification

**Version:** 1.1.0
**Status:** Active
**Last updated:** 2026-05

---

## Voice Statement

Design by Bulletin is an editorial digest for designers. The ASCII art
that opens each issue is not decoration — it is the visual edition. Eleven
pieces, pure text, no labels, no links. The art carries the theme.

The reference is Apartamento: intimate, unhurried, never trend-chasing.
The ASCII follows the same register. Nothing flashy. Nothing generic.
Every piece feels considered — like it was drawn by someone who knows
exactly what they are representing and chose these characters deliberately.

The failure mode is AI default ASCII: sparse outlines, obvious characters,
the same visual vocabulary applied to everything. That is not this.

---

## Hard constraints

These apply to every piece in every issue without exception:

- Maximum 36 characters wide
- Maximum 15 lines tall
- Rendered in Telegram code blocks — monospace, fixed-width
- Full Unicode palette available: block fills, box drawing, braille
  halftone, half-blocks, geometric shapes
- No labels, no titles, no links — in Act 1 the art speaks alone
- One closing sentence per issue — not per piece

---

## The five formats

Every piece belongs to one of five formats. The format is chosen based
on what serves the subject — not rotated mechanically.

---

### Format A — Classic Object

A clean outline illustration of a single subject. The object is
recognizable, precise, and rendered with appropriate character density
for its cultural register.

When to use:
- A specific artwork, sculpture, or artifact being referenced
- A camera, tool, or instrument from a photography or design story
- Any subject where the object itself is the editorial point

Character approach:
- Outline characters for structure: / \ | _ . ` ' ~ -
- Fill characters for density and shadow: # @ % & * + =
- Unicode geometry for precision: ─ │ ╭ ╮ ╯ ╰ ● ○ ◆ ◇
- Braille halftone for texture and gradient: ⠿ ⠾ ⠷ ⠯ ⠟ ⠻ ⠽ ⠾
- Half-blocks for smooth edges: ▀ ▄ █ ▌ ▐ ░ ▒ ▓

Never:
- Generic silhouettes that could represent anything
- Sparse outlines with no internal density
- Characters chosen for convenience rather than visual accuracy
- Symmetry that wasn't in the original subject

---

### Format B — Geometric Frame

The subject sits inside a ruled border. The frame is part of the
composition — not decoration around the art but structure that defines
the piece's register. Think: museum label, editorial pull quote,
specimen display.

When to use:
- Art history references where the institutional frame is meaningful
- Brand or visual identity stories where containment signals the register
- Any subject that benefits from the formality of being held

Frame vocabulary:
- Simple ruled: ┌─┐ └─┘ │ —
- Double ruled: ╔═╗ ╚═╝ ║ ═
- Mixed weight: ╓─╖ ╙─╜ ║ ─
- Corner variations: ╭─╮ ╰─╯ (softer register)
- Heavy block: ▛▀▜ ▙▄▟ █ (maximum weight)

The frame weight signals the editorial tone. Light frames for intimate
subjects. Heavy frames for declarative pieces.

Never:
- Frames that are more interesting than the subject inside them
- Decorative frame corners that compete with the content
- Frames that leave the interior mostly empty

---

### Format C — Typographic

A FIGlet letterform or large-scale typographic treatment as the primary
visual. The type IS the art. No illustration required.

When to use:
- Opinions or cultural commentary where a single word carries weight
- Design and AI tools stories where the tool name is the subject
- Theme declaration pieces — the issue's single-word theme rendered large
- Any story where concept over image is the right register

FIGlet font selection by register:

  Editorial / considered:
  Big, Banner, Block, Lean

  Technical / precise:
  Computer, Cyberlarge, Digital

  Warm / intimate (Apartamento register):
  Small, Mini, Thin

  Bold / declarative:
  Banner3, Big, Shadow

Character density for typographic pieces should feel intentional —
the letterforms should read clearly at the 36-character width without
feeling compressed or stretched.

Never:
- Random FIGlet font selection — the font is an editorial decision
- Typographic pieces for subjects that need illustration
- Mixing FIGlet letterforms with dense illustration in the same piece

---

### Format D — Two Column

The subject on the left, a large letterform on the right — or two
related subjects in dialogue. The column split is always intentional:
the two elements comment on each other.

When to use:
- Art + artist initial — the work and the maker in the same frame
- Object + concept — a physical subject and its abstract counterpart
- Before + after — two states of the same thing
- Any subject where duality is the editorial point

Column construction:
- Left column: 20-22 characters wide
- Gap: 1-3 characters
- Right column: remaining width
- Both columns share the same baseline — they sit in the same space

The relationship between columns should be legible at a glance.
A viewer should understand why these two things are together.

Never:
- Two columns that feel like two separate pieces side by side
- Unequal density that makes one column dominate without intention
- Column splits that don't reflect an editorial idea

---

### Format E — Full Spread

A wide composition that uses the full 36-character width as a single
continuous visual field. No columns, no frames — the composition is
the container.

When to use:
- Photography stories where landscape or panoramic register is right
- Culture stories where spatial scale is the point
- Full-issue theme declarations that open or close the visual edition
- Any subject that needs room — that would be diminished by constraint

Composition approach:
- The horizon line, if present, should be intentional — high or low,
  not defaulted to center
- Density gradient from one register to another (sky to earth,
  foreground to background) should use the full halftone vocabulary
- The eye should travel — the piece should have a reading direction

Never:
- Full spread used because the subject was hard to fit in another format
- Uniform density across the full width — use gradient and weight variation
- Compositions that would work better in a smaller format

---

## Section-to-format mapping

Each of the 11 sections has a natural format affinity. Use this as
a starting point — not a rule.

| Section | Primary format | Secondary format |
|---------|---------------|-----------------|
| Art | A — Classic Object | E — Full Spread |
| Painting | A — Classic Object | D — Two Column |
| Illustration | D — Two Column | A — Classic Object |
| Sculpture | A — Classic Object | B — Geometric Frame |
| Culture | E — Full Spread | C — Typographic |
| Photography | E — Full Spread | A — Classic Object |
| Art History | B — Geometric Frame | A — Classic Object |
| Opinions | C — Typographic | B — Geometric Frame |
| Design & AI Tools | C — Typographic | D — Two Column |
| Product & Process | B — Geometric Frame | C — Typographic |
| Visual & Brand | D — Two Column | B — Geometric Frame |

---

## Character density guide

Density signals register. Match density to editorial tone.

SPARSE — open, airy, Apartamento register
Characters: . ` ' - ~ · ·
Use for: intimate subjects, nature, photography, culture

MEDIUM — balanced, editorial register
Characters: + = * | / \ _ o O
Use for: art objects, illustrations, design tools

DENSE — structural, declarative register
Characters: # @ % & █ ▓ ▒ ░
Use for: sculptures, bold opinions, brand pieces

HALFTONE GRADIENT — photographic register
Characters: ⠀ ⠁ ⠃ ⠇ ⠏ ⠟ ⠿ (braille, lightest to densest)
Use for: photography stories, full spreads, tonal subjects

---

## The asciiart.eu aesthetic standard

Design by Bulletin ASCII should meet the quality bar of the best
work on asciiart.eu — not the median. The standard is:

- Objects are recognizable from their ASCII rendering alone
- Character choices feel earned — not defaulted
- Density variation creates the illusion of light and shadow
- The piece has a visual center of gravity
- Negative space is as deliberate as positive space

The failure mode to avoid: the piece looks like it was generated
quickly by an AI that knows what ASCII art is but does not know
how to make it well. Every piece should feel like it was drawn.

---

## Issue construction rules

Across 11 pieces per issue:

- No two consecutive pieces in the same format
- Formats A, B, C, D, E should each appear at least once
- The opening piece (Art) and closing piece set the register for
  the full visual edition
- Density should vary across the issue — not uniformly sparse or dense
- The theme should be legible across the 11 pieces without being stated
- At least one piece per issue should use the full halftone vocabulary

---

## What to reference from asciiart.eu

When generating ASCII for a specific subject category, the aesthetic
register should match the best examples from the equivalent category
on asciiart.eu:

- Animals → asciiart.eu/animals — note line economy and silhouette clarity
- Buildings → asciiart.eu/buildings-and-places — note structural precision
- People → asciiart.eu/people — note proportion and density distribution
- Objects/computers → asciiart.eu/computers — note technical precision
- Art references → asciiart.eu/art-and-design — note composition awareness
- Nature/photography → asciiart.eu/nature — note gradient and texture use

The reference is aesthetic, not literal. Do not copy. Match the quality
standard that the best examples in each category demonstrate.

---

## Enforcement notes

Before delivering any piece, check:
- [ ] Width does not exceed 36 characters
- [ ] Height does not exceed 15 lines
- [ ] Format is appropriate for the section and subject
- [ ] Character density matches the editorial register
- [ ] The subject is recognizable from the ASCII alone
- [ ] Negative space is intentional
- [ ] No labels, titles, or links embedded in the art

---

## Version history

| Version | Notes |
|---------|-------|
| 1.0.0 | Initial specification. Approach A — reference-based guardrails without scraping. Five formats, density guide, section mapping, asciiart.eu aesthetic standard. |
| 1.1.0 | Width reduced from 45 to 36 — safe render at 375px Telegram viewport. |
