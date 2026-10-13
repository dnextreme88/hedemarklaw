# Blog list cards, blog post width, and CTA band headline

**Executed:** 2026-10-13

## Goal

Three visual fixes requested on review:

1. The blog list cards on `/blog/` had no inner padding, and a gray circle before the date.
2. The blog post pages used a 768px column. The main pages, the header, and the footer
   use a 1280px container.
3. The dark "Book online" CTA band had a small mono eyebrow ("Free 20-minute
   consultation") above a serif headline ("Your family shouldn't have to guess.").
   The firm wants no eyebrow, and the headline "Free 20-minute consultation" in Inter.

## What the change made

### Blog list cards (`assets/child.css`)

- `.hp-bloglist .eael-grid-post-holder` gets `padding: 24px 28px` (16px at 767px and
  below). The Essential Addons widget setting makes the holder white, so the text
  needs space from the card edges.
- `.hp-bloglist .eael-entry-meta .eael-posted-on::before` is hidden. The post grid skin
  puts a Font Awesome circle there.

### Blog post width (`assets/child.css`)

`.hp-article__inner`, `.hp-prose__inner`, and `.hp-postnav__inner` use
`max-width: calc(1280px + 48px)`. The 24px side gutters stay, so the content is
exactly 1280px wide and lines up with the header and footer. The CTA band keeps its
centered 896px block.

### CTA band headline

| Where | How the band is built | Change |
| --- | --- | --- |
| Home | Two Elementor Heading widgets | Eyebrow widget deleted. Headline text changed; font family set to Inter in the widget. |
| Services, Pricing, Pricing → Estate Planning / Probate / Trust Administration | One HTML widget with `hp-cta` markup | Eyebrow `<p>` removed; `<h2>` text changed. |
| Blog posts | `template-parts/single.php` | Eyebrow removed; headline text changed. The "Book online" link was `#`; it now goes to `/book/`. |

- `.hp-cta__title` uses `var(--hp-sans)` (Inter) instead of the serif font.
- The unused `.hp-cta__eyebrow` rule is removed.
- The Elementor pages change through `scripts/update-cta-headline.php`:

  ```bash
  studio wp eval-file scripts/update-cta-headline.php
  ```

  It finds the pages by path, saves through Elementor (a revision per page, CSS cache
  rebuilt), and changes nothing on a second run.

- Child theme version 1.7.8 → 1.7.11 (one bump per CSS change during review).

## Notes

- The home headline is 44px at a 1280px window, and the other bands are 48px. The
  home Heading widget has its own size setting. This was already the case before the
  change.
- The About page has no CTA band.

## Verification (local)

- `/`, `/services/`, `/pricing/`, the three pricing subpages, and a blog post: no
  "have to guess" text and no `hp-cta__eyebrow` element. The headline is "Free
  20-minute consultation", in Inter, weight 400.
- The blog post "Book online" button links to `/book/`.
- Blog post at 1440px: header, title, body, post cards, and footer all span 73–1353px.
  At 375px: 24px gutters, no sideways scroll.
- `/blog/` cards: 24px × 28px padding, no circle before the date.
