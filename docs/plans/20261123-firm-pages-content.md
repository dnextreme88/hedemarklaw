# Firm pages — content for Real Estate, Estate Law, and Out-of-State Executors & Heirs

## Context

The three pages in the header **Firm** menu showed only a heading and "Under construction..."
(see [20260910-firm-menu-service-pages.md](20260910-firm-menu-service-pages.md)). Rank Math
already had a title, a description, and focus keywords for each page, from the keyword map in
[20261013-seo-rank-math.md](20261013-seo-rank-math.md) (SOP 7.2c and 7.6). The pages were
noindex until they got content.

This change gives each page real content that matches its keyword map entry, and makes the
pages indexable.

| ID | Page | Focus (from the keyword map) |
| --- | --- | --- |
| 1467 | `/real-estate/` | The sale side of SOP 7.2c: attorney and licensed real estate agent for inherited, probate, and trust property; private and off-market sales |
| 1468 | `/estate-law/` | The planning side of SOP 7.2c: real estate in a living trust, titling, investors and landlords |
| 1469 | `/out-of-state-executors-heirs/` | Remote probate for executors and heirs who live outside California |

## What changed — site data (Elementor, in SQLite, not git)

New script `scripts/fill-firm-pages-20261123.php` (run with
`studio wp eval-file scripts/fill-firm-pages-20261123.php`). For each page it:

1. Replaces the page content with five sections:
   - A title-only hero: the page title (`post_title`) as the h1, on the fog background with
     the dot grid (`hp-dotgrid`), the same as About and Blog. The hero band is reserved for
     the page title, so it holds no other text.
   - An intro section: the keyword headline as an h2, and a lead paragraph (18px,
     `hp-measure`).
   - An h2 and a row of three `.hp-card` cards. A card that links to another page uses the
     whole-card link (`hp-card__link`) and the `hp-cardmore` cue, as on Pricing.
   - An h2 with an ordered list of steps, and a `.hp-note` box with links (`hp-inlink`).
   - The shared consultation band (`.hp-cta`). The script keeps the band that the page
     already had.
2. Sets Rank Math robots to `index`.

The script saves through Elementor, so each page gets a revision and a CSS rebuild. It
rebuilds a page only while the page shows "Under construction" or holds the script's own
hero. When the content already matches, it saves nothing, so a second run changes nothing.

Heading order on each page: h1 (page title) → h2 (headline) → h2 (cards section) → h3 (each
card) → h2 (steps) → h2 (consultation band).

`scripts/setup-seo-rank-math.php`: the three pages now get `index`, not `noindex`, so a new
run of that script does not hide them again.

The Rank Math titles, descriptions, and focus keywords were already set, so they did not
change.

## Content notes

- The copy uses "licensed real estate agent", as the firm facts in the SEO plan do. It does
  not use "specialist", "expert", or "best" (State Bar advertising rules).
- The Real Estate page says that the legal work and the real estate services are separate,
  and that the firm explains how each one is billed before it starts.
- **For the firm to confirm** before the pages are promoted:
  - Probate sales: a sale goes ahead after notice to the heirs, or needs court confirmation,
    depending on the authority the court gives the executor.
  - Non-resident executors: the court can appoint one, may ask for a bond, and needs a
    permanent address.
  - A transfer between parents and children can lead to a new property tax assessment.
  - Private and off-market estate sales are offered.

## Verification

- Before the run, the `_elementor_data` of the three pages was saved as a backup (outside
  git). Elementor also keeps a revision of each page.
- A second run of the script prints "nothing to change" for each page.
- Browser at 1440px wide, all three pages: the hero holds only the page title (64px h1, as
  on About and Pricing). The h1, the h2s, and the header logo share one left edge (73px).
- Browser, all three pages: one h1, three cards, the steps section, the note, and the
  consultation band. No "Under construction" text. The robots meta is
  `follow, index, ...`.
- Browser at 375px wide: no horizontal scroll. The h1 is 36px. The cards stack.
- The card and note links go to `/pricing/probate/`, `/pricing/trust-administration/`,
  `/pricing/estate-planning/`, `/real-estate/`, and `/out-of-state-executors-heirs/`.
