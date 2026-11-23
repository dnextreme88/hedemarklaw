# Title-only heroes — the light blue band holds only the page title

## Context

The light blue hero band (class `hp-dotgrid`) at the top of each page holds only the page
title. Many pages also had other content in the band, and some bands had no light blue
colour at all.

The homepage (`/`) is the one exception. It starts with a full-screen hero
(`hp-hero`, 100vh by 100vw), not with the title band, so it does not change.

| Page | What was in the band, apart from the title | Band colour |
| --- | --- | --- |
| `/pricing/` (97) | Intro "Every matter is different…" | OK |
| `/pricing/estate-planning/` (98), `/pricing/probate/` (99), `/pricing/trust-administration/` (100) | "← All pricing" link and an intro | OK |
| `/services/` (95) | Checklist "20 minutes / Free consultation / By phone or online" | OK |
| `/services/estate-planning/` (1470), `/services/probate/` (1471), `/services/trust-administration/` (1472) | "Under construction..." | **Missing** |
| `/book/` (1473), `/book/estate-planning/` (1450), `/book/probate/` (1451), `/book/trust-administration/` (1452) | Intro "Tell us a little about…" | OK |
| `/faqs/` (1455) | The whole FAQ list | **Missing** |
| Single blog post (theme template) | "← Blog" link and the date | OK |

About, Blog, and the three Firm pages already held only the title.

## What changed — site data (Elementor, in SQLite, not git)

New script `scripts/title-only-heroes-20261123.php` (run with
`studio wp eval-file scripts/title-only-heroes-20261123.php`). For each page in the table it:

1. Adds the `hp-dotgrid` class to the band when it is missing. The light blue colour comes
   from that class, so FAQs and the three `/services/` stubs now show the band. The FAQs
   band holds the h1 "Frequently Asked Questions".
2. Keeps only the h1 in the band.
3. Puts the other content at the top of the next section. When that section is full width,
   the content goes in its boxed 1280px container, so it lines up with the logo and the
   title. When the next section is the consultation band (FAQs and the stubs), the script
   adds a new boxed section for the content.
4. Puts the "← All pricing" link (class `hp-crumb`) at the end of that section, just above
   the "Free 20-minute consultation" band.
5. Sets the band's bottom padding and the next section's top padding to 64px.

The script saves through Elementor, so each page gets a revision and a CSS rebuild. A band
that already holds only the title, with the class, is skipped, so a second run changes
nothing.

## What changed — theme code

`wp-content/themes/hello-biz-child/template-parts/single.php` (single blog post):

- The band holds only the post title.
- The date moves to the top of the article text, as a `<time>` element. A 40px top padding
  gives it the same space under the band as before.
- The back link moves to the end of the article text, above the previous/next cards. Its
  text is now "All blog posts", in the same pattern as "All pricing".

No CSS changed.

## Verification

- Before the run, the `_elementor_data` of each changed page was saved as a backup (outside
  git). Elementor also keeps a revision of each page.
- A second run printed "Nothing to change" for each page.
- Browser at 1440px wide: on every page in the table, the band holds only the title, and
  the band is light blue (`rgb(234, 244, 246)`). The logo, the h1, and the first content
  below the band all start at 73px.
- `/pricing/`: an earlier version of the script put the intro in the full-width section, at
  0px. The fixed script moved it into the boxed container, at 73px.
- Single blog post: the date, the article text, and the back link start at 73px, the same as
  the logo and the h1.
- Browser at 375px wide: no horizontal scroll.

## One left edge at every width (theme CSS)

At 375px wide, the logo started at 16px but page content started at 24–50px. The restyle
frame rule (`.elementor > .e-con`) gives each top-level section the page gutter
(`--hp-gutter`, 16px on a phone). The containers inside a section added their own side
padding on top of that: Elementor's 10px default, a 24px box padding on hero and content
boxes, or a 20px section padding. On a wide screen the centred 1280px box hid this, so only
phones showed it.

`assets/child.css`, after the frame rule:

- A top-level section (not the consultation band, not the homepage hero) gets exactly the
  gutter as its side padding.
- A container inside it gets no side padding, except surfaces with their own background:
  `hp-card` and `hp-helpitem`.

`style.css` version 1.8.8 → **1.8.9** (cache-buster).

Before this change, the branch merged `origin/main`, which now holds the UI/UX restyle
(PR #14), so the fix sits on top of the current restyle CSS.

### Verification

- Phone (375px), every Elementor page: every widget outside a card starts at 16px, the same
  as the logo. The exceptions are on purpose: the centred attorney photo, and the second stat
  in a two-column row. No horizontal scroll.
- Desktop (1440px), widget positions compared before and after the change:
  - Probate, Book, Blog, and FAQs: no change.
  - Services, Pricing, and the Firm pages: content and card edges move from 83px to 73px, so
    they are flush with the logo. Before, Elementor's default padding put them 10px inside it.
  - Homepage and About: the narrower centred blocks move 10px to the left, for the same
    reason.
