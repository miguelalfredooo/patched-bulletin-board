#!/usr/bin/env python3
"""
Design By Bulletin™ Issue Validator

Validates flat file structure: art + copy pairs for each section.

Usage:
    python validator.py issues/017
    python validator.py issues/017 --fix

Structure:
    issues/017/
    ├── 00-COVER-ART.txt          (Raw ASCII, NO backticks)
    ├── 01-SECTION-ART.txt         (Raw ASCII, NO backticks)
    ├── 01-SECTION-COPY.md         (Raw markdown, NO escaping)
    ├── 02-SECTION-ART.txt         (Raw ASCII, NO backticks)
    ├── 02-SECTION-COPY.md         (Raw markdown, NO escaping)
    ... (repeat for all sections)
    └── NN-METADATA-FOOTER.txt     (Raw ASCII, NO backticks)

IMPORTANT: No Backticks in Art Files
    • Agents write RAW ASCII art without backticks (```)
    • The Bulletin Bot adds backticks during Telegram rendering
    • Validator checks that art files have NO backticks
    • If backticks are found, they are removed (--fix)

IMPORTANT: No Escaping in Copy Files
    • Agents write RAW markdown without MarkdownV2 escaping
    • The Telegram message tool applies escaping at send time
    • Validator checks that copy files have NO backslash escapes
    • If escapes are found, they are removed (--fix)

Exit codes:
    0 = Valid
    1 = Invalid
    2 = Error (file not found, etc.)
"""

import re
import sys
from pathlib import Path
from dataclasses import dataclass
from typing import List, Tuple


@dataclass
class ValidationError:
    """Single validation error."""
    level: str  # "error", "warning"
    message: str


