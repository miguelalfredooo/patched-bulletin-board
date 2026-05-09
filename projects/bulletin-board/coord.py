#!/usr/bin/env python3
"""
Design By Bulletin™ Issue Coordination

Tracks Issue workflow state and identifies blocking points.

Usage:
    python coord.py issues/017 --init "Discovery" "2026-05-09 08:00"
    python coord.py issues/017 --status
    python coord.py issues/017 --update-stage curator
    python coord.py issues/017 --mark-complete managing

Exit codes:
    0 = Success
    1 = Error
"""

import sys
import argparse
import json
from pathlib import Path
from datetime import datetime


class IssueCoordinator:
    """Manage Issue workflow coordination."""
    
    STAGES = [
        "curator",
        "assignment",
        "managing",
        "editorial",
        "publishing"
    ]
    
    STAGE_DISPLAY = {
        "curator": "🔍 Curator (URL validation)",
        "assignment": "📝 Assignment (commissions)",
        "managing": "✍️  Managing (writing)",
        "editorial": "👁️  Editorial (review)",
        "publishing": "📢 Publishing (send to Telegram)"
    }
    
    def __init__(self, issue_path):
        self.issue_path = Path(issue_path)
        self.status_file = self.issue_path / "COORD.md"
    
    def init(self, theme: str, publish_time: str) -> bool:
        """Initialize coordination file for new Issue."""
        
        if not self.issue_path.exists():
            print(f"❌ Issue path not found: {self.issue_path}")
            return False
        
        if self.status_file.exists():
            print(f"❌ Coordination file already exists: {self.status_file}")
            return False
        
        issue_num = self.issue_path.name
        now = datetime.now().strftime("%Y-%m-%d %H:%M")
        
        content = f"""# Issue {issue_num}: {theme} — Coordination Log

**Created:** {now}  
**Theme:** {theme}  
**Target Publish:** {publish_time} PT  
**Status:** 🟡 IN PROGRESS

---

## Workflow State

### 🔍 Stage 1: Curator (URL Validation)
- **Assigned to:** Curator
- **Started:** {now}
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
- **Expected:** {publish_time} PT
- **Status:** ⏳ WAITING
- **Blocker:** Editorial approval

**Deliverable:** Published to Telegram subscribers

---

## Progress

| Stage | Status | Blocker |
|-------|--------|---------|
| Curator | 🟡 IN PROGRESS | None |
| Assignment | ⏳ WAITING | Curator |
| Managing | ⏳ WAITING | Assignment |
| Editorial | ⏳ WAITING | Managing |
| Publishing | ⏳ WAITING | Editorial |

---

## Updates

*[New updates will be added here as workflow progresses]*

---

## Blocking Rules

If any stage is blocked for > 4 hours, notify the blocker:
- If Curator is slow → remind Curator
- If Assignment is slow → remind Assignment
- If Managing is slow → notify Editorial Director
- If Editorial is slow → notify bot scheduler

---

## Notes

Use `python coord.py issues/{issue_num} --update-stage [stage]` to advance workflow.
"""
        
        self.status_file.write_text(content)
        print(f"✅ Initialized coordination file: {self.status_file}")
        return True
    
    def status(self) -> bool:
        """Show current coordination status."""
        
        if not self.status_file.exists():
            print(f"❌ Coordination file not found: {self.status_file}")
            print(f"   Run: python coord.py {self.issue_path} --init [theme] [time]")
            return False
        
        content = self.status_file.read_text()
        print(content)
        return True
    
    def update_stage(self, stage: str) -> bool:
        """Mark stage as complete, move to next."""
        
        if not self.status_file.exists():
            print(f"❌ Coordination file not found: {self.status_file}")
            return False
        
        if stage not in self.STAGES:
            print(f"❌ Invalid stage: {stage}")
            print(f"   Valid: {', '.join(self.STAGES)}")
            return False
        
        content = self.status_file.read_text()
        now = datetime.now().strftime("%Y-%m-%d %H:%M")
        
        # Update progress table - use stage name as it appears in the table
        stage_display = stage.capitalize()
        old_line = f"| {stage_display} | ⏳ WAITING |"
        new_line = f"| {stage_display} | ✅ COMPLETE |"
        
        if old_line not in content:
            # Maybe it's already complete or format is different
            print(f"⚠️  Stage already complete or not found: {stage}")
            return True
        
        content = content.replace(old_line, new_line)
        
        # Add update log
        update_log = f"**{now}:** {stage_display} stage complete → moving to next stage"
        if "## Updates" in content:
            content = content.replace(
                "*[New updates will be added here as workflow progresses]*",
                f"{update_log}\n*[New updates]*"
            )
        
        self.status_file.write_text(content)
        print(f"✅ Updated: {stage_display} stage complete")
        return True
    
    def mark_complete(self, agent: str) -> bool:
        """Mark an agent's work as complete."""
        
        agent_names = {
            "curator": "Curator",
            "assignment": "Assignment",
            "managing": "Managing",
            "editorial": "Editorial",
            "publishing": "Publishing"
        }
        
        if agent not in agent_names:
            print(f"❌ Invalid agent: {agent}")
            print(f"   Valid: {', '.join(agent_names.keys())}")
            return False
        
        return self.update_stage(agent)


def main():
    """CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Coordinate Design By Bulletin™ Issue workflow"
    )
    parser.add_argument(
        "issue_path",
        help="Path to Issue folder (e.g., issues/017)"
    )
    
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument(
        "--init",
        nargs=2,
        metavar=("THEME", "PUBLISH_TIME"),
        help="Initialize coordination file (e.g., --init Discovery '2026-05-09 08:00')"
    )
    group.add_argument(
        "--status",
        action="store_true",
        help="Show current coordination status"
    )
    group.add_argument(
        "--update-stage",
        type=str,
        metavar="STAGE",
        help="Mark stage complete and move to next"
    )
    group.add_argument(
        "--mark-complete",
        type=str,
        metavar="AGENT",
        help="Mark agent's work complete"
    )
    
    args = parser.parse_args()
    
    coordinator = IssueCoordinator(args.issue_path)
    
    if args.init:
        success = coordinator.init(args.init[0], args.init[1])
    elif args.status:
        success = coordinator.status()
    elif args.update_stage:
        success = coordinator.update_stage(args.update_stage)
    elif args.mark_complete:
        success = coordinator.mark_complete(args.mark_complete)
    else:
        success = False
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
