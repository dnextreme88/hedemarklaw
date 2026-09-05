# Calendly calendar after a Stage 1 intake form submits

**Executed:** 2026-09-05

## Context

The onboarding SOP (Section 3.1, "Two-Stage Intake") routes a visitor to Calendly after
the Stage 1 intake. The prior work built the Stage 1 forms and the `/book/` pages, and
flagged this exact step as next ([20260902-book-consultation.md](20260902-book-consultation.md):207).

This work adds that step. After a person submits the intake form on a `/book/{service}`
subpage, the Calendly calendar replaces the form on the same page, with no reload (the
forms already submit by AJAX). The person's name and email pass to Calendly, so the
person does not retype them.

There is no official Calendly WordPress plugin. Calendly ships an embed only — its
`widget.js` script plus a container. This work uses that inline embed. No plugin was
added.

## Decisions (confirmed with the user)

1. The calendar appears **inline, in place** of the form.
2. **One** Calendly event link serves all three service pages.

## Required input (one item, still open)

- **Justin's Calendly scheduling URL.** The code stores a placeholder
  (`https://calendly.com/REPLACE-ME`) in one filterable place. The calendar does not show
  real times until the real link is set. Change it in `hlc_calendly_url()` in
  `functions.php`, or through the `hlc_calendly_url` filter.

## Target forms and pages

| Service | Form id | Page URL |
| --- | --- | --- |
| Estate Planning | 7 | `/book/estate-planning/` |
| Probate | 6 | `/book/probate/` |
| Trust Administration | 5 | `/book/trust-administration/` |

The forms embed via an Elementor shortcode with `ajax="true"`. The subpages are children
of the page with slug `book`.

## What changed

All logic lives in `wp-content/themes/hello-biz-child/functions.php`. This matches how the
repo holds its custom PHP. The site has no bespoke plugin. The `/book/` pages and the form
confirmation settings live in the gitignored SQLite database, so the behaviour stays in
theme code, not in the database.

1. **`hlc_calendly_url()`** — one filterable place for the Calendly URL.
2. **`hlc_is_booking_subpage()`** — true when the current page is a descendant of the
   page with slug `book`. It gates on the ancestor slug, not on page IDs (1450–1452),
   because those IDs live in the database and are not portable.
3. **Asset enqueue** — the existing `wp_enqueue_scripts` callback now enqueues Calendly
   `widget.css` and `widget.js` when `hlc_is_booking_subpage()` is true.
4. **`gform_confirmation` filter** (forms 5/6/7) — returns the Calendly inline container
   as the confirmation. It reads the visitor's name and email by field **type** (not by a
   hardcoded field id) and appends them to the URL as `name` and `email` query parameters,
   which Calendly prefills. Returning a string forces a text confirmation, so it overrides
   any redirect or default text in the form settings.
5. **Widget-start script** (footer, gated on `hlc_is_booking_subpage()`) — a
   **MutationObserver** watches the DOM and starts each injected
   `.calendly-inline-widget[data-hlc-calendly]` with `Calendly.initInlineWidget()` as soon
   as it appears. This build of Gravity Forms fires **no** usable JavaScript event on the
   AJAX confirmation (verified: `gform_confirmation_loaded`, `gform_post_render`, and
   `gform_page_loaded` all stayed silent), so the observer, not a GF event, is the trigger.
   An `iframe` guard stops a double start on the no-JavaScript path, where `widget.js`
   auto-starts the container from its `data-url` with the same prefill.

Supporting edits:
- `style.css` — theme version 1.3.11 → **1.4.0** (cache-buster for `child.css`).
- `assets/child.css` — light styling for `.hlc-booking-confirm` (the lead line and a
  full-width calendar container).

## Verification

- `studio wp eval-file` load-check: `hlc_calendly_url` and `hlc_is_booking_subpage` exist,
  the `gform_confirmation` filter is attached, theme version reads 1.4.0.
- Browser check on `/book/estate-planning/`: `widget.css` and `widget.js` load,
  `window.Calendly` is ready, `gform_7` renders, `child.css?ver=1.4.0` loads.
- Gating check on `/book/` main page: **no** Calendly assets load (no form there).
- Confirmation filter run against the real form 7 with a sample entry: it found the name
  field (id 1) and email field (id 2) and returned the container with
  `?name=Jane%20Doe&email=...`.
- **Live end-to-end test (form 7, Estate Planning), with the real URL set:** filled the
  required fields and submitted. The form was replaced in place by the confirmation
  ("Thank you. Now pick a time with Justin.") and the real Calendly calendar
  ("WordPress Integration Book Consultation", 25 min, Zoom). The calendar iframe carried
  the prefill (`name`, `email`). No page reload. The MutationObserver started the widget
  on its own — no manual step.

## Note on the email field

Gravity Forms rejected `jane@example.com` as "invalid" during the test, because
`example.com` has no mail records; a real address (for example a `gmail.com` one) passed.
This is Gravity Forms' own email check, not this work. Real visitors use real addresses,
so it needs no change.

## Follow-ups / notes

- Set the real Calendly URL (see "Required input").
- Still pending per the SOP: the Zapier link to the Google Sheets tracker and the Dropbox
  folder.
- Per-service Calendly event types were not built (the firm chose one shared link). To add
  them later, key the URL off the form id inside `hlc_calendly_url()` or the filter.
