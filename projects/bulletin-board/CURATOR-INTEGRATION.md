# Curator Integration — Design By Bulletin

## Overview

The Curator agent is an active content discovery and validation layer added to the Design By Bulletin editorial pipeline.

**What it does:** Discovers URLs from diverse sources (publications, Bluesky, Reddit, Substack, etc.), validates them, scores them, and reports findings to the Assignment Editor.

**Why:** Automated URL validation saves the Assignment Editor time, ensures all reported content is accessible and has complete metadata, and surfaces emerging signals from community platforms before they're "official."

## New Workflow

```
Previous:
Assignment Editor → scouts for ideas → Managing Editor → Editorial Director → Bot

New:
Curator (discovers + validates URLs daily)
    ↓ [7:30am report with validated URLs + metadata + scores]
Assignment Editor (editorial judgment: which fit today's theme?)
    ↓ [commissions pieces based on curator's findings]
Managing Editor (develops narratives)
    ↓
Editorial Director (final approval)
    ↓
Bot (Telegram delivery)
```

## Curator Responsibilities

1. **Research** — Daily scan of publications, Bluesky, Reddit, Substack, Medium, GitHub
2. **Validate** — Check URL accessibility, extract metadata, verify real articles (not paywalls/homepages)
3. **Score** — Apply 4-dimension rubric (relevance, credibility, freshness, title integrity)
4. **Report** — Daily report to Assignment Editor with PASSED (7+), FLAGGED (5-7), and reasoning

## Research Sources

**Traditional publications:**
- Frieze, Artforum, Art Newspaper, Design Observer, Eye on Design
- The New Yorker, Aeon, Wired, Hyperallergic

**Community platforms:**
- Bluesky (design threads, critic accounts)
- Reddit (r/Design, r/Architecture, r/CyberpunkAesthetics, r/DesignThinking)

**Independent voices:**
- Substack (design newsletters)
- Medium (design essays, UX research)
- GitHub (design system discussions)
- Personal blogs, podcast transcripts

## Daily Report Format

**7:30am PT — Curator sends to Assignment Editor:**

```
CURATOR REPORT — [Date]

VALIDATED URLS (Score 7.0+)
1. [Title]
   URL: https://...
   Source: [Publication]
   Score: 7.5/10
   Why it matters: [1 line]
   Published: [date]
   Author: [name]

FLAGGED FOR REVIEW (Score 5.0-6.9)
1. [Title]
   Score: 6.2/10
   Concern: [specific issue]

SUMMARY
Evaluated: X | Passed: Y | Flagged: Z | Rejected: W
```

## Scoring Rubric

| Dimension | 8-10 | 5-7 | <5 |
|-----------|------|-----|-----|
| **Relevance** | Clear design fit, rigor, specific | Borderline relevance | Generic, hype-focused |
| **Credibility** | Known source or high community signal | Emerging voice, some engagement | Unknown author, low engagement |
| **Freshness** | <30 days old | 30-90 days old | >90 days old |
| **Title Integrity** | Accurate, clear | Minor oversell | Clickbait, misleading |

**Decision:**
- **7.0+:** PASS → Report to Assignment Editor
- **5.0-6.9:** FLAG → Report with concerns, editor decides
- **<5.0:** REJECT → Don't report

## Integration Points

**Curator reports to:** Assignment Editor (daily at 7:30am PT)

**Assignment Editor uses:** Curator's validated URLs as starting point for daily editorial decisions

**Curator uses:** Claude Sonnet 4.6 for content scoring

**Tools:** Web scraping (requests + BeautifulSoup), metadata extraction, quality validation (run_curator function)

## Feedly Boards Integration (Added)

The Curator now augments daily discovery with curated Feedly boards.

### Setup

1. **Feedly Account:**
   - Create free Feedly account (feedly.com)
   - No API key needed
   - Free tier is sufficient

