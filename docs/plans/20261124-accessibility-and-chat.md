# Accessibility toolbar and AI chat — AccessiYes, WP Accessibility, and Hyve Lite

**Executed:** 2026-11-24 · **Branch:** `feature/20261124-accessibility-and-chat`

## Context
The firm wants two free additions:
- An accessibility control for visitors (contrast, text size, and similar), plus accessibility fixes in the HTML.
- A chat with AI answers that cost $0.

## Plugins
| Plugin | Slug | Version | Job |
|--------|------|---------|-----|
| AccessiYes Accessibility Widget (CookieYes) | `accessibility-widget` | 3.2.8 | Visitor toolbar: font size, contrast modes, monochrome, dyslexia font, highlight links, reading guide, page reader, profiles. No account. |
| WP Accessibility (Joe Dolson) | `wp-accessibility` | 2.4.5 | HTML fixes: focus outlines, form labels, `lang`/`dir`, removes redundant `title` attributes, allows pinch zoom. |
| Hyve Lite (ThemeIsle) | `hyve-lite` | 2.0.4 | AI chatbot that answers only from site content (RAG). Hosted "Hyve Connect": 500 free messages per month, no API key. |

Rejected:
- Web Accessibility by Elementor (formerly Ally): 2.9/5 rating, needs an Elementor account.
- AI Engine and other bring-your-own-key chat plugins: each AI answer costs money.

## Settings applied
**AccessiYes** (`cya11y_widget_settings`)
- Position bottom-left on desktop and mobile, so it does not overlap the chat at bottom-right.
- Primary colour `#2D6CA8` (5.4:1 contrast on white; matches the Gravity Forms primary).
- Keyboard shortcut Alt+A on.

**WP Accessibility**
- Own toolbar off (`wpa_toolbar`, `wpa_widget_toolbar`), so only one toolbar shows.
- Skip links off (`asl_enable`). The theme already prints a "Skip to content" link.
- `wpa_focus` off. The child theme already has a `:focus-visible` ring, and the plugin's `:focus` rule also showed a ring on mouse clicks.
- `wpa_labels`, `wpa_remove_titles`, `wpa_viewport`, `wpa_lang_attributes`, `wpa_search_alt` on.

**Hyve Lite** (`hyve_settings`)
- Welcome message: general information only, not legal advice, do not type private or case details.
- Default message (no answer found): points to `/contact/`.
- Privacy notice on, source links on, position right, display mode "all".
- `ai_mode` not changed. The site owner opts in to Hyve Connect in **Hyve > Settings**.

## Manual steps for the site owner
1. **Hyve > Settings > AI**: select Hyve Connect. This sends the indexed content and visitor messages to ThemeIsle, which passes them to OpenAI.
2. **Pages > All Pages**: hover over each page and click the **Add to Hyve** row action. Add Home, About Your Attorney,
   Services, the service detail pages, Pricing, FAQs, and Contact. Do not add the intake or booking form pages,
   or private and password-protected posts. Anything added can be shown to any visitor.
   The **Indexed content** search in **Hyve > Knowledge Base** only searches pages that are already added.
3. After a page edit, update it in **Knowledge Base > Needs attention**.
4. Update the privacy policy: chat messages go to ThemeIsle and OpenAI.
5. Optional: **AccessiYes > Accessibility statement** needs the company name and a business email.

## Hyve Connect on the local site
Hyve Connect does not work on the local Studio site (`http://localhost:8881`).
Every "Add to Hyve" call returns "This site could not be verified for Hyve Connect. Contact support."
The dashboard shows "Hyve Connect: Offline" and "0 / 0 chunks".
The Hyve docs say the site "is identified by its domain". The docs do not mention localhost, so the cause is likely but not confirmed.
Eight pages have the `_hyve_added` flag from earlier clicks, but they have no indexed chunks.
Add the knowledge base content again on the live site, which has a public domain.

Pages to add on the live site: Home, About Your Attorney, Services, Pricing, Real Estate, Estate Law,
Out-of-State Executors & Heirs, Contact, `/services/estate-planning/`, `/services/probate/`,
`/services/trust-administration/`, `/pricing/estate-planning/`, `/pricing/probate/`, `/pricing/trust-administration/`.
Do not add the `/book/...` pages. They are booking forms.

## Lite limits
- 500 messages per month. At the cap, the bot stops until the monthly reset.
- Custom instructions, bot name, colours, FAQ entries, lead form, and full chat history are Pro only.
- No human live chat.

## Skip link fix (child theme 1.9.1)
Problem: two "Skip to content" links (parent and child header) pointed to `#content`.
The Elementor "Header & Footer" page template had no element with that id, so the link did nothing on those pages.
After AccessiYes loaded, its toolbar button also came before the skip link in the tab order.

Changes:
- `functions.php`: the `elementor/page_templates/header-footer/before_content` and `after_content` hooks wrap
  the Elementor content in `<main id="content" class="hp-main" tabindex="-1">`. This also adds the main landmark.
- `functions.php`: `hello-plus-theme/enable_skip_link` returns false, so only the child's styled skip link shows.
- `assets/ux.js`: keeps `.hp-skip` the first child of `<body>` when the toolbar script inserts its container.
- `assets/child.css`: no focus ring on `.hp-main` itself.

Checked: Home, Contact, Pricing, Blog, a service page, a blog post, and a 404 page each have one skip link,
one `<main>`, and one `#content`. On Home, the first Tab focuses the skip link, and Enter moves focus into the content.

## Verification
- `studio wp plugin list --status=active` lists the three plugins.
- Home page: the toolbar opens at bottom-left, font size goes to 120%, and reset restores 100%.
- The first Tab focuses "Skip to content", and Enter moves focus into `<main id="content">`.
- Chat widget: not shown until Hyve Connect is on and content is indexed.
