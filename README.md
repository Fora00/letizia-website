# letiziamancini.it

Sito di Letizia Mancini — chinesiologa clinica e personal trainer a Trento e Rovereto.

Static site: **Astro 5 + Tailwind CSS 4** (via `@tailwindcss/vite`), deployed to GitHub Pages
by `.github/workflows/deploy.yml` (push to `main`, manual, or weekly cron — the cron keeps
newsletter posts and past-event filtering fresh).

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on `localhost:3000` (LAN-exposed via `--host`) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the build |
| `npm run fetch-posts` | Refresh `src/data/newsletter-posts.json` from the Substack RSS feed |

## Structure

- `src/layouts/LayoutV5.astro` — head/meta/JSON-LD (Person, LocalBusiness, breadcrumbs), theme init, skip-link
- `src/pages/` — one `.astro` file per page (Italian slugs); `eventi/[slug].astro` builds from `src/data/events.ts`
- `src/components/v5/` — current Navbar/Footer/Section; `v2/` Substack components still in use
- `src/data/events.ts` — events with `dateISO`; past events are filtered/labeled at build time
- `src/styles/global.css` — Tailwind theme tokens (v5 palette), focus/motion a11y rules
- `public/llms.txt` — entity summary for AI search engines
- `ROADMAP.md` — **living roadmap + values constraints. Read it before making changes.**

## Note

Letizia's positioning rejects aggressive marketing (no urgency, popups, dark patterns).
Every change must pass the values filter at the top of `ROADMAP.md`.
