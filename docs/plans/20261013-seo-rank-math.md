# SEO — Rank Math setup and keyword map from the onboarding SOP

**Executed:** 2026-10-13

## Goal

The site had no SEO plugin. This change installs **Rank Math SEO (free)** and sets it up
for a local law firm. It also maps the keywords in the onboarding SOP
(`Hedemark_Law_Website_Onboarding_SOP_Kevin__signed.pdf`, Section 7, signed 2026-08-12)
to the site's pages.

Why Rank Math: the free version has Local SEO, `LegalService` schema, XML sitemaps,
redirects, a 404 log, and an SEO panel in the Elementor editor. Yoast needs a paid
add-on for local schema.

The SOP calls its keyword list "a starting point". Review the keywords about twice a
year, and sooner if probate or trust law changes.

## How to apply it

```bash
studio wp plugin install seo-by-rank-math --activate
studio wp eval-file scripts/setup-seo-rank-math.php
```

The script finds pages by path, not by ID, so it also works on production. A second run
gives the same result and adds no duplicate redirects. The script holds the exact title,
description, and focus keywords of each page.

## What the change made

### Rank Math settings

| Area | Setting |
| --- | --- |
| Account | Account step skipped (`rank_math_registration_skip`). Free features need no account. Setup wizard marked complete. |
| Modules on | SEO Analysis, Sitemap, Schema, Local SEO, Redirections, 404 Monitor, Image SEO, Link Counter |
| Modules off | Analytics (turn on after go-live, needs Google), Content AI, Instant Indexing, AI Visibility, Role Manager, WooCommerce, BuddyPress, bbPress, ACF, Web Stories |
| Organization | Type "company", name "Hedemark Law, P.C.", business type `LegalService`. About page = `/about/`, contact page = `/book/`. |
| Opening hours | Empty. Rank Math's default was 9–5, 7 days a week, which is not true. |
| Archives | Author archives and tags: noindex. Date archives: off. |
| Pages | Default schema off. Pages get `WebPage` schema, not `Article`. |
| Images | Missing alt text falls back to the file name. |
| Sitemap | Posts, pages, categories. No authors sitemap. Rank Math leaves noindex pages out. |

### Site settings

- Tagline: "Estate Planning, Probate & Trust Administration Attorney in San Francisco, CA".
- Post permalinks: `/%year%/%monthnum%/%day%/%postname%/` → `/blog/%postname%/`.
  The `/blog/` page (Elementor) still works, because it is not the WordPress posts page.

### Redirects (301)

| Source | Target |
| --- | --- |
| `^[0-9]{4}/[0-9]{2}/[0-9]{2}/([^/]+)/?$` (regex) | `/blog/$1/` |
| `sample-page` | `/` |
| `book-old` | `/book/` |

Use `[0-9]` in Rank Math regex sources, not `\d`. Rank Math runs `stripslashes()` on
the pattern, so `\d` becomes a plain `d` and never matches.

### Stale pages

`/sample-page/` (the WordPress default page) and `/book-old/` went to the trash. No link,
menu item, Elementor layout, or option referred to them. The trash is not emptied.

`/book-old/` was the backup of the old `/book/` design, kept by the
[2026-09-11 plan](20260911-initial-intake-gravity-form.md). The firm chose not to keep a
backup, so that backup is removed with this change.

### Robots

| Page | Robots | Why |
| --- | --- | --- |
| `/estate-planning-intake-form/` | noindex, nofollow | Form page |
| `/book/estate-planning/`, `/book/probate/`, `/book/trust-administration/` | noindex, nofollow | Booking steps |
| `/services/estate-planning/`, `/services/probate/`, `/services/trust-administration/`, `/real-estate/`, `/estate-law/`, `/out-of-state-executors-heirs/` | noindex, follow | Stubs ("Under construction...") |

**When a stub page gets its content, remove its noindex.** Open the page in Elementor,
open the Rank Math panel, and set Robots to "Index". Also remove the page from the
`$robots` list in the script. Google ranks thin stub pages low if it indexes them early.

### Theme code

