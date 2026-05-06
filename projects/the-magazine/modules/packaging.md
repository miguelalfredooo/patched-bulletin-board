# Module: Packaging
## the-magazine

**Version:** 1.0.0
**Connected to:** The Editor, The Creative Director
**Belongs to:** projects/the-magazine

---

## Purpose

Commercial product packaging from the mass-market retail register, 1955–1995 — cereal boxes, soap labels, cigarette packs, canned food labels, candy wrappers, detergent boxes — the designed surface of the commodity where graphic culture meets the supermarket shelf.

---

## Input contract

The Editor receives: archive state from archive-log.md, governance rules from VISUAL-DNA.md, style translation guidance from STYLE-GUIDE.md.

The Editor identifies a specific product category, brand era, and production context — the visual logic of a 1967 cereal box is different from a 1982 detergent box — and generates one prompt grounded in the packaging design conventions of that moment.

---

## Output contract

One Midjourney prompt. One sentence. Ends with --chaos 20 --p m7446277342072143883. Aspect ratio matches the panel being examined — the front face of a box is portrait, a can label is square or landscape, a wide carton is horizontal.

---

## Voice / register

The designed surface exists to sell at retail. Product name prominence, color-coding for shelf differentiation, compressed information hierarchy. The aesthetics of mass production — bold color, clear hierarchy, immediate legibility at arm's length on the supermarket shelf. Not the designer's deliberate aesthetic — the commercial artist's practical brief, executed in offset lithography on coated board or screen print on kraft.

Packaging surrounds a product with panels and structural logic; it is distinct from ephemera, which documents a transaction.

---

## Always

- Flat graphic execution — the composition is the printed panel, never the dimensional object
- Specific production-era reference — the graphic logic belongs to an identifiable decade of mass-market design, 1955–1995
- Product hierarchy — the product name, brand mark, or key visual is the primary graphic element
- Mass-market register — supermarket shelf, corner store, drug store; never fine or artisanal
- Print process visible — offset lithography on coated board, screen print on kraft, the production technology is readable
- Economy — every element serves the product's retail identity

---

## Never

- Never luxury, artisanal, or high-end product packaging — always mass-market, supermarket shelf, corner store register
- Never packaging that reads as contemporary, digital-native, or post-1995 design — the register is 1955–1995, pre-digital packaging production
- Never dimensional rendering of the package as a three-dimensional object — the composition is always the flat graphic panel as printed
- Never ephemera (tickets, stamps, receipts) — packaging contains a product; ephemera documents a transaction
- Never objects.md territory — this module never produces the production tool or instrument, only the surface designed to sell the product

---

## Cultural register

- American breakfast and grocery brand design, 1955–1980
- European commercial packaging, offset and screen print era, 1960s–1990s
- Japanese product packaging, 1970s–1990s
- Cigarette and tobacco packaging, international, 1955–1995
- Beer, soft drink, and beverage label design
- Household product (soap, detergent, cleaning supply) packaging
- Candy, confectionery, and snack food wrappers
- Drug store and pharmacy product labels

---

## Prompt rules

All rules from VISUAL-DNA.md apply. Summary:
- One sentence maximum
- Aspect ratio varies — match to the panel format: 4:5 or 5:7 for box fronts, 1:1 for cans and round labels, 4:3 or 16:9 for wide carton faces
- Always ends with: --chaos 20 --p m7446277342072143883
- --p flag never omitted, never modified

---

## Version history

| Version | Notes |
|---------|-------|
| 1.0.0 | Initial spec. Approved from proposed_packaging.md. Module development session post-Issue 001. |