2. **Board Setup:**
   - Create "Curator's Daily" board
   - Add 40-50 curated feeds (see FEEDLY-BOARD-SETUP.md)
   - Create topic-focused boards for team reference (Design Systems, AI in Practice, etc.)

### Daily Workflow (Updated)

```
7:30am PT Trigger:

1. FEEDLY BOARD BROWSE
   └─ Log into Feedly, open "Curator's Daily" board
      └─ Review newest items (50-100+ from curated feeds)

2. COMBINE WITH MANUAL DISCOVERY
   ├─ Feedly board items → validation queue (marked "source=Feedly board")
   └─ Manual items → validation queue (marked "source=Manual")

3. VALIDATE ALL ITEMS
   ├─ Check URL accessibility
   ├─ Extract metadata
   └─ Detect paywalls/homepages

4. SCORE & REPORT
   ├─ Apply 4-dimension rubric
   ├─ Generate daily report
   └─ Separate results by source
```

### Report Format Change

The daily report now labels each item's source:

```
CURATOR REPORT — May 7, 2026

VALIDATED URLS (Score 7.0+)

From Feedly Board:
1. Design Systems in 2026
   URL: https://frieze.com/...
   Source: Frieze
   Score: 7.8/10
   Author: Jane Doe

From Manual Discovery:
1. The Future of AI in Design
   URL: https://medium.com/...
   Source: Medium
   Score: 7.3/10
   Author: John Smith

FLAGGED FOR REVIEW (Score 5.0-6.9)
[same source labels]

SUMMARY
Evaluated: 127 (87 from Feedly board, 40 manual)
Passed: 14 | Flagged: 3 | Rejected: 110
```

### Feedly Board Maintenance

The Curator maintains "Curator's Daily" board:
- **Weekly:** Spot-check newest items for signal quality
- **Monthly:** Review which feeds surface high-quality content
- **Quarterly:** Remove underperforming feeds, add new sources

See FEEDLY-BOARD-SETUP.md for detailed guidance.

### Team Board Access

All team members have Feedly login:
- **Assignment Editor:** Browses topic boards for editorial themes
- **Managing Editor:** References boards for context and research
- **Editorial Director:** Reviews boards for competitive landscape and trends

Boards serve as persistent knowledge base, not just daily workflow.

## Files

**Curator workspace:** `/Users/blackmachete/.openclaw/workspace-bulletin-curator/`
- SOUL.md — Curator personality
- AGENTS.md — Operating instructions
- TOOLS.md — Validation functions reference
- curator_validation.py — Main skill implementation
- README.md — Complete documentation

**Updated Assignment Editor workspace:**
- AGENTS.md — Now includes section on working with Curator

**Main bulletin-board docs:**
- This file (CURATOR-INTEGRATION.md)

## Example Usage

```python
from curator_validation import run_curator
from anthropic import Anthropic

client = Anthropic()

# Validate a single URL
result = run_curator(
    candidate_url="https://frieze.com/article/design-systems",
    platform="frieze",
    claude_client=client
)

if result["status"] == "ready_for_editor":
    # Add to PASSED items in daily report
elif result["status"] == "flagged_for_review":
    # Add to FLAGGED items in daily report
elif result["status"] == "rejected":
    # Don't report (save editor time)
```

## Next Steps

1. ✅ Create curator workspace with SOUL.md, AGENTS.md, TOOLS.md
2. ✅ Implement curator_validation.py skill
3. ✅ Update Assignment Editor AGENTS.md with curator integration
4. ⏭️ Set up daily 7:30am curator report trigger
5. ⏭️ Test validation pipeline with sample URLs
6. ⏭️ Run first curator report and gather Assignment Editor feedback

## Related Documentation

- Assignment Editor role: `/Users/blackmachete/bulletin-board/SOUL-CURATOR.md`
- Workflow details: `/Users/blackmachete/bulletin-board/AGENT-WORKFLOWS.md`
- Main Editorial Director docs: `/Users/blackmachete/bulletin-board/AGENTS.md`