- `inc/seo.php` (new), through the `rank_math/json_ld` filter:
  - Adds `areaServed` to Rank Math's `LegalService` entity. The free version has no
    field for it. The areas are San Francisco, the 7 counties in SOP 7.2b, and California.
  - On the About page only, adds a `Person` entity for Justin Hedemark: job title,
    description (more than 10 years in practice, licensed real estate agent),
    `knowsAbout`, `worksFor` the firm, and the page's main image (his photo). The
    `AboutPage` entity points at the person through `about`.
- `[hlc_faqs]` (`inc/user_fields_panel.php`):
  - Prints the `FAQPage` JSON-LD only for the full list. A teaser (`limit` set), such as
    the one on the home page, prints none. Google wants the markup only on the page
    that holds the full FAQ.
  - Each question head is now an `<h3>` around the button (SOP 7.6: "one per H2/H3").
    `.hp-faqx__title` in `child.css` resets the heading, so the look does not change.
- Theme version 1.7.7 → 1.7.8, so browsers load the new CSS.

## Keyword map (SOP 7.6)

Each primary keyword belongs to one page only, so the pages do not compete. Content
writers: build each page around its primary keyword. Put the primary keyword in the H1
and the first paragraph.

| Page | Primary focus keyword | Secondary focus keywords | Content brief |
| --- | --- | --- | --- |
| Home | estate planning attorney San Francisco | probate attorney San Francisco; trust administration attorney San Francisco; boutique estate planning law firm San Francisco | The 3 practices; the attorney + realtor and out-of-state angles; links to each practice page |
| `/services/` | estate planning and probate services San Francisco | — | Hub that links to each practice page |
| `/services/estate-planning/` | estate planning lawyer San Francisco CA | living trust lawyer San Francisco; will attorney San Francisco; wills and trusts attorney San Francisco; California estate planning attorney | One H2 each: revocable living trusts, wills (pour-over will), durable power of attorney, advance health care directive, special needs trusts, guardianship nomination. Family H2s: married couples, blended families, unmarried couples, parents with minor children (SOP 7.2a) |
| `/services/probate/` | probate lawyer San Francisco CA | California probate attorney; probate real estate attorney San Francisco; California probate attorney for out-of-state executors | One paragraph per county: San Francisco, San Mateo, Alameda, Contra Costa, Marin, Santa Clara, Solano, San Joaquin (SOP 7.2b). How probate works; small estate affidavit. Links to the out-of-state and real estate pages |
| `/services/trust-administration/` | trust administration attorney San Francisco | successor trustee attorney California; California trust administration attorney; trust administration attorney Santa Clara County | Successor trustee duties, notice to beneficiaries, timeline, selling trust property, out-of-state trustees; county paragraph |
| `/out-of-state-executors-heirs/` | California probate attorney for relatives living out of state | executor lives out of state California probate process; remote probate administration California attorney; California probate for non-resident heirs | "I live in Ohio, my mom died owning a house in SF." Steps for remote probate |
| `/real-estate/` (sale side of SOP 7.2c) | attorney and realtor for inherited property San Francisco | selling a house in probate San Francisco; trust property sale attorney San Francisco; dual-licensed attorney realtor California probate; off-market estate sale attorney California | The dual licence as the main differentiator; probate and trust sales; private and off-market sales |
| `/estate-law/` (planning side of SOP 7.2c) | estate planning attorney who is also a realtor San Francisco | transferring real property into a living trust California; how to title real estate in a California trust; estate planning for real estate investors San Francisco; estate planning for rental property owners California | Real estate in a trust; titling; investors and landlords |
| `/pricing/` | how much does estate planning cost in San Francisco | how much does probate cost in California | Links to the 3 pricing pages |
| `/pricing/estate-planning/` | estate planning cost San Francisco | — | $2,000–$7,000 range (SOP 5.1) |
| `/pricing/probate/` | California probate attorney fees | probate fee calculator California | Statutory fee calculator (SOP 5.2) |
| `/pricing/trust-administration/` | trust administration attorney fees California | — | Hourly rates (SOP 5.3) |
| `/book/` | free consultation estate planning attorney San Francisco | — | — |
| `/faqs/` | estate planning and probate FAQ California | — | All SOP 7.5 and 7.4 questions |
| `/about/` | estate planning attorney and realtor San Francisco | Justin Hedemark | Justin Hedemark, more than 10 years in practice, bar number, real estate licence (E-E-A-T) |
| `/blog/` | California estate planning and probate blog | — | — |

