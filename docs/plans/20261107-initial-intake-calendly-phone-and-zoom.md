# Initial Intake — remove the consultation type question, use one Calendly calendar

**Executed:** 2026-11-07

## Goal

Form 8, "Initial Intake" (page `/book/`), asked "What kind of consultation would you
like?" (Phone Call or Zoom Meeting). The answer picked the Calendly event that opens
after the form submits (see
[20261007-initial-intake-consultation-type.md](20261007-initial-intake-consultation-type.md)):

| Answer | Calendly event |
| --- | --- |
| Zoom Meeting | `…/wordpress-integration-book-consultation-zoom` |
| Phone Call, or any other value | `…/wordpress-integration-book-consultation-phone` |

Justin made a new Calendly event. On that event, the invitee selects a phone call or a
Zoom meeting in Calendly. Form 8 thus does not need the question. After a submission,
form 8 must always open:

`https://calendly.com/justin-hedemarklaw/schedule-a-free-consultation-phone-and-zoom`

**Scope:** form 8 only. The Stage 1 forms (5 Trust Administration, 6 Probate, 7 Estate
Planning) keep the question and the Phone/Zoom routing.

## What the change made

### Calendly routing

In `wp-content/themes/hello-biz-child/functions.php`:

- `hlc_calendly_url( $consultation_type = '', $form_id = 0 )` now takes the form id.
  - Form 8 → the phone-and-zoom event, for every answer.
  - Other forms → the earlier rule: "Zoom Meeting" gets Zoom, else Phone.
- The `hlc_calendly_url` filter gets the form id as a third argument.
- The `gform_confirmation` filter passes the form id to `hlc_calendly_url()`.
- The `name` and `email` prefill does not change.

### Form 8 fields

`scripts/remove-consultation-type-field-form-8.php` removes these fields from form 8
with `GFAPI::update_form()`:

- Field 38, the "Consultation" section.
- Field 39, the question (Admin Label `consultation_type`).

Run it once:

```
studio wp eval-file scripts/remove-consultation-type-field-form-8.php
```

The script checks the form title first. If form 8 has no `consultation_type` field, it
makes no change, so a second run is safe.

`GFAPI::update_form()` does not delete entry values. Old entries keep their answer to
the question.

Gravity Forms computes `nextFieldId` from the highest field id each time it loads a
form (`GFFormsModel::get_form_meta()`). After the change, `nextFieldId` is 38, not 40.
A new field can get id 38 or 39. Old entries still hold values under those ids, so
the entry list can show an old answer under a new field.

### Other scripts

- `scripts/import-initial-intake-form.php` no longer builds fields 38 and 39, so a
  rebuild matches the live form.
- `scripts/add-consultation-type-field.php` no longer targets form 8, so a second run
  does not put the question back.

No other change was necessary:

- Form 8 has no add-on feeds.
- No conditional logic and no notification merge tag uses field 39. The notifications
  use `{all_fields}`.

## Production and Zapier

- Deploy the child theme (`functions.php`). Then run the migration script on
  production. As an alternative, push the database with `studio push`.
- If the Zap maps `consultation_type` for form 8, remove that mapping. Then refresh the
  Gravity Forms trigger sample.

## Verification

- A request to the new Calendly link returned 200.
- The migration script:
  - The first run removed fields 38 and 39. Form 8 now has 37 fields.
  - The second run printed "Skipped" and made no change.
- A test called `hlc_calendly_url()` and the `gform_confirmation` filter, with sample
  entries. It sent no email and saved no entry.
  - Form 8, empty answer → the phone-and-zoom link, with `name` and `email` prefill.
  - Form 8, "Zoom Meeting" → the phone-and-zoom link.
  - Form 7, "Zoom Meeting" → the Zoom link, with prefill.
  - Form 7, "Phone Call" → the Phone link, with prefill.
- A front-end test on `/book/`:
  - The "Consultation" section and the question do not show.
  - The field before "Conflict Check" (field 31) is field 30.
  - At 375px wide, the page does not scroll sideways.
- A successful submission in the browser was not tested, because the notifications
  send email to a real inbox. The new calendar after a real submission is not
  confirmed in the browser.
