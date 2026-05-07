# patched-bulletin-board

A multi-project workspace structured with the Patched framework
for designing AI-driven experience systems.

---

## Projects

### the-magazine
An AI-generated visual publication built around graphic culture —
the designed surface of everyday commercial life from 1955–2005.
Screen prints, stickers, magazine covers, price tags, packaging,
ephemera. 12-image issues generated in Midjourney.

Two agents run the publication:
- The Editor — researches and generates 12 prompts per session
- The Creative Director — evaluates the full set as a magazine
  issue, approves or redirects

Location: `projects/the-magazine/`

### bulletin-board — Design by Bulletin™
A curated editorial publication for designers covering art, design, AI culture,
photography, and illustration. Combines Midjourney generative imagery with pure
ASCII art and parametric editorial controls.

**System:** Six-agent editorial collective (Maeve, Victor, Coda for research/visual discovery;
Assignment Editor, Managing Editor, Editorial Director for editorial curation). Parametric
control via Editorial Mix (six intensity faders: Music, Visual, Research, Process, Theme, AI Culture).

**Delivery:** Telegram with multi-format issues:
- ASCII Cover: HTML-based image-to-ASCII converter generates styled PNG covers
- Pure Text Issue: 11 editorial sections with ASCII art and linked sources
- Theme & Editorial Mix: Metadata about issue tone, sonic references, cultural threads

**Tech Stack:**
- Core: Node.js, sharp (image processing)
- ASCII Generation: Browser-based p5.js converter + automated export scripts
- Color Sampling: ANSI 24-bit color codes for image-informed ASCII
- Font Rendering: SVG-to-PNG conversion for high-quality cover generation
- Telegram Bot: HTTPS multipart form-data for photo/document delivery

**Workflow:**
1. Generate ASCII cover from source image (Midjourney/p5.js) via HTML converter
2. Create pure text issue with 11 sections and editorial content
3. Define theme metadata (Editorial Mix, sonic reference, cultural thread)
4. Export and deliver to Telegram via automated scripts

Location: `projects/bulletin-board/`
Full documentation: See DESIGN-BY-BULLETIN.md, SETUP.md, TOOLS.md

---

## Framework

This repo implements the Patched framework — a modular approach
to designing AI-driven experience systems. A shared language for
designers, engineers, and product managers.

Framework document: `PATCHED.md`
Worked example: `PATCHED-EXAMPLE.md`
Universal template: `templates/two-agent/`

---

## How the framework maps to files

```
Module layer        → projects/[name]/modules/
Behavior layer      → projects/[name]/agents/
Governance layer    → projects/[name]/governance/
Signal flow         → projects/[name]/agents/pipeline.md
CV inputs           → projects/[name]/BRIEF.md
Patch map           → projects/[name]/agents/pipeline.md
Module proposals    → projects/[name]/proposals/
Archive             → projects/[name]/archive-log.md
Prompt files        → projects/[name]/prompts/
```

---

## Operator

Alfred — art editor, designer, and creative director.
All agents work for Alfred. Alfred directs, approves, publishes.

---

## Related

Patched framework repo: github.com/miguelalfredooo/patched (private)
