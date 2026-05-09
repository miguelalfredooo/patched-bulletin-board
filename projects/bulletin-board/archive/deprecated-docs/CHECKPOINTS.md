# Design By Bulletin™ — Explicit Checkpoints & Agent Visibility

**Purpose:** Define where agents check in, verify handoffs are working, and know they're unblocking the next person

**Status:** 🆕 NEW (builds on COORD.md structure)

---

## The Problem We're Solving

**Before:** Agents output work but don't know:
- Is the next agent ready to receive?
- Did my work actually unblock them?
- Where is the issue in the workflow?
- What's holding things up?

**After:** Clear checkpoints where agents **verify receipt** and **signal readiness**.

---

## Six Checkpoints (One per Agent)

```
┌────────────────────────────────────┐
│ CHECKPOINT 1: Art Department       │
│ 7:30am-9:15am — Report ready      │
│ Signal: "14 pieces curated"        │
│ Next: Assignment Editor sees it    │
└────────────────────────────────────┘
                ↓ (verify receipt)
┌────────────────────────────────────┐
│ CHECKPOINT 2: Assignment Editor    │
│ By 11am — Mapping + Commissions   │
│ Signal: "Sections mapped"          │
│ Next: Managing Editor sees it      │
└────────────────────────────────────┘
                ↓ (verify receipt)
┌────────────────────────────────────┐
│ CHECKPOINT 3: Managing Editor      │
│ By 6:45pm — All 11 sections done  │
│ Signal: "24 files complete"        │
│ Next: Editorial Director sees it   │
└────────────────────────────────────┘
                ↓ (verify receipt)
┌────────────────────────────────────┐
│ CHECKPOINT 4: Editorial Director   │
│ By 7:45pm — Vision validated      │
│ Signal: "Approved for publish"     │
│ Next: Bot sees approval            │
└────────────────────────────────────┘
                ↓ (verify receipt)
┌────────────────────────────────────┐
│ CHECKPOINT 5: Bulletin Bot         │
│ By 8:00pm — Published to subs     │
│ Signal: "Issue published"          │
│ Done ✓                             │
└────────────────────────────────────┘
```

---

## Checkpoint 1: Art Department Curation (7:30am-9:15am PT)

### What Art Department Does

1. **Read Editorial Brief** (understand theme + narrative angles)
2. **Scan sources** (7:30am - 8:30am, find 48+ URLs)
3. **Evaluate + curate** (select 14-16 pieces by narrative angle)
4. **Annotate** (Why/Insight/Connection for each piece)
5. **Write insight paragraph** (what do selections teach?)
6. **Signal completion**:
   ```bash
   python checkpoint.py signal art-department 021 "14 pieces curated. Angles: Abstraction, System, Culture"
   ```
7. **Assignment Editor gets notification immediately**

### What Assignment Editor Sees

```
🟢 ART DEPARTMENT CHECKPOINT ✅

Issue 021: Geometry
Status: CURATED & READY FOR MAPPING
Time: 7:30am PT

Curator Report:
- URLs scanned: 45
- Passed (7.0+): 12
- Flagged (5.0-6.9): 8
- Rejected (<5.0): 25

Next: Create commissions for Managing Editor
Deadline: 9:00am PT
```

### File Location
- Created by: Curator in their workspace
- Visible to: Assignment Editor (via checkpoint system)
- Stored at: `issues/017/CHECKPOINTS/curator-report-checkpoint.md`

---

## Checkpoint 2: Assignment Commissions (By 9:00am PT)

### What Assignment Editor Does

1. **Review curator report** (7:30am - 8:30am)
2. **Write commissions** for each section using COMMISSION-TEMPLATE.md
3. **Signal completion**:
   ```bash
   python checkpoint.py signal assignment 017 "Commissions ready for Managing Editor"
   ```
4. **Managing Editor gets notification immediately**

### What Managing Editor Sees

