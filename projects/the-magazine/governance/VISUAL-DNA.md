# VISUAL-DNA.md — the-magazine
## Visual governance specification

**Version:** 1.4.0
**Status:** Active
**Last updated:** 2026-05

---

## Voice Statement

The collection is about graphic culture — the designed surface of everyday commercial life. Screen prints, stickers, magazine covers, price tags, logos, commercial illustration. Objects made to be seen. Made to sell. Made to signal belonging.

The visual language is flat, typographic, and vernacular. It draws from specific print eras and production technologies: screen printing, offset lithography, halftone reproduction, hand-stamped labels, photostat type. The reference is always specific — not "vintage" in a general aesthetic sense, but a particular print run, a particular format, a particular decade's production logic.

It is knowing without being ironic. Playful without being cute. Referential without being nostalgic.

When type appears, it is not decoration. In this collection, type is often the primary visual element — the thing the eye goes to first, the thing the piece is built around. The choice of typeface, weight, color, and placement is a design decision as significant as the object itself.

---

## By Category

---

### Objects

Designed objects from the graphic culture of the 20th and 21st century. Screen prints, stickers, magazine covers, price tags, logo marks, commercial illustration, numbered editions. The object is always identifiable as a product of a specific print technology and cultural moment.

**Graphic language**
- Flat vector or print-reproduction quality — no dimensional rendering, no drop shadows, no gradients unless the gradient IS the reference
- Layout follows print production logic: columns, banners, grids, bleeds
- Objects present as finished printed matter, not as sketches or concepts
- When type is present, it is structural — it defines the composition, not decorates it

**Color**
- High contrast color relationships — black on white, color on black, single-color on neutral
- Colors are graphic decisions, not atmospheric ones
- Full spectrum is allowed when it serves the reference (rainbow, CMYK register, spectrum prints)
- Avoid color for mood or emotion — color here signals category, era, or brand logic
- Muted or flat color is correct when that is the production reference

**Typography**
- Present when the reference demands it — type is a primary visual element in many pieces, not present in all
- When type appears: specific references apply — bold condensed sans-serif, vintage display faces, outline type, handstamped letterforms, grotesque block type
- Type can be in any language — Japanese, English, invented — if it fits the visual register
- Numbers, codes, and labels are valid typographic elements (edition numbers, product codes, dates)
- When type is present, weight and placement define visual hierarchy — no ornamental type

**Print production texture**
- Grain, halftone dots, registration marks, paper stock texture, screen print coverage irregularity
- Texture references the production process — it is evidence of how the thing was made
- Texture should be period-appropriate: offset grain is different from screen print coverage is different from photostat contrast
- No photographic grain or digital noise that doesn't reference a specific print process

**Format and composition**
- Compositions follow print format logic: portrait, landscape, square — each with specific cultural associations
- Bleeds, borders, and frames are compositional choices with cultural meaning
- Asymmetry and symmetry both valid — determined by the referenced format
- White or black grounds are staging decisions, not neutral defaults

**Cultural register**
- Record store culture, independent publishing, small-run commercial print
- Vintage retail signage and price tags
- Zine and independent magazine aesthetics
- Commercial illustration from the 1960s–2000s
- Graphic design as practiced outside fine art institutions

---

### Textures

The printed surfaces and visual patterns produced by specific print technologies and eras. Not background textures — subject textures. The texture is the piece.

**What a texture piece is**
- The visual surface of a specific printing process examined as subject
- Halftone fields, screen print coverage, moiré patterns, paper stock character, ink bleed
- Color field relationships that only exist because of how the ink was applied
- Pattern work from a specific graphic design era or production system

**Color in textures**
- Color relationships defined by the process: CMYK separation, spot color combinations, overprint
- Unexpected color combinations are correct when they emerge from the production logic
- Gradient only when referencing riso, screen print overlap, or offset registration
- Monochrome is valid — some of the most specific textures are single-color

**Surface quality**
- Always reads as a product of a specific process — not generic "texture"
- Grain, tooth, coverage, and bleed should be identifiable as belonging to a particular technology
- Scale matters: a halftone dot at 85lpi reads differently than at 20lpi — be specific
- Wear, aging, and registration drift are valid — they locate the piece in time

**Composition**
- Textures can be full-bleed or contained — the edge relationship is a design decision
- Patterns may be symmetrical, repeating, or irregular — determined by the process logic
- No atmospheric composition — no horizon, no depth cues, no spatial illusion unless that IS the reference

---

## Core Principles

### Always

