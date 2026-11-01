# AGENTS.md — Project Constraints

This file documents the rules for coding agents working in this repository.

## Scope

- This is a **single-page static website** built for the DS219 class activity.
- Serves **only on localhost** (e.g., `http://localhost:8000`).
- **No deployment**, no Cloudflare Workers, no external hosting, no domain, no payments.

## Files

- `index.html` — semantic HTML markup only.
- `style.css` — hand-written CSS, no frameworks, no CDN.
- `script.js` — vanilla JS, no libraries or dependencies.
- `README.md` — run instructions for serving locally.
- `AGENTS.md` — this file.
- `.gitignore` — ignores `.env`, `node_modules/`, `.DS_Store`.

## Requirements

- Must work at **both mobile (~375px) and desktop widths** without horizontal scrolling.
- **Keyboard accessible**: all interactive elements reachable and activatable via Tab + Enter/Space.
- **No external dependencies**: no CDN links, no npm packages, no fonts from Google Fonts.
- **No credentials**: never commit API keys, tokens, or `.env` files.
- Keep all work **inside this repository** (no creating files outside the project root).

## Local Run

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://localhost:8000` in a browser.

## Style

- Black-and-white DIY punk flyer and photocopied zine aesthetic.
- Distressed typography, rough borders, and asymmetrical layouts.
- Vinyl-inspired album artwork and Spotify links.
- Keep mobile responsiveness and keyboard accessibility.