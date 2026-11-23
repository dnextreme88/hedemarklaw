# Pricing — wider probate calculator, a 9-digit input limit, and one price-range heading

> Also in this change: the gross estate value input accepts at most 9 whole-dollar digits.
> See "Input limit" below.

## Context

Two layout problems on the pricing subpages:

1. `/pricing/probate/`: the fee calculator (`.hp-calc`) was capped at 560px. Its longest
   result row, "Executor / representative fee (identical, §10800)", wrapped to two lines
   even on a wide screen.
2. `/pricing/estate-planning/`: a "General range" h2 (40px) sat above "$2,000–$7,000" as a
   separate 56px figure (`.hp-bigprice`). The heading worked as an eyebrow label, and the two
   large lines competed, so the page had no clear hierarchy.

## What changed

### Theme code (git)

- `assets/child.css`: `.hp-calc` `max-width` 560px → **720px**. That is wide enough for the
  longest result row on one line next to a seven-figure fee (the label needs 363px). On a
  phone the calculator still fills the content width (343px at 375px wide).
- `style.css` version 1.8.9 → **1.8.10** (cache-buster).

### Site data (Elementor, in SQLite, not git)

New script `scripts/pricing-estate-planning-range-heading-20261123.php` (run with
`studio wp eval-file scripts/pricing-estate-planning-range-heading-20261123.php`):

- The "General range" h2 becomes **"Most estate plans cost $2,000–$7,000"**, in the same
  `hp-h2` style as "Current rate schedule" on Trust Administration pricing.
- The separate `.hp-bigprice` figure is removed.

The hierarchy is now: h1 "Estate Planning" (64px) → intro (18px) → h2 with the range (40px)
→ body text (18px) → note box. The `.hp-bigprice` CSS rule stays in `child.css`, unused.

The script saves through Elementor (a revision and a CSS rebuild). A second run changes
nothing. The page's `_elementor_data` was backed up before the run (outside git).

## Verification

- `/pricing/probate/` at 1440px wide: the calculator is 720px wide. With $24,000,000 and with
  a very large value, the executor fee label is one line (24px high).
- `/pricing/probate/` at 375px wide: the calculator starts at 16px, is 343px wide, and the
  page has no horizontal scroll.
- `/pricing/estate-planning/`: no `.hp-bigprice` element. Every text block starts at the
  logo's left edge (73px at 1440px wide, 16px at 375px wide). A second run of the script
  printed "nothing to change".

## Input limit — gross estate value

The input had no length limit. Above $25,000,000 the statutory fee no longer grows: the
calculator shows $188,000 for each fee and a $376,000 total, and the part above $25,000,000
is set by the court. So a very long value added nothing.

`assets/ux.js` (the calculator code): the whole-dollar part of the value keeps at most
**9 digits** ($999,999,999, shown as 11 characters with commas). Extra digits are dropped
while the visitor types or pastes. A decimal part, if any, stays. `style.css` version
1.8.10 → **1.8.11**, so browsers load the new script.

### Verification

- Typed `123456789012` with real key presses: the field shows `123,456,789` (9 digits). The
  total is $376,000, and the "above $25,000,000" note shows.
- Set the field to `5,500,000,000,000.50` in one step, as a paste does: the value becomes
  `550000000.50` (9 whole digits).
- Typed `750000`: the field shows `750,000`, and the total is $36,000.
