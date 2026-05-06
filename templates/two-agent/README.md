# Two-Agent Template
## A starting point for any editorial or curatorial pipeline

This template implements the Patched two-agent framework. Drop it into any project, fill in the placeholders, and run.

---

## The two agents

The Editor — researches, generates, and self-checks one output per session.
The Creative Director — evaluates, approves or redirects, logs.

One session. One output. One decision.

---

## How to use this template

1. Copy this folder into your project as projects/[project-name]/
2. Fill in governance/VISUAL-DNA.md — Always list, Never list, Voice Statement, Prompt Rules
3. Fill in modules/ — one file per category your project produces
4. Fill in agents/editor/SOUL.md — who is The Editor for this project?
5. Fill in agents/creative-director/SOUL.md — who is The Creative Director?
6. Update BRIEF.md with project context and goals
7. Update STYLE-GUIDE.md with production translation guidance
8. Run the pipeline: Editor first, Creative Director second

---

## File map

governance/VISUAL-DNA.md        — Always and Never rules. Both agents read this.
STYLE-GUIDE.md                  — How to translate governance into output. Editor reads this.
BRIEF.md                        — Project context and goals. Both agents read this.
archive-log.md                  — Living record of every approved output. Both agents read this.
agents/editor/SOUL.md           — The Editor's personality and voice.
agents/editor/AGENTS.md         — The Editor's operating spec.
agents/creative-director/SOUL.md        — The Creative Director's personality and voice.
agents/creative-director/AGENTS.md      — The Creative Director's operating spec.
agents/pipeline.md              — Sequence, handoff formats, rules.
modules/                        — One spec per output category.
images/selects/                 — All approved outputs live here.

---

## Signal flow and CV inputs

Signal flow — how information moves through the pipeline —
is documented in pipeline.md. It shows the sequence of agent
handoffs, where governance intercepts, and what happens on
approval versus redirect.

CV inputs — contextual signals that modulate agent behavior
each session — are documented in BRIEF.md. Archive state,
cultural calendar, operator standing direction, and pending
proposals are all CV inputs. They adjust how agents behave
without changing their module specifications or governance rules.

Both are filled in per project. The templates contain
placeholders — replace with project-specific content.

---

## Starting a new session

Tell whichever agent you are running:

  "Read pipeline.md. Then proceed."

---

## Reference

Framework: PATCHED.md
Version: 1.0.0 template readme
