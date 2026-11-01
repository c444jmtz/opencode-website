# opencode-website

A single-page music favorites website built with OpenCode for the DS219 class.

## What's on the page

- **Favorite Albums**: Phoebe Bridgers – *Punisher*, Hole – *Live Through This*, Lana Del Rey – *Ultraviolence*
- **Music Recommendations**: Filterable by genre (Indie, Grunge, Dream Pop, Lo-Fi)
- Grungy, dark, city-at-night visual style
- Fully responsive (mobile + desktop) and keyboard accessible

## Local Run

From this directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open **http://localhost:8000** in your browser.

If `python3` is unavailable on Windows, try:

```sh
py -m http.server 8000 --bind 127.0.0.1
```

Stop the server with `Ctrl+C`.

## Files

- `index.html` — page markup
- `style.css` — all styles
- `script.js` — genre filter interaction
- `AGENTS.md` — project constraints
- `README.md` — this file

## Tech

No dependencies. No CDN. No frameworks. Just HTML, CSS, and vanilla JavaScript.
