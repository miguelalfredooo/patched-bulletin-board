# pipeline.md — the-magazine
## Two-agent editorial pipeline

This file is the single source of truth for running the-magazine pipeline.
Read this first at the start of every session.

---

## The two agents

The Editor — researches, generates, and self-checks one prompt per session.
The Creative Director — evaluates, approves or redirects, logs.

One session. One prompt. One decision. One output.

---

## Sequence

Step 1 — Run The Editor
  Reads: archive-log.md, governance/VISUAL-DNA.md, STYLE-GUIDE.md, BRIEF.md
  Produces: CATEGORY, CULTURAL GROUND, PROMPT, SELF-CHECK

Step 2 — Run The Creative Director
  Reads: archive-log.md, governance/VISUAL-DNA.md, BRIEF.md, Editor output
  Produces: APPROVED or REDIRECT

Step 3 — If APPROVED
  Alfred generates the image in Midjourney
  Alfred saves the image to images/selects/ using the naming convention below
  Alfred appends the log entry to archive-log.md

Step 4 — If REDIRECT
  Alfred runs The Editor again with the Creative Director's brief as context
  Return to Step 1

---

## File naming convention

Generated images follow this pattern:

  gen_[category]_[zero-padded number].jpg

Examples:
  gen_objects_001.jpg
  gen_textures_002.jpg
  gen_objects_003.jpg

Numbers are global across categories — not per category.
The archive-log is the source of truth for the next number.

---

## Handoff format

The Editor passes to The Creative Director using this exact format:

  CATEGORY: [objects / textures]
  CULTURAL GROUND: [one sentence]
  PROMPT: [full Midjourney prompt]
  SELF-CHECK: passed / flagged: [reason if flagged]

The Creative Director passes to Alfred using this exact format on approval:

  APPROVED
  CAPTION: [object name / series number]
  ARC NOTE: [one sentence]
  LOG ENTRY:
    DATE: [YYYY-MM-DD]
    FILE: gen_[category]_[number].jpg
    CATEGORY: [objects / textures]
    PROMPT SUMMARY: [10 words max]
    ARC NOTE: [one sentence]

On redirect:

  REDIRECT
  BRIEF: [category, gap, cultural moment, why now]

---

## archive-log.md format

Each entry follows this structure:

  ## [YYYY-MM-DD]
  - FILE: gen_[category]_[number].jpg
  - CATEGORY: [objects / textures]
  - PROMPT SUMMARY: [10 words max]
  - ARC NOTE: [one sentence]

Entries are appended chronologically. Never edit or delete existing entries.
The log is the archive's memory. Treat it accordingly.

---

## File map

  governance/VISUAL-DNA.md     — Always and Never rules. Both agents read this.
  STYLE-GUIDE.md               — How to translate visual DNA into Midjourney prompts. Editor reads this.
  BRIEF.md                     — Project context and collection goals. Both agents read this.
  archive-log.md               — Living record of every generated piece. Both agents read this.
  agents/editor/SOUL.md        — The Editor's personality. Loaded before every Editor session.
  agents/editor/AGENTS.md      — The Editor's operating spec.
  agents/creative-director/SOUL.md        — The Creative Director's personality. Loaded before every CD session.
  agents/creative-director/AGENTS.md      — The Creative Director's operating spec.
  modules/objects.md           — Module specification for the objects category.
  modules/textures.md          — Module specification for the textures category.
  images/selects/              — All approved generated images live here.

---

## Rules

- One prompt per session. Never flood the Creative Director with options.
- Never approve without reading the archive first.
- Never generate without reading governance first.
- The Creative Director never rewrites a prompt — redirects only.
- Alfred is the only one who posts. The agents never publish directly.
- What is not in archive-log.md does not exist for the pipeline.

---

## Starting a new session

Tell whichever agent you are running:

  "Read pipeline.md. Then proceed."

That single instruction orients the full session.

---

## Version
1.0.0 — Two-agent pipeline. Editor → Creative Director → Alfred → Archive.
