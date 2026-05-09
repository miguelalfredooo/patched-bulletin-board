# Coordination & Blocking Detection

**Purpose:** Track Issue workflow state and identify where work is blocked.

**Status:** ✅ Ready to use

**Creates:** COORD.md file in each Issue folder

---

## Problem Solved

Before:
- Agents don't know what stage an Issue is in
- No visibility into who's responsible at each stage
- Don't know if something is blocked waiting on someone else
- No way to detect bottlenecks

After:
- One coordination file per Issue showing all 5 stages
- Clear visibility: who's responsible, current status, blockers
- Automatically identifies what's waiting on what
- Shows estimated timeline

---

## Usage

### Initialize Coordination for New Issue

```bash
python coord.py issues/017 --init "Discovery" "2026-05-09 08:00"
```

Creates COORD.md with:
- Issue number and theme
- Target publish time
- 5 workflow stages
- Current status (all waiting on Curator initially)
- Blocking dependencies

### Check Current Status

```bash
python coord.py issues/017 --status
```

Shows full coordination file with current state.

### Mark Stage Complete

```bash
python coord.py issues/017 --mark-complete curator
python coord.py issues/017 --mark-complete assignment
python coord.py issues/017 --mark-complete managing
python coord.py issues/017 --mark-complete editorial
python coord.py issues/017 --mark-complete publishing
```

Updates progress table and adds timestamp.

---

## The 5 Stages

### 🔍 Stage 1: Curator
- **Responsible:** Curator
- **Input:** Source discovery (Bluesky, Reddit, Substack, etc.)
- **Output:** Validated URLs (PASSED/FLAGGED/REJECTED)
- **Timeline:** 7:30am PT daily
- **Blocks:** Assignment Editor

### 📝 Stage 2: Assignment
- **Responsible:** Assignment Editor
- **Input:** Curator's validated URLs
- **Output:** Commission brief for Managing Editor
- **Timeline:** 9:00am PT
- **Blocks:** Managing Editor

### ✍️ Stage 3: Managing
- **Responsible:** Managing Editor
- **Input:** Commission brief from Assignment
- **Output:** Art + copy for all 11 sections
- **Timeline:** Noon PT
- **Blocks:** Editorial Director

### 👁️ Stage 4: Editorial
- **Responsible:** Editorial Director
- **Input:** Completed Issue from Managing
- **Output:** Approval + any revisions needed
- **Timeline:** 5:00pm PT
- **Blocks:** Bot (publishing)

### 📢 Stage 5: Publishing
- **Responsible:** Bulletin Bot
- **Input:** Approved Issue from Editorial
- **Output:** Published to Telegram subscribers
- **Timeline:** Set at issue creation (e.g., 8:00am next day)
- **Blocks:** None (end of pipeline)

---

## Coordination File Structure

Each Issue gets a COORD.md file:

```
issues/017/
├── 00-COVER-ART.txt
├── 01-SECTION-ART.txt
├── 01-SECTION-COPY.md
├── ... (all sections)
├── COORD.md              ← Workflow coordination
└── FEEDBACK.md           ← Agent feedback (optional)
```

---

## Blocking Detection

When an agent finishes their stage, the next stage becomes unblocked.

**Example timeline:**

```
7:30am: Curator finishes
        → Assignment becomes unblocked

9:00am: Assignment finishes
        → Managing becomes unblocked

Noon:   Managing finishes
        → Editorial becomes unblocked

5:00pm: Editorial finishes
        → Publishing becomes unblocked

8:00am next day: Bot publishes
                 → Done
```

**If anyone is slow:**

Blocking Rule: If a stage is blocked for > 4 hours, notify:
- Managing blocked by Assignment for 4+ hours? → Remind Assignment Editor
- Editorial blocked by Managing for 4+ hours? → Notify Editorial Director
- Publishing blocked by Editorial for 4+ hours? → Notify bot scheduler

---

## Example Coordination File

```
# Issue 017: Discovery — Coordination Log

**Created:** 2026-05-08 21:07  
**Theme:** Discovery  
**Target Publish:** 2026-05-09 08:00 PT  
**Status:** 🟡 IN PROGRESS

## Workflow State

### 🔍 Stage 1: Curator (URL Validation)
- **Assigned to:** Curator
- **Started:** 2026-05-08 21:07
- **Status:** ✅ COMPLETE
- **Blocker:** None

### 📝 Stage 2: Assignment (Commissions)
- **Assigned to:** Assignment Editor
- **Started:** 2026-05-08 09:00
- **Status:** 🟡 IN PROGRESS
- **Blocker:** None (was: Curator)

### ✍️ Stage 3: Managing (Writing)
- **Status:** ⏳ WAITING
- **Blocker:** Assignment Editor

### 👁️ Stage 4: Editorial (Review)
- **Status:** ⏳ WAITING
- **Blocker:** Managing Editor

### 📢 Stage 5: Publishing (Telegram)
- **Status:** ⏳ WAITING
- **Blocker:** Editorial approval

## Progress

| Stage | Status | Blocker |
|-------|--------|---------|
| Curator | ✅ COMPLETE | None |
| Assignment | 🟡 IN PROGRESS | None |
| Managing | ⏳ WAITING | Assignment |
| Editorial | ⏳ WAITING | Managing |
| Publishing | ⏳ WAITING | Editorial |
```