```
🟢 ASSIGNMENT CHECKPOINT ✅

Issue 017: Puerto Rico
Status: READY TO START WRITING
Time: 9:00am PT

Commissions (11 sections):
1. Art — Reggaeton as cultural statement
2. Painting — Contemporary Caribbean painters
3. Illustration — ...
... (all 11)

Deadline: 7:00pm PT (10 hours)
Start time: Now

Commissions file: issues/017/COMMISSIONS/all-sections.md
```

### File Location
- Created by: Assignment Editor in their workspace
- Visible to: Managing Editor (via checkpoint system)
- Stored at: `issues/017/CHECKPOINTS/assignment-commissions-checkpoint.md`

### Blocking Detection
If Assignment Editor hasn't signaled by 9:30am:
- Managing Editor can check: `python checkpoint.py status 017`
- Shows: "Waiting on Assignment Editor" + last update time
- Can reach out: "Assignment, are we still on track?"

---

## Checkpoint 3: Managing Editor Complete (By 7:00pm PT)

### What Managing Editor Does

1. **Write all 11 sections** (9:00am - 6:30pm)
2. **Check progress regularly**: `python progress.py issues/017`
3. **When 100% done**, signal completion:
   ```bash
   python checkpoint.py signal managing 017 "All 11 sections complete, ready for validation"
   ```
4. **Editorial Director gets notification immediately**

### What Editorial Director Sees

```
🟢 MANAGING CHECKPOINT ✅

Issue 017: Puerto Rico
Status: READY FOR VALIDATION
Time: 6:45pm PT

Sections completed: 11/11 (100%)
Progress: [████████████████████] 24/24 files

Validation needed by: 7:45pm PT (1 hour)

Next steps:
1. python validator.py issues/017
2. /admin-preview 017
3. /admin-send-issue 017

Issue location: issues/017/
```

### File Location
- Created by: Managing Editor in project root `issues/017/`
- Visible to: Editorial Director (via checkpoint system)
- Stored at: `issues/017/CHECKPOINTS/managing-complete-checkpoint.md`

### What It Contains
- All 24 files (00-COVER through 12-METADATA-FOOTER)
- Progress tracking (100% complete)
- Any notes from Managing Editor ("Section 5 needs revisions," etc.)

### Blocking Detection
If Managing Editor hasn't signaled by 7:15pm:
- Editorial Director can check: `python checkpoint.py status 017`
- Shows: Current progress % + time remaining
- Can reach out: "Managing, what's your status? 30 minutes left."

---

## Checkpoint 4: Editorial Approval (By 7:45pm PT)

### What Editorial Director Does

1. **Validate structure**: `python validator.py issues/017`
2. **Preview rendering**: `/admin-preview 017`
3. **If issues found**, either:
   - Auto-fix: `python validator.py issues/017 --fix`
   - OR notify Managing Editor: "Need revision to section X"
4. **When approved**, signal completion:
   ```bash
   python checkpoint.py signal editorial 017 "Issue approved for publishing"
   ```
5. **Bot gets notification immediately**

### What Bulletin Bot Sees

```
🟢 EDITORIAL CHECKPOINT ✅

Issue 017: Puerto Rico
Status: APPROVED FOR PUBLISH
Time: 7:45pm PT
Publish Time: 8:00am PT (tomorrow)

Approval Details:
- Structure: ✅ Valid
- Files: ✅ All present
- Content: ✅ Preview looks good

Ready to publish: YES

Bot actions:
1. Load Issue 017 files
2. Format for Telegram
3. Send at scheduled time (8:00am PT)
```

### File Location
- Created by: Editorial Director in project root `issues/017/`
- Visible to: Bot (via checkpoint system)
- Stored at: `issues/017/CHECKPOINTS/editorial-approval-checkpoint.md`

