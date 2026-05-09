# Design By Bulletin™ — Web Search Integration for Material Curation

**Purpose:** Integrate OpenClaw web search tool to automatically discover and curate design materials for Issue 021+ with Material Culture Studies focus

**Status:** Planning phase  
**Reference:** https://docs.openclaw.ai/tools/web#web-search

---

## Goal

Enable the **Art Department** to use web search via OpenClaw to:
1. Discover design content about material culture, objects, and craft
2. Evaluate pieces systematically for curation
3. Build curated reports with sourced URLs
4. Automate the monitoring of design sources

**Outcome:** Faster curation cycle with richer sourced material for each issue

---

## OpenClaw Web Search Tool

### Available Search Providers

OpenClaw provides multiple web search integrations:

- **Web Search** (default) — General purpose search
- **Brave Search** — Privacy-focused search engine
- **DuckDuckGo Search** — Privacy-oriented alternative
- **Exa Search** — AI-powered semantic search (best for design content)
- **Perplexity Search** — AI-enhanced search with citations
- **Tavily** — AI research assistant (best for deep research)
- **Firecrawl** — Web scraping and content extraction
- **Gemini Search** — Google-powered search
- **Grok Search** — X/Twitter-based search
- **Kimi Search** — Chinese search integration
- **MiniMax Search** — Alternative AI search
- **Ollama Web Search** — Self-hosted local search
- **SearXNG Search** — Federated metasearch

**Recommendation for Design Curation:** Use **Exa Search** (semantic) or **Tavily** (research-focused) for best results finding thematic design content.

---

## Integration Points for Design By Bulletin™

### 1. Art Department Curation Workflow

**Current Workflow:**
```
Editorial Brief Written → Manual source monitoring → Curate 14-16 pieces → Write report
```

**Enhanced Workflow with Web Search:**
```
Editorial Brief Written → Automated web search → Art Dept evaluates results → 
Curate 14-16 pieces → Write report with sourced URLs
```

### 2. Proposed Implementation

#### A. Curation Search Script (`art-department-search.py`)

```python
#!/usr/bin/env python3
"""
Art Department Web Search Tool
Finds design materials matching editorial brief themes
"""

import json
from pathlib import Path
from datetime import datetime

class CurationSearchEngine:
    def __init__(self, theme: str, search_provider: str = "exa"):
        """
        Initialize search for issue curation
        
        Args:
            theme: Editorial theme (e.g., "Material Culture")
            search_provider: "exa", "tavily", or "web"
        """
        self.theme = theme
        self.provider = search_provider
        self.results = []
        
    def search_for_section(self, section: str, angle: str) -> list:
        """
        Search for content matching a specific section's angle
        
        Args:
            section: Section name (e.g., "Material Culture Studies")
            angle: Specific angle (e.g., "craftsmanship and objects")
            
        Returns:
            List of relevant URLs with descriptions
        """
        # Use OpenClaw web search tool via API
        # Query construction based on section focus
        query = self._build_query(section, angle)
        results = self._execute_search(query)
        return results
    
    def _build_query(self, section: str, angle: str) -> str:
        """Build semantic search query"""
        base = f"{self.theme} design {section}"
        specific = f"{angle}"
        return f"{base}: {specific}"
    
    def _execute_search(self, query: str) -> list:
        """
        Execute search using OpenClaw tool
        
        Pseudo-code:
        1. Call OpenClaw web search API with query
        2. Filter results for design/creative context
        3. Extract: URL, title, description, publication date
        4. Return structured results
        """
        pass
    
    def generate_curated_report(self, selections: list) -> dict:
        """
        Generate Art Department report from curated selections
        """
        report = {
            "issue": datetime.now().strftime("%Y-%m-%d"),
            "theme": self.theme,
            "search_provider": self.provider,
            "sections": {}
        }
        
        for section, pieces in selections.items():
            report["sections"][section] = {
                "count": len(pieces),
                "pieces": pieces,
                "sources": [p.get("source_url") for p in pieces]
            }
        
        return report
```

#### B. Search Query Templates (by Section)

**Section 1: Visual Thinking**
```
queries:
  - "material design visual perception texture surface"
  - "design craft material properties aesthetic"
  - "material finish surface treatment design"
```

**Section 2: Cultural Context**
```
queries:
  - "material culture design tradition sustainability"
  - "cultural meaning objects materials design"
  - "material ethics design sustainability culture"
```

**Section 3: Critical Thinking**
```
queries:
  - "material design history evolution innovation"
  - "material literacy design thinking theory"
  - "design history materials craft traditions"
```

**Section 4: Tools & Innovation**
```
queries:
  - "material technology tools design innovation"
  - "digital tools material analysis exploration"
  - "AI materials design technology innovation"
```

**Section 5: Systems & Application**
```
queries:
  - "material specification manufacturing design systems"
  - "supply chain materials product design"
  - "material systems real-world application constraints"
```

**Section 6: Material Culture Studies** ⭐
```
queries:
  - "objects making craft material culture design"
  - "craftsmanship materials objects design"
  - "material objects cultural significance artifacts"
  - "maker culture craft materials design"
```

