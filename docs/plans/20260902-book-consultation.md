# Book a Free Consultation page + Stage 1 Gravity Forms

**Executed:** 2026-09-02

## Context

The onboarding SOP (Section 3.1, "Two-Stage Intake") defines a short **Stage 1 initial
intake** form per service. A visitor fills it out on the website, then the site routes
them to Calendly to book a consultation.

This work did two things:
1. Built the 3 Stage 1 Gravity Forms (Trust Administration, Probate, Estate Planning).
2. Built a **Book a Free Consultation** page at `/book/`, mirroring the `/pricing/`
   structure. Each service card opens a subpage that embeds that service's form. It also
   pointed every existing booking CTA on the site at `/book/`.

The two forms already in Gravity Forms — id 1 "Client Full Intake Individual Form" and
id 4 "Estate Planning Intake" — are the long **Stage 2** full intake forms that Grace
builds separately. This work did not touch them.

Confirmed scope (with the user):
- The booking page mirrors `/pricing/`: a main page with 3 cards, each card links to a
  subpage that embeds the form (**not** an inline reveal on one page).
- Page title "Book a Free Consultation", parent slug `book`.
- The conflict-check names field on each form is a single text area.
- **Future change flagged by the user:** the form-submission flow will be modified later
  to integrate Calendly. The `/book/` subpages are the place that change lands.

## Environment

- WordPress Studio (SQLite, PHP 8.3) at `http://localhost:8881/`. Run all `wp` through
  `studio wp` from **PowerShell** — `studio` is not on the Bash PATH.
- Gravity Forms **3.1.0.2**, active. Elementor **4.2.x**, active kit id 6. Brand system:
  `hello-biz-child` theme, `hp-*` helper classes, global header/footer template parts.
- Two Studio / PowerShell gotchas, both worked around:
  1. `studio wp eval` fails on inline PHP — PowerShell strips the inner double quotes
     before the binary reads them. Use `studio wp eval-file <path>`.
  2. `eval-file` runs the file **inside a function scope**, so a top-level `$var` is not
     truly global. `global $var` inside a helper then reads empty. Pass values as
     parameters or use `define()` for constants (this bit the first CTA-update pass — it
     wrote empty `href=""`, then a second robust pass repaired it).

## Gravity Forms created

| Form | id | Fields |
| --- | --- | --- |
| Stage 1 Initial Intake - Trust Administration | 5 | 13 |
| Stage 1 Initial Intake - Probate | 6 | 12 |
| Stage 1 Initial Intake - Estate Planning | 7 | 9 |

A single `GFAPI::add_form()` build script, with a duplicate guard (it skips a title that
already exists). **Name**, **Email**, and **Contact number** are required on every form;
the rest stay optional, to keep the short intake light.

### Field mapping (SOP text -> Gravity Forms field type)

**Trust Administration (id 5):** Name (`name`, req) · Email (`email`, req) · Contact
number (`phone`, req) · Does this involve litigation or a lawsuit? (`radio` Yes/No) · Did
the decedent have a will or trust? (`radio` Will/Trust/Both/Neither/Not sure) ·
Relationship to the decedent? (`radio`) · Which CA county did the decedent reside in?
(`text`) · What kind of assets did they own? (`checkbox`) · Full names of all people
involved, for a conflict check (`textarea`) · Target completion date (`date`) · Aware of
any deadlines? (`radio` Yes/No) + "If yes, describe" (`textarea`) · Additional
information (`textarea`).

**Probate (id 6):** Name/Email/Contact number (req) · Does this involve litigation?
(`radio`) · Has a probate case been filed, or did the decedent have a will or trust?
(`checkbox`, multi) · Relationship to the decedent? (`radio`) · Assets owned?
(`checkbox`) · Which county did the decedent reside in? (`text`) · Full names for
conflict check (`textarea`) · Aware of any deadlines? (`radio`) + "If yes, describe"
(`textarea`) · Additional information (`textarea`).

**Estate Planning (id 7):** Name/Email/Contact number (req) · Is this for an individual
or a couple? (`radio`) · Estate planning documents already? (`radio`) · Own real estate?
(`radio`) · Have children? (`radio`) · U.S. citizen? (`radio`) · Full names for conflict
check (`textarea`) · Target completion date (`date`) · Additional information
(`textarea`).

