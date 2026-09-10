# User Fields settings panel — service rates and FAQs

**Executed:** 2026-09-07 (extended 2026-09-08)

## Context

The Trust Administration pricing page held its rate schedule as fixed markup. The three
rates lived in one Elementor HTML widget on page 100 (`/pricing/trust-administration/`).
To change a rate, a developer had to edit the markup by hand.

The goal is a no-code path. An admin must change a rate from wp-admin. The new value must
then show on the page. The value must be a single source of truth, so one edit updates
every place that uses it.

The same panel then gained a second use: the FAQ questions and answers. So the **initial
User Fields settings are two things**:

1. The Trust Administration rate schedule (Services Settings section).
2. The FAQ questions and answers (FAQs section).

The three current rates:

| Label | Amount |
| --- | --- |
| Senior Attorneys | $500 / hour |
| Paralegals | $195 / hour |
| Law Clerks | $145 / hour |

## Decisions (confirmed with the user)

1. Store the values as **site-wide settings**, not on a page.
2. Build the panel with the built-in **WordPress Settings API**, so it needs no extra
   plugin.
3. Name the admin menu **User Fields**. Group the page into sections. The first section is
   **Services Settings**; the second is **FAQs**.
4. The Services Settings section holds only rate rows (a label and an amount).
5. A new **FAQs** page shows the same accordion look, but the questions and answers come
   from the FAQs section. This mirrors the rate pattern.
6. Every main page leads with the same big title, and the logo, page content, and footer
   share one flush left edge.

## What changed — theme code

All logic lives in the child theme. This matches how the repo holds its custom PHP. The
option values and the Elementor page data live in the gitignored SQLite database, so the
behaviour stays in theme code, not in the database.

1. **New file `wp-content/themes/hello-biz-child/inc/user_fields_panel.php`.**
   - Options `hlc_service_rates` (rate rows) and `hlc_faqs` (FAQ rows).
   - `hlc_default_service_rates()` and `hlc_default_faqs()` seed the current values, so the
     pages work before the first save.
   - `add_menu_page()` registers the **User Fields** menu (slug `hlc-user-fields`).
   - Both options register under one `hlc_user_fields` settings group, so one Save stores
     both sections.
   - `hlc_sanitize_service_rates()` and `hlc_sanitize_faqs()` drop empty rows and reindex.
     The FAQ answer keeps the safe post HTML set.
   - `hlc_render_user_fields_page()` renders the two sections. A small generic script drives
     every `.hlc-repeater` (add and remove rows).
   - `[hlc_service_rates]` outputs the rows as `<ul class="hp-rate-table">`.
   - `[hlc_faqs]` outputs a self-contained accordion (`.hp-faqx`) — see the FAQ section.

2. **`functions.php`** — one line loads the file:
   `require_once __DIR__ . '/inc/user_fields_panel.php';`

3. **`assets/child.css`** — the `.hp-faqx` accordion styles and animation, plus the flush
   alignment. `style.css` version 1.4.2 → **1.6.2** (a cache-buster).

## The FAQ accordion

`[hlc_faqs]` renders a **self-contained** accordion with its own markup (`.hp-faqx`) and a
real `<button>` head. It uses no Elementor accordion class, so Elementor's own accordion
CSS and JS never interfere. (An earlier version reused those classes, and the collapse
fought Elementor's own handlers.)

- One item is open at a time. A small delegated script toggles the `is-open` class.
- The panel slides open and closed with a `max-height` transition. A chevron rotates, and
  `prefers-reduced-motion` turns the motion off.
- The shortcode also prints an FAQ structured-data block (schema.org FAQPage).
- Attributes: `limit` (maximum rows) and `more_url` / `more_text` (a "See all" link). The
  homepage uses `[hlc_faqs limit="3" more_url="/faqs/" more_text="See all FAQs"]`; the FAQ
  page uses plain `[hlc_faqs]`.

## What changed — site data (Elementor, in SQLite, not git)

1. **Page 100** (`/pricing/trust-administration/`) — the HTML rate widget became a Shortcode
   widget that holds `[hlc_service_rates]`.
2. **New page `/faqs/`** (id 1455) — an Elementor page with the "Frequently Asked Questions"
   title and a Shortcode widget that holds `[hlc_faqs]`.
3. **Homepage** (id 83) — the static FAQ accordion became a Shortcode widget that holds the
   limited `[hlc_faqs]` (first three FAQs plus the "See all FAQs" link).
4. **Header and footer** — a **FAQs** link after "Blog". The header menu (menu-1) gained a
   "FAQs" item; `footer.php` and the `header.php` fallback each gained a `/faqs/` link (the
   two nav links are theme code).
5. **Consistent page heroes** (Services 95, Pricing 97, About 20, Blog 36, FAQs 1455) — each
   page now leads with the same big **Fraunces 48/36 h1** title in **#00305B**. The small
   eyebrow labels were removed; About and Blog had their label promoted to the title.
6. **Flush alignment** — the hero content and the header/footer use the 1280px width with a
   0 gutter, so the logo, page headings, and footer share one left edge.

## Verification

- `php -l` on `inc/user_fields_panel.php` and `functions.php`: no syntax errors.
- WordPress bootstrap: the `hlc_service_rates` and `hlc_faqs` shortcodes register; the
  defaults are present; the rate output equals the old fixed markup byte for byte.
- Sanitize: empty rows and empty input are dropped and reindexed.
- Browser `/pricing/trust-administration/`: shows the three rates.
- Browser `/faqs/`: item 1 is open and items 2–4 are collapsed (max-height 0); a click
  slides one item open and closes the rest; an FAQ schema block is present.
- Browser heroes: on Services, Blog, About, and FAQs, the first text is a Fraunces h1 in
  #00305B, and the logo, heading, and footer all share the same left edge (all at 0).
- Header and footer both show a **FAQs** link.

## Follow-ups / notes

- To change a rate: **User Fields → Services Settings**. To change an FAQ: **User Fields →
  FAQs**. Edit the row and Save.
- To add another group, add a section in `hlc_render_user_fields_page()` and register a new
  option under the `hlc_user_fields` settings group.
- The commits hold theme code only. The Elementor page changes are site data in SQLite, not
  in git.
