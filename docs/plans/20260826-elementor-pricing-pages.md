# Elementor pricing pages for Hedemark Law

**Executed:** 2026-08-26

## Context

The onboarding SOP (Section 5) asks for a **Pricing** area. The goal: give prospective
clients a general sense of cost by practice area **before** they book, so they self-select
and arrive with realistic expectations. This task built one **main Pricing page** with three
cards and three **subpages** under it — one per practice area — with **Elementor**, on the
established brand system (About id 20, Blog id 36, Home id 83, Services id 95). It reuses the
`hello-biz-child` theme, Elementor kit **id 6** globals, and the `hp-*` helper classes.

Confirmed scope (with the user):
- Build the Elementor pages **directly** from the SOP (no static `pricing.html` mockup).
- Each main-page card shows a **price teaser** on its face.
- Add **Pricing** to the header nav and the footer "Firm" list.

## Environment

- WordPress Studio (SQLite, PHP 8.3, WP 7.0.4) at `http://localhost:8881/`. All `wp` via
  `studio wp` (PowerShell; `studio` is not on the Bash PATH).
- Elementor **4.2.2** (flex container layout), active kit **id 6**. Header/footer are global
  via `template-parts/header.php` / `footer.php`. Each section's inner container pins
  **`boxed_width: 1280px`** to match the other pages' `max-w-7xl`.

## Pages created

Four published pages, template `elementor_header_footer`, in a parent/child hierarchy:

| Page | id | Slug | Parent | URL |
| --- | --- | --- | --- | --- |
| Pricing | 97 | `pricing` | 0 | `/pricing/` |
| Estate Planning | 98 | `estate-planning` | 97 | `/pricing/estate-planning/` |
| Probate | 99 | `probate` | 97 | `/pricing/probate/` |
| Trust Administration | 100 | `trust-administration` | 97 | `/pricing/trust-administration/` |

## What was implemented

1. **Main Pricing page (id 97).** Header band (fog + `.hp-dotgrid`, azure mono eyebrow
   "Pricing", Fraunces H1 "Pricing that respects your time.", intro paragraph). A 3-up
   `.hp-cards-row` of `.hp-card`s, each with a Fraunces title, a `.hp-price` teaser, a short
   description, and a `.hp-cardmore` "View pricing →" cue. Closes with the shared `.hp-cta`
   ink band (HTML widget, reused verbatim). Price teasers: Estate Planning **$2,000–$7,000**;
   Probate **Statutory fee — estimate yours**; Trust Administration **Hourly, from $145/hour**.

2. **Estate Planning subpage (id 98) — SOP 5.1.** Header band + a `.hp-bigprice`
   **$2,000–$7,000** figure with an azure "General range" label and descriptive text. The
   hourly-billing caveat lives in its own `.hp-note` HTML widget so it is **easy to update**
   once the firm finalizes the hourly-billing criteria (a one-widget edit). Ends with `.hp-cta`.

3. **Probate subpage (id 99) — SOP 5.2.** Header band explaining the statutory basis
   (Probate Code §10810). An **interactive client-side calculator** (`.hp-calc`, a single HTML
   widget with inline JS — no form/Gravity Forms/Zapier): one gross-estate-value input,
   outputs the statutory attorney fee on the §10810 sliding scale, the identical executor fee
   (§10800), and the typical total (double). Above $25,000,000 it shows the statutory portion
   on the first $25M and a court-determined note. Followed by the ordinary-vs-extraordinary
   services note and a `.hp-note` box with the small-estate thresholds ($239,700 small estate
   affidavit for deaths on/after April 1, 2026; $750,000 primary residence under AB 2016 —
   flagged to confirm current at build time). A disclaimer sits inside the calculator. Ends
   with `.hp-cta`.

4. **Trust Administration subpage (id 100) — SOP 5.3.** Header band + an azure "Current rate
   schedule" label and a `.hp-rate-table` HTML widget: Senior Attorneys **$500/hour**,
   Paralegals **$195/hour**, Law Clerks **$145/hour**. Ends with `.hp-cta`.

