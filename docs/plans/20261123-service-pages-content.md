# Service detail pages — content for Estate Planning, Probate, and Trust Administration

## Context

The three service detail pages under `/services/` showed only "Under construction..."
(see [20260910-firm-menu-service-pages.md](20260910-firm-menu-service-pages.md), step 6).
They were noindex. The keyword map in [20261013-seo-rank-math.md](20261013-seo-rank-math.md)
already set what each page covers, and Rank Math already had a title, a description, and
focus keywords for each.

| ID | Page | Sections (from the keyword map) |
| --- | --- | --- |
| 1470 | `/services/estate-planning/` | The documents in a plan (living trust, will and pour-over will, durable power of attorney, advance health care directive, special needs trust, guardianship nomination); plans for married couples, blended families, unmarried couples, and parents of minor children; the process |
| 1471 | `/services/probate/` | How probate works in California; one card per county (San Francisco, San Mateo, Alameda, Contra Costa, Marin, Santa Clara, Solano, San Joaquin); links to the real estate, out-of-state, and trust administration pages |
| 1472 | `/services/trust-administration/` | Successor trustee duties (including the 60-day notice); a typical timeline (including the 120-day contest period); selling trust property, out-of-state trustees, and the counties served |

## Layout

The same layout as the other non-homepage pages:

- A title-only hero: the page title as the h1 on the light blue band (`hp-dotgrid`).
- Under it, an intro section: the keyword headline as an h2, and a lead paragraph.
- Then card sections (`hp-cards-row`, `hp-card`), text sections, and note boxes
  (`hp-note`), each in the 1280px box. On desktop the content runs from the header logo to
  the right edge of the "Book a free consultation" button (73px to 1353px at 1440px wide).
  On a phone it starts at 16px, the same as the logo.
- The page keeps its "Free 20-minute consultation" band at the end.

Heading order: h1 (page title) → h2 (each section) → h3 (each card).

## What changed

### Scripts (git)

- New `scripts/lib/page-builder.php`: the Elementor element builder that the Firm pages
  script used, moved into a shared file. New in it:
  - `hlc_fp_cards_section()` takes the number of cards per row and a section key, so a page
    can have more than one card section and more than three cards.
  - `hlc_fp_prose_section()`: an h2, body HTML, and an optional note box.
  - `hlc_fp_save_page()`: the save step. It keeps the consultation band, skips a page whose
    content already matches, and sets Rank Math robots to `index`.
- `scripts/fill-firm-pages-20261123.php` now uses the shared file. A rerun printed "nothing to
  change" for the three Firm pages, so the move did not change their output.
- New `scripts/fill-service-pages-20261123.php`: the content of the three service pages.
- `scripts/setup-seo-rank-math.php`: the three pages now get `index`.

### Site data (Elementor, in SQLite, not git)

`studio wp eval-file scripts/fill-service-pages-20261123.php` saved the three pages and set
their robots to `index`. The old `_elementor_data` of each page was backed up before the
run (outside git), and Elementor keeps a revision of each page.

## Content notes

- No "specialist", "expert", or "best" (State Bar advertising rules).
- The pages link to the pricing pages for fees, instead of repeating the numbers. The
  small-estate thresholds stay on `/pricing/probate/` only, so there is one place to update
  them.
- **For the firm to confirm** before the pages are promoted:
  - Trust notice within 60 days (Probate Code §16061.7), and the 120-day contest period.
  - Creditor claims usually within four months after the executor is appointed.
  - Typical durations: probate nine to eighteen months; trust administration six to twelve
    months.
  - The cities named on each county card.

## Verification

- A second run of the script printed "nothing to change" for each page.
- Browser at 1440px wide, all three pages: the band holds only the page title. Every h1 and
  h2 starts at 73px, the same as the logo. Every card row runs from 73px to 1353px, the same
  as the header content. No "Under construction" text. The robots meta is `follow, index`.
- Probate: two rows of four county cards, then three link cards. Estate Planning: two rows
  of three document cards, then one row of four family cards.
- Browser at 375px wide, all three pages: every widget and card starts at 16px, the same as
  the logo. No horizontal scroll.