### Rejection/Revision Flow
If validation fails:
- Editorial Director updates checkpoint with: `python checkpoint.py signal editorial 017 --status "Revisions needed: section 5"`
- Managing Editor gets notification
- Bot knows NOT to publish
- Managing Editor makes revisions
- Sends back to Editorial when ready

---

## Checkpoint 5: Bot Publishing (8:00am PT Next Day)

### What Bulletin Bot Does

1. **Load Issue 017 files** from `issues/017/`
2. **Check approval**: Is checkpoint marked "approved"?
3. **If not approved**, hold and notify Editorial Director
4. **If approved**, format and send
5. **Signal completion**:
   ```bash
   python checkpoint.py signal publishing 017 "Issue 017 published to X subscribers"
   ```

### What Agents See (Post-Publication)

```
🟢 PUBLISHING CHECKPOINT ✅

Issue 017: Puerto Rico
Status: PUBLISHED ✓
Time: 8:02am PT
Subscribers received: 4,250

Engagement:
- Reactions: 127
- Shares: 43
- Replies: 18

Issue lifecycle: COMPLETE
```

### File Location
- Created by: Bot in project root `issues/017/`
- Visible to: All agents (for record)
- Stored at: `issues/017/CHECKPOINTS/publishing-complete-checkpoint.md`

---

## The Checkpoint File Structure

Each issue has a `CHECKPOINTS/` folder:

```
issues/017/
├── CHECKPOINTS/
│   ├── curator-report-checkpoint.md
│   ├── assignment-commissions-checkpoint.md
│   ├── managing-complete-checkpoint.md
│   ├── editorial-approval-checkpoint.md
│   └── publishing-complete-checkpoint.md
├── 00-COVER-ART.txt
├── 01-SECTION-ART.txt
├── 01-SECTION-COPY.md
... (all sections)
└── 12-METADATA-FOOTER.txt
```

---

## Checkpoint Commands (New Tool: checkpoint.py)

### Signal Checkpoint Complete
```bash
python checkpoint.py signal [curator|assignment|managing|editorial|publishing] 017 "Message"
```

### Check Current Status
```bash
python checkpoint.py status 017
```

Shows:
- Which checkpoints are complete ✅
- Which are waiting ⏳
- Time since last update
- Who's blocking whom (if anyone)

### See Blocking Dependencies
```bash
python checkpoint.py blocks 017
```

Shows:
```
Managing waiting on Assignment? Assignment hasn't signaled yet (last update: 8:45am)
Editorial waiting on Managing? Managing at 85%, ETA 15 minutes
```

### View Timeline
```bash
python checkpoint.py timeline 017
```

Shows:
```
7:30am: Curator ✅ (1s after deadline)
9:05am: Assignment ✅ (5m after deadline)
6:50pm: Managing ✅ (50m early)
7:42pm: Editorial ✅ (3m before deadline)
8:02am: Publishing ✅
```

---

## Agent Visibility (What Each Agent Sees)

### Curator's View
```bash
python checkpoint.py dashboard curator
```

Shows:
```
🟢 YOU: Curator
Status: Waiting for Assignment Editor feedback

Previous issues you've reported on:
- Issue 016: URLs used in final publication (feedback)
- Issue 015: All 12 PASSED URLs made it to print

Today's Issue (017):
- Report submitted: 7:30am ✅
- Assignment waiting for you? No, already working

Check your feedback:
- Which URLs were used in Issue 016? → See analytics link
```

### Assignment Editor's View
```bash
python checkpoint.py dashboard assignment
```

Shows:
```
🔵 YOU: Assignment Editor
Status: Waiting for Managing Editor

Current issue (017):
- Curator report: ✅ Received (7:30am)
- Your commissions: ✅ Sent to Managing (9:05am)
- Managing status: 🟡 Working (65% done, ETA: 6:30pm)

Timeline:
- You finish: 9:05am (on time)
- Managing finishes: 6:30pm? (on track)
- Editorial deadline: 7:45pm (1h 15m buffer)
- Publish: 8:00am tomorrow

Your commission effectiveness:
- Issues 14-16: 100% of your suggestions made final publication
```

