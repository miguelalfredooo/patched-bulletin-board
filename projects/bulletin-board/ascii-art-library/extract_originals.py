#!/usr/bin/env python3
"""
extract_originals.py

Extracts individual ASCII art sections from Design By Bulletin™ issue markdown
files and writes them as standalone .txt files into the `original/` directory.

Each issue markdown (ISSUE-NNN-theme-complete.md) contains ASCII art in
fenced codeblocks (``` ... ```) under `### Section N — Name` headers.
This script preserves the exact content of those codeblocks, as they appear
in the source markdown, without stripping blank lines or padding.

Output naming convention:
    original/issue-NNN-section-slug-original.txt

Section slugs:
    1  art
    2  painting
    3  illustration
    4  sculpture
    5  culture
    6  photography
    7  art-history
    8  opinions
    9  design-tools
    10 product-process
    11 visual-brand

Issues covered: 001–011 (all available complete markdown files)
"""

import re
import os
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

BULLETIN_DIR = Path(__file__).parent.parent  # .../bulletin-board/
OUTPUT_DIR = Path(__file__).parent / "original"

# Map section numbers to file-safe slugs
SECTION_SLUGS = {
    1:  "art",
    2:  "painting",
    3:  "illustration",
    4:  "sculpture",
    5:  "culture",
    6:  "photography",
    7:  "art-history",
    8:  "opinions",
    9:  "design-tools",
    10: "product-process",
    11: "visual-brand",
}

# Pattern to detect a Section header line, e.g.:
#   ### Section 1 — Art
#   ### Section 9 — Design & AI Tools
SECTION_HEADER_RE = re.compile(
    r"^###\s+Section\s+(\d+)\s+[—–-]\s+(.+)$",
    re.IGNORECASE,
)


def extract_sections_from_markdown(md_path: Path) -> dict[int, str]:
    """
    Parse a single issue markdown file and return a mapping of
    {section_number: ascii_art_text}.

    Format A (issues 001-010):
        Each section has a `### Section N — Name` header followed by a
        fenced codeblock.  The verbatim codeblock content is saved.

    Format B (issue 011):
        A single combined codeblock under "CODEBLOCK 2: 11 EDITORIAL SECTIONS"
        contains all sections separated by ━━━ divider lines.
        The section name appears as an ALL-CAPS label at the right of one line
        in each segment.  Segments are identified by order.
    """
    text = md_path.read_text(encoding="utf-8")
    lines = text.splitlines()

    # --- Format A: individual Section headers ---
    sections: dict[int, str] = {}
    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]
        m = SECTION_HEADER_RE.match(line.strip())
        if m:
            section_num = int(m.group(1))
            # Advance past blank lines to find the opening fence
            j = i + 1
            while j < n and lines[j].strip() == "":
                j += 1

            # Check for opening fence
            if j < n and lines[j].strip() == "```":
                fence_start = j + 1
                # Find the closing fence
                k = fence_start
                while k < n and lines[k].strip() != "```":
                    k += 1
                # lines[fence_start:k] is the codeblock content
                block_lines = lines[fence_start:k]
                sections[section_num] = "\n".join(block_lines)
                i = k + 1
                continue
        i += 1

    if sections:
        return sections

    # --- Format B: combined codeblock (issue 011 style) ---
    # Look for a fenced codeblock under a header that mentions "EDITORIAL SECTIONS"
    DIVIDER = "━" * 5  # partial match — lines full of ━ characters

    i = 0
    combined_block_lines: list[str] | None = None

    while i < n:
        line = lines[i]
        if "EDITORIAL SECTIONS" in line.upper() or "CODEBLOCK 2" in line.upper():
            # Advance to the opening fence
            j = i + 1
            while j < n and lines[j].strip() == "":
                j += 1
            if j < n and lines[j].strip() == "```":
                fence_start = j + 1
                k = fence_start
                while k < n and lines[k].strip() != "```":
                    k += 1
                combined_block_lines = lines[fence_start:k]
                break
        i += 1

    if combined_block_lines is None:
        return sections  # empty — caller will warn

    # Split the combined block into 11 segments by divider lines
    DIVIDER_RE = re.compile(r"^━{5,}$")
    segments: list[list[str]] = []
    current_segment: list[str] = []

    for line in combined_block_lines:
        if DIVIDER_RE.match(line.strip()):
            segments.append(current_segment)
            current_segment = []
        else:
            current_segment.append(line)
    if current_segment:
        segments.append(current_segment)

    # Remove leading/trailing blank segments
    segments = [s for s in segments if any(l.strip() for l in s)]

    # Assign segment N to section number N
    for idx, seg_lines in enumerate(segments, start=1):
        if idx in SECTION_SLUGS:
            sections[idx] = "\n".join(seg_lines)

    return sections


def issue_number_from_filename(filename: str) -> str:
    """Extract zero-padded 3-digit issue number from filename like ISSUE-007-..."""
    m = re.match(r"ISSUE-(\d+)-", filename, re.IGNORECASE)
    if m:
        return m.group(1).zfill(3)
    return None


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Find all ISSUE-NNN-theme-complete.md files
    issue_files = sorted(BULLETIN_DIR.glob("ISSUE-*-complete.md"))
    if not issue_files:
        print(f"No issue files found in: {BULLETIN_DIR}")
        return

    total_written = 0
    summary = []

    for md_path in issue_files:
        issue_num = issue_number_from_filename(md_path.name)
        if issue_num is None:
            print(f"  SKIP (unrecognized name): {md_path.name}")
            continue

        sections = extract_sections_from_markdown(md_path)
        if not sections:
            print(f"  WARN: No sections found in {md_path.name}")
            continue

        written_for_issue = 0
        for section_num, ascii_text in sorted(sections.items()):
            slug = SECTION_SLUGS.get(section_num)
            if slug is None:
                print(f"  WARN: Unknown section number {section_num} in {md_path.name}")
                continue

            out_filename = f"issue-{issue_num}-{slug}-original.txt"
            out_path = OUTPUT_DIR / out_filename
            out_path.write_text(ascii_text, encoding="utf-8")
            written_for_issue += 1
            total_written += 1

        summary.append((issue_num, md_path.name, written_for_issue))
        print(f"  Issue {issue_num}: {written_for_issue} sections extracted from {md_path.name}")

    print(f"\nDone. {total_written} files written to: {OUTPUT_DIR}")
    print(f"\nSummary:")
    for issue_num, fname, count in summary:
        status = "OK" if count == 11 else f"WARNING: only {count}/11 sections"
        print(f"  Issue {issue_num} ({fname}): {status}")


if __name__ == "__main__":
    main()
