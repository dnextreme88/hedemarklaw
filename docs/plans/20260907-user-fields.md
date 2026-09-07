# User Fields settings panel — service rates and FAQs

**Executed:** 2026-09-07

## Context

The Trust Administration pricing page held its rate schedule as fixed markup. The three
rates lived in one Elementor HTML widget on page 100 (`/pricing/trust-administration/`).
To change a rate, a developer had to edit the markup by hand.

The goal is a no-code path. An admin must change a rate from wp-admin. The new value
must then show on the page. The value must be a single source of truth, so one edit
updates every place that uses it.

The same panel then gained a second use on the same day: the FAQ questions and answers.
So the **initial User Fields settings are two things**:

1. The Trust Administration rate schedule (Services Settings section).
2. The homepage FAQ questions and answers (FAQs section).

The three current rates:

| Label | Amount |
| --- | --- |
| Senior Attorneys | $500 / hour |
| Paralegals | $195 / hour |
| Law Clerks | $145 / hour |

## Decisions (confirmed with the user)

1. Store the value as a **site-wide setting**, not on a page.
2. Build a **free** panel with the WordPress Settings API. Do not use ACF.
3. Name the admin menu **User Fields**. Group the page into sections. The first section
   is **Services Settings**.
4. The Services Settings section holds only rate rows (a label and an amount). It has no
   service name and no service slug.
5. A new **FAQs** page reuses the homepage FAQ accordion, but the questions and answers
   come from a second **FAQs** section in the same panel. This mirrors the rate pattern.

## The ACF detour

The first plan used ACF (Advanced Custom Fields). Test showed ACF free 6.8.9 does not
ship the two needed features. The plugin's own "Pro features" screen lists **Options
Page** and **Repeater** as paid-only. `acf_add_options_page()` does not exist in the free
build. So the plan changed to the built-in Settings API, which needs no plugin. ACF was
installed but is now unused. It can be deactivated.

## What changed

All logic lives in the child theme. This matches how the repo holds its custom PHP. The
option value and the Elementor page data live in the gitignored SQLite database, so the
behaviour stays in theme code, not in the database.

1. **New file `wp-content/themes/hello-biz-child/inc/service-rates.php`.**
   - Option `hlc_service_rates` stores the rate rows (an array of `label`/`amount`).
   - `hlc_default_service_rates()` returns the three current rates. The default keeps the
     page working before the first save.
   - `add_menu_page()` registers the **User Fields** menu (slug `hlc-user-fields`).
   - `register_setting()` registers the option under the `hlc_user_fields` settings group.
     A later group can register its own option under the same group and share one Save.
   - `hlc_sanitize_service_rates()` drops empty rows and reindexes the array.
   - `hlc_render_user_fields_page()` renders the page. It shows an `<h2 class="title">`
     section heading (**Services Settings**) and the rate rows below it. Small JavaScript
     adds and removes rows.
   - The `hlc_service_rates` shortcode outputs the rows as `<ul class="hp-rate-table">`.
     It reuses the existing classes, so the styling does not change.

2. **`functions.php`** — one line loads the new file:
   `require_once __DIR__ . '/inc/service-rates.php';`

3. **Elementor page 100** — the HTML rate widget became a **Shortcode** widget that holds
   `[hlc_service_rates]`. This change is in the database (`_elementor_data`), applied
   directly. An Elementor HTML widget does not run shortcodes, but the Shortcode widget
   does. The Elementor CSS cache and element cache for the page were cleared, so the page
   rebuilds.

### FAQs — a second section and a new page

The same file and panel gained a second group.

4. **`inc/service-rates.php` (extended).**
   - Option `hlc_faqs` stores the FAQ rows (an array of `question`/`answer`).
   - `hlc_default_faqs()` returns the three homepage FAQs, so the FAQ page works before the
     first save.
   - The render page now has a second section, **FAQs**, with question and answer rows.
     Both sections share the `hlc_user_fields` settings group, so one Save stores both. A
     small generic script drives every `.hlc-repeater` (add and remove rows).
   - `hlc_sanitize_faqs()` cleans each row. The answer keeps the safe post HTML set.
   - The `[hlc_faqs]` shortcode outputs the branded FAQ accordion. It mirrors the homepage
     accordion markup (the `hp-faq` classes), adds an `hp-faq-lite` class, a small collapse
     script, and an FAQ structured-data block. One item is open at a time, like Elementor.

5. **`assets/child.css`** — new rules for the accordion collapse, scoped to `.hp-faq-lite`.
   This scope stops the rules from touching the homepage accordion (plain `.hp-faq`, driven
   by Elementor's own script). `style.css` version 1.4.2 → **1.5.0** (a cache-buster).

6. **New page `/faqs/`** (page id 1455) — an Elementor page that copies the homepage FAQ
   section (the "Frequently Asked Questions" heading and the accordion). The accordion is a
   Shortcode widget that holds `[hlc_faqs]`. The page was made with `wp_insert_post`, so
   WordPress set the defaults. This page is site data in SQLite, not in git.

7. **Header and footer** — a **FAQs** link was added after "Blog". The header menu
   (menu-1, term 3) gained a "FAQs" item (site data). `footer.php` and the `header.php`
   fallback list each gained a `/faqs/` link (theme code).

## Verification

- `php -l` on `inc/service-rates.php` and `functions.php`: no syntax errors.
- WordPress bootstrap check: the `hlc_service_rates` shortcode is registered. The default
  rows are present. The shortcode output equals the old fixed markup, byte for byte.
- Sanitize check: empty rows and empty input are dropped. The result is reindexed.
- Page 100 data check: the Elementor data holds `[hlc_service_rates]` and a shortcode
  widget. The old `hp-rate-table` markup is gone.
- Browser check on `/pricing/trust-administration/`: the page shows the three rates —
  Senior Attorneys $500 / hour, Paralegals $195 / hour, Law Clerks $145 / hour.
- Browser check on `/faqs/`: the accordion shows the three FAQs. The first item is open. A
  click opens one item and closes the other. An FAQ structured-data block is present.
- The header menu and the footer both show a **FAQs** link.
- Homepage check: the homepage FAQ accordion still opens and closes. The new CSS is scoped
  to `.hp-faq-lite`, so it does not affect the homepage.

## Follow-ups / notes

- To change a rate, open **User Fields → Services Settings**, edit the row, and save.
- To change an FAQ, open **User Fields → FAQs**, edit the row, and save.
- Deactivate ACF on the Plugins screen. The final solution does not use it.
- To add another group later, add a section in `hlc_render_user_fields_page()` and
  register a new option under the `hlc_user_fields` settings group.
- The commit holds the theme changes only. The widget swap is site data in SQLite, not in
  git.