"Near me" keywords (SOP 7.3) do not go in the page text. Google ranks them from the
Google Business Profile, the `LegalService` schema, and the same name, address, and phone
everywhere.

## Open items

### Data the firm must supply

Set these under **Rank Math → Titles & Meta → Local SEO**:

- Street address, phone, email, opening hours. Use the same values here, on the site,
  on Google Business Profile, and in every directory (SOP 7.6).
- Logo for the schema and the default social share image (1200×630).

For the About page: the bar number and the real estate licence number. Add them to
`hlc_seo_add_attorney_person()` in `inc/seo.php` as `hasCredential` entries.

### Firm facts (from the firm, 2026-10-13)

- Attorney: **Justin Hedemark**, more than 10 years in practice.
- Local SEO description (Rank Math → Titles & Meta → Local SEO → Description). Use the
  short version on Google Business Profile and in the directories, with the same text
  everywhere:

  > Hedemark Law, P.C. is a boutique estate planning, probate, and trust administration
  > law firm in San Francisco, California, led by attorney Justin Hedemark, who has
  > practiced law for more than 10 years. The firm prepares revocable living trusts,
  > wills, pour-over wills, durable powers of attorney, advance health care directives,
  > special needs trusts, and guardianship nominations for individuals, married and
  > unmarried couples, blended families, and parents of minor children. For families
  > after a death, the firm handles probate and trust administration in San Francisco,
  > San Mateo, Alameda, Contra Costa, Marin, Santa Clara, Solano, and San Joaquin
  > counties, and in all of California. The firm also helps executors, trustees, and
  > heirs who live outside California, so they can manage a California estate remotely.
  > Justin is also a licensed real estate agent, so clients get legal and real estate
  > help in one place when they sell inherited, probate, or trust property. Free
  > consultations are available by phone or Zoom.

  Short version:

  > Hedemark Law, P.C. is a San Francisco estate planning, probate, and trust
  > administration law firm led by attorney Justin Hedemark, with more than 10 years in
  > practice. The firm serves the Bay Area and all of California, helps out-of-state
  > executors and heirs, and offers legal and real estate help for inherited property.
  > Free consultations by phone or Zoom.

  Do not use "specialist", "expert", or "best". California State Bar rules limit these
  claims in lawyer advertising.

### Content

- Write the 6 stub pages from the keyword map, then remove their noindex.
- FAQ: add the SOP 7.5 questions and the SOP 7.4 questions under **User Fields → FAQs**.
  Remove "Placeholder Question". The attorney writes or approves each answer.
- Publish the Privacy Policy page (draft today).

### Blog backlog

One article per question, with a visible "last updated" date (SOP 7.6). The focus
keyword is the question. Sources: the document long-tail list in SOP 7.2a, the probate
and trust "situational" lists in SOP 7.2b, and SOP 7.4.

### Off-site (the firm)

- Google Business Profile.
- Listings on Avvo, Justia, FindLaw, Martindale-Hubbell, and Nolo, with the same NAP.
- After go-live: add the site to Google Search Console, submit `/sitemap_index.xml`, and
  turn on the Rank Math Analytics module.

## Verification (local, 2026-10-13)

- Home page: one `<title>`, one meta description, one canonical, Open Graph tags.
- Home page schema: `["LegalService","Organization"]` with `areaServed` (1 City,
  7 AdministrativeArea, 1 State).
- `/estate-planning-intake-form/`: `nofollow, noindex`. `/services/estate-planning/`:
  `follow, noindex`.
- `/sample-page/` → 301 `/`. `/book-old/` → 301 `/book/`. `/2026/03/07/{slug}/` → 301
  `/blog/{slug}/`, which returns 200.
- `/sitemap_index.xml` lists the post, page, and category sitemaps. The page sitemap has
  no noindex pages and no trashed pages.
- `/about/`: one `Person` entity (Justin Hedemark) with `worksFor` the organization and
  the photo as `image`. `AboutPage.about` points at it. The home page has no `Person`.
- `/faqs/`: one `FAQPage` block, one `h3.hp-faqx__title` per question. The accordion
  looks and works as before. The home page teaser has no `FAQPage` block.
- After deploy: test the home and FAQ pages in Google's Rich Results Test.
