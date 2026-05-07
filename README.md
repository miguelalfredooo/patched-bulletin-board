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
A daily automated editorial digest for designers covering art,
design, AI culture, photography, and illustration.

**System:** Six-agent editorial collective (Maeve, Victor, Coda for research/visual discovery;
Assignment Editor, Managing Editor, Editorial Director for editorial curation). Parametric
control via Editorial Mix (six intensity faders: Music, Visual, Research, Process, Theme, AI Culture).

**Delivery:** Telegram bot (@DesignByBulletin_bot) with two-act structure:
- Act 1 (8:00am PT): Visual preview only (11 ASCII pieces, no text)
- Act 2 (8:30am PT): Full edition (each piece with title, sentence, link)

**Tech:** Node.js with sharp (image processing), figlet (ASCII typography), sharp (image shader).
Tone reference: Apartamento (intimate, unhurried, specific without being academic).

Location: `projects/bulletin-board/`
Full documentation: `projects/bulletin-board/README.md`

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