### Managing Editor's View
```bash
python checkpoint.py dashboard managing
```

Shows:
```
🔵 YOU: Managing Editor
Status: Currently writing

Current issue (017):
- Commissions received: ✅ 9:05am
- Current progress: 65% (16/24 files)
- Sections complete: 8/11
- ETA: 6:30pm

Progress detail:
- 00-COVER: ✅
- 01-ART: ✅ | COPY: ✅
- 02-ART: ✅ | COPY: ✅
- 03-ART: ✅ | COPY: ✅
- 04-ART: ✅ | COPY: ✅
- 05-ART: ✅ | COPY: ✅
- 06-ART: ✅ | COPY: ✅
- 07-ART: ✅ | COPY: ❌ (in progress)
- 08-ART: ❌ (not started)

Command to track: python progress.py issues/017
Command to submit: python checkpoint.py signal managing 017 "Complete and ready"
```

### Editorial Director's View
```bash
python checkpoint.py dashboard editorial
```

Shows:
```
🔵 YOU: Editorial Director
Status: Ready to validate when Managing finishes

Current issue (017):
- Curator: ✅ Complete
- Assignment: ✅ Complete
- Managing: 🟡 Working (ETA 6:30pm)
- Your deadline: 7:45pm (1h 15m to validate)

Previous validations:
- Issue 016: 15 minutes (fast)
- Issue 015: 8 minutes (very fast)
- Issue 014: 22 minutes (slow, 3 revision rounds)

Scheduled commands when Managing is done:
1. python validator.py issues/017
2. /admin-preview 017
3. /admin-send-issue 017
```

### Bot's View
```bash
python checkpoint.py dashboard bot
```

Shows:
```
🔵 YOU: Bulletin Bot
Status: Waiting for Editorial approval

Current issue (017):
- Curator: ✅
- Assignment: ✅
- Managing: 🟡 Working (ETA 6:30pm)
- Editorial: ⏳ Not started yet
- Publishing: ⏳ Ready to publish at 8:00am

When Editorial approves, you will:
1. Load Issue 017 files
2. Format for Telegram
3. Publish at 8:00am PT

Queue: 1 issue (017) ready to publish
```

---

## Integration: Automatic Notifications

When a checkpoint is signaled:

**Curator signals "Report done" @ 7:30am**
- Assignment Editor gets: Message/Slack notification
- Content: "Curator report ready (45 URLs scanned, 12 passed)"
- Action: Review and start commissioning

**Assignment signals "Commissions done" @ 9:05am**
- Managing Editor gets: Message/Slack notification
- Content: "11 commissions ready, deadline 7:00pm"
- Action: Start writing sections

**Managing signals "Complete" @ 6:45pm**
- Editorial Director gets: Message/Slack notification
- Content: "Issue 017 ready for validation (24/24 files)"
- Action: Run validator, preview, approve

**Editorial signals "Approved" @ 7:42pm**
- Bot gets: Message/Slack notification
- Content: "Issue 017 approved, publishing at 8:00am"
- Action: Schedule publish

**Bot signals "Published" @ 8:02am**
- All agents get: Notification
- Content: "Issue 017 published to 4,250 subscribers"
- Action: Check engagement metrics, plan next issue

---

## Blocking & Alert System

### Alert Rule 1: Stage Taking Longer Than Expected
If Assignment Editor is still working at 10:00am (already 2.5 hours):
```
⚠️ ALERT: Assignment Editor may miss deadline
   - Started: 7:30am
   - Elapsed: 2h 30m (target: 1h 30m)
   - Deadline: 9:00am (already passed)
   - Impact: Managing won't have full day to write
   - Action: Notify Assignment Editor + Editorial Director
```

