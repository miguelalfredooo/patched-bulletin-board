#!/usr/bin/env python3
"""
Design By Bulletin™ — Checkpoint System
Tracks workflow state, agent handoffs, and blocking dependencies.
"""

import json
import sys
import os
from datetime import datetime
from pathlib import Path

STAGES = {
    "art-department": "🎨 Art Department Curation",
    "assignment": "📝 Assignment Commissions", 
    "managing": "✍️ Managing Editor Sections",
    "editorial": "👁️ Editorial Approval",
    "publishing": "📢 Bulletin Bot Publishing"
}

STAGE_ORDER = ["art-department", "assignment", "managing", "editorial", "publishing"]

def get_checkpoint_file(issue_num, stage):
    """Get checkpoint file path for an issue/stage"""
    issue_dir = Path(f"issues/{issue_num:03d}" if isinstance(issue_num, int) else f"issues/{issue_num}")
    checkpoint_dir = issue_dir / "CHECKPOINTS"
    return checkpoint_dir / f"{stage}-checkpoint.md"

def get_all_checkpoints(issue_num):
    """Get all checkpoint files for an issue"""
    issue_dir = Path(f"issues/{issue_num:03d}" if isinstance(issue_num, int) else f"issues/{issue_num}")
    checkpoint_dir = issue_dir / "CHECKPOINTS"
    
    checkpoints = {}
    if checkpoint_dir.exists():
        for stage in STAGE_ORDER:
            cp_file = checkpoint_dir / f"{stage}-checkpoint.md"
            if cp_file.exists():
                with open(cp_file, 'r') as f:
                    content = f.read()
                checkpoints[stage] = {
                    "file": str(cp_file),
                    "content": content,
                    "complete": True
                }
            else:
                checkpoints[stage] = {"complete": False}
    else:
        for stage in STAGE_ORDER:
            checkpoints[stage] = {"complete": False}
    
    return checkpoints

def signal_checkpoint(issue_num, stage, message):
    """Signal that a stage is complete"""
    issue_dir = Path(f"issues/{issue_num:03d}" if isinstance(issue_num, int) else f"issues/{issue_num}")
    checkpoint_dir = issue_dir / "CHECKPOINTS"
    checkpoint_dir.mkdir(parents=True, exist_ok=True)
    
    checkpoint_file = get_checkpoint_file(issue_num, stage)
    
    # Get stage index (for blocking detection)
    stage_idx = STAGE_ORDER.index(stage)
    
    # Build checkpoint content
    content = f"""# {STAGES[stage].upper()} CHECKPOINT

**Issue:** {issue_num}  
**Stage:** {stage.upper()}  
**Signaled:** {datetime.now().strftime('%Y-%m-%d %H:%M PT')}  
**Status:** ✅ COMPLETE

## Message

{message}

## Blocking Status

Stages blocked by this one:
"""
    
    # Show what this stage unblocks
    if stage_idx < len(STAGE_ORDER) - 1:
        next_stage = STAGE_ORDER[stage_idx + 1]
        content += f"- ✅ {STAGES[next_stage]} (now unblocked)\n"
    else:
        content += "- ✅ Publishing complete\n"
    
    content += f"""
## Next Actions

"""
    
    if stage == "art-department":
        content += "→ Assignment Editor: Review Art Department curation and create commissions\n"
    elif stage == "assignment":
        content += "→ Managing Editor: Begin writing all 11 sections\n"
    elif stage == "managing":
        content += "→ Editorial Director: Run validation and preview\n"
    elif stage == "editorial":
        content += "→ Bulletin Bot: Format and publish to subscribers\n"
    elif stage == "publishing":
        content += "→ Issue complete\n"
    
    with open(checkpoint_file, 'w') as f:
        f.write(content)
    
    print(f"✅ Checkpoint signaled: {stage} @ {datetime.now().strftime('%H:%M PT')}")
    print(f"   Message: {message}")
    print(f"   File: {checkpoint_file}")
    
    return True

