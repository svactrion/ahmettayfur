# ahmettayfur.com

Personal site. Astro, no database, no server. Every page is plain HTML by the time it reaches a visitor.

## Running it on your machine

You need Node.js 18 or newer once. Get it from nodejs.org (LTS version), run the installer, restart your terminal.

```bash
cd site
npm install     # once, downloads Astro
npm run dev     # starts the site at http://localhost:4321
```

Leave `npm run dev` running while you work. Save a file, the browser updates itself. Ctrl+C stops it.

## Where things are

```
src/data.js                  Email, LinkedIn, GitHub, App Store link. Edit here, updates everywhere.
src/layouts/Base.astro       Shared header, footer, and all the CSS.
src/pages/index.astro        Home page
src/pages/products/          Product pages
public/                      Images and files served as-is (favicon, screenshots)
```

Adding a page means adding a file in `src/pages/`. The file path becomes the URL:
`src/pages/notes.astro` is served at `/notes`.

## Publishing

Pushing to the `main` branch on GitHub triggers a build on Cloudflare Pages, which publishes
automatically. There is no separate deploy step.

Cloudflare Pages build settings:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

## Before the App Store submission

`/products/grammarlens/privacy` and `/products/grammarlens/support` must be live and loading before
you submit. Apple's reviewers open both.
