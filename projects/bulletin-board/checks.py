#!/usr/bin/env python3
"""
Design By Bulletin™ Content Checks

Validates content quality: word count, links, section names, etc.

Usage:
    python checks.py issues/017
    python checks.py issues/017 --fix-suggestions

Exit codes:
    0 = All checks pass
    1 = Warnings found (fixable)
    2 = Errors found (blocking)
"""

import sys
import re
import argparse
from pathlib import Path
from typing import List, Tuple
from urllib.parse import urlparse


class ContentChecker:
    """Validate Issue content quality."""
    
    LOCKED_SECTION_NAMES = [
        "Art", "Painting", "Illustration", "Sculpture", "Culture",
        "Photography", "Art History", "Opinions", "Design & AI Tools",
        "Product & Process", "Visual & Brand"
    ]
    
    WORD_COUNT_MIN = 60
    WORD_COUNT_MAX = 120
    
    def __init__(self, issue_path):
        self.issue_path = Path(issue_path)
        self.errors: List[Tuple[str, str]] = []
        self.warnings: List[Tuple[str, str]] = []
    
    def check_all(self) -> bool:
        """Run all checks."""
        if not self.issue_path.exists():
            self.errors.append(("FATAL", f"Issue path not found: {self.issue_path}"))
            return False
        
        # Check all copy files
        for num in range(1, 100):
            copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            if not copy_file.exists():
                break
            
            self._check_copy_file(copy_file, num)
        
        return len(self.errors) == 0
    
    def _check_copy_file(self, file_path: Path, section_num: int):
        """Check a single copy file."""
        content = file_path.read_text().strip()
        
        # Skip if just template
        if content.startswith("**[") and "[Add" in content:
            return
        
        section_name = f"Section {section_num:02d}"
        
        # Check 1: Section name is valid
        self._check_section_name(content, section_name)
        
        # Check 2: Word count
        self._check_word_count(content, section_name)
        
        # Check 3: Has sources
        self._check_has_sources(content, section_name)
        
        # Check 4: Link validity
        self._check_links(content, section_name)
    
    def _check_section_name(self, content: str, section_name: str):
        """Validate section name matches locked list."""
        # Extract section name from **[Name]** pattern
        match = re.search(r'\*\*\[([^\]]+)\]\*\*', content)
        if not match:
            # Try without brackets
            match = re.search(r'\*\*([^\*]+)\*\*', content)
        
        if not match:
            self.warnings.append((section_name, "No section name found (should be **Section Name**)"))
            return
        
        name = match.group(1).strip()
        
        if name not in self.LOCKED_SECTION_NAMES:
            self.warnings.append(
                (section_name, f"Section name '{name}' not in locked list. Use: {', '.join(self.LOCKED_SECTION_NAMES)}")
            )
    
    def _check_word_count(self, content: str, section_name: str):
        """Validate word count (60-120 words)."""
        # Remove links and section name from count
        text = re.sub(r'\*\*[^\*]+\*\*', '', content)  # Remove **bold**
        text = re.sub(r'https?://[^\s]+', '', text)     # Remove URLs
        
        words = len(text.split())
        
        if words < self.WORD_COUNT_MIN:
            self.warnings.append(
                (section_name, f"Too short: {words} words (target: 60-120)")
            )
        elif words > self.WORD_COUNT_MAX:
            self.warnings.append(
                (section_name, f"Too long: {words} words (target: 60-120)")
            )
    
    def _check_has_sources(self, content: str, section_name: str):
        """Validate has at least one source link."""
        links = re.findall(r'https?://[^\s]+', content)
        
        if not links:
            self.errors.append(
                (section_name, "No source links found (need at least 1)")
            )
        elif len(links) == 1:
            pass  # OK - minimum is 1
        # 2+ links is fine
    
    def _check_links(self, content: str, section_name: str):
        """Validate link format and basic accessibility."""
        links = re.findall(r'https?://[^\s]+', content)
        
        for link in links:
            # Remove trailing punctuation
            link = link.rstrip('.,!?;:)')
            
            # Basic URL validation
            try:
                result = urlparse(link)
                if not result.scheme or not result.netloc:
                    self.warnings.append(
                        (section_name, f"Invalid URL format: {link}")
                    )
            except Exception as e:
                self.warnings.append(
                    (section_name, f"URL error: {link} - {str(e)}")
                )
    
    def report(self, show_suggestions=False) -> str:
        """Generate report."""
        lines = []
        
        # Header
        issue = self.issue_path.name
        lines.append(f"\n📋 Content Checks — Issue {issue}\n")
        
        # Errors
        if self.errors:
            lines.append(f"❌ ERRORS ({len(self.errors)})\n")
            for location, message in self.errors:
                lines.append(f"   {location}: {message}")
            lines.append("")
        
        # Warnings
        if self.warnings:
            lines.append(f"⚠️  WARNINGS ({len(self.warnings)})\n")
            for location, message in self.warnings:
                lines.append(f"   {location}: {message}")
            lines.append("")
        
        # Summary
        if not self.errors and not self.warnings:
            lines.append("✅ All checks passed!")
        elif self.errors:
            lines.append(f"⚠️  {len(self.errors)} blocking errors")
        else:
            lines.append(f"ℹ️  {len(self.warnings)} warnings (non-blocking)")
        
        # Suggestions
        if show_suggestions and self.warnings:
            lines.append("\n💡 Suggestions:\n")
            
            for location, message in self.warnings:
                if "Too short" in message:
                    lines.append(f"   {location}: Add 1-2 more sentences")
                elif "Too long" in message:
                    lines.append(f"   {location}: Cut unnecessary detail")
                elif "Section name" in message:
                    lines.append(f"   {location}: Use one of the locked section names")
                elif "No section name" in message:
                    lines.append(f"   {location}: Add **Section Name** at the start")
                elif "Invalid URL" in message:
                    lines.append(f"   {location}: Fix link format (should start with https://)")
        
        return "\n".join(lines)


def main():
    """CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Check Design By Bulletin™ Issue content quality"
    )
    parser.add_argument(
        "issue_path",
        help="Path to Issue folder (e.g., issues/017)"
    )
    parser.add_argument(
        "--fix-suggestions",
        action="store_true",
        help="Show suggestions for fixing warnings"
    )
    
    args = parser.parse_args()
    
    checker = ContentChecker(args.issue_path)
    valid = checker.check_all()
    
    print(checker.report(show_suggestions=args.fix_suggestions))
    
    # Exit with appropriate code
    if checker.errors:
        sys.exit(2)
    elif checker.warnings:
        sys.exit(1)
    else:
        sys.exit(0)


if __name__ == "__main__":
    main()
