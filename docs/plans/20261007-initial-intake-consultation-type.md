# Booking forms — consultation type question and Calendly routing

**Executed:** 2026-10-07

## Goal

The firm wants to know how each lead prefers to meet. The booking forms did not ask
this. The change adds a required question, "What kind of consultation would you
like?", with the choices Phone Call and Zoom Meeting.

The answer also picks the Calendly event. Justin cloned the original Calendly event
"Schedule a Free Consultation" for phone calls, and renamed the original to
"Schedule a Free Consultation (Zoom)". The rename changed its link, so the old link
(`…/wordpress-integration-book-consultation`) now returns a 404. Every booking form
opened that old link after a submission.

## What the change made

### The question on all four booking forms

Every booking form now has a required **Radio Buttons** field:

- Label: "What kind of consultation would you like?"
- Admin Label: `consultation_type`
- Choices: `Phone Call`, `Zoom Meeting` (the value of each choice is the same as its text)
- No conditional logic, so it shows for every visitor.

| Form | Page | New field | Position | `nextFieldId` |
| --- | --- | --- | --- | --- |
| 8 Initial Intake | `/book/` | 38 (section "Consultation") and 39 (question) | before field 31, the "Conflict Check" section | 40 |
| 7 Stage 1 — Estate Planning | `/book/estate-planning/` | 12 | before field 9, the conflict check question | 13 |
| 6 Stage 1 — Probate | `/book/probate/` | 15 | before field 9, the conflict check question | 16 |
| 5 Stage 1 — Trust Administration | `/book/trust-administration/` | 16 | before field 9, the conflict check question | 17 |

On form 8, the question has its own section, so it does not mix with the conflict
check questions. The Stage 1 forms have no sections, so they get the question only.

The field id is different on each form. Each Stage 1 form uses its next free id.
The code finds the field by its Admin Label, not by its id.

### Calendly routing

`hlc_calendly_url()` in `wp-content/themes/hello-biz-child/functions.php` now takes
the answer and returns one of two links:

| Answer | Calendly event |
| --- | --- |
| Zoom Meeting | `https://calendly.com/justin-hedemarklaw/wordpress-integration-book-consultation-zoom` |
| Phone Call, or any other value | `https://calendly.com/justin-hedemarklaw/wordpress-integration-book-consultation-phone` |

The two events are mutually exclusive: each submission opens one event only.

The `gform_confirmation` filter reads the answer from the field with the Admin Label
`consultation_type`, then passes it to `hlc_calendly_url()`. The name and email
prefill does not change. The `hlc_calendly_url` filter now gets the answer as a
second argument.

The question is required, so a submission always has an answer. If the answer is
empty or unknown, the Phone event opens. This default agrees with the rule "Zoom
Meeting gets Zoom, else Phone".

## How it was built

`scripts/add-consultation-type-field.php` updates the four live forms with
`GFAPI::update_form()`. Run it once:

```
studio wp eval-file scripts/add-consultation-type-field.php
```

Before it changes a form, the script checks the form title. If a form already has a
field with the Admin Label `consultation_type`, the script skips that form, so a
second run makes no duplicate. The importer `scripts/import-initial-intake-form.php`
builds fields 38 and 39 of form 8, so a rebuild matches the live form. The Stage 1
forms have no importer in this repository.

No other change was necessary:

- The notifications use `{all_fields}`, so they show the new answer.
- The child theme CSS already styles section and radio fields, so the theme
  version did not change.

## Production and Zapier

- **The production booking flow is broken until this change is deployed.** The old
  Calendly link returns a 404 there too.
- Deploy the child theme (`functions.php`), then run the migration script on
  production. As an alternative, push the database with `studio push`.
- In the Zap, refresh the Gravity Forms trigger sample so `consultation_type`
  appears. Then map it where the workflow needs it.

## Verification

- A request to each Calendly link returned: the Zoom link 200, the Phone link 200,
  and the old link 404.
- Migration runs:
  - The first run added fields 38 and 39 to form 8.
  - A later run (after the Stage 1 change) skipped form 8, then added the question
    to forms 7, 6, and 5.
  - A second run skipped all four forms and added no field.
- A test called the `gform_confirmation` filter on each of the four forms, with a
  sample entry. It sent no email and saved no entry. For each form:
  - "Zoom Meeting" gave the Zoom link.
  - "Phone Call" gave the Phone link.
  - An empty answer gave the Phone link.
  - Each link kept the `name` and `email` prefill.
- A front-end test on `/book/`:
  - The "Consultation" section and the question show before "Conflict Check".
  - The radio choices are Phone Call and Zoom Meeting (`input_39`).
  - The section heading and the radio field have the same size and classes as
    the other sections and radio fields.
  - A Probate submission with every other required field filled and no
    consultation choice showed "This field is required." on field 39 only. The
    failed validation saved no entry.
  - At 375px wide, the field is 327px wide, and the page does not scroll sideways.
- On `/book/estate-planning/`, `/book/probate/`, and `/book/trust-administration/`,
  the question shows before the conflict check question, as a required field with
  the two choices.
- A successful submission in the browser was not tested, because the notifications
  send email to a real inbox. The Calendly calendar for each answer is not
  confirmed in the browser.
