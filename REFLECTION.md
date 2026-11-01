\# DS219 Assignment 5 — Reflection



\## Project

I built Stereo Angel, a one-page music website using OpenCode. It features my favorite albums by Phoebe Bridgers, Hole, and Lana Del Rey, as well as genre-filtered song recommendations and links to Spotify. I designed it around a black-and-white DIY punk flyer aesthetic.



\## AI Model

I used OpenCode with CatJam, which identified itself as a model from LitterBox AI. After it seemed to disconnect, I connected my ChatGPT account.



\## Tool Action Observed

I observed OpenCode inspect and modify the website files, including `index.html`, `style.css`, and `script.js`, to implement changes I requested.



\## Problem and Improvement

While testing the website, I found that some music recommendations were inaccurate. For example, "Stranger in the Alps" was listed as a song instead of an album, and "Sunny" was incorrectly assigned to Phoebe Bridgers, although no such song exists. The Dream Pop recommendations also did not accurately represent the genre.



I asked OpenCode to correct the recommendations. It updated the song data in `script.js`, replacing inaccurate entries with real songs and more appropriate genre classifications.



\## Verification

I refreshed the website at `http://127.0.0.1:8000/` and tested the genre filters, album covers, and responsive layout. The updated recommendations appeared correctly, the filters worked, and the layout remained usable.



\## What I Learned

OpenCode made it easier to build and improve a website without writing every line manually. However, the experience showed me why testing AI-generated work is important. Even when the code functions, the content can contain mistakes that need to be identified and corrected.

