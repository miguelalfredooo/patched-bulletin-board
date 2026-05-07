<style>
body, code, pre, p, h1, h2, h3, h4, h5, h6, li, table {
  font-family: 'Courier New', Courier, monospace;
}
</style>

# Design By Bulletin™

A curated editorial publication for designers covering art, design, AI culture, photography, and illustration.

## What This Is

Design By Bulletin is a thematic publication system that combines:
- **ASCII art covers** — Generated from source images via image-to-ASCII conversion
- **Curated editorial** — 11 sections (Art, Painting, Illustration, Sculpture, Culture, Photography, Art History, Opinions, Design & AI Tools, Product & Process, Visual & Brand)
- **Parametric control** — Editorial Mix (six intensity faders for theme composition)
- **Multi-format delivery** — Telegram integration with cover image + pure text content + theme metadata

## Getting Started

### Create a New Issue

1. **Define the theme** — Choose a concept and establish editorial direction
2. **Generate ASCII cover** — Use the interactive converter or CLI script
3. **Curate 11 sections** — Select source + write one-sentence narrative per section
4. **Deliver** — One command sends everything to Telegram

See **[SETUP.md](SETUP.md)** for detailed workflow.

### Explore the System

- **[DESIGN-BY-BULLETIN.md](DESIGN-BY-BULLETIN.md)** — Complete system documentation
- **[TOOLS.md](TOOLS.md)** — All production scripts and commands
- **[SETUP.md](SETUP.md)** — Setup, configuration, issue creation

## Tech Stack

- **ASCII Generation:** HTML5 canvas + p5.js (browser) / Node.js + sharp (CLI)
- **Image Processing:** sharp library for SVG-to-PNG rendering
- **Color Sampling:** ANSI 24-bit codes for image-informed ASCII
- **Delivery:** Telegram Bot API via HTTPS multipart form-data

## Current Issues

- **Issue 006: MOMENTUM** (2026-05-09) — Velocity as cultural acceleration

## Project Structure

```
bulletin-board/
├── README.md                           [This file]
├── DESIGN-BY-BULLETIN.md               [System documentation]
├── SETUP.md                            [Setup & issue creation]
├── TOOLS.md                            [Production scripts]
│
├── covers/
│   ├── ascii-cover-generator.html      [Interactive converter]
│   └── momentum-006-cover.png          [Latest cover]
│
├── ISSUE-006-*.txt                     [Pure text issues]
│
├── export-ascii-cover.js               [CLI cover generator]
├── finalize-issue-006-delivery.js      [Telegram delivery]
│
└── framework/                          [Patched framework docs]
    ├── PATCHED.md                      [Framework philosophy]
    └── PATCHED-EXAMPLE.md              [Framework example]
```

## Operator

Alfred — art editor, designer, creative director.

---

## Framework & Philosophy

This project is built using the **Patched framework** — a modular approach to designing AI-driven experience systems. See **[framework/PATCHED.md](framework/PATCHED.md)** for the philosophy and vocabulary.

Patched repo: github.com/miguelalfredooo/patched (private)
