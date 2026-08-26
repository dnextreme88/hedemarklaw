# Elementor Blog page + branded single posts for Hedemark Law

**Executed:** 2026-08-18

## Context

Create a sample **Blog** page for Hedemark Law, P.C. that hosts typical WordPress posts,
built with the **Elementor** plugin, mirroring the static mockup at
`C:\Users\storm\Documents\Hedemarklaw\hedemark-law-redesign\blog.html` (the listing) and
`.../blog-post-1.html` (a single post).

Confirmed scope:
- Generate the post list with the free **Essential Addons (Lite) Post Grid** widget
  (Elementor Free has no dynamic post-loop widget — Posts / Loop Grid / Archive Posts are Pro).
- Also **brand the single-post** template to match the mockup.
- Publish a **new** page "Blog" at `/blog` and seed sample content.

## Environment

- Local WordPress Studio site (SQLite, PHP 8.3, WP 7.0.4) at `http://localhost:8881/`.
  All WP-CLI runs through `studio wp` (see STUDIO.md); `studio` is only on PowerShell's PATH.
- **Elementor 4.2.2 (Free)** — flexbox container layout. **No Elementor Pro.**
- Active theme **hello-biz-child** (child of hello-biz 1.2.2). Its `template-parts/header.php`
  + `footer.php` render the branded chrome, and `assets/child.css` holds the brand tokens and
  `hp-*` helper classes. Reused as-is; the Blog page inherits this header/footer via the
  `elementor_header_footer` page template (same as the About page, id 20).
- Brand palette / fonts: see [20260817-elementor-about-page.md](20260817-elementor-about-page.md)
  (ink `#00305B`, fog `#F4F7F9`, blue `#377DBD`, azure `#0F4C85`, muted `#525252`,
  hairline `#DCE4EA`; Fraunces / Inter / IBM Plex Mono).

## Key constraint & decision

Elementor Free cannot loop posts. Options weighed: (a) a custom shortcode loop, (b) a free
Elementor addon with a post-grid widget, (c) a static hand-built page. Chosen: **(b) Essential
Addons Lite Post Grid** — a real dynamic loop, editable in Elementor, styled to the mockup via
child CSS + the widget's own color controls.

Known deviation: the mockup's **numbered pill pagination** is EA **Pro**. EA Free paginates via
a **"Load More" button**, styled as a brand pill. Accepted as the free-tier equivalent.

## What was implemented

1. **Plugin.** Installed + activated **Essential Addons for Elementor (Lite) 6.7.3**
   (`studio wp plugin install essential-addons-for-elementor-lite --activate`). Its onboarding
   also auto-installed **Templately**, which is not needed for the Post Grid — deactivated and
   deleted.

2. **Sample content.** Created an **Insights** category (term 4) and **5 published posts**
   mirroring the mockup titles/dates (2026-01-09 → 2026-03-07) with genuine estate-planning copy
   and hand-written excerpts. Trashed the default "Hello world!" post.

3. **Blog page (id 36, published, slug `blog`, template `elementor_header_footer`).**
   `_elementor_data` is two top-level flex containers:
   - **Hero band** — fog background + `.hp-dotgrid` dotted grid; azure IBM Plex Mono uppercase
     eyebrow "Blog".
   - **Post list** — one **`eael-post-grid`** widget (skin "one", 1 column, image off, meta =
     date only above the title, excerpt, "Read more"), querying `post` / category Insights,
     **2 posts per page**, with the **Load More** button. Class `hp-bloglist` added for styling.
   Widget color controls set to brand values (see note below): title `#377DBD` (hover ink),
   Read more `#377DBD` (hover ink), Load More `ink` bg / fog text (hover blue).

4. **Blog listing styles** (`assets/child.css`, `BLOG LISTING` block, scoped to `.hp-bloglist`):
   single-column flow overriding EA's masonry/isotope, hairline top-border separators, mono
   uppercase date eyebrow ordered above the serif title, muted excerpt, arrow "Read more", and a
   pill Load More. Also matched the **header nav background** to the mockup
   (`bg-hairline/90` → `rgba(220,228,234,0.9)`).

5. **Branded single posts** (`template-parts/single.php`, child override loaded by the parent
   `index.php` inside `get_header()`/`get_footer()`): `.hp-dotgrid` header with a "← Blog" back
   link, mono azure date eyebrow, Fraunces title; constrained prose body (`the_content()`,
   serif `h2` subheads); prev/next cards (`get_previous_post`/`get_next_post`, older on the left);
   and a dark (ink) CTA band with eyebrow, Fraunces headline, and Book/phone pill buttons.
   Styles live in `assets/child.css` (`SINGLE POST` block). Bumped the child theme to **1.1.2**
   to bust the versioned CSS enqueue.

### Note — EA default colors override theme CSS

Essential Addons bakes default widget colors (cyan Load More `#29d8d8`, `#000BEC` Read more,
`#303133` title) that Elementor emits as **high-specificity per-widget CSS**
(`.elementor-36 .elementor-element-b2a0003 …`) loaded **after** `child.css`, so theme-stylesheet
rules lose. The reliable fix is to set these via the widget's own color controls in
`_elementor_data` (keys: `eael_post_grid_title_color` / `_hover_color`,
`eael_post_read_more_btn_color` / `eael_post_read_more_btn_hover_color`,
`eael_cta_btn_normal_bg_color`, `eael_post_grid_load_more_btn_*`), then flush Elementor CSS.

## Verification

- Page 36 published at `/blog`; `_elementor_data` valid JSON, builder mode,
  `elementor_header_footer` template; eyebrow renders "Blog".
- Served HTML: 2 `eael-grid-post` articles (per-page = 2), correct titles/dates, EA CSS/JS +
  admin-ajax Load More wired, branded `hp-header`/`hp-footer`, `child.css?ver=1.1.2`.
- Generated `post-36.css` confirmed for each color change (title / read-more / load-more).
- Single post (id 30): branded header, back link, date eyebrow, prose with serif subheads,
  prev card → older post, CTA band. `/`, `/about/`, `/blog/`, single all return 200.
- Visual pass deferred to the user: the in-app browser blocks `localhost` and the Chrome
  extension was not connected this session, so verification was over HTTP + generated CSS.

## Follow-ups / notes

- Pagination is a styled **Load More** (numbered pagination = EA Pro) — could be added later via
  EA Pro or a small custom snippet.
- CTA "Book online" and the header/footer "Book a free consultation" link to `#` placeholders
  (no booking page yet).
- Content (Blog page, 5 posts, Insights category, Elementor data) lives in the **gitignored**
  SQLite DB (`/wp-content/database/`), so it is not in version control — only the theme + plugin
  code is. Export the DB (or a WXR) if the content needs to be portable.
- One-off provisioning files (`set-blog-meta.php`, `blog-elementor.json`, the post-body HTML)
  were run from a scratch directory and are not committed; the child theme + EA plugin are the
  durable artifacts.
