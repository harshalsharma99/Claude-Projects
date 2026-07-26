# Project notes for Claude

## About the owner
- Product manager, non-technical background — new to coding, GitHub, and git
  concepts (repos, branches, commits, PRs, etc.).
- Wants to learn as we go: explain what's being done and why in plain
  language, avoid unexplained jargon.
- Comfortable delegating small/routine technical decisions (file structure,
  naming, minor styling choices) without asking first — only flag decisions
  that meaningfully change direction, cost money, or are hard to reverse.

## Project
- "Pree's Playroom" website — a one-page marketing site (plain HTML/CSS/JS,
  no build step). See README.md for what it is and setup steps.
- Brand context: Pree's Playroom is the current home-based play sessions
  business; it's positioned as "chapter one" of a broader future brand,
  "Pree's Playbook" (planned: online child psychology sessions, baby
  product recommendations, workshops).
- Cache-busting: index.html links css/style.css and js/main.js with a
  `?v=N` query string. GitHub Pages' CDN and mobile browsers cache these
  aggressively, which has caused the owner to see stale layouts after a
  deploy. Bump `N` on every commit that changes style.css or main.js so
  visitors always get the latest version instead of a stale cached copy.