class IssueValidator:
    """Validate Design By Bulletin™ issue structure."""
    
    def __init__(self, issue_path: Path):
        self.issue_path = Path(issue_path)
        self.errors: List[ValidationError] = []
        self.warnings: List[ValidationError] = []
    
    def validate(self) -> bool:
        """Run all validations. Return True if valid, False otherwise."""
        self.errors = []
        self.warnings = []
        
        # 1. Check basic structure
        if not self._check_paths():
            return False
        
        # 2. Check cover exists
        if not self._check_cover():
            return False
        
        # 3. Check sections
        if not self._check_sections():
            return False
        
        # 4. Check metadata footer
        if not self._check_footer():
            return False
        
        return len(self.errors) == 0
    
    def _check_paths(self) -> bool:
        """Check basic directory structure."""
        if not self.issue_path.exists():
            self.errors.append(ValidationError("error", f"Issue path not found: {self.issue_path}"))
            return False
        
        return True
    
    def _check_cover(self) -> bool:
        """Check cover file exists."""
        cover = self.issue_path / "00-COVER-ART.txt"
        
        if not cover.exists():
            self.errors.append(ValidationError("error", f"Missing cover file: {cover}"))
            return False
        
        # Check for backticks
        content = cover.read_text()
        if "```" in content:
            self.errors.append(ValidationError(
                "error",
                f"Cover file has backticks (remove them): {cover}\n"
                f"  Backticks are added by the bot during rendering, not by agents."
            ))
        
        return True
    
    def _check_sections(self) -> bool:
        """Check all sections have both art and copy files."""
        section_count = 0
        
        for num in range(1, 100):  # Check up to 100 sections (flexible)
            art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
            copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            
            has_art = art_file.exists()
            has_copy = copy_file.exists()
            
            # Both must exist or neither must exist
            if has_art and has_copy:
                section_count += 1
                
                # Check for backticks in art
                art_content = art_file.read_text()
                if "```" in art_content:
                    self.errors.append(ValidationError(
                        "error",
                        f"Art file has backticks (remove them): {art_file}\n"
                        f"  Backticks are added by the bot during rendering, not by agents."
                    ))
                
                # Check for escaping in copy
                copy_content = copy_file.read_text()
                if self._has_escaping(copy_content):
                    self.errors.append(ValidationError(
                        "error",
                        f"Copy file is pre-escaped (remove escapes): {copy_file}\n"
                        f"  Escaping is applied by the bot during rendering, not by agents."
                    ))
            
            elif has_art or has_copy:
                # One exists but not the other — that's an error
                missing = "copy" if has_art else "art"
                self.errors.append(ValidationError(
                    "error",
                    f"Section {num:02d} incomplete: has {missing.upper()} but missing {('copy' if has_art else 'art').upper()}"
                ))
            
            elif section_count > 0:
                # We had sections, now we don't — stop looking
                break
        
        if section_count == 0:
            self.errors.append(ValidationError("error", "No sections found"))
            return False
        
        return True
    
    def _check_footer(self) -> bool:
        """Check metadata footer exists."""
        # Count sections first
        section_count = 0
        for num in range(1, 100):
            art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
            copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            if art_file.exists() and copy_file.exists():
                section_count += 1
            elif section_count > 0:
                break
        
        # Footer should be numbered after the last section
        footer_num = section_count + 1
        footer = self.issue_path / f"{footer_num:02d}-METADATA-FOOTER.txt"
        
        if not footer.exists():
            self.errors.append(ValidationError(
                "error",
                f"Missing metadata footer: {footer}\n"
                f"  Expected: {footer_num:02d}-METADATA-FOOTER.txt (after section {section_count:02d})"
            ))
            return False
        
        return True
    
    def _has_escaping(self, text: str) -> bool:
        """Check if text has MarkdownV2 escaping (backslash before special char)."""
        escape_pattern = r'\\[_*\[\]()~`>#+=\-|{}.!]'
        return bool(re.search(escape_pattern, text))
    
    def report(self, verbose: bool = False) -> str:
        """Generate validation report."""
        lines = []
        
        if len(self.errors) == 0 and len(self.warnings) == 0:
            # Count sections for summary
            section_count = 0
            for num in range(1, 100):
                art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
                copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
                if art_file.exists() and copy_file.exists():
                    section_count += 1
                elif section_count > 0:
                    break
            
            lines.append("✅ VALID")
            lines.append(f"   Issue path: {self.issue_path}")
            lines.append(f"   Sections: {section_count}")
            lines.append(f"   Files: 1 cover + {section_count*2} section files + 1 footer = {1 + section_count*2 + 1} total")
            return "\n".join(lines)
        
        if len(self.errors) > 0:
            lines.append(f"❌ INVALID ({len(self.errors)} errors)")
            for error in self.errors:
                lines.append(f"\n   ERROR: {error.message}")
        
        if len(self.warnings) > 0:
            lines.append(f"\n⚠️  WARNINGS ({len(self.warnings)})")
            for warning in self.warnings:
                lines.append(f"\n   WARNING: {warning.message}")
        
        return "\n".join(lines)
    
    def fix(self) -> Tuple[int, int]:
        """Auto-fix common issues. Return (fixed_count, unfixable_count)."""
        fixed = 0
        unfixable = 0
        
        # Fix: Remove backticks from art files
        for num in range(1, 100):
            art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
            if not art_file.exists():
                break
            
            content = art_file.read_text()
            if "```" in content:
                content = content.replace("```\n", "").replace("\n```", "")
                art_file.write_text(content)
                fixed += 1
                print(f"Fixed: Removed backticks from {art_file}")
        
        # Fix: Remove cover backticks
        cover = self.issue_path / "00-COVER-ART.txt"
        if cover.exists():
            content = cover.read_text()
            if "```" in content:
                content = content.replace("```\n", "").replace("\n```", "")
                cover.write_text(content)
                fixed += 1
                print(f"Fixed: Removed backticks from {cover}")
        
        # Fix: Remove escaping from copy files
        for num in range(1, 100):
            copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            if not copy_file.exists():
                break
            
            content = copy_file.read_text()
            if self._has_escaping(content):
                # Remove backslashes before special chars
                content = re.sub(r'\\([_*\[\]()~`>#+=\-|{}.!])', r'\1', content)
                copy_file.write_text(content)
                fixed += 1
                print(f"Fixed: Removed escaping from {copy_file}")
        
        return fixed, unfixable


def main():
    """CLI entry point."""
    if len(sys.argv) < 2:
        print("Usage: python validator.py <issue_path> [--fix]")
        print("Example: python validator.py issues/017")
        print("Example: python validator.py issues/017 --fix")
        sys.exit(2)
    
    issue_path = sys.argv[1]
    fix_mode = "--fix" in sys.argv
    
    validator = IssueValidator(issue_path)
    
    if fix_mode:
        print(f"Attempting auto-fixes for {issue_path}...")
        fixed, unfixable = validator.fix()
        print(f"\nFixed {fixed} files")
        if unfixable > 0:
            print(f"⚠️  {unfixable} issues could not be auto-fixed")
    
    valid = validator.validate()
    print(validator.report(verbose=True))
    
    sys.exit(0 if valid else 1)


if __name__ == "__main__":
    main()
