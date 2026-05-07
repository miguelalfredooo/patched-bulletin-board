# Module: Spreads
## the-magazine

**Version:** 1.0.0
**Connected to:** The Editor-In-Chief, The Creative Director
**Belongs to:** projects/the-magazine

---

## Purpose

The designed editorial page at composition scale — magazine spreads, newspaper fronts, catalog layouts, annual report pages — where typography, halftone photography, illustration, and grid structure work together as an integrated system, and the composition itself is the subject.

---

## Input contract

The Editor-In-Chief receives: archive state from archive-log.md, governance rules from VISUAL-DNA.md, style translation guidance from STYLE-GUIDE.md.

The Editor-In-Chief identifies a specific editorial publication, issue era, and design system — the column grid, headline treatment, halftone quality, and paper stock of a specific publication at a specific moment — and generates one prompt that examines the page composition as subject, not any single object within it.

---

## Output contract

One Midjourney prompt. One sentence. Ends with --chaos 20 --p m7446277342072143883. Aspect ratio matches the page format — spreads are 16:9 or 2:1, single pages are 4:5 or 5:7, broadsheet fronts are portrait.

---

## Voice / register

The grid made visible. The type-image relationship examined. Editorial design systems at work. The subject is never one object — it is the composition of multiple elements across a page or spread: the column structure, the headline hierarchy, the halftone photograph in its offset grain, the ink quality of newsprint under production conditions. The print production qualities are inseparable from the editorial content — they are co-equal subjects.

---

## Always

- Composition as subject — the grid, column structure, and type-image relationship are the piece, not any single element within it
- Specific print era reference — offset newsprint, letterpress broadsheet, phototypeset magazine; always identifiable by production technology
- Process quality foregrounded — halftone grain, newsprint absorption, ink ghosting, dot gain must be legible as part of the composition
- Editorial register — mass-market: newsstand magazine, daily newspaper, commercial catalog; never fine art or gallery publication
- Economy — every element is part of the editorial system, nothing decorative
- Flat graphic execution — the page surface is the subject, not dimensional space

---

## Never

- Never the single object as subject — a spread is always a composition, never one artifact photographed in isolation (that is objects.md)
- Never pure process surface without editorial structure — halftone as texture alone belongs to textures.md; spreads always have typographic and image relationships working together
- Never digital layout tools, desktop publishing era, or post-InDesign aesthetics — always offset, letterpress, or phototypesetting production era
- Never fine art books, artist publications, or gallery catalogs — always mass-market editorial: newsstand magazine, daily newspaper, commercial catalog
- Never a spread where the print production process is not the primary visual subject alongside the editorial content — the halftone grain, the newsprint absorption, the ink ghosting must be as legible as the layout itself

---

## Cultural register

- Rolling Stone, Esquire, Life, Look, Collier's — American magazine editorial, 1955–1985
- NME, The Face, i-D — UK music and style press, 1970s–1990s
- Newspaper broadsheet front pages, American and European, 1950s–1980s
- Mail-order catalog page layouts, 1960s–1980s
- Annual report editorial design, corporate and institutional, 1970s–1990s
- Type specimen books and catalog interior pages
- Trade magazine and professional journal layouts, offset era

---

## Prompt rules

All rules from VISUAL-DNA.md apply. Summary:
- One sentence maximum
- Aspect ratio varies — 16:9 or 2:1 for spreads, 4:5 or 5:7 for single pages, 23:14 for broadsheet front
- Always ends with: --chaos 20 --p m7446277342072143883
- --p flag never omitted, never modified

---

## Version history

| Version | Notes |
|---------|-------|
| 1.0.0 | Initial spec. Approved from proposed_spreads.md. Module development session post-Issue 001. |