---

## Workflow Integration

### Day of Issue

**7:30am:** Curator finishes daily scan
```bash
python coord.py issues/017 --mark-complete curator
```

**9:00am:** Assignment Editor sends commission brief
```bash
python coord.py issues/017 --mark-complete assignment
```

**Noon:** Managing Editor finishes writing
```bash
python coord.py issues/017 --mark-complete managing
```

**5:00pm:** Editorial Director approves
```bash
python coord.py issues/017 --mark-complete editorial
```

**Next morning 8:00am:** Bot automatically publishes
(If using scheduling tool)

---

## Status Icons

| Icon | Meaning |
|------|---------|
| 🟡 | In Progress (being worked on) |
| ⏳ | Waiting (blocked on upstream stage) |
| ✅ | Complete (ready for next stage) |

---

## Visibility for Agents

Each agent can check:

**Curator:** Am I blocking anyone?
```bash
python coord.py issues/017 --status
# If Assignment is "WAITING" on Curator, curator knows to hurry
```

**Assignment:** Am I blocking Managing?
```bash
python coord.py issues/017 --status
# If Managing is "WAITING" on Assignment, assignment knows timeline is tight
```

**Managing:** Who am I waiting on? How much time do I have?
```bash
python coord.py issues/017 --status
# Shows deadline and that they can start as soon as Assignment finishes
```

**Editorial:** Is Managing done yet?
```bash
python coord.py issues/017 --status
# Shows if Managing is complete or still in progress
```

**Bot:** When should I publish?
```bash
python coord.py issues/017 --status
# Shows target publish time and current approval status
```

---

## Blocking Rules in Practice

### Scenario 1: On Track
```
7:30am: Curator ✅ COMPLETE
9:00am: Assignment ✅ COMPLETE  
Noon:   Managing ✅ COMPLETE
5:00pm: Editorial ✅ COMPLETE
8:00am+1: Bot ✅ PUBLISHED
```

No blocks, everything on schedule.

### Scenario 2: Assignment is Slow
```
7:30am: Curator ✅ COMPLETE
10:00am: Assignment 🟡 IN PROGRESS (2.5 hours in)
→ No block yet

11:30am: Assignment still 🟡 IN PROGRESS (4 hours in)
→ ALERT: Assignment is blocking Managing
→ Notify Assignment Editor: "Managing is waiting, what's the ETA?"
```

### Scenario 3: Managing is Slow
```
9:00am: Assignment ✅ COMPLETE
2:00pm: Managing 🟡 IN PROGRESS (5 hours in)
→ Only 3 hours until Editorial deadline
→ ALERT: Managing is at risk of missing deadline
→ Notify Editorial Director: "Managing may not finish on time"
```

---

## Commands Summary

**Initialize Issue:**
```bash
python coord.py issues/017 --init "Discovery" "2026-05-09 08:00"
```

**Check status:**
```bash
python coord.py issues/017 --status
```

**Mark stage complete:**
```bash
python coord.py issues/017 --mark-complete [curator|assignment|managing|editorial|publishing]
```

---

## Integration with Other Tools

**scaffold.py** → Creates Issue structure
**coord.py** → Tracks workflow state
**checks.py** → Validates content quality
**progress.py** → Tracks completion %
**validator.py** → Final structure validation
**/admin-send-issue** → Publishes

**Full workflow:**
```bash
# 1. Create Issue
python scaffold.py issues/017 --theme "Discovery"

# 2. Initialize coordination
python coord.py issues/017 --init "Discovery" "2026-05-09 08:00"

# 3. As agents work, they mark stages complete
python coord.py issues/017 --mark-complete curator
python coord.py issues/017 --mark-complete assignment
python coord.py issues/017 --mark-complete managing
python coord.py issues/017 --mark-complete editorial

# 4. Bot publishes automatically at scheduled time
```

---

## Summary

**Create coordination file:** `python coord.py issues/017 --init "Discovery" "2026-05-09 08:00"`
**Check workflow state:** `python coord.py issues/017 --status`
**Mark progress:** `python coord.py issues/017 --mark-complete [stage]`

Provides complete visibility into where work is happening and what's blocking progress.
