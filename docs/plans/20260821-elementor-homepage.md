# Elementor homepage (front page) for Hedemark Law

**Executed:** 2026-08-21

## Context

The site had **no real homepage** — the root URL served the raw blog post index
(`show_on_front = posts`, `page_on_front = 0`). This task built the redesigned
**homepage** with **Elementor**, mirroring the static mockup at
`C:\Users\storm\Documents\Hedemarklaw\hedemark-law-redesign\index.html`, and set it as the
site's **static front page**. It reuses the brand system established by the About (id 20)
and Blog (id 36) pages: the `hello-biz-child` theme, Elementor kit **id 6** globals, and the
`hp-*` helper classes.

Confirmed scope (with user):
- Homepage becomes the **front page** at the root URL; `/blog` keeps its post listing.
- Interactive parts kept faithful: **testimonials** = fade slider (HTML widget + inline JS);
  **FAQ** = Elementor core **Accordion** (first item open).

## Environment

- WordPress Studio (SQLite, PHP 8.3, WP 7.0.4) at `http://localhost:8881/`.
- Elementor **4.2.2** (flex **container** layout), active kit **id 6**. Theme
  `hello-biz-child` (parent `hello-biz` 1.2.2); header/footer are global via
  `template-parts/header.php` / `footer.php` — not rebuilt here.
- **Essential Addons Lite 6.7.3** has **no** Testimonial Slider (Pro only) — so the
  testimonials slider is a core **HTML widget** carrying the mockup's markup + a small
  autoplay/dots script, styled by `.hp-testi` in `child.css`. No new plugin dependency.

## What was implemented

1. **Asset.** Imported `homepage-hero.avif` (attachment **id 82**) for the hero background.
   Reused `justin.avif` (id 18). SERVICES cards use Font Awesome icons (Elementor's bundled
   **FA5** set: `file-alt`, `balance-scale`, `shield-alt`) rendered as inline SVG in a
   mist-filled circle — **not** background images.

2. **Home page (id 83, published, slug `home`, template `elementor_header_footer`).**
   `_elementor_data` = **8 top-level flex containers** mirroring `index.html`, all with
   literal brand hex colors + Fraunces/Inter/IBM Plex Mono typography:
   - **Hero** — `homepage-hero.avif` background; `.hp-hero::before` lays a fog gradient over
     it and blurs the photo via `backdrop-filter` (matches the mockup's washed/blurred hero);
     Fraunces H1, subhead, two pill CTAs (Book `#` / Call `tel:`), fine print.
   - **Our vision** — white band, centered azure mono eyebrow + Fraunces H2 + paragraph.
   - **Services** — left header block + a 3-up `.hp-cards-row` of `.hp-card`s (icon circle,
     Fraunces title, body, "Learn more →" → `/services/`).
   - **Attorney** — mist (`#EAF4F6`) band, `.hp-about-row` (portrait rail + bio, two-up
     `.hp-stats-row`, "More about Justin →" → `/about/`).
   - **Who we help** — 3-up `.hp-cards-row` of whole-card links → `/services/#...`.
   - **Testimonials** — white band + HTML-widget fade slider (4 quotes, 5 stars, dots,
     7s autoplay), scoped under `.hp-testi`.
   - **FAQ** — core Accordion (`.hp-faq`, `faq_schema` on, chevron on the right via CSS
     order), 3 Q&As, first open.
   - **CTA** — ink (`#00305B`) band replicating the About-page CTA (bluelight eyebrow,
     Fraunces H2, "Book online" + phone buttons).

3. **Static front page.** `show_on_front = page`, `page_on_front = 83`. `page_for_posts`
   left `0` so `/blog` (id 36) keeps its Essential Addons post grid.

4. **hello-biz child theme CSS** (`assets/child.css`): added `--hp-mist: #EAF4F6` and a
   HOMEPAGE block — `.hp-hero` (blurred-photo + fog wash), `.hp-cards-row`/`.hp-card`
   (equal-width columns pinned past Elementor's forced full-width, hover border/shadow, icon
   circle, `.hp-learn` arrow link), `.hp-testi` (slider), `.hp-faq` (accordion restyle).
   Bumped child theme **1.1.2 → 1.2.2** to bust the versioned CSS enqueue.

### Layout / gotcha notes

- Reused the About-page fix for Elementor forcing flex children to `width:100%`: card
  columns are pinned with `flex:1 1 0; width:auto !important` (as `.hp-stat`) and wrap to
  full width under 880px.
- Service icons initially used **FA6** names (`file-lines`, `scale-balanced`,
  `shield-halved`) which Elementor's inline-SVG data manager (FA5) doesn't have — this
  printed PHP warnings and blank icons. Fixed by switching to the FA5 equivalents above.
- The hero fog wash (`.hp-hero::before`) initially didn't paint: Elementor's own
  `.e-con::before` rule suppressed its `content`, so the pseudo-element wasn't generated and
  the photo showed through un-washed (illegible text). Fixed by raising specificity to
  `.elementor-element.hp-hero::before` with `content: "" !important; display: block`.

## Verification

- `show_on_front = page`, `page_on_front = 83`; `/blog` still renders the EA post grid.
- Live DOM (desktop): all 8 sections in order inside the branded fixed header/footer; hero
  has the background image, Fraunces H1 in ink; 3 service SVG icons; 3-up card row
  (~357px cards in a 1140 row); attorney band `rgb(234,244,246)` with a 50%-radius portrait;
  4 testimonial slides + 4 dots (autoplay observed advancing); 3 FAQ items with 1 active
  (first open); ink CTA band. **No PHP warnings / no `Undefined array key`.**
- Mobile (375px): cards and attorney columns stack; no horizontal overflow.

## Follow-ups / notes

- "Book" / "Book online" / "Schedule now" link to `#` placeholders; nav "Services" points to
  `/services/` (page not created yet). Header/footer remain global.
- The page content lives only in the **gitignored SQLite DB** — the durable artifacts are the
  `child.css`/theme changes and this plan. The provisioning script (`build-home.php`) was run
  from a scratch dir and is **not committed** (mirrors the About/Blog approach).
