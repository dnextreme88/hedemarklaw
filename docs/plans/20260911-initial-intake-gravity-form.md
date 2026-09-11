# Initial Intake — Gravity Forms triage form

**Executed:** 2026-09-11

## Goal

Build one short triage form. It captures a new lead and finds the matter type
before the detailed intake goes out. The source is
`Initial_Intake_Spec.pdf`.

One radio field, "What type of matter can we help you with?", offers three
choices: Estate Planning, Probate, Trust Administration. Each choice reveals a
different set of fields. The form asks contact details and the closing questions
(conflict check, additional info) once for all matter types.

## What the build made

- **Gravity Forms form id 8, "Initial Intake"** — one page, 34 fields.
- **Page id 1473** — the page that shows the form. It began as a draft page and
  became the live `/book/` page (see "Page and URLs" below).

The three existing "Stage 1 Initial Intake" forms (ids 5, 6, 7) stay unchanged.

## Decisions

1. Keep the three Stage 1 forms. Add this form beside them.
2. The California county field is a Dropdown of the 58 counties (fields 19, 26).
3. The form shows on the `/book/` page. The old `/book/` page moves to
   `/book-old/` as a backup.

## Conditional logic

The spec claimed that conditional logic on a Section Break hides every field in
the section. Standard Gravity Forms does not do this. A rule on a Section Break
hides only the section label.

So the build puts the `show if matter_type is <X>` rule on the section break
**and** on every field in each matter section. The two "Please describe the
deadline(s)" fields use two rules with `logicType: all`: the matter type must
match **and** the matching "Are you aware of any deadlines?" radio must be `Yes`.

`matter_type` (field 6), `probate_deadlines` (field 20), and
`trust_admin_deadlines` (field 29) carry Admin Labels for the rules and reports.

## Name field note

Gravity Forms renders the Middle sub-field of an advanced Name field only when
its input has `isHidden` set to `false`. An absent key leaves Middle hidden (see
`wp-content/plugins/gravityforms/includes/fields/class-gf-field-name.php`, near
line 323). The importer sets `isHidden => false` on the Middle input so First,
Middle, and Last all show.

## Field placeholders

The name and email fields carry placeholder text:

| Field | Placeholder |
| --- | --- |
| First | John |
| Middle | A |
| Last | Doe |
| Email | user@domain.com |

## Notifications

Two conditional notifications route each submission by `matter_type` (field 6),
so the right inbox gets the full submission and no inbox gets a duplicate:

| Notification | Sends when `matter_type` is | Message |
| --- | --- | --- |
| Estate Planning | Estate Planning | `{all_fields}` |
| Probate / Trust Administration | Probate **or** Trust Administration | `{all_fields}` |

Each subject names its matter type, to speed triage. These two replace the
single default Admin Notification.

The live form sends both to a temporary inbox (`crossytest3589@gmail.com`) for
now. The recipient is easy to change under Settings → Notifications, or by the
`to` field on each notification. The importer keeps the recipient as a
placeholder variable (`$intake_inbox = '{admin_email}'`), so no throwaway address
is committed.

## Page and URLs

The form shows on `/book/`. The steps that got it there:

1. The old `/book/` landing page (id 1449, "Book a Free Consultation") became
   `/book-old/`, kept published as a backup.
2. Page 1473 took the slug `book`, so it serves `/book/`. Its title is now
   "Book a Free Consultation". Its old `temporary-...` URL 301-redirects to
   `/book/`.
3. The three service subpages (ids 1450–1452) re-parent under page 1473, so
   `/book/estate-planning/`, `/book/probate/`, and `/book/trust-administration/`
   keep the same URLs. Every site link to them stays valid.
4. An earlier temporary link to the form, added to `/pricing`, is removed.

Page 1473 is a block/Elementor page cloned from the `/book/trust-administration/`
template: the "Book a Free Consultation" eyebrow, an H1 "Initial Intake", an
intro line, the two fineprint disclaimers, and the form through a shortcode
widget (`[gravityform id="8" ...]`).

## Calendly after submit

The Initial Intake form reuses the same Calendly flow as the Stage 1 forms. The
logic lives in `wp-content/themes/hello-biz-child/functions.php`:

- The gate `hlc_is_booking_subpage()` is renamed to `hlc_is_booking_page()` and
  now matches the `/book/` page itself, not only its `/book/{service}` children.
  Form 8 sits on `/book/` directly, so the page needs the Calendly assets and the
  confirmation script.
- Form 8 joins the `gform_confirmation` booking list (`array( 5, 6, 7, 8 )`).

After the form submits by AJAX, the calendar replaces the form in place, a
success popup shows a green check and "Thank you! Now book a date and time with
Justin.", and the calendar prefills the visitor's name and email.

## How it was built

The importer `scripts/import-initial-intake-form.php` defines the whole form as
an array (fields, placeholders, the two conditional notifications, the
confirmation) and calls `GFAPI::add_form()`. It then creates the page. Run it
once:

```
studio wp eval-file scripts/import-initial-intake-form.php
```

The script stops if a form titled "Initial Intake" already exists, so a second
run does not make a duplicate.

The form, the pages, and the notifications live in the SQLite database, which is
gitignored. The tracked artifacts are this importer script and the `functions.php`
changes above; the database holds the live state.

## Verification

- The form has 34 fields, 2 notifications, 1 confirmation. Checkboxes (18, 27)
  have 8 choices. The county dropdowns (19, 26) have 58 choices.
- A front-end test on `/book/` confirmed the behavior:
  - At first, no matter section shows. The Conflict Check block shows.
  - Estate Planning shows its 6 fields only. Probate shows its 6 fields only.
    Trust Administration shows its 7 fields only. The other sections stay hidden.
  - The "describe the deadline(s)" field appears only after the matching
    deadlines radio is set to Yes.
  - First, Middle, and Last name sub-fields all render, with placeholders.
- URL checks: `/book/` shows the form, `/book-old/` shows the backup, and
  `/book/estate-planning/` (and the two siblings) still return 200.
- Calendly check on `/book/`: a real submission replaced the form with the
  calendar, showed the success popup, and prefilled name and email.