5. **Navigation.** The header uses the **Primary** WP nav menu (assigned to `menu-1`), not the
   PHP fallback — so "Pricing" was added as a **page-linked menu item** (db_id 101) at position
   2, after Services (Services 1, Pricing 2, About 3, Blog 4). WordPress marks it
   `current-menu-item` on `/pricing/` and `current-page-ancestor` on the subpages. The footer
   "Firm" list is hardcoded in `footer.php`, so a Pricing `<li>` was added there. The
   `header.php` fallback list also gained a Pricing item (with a `current-menu-item` highlight
   when on Pricing or a descendant) for the no-assigned-menu case.

6. **hello-biz child theme CSS** (`assets/child.css`): added a **PRICING** block —
   `.hp-card__link` (whole-card overlay anchor), `.hp-cardmore` (the "View pricing →" cue),
   `.hp-price` (card teaser), `.hp-bigprice` (estate figure), `.hp-note` (mist callout box),
   `.hp-calc*` (the calculator), and `.hp-rate-table` (trust rates). Bumped child theme
   **1.2.14 → 1.3.2** to bust the versioned CSS enqueue.

### Layout / gotcha notes

- **Elementor's container "Link" emits no anchor in this build** — the live homepage
  `hp-card`s also render as plain `<div>` with no href. Each pricing card therefore carries a
  `.hp-card__link` overlay anchor so the whole card is clickable, with a visually-hidden label
  for accessibility.
- **The overlay anchor's Elementor wrapper must be neutralized.** Elementor makes every widget
  wrapper `position: relative`, so an `inset: 0` anchor sizes to its own zero-height wrapper and
  renders 0×0 (unclickable). The fix: the overlay HTML widget carries the class
  `hp-card__linkwrap`, and CSS promotes that wrapper to `position: absolute; inset: 0` over the
  card; the anchor then fills the wrapper. Verified: a click on a card center hit-tests to
  `.hp-card__link` and navigates to the subpage.
- The header nav is a real assigned menu; editing the `header.php` fallback alone does **not**
  change the header. The menu item must be added to the **Primary** menu in the DB.

## Verification

- `studio wp post list` shows the four pages published; subpages' `post_parent = 97`. All
  four URLs return HTTP 200 inside the branded global header/footer, template
  `elementor_header_footer`, valid `_elementor_data`. **No PHP Warning/Notice/Fatal** in the
  rendered output. `child.css?ver=1.3.2` loads.
- **Main page (desktop 1280):** 3 `.hp-card`s in one row, ~383px each; overlay hrefs
  `/pricing/estate-planning/`, `/pricing/probate/`, `/pricing/trust-administration/`; price
  teasers correct; `.hp-cta` present; no horizontal overflow.
- **Probate calculator (live DOM):** $100,000 → $4,000 attorney / $8,000 total;
  $1,000,000 → $23,000 / $46,000; $2,000,000 → $33,000 / $66,000; $30,000,000 → $188,000 /
  $376,000 with the court-determined note shown; $0 hides the result. Statute refs (§10810,
  §10800), thresholds ($239,700 / $750,000), ordinary-services note, and disclaimer all render.
- **Navigation:** header Primary menu shows Pricing (menu-item-101) with `current-menu-item`
  on `/pricing/` and `current-page-ancestor` on subpages; footer "Firm" list shows Pricing.
- **Mobile (375px):** cards stack full-width (307px); calculator input usable (327px); every
  page `scrollWidth == 375` — **no horizontal overflow**.

## Follow-ups / notes

- "Book online" / CTA buttons link to `#` placeholders (matches Home/About/Services until a
  real booking page exists).
- The page content and the Primary-menu Pricing item live only in the **gitignored SQLite DB**
  — the durable artifacts are the `child.css` / `style.css` changes, the `header.php` /
  `footer.php` edits, and this plan. The provisioning scripts (`gen_pricing.py`,
  `build-pricing.php`) ran from a scratch dir and are **not committed** (mirrors the
  About/Blog/Home/Services approach).
- SOP figures that change over time (the $239,700 / $750,000 probate thresholds, and the
  Estate Planning hourly-billing criteria and rates) are placed in single, clearly-labeled
  widgets so they are easy to update later.
