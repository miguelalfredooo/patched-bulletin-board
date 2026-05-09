#!/usr/bin/env python3
"""
Design By Bulletin™ Progress Tracker

Shows which sections are complete and calculates completion percentage.

Usage:
    python progress.py issues/017
    python progress.py issues/017 --verbose

Exit codes:
    0 = Success
    1 = Error (folder not found, etc.)
"""

import sys
import argparse
from pathlib import Path


class ProgressTracker:
    """Track Issue completion status."""
    
    def __init__(self, issue_path):
        self.issue_path = Path(issue_path)
        self.issue_num = self.issue_path.name
    
    def get_status(self) -> dict:
        """Get completion status for Issue."""
        
        if not self.issue_path.exists():
            return {"error": f"Issue path not found: {self.issue_path}"}
        
        # Check cover
        cover = self.issue_path / "00-COVER-ART.txt"
        cover_done = cover.exists() and self._has_content(cover)
        
        # Check sections
        sections = []
        section_count = 0
        
        for num in range(1, 100):
            art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
            copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            
            if not art_file.exists():
                break
            
            section_count += 1
            art_done = self._has_content(art_file)
            copy_done = self._has_content(copy_file)
            
            sections.append({
                "num": num,
                "art_done": art_done,
                "copy_done": copy_done,
                "complete": art_done and copy_done
            })
        
        # Check footer
        footer_num = section_count + 1
        footer = self.issue_path / f"{footer_num:02d}-METADATA-FOOTER.txt"
        footer_done = footer.exists() and self._has_content(footer)
        
        # Calculate completion
        items_total = 1 + (section_count * 2) + 1  # cover + sections + footer
        items_done = sum([
            1 if cover_done else 0,
            sum(1 for s in sections if s["complete"]),
            1 if footer_done else 0
        ])
        
        percent = int((items_done / items_total) * 100) if items_total > 0 else 0
        
        return {
            "issue": self.issue_num,
            "cover_done": cover_done,
            "sections": sections,
            "section_count": section_count,
            "footer_done": footer_done,
            "items_total": items_total,
            "items_done": items_done,
            "percent": percent
        }
    
    def _has_content(self, file_path: Path) -> bool:
        """Check if file has content (not just template)."""
        if not file_path.exists():
            return False
        
        content = file_path.read_text().strip()
        
        # If file only contains template placeholders, it's not done
        if len(content) < 20:  # Minimum content threshold
            return False
        
        # Check for placeholder text (rough heuristic)
        if "Add " in content and "[" in content:
            return False
        
        return True
    
    def report(self, verbose=False):
        """Generate progress report."""
        status = self.get_status()
        
        if "error" in status:
            print(f"❌ {status['error']}")
            return False
        
        issue = status["issue"]
        percent = status["percent"]
        items_done = status["items_done"]
        items_total = status["items_total"]
        
        # Progress bar
        filled = int(percent / 5)  # 20 chars = 100%
        bar = "█" * filled + "░" * (20 - filled)
        
        print(f"\n📋 Issue {issue} ({percent}% complete)")
        print(f"[{bar}] {items_done}/{items_total}")
        
        # Cover status
        cover_status = "✅" if status["cover_done"] else "⏳"
        print(f"\n{cover_status} Cover Art")
        
        # Section status
        print(f"\n📑 Sections ({status['section_count']} total)")
        
        for section in status["sections"]:
            num = section["num"]
            art = "✅" if section["art_done"] else "❌"
            copy = "✅" if section["copy_done"] else "❌"
            status_icon = "✅" if section["complete"] else "⏳"
            
            if verbose:
                print(f"  {status_icon} {num:02d}: {art} Art  {copy} Copy")
            else:
                if section["complete"]:
                    print(f"  ✅ {num:02d}")
        
        # Show incomplete sections if not verbose
        if not verbose:
            incomplete = [s for s in status["sections"] if not s["complete"]]
            if incomplete:
                incomplete_nums = ', '.join(f'{s["num"]:02d}' for s in incomplete)
                print(f"\n  ⏳ Incomplete: {incomplete_nums}")
        
        # Footer status
        footer_status = "✅" if status["footer_done"] else "⏳"
        print(f"\n{footer_status} Closing Footer")
        
        # Summary
        print(f"\n📊 Summary")
        print(f"  Done: {items_done}/{items_total}")
        print(f"  Percent: {percent}%")
        
        if percent == 100:
            print(f"\n✨ Issue {issue} is COMPLETE and ready to validate!")
        elif percent == 0:
            print(f"\n💡 Start writing: edit section files, fill in art and copy")
        else:
            remaining = items_total - items_done
            print(f"\n💪 {remaining} items left to complete")
        
        return True


def main():
    """CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Track Design By Bulletin™ Issue progress"
    )
    parser.add_argument(
        "issue_path",
        help="Path to Issue folder (e.g., issues/017)"
    )
    parser.add_argument(
        "-v", "--verbose",
        action="store_true",
        help="Show detailed section status"
    )
    
    args = parser.parse_args()
    
    tracker = ProgressTracker(args.issue_path)
    success = tracker.report(verbose=args.verbose)
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
