# Elementor "About Your Attorney" page for Hedemark Law

**Executed:** 2026-08-17

## Context

Create a sample **About page** for Hedemark Law, P.C. built with the **Elementor**
plugin, mirroring the static mockup at
`C:\Users\storm\Documents\Hedemarklaw\hedemark-law-redesign\about.html`, and set up the
firm's brand color palette as reusable Elementor globals.

Confirmed scope:
- Build the page **body** in Elementor **and** rebuild the theme header + footer to match.
- **Import** the real assets (`justin.png` portrait, `logo.avif`).
- Publish a **new** page "About Your Attorney" at `/about`.

## Environment

- Local WordPress Studio site (SQLite, PHP 8.3, WP 7.0.4) at `http://localhost:8881/`.
- Elementor **4.2.2** (flexbox **container** layout). Active kit **ID 6** — global
  colors/fonts live in its `_elementor_page_settings` meta.
- Theme **hello-biz 1.2.2**. Its `header.php`/`footer.php` call
  `elementor_theme_do_location()`, which needs Elementor Pro / Hello Plus (not installed),
  so they fall back to minimal `template-parts/header.php` + `template-parts/footer.php`.
  Header/footer rebuild therefore lives in a **hello-biz child theme** (repo rule: never
  edit the parent).
- All WP-CLI commands run through `studio wp` (see STUDIO.md).

### Brand palette (from `.../public/js/tailwind-config.js`)

| Token | Hex | Role |
|-------|-----|------|
| ink | `#00305B` | primary navy |
| ink2 | `#22384D` | portrait backdrop |
| fog | `#F4F7F9` | page background |
| blue | `#377DBD` | accent / links / italic emphasis |
| bluelight | `#8FB9DF` | eyebrow on dark |
| azure | `#0F4C85` | eyebrow labels |
| mist | `#EAF4F6` | soft tint |
| mutedtext | `#525252` | body text |
| hairline | `#DCE4EA` | borders / dotted grid |

Fonts: **Fraunces** (serif headings), **Inter** (sans body), **IBM Plex Mono** (mono eyebrows).

## What was implemented

1. **Elementor globals (kit 6).** Set 9 named `custom_colors`, the 4 `system_colors`
   (primary=ink, secondary=blue, text=muted, accent=azure), and `system_typography`
   (Fraunces / Inter / IBM Plex Mono); base body font Inter. Regenerated CSS.

2. **Assets.** Imported `justin.png` (attachment 18; WP 7.0 stored it as `justin.avif`) and
   `logo.avif` (attachment 19). Set `logo.avif` as the custom logo (theme mod on the child
   theme).

3. **About page (id 20, published, slug `about`, template `elementor_header_footer`).**
   `_elementor_data` is three top-level flex containers:
   - **Hero band** — fog background + dotted radial-gradient grid; azure IBM Plex Mono
     uppercase eyebrow "About your attorney".
   - **About** — two-column row: left 300px rail (circular portrait, name, "Managing
     Attorney", call/email icons); right fluid column (Fraunces headline with italic-blue
     "not a form.", three bio paragraphs, hairline divider, and a two-up stats row
     "10+ / Years in practice" · "2017 / Managing attorney since").
   - **CTA** — navy (ink) section, bluelight eyebrow, Fraunces headline, muted subtext,
     "Book online" + phone buttons.
   All widgets are Elementor free (heading, text-editor, image, icon-list, divider, button).

4. **hello-biz child theme** (`wp-content/themes/hello-biz-child/`): `style.css`,
   `functions.php` (enqueue brand Google Fonts + `assets/child.css`),
   `template-parts/header.php` (fixed translucent header: logo, nav, phone, "Book a free
   consultation" pill, CSS-only mobile menu), `template-parts/footer.php` (4-column footer +
   legal disclaimer + copyright), and `assets/child.css` (header/footer styling + Elementor
   helper classes). Activated the child theme; created a **Primary** menu
   (Services / About / Blog) assigned to the `menu-1` header location.

### Layout note (Elementor container flex items)

Elementor forces child containers to full width (`content_width: full` → `width: 100%`),
so `flex-direction: row` rows wrapped into a single stacked column. Fix: tag rows/items with
CSS classes and pin them in the child stylesheet:
- `.hp-about-row` + `.hp-col-left` (fixed 300px) / `.hp-col-right` (`flex: 1`)
- `.hp-stats-row` + `.hp-stat` (`flex: 1 1 0`)
Both stack to full width under 767px.

## Verification

- Page 20 published at `/about`; `_elementor_data` valid JSON, builder mode,
  `elementor_header_footer` template.
- Computed-style checks (live DOM): fixed header, ink pill button (999px radius), dot-grid
  hero, azure IBM Plex Mono eyebrow, blue italic span (#377DBD), Fraunces headline, navy CTA,
  circular 224×224 portrait. Fraunces + IBM Plex Mono web fonts load.
- Two-column About + two-up stats confirmed side by side on desktop and stacked on mobile
  (375px). No PHP errors.

## Follow-ups / notes

- "Book" / "Schedule now" link to `#` placeholders; nav "Services"/"Blog" point to
  `/services/` and `/blog/` (pages not yet created).
- Header/footer are global (all pages) — intended for a real site.
- The one-off provisioning PHP scripts (`elementor-globals.php`, `build-about-page.php`) were
  run from a scratch directory and are not committed; the child theme is the durable artifact.
