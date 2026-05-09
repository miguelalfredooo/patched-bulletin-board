#!/usr/bin/env python3
"""
Design By Bulletin™ Issue Scaffold

Generates complete Issue folder structure with pre-filled templates.
All files numbered and ready to edit.

Usage:
    python scaffold.py issues/017 --sections 11 --theme "Discovery"
    python scaffold.py issues/018 --sections 5 --theme "Fragments"
    python scaffold.py issues/019  # Uses defaults: 11 sections, no theme yet

Exit codes:
    0 = Success
    1 = Error (folder exists, invalid args, etc.)
"""

import sys
import argparse
import json
from pathlib import Path
from datetime import datetime


class IssueScaffold:
    """Generate Issue folder structure."""
    
    # DBB Logo (constant)
    LOGO = """██████╗ ██████╗ ██████╗ ™
██╔══██╗██╔══██╗██╔══██╗
██║  ██║██████╔╝██████╔╝
██║  ██║██╔══██╗██╔══██╗
██████╔╝██████╔╝██████╔╝
╚═════╝ ╚═════╝ ╚═════╝"""
    
    DIVIDER = "━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    def __init__(self, issue_path, sections=6, theme="[THEME NAME]", date=None):
        self.issue_path = Path(issue_path)
        self.sections = sections
        self.theme = theme
        self.date = date or datetime.now().strftime("%B %d, %Y")
        self.issue_num = self.issue_path.name.replace('issues/', '')
    
    def scaffold(self) -> bool:
        """Generate all Issue files."""
        
        # Check if folder already exists
        if self.issue_path.exists():
            print(f"❌ ERROR: {self.issue_path} already exists")
            return False
        
        # Create folder
        self.issue_path.mkdir(parents=True)
        print(f"✅ Created {self.issue_path}/")
        
        # 0. Create manifest.json (so bot can find it)
        self._create_manifest()
        
        # 1. Create cover art
        self._create_cover_art()
        
        # 2. Create section art/copy pairs
        for num in range(1, self.sections + 1):
            self._create_section_pair(num)
        
        # 3. Create metadata footer
        self._create_footer()
        
        # Summary
        total_files = 1 + 1 + (self.sections * 2) + 1  # manifest + cover + sections + footer
        print(f"\n✅ Scaffold complete!")
        print(f"   Issue: {self.issue_num}")
        print(f"   Theme: {self.theme}")
        print(f"   Sections: {self.sections}")
        print(f"   Files created: {total_files}")
        print(f"   Path: {self.issue_path}/")
        print(f"\n📝 Next: Edit the files, fill in art and copy")
        print(f"✔️  When done: python validator.py {self.issue_path}")
        
        return True
    
    def _create_manifest(self):
        """Create manifest.json for bot to find this Issue."""
        manifest = {
            "issue": int(self.issue_num),
            "theme": self.theme,
            "date": self.date,
            "status": "created",
            "structure": "flat",
            "sections": self.sections
        }
        
        file_path = self.issue_path / "manifest.json"
        file_path.write_text(json.dumps(manifest, indent=2))
        print(f"  ✅ manifest.json")
    
    def _create_cover_art(self):
        """Create 00-COVER-ART.txt with pre-filled masthead."""
        content = f"""{self.LOGO}

Design By Bulletin™
{self.DIVIDER}
Issue {self.issue_num}
{self.theme} • {self.date}
{self.DIVIDER}

[Add theme-specific visual ASCII art here]

        [THEME IN CAPS]
"""
        
        file_path = self.issue_path / "00-COVER-ART.txt"
        file_path.write_text(content)
        print(f"  ✅ 00-COVER-ART.txt")
    
    def _create_section_pair(self, num):
        """Create NN-SECTION-ART.txt and NN-SECTION-COPY.md for one section."""
        
        # Art file (empty template)
        art_content = f"""[Add ASCII art for section {num} here]
"""
        
        art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
        art_file.write_text(art_content)
        
        # Copy file (empty template with section name)
        copy_content = f"""**[Section {num} Name]**

[Add 2-4 sentences of copy here, 60-120 words]

https://example.com/source
"""
        
        copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
        copy_file.write_text(copy_content)
        
        if num == 1 or num % 3 == 0:  # Print progress every 3 sections
            print(f"  ✅ {num:02d}-SECTION-ART.txt + {num:02d}-SECTION-COPY.md")
        elif num == self.sections:
            print(f"  ✅ {num:02d}-SECTION-ART.txt + {num:02d}-SECTION-COPY.md")
    
    def _create_footer(self):
        """Create metadata footer."""
        footer_num = self.sections + 1
        content = f"""{self.LOGO}

Design By Bulletin™
{self.DIVIDER}
Issue {self.issue_num}
{self.theme} • {self.date}
{self.DIVIDER}
"[Add powerful closing quote here]"
"""
        
        file_path = self.issue_path / f"{footer_num:02d}-METADATA-FOOTER.txt"
        file_path.write_text(content)
        print(f"  ✅ {footer_num:02d}-METADATA-FOOTER.txt")


def main():
    """CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Generate Design By Bulletin™ Issue folder structure"
    )
    parser.add_argument(
        "issue_path",
        help="Path to Issue folder (e.g., issues/017)"
    )
    parser.add_argument(
        "--sections",
        type=int,
        default=6,
        help="Number of sections (default: 6 - Visual, Cultural, Critical, Tools, Systems, Material Culture)"
    )
    parser.add_argument(
        "--theme",
        default="[THEME NAME]",
        help='Theme name (default: "[THEME NAME]")'
    )
    parser.add_argument(
        "--date",
        help="Publication date (default: today's date)"
    )
    
    args = parser.parse_args()
    
    # Validate sections
    if args.sections < 1:
        print("❌ ERROR: Sections must be >= 1")
        sys.exit(1)
    
    # Create scaffold
    scaffold = IssueScaffold(
        args.issue_path,
        sections=args.sections,
        theme=args.theme,
        date=args.date
    )
    
    success = scaffold.scaffold()
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
