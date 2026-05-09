# Bulletin Bot — 6-Section Update Guide

**Status:** Bot code needs update for 6-section structure

## Current Bot Behavior
Bot expects old manifest structure:
```json
{
  "act1": {"logo": "...", "masthead": "...", "sections": [...]},
  "act2": {"sections": [...], "closing": "..."}
}
```

## New Bot Behavior (For Issue 021+)

### Manifest Structure
```json
{
  "issue": 21,
  "theme": "Material Culture",
  "date": "May 9, 2026",
  "status": "published",
  "structure": "flat",
  "sections": 6
}
```

### File Discovery
Bot should dynamically discover:
- Cover: `00-COVER-ART.txt`
- Sections: `01-06-SECTION-ART.txt` and `01-06-SECTION-COPY.md` (dynamic count based on manifest["sections"])
- Footer: `07-METADATA-FOOTER.txt` (or `{sections+1:02d}-METADATA-FOOTER.txt`)

### Assembly Logic

```python
def _assemble_issue(self, issue_path: Path) -> Tuple[str, str]:
    """Load flat file structure and assemble visual + prose sections."""
    
    manifest = json.loads((issue_path / "manifest.json").read_text())
    section_count = manifest["sections"]  # Read from manifest
    footer_num = section_count + 1
    
    # VISUAL SECTION (act1)
    visual_parts = []
    
    # Load cover
    cover_file = issue_path / "00-COVER-ART.txt"
    if cover_file.exists():
        visual_parts.append(cover_file.read_text().strip())
    
    # Load section visuals (01-06-SECTION-ART.txt)
    for num in range(1, section_count + 1):
        art_file = issue_path / f"{num:02d}-SECTION-ART.txt"
        if art_file.exists():
            visual_parts.append(art_file.read_text().strip())
    
    visual_raw = "\n\n".join(visual_parts)
    
    # PROSE SECTION (act2)
    prose_parts = []
    
    # Load section prose (01-06-SECTION-COPY.md)
    for num in range(1, section_count + 1):
        copy_file = issue_path / f"{num:02d}-SECTION-COPY.md"
        if copy_file.exists():
            prose_parts.append(copy_file.read_text().strip())
    
    # Load footer
    footer_file = issue_path / f"{footer_num:02d}-METADATA-FOOTER.txt"
    if footer_file.exists():
        prose_parts.append(footer_file.read_text().strip())
    
    prose_raw = "\n\n".join(prose_parts)
    
    return visual_raw, prose_raw
```

### Validation Updates

Change from:
```python
check4 = (len(act1) > 500 and "██████╗" in act1 and
          "Design By Bulletin™" in act1 and act1.count("**") >= section_count)
```

To:
```python
check4 = (len(act1) > 500 and "██████╗" in act1 and "Design By Bulletin™" in act1)
```

(Remove hardcoded section count check from act1, since sections are now in manifest)

### Key Changes Summary

| Old (11-section) | New (6-section) |
|-----------------|-----------------|
| Hardcoded manifest structure with "act1"/"act2" | Simple flat manifest with section count |
| Checks for exact 11 sections | Dynamic based on manifest["sections"] |
| Nested section arrays in manifest | Files discovered 01-NN-SECTION-*.txt |
| Footer: `12-METADATA-FOOTER.txt` | Footer: `07-METADATA-FOOTER.txt` (or dynamic) |

## Implementation Priority

**Blocking for Issue 021:** Update `_assemble_issue()` and manifest check logic

**Non-blocking:** Update validation checks (they can be relaxed/simplified)

## Testing

After update, test with:
```bash
python -c "from bulletin_bot_impl import BulletinBot; bot = BulletinBot(); status, _ = bot.validate_phase_2(); print('VALID' if status else 'INVALID')"
```

Should validate Issue 021 with 6 sections successfully.
