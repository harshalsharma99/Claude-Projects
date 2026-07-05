# Pree's Playroom Website

A warm, one-page marketing site for Pree's Playroom — the first chapter of the
growing **Pree's Playbook** (future: online child psychology sessions, baby
food/product recommendations, workshops, and more).

Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` in a
browser or deploy as-is to any static host.

## Contact setup (already configured)

- **WhatsApp**: button links to `+971 55 470 9197`.
- **Contact form**: posts to Formspree (`https://formspree.io/f/xvzjlvog`),
  which forwards submissions to `preesplaybook@gmail.com`. Make sure that
  inbox has confirmed the Formspree verification email, or submissions
  won't be delivered.
- **Fallback email** shown on the page: `preesplaybook@gmail.com`.

To change any of these later: the WhatsApp link and fallback email live in
`index.html` (search for `wa.me` and `preesplaybook@gmail.com`); the error
message using the fallback email is in `js/main.js`. To point the form at a
different inbox, create a new form at formspree.io and swap the `action`
URL in `index.html`.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
For GitHub Pages: Settings → Pages → deploy from the `main` branch, root
folder.

## Structure

```
index.html       All page content/sections
css/style.css    Styling (warm palette, layout, responsive rules)
js/main.js       Mobile nav toggle, form submission handling
```
