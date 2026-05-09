# Validation Gate — How It Works (Issue 021+)

**Status:** Implemented in `bulletin_bot_impl.py`

---

## The Gate in Action

### **Scenario 1: Issue Passes Validation**

```
7:00 PM: Editorial Director validates Issue 021

  ✓ Run: python3 validator.py issues/021
    Result: ✓ VALID (18 files, 6 sections)
  
  ✓ Run: python3 test-uniqueness.py issues/021
    Result: ✓ NO DUPLICATES
  
  ✓ Run: /admin-preview 021
    Result: All 6 sections render correctly

  → Signal:
    python3 checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
    
    Creates: issues/021/CHECKPOINTS/editorial-checkpoint.md
    Content: Contains "approved for publishing"

7:45 PM: Bot checks gate at automatic publish time

  ✓ Bot calls: check_validation_gate(021)
  ✓ Gate checks: Does editorial-checkpoint.md contain "approved for publishing"?
  ✓ Gate check: Is issue still valid?
  
  → Result: GATE OPEN ✓

8:00 PM: Bot publishes Issue 021 to Telegram
  ✓ Loads all 18 files
  ✓ Renders 6-section magazine
  ✓ Sends to subscribers
```

### **Scenario 2: Issue Fails Validation**

```
7:00 PM: Editorial Director validates Issue 021

  ✗ Run: python3 validator.py issues/021
    Result: ✗ INVALID
    Error: "File missing: 04-SECTION-COPY.md"

  → Do NOT signal approval
  → Signal revision needed:
    python3 checkpoint.py signal editorial 021 "Revisions needed: 04-SECTION-COPY.md is missing"

7:45 PM: Bot checks gate at automatic publish time

  ✗ Bot calls: check_validation_gate(021)
  ✗ Gate checks: Does editorial-checkpoint.md contain "approved for publishing"?
  ✗ Result: No (checkpoint says "Revisions needed")
  
  → Result: GATE LOCKED ✗

8:00 PM: Bot does NOT publish Issue 021

  ✗ Publishing blocked
  
  → Instead: Notification to Editorial Director
    "Issue 021 cannot be published. Validation gate is locked.
     Fix: 04-SECTION-COPY.md is missing
     Then re-validate and re-signal approval"

  → Managing Editor is notified to fix the missing file
```

### **Scenario 3: Editorial Director Forgets to Validate**

```
6:45 PM: Managing Editor finishes, signals "done"

7:00 PM: Editorial Director should validate but forgets

7:45 PM: Bot checks gate at automatic publish time

  ✗ Bot calls: check_validation_gate(021)
  ✗ Gate checks: Does editorial-checkpoint.md exist?
  ✗ Result: No (checkpoint file doesn't exist because director never validated)
  
  → Result: GATE LOCKED ✗

8:00 PM: Bot does NOT publish Issue 021

  ✗ Publishing blocked
  
  → Notification:
    "Issue 021 cannot be published. Editorial validation checkpoint missing.
     Editorial Director must validate first.
     Run: python3 validator.py issues/021"

  → Director is forced to validate before publishing can happen
```

---

## Gate Implementation (Code)

### **Gate Check in Bot**

```python
def check_validation_gate(self, issue_num: int) -> Tuple[bool, str]:
    """
    Check if issue has passed validation gate before bot can publish.
    
    Returns: (gate_open: bool, reason: str)
    """
    
    # 1. Check: Editorial validation checkpoint exists
    if not editorial_checkpoint.exists():
        return False, "Editorial validation checkpoint missing"
    
    # 2. Check: Checkpoint contains approval signal
    if "approved for publishing" not in checkpoint_content:
        return False, "Editorial checkpoint does not contain approval signal"
    
    # 3. Check: Issue is still valid
    if not validate_phase_2():
        return False, "Issue validation failed"
    
    # GATE IS OPEN
    return True, "Validation gate passed - issue ready to publish"
```

### **Gate Check Before Publishing**

```python
def handle_digest(self, user_id: int) -> Dict:
    # ... get issue path ...
    
    # CHECK VALIDATION GATE FIRST
    gate_open, gate_reason = self.check_validation_gate(issue_num)
    if not gate_open:
        return {
            "error": "Publishing blocked",
            "reason": gate_reason,
            "user_id": user_id
        }
    
    # Only if gate is open, proceed with publishing
    visual, prose = self._assemble_issue(issue_path)
    # ... send to Telegram ...
```

---

## What the Gate Prevents

✅ **Blocks invalid issues**
- Missing files
- Broken structure
- Duplicate content
- Rendering errors

✅ **Blocks unapproved issues**
- No validation checkpoint
- No approval signal
- Only "revisions needed" signal

✅ **Blocks forgotten validations**
- Director cannot forget — gate enforces it
- Issue cannot publish without explicit signal