Two fields go beyond the literal SOP text: the "If yes, describe the deadline" text area
on Trust Administration and Probate. The Probate "case filed / will / trust" bullet is one
compound question, mapped to a multi-select checkbox.

## Book a Free Consultation pages

Four Elementor pages, template `elementor_header_footer`, built by a PHP script that
constructs the Elementor structure as arrays (the same `hp-*` bands and cards as
`/pricing/`). Idempotent: it reuses a page that already exists at the same path.

| Page | id | URL |
| --- | --- | --- |
| Book a Free Consultation | 1449 | `/book/` |
| Estate Planning | 1450 | `/book/estate-planning/` |
| Probate | 1451 | `/book/probate/` |
| Trust Administration | 1452 | `/book/trust-administration/` |

- **Main page (1449):** the `hp-dotgrid` header band (mono eyebrow "Book a Free
  Consultation", Fraunces H1 "Let's get started.", intro), then a `.hp-cards-row` of 3
  `.hp-card`s. Each card is an overlay anchor (`hp-card__link` in `hp-card__linkwrap`) to
  its subpage, with a Fraunces H3 title, a short description, and a "Take a {service}
  intake →" cue (`.hp-cardmore`; the arrow is added by CSS `::after`). Card subtext:
  Estate Planning "Preserve and Protect Your Assets and Wishes"; Probate "Contrary to
  popular belief, having a will is not enough to keep you out of probate court"; Trust
  Administration "Providing you with the timely support you need as a Trustee of a Trust".
- **Subpages (1450-1452):** the same header band (H1 = service name), a mono label
  "Step 1 — Initial intake", the Gravity Form via an Elementor **shortcode** widget
  (`[gravityform id="7|6|5" title="false" description="false" ajax="true"]`), and an
  `.hp-note` disclaimer. Estate Planning -> form 7, Probate -> form 6, Trust
  Administration -> form 5. No shared CTA band (the page is itself the booking step).

## CTA rewiring (all booking CTAs -> /book/)

- **Theme files (durable):**
  `template-parts/header.php` — the "Book a free consultation" button now uses
  `home_url( '/book/' )`. `template-parts/footer.php` — the "Schedule now →" link now uses
  `home_url( '/book/' )`.
- **Elementor page data (in the SQLite DB):** a PHP script walked each page's
  `_elementor_data` and set the booking targets to `/book/`. Three CTA shapes handled:
  the `.hp-cta` primary "Book online" anchor (html widget), a "Book online" button widget
  (About), and the homepage hero "Book your initial consultation" button widget. Pages
  updated: Home (83), Services (95), About (20), Pricing (97), Pricing subpages
  (98/99/100).

## Later refinements (2026-09-03)

**Form fields (5, 6, 7):**
- Every field is **required** except **Contact number** and **Any additional
  information** (both optional).
- **Name** placeholders First = `John`, Last = `Doe`; **Email** placeholder =
  `user@domain.com`. On **Trust Administration (5)** and **Probate (6)**, the "Which
  county…" field placeholder = `San Francisco`.
- The "If yes, please describe the deadline" field (forms 5, 6) is required but carries
  **conditional logic** — it shows only when "Are you aware of any deadlines?" = Yes, so
  the "No" path still submits.
- **Probate (6)** "Has a probate case already been filed…" changed from **checkbox to
  radio**, and the "Not sure" choice was removed.
- **"Other" follow-up:** every radio/checkbox with an "Other" choice (relationship and
  assets on forms 5 & 6) now has a required **"If other, please describe…"** text field,
  shown by conditional logic only when "Other" is selected. Verified on the frontend:
  the field flips from hidden to visible and its input becomes required.
- **Date validation:** the "target completion date" fields (forms 5, 7) reject a date
  earlier than today. The server-side guard is a `gform_field_validation` filter in the
  child theme `functions.php` (message: "Please choose a date that is today or later.").

**Second refinement round (2026-09-03):**
- **Email + Contact number share one row.** Both fields are set to half width
  (`layoutGridColumnSpan = 6`). Gravity Forms' own 12-column grid is inert inside the
  Elementor embed (its track sizing collapses), so `child.css` lays the fields out with
  flexbox instead: full width by default, half width for the two `gfield--width-half`
  fields, stacked again below 640px. Child theme bumped to **1.3.9**.
- **Removed the "If yes, please describe the deadline" field** from forms 5 and 6 — it
  was not in the onboarding document. The "Are you aware of any deadlines?" radio stays.
- **Non-selectable past dates.** This Gravity Forms build ships the new accessible date
  picker (not jQuery UI), so the `gform_datepicker_options_pre_config` minDate filter has
  no effect. Instead, a script in `functions.php` swaps the date text field for a native
  HTML5 `<input type="date">` with `min` = today (forms 5 and 7). The browser then blocks
  earlier dates. The native input writes the chosen date back to the original Gravity
  Forms input in `mm/dd/yyyy`, so the stored value and Gravity Forms validation are
  unchanged. It re-applies on `gform_post_render` (after an AJAX validation reload).

**Alignment fixes (2026-09-03), all in `child.css` (theme 1.3.11):**
- **Header band alignment.** The eyebrow + H1 live in an inner Elementor container
  (`.hp-measure`) that picked up Elementor's default 10px padding, so they sat 10px right
  of the intro subtext. `.hp-dotgrid .hp-measure { padding: 0 }` aligns all three on the
  same left edge (applies to every header band, book and pricing).
- **Date input padding.** The native date input had lopsided horizontal padding (12px
  left / 36px right). `.gform_wrapper input.gfield_date_native { padding: 12px both
  sides !important }` makes it symmetric and consistent with the other inputs.

**/book/ subpages (1450, 1451, 1452):**
- The header-band intro under each service name stays **18px** (full size) — only the
  disclaimer is fine print.
- Two **disclaimer paragraphs** (14px, muted) sit **above the "Step 1 — Initial intake"
  label**, before the form: the "privileged / confidential information" notice and the
  "consultations are limited to general information" notice. The old post-form note was
  removed.

**/book/ main page (1449):**
- Card subtext and cues set to the firm's copy; the Estate Planning cue reads
  "Take **an** Estate Planning intake →".

**Open question (not yet built):** the SOP screenshot shows a phone field with a
country-flag dropdown (the `intl-tel-input` widget). Gravity Forms does **not** provide
this natively — its phone field offers only "Standard (US)" and "International" (plain
text) formats. A flag dropdown needs the `intl-tel-input` library wired in (custom
enqueue on the booking pages) or a dedicated add-on. Left for a follow-up.

## Verification

- Build script printed `CREATED id 5/6/7`; a re-run printed `SKIP (exists ...)` for all 3.
  A field dump confirmed each form's fields, types, choices, and the required flags.
- `/book/` renders 3 cards linking to `/book/estate-planning/`, `/book/probate/`,
  `/book/trust-administration/`. Each subpage renders its form (`gform_7` / `gform_6` /
  `gform_5`) inside the branded header/footer. Screenshots confirmed the layout matches
  `/pricing/` and the form fields render (required Name/Email/Contact number).
- Rendered-HTML scan of Home, Pricing, About, Services, and the header/footer confirmed
  every booking CTA points to `/book/` (relative for Elementor buttons, absolute
  `home_url()` for the theme parts). **Zero** `href=""` and **zero** leftover `href="#"`
  on the CTA buttons across all pages.

## Follow-ups / notes

- The forms and the `/book/` pages live in the **gitignored SQLite DB**. The durable
  committed artifacts are the `header.php` / `footer.php` / `functions.php` edits and
  this plan (the date validation lives in `functions.php`). The build
  scripts (`gf_create_forms.php`, `build_book.php`, `fix_ctas.php`) ran from a scratch
  directory and are **not committed** — this mirrors the Elementor pages' approach.
- **Next:** integrate Calendly into the submission flow — after a Stage 1 form submits,
  route the visitor to Calendly to pick a time (SOP 3.1). The `/book/` subpages are where
  this lands. Also pending per the SOP: the Zapier link to the Google Sheets tracker and
  the Dropbox folder.
- `/book/` is **not** in the header nav menu — the task only rewired existing CTAs. Add a
  nav item later if the firm wants one.
