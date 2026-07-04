# Opus-will-do.md — Roadmap & handoff for letiziamancini.it

> Any model/session picks up from here. Work top-to-bottom inside a section, check boxes
> as you go, keep this file updated. Be token-frugal: delegate mechanical edits to Haiku,
> verify with `npm run check` + `npm run build`.

## Status at a glance (2026-07-04)

**All self-serve repo work is DONE.** Build green (13 pages), `astro check` 0 errors,
CI type-checks before deploy, weekly rebuild cron keeps newsletter + event filtering fresh.
What remains needs either a decision from Letizia (content ideas), off-site action
(Francesco/Letizia), or the domain migration to happen.

**Hosting:** GitHub Pages temp URL (fora00.github.io/letizia-website) — intentionally
noindexed until the move to letiziamancini.it (auto-detects origin, flips itself off).
Canonical email: letiziamancini.chinesiologa@gmail.com. Sedi: Trento Via Brescia 15,
Rovereto Via Brione 39.

---

## Values filter (non-negotiable — every change passes this)

- NO conventional/aggressive marketing: no fake urgency, countdowns, interrupting popups,
  "lose X kg fast" copy, dark patterns, exit-intent traps.
- Client acquisition = trust: education (newsletter, workshops), transparency (free 30-min
  consult, "nessun impegno"), health-first inclusive language (chronic conditions, DCA,
  older adults).
- Tone: caring, professional, plain Italian. Quotable factual sentences (good for GEO too).

---

## OPEN — content ideas (discuss with Letizia BEFORE building)

Ordered by expected value:

- [ ] **Educational glossary/pillar pages** — "Cos'è la chinesiologia clinica?", "Cos'è
      l'Attività Fisica Adattata?", "Movimento e DCA: come lavoro". Self-contained,
      quotable, FAQ schema each. The #1 GEO lever: today 100% of her article content
      lives on Substack, so AI search attributes her expertise to substack.com.
- [ ] **Audience landing pages** — one per audience (patologie croniche / DCA / dolore
      osteoarticolare / gravidanza / terza età) with own title, FAQ, Service schema.
      Captures long-tail local queries ("attività fisica adattata Trento"), zero ad spend.
- [ ] **"Come funziona il percorso" section** (home or cosa-offro): 4 transparent steps —
      consulenza gratuita → valutazione → programma su misura → verifiche periodiche.
      (Already exists in English on /en — translate/adapt.)
- [ ] **"Dove ricevo" studio blocks** — photo, parking/transit, maps link for BOTH sedi
      (assets exist in letizia_asset/). Local SEO + lowers the barrier for anxious
      first-timers.
- [ ] **On-domain newsletter archive** — short summaries per Substack post, canonical
      link out.
- [ ] **"Per i professionisti" page** (medici, dietisti, psicoterapeuti): how referrals
      work — the trust-network channel she actually wants.
- [ ] **Per-page OG images** (Astro + satori) — nicer WhatsApp shares.
- [ ] **Testimonials**: keep real quotes only, never incentivized.

## OPEN — off-site (Francesco/Letizia, not repo work)

- [ ] Google Business Profile for BOTH sedi (map listing, not ads); NAP identical to site.
- [ ] Google Search Console + Bing Webmaster: verify domain, submit sitemap-index.xml
      (after migration).
- [ ] Plausible dashboard: create goal "prenota-consulenza" (site already tags the CTAs).
- [ ] Consistent NAP on Instagram/LinkedIn bios; Substack About/footer links back to
      letiziamancini.it.
- [ ] Gentle, non-incentivized Google-review asks.
- [ ] Ask Letizia: publish phone number? (LocalBusiness `telephone` + possible WhatsApp
      link are ready to add once she OKs.)

## OPEN — domain migration checklist (when letiziamancini.it goes live, do ALL)

Full step-by-step lives in the vault: `Personal/What/Website/Letizia/deployment-guide.md`.
Decided plan (2026-07-04): Aruba registrar → Cloudflare DNS → GitHub Pages custom domain
(Cloudflare Pages rejected as needless friction; proxy gives edge headers if ever needed).

- [ ] Aruba: delegate NS to Cloudflare; Cloudflare DNS: 4× A + 4× AAAA on apex to GH
      Pages IPs + `www CNAME fora00.github.io` (DNS-only until GH cert is provisioned).
- [ ] Repo Settings → Pages: custom domain letiziamancini.it + Enforce HTTPS; verify
      domain at the GitHub account level (anti-takeover TXT).
- [ ] astro.config.mjs: `site: 'https://letiziamancini.it'` unconditionally, remove
      `base: '/letizia-website'`.
- [ ] Verify noindex is GONE from live pages (view-source: no meta robots) and
      robots.txt now serves the sitemap line.
- [ ] Google Search Console: verify domain, submit sitemap-index.xml.
- [ ] Point GBP, Instagram/LinkedIn/Facebook bios, Substack About at letiziamancini.it.
- [ ] Leave the GH Pages URL serving (it 301s automatically once the custom domain is set).
- [ ] Nice-to-have: hreflang alternates between / and /en (deferred until real domain).

---

## DO NOT (re)do — rejected ideas & gotchas

