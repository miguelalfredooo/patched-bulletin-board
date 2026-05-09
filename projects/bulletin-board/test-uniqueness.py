#!/usr/bin/env python3
"""
Test that each section's art and copy is unique and specific.

Validates:
1. Section art files have different content (not templates or placeholders)
2. Section copy files have different content (not templates or placeholders)
3. Section copy files reference the correct section name
4. No duplicate content across sections
5. Each section has substantive content (minimum word count)

Usage:
    python test-uniqueness.py issues/019
    python test-uniqueness.py issues/019 --verbose
    python test-uniqueness.py issues/019 --check-duplicates
"""

import sys
import argparse
from pathlib import Path
from collections import defaultdict


class UniquenessTest:
    """Test section uniqueness and specificity."""
    
    SECTION_NAMES = [
        "Art",
        "Painting", 
        "Illustration",
        "Sculpture",
        "Culture",
        "Photography",
        "Art History",
        "Opinions",
        "Design & AI Tools",
        "Product & Process",
        "Visual & Brand"
    ]
    
    PLACEHOLDER_PHRASES = [
        "[Add",
        "[PLACEHOLDER",
        "placeholder",
        "template",
        "TODO",
        "FIXME",
        "EDIT THIS",
        "your content",
        "fill in",
        "add here"
    ]
    
    def __init__(self, issue_path, verbose=False, check_duplicates=False):
        self.issue_path = Path(issue_path)
        self.verbose = verbose
        self.check_duplicates = check_duplicates
        self.results = []
        self.errors = []
        
    def run(self) -> bool:
        """Run all uniqueness tests. Returns True if all pass."""
        
        print(f"\n📋 Testing Section Uniqueness — {self.issue_path}")
        print("=" * 80)
        
        # Test 1: Check all section files exist
        self._test_files_exist()
        if self.errors:
            return False
        
        # Test 2: Load all content
        art_files = self._load_art_files()
        copy_files = self._load_copy_files()
        
        # Test 3: Check for placeholders
        self._test_no_placeholders(art_files, "art")
        self._test_no_placeholders(copy_files, "copy")
        
        # Test 4: Check minimum content
        self._test_minimum_content(art_files, "art", min_chars=20)
        self._test_minimum_content(copy_files, "copy", min_chars=100)
        
        # Test 5: Check section names in copy
        self._test_section_names(copy_files)
        
        # Test 6: Check for duplicates (optional)
        if self.check_duplicates:
            self._test_no_duplicates(art_files, "art")
            self._test_no_duplicates(copy_files, "copy")
        
        # Print results
        self._print_results()
        
        return len(self.errors) == 0
    
    def _test_files_exist(self):
        """Verify all 24 files exist."""
        expected = 24
        found = 0
        
        for num in range(1, 12):
            art_file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
            copy_file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            
            if art_file.exists():
                found += 1
            else:
                self.errors.append(f"Missing: {art_file.name}")
            
            if copy_file.exists():
                found += 1
            else:
                self.errors.append(f"Missing: {copy_file.name}")
        
        # Cover and footer
        if (self.issue_path / "00-COVER-ART.txt").exists():
            found += 1
        else:
            self.errors.append("Missing: 00-COVER-ART.txt")
        
        if (self.issue_path / "12-METADATA-FOOTER.txt").exists():
            found += 1
        else:
            self.errors.append("Missing: 12-METADATA-FOOTER.txt")
        
        if found == expected:
            self.results.append(("✅", f"All 24 files present"))
        else:
            self.errors.append(f"Only {found}/24 files found")
    
    def _load_art_files(self) -> dict:
        """Load all section art files."""
        art_files = {}
        for num in range(1, 12):
            file = self.issue_path / f"{num:02d}-SECTION-ART.txt"
            if file.exists():
                art_files[num] = file.read_text().strip()
        return art_files
    
    def _load_copy_files(self) -> dict:
        """Load all section copy files."""
        copy_files = {}
        for num in range(1, 12):
            file = self.issue_path / f"{num:02d}-SECTION-COPY.md"
            if file.exists():
                copy_files[num] = file.read_text().strip()
        return copy_files
    
    def _test_no_placeholders(self, files: dict, file_type: str):
        """Check that files don't contain placeholder text."""
        bad_sections = []
        
        for section_num, content in files.items():
            content_lower = content.lower()
            for phrase in self.PLACEHOLDER_PHRASES:
                if phrase.lower() in content_lower:
                    bad_sections.append(f"Section {section_num:02d}")
                    break
        
        if bad_sections:
            self.errors.append(
                f"⚠️  {file_type.upper()} files contain placeholders: {', '.join(bad_sections)}"
            )
        else:
            self.results.append(
                ("✅", f"No placeholder text in {file_type} files")
            )
    
    def _test_minimum_content(self, files: dict, file_type: str, min_chars: int):
        """Check that files meet minimum content length."""
        short_sections = []
        
        for section_num, content in files.items():
            if len(content) < min_chars:
                short_sections.append(f"Section {section_num:02d} ({len(content)} chars)")
        
        if short_sections:
            self.errors.append(
                f"⚠️  {file_type.upper()} files too short (< {min_chars} chars): "
                f"{', '.join(short_sections)}"
            )
        else:
            self.results.append(
                ("✅", f"All {file_type} files meet minimum length ({min_chars} chars)")
            )
    
    def _test_section_names(self, copy_files: dict):
        """Check that section names appear in copy files."""
        missing_names = []
        
        for section_num, content in copy_files.items():
            expected_name = self.SECTION_NAMES[section_num - 1]
            
            # Check if section name appears as bold: **Name**
            if f"**{expected_name}**" not in content:
                missing_names.append(f"Section {section_num:02d} (expected '**{expected_name}**')")
        
        if missing_names:
            self.errors.append(
                f"⚠️  Copy files missing section names: {', '.join(missing_names)}"
            )
        else:
            self.results.append(
                ("✅", "All copy files contain correct section names")
            )
    
    def _test_no_duplicates(self, files: dict, file_type: str):
        """Check for duplicate content across sections."""
        content_map = defaultdict(list)
        
        for section_num, content in files.items():
            # Use first 100 chars as fingerprint
            fingerprint = content[:100]
            content_map[fingerprint].append(section_num)
        
        duplicates = {k: v for k, v in content_map.items() if len(v) > 1}
        
        if duplicates:
            dup_pairs = [f"Sections {v}" for v in duplicates.values()]
            self.errors.append(
                f"⚠️  Duplicate content detected in {file_type} files: {', '.join(dup_pairs)}"
            )
        else:
            self.results.append(
                ("✅", f"No duplicate content in {file_type} files")
            )
    
    def _print_results(self):
        """Print test results."""
        
        print()
        for status, message in self.results:
            print(f"{status} {message}")
        
        if self.errors:
            print()
            print("❌ Errors found:")
            for error in self.errors:
                print(f"   {error}")
            print()
            return False
        else:
            print()
            print("✅ All uniqueness tests passed!")
            print()
            return True


def main():
    parser = argparse.ArgumentParser(
        description="Test that each section has unique, specific content"
    )
    parser.add_argument(
        "issue_path",
        help="Path to issue (e.g., issues/019)"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Verbose output"
    )
    parser.add_argument(
        "--check-duplicates",
        action="store_true",
        help="Also check for duplicate content across sections"
    )
    
    args = parser.parse_args()
    issue_path = Path(args.issue_path)
    
    if not issue_path.exists():
        print(f"❌ ERROR: {issue_path} does not exist")
        sys.exit(1)
    
    tester = UniquenessTest(
        issue_path,
        verbose=args.verbose,
        check_duplicates=args.check_duplicates
    )
    
    success = tester.run()
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
