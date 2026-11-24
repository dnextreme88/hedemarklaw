# Trust shortcode names, footer map link, "Initial Intake" heading, and one title band height

**Executed:** 2026-11-24 · **Branch:** `feature/20261124-accessibility-and-chat`

## Context
Four small changes that the firm asked for:
1. Clearer names for the Trust Administration User Fields and their shortcodes.
2. The footer address opens the Google Maps place page of Hedemark Law, P.C.
3. The `/book/` band heading reads "Initial Intake".
4. Every light blue title band (`hp-dotgrid`) has the same height.

## Commit 1 — shortcode names
`wp-content/themes/hello-biz-child/inc/user_fields_panel.php`
- The User Fields heading "Rate schedule" is now "Trust Administration rate schedule".
- `[hlc_service_rates]` is now `[hlc_trust_administration_rate_schedules]`.
- `[hlc_trust_price_teaser]` is now `[hlc_trust_administration_rate_teaser]`.
- The option names (`hlc_service_rates`, `hlc_trust_price_teaser`) do not change, so the saved values stay.
- The old names stay registered as aliases. Remove them after staging and live run the script below.

Site data: `studio wp eval-file scripts/rename-trust-shortcodes-20261124.php`
updates the Shortcode widgets on `/pricing/` (97) and `/pricing/trust-administration/` (100).
A second run prints "Nothing to rename."

## Commit 2 — map link, heading, and band height
**Footer map link** (`template-parts/footer.php`): the address link goes to the Google Maps
place page of Hedemark Law, P.C. The URL is printed with `esc_url()`, because it contains `&`.

**"Initial Intake"** — site data:
`studio wp eval-file scripts/book-heading-initial-intake-20261124.php` changes only the band h1 on `/book/` (1473).
The page title, the header button "Book a free consultation", and the SEO texts do not change.
A second run prints "Nothing to change".

**One band height** (`assets/child.css`, child theme 1.9.2). Before, at 1440px width:

| Height | Pages | Cause |
| --- | --- | --- |
| 293px | most pages | 160px top, 64px bottom padding |
| 309px | About, Pricing, Services, FAQs | a 16px margin under the title widget |
| 293px | Blog | 48px bottom padding plus the 16px margin |
| 407px | single blog post | 40px bottom padding and a three-line title |

On phones, titles that wrap to two lines (About, the old `/book/` heading) made the band taller too.

The new rule for `.hp-dotgrid.e-con` and `.hp-article.hp-dotgrid`:
- 160px top and 64px bottom padding on every band;
- no margin on the band's heading widget;
- a minimum height of 293px, and 341px below 768px, with the title at the bottom of the band.
  The phone value fits a three-line title, for example "Book a trust administration consultation".
- The blog post title has no `max-width: 22ch` limit any more, so a normal title fits one line on desktop.

Result: every band is 293px at 1440px and 900px, and 341px at 390px. I checked all 19 Elementor pages and one blog post.
Only a very long blog post title is taller. "It's Spooky Season, Let's Talk About…" (90 characters) is 362px on desktop.

## Run on staging and live
1. Deploy the theme files.
2. `studio wp eval-file scripts/rename-trust-shortcodes-20261124.php` (or `wp eval-file` on the host).
3. `studio wp eval-file scripts/book-heading-initial-intake-20261124.php`.
4. After step 2 runs on staging and live, remove the two alias `add_shortcode()` lines from `user_fields_panel.php`.

## Verification
- `/pricing/` shows the three price lines, and `/pricing/trust-administration/` shows the three rate rows. No raw shortcode text shows.
- User Fields shows "Trust Administration rate schedule" and the two new shortcode names.
- `/book/` h1 reads "Initial Intake".
- The footer address link opens the new Google Maps URL.
- Band heights: 293px (1440px and 900px) and 341px (390px) on every page in the table above.
