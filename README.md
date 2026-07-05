# Pree's Playroom Website

A warm, one-page marketing site for Pree's Playroom — the first chapter of the
growing **Pree's Playbook** (future: online child psychology sessions, baby
food/product recommendations, workshops, and more).

Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` in a
browser or deploy as-is to any static host.

## Before you launch: 2 things to configure

### 1. WhatsApp number
In `index.html`, find the "Chat on WhatsApp" button and replace the
placeholder number with your real one (country code, no `+` or spaces):

```html
<a class="btn btn-whatsapp" href="https://wa.me/10000000000?text=...">
```

Example: for +1 555 123 4567 → `https://wa.me/15551234567?text=...`

### 2. Contact form → your email (Formspree)
The contact form posts to Formspree, a free service that forwards form
submissions straight to your inbox — no backend required.

1. Go to https://formspree.io and sign up (free tier is plenty).
2. Create a new form, and copy the form endpoint it gives you
   (looks like `https://formspree.io/f/abcd1234`).
3. In `index.html`, replace `YOUR_FORM_ID` in this line with your real ID:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Confirm your email address when Formspree sends the verification message.

That's it — submissions will land in your inbox, and the page shows a
friendly confirmation message without leaving the site.

Also update the fallback email address (`hello@preesplayroom.com`) in
`index.html` and in `js/main.js`'s error message to your real inbox.

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