def show_status(issue_num):
    """Show current workflow status"""
    checkpoints = get_all_checkpoints(issue_num)
    
    print(f"\n📋 Issue {issue_num} — Workflow Status\n")
    
    for i, stage in enumerate(STAGE_ORDER):
        cp = checkpoints.get(stage, {})
        
        if cp.get("complete"):
            status = "✅ COMPLETE"
            blocker = "None"
        else:
            if i == 0:
                status = "⏳ WAITING"
                blocker = "Not started"
            else:
                prev_stage = STAGE_ORDER[i-1]
                prev_complete = checkpoints.get(prev_stage, {}).get("complete", False)
                if prev_complete:
                    status = "🟡 WAITING (ready)"
                    blocker = "Ready to start"
                else:
                    status = "⏳ BLOCKED"
                    blocker = f"Waiting on {STAGES[prev_stage]}"
        
        print(f"{STAGES[stage]}")
        print(f"  Status: {status}")
        print(f"  Blocker: {blocker}")
        print()

def show_blocks(issue_num):
    """Show blocking dependencies"""
    checkpoints = get_all_checkpoints(issue_num)
    
    print(f"\n🔗 Issue {issue_num} — Blocking Dependencies\n")
    
    blocking_found = False
    
    for i, stage in enumerate(STAGE_ORDER):
        cp = checkpoints.get(stage, {})
        
        if not cp.get("complete") and i > 0:
            prev_stage = STAGE_ORDER[i-1]
            prev_complete = checkpoints.get(prev_stage, {}).get("complete", False)
            
            if prev_complete:
                print(f"✅ {STAGES[stage].upper()}")
                print(f"   → {STAGES[prev_stage]} is done, you can start\n")
            else:
                blocking_found = True
                print(f"⏳ {STAGES[stage].upper()}")
                print(f"   → BLOCKED by {STAGES[prev_stage]}")
                print(f"   → {prev_stage.upper()} hasn't finished yet\n")
    
    if not blocking_found:
        print("✅ No blocking dependencies detected. Workflow on track.\n")

def show_timeline(issue_num):
    """Show completion timeline"""
    checkpoints = get_all_checkpoints(issue_num)
    
    print(f"\n⏱️  Issue {issue_num} — Timeline\n")
    
    for stage in STAGE_ORDER:
        cp = checkpoints.get(stage, {})
        
        if cp.get("complete"):
            # Extract time from checkpoint
            content = cp.get("content", "")
            if "Signaled:" in content:
                time_str = content.split("Signaled:")[1].split("\n")[0].strip()
                print(f"✅ {STAGES[stage]}: {time_str}")
            else:
                print(f"✅ {STAGES[stage]}: Complete")
        else:
            print(f"⏳ {STAGES[stage]}: Pending")

