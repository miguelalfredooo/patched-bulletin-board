<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
}
</style>

# SKILLS.md — Design by Bulletin

## Agent skill registry

This document lists every skill active in the Design by Bulletin pipeline, which agents carry it, and what good output looks like.

Skills are capabilities agents draw on to fulfill their roles. They are not the same as roles. An agent has one role. It may carry several skills to fulfill that role.

---

## Skill: Publication Reconnaissance

**Assigned to:** The Analyst

**What it is:**
The ability to read across multiple publications simultaneously, identify what each is covering and feeling, and synthesize patterns across them without losing the specificity of each source.

**What good output looks like:**
Each publication gets one sentence on mood and coverage — not a summary of articles, but a read on what the publication is prioritizing and how it is feeling right now. The eight sources are covered without exception.

**What bad output looks like:**
Generic summaries. "Frieze is covering contemporary art." Missing sources. Conflating what different publications are saying.

**Self-check:**
- [ ] All eight source publications checked
- [ ] Each gets a mood read, not just a topic list
- [ ] No publication summarized as covering its obvious beat

---

## Skill: Cultural Calendar Reading

**Assigned to:** The Analyst

**What it is:**
Awareness of what is happening in the art and design world on any given week — biennials, fairs, grad shows, seasonal shifts, relevant anniversaries, institutional openings, publication cycles.

**What good output looks like:**
Specific events named with dates. Awareness of what is opening, closing, or beginning this week versus what is always happening. The calendar informs the theme — it is not decorative.

**What bad output looks like:**
Vague seasonal references. "It is spring so people are thinking about renewal." No connection between calendar events and theme.

**Self-check:**
- [ ] At least one specific calendar event identified
- [ ] Calendar event connects to the theme or is noted as absent
- [ ] Not forcing a connection that is not there

---

## Skill: Theme Synthesis

**Assigned to:** The Analyst

**What it is:**
The ability to find the thread connecting publication moods and calendar events, and distill it into one word or short phrase that can serve as a lens for an 11-section editorial digest.

**What good output looks like:**
A theme that is specific enough to be a lens but open enough to reach all 11 sections. Grounded in at least three sources. Accompanied by two sentences of rationale that show the work.

**What bad output looks like:**
A theme that is too broad ("design," "art," "culture"). A theme that only reaches two or three sections. A theme stated without rationale. The obvious theme when a more precise one was available.

**Self-check:**
- [ ] Theme is one word or short phrase
- [ ] Grounded in evidence from at least three sources
- [ ] Rationale shows how the thread was found
- [ ] Not the first theme that came to mind — the right one

---

## Skill: Apartamento Editorial Writing

**Assigned to:** The Editor

**What it is:**
Writing in the register of Apartamento magazine — intimate, unhurried, specific, warm. Finding the human angle. Noticing the specific detail over the general observation. Never trend-chasing, never breathless, never academic.

**What good output looks like:**
Each section sentence is specific to this work, this person, this moment. Could only have been written today. Warm without being soft. A point of view without editorializing.

**What bad output looks like:**
Generic praise. Trend language. Academic register. Newsletter register. Sentences that could apply to any work in any section on any day.

**Self-check:**
- [ ] Every sentence is specific — names the work, person, or moment
- [ ] No vague praise: "beautiful," "stunning," "powerful"
- [ ] No trend language: "the rise of," "increasingly," "growing"
- [ ] No academic register: "explores," "interrogates," "challenges"
- [ ] Reads aloud without pausing more than once

---

## Skill: One-Sentence Discipline

**Assigned to:** The Editor

**What it is:**
The ability to write one sentence per section that does the work of a paragraph — tells you what the thing is, why it matters today, and wastes no words.

**What good output looks like:**
The sentence contains a specific subject, a specific observation, and a reason to care. It reads cleanly aloud. It does not contain more than one main clause pretending to be one sentence.

**What bad output looks like:**
Run-on sentences with multiple observations. Sentences that set up but do not land. Sentences that could be shorter and stronger.

**Self-check:**
- [ ] One sentence per section — not two joined by "and" or "but"
- [ ] Reads cleanly aloud without a pause
- [ ] Tells you what, why today, in that order
- [ ] Could not be shorter without losing meaning