### Alert Rule 2: Stage Blocking Next Agent
If Managing is at 40% @ 5:00pm:
```
⚠️ ALERT: Managing may not meet 7:00pm deadline
   - Current: 40% (10/24 files)
   - Time left: 2 hours
   - Required pace: 12 files/hour (very fast)
   - Normal pace: 4 files/hour
   - Impact: Editorial will have <45 min to validate
   - Action: Notify Managing Editor + offer help
```

### Alert Rule 3: Editorial Can't Finish by Deadline
If Editorial receives Issue @ 7:20pm:
```
⚠️ ALERT: Editorial has only 25 minutes to validate
   - Deadline: 7:45pm
   - Time: 25 minutes
   - Average validation: 15 minutes
   - Risk: High (revisions could push past deadline)
   - Action: Check if bot can push publish to 8:00pm or later
```

---

## Example: Full Workflow with Checkpoints

### 7:30am — Curator Checkpoint
```bash
# Curator finishes report
python checkpoint.py signal curator 017 "45 URLs scanned, 12 PASSED, 8 FLAGGED"

# Assignment Editor gets notification
→ "Curator report ready for Issue 017"

# Assignment Editor checks status
python checkpoint.py status 017
→ Curator: ✅ COMPLETE
→ Assignment: ⏳ WAITING (ready to start)
```

### 9:05am — Assignment Checkpoint
```bash
# Assignment Editor finishes commissions
python checkpoint.py signal assignment 017 "11 commissions written"

# Managing Editor gets notification
→ "Issue 017 commissions ready, 10 hours to deadline"

# Managing Editor checks status
python checkpoint.py status 017
→ Curator: ✅ COMPLETE
→ Assignment: ✅ COMPLETE
→ Managing: ⏳ WAITING (ready to start)
```

### 2:00pm — Mid-Workflow Check
```bash
# Managing Editor checks progress
python progress.py issues/017
→ 50% complete (12/24 files)

# Editorial Director checks if on track
python checkpoint.py blocks 017
→ No blocks, Managing on schedule
```

### 6:45pm — Managing Checkpoint
```bash
# Managing finishes all sections
python checkpoint.py signal managing 017 "All 11 sections complete, 24/24 files"

# Editorial Director gets notification
→ "Issue 017 ready for validation"

# Editorial Director starts validation
python validator.py issues/017
→ ✅ VALID

python checkpoint.py signal editorial 017 "Approved for publishing"

# Bot gets notification
→ "Issue 017 scheduled for 8:00am publish"
```

### 8:02am (Next Day) — Publishing Checkpoint
```bash
# Bot publishes
python checkpoint.py signal publishing 017 "Published to 4,250 subscribers"

# All agents see final status
python checkpoint.py timeline 017
→ 7:30am: Curator ✅
→ 9:05am: Assignment ✅
→ 6:45pm: Managing ✅
→ 7:42pm: Editorial ✅
→ 8:02am: Publishing ✅
```

---

## Summary

**Checkpoints solve:**
✅ Agent visibility (know the status without asking)
✅ Blocking detection (know what's holding things up)
✅ Handoff verification (know the next person received your work)
✅ Timeline awareness (know if you're on track)
✅ Automatic alerts (know when something is at risk)

**Implemented as:**
- `checkpoint.py` tool for signaling + checking status
- `CHECKPOINTS/` folder per Issue (not cluttering main files)
- Dashboard views for each agent role
- Automatic notifications on checkpoint completion
- Timeline + blocking analysis built-in

**Used by agents:**
```bash
# Signal your stage is complete
python checkpoint.py signal [your-role] 017 "Your message"

# Check current status
python checkpoint.py status 017

# See what's blocking
python checkpoint.py blocks 017

# View timeline
python checkpoint.py timeline 017

# Your dashboard
python checkpoint.py dashboard [your-role]
```

**Result:** Agents know exactly where the issue is, who they're waiting on, and when they can start/finish.