---

## Implementation Steps

### Phase 1: Setup & Configuration (This week)

1. **Configure Web Search Provider**
   - Choose: Exa (semantic) or Tavily (research) or Web (default)
   - Set API keys in OpenClaw gateway config
   - Test search functionality

2. **Create Curation Search Script**
   - Build `art-department-search.py`
   - Add section-specific query templates
   - Test with known design themes

3. **Integrate with Issue Workflow**
   - Add search step to Art Department AGENTS.md
   - Document: "Before manual curation, run automated search"

### Phase 2: Art Department Testing (Next issue)

1. **Issue 021 Test Workflow**
   - Editorial Director writes brief
   - Run: `python art-department-search.py --theme "Material Culture" --issue 021`
   - Search returns 30-50 results across 6 sections
   - Art Department evaluates and selects best 14-16 pieces

2. **Evaluation Process**
   - Use search results to inform curation
   - Verify quality of sources
   - Document why each piece was selected
   - Track: searched → evaluated → curated ratio

3. **Feedback Loop**
   - Monitor: Did search results help or distract?
   - Adjust: Query terms, providers, or scope
   - Optimize: For next issue

### Phase 3: Full Integration (Ongoing)

1. **Automate Source Monitoring**
   - Track favorite design publications/blogs
   - Daily search for new content on theme
   - Alert Art Department to trending pieces

2. **Build Curation Index**
   - Store all curated pieces + search queries
   - Create searchable archive by theme
   - Identify recurring sources and patterns

3. **Enhanced Reporting**
   - Auto-generate curation report with source metrics
   - Show: Search results → Selected pieces → Section placement
   - Track curator decisions over time

---

## Quick Integration Example

### For Issue 021: Material Culture

```bash
# 1. Search for Material Culture content
python art-department-search.py \
  --theme "Material Culture" \
  --issue 021 \
  --sections 6 \
  --provider "exa"

# Output: 
# ✓ Found 12 pieces for Section 1: Visual Thinking
# ✓ Found 8 pieces for Section 2: Cultural Context
# ✓ Found 15 pieces for Section 3: Critical Thinking
# ✓ Found 10 pieces for Section 4: Tools & Innovation
# ✓ Found 9 pieces for Section 5: Systems & Application
# ✓ Found 14 pieces for Section 6: Material Culture Studies ⭐
# Total: 68 pieces across all sections

# 2. Art Department reviews results
# File: issues/021/web-search-results.json

# 3. Art Department selects 14-16 best pieces
# File: issues/021/art-department-curation.md
```

---

## Benefits

### For Art Department
- **Faster discovery** — Find relevant pieces in minutes vs hours
- **Wider reach** — Monitor multiple sources simultaneously
- **Better quality** — Filter by relevance and freshness
- **Documented sourcing** — Track where pieces came from

### For Editorial Process
- **Consistent sourcing** — Same methodology each issue
- **Better narrative** — Search terms reflect editorial angles
- **Reproducible** — Can replicate successful searches
- **Scalable** — Same process works for any theme

### For Material Culture Studies (Section 6)
- **Specialized queries** — "Objects," "craft," "making," "material"
- **Rich sources** — Design blogs, maker platforms, craft publications
- **Authenticity** — Find actual practitioners and craftspeople
- **Depth** — Go beyond visual design to process and philosophy

---

## Search Provider Comparison

| Provider | Best For | Strengths | Cost |
|----------|----------|-----------|------|
| **Exa** | Semantic design search | AI-powered, understands design intent | API |
| **Tavily** | Deep research | Citations, source verification | API |
| **Perplexity** | AI synthesis | Combines search + AI answer | API |
| **Web** | Default general search | Broad coverage, fast | Free |
| **Brave** | Privacy + breadth | No tracking, comprehensive | Free |
| **DuckDuckGo** | Privacy alternative | Clean results, fast | Free |

**Recommendation:** Start with **Exa** for semantic understanding of design content, or **Tavily** for verification of sources.

---

## Configuration Template

### OpenClaw Gateway Config

```yaml
# openclaw.yml or gateway config
plugins:
  entries:
    web-search:
      provider: "exa"  # or "tavily", "web", "brave"
      config:
        api_key: "${EXA_API_KEY}"  # Set in .env
        max_results: 20
        search_type: "semantic"  # For Exa
        include_summary: true
```

---

## Next Steps

1. **This week:** Review OpenClaw web search documentation
2. **Next week:** Configure chosen provider (Exa or Tavily)
3. **Following week:** Create `art-department-search.py` script
4. **Issue 021:** Test with Material Culture theme
5. **Ongoing:** Refine queries and integrate into daily workflow

---

## Related Files

- OpenClaw docs: https://docs.openclaw.ai/tools/web
- Art Department AGENTS.md: `/Users/blackmachete/.openclaw/workspace-bulletin-art-department/AGENTS.md`
- Curation Framework: `/Users/blackmachete/.openclaw/workspace-bulletin-art-department/EVALUATION-FRAMEWORK.md`

---

*Generated: May 8, 2026*  
*Purpose: Enable automated web search for Issue 021+ curation*