---

## Skill: ASCII Construction — Formats A B D E

**Assigned to:** The Editor

**What it is:**
The ability to construct ASCII art pieces in Formats A (Classic Object), B (Geometric Frame), D (Two Column), and E (Full Spread) that are immediately recognizable as their subject, constructed using the silhouette-first method, within 36 characters wide and 15 lines tall.

**What good output looks like:**
The subject is identifiable from the outline alone. 2-3 defining features placed at correct spatial positions. Density applied directionally. Symmetrical subjects exactly symmetrical by count. Every character has a specific job.

**What bad output looks like:**
Unrecognizable outlines. Features placed for convenience not accuracy. Uniform density. Approximate symmetry. Characters chosen because they look right rather than because they mean something.

**Self-check:**
- [ ] Subject identifiable from outline alone
- [ ] 2-3 defining features at correct positions
- [ ] Density directional — consistent light source
- [ ] Symmetrical subjects counted exactly
- [ ] Every line within 36 characters
- [ ] Within 15 lines
- [ ] Every character has a job

---

## Skill: ASCII Construction — Format C (Typographic)

**Assigned to:** The Editor

**What it is:**
The ability to select the correct figlet font for the editorial register, choose the right word or phrase, and call utils/figlet.js to generate exact FIGlet letterforms within the 36-character width constraint.

**What good output looks like:**
Font matches the editorial register of the section. One word maximum. Output fits within 36 characters. Centered within the available width.

**What bad output looks like:**
Hand-drawn letterforms. Wrong font for the register. Output wider than 36 characters. Multiple words when one would do.

**Self-check:**
- [ ] Generated via utils/figlet.js — never hand-drawn
- [ ] Font matches section register
- [ ] Output within 36 characters wide
- [ ] Centered: (36 - letterform_width) / 2 = left padding

---

## Skill: Issue Coherence Evaluation

**Assigned to:** The Curator

**What it is:**
The ability to read a full 11-section issue — both acts — and evaluate whether it holds together as a single object. Does the theme run through all sections without being stated? Do Act 1 and Act 2 feel like the same performance? Does the closing sentence land?

**What good output looks like:**
A clear READY or REDIRECT with specific notes. If REDIRECT, names exactly which sections fail and why. Not vague direction — specific enough that the Editor knows what to fix.

**What bad output looks like:**
Vague praise or vague criticism. "It needs more energy." Approving an issue that has a coherence problem because individual sections are well-written.

**Self-check:**
- [ ] Full issue read before forming any opinion
- [ ] Theme felt across all 11 sections without being stated
- [ ] Act 1 and Act 2 feel like the same performance
- [ ] Closing sentence lands
- [ ] REDIRECT notes are specific enough to act on

---

## Skill: Tone Calibration

**Assigned to:** The Curator

**What it is:**
The ability to distinguish Apartamento register from newsletter register and flag any section that has drifted. Apartamento: intimate, specific, unhurried. Newsletter: generic, breathless, list-like.

**What good output looks like:**
Specific identification of which section drifted and what register it drifted into. Not "this feels off" but "the Culture section reads as a trend report — rewrite with a specific human detail."

**What bad output looks like:**
Approving a section that uses trend language or vague praise. Flagging tone without naming the specific problem.

**Self-check:**
- [ ] Every section checked for vague praise, trend language, academic register, newsletter register
- [ ] Any drift flagged with specific section name and problem
- [ ] Not approving because the rest of the issue is good

---

## Skill registry summary

| Skill | Analyst | Editor | Curator |
|-------|---------|--------|---------|
| Publication Reconnaissance | ✓ | — | — |
| Cultural Calendar Reading | ✓ | — | — |
| Theme Synthesis | ✓ | — | — |
| Apartamento Editorial Writing | — | ✓ | — |
| One-Sentence Discipline | — | ✓ | — |
| ASCII Construction A B D E | — | ✓ | — |
| ASCII Construction Format C | — | ✓ | — |
| Issue Coherence Evaluation | — | — | ✓ |
| Tone Calibration | — | — | ✓ |

---

## Version

1.0.0 — Initial skill registry. Nine skills across three agents.
