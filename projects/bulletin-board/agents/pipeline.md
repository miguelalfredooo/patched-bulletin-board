# pipeline.md — Design by Bulletin
## Three-agent editorial pipeline

This file is the single source of truth for running the
Design by Bulletin pipeline. Read this first at the start
of every session.

---

## The three agents

The Analyst — reconnaissance, cultural calendar, theme selection.
The Editor — builds both acts: ASCII visual edition and written edition.
The Curator — evaluates the full issue, READY or REDIRECT.

One session. One issue. One decision. Two acts.

---

## Sequence

Step 1 — Run The Analyst
  Reads: BRIEF.md, current publication coverage via web search
  Produces: reconnaissance report with theme

Step 2 — Run The Editor
  Reads: Analyst report, ASCII-VISUAL-DNA.md, ASCII-CONSTRUCTION.md,
         BRIEF.md, STYLE-GUIDE.md, archive-log.md
  Produces: Act 1 (ASCII visual edition) + Act 2 (written edition)

Step 3 — Run The Curator
  Reads: Analyst report, Editor full output, ASCII-VISUAL-DNA.md,
         BRIEF.md, archive-log.md
  Produces: READY or REDIRECT

Step 4 — If READY
  Curator passes full issue to Alfred
  Alfred reviews and approves
  Alfred queues Act 1 for 8:00am PT cron (39b83092)
  Alfred queues Act 2 for 8:30am PT cron (f7eae541)

Step 5 — If REDIRECT
  Curator passes specific notes back to The Editor
  Editor rebuilds the issue from the same Analyst report
  Return to Step 3

---

## Signal flow

Analyst report → Editor session → Curator evaluation → Alfred review

Governance intercepts at two points:
- Editor self-checks every ASCII piece against ASCII-VISUAL-DNA.md
  and ASCII-CONSTRUCTION.md before passing to Curator
- Curator enforces tone and coherence before passing to Alfred

CV inputs modulate all agents at session start:
- Cultural calendar from Analyst reconnaissance
- Archive state from archive-log.md
- Alfred's standing direction from BRIEF.md

---

## Issue structure

Act 1 — Visual Preview (8:00am PT)
- Masthead in Format C via figlet
- 11 ASCII pieces — one per section, no labels, no links
- One closing sentence
- "Full edition in 30 minutes."

Act 2 — Full Edition (8:30am PT)
- 11 sections in order:
  1. Art
  2. Painting
  3. Illustration
  4. Sculpture
  5. Culture
  6. Photography
  7. Art History
  8. Opinions
  9. Design & AI Tools
  10. Product & Process
  11. Visual & Brand
- Each section: bold title, one sentence, one link

---

## Archive log format

Each entry after a successful issue:

  ## [YYYY-MM-DD]
  - THEME: [one word or short phrase]
  - CULTURAL THREAD: [one sentence]
  - ASCII FORMATS USED: [list of formats across 11 pieces]
  - CURATOR NOTE: [one sentence on what the issue did well]

---

## File map

  agents/analyst/SOUL.md              — Analyst personality
  agents/analyst/AGENTS.md            — Analyst operating spec
  agents/editor/SOUL.md               — Editor personality
  agents/editor/AGENTS.md             — Editor operating spec
  agents/curator/SOUL.md              — Curator personality
  agents/curator/AGENTS.md            — Curator operating spec
  governance/ASCII-VISUAL-DNA.md      — ASCII format governance
  governance/ASCII-CONSTRUCTION.md    — ASCII construction method
  BRIEF.md                            — Project context, Alfred's taste
  STYLE-GUIDE.md                      — Editorial voice and tone guide
  archive-log.md                      — Daily issue log
  utils/figlet.js                     — Format C programmatic generation

---

## Rules

- Analyst runs first. Editor never writes without a reconnaissance report.
- Editor builds ASCII first, written edition second. Never reversed.
- Curator reads the full issue before forming any opinion.
- Curator never rewrites — redirects only.
- Alfred reviews before anything sends. Curator approval is a
  recommendation, not a send command.
- What is not in archive-log.md does not exist for the pipeline.

---

## Starting a new session

Tell whichever agent you are running:

  "Read pipeline.md. Then proceed."

---

## Cron jobs

  39b83092 — Act 1 Visual Preview, 8:00am PT
  f7eae541 — Act 2 Full Edition, 8:30am PT

---

## Version
1.0.0 — Three-agent pipeline. Analyst → Editor → Curator → Alfred → Send.