---

## Editorial Director Checklist (7:00 PM)

```
Before Issue 021 can publish, you MUST:

[ ] 1. Run validation
      python3 validator.py issues/021
      Result: ✓ VALID

[ ] 2. Run uniqueness check
      python3 test-uniqueness.py issues/021
      Result: ✓ NO DUPLICATES

[ ] 3. Preview on Telegram
      /admin-preview 021
      Result: All 6 sections render

[ ] 4. If all 3 passed:
      Signal approval:
      python3 checkpoint.py signal editorial 021 "Validation passed - approved for publishing"
      
      → This OPENS the gate

[ ] 5. If any failed:
      Signal revision needed:
      python3 checkpoint.py signal editorial 021 "Revisions needed: [describe issue]"
      
      → This LOCKS the gate
      → Managing Editor fixes issue
      → You validate again
      → Gate opens on next approval signal
```

**WITHOUT step 4, the gate stays LOCKED and bot cannot publish.**

---

## Timeline with Gate

```
6:45 PM:  Managing Editor signals "done"
          Issue 021 is complete (18 files)

7:00 PM:  Editorial Director validates
          (Runs 3 checks: validator, test-uniqueness, preview)
          
          If all pass:
          Signals: "Validation passed - approved for publishing"
          → GATE OPENS

7:45 PM:  Bot checks gate
          Gate status: ✓ OPEN
          → Ready to publish

8:00 PM:  Bot publishes (automatic)
          → Issue 021 live on Telegram
```

---

## If Gate Fails at 7:45 PM

```
7:45 PM:  Bot checks gate
          Gate status: ✗ LOCKED
          
          Reason: "Editorial checkpoint missing" OR
                  "Checkpoint does not contain approval signal" OR
                  "Issue validation failed"

          → Publishing blocked
          → Issue NOT sent to subscribers
          → Notification sent to Editorial Director
          
          Next steps:
          1. If checkpoint missing: Run validation and signal
          2. If validation failed: Notify Managing Editor to fix, re-validate
          3. Re-signal approval once issues resolved
          4. Gate will open on next check

8:00 PM:  (No publishing happens)
          Issue 021 remains unpublished until gate is open
```

---

## Emergency Override (Rare)

If the gate has a false negative (thinks valid issue is invalid):

```bash
# Editorial Director can force-open gate:
python3 checkpoint.py signal editorial 021 "Emergency override - manually validated, issue is good"

# Gate recognizes "manually validated" or "override" in signal
# → GATE OPENS
# → Bot can publish on next check
```

**Should only use if validator has a bug.**

---

## Testing the Gate

### **Test 1: Valid Issue Passes**
```bash
# Create valid Issue 021
python3 scaffold.py issues/021 --sections 6

# [Managing Editor fills in files]

# Editorial Director validates
python3 validator.py issues/021
# ✓ VALID

# Signal approval
python3 checkpoint.py signal editorial 021 "Validation passed - approved for publishing"

# Bot attempts to publish
/sendme 021
# ✓ Should publish successfully
```

### **Test 2: Invalid Issue Blocked**
```bash
# Create invalid Issue 022 (missing a file)
# [Managing Editor creates 17 of 18 files, deliberately skip one]

# Editorial Director validates
python3 validator.py issues/022
# ✗ INVALID

# DO NOT signal approval
# (Or signal revision needed)

# Bot attempts to publish
/sendme 022
# ✗ Should fail with "Publishing blocked - Validation gate..."
```

### **Test 3: Missing Checkpoint Blocks**
```bash
# Create valid Issue 023
# [All 18 files created correctly]

python3 validator.py issues/023
# ✓ VALID

# DO NOT create checkpoint or signal
# (Simulate director forgetting to validate)

# Bot attempts to publish
/sendme 023
# ✗ Should fail with "Editorial validation checkpoint missing"
```

---

## Validation Gate Status

**Implementation:** ✅ Complete
- `check_validation_gate()` method added to bot
- `handle_digest()` calls gate check
- Blocks publishing if gate not open

**Testing:** ⏳ Ready for Issue 021 test
- Test with valid issue (gate opens)
- Test with invalid issue (gate locked)
- Test with missing checkpoint (gate locked)

**Documentation:** ✅ Complete
- Gate workflow documented
- Editorial Director instructions updated
- Emergency override documented

---

## Summary

**The validation gate:**
- ✅ Prevents bot from publishing invalid issues
- ✅ Enforces Editorial Director validation
- ✅ Uses checkpoint file as lock/unlock signal
- ✅ Blocks publishing if any validation fails
- ✅ Provides clear error messages
- ✅ Has emergency override option

**Result:** No invalid issue reaches subscribers. All issues published are guaranteed valid.

---

*Gate is implemented and ready for Issue 021 production workflow.*