def dashboard(role):
    """Show agent-specific dashboard"""
    print(f"\n{'='*60}")
    print(f"Dashboard — {role.upper()}")
    print(f"{'='*60}\n")
    
    if role == "art-department":
        print("""🟢 YOU: Curator
Status: Ready to scan sources

Your responsibilities:
✓ Scan Bluesky, Reddit, Substack, Medium daily
✓ Score URLs on 4 dimensions
✓ Create daily report (PASSED/FLAGGED/REJECTED)
✓ Signal when ready: python checkpoint.py signal curator 017 "Report ready"

Next issue: Issue 017
Command: python checkpoint.py signal curator 017 "45 URLs scanned, 12 PASSED"
""")
    
    elif role == "assignment":
        print("""🟢 YOU: Assignment Editor
Status: Waiting for Curator report

Your responsibilities:
✓ Review curator's daily report
✓ Identify gaps and emerging themes
✓ Write commission briefs for Managing Editor
✓ Signal when ready: python checkpoint.py signal assignment 017 "Commissions done"

Next steps:
1. Wait for curator checkpoint (7:30am PT)
2. Review report
3. Create 11 commissions (one per section)
4. Send to Managing Editor
5. Signal: python checkpoint.py signal assignment 017 "Commissions ready"
""")
    
    elif role == "managing":
        print("""🟢 YOU: Managing Editor
Status: Waiting for Assignment commissions

Your responsibilities:
✓ Receive commissions from Assignment Editor
✓ Research and write all 11 sections
✓ Create ASCII art + copy for each section
✓ Track progress: python progress.py issues/017
✓ Signal when ready: python checkpoint.py signal managing 017 "Complete"

Workflow:
1. Receive commissions (usually by 9:00am PT)
2. Start writing sections (11 total)
3. Track progress: python progress.py issues/017
4. When 100% done: python checkpoint.py signal managing 017 "All sections complete"

Deadline: 7:00pm PT
""")
    
    elif role == "editorial":
        print("""🟢 YOU: Editorial Director
Status: Waiting for Managing Editor

Your responsibilities:
✓ Receive completed Issue from Managing Editor
✓ Validate structure: python validator.py issues/017
✓ Preview: /admin-preview 017
✓ Approve & signal: python checkpoint.py signal editorial 017 "Approved"

Workflow:
1. Wait for Managing checkpoint (target 7:00pm PT)
2. Validate: python validator.py issues/017
3. Preview: /admin-preview 017
4. If OK: python checkpoint.py signal editorial 017 "Approved"
5. If issues: Notify Managing Editor with revisions

Deadline: 7:45pm PT
""")
    
    elif role == "bot":
        print("""🟢 YOU: Bulletin Bot
Status: Waiting for Editorial approval

Your responsibilities:
✓ Monitor for editorial approval checkpoint
✓ Load Issue files when approved
✓ Format for Telegram (code blocks + escaping)
✓ Publish at scheduled time
✓ Signal when published: python checkpoint.py signal publishing 017 "Published"

Workflow:
1. Wait for editorial checkpoint
2. Check: python checkpoint.py status 017
3. When editorial signals approval:
   - Load Issue files
   - Format for Telegram
   - Send with parse_mode="MarkdownV2"
4. Signal: python checkpoint.py signal publishing 017 "Published to X subscribers"

Scheduled for: 8:00am PT (next day)
""")
    
    else:
        print(f"Unknown role: {role}")

def main():
    if len(sys.argv) < 3:
        print("""
Design By Bulletin™ — Checkpoint System

USAGE:
  python checkpoint.py signal [stage] [issue] "message"
  python checkpoint.py status [issue]
  python checkpoint.py blocks [issue]
  python checkpoint.py timeline [issue]
  python checkpoint.py dashboard [curator|assignment|managing|editorial|bot]

EXAMPLES:
  # Signal curator is done
  python checkpoint.py signal curator 017 "45 URLs scanned, 12 PASSED"
  
  # Check current status
  python checkpoint.py status 017
  
  # See what's blocking
  python checkpoint.py blocks 017
  
  # View timeline
  python checkpoint.py timeline 017
  
  # Get your dashboard
  python checkpoint.py dashboard managing

STAGES:
  curator → assignment → managing → editorial → publishing
""")
        return
    
    action = sys.argv[1]
    
    if action == "signal":
        if len(sys.argv) < 5:
            print("Usage: python checkpoint.py signal [stage] [issue] \"message\"")
            return
        stage = sys.argv[2]
        issue = sys.argv[3]
        message = " ".join(sys.argv[4:])
        signal_checkpoint(issue, stage, message)
    
    elif action == "status":
        if len(sys.argv) < 3:
            print("Usage: python checkpoint.py status [issue]")
            return
        issue = sys.argv[2]
        show_status(issue)
    
    elif action == "blocks":
        if len(sys.argv) < 3:
            print("Usage: python checkpoint.py blocks [issue]")
            return
        issue = sys.argv[2]
        show_blocks(issue)
    
    elif action == "timeline":
        if len(sys.argv) < 3:
            print("Usage: python checkpoint.py timeline [issue]")
            return
        issue = sys.argv[2]
        show_timeline(issue)
    
    elif action == "dashboard":
        if len(sys.argv) < 3:
            print("Usage: python checkpoint.py dashboard [curator|assignment|managing|editorial|bot]")
            return
        role = sys.argv[2]
        dashboard(role)
    
    else:
        print(f"Unknown action: {action}")

if __name__ == "__main__":
    main()
