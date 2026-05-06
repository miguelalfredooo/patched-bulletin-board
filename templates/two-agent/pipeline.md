# pipeline.md — [project-name]
## Two-agent editorial pipeline

This file is the single source of truth for running the [project-name] pipeline.
Read this first at the start of every session.

---

## The two agents

The Editor — researches, generates, and self-checks one output per session.
The Creative Director — evaluates, approves or redirects, logs.

One session. One output. One decision. One result.

---

## Sequence

Step 1 — Run The Editor
  Reads: archive-log.md, governance/VISUAL-DNA.md, STYLE-GUIDE.md, BRIEF.md
  Produces: CATEGORY, CULTURAL GROUND, OUTPUT, SELF-CHECK

Step 2 — Run The Creative Director
  Reads: archive-log.md, governance/VISUAL-DNA.md, BRIEF.md, Editor output
  Produces: APPROVED or REDIRECT

Step 3 — If APPROVED
  [Operator] produces the final output using the approved spec
  [Operator] saves the output to images/selects/ using the naming convention below
  [Operator] appends the log entry to archive-log.md

Step 4 — If REDIRECT
  [Operator] runs The Editor again with the Creative Director's brief as context
  Return to Step 1

---

## Signal flow

Editor output → Creative Director evaluation →
[Operator] decision

If approved:
prompt file written → output generated → saved to selects/ →
archive-log.md updated

If redirected:
brief returned to Editor → Editor reruns → loop restarts

Governance intercepts at two points:
- Editor self-check against VISUAL-DNA.md before passing
- Creative Director enforcement check before approving

CV inputs modulate both agents at session start:
- Archive state from archive-log.md
- Cultural calendar awareness in The Creative Director
- [Operator] standing direction from BRIEF.md
- Pending module proposals from proposals/

---

## CV inputs

[List the contextual signals specific to this project that
modulate agent behavior without changing module specifications.

Standard CV inputs for all two-agent projects:
- Archive state — what has been made shapes what comes next
- Cultural calendar — timing awareness for The Creative Director
- Operator standing direction — active instructions from BRIEF.md
- Pending proposals — awareness of proposals/ before generating

Add project-specific CV inputs here as the project develops.]

---

## File naming convention

Generated outputs follow this pattern:

  gen_[category]_[zero-padded number].[extension]

Examples:
  gen_[category-a]_001.jpg
  gen_[category-b]_002.jpg
  gen_[category-a]_003.jpg

Numbers are global across categories — not per category.
The archive-log is the source of truth for the next number.

---

## Handoff format

The Editor passes to The Creative Director:

  CATEGORY: [category-a / category-b]
  CULTURAL GROUND: [one sentence]
  OUTPUT: [the generated output]
  SELF-CHECK: passed / flagged: [reason if flagged]

The Creative Director passes to [operator] on approval:

  APPROVED
  CAPTION: [output name / series number]
  ARC NOTE: [one sentence]
  LOG ENTRY:
    DATE: [YYYY-MM-DD]
    FILE: gen_[category]_[number].[extension]
    CATEGORY: [category-a / category-b]
    OUTPUT SUMMARY: [10 words max]
    ARC NOTE: [one sentence]

On redirect:

  REDIRECT
  BRIEF: [category, gap, cultural moment, why now]

---

## archive-log.md format

Each entry follows this structure:

  ## [YYYY-MM-DD]
  - FILE: gen_[category]_[number].[extension]
  - CATEGORY: [category-a / category-b]
  - OUTPUT SUMMARY: [10 words max]
  - ARC NOTE: [one sentence]

Entries are appended chronologically. Never edit or delete existing entries.
The log is the collection's memory. Treat it accordingly.

---

## Rules

- One output per session. Never flood the Creative Director with options.
- Never approve without reading the archive first.
- Never generate without reading governance first.
- The Creative Director never rewrites an output — redirects only.
- [Operator] is the only one who publishes. The agents never publish directly.
- What is not in archive-log.md does not exist for the pipeline.

---

## Starting a new session

Tell whichever agent you are running:

  "Read pipeline.md. Then proceed."

---

## Version
1.0.0 — Two-agent template. Editor → Creative Director → [Operator] → Archive.
