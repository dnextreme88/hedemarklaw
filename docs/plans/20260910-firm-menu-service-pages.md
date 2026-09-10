# Firm menu + placeholder service pages

**Executed:** 2026-09-10

## Context

The onboarding SOP (section 7.6) asks the firm to add three new service areas: **Real
Estate**, **Estate Law**, and **Out-of-State Executors & Heirs**. The content for these
areas is not ready. So this change builds only the page shells and the navigation around
them. Each page shows its heading and the words "Under construction...". Someone adds the
real content later.

The change has three parts:

1. Create the three placeholder pages, copying the `/faqs` page layout.
2. Group the firm's service links under a new "Firm" hover menu in the header.
3. Mirror that group in the footer, with a gray divider below it.

## Decisions (confirmed with the user)

1. Duplicate an existing page (`/faqs`) exactly, then replace the text. Do not change the
   layout. After the heading, show only "Under construction...".
2. Build the header "Firm" dropdown by **hardcoding** the nav in the theme, like the
   footer. The header stops reading from the WordPress "Primary" menu.

## What changed

### 1. Three placeholder pages (database)

Each page copies the `/faqs` Elementor structure: a full-width container (160px top
padding for the gap below the fixed header, `#F4F7F9` background), a boxed 1280px inner
container (this left-aligns the content with the header and footer), an `h1` heading, and
below it a text-editor widget with `<p>Under construction...</p>`.

| ID | Title | Slug |
| --- | --- | --- |
| 1467 | Real Estate | `real-estate` |
| 1468 | Estate Law | `estate-law` |
| 1469 | Out-of-State Executors & Heirs | `out-of-state-executors-heirs` |

The pages were built with a one-off script (`studio wp eval-file`). The script wrote the
`_elementor_data` meta directly, because `Document::save()` needs a logged-in user under
WP-CLI and stored nothing. Meta set per page: `_elementor_data`, `_elementor_edit_mode`,
`_elementor_template_type`, `_wp_page_template = elementor_header_footer`,
`_elementor_version`. After the script, `studio wp elementor flush-css` regenerated the
per-page CSS.

The pages are **database records, not files**, so they are not part of the git diff. On a
new environment, re-run the create script and `flush-css`.

### 2. Header (hardcoded nav)

[template-parts/header.php](../../wp-content/themes/hello-biz-child/template-parts/header.php)
— removed the `wp_nav_menu()` / `$has_menu` branch and rendered one hardcoded list:

- **Firm** — a hover menu (`.hp-has-submenu`). Its `.hp-submenu` holds Services, Real
  Estate, Estate Law, Out-of-State Executors & Heirs.
- Pricing, About Your Attorney, Blog, FAQs stay top-level.

The "Firm" top link is `href="#"`. A small inline script calls `preventDefault()` on it,
so a click never jumps the page, and mirrors the open state in `aria-expanded`.

### 3. Header CSS

[assets/child.css](../../wp-content/themes/hello-biz-child/assets/child.css) — the
dropdown. Desktop: the "Firm" link has tall vertical padding, so its hover target fills
the full header height and the submenu (absolute, `top: 100%`) opens flush at the header's
bottom edge. So the trigger is the "Firm" column itself, with no separate strip below the
header. The submenu is hidden and reveals on `:hover` / `:focus-within`. Mobile
(`max-width: 1024px`): the submenu is static and always visible (indented), so it reads as
an expanded section inside the burger menu.

### 4. Footer

[template-parts/footer.php](../../wp-content/themes/hello-biz-child/template-parts/footer.php)
— the "Firm" column now lists Services + the three new pages, then a
`<hr class="hp-footer__divider">`, then Pricing, About Your Attorney, Blog, FAQs. The
divider style (`#DCE4EA`, the footer hairline gray) is in `child.css`.

### 5. Cache-bust

[style.css](../../wp-content/themes/hello-biz-child/style.css) — child theme version
`1.6.2` → `1.7.3`, so the new CSS loads for returning visitors.

### 6. Service detail pages under /services/ (follow-up)

Three more placeholder pages, same template as above, but as **children of the Services
page** (ID 95), so each is reachable at `/services/{slug}`:

| ID | Title | URL |
| --- | --- | --- |
| 1470 | Estate Planning | `/services/estate-planning/` |
| 1471 | Probate | `/services/probate/` |
| 1472 | Trust Administration | `/services/trust-administration/` |

The `/services/` page already held a heading and description for each of these three
services. A one-off script appended a `<p class="hp-svc-more"><a>Read more...</a></p>`
link to each description, pointing to the matching detail page. The link matches by a
unique tail phrase in the description text and is idempotent (it skips a description that
already has the link). The `.hp-svc-more` link reuses the animated arrow from the "View
pricing" card link (`.hp-cardmore`): the text reads "Read more" with a CSS `→` that
slides right on hover while the text turns blue. The style is in `child.css` beside the
other `.hp-svc-body` rules.

Like the first three pages, these are **database records, not files**.

## Verification

- All three pages return `publish` and render with the correct heading, spacing, and
  "Under construction..." text.
- The header "Firm" menu reveals its four links on hover; a click does not jump the page;
  the other links stay top-level.
- The footer shows the Firm group, the gray divider, then the rest of the links.
- The mobile burger menu shows the Firm group expanded.
