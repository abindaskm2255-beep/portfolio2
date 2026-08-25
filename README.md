# Abin — Portfolio (React)

A React + Vite version of the content-writer portfolio: black-and-white
editorial design, Blogs and Web Content sections with thumbnails, a
reader modal, and a contact form.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder, which you can upload to
any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Editing your content

Everything you'll want to change day-to-day lives in one file:

**`src/data/content.js`**

- `blogs` — array of blog entries
- `webcontents` — array of web content entries
- `profile` — your name, headline, about text, email, location, etc.
- `FORMSPREE_ENDPOINT` — where contact form submissions get sent (see below)

To add a new blog or web content card, copy an existing object in the
array and edit the fields:

```js
{
  title: "Your Title",
  tag: "Category · Client",
  desc: "Short description shown on the card.",
  content: "Full text shown when the card is opened.",
  img: "/images/your-thumbnail.jpg", // or "" for no thumbnail
  date: "2026-07-16",
}
```

## Adding thumbnail images

Put image files inside `public/images/`, then reference them in
`content.js` as `/images/your-file.jpg`.

## Connecting the contact form to your email

This is a static site, so it can't send email on its own. It's wired to
use [Formspree](https://formspree.io) (free, no backend needed):

1. Sign up at formspree.io using the email you want submissions sent to.
2. Create a new form — you'll get a URL like `https://formspree.io/f/xxxxxxxx`.
3. Open `src/data/content.js` and replace:
   ```js
   export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint.

Until this is set, the form will show a message saying it isn't connected
yet, instead of failing silently.

## Project structure

```
src/
  components/       UI components (Header, Hero, About, cards, modal, etc.)
  data/content.js   All editable content — blogs, web content, profile
  hooks/            Scroll-reveal animation hook
  App.jsx           Page layout
  index.css         All styling
public/images/      Place your thumbnail images here
```
