# Issue 017: Discovery — Coordination Log

**Created:** 2026-05-08 21:07  
**Theme:** Discovery  
**Target Publish:** 2026-05-09 08:00 PT  
**Status:** 🟡 IN PROGRESS

---

## Workflow State

### 🔍 Stage 1: Curator (URL Validation)
- **Assigned to:** Curator
- **Started:** 2026-05-08 21:07
- **Expected:** 7:30am PT daily
- **Status:** 🟡 IN PROGRESS
- **Blocker:** None

**Deliverable:** Validated URLs (PASSED/FLAGGED/REJECTED)

---

### 📝 Stage 2: Assignment (Commissions)
- **Assigned to:** Assignment Editor
- **Started:** Waiting for Curator
- **Expected:** 9:00am PT
- **Status:** ⏳ WAITING
- **Blocker:** Curator report

**Deliverable:** Commission brief for Managing Editor

---

### ✍️ Stage 3: Managing (Writing)
- **Assigned to:** Managing Editor
- **Started:** Waiting for Assignment
- **Expected:** Noon PT
- **Status:** ⏳ WAITING
- **Blocker:** Commission brief

**Deliverable:** Art + copy for all sections

---

### 👁️ Stage 4: Editorial (Review)
- **Assigned to:** Editorial Director
- **Started:** Waiting for Managing
- **Expected:** 5:00pm PT
- **Status:** ⏳ WAITING
- **Blocker:** Managing Editor completion

**Deliverable:** Approved Issue, ready to publish

---

### 📢 Stage 5: Publishing (Telegram)
- **Assigned to:** Bulletin Bot
- **Started:** Waiting for Editorial
- **Expected:** 2026-05-09 08:00 PT
- **Status:** ⏳ WAITING
- **Blocker:** Editorial approval

**Deliverable:** Published to Telegram subscribers

---

## Progress

| Stage | Status | Blocker |
|-------|--------|---------|
| Curator | 🟡 IN PROGRESS | None |
| Assignment | ✅ COMPLETE | Curator |
| Managing | ⏳ WAITING | Assignment |
| Editorial | ⏳ WAITING | Managing |
| Publishing | ⏳ WAITING | Editorial |

---

## Updates

**2026-05-08 21:07:** Assignment stage complete → moving to next stage
*[New updates]*

---

## Blocking Rules

If any stage is blocked for > 4 hours, notify the blocker:
- If Curator is slow → remind Curator
- If Assignment is slow → remind Assignment
- If Managing is slow → notify Editorial Director
- If Editorial is slow → notify bot scheduler

---

## Notes

Use `python coord.py issues/017 --update-stage [stage]` to advance workflow.
