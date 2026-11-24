# Blog search on /blog

## Context

The `/blog` page (slug `blog`, Elementor "Header & Footer" template) had no search. Its list is an Essential Addons (EA) Post Grid widget with the CSS class `hp-bloglist`: 5 posts per load and a "Load more articles" button. EA gives no filter on the grid query (`Helper::get_query_args()` has none), so the search shows its own results list.

Decision: a search box above the list. It submits `/blog/?q=term`. The page then shows only matching blog posts, in the same list style, in place of the grid. It works without JavaScript, and the URL is shareable. The parameter is `q`, not `s`: with `s`, WordPress runs its own search query in place of the page.

## Changes

### `wp-content/themes/hello-biz-child/inc/blog_search.php` (new, required from `functions.php`)
- `hlc_blog_search_term()`: reads `$_GET['q']` with `sanitize_text_field( wp_unslash() )`, trims it, and caps it at 100 characters. It returns `''` off the `blog` page.
- Shortcode `[hlc_blog_search]`:
  - A `role="search"` GET form to `/blog/` with a visible label ("Search articles"), a `type="search"` input `q`, and a "Search" button.
  - With a term: a `WP_Query` on published posts (`s` term, 50 at most). A `role="status"` line ("8 articles match “probate”" or "No articles match “term”."), a "Clear search" link to `/blog/`, and the results.
  - Each result uses the EA Post Grid skin "one" markup inside `.hp-bloglist`, so the BLOG LISTING CSS applies. The "Read more" link has the post title as screen-reader text.
- `body_class`: `hp-blog-searching` while a term is set.
- `rank_math/frontend/robots`: `noindex, follow` while a term is set.

### `wp-content/themes/hello-biz-child/assets/child.css`
New BLOG SEARCH section after BLOG LISTING: it hides `.elementor-widget-eael-post-grid` under `.hp-blog-searching`, styles the form (brand tokens, pill button, focus ring, stacked at 480px and below), the status line, and white result cards.

### `scripts/add-blog-search-20261124.php` (new)
One-off script. It puts an Elementor Shortcode widget with `[hlc_blog_search]` before the Post Grid widget on the page with slug `blog`. It saves through Elementor and clears the Elementor CSS cache. A second run changes nothing. Run it on staging and live after deploy:

```
studio wp eval-file scripts/add-blog-search-20261124.php
```

### Search button busy state (follow-up)
The search is a full page load, so after a click the visitor saw no sign of progress.
- `assets/ux.js` part 4b, `initBlogSearch()`: on submit, the button gets the shared `busy()` state ("Searching…", `aria-busy`, `is-busy`). A second submit is blocked. On a back / forward cache return (`pageshow` with `persisted`), `unbusy()` resets the button.
- `child.css`: `.hp-blogsearch__btn.is-busy` uses the same white ring spinner and `--hp-ink2` background as the "Load more articles" button. The reduced-motion rule for `.is-busy::before` applies too.

### Excerpt length and width (follow-up)
The list cards had empty space on the right: the excerpt was 30 words, and `max-width: 70ch` capped its line length on a card up to 1600px wide.
- `hlc_blog_excerpt_words()` in `inc/blog_search.php` returns 60. The search results use it.
- `scripts/set-blog-excerpt-length-20261124.php` (new) sets the Post Grid `eael_excerpt_length` from that function. A second run changes nothing. Run it on staging and live after deploy:

```
studio wp eval-file scripts/set-blog-excerpt-length-20261124.php
```

- `child.css`: the excerpt has no width cap now. Below 768px it shows at most 4 lines (`line-clamp`).
- WordPress makes an automatic excerpt of 55 words, so posts without a manual excerpt show 55 words, not 60.

### CTA band fonts (follow-up)
The "Free 20-minute consultation" band (`.hp-cta`) only. It shows on the Elementor pages that have the band and at the end of each blog post (`template-parts/single.php`).
- `.hp-cta__title`: Fraunces (`--hp-serif`), weight 400. This replaces Inter from 2026-10-13.
- `.hp-cta__text`: Fraunces italic, weight 400. The site already loads this style.
- The buttons stay in Inter. No other section changes.

## Verification (local)
- Script: first run added the widget; second run printed "Nothing to do".
- `/blog/`: the search box shows above the list; the grid shows as before.
- Form submit with "probate": URL `/blog/?q=probate`, "8 articles match “probate”", grid hidden.
- `/blog/?q=genealogy`: 2 results; robots meta `follow, noindex`. `/blog/` keeps `follow, index`.
- `/blog/?q=zzqxnothing`-style terms: "No articles match" message.
- `<script>` in the term: stripped by sanitizing; quotes show escaped; no script in the output.
- 375px width: input and button stack; no horizontal scroll.