Rejected (violate values or not worth it — don't re-propose):
- Instagram feed embed (3rd-party JS weight, no SEO value).
- Calendly inline embed on contatti (3rd-party cookies vs privacy stance; outbound link
  is the right tradeoff).
- Exit-intent popups, countdowns, "posti limitati" badges.
- Font diet: @fontsource splits by unicode-range — browsers already download only the
  latin subsets. The 14 woff2 files in dist are harmless.
- WhatsApp button: fine in principle but requires publishing her number — ASK FIRST.

Deferred with reason:
- .ics "add to calendar": event dates are month-precision ("Giugno 2026"). A guessed day
  would be quietly wrong = anti-trust. Implement only with confirmed exact dates (then
  tighten dateISO to the real day and show it on the page).

Gotchas learned the hard way:
- Section component's `title` prop renders an h2 — raw grep on a page can't see
  component-rendered headings (chi-sono "missing h2" was a false alarm).
- 2026-07-03: edits to events.ts / eventi pages / 404 were applied and reverted twice by
  concurrent sessions. If a change seems to vanish, check for another live session before
  re-applying.

---

## DONE — changelog (newest first; details in git history)

**2026-07-04 (round 3 — final audit & polish):**
- Astro 5.16.15 → 5.18.2 (`npm update`), check + build green. The 2 remaining npm-audit
  advisories need Astro 7 (breaking major) and none apply to a fully static GH Pages
  site (server islands / SSR / Windows dev server) — revisit only at the Astro 7 bump.
- Full-site audit (see git log / session notes): 1 h1 per page, all imgs have alt,
  zero JS bundles shipped, dist 2.1 MB total. Clean bill on a11y/SEO/perf statics.
- CookieBanner: reserves body padding-bottom while visible (resize-aware, cleared on
  accept) — no longer hides bottom content / back-to-top on small viewports.
- site.webmanifest: icon `src` paths made relative (absolute `/` paths 404'd under the
  GH Pages `/letizia-website` base); `start_url: "./"`.
- favicon.svg now actually linked (`rel="icon" type="image/svg+xml"`).
- Deleted ~350 KB dead files: public/images/profile.webp (byte-identical dup of
  og-image.jpg), public/images/faviconV2.png, public/favicon.webp (all unreferenced).
- Reconciled roadmap with tree: astro-check CI, Plausible goal tags
  (`prenota-consulenza` on index/contatti/en CTAs, tagged-events script), and the /en
  English one-pager (footer-linked, `lang` prop in LayoutV5) were shipped earlier but
  unlogged — verified all in dist.

**2026-07-04 (rounds 1–2 — hosting & indexing):**
- Temp-domain safety: GH Pages origin auto-noindexes via LayoutV5; robots.txt became a
  build-aware endpoint (sitemap line only on real domain); public/robots.txt deleted.
  Both build variants verified. Migration checklist written (above).
- Gmail confirmed canonical; hero `loading` evaluated (already preloaded — no-op).

**2026-07-03 (round 3 — UI/UX & code health):**
- Nav active-state bug fixed (trailing-slash mismatch; + `aria-current="page"`).
- Theme default respects OS `prefers-color-scheme`; stored choice wins.
- Person schema enriched: alumniOf + 4× hasCredential + knowsAbout (Foro Italico 2021,
  MSc Health & Physical Activity 2023, Ipopressiva Caufriez 2024, Med. Predittiva 2026).
- Honest cookie-banner copy (site sets zero cookies, only localStorage).
- Weekly deploy cron (Mon 06:00 UTC) added; newsletter re-fetched (7 posts).
- npm audit 11→2 vulns (rest needs Astro minor bump); logo-lm-dark.png 2 MB→112 KB;
  README rewritten; dark-mode focus outline fixed; Tally iframe title in Italian;
  `@astrojs/check` + typescript wired into CI.

**2026-07-03 (round 2 — SEO/GEO batch):**
- Local keywords in titles/h1s on all pages; entity-home copy (both addresses) on
  home + chi-sono; factual audience/city subtitles.
- cosa-offro: Service + hasOfferCatalog JSON-LD with all 7 real price points
  (55/190/370/520 individuali, 80 gruppi, 350/600 coaching, EUR).
- dicono-di-me: self-serving AggregateRating/Review schema REMOVED (Google penalizes);
  testimonials HTML-only + link to the Google listing.
- LayoutV5: hasMap, `noindex` prop, default description with local keywords.
- Events lane (after a two-session edit conflict, finally shipped): dateISO + isPastEvent
  in events.ts; eventi/index splits Prossimi/Passati (badge "Concluso", empty-state →
  newsletter); [slug] Event schema with ISO startDate + offers price/priceCurrency EUR;
  past events show "si è già svolto" + newsletter CTA. 404 got description + noindex.
- NAP unified on gmail; Rovereto maps link; contatti nested-Section bug + dead script
  removed; typos; cross-links between chi-sono/cosa-offro/dicono-di-me.

**2026-07-03 (round 1 — audit & foundations):**
- Initial a11y + SEO/GEO audit (Haiku agents). Roadmap created.
- P1 accessibility batch: prefers-reduced-motion neutralizes animations + smooth-scroll;
  site-wide :focus-visible outline; aria-hidden on ALL decorative SVGs; contrast bumps
  on /40–/50 body text; sr-only "(si apre in una nuova finestra)" on Substack submit;
  Tally iframe min-height 400; heading-hierarchy fixes; mobile menu closes on Escape
  with focus return.
- public/llms.txt created (entity summary, services, prices, formation, key URLs).
- 12 unused multi-MB files deleted from public/images (~20 MB); src/assets images
  renamed to keyword-rich filenames (letizia-mancini-*, personal-training-trento-*).

**Baseline (already good before this effort — don't redo):** canonical URLs, OG/Twitter
meta, JSON-LD WebSite/Person/LocalBusiness (2 sedi)/BreadcrumbList in LayoutV5, FAQPage
on homepage, unique titles/descriptions, sitemap, skip-link, lang="it", dark mode,
astro:assets image optimization, Plausible (cookieless).