- **Flat graphic execution** — no atmospheric depth, no dimensional rendering, no volumetric lighting
- **Specific print reference** — the piece belongs to an identifiable era, technology, and cultural context
- **High contrast legibility** — the composition reads at a glance and rewards closer attention
- **Economy** — every element earns its place; nothing present without function
- **Designed object register** — the piece reads as printed matter, not as fine art
- **Wit or directness** — the tone is either economical and clear, or knowing and playful; never earnest or heavy

### Never

- Photographic realism or atmospheric rendering
- Dimensional depth, drop shadows, or volumetric lighting
- Decorative elements without a specific design function
- Muted, soft, or ambient color used for mood (color here signals, not evokes)
- Fine art register — no painterly marks, no expressive brushwork, no gallery aesthetics
- Solemn, heavy, or contemplative tone
- Generic "vintage" — every reference must be specific to a process, era, or format
- Abstract marks without a graphic design lineage
- Anything that could be described as "organic," "natural," or "handmade" in feel — unless the reference is specifically hand-produced commercial print (hand-stamped labels, hand-lettered signage)

---

## The Register

The collection draws from a specific band of graphic culture history: roughly 1955–2005, with particular attention to:

**Screen print and offset lithography era**
- Bold color separation, limited palette, flat coverage
- Independent publishing and poster culture
- Record sleeves, concert posters, zine covers

**Commercial illustration and retail graphics**
- Small business signage and packaging
- Price tags, stickers, and product labels
- Regional commercial illustration before digital production

**Magazine and newsprint reproduction**
- Halftone reproduction at various line screens
- Bold banner headlines and column typography
- Cover design as cultural statement

**Early graphic design profession**
- Logo marks and brand identities
- Numbered editions and print collectibles
- The designed object as cultural artifact

The collection does not reference digital-native aesthetics (no pixel art, no web design, no app UI) unless those are specifically in quotation — framed as a cultural reference, not as the natural graphic language.

---

## Enforcement notes

**For The Editor:** Research the specific cultural and production context before generating. "Screen print aesthetic" is not specific enough. Name the era, the format, the production context, and the cultural origin. The prompt should contain enough specificity that a reader could identify the reference without seeing the image.

**For The Creative Director:** Reject any prompt that uses "vintage," "retro," or "nostalgic" without a specific reference. Reject any prompt that describes color atmospherically rather than graphically. The question at approval is not "does this look good" but "does this belong to a specific moment in graphic culture history — and is that moment one the collection hasn't covered yet."

---

## Prompt Rules

These are hard technical requirements. The Editor self-checks against every rule before passing to the Creative Director. The Creative Director catches any violation before approving. No exceptions.

**1. Aspect ratio — always vary**
No two consecutive prompts use the same ratio. Choose based on what the composition demands.
Approved ratios: `--ar 1:1` · `--ar 4:5` · `--ar 5:7` · `--ar 4:3` · `--ar 16:9` · `--ar 2:1` · `--ar 23:14`

**2. Every prompt ends with:** `--chaos 20 --p m7446277342072143883`
This is the last thing in every prompt, always, without exception.

**3. The `--p` flag is never omitted and never modified.**
It is the-magazine's visual signature. Changing it changes the collection. Do not touch it.

**4. `--chaos 20` is not optional.**
It introduces controlled variation within the style reference. It runs every time.

**5. Prompt length — one sentence maximum.**
Precise and spare. No comma-separated lists of attributes. No over-specification. Trust the style reference to carry the visual identity. Only expand beyond one sentence if Alfred explicitly requests more detail.

**6. Every approved prompt is saved as `prompts/prompt_[number].md`.**
The number matches the archive-log entry. The Creative Director writes this file on approval. The file is the permanent record of what was approved and why — it travels with the image in the archive.

---

**Self-check format for prompt rules:**
Before passing to the Creative Director, The Editor confirms:
- [ ] Aspect ratio specified and different from the previous prompt
- [ ] Prompt is one sentence or fewer (unless Alfred requested more)
- [ ] Prompt ends with `--chaos 20 --p m7446277342072143883`
- [ ] `--p` flag is unmodified

---

## Version history

| Version | Notes |
|---------|-------|
| 1.0.0 | Initial specification. Written from collection of ten pieces. Objects and textures as active categories. |
| 1.1.0 | Added Prompt Rules section. Aspect ratio variation, `--chaos 20`, `--p` flag, and one-sentence prompt length. Hard rules enforced by both agents. |
| 1.2.0 | Added Rule 6 — prompt file generator. Every approved prompt saved to prompts/prompt_[number].md by the Creative Director on approval. |
| 1.3.0 | Typography removed from Always list — present when the reference demands it, not mandatory in every piece. Objects section language softened accordingly. |
| 1.4.0 | Typography fully optional — present only when cultural reference demands it. Removed mandatory framing from Voice Statement and Objects graphic language. |
