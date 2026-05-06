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

### bulletin-board — Design by Bulletin
A daily automated editorial digest for designers covering art,
design, AI culture, photography, and illustration. Two-act
structure: ASCII visual preview at 8am, full edition at 8:30am.
Tone reference: Apartamento.

Location: `projects/bulletin-board/`

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
