# Pree's Playroom Website

A warm, one-page marketing site for Pree's Playroom — the first chapter of the
growing **Pree's Playbook** (future: online child psychology sessions, baby
food/product recommendations, workshops, and more).

Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` in a
browser or deploy as-is to any static host.

Live at: https://preesplaybook.com/

## Contact setup (already configured)

- **WhatsApp**: the floating button and contact section both link to
  `+971 55 470 9197`.
- **Contact form**: posts to Formspree (`https://formspree.io/f/xvzjlvog`),
  which forwards submissions to `preesplaybook@gmail.com`. Make sure that
  inbox has confirmed the Formspree verification email, or submissions
  won't be delivered.
- **Fallback email** shown on the page: `preesplaybook@gmail.com`.
- **Instagram**: header icon, the "Follow Along" section, and the footer all
  link to `https://www.instagram.com/pree.s.playbook/`.

To change any of these later: search `index.html` for `wa.me`,
`preesplaybook@gmail.com`, or `instagram.com` respectively. The error message
using the fallback email is in `js/main.js`. To point the form at a
different inbox, create a new form at formspree.io and swap the `action`
URL in `index.html`.

## Deploying

Pushing to the `claude/prees-playbook-website-ygikvl` branch auto-deploys via
the GitHub Actions workflow in `.github/workflows/deploy-pages.yml` — it
copies the whole repo (minus dev-only files) to GitHub Pages. No manual
"deploy from branch" step needed; the repo's Pages source is already set to
"GitHub Actions" in Settings → Pages.

**Cache-busting**: `index.html` links `css/style.css` and `js/main.js` with a
`?v=N` query string. Bump `N` on every commit that changes either file, or
GitHub Pages' CDN / mobile browsers may keep serving a stale cached copy.

## Structure

```
index.html         All page content/sections
css/style.css       Styling (warm palette, layout, responsive rules)
js/main.js          Mobile nav toggle, form submission, back-to-top,
                     WhatsApp greeting bubble
assets/photos/      Real photography used throughout the page
.github/workflows/  Auto-deploy to GitHub Pages on push
```
