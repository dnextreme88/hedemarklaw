# Initial Intake — consultation type question

**Executed:** 2026-10-07

## Goal

The firm wants to know how each lead prefers to meet. Form 8 ("Initial Intake")
did not ask this. The change adds a required question, "What kind of consultation
would you like?", with the choices Phone Call and Zoom Meeting.

## What the change made

Two fields on form 8, directly before field 31 (the "Conflict Check" section):

| Field id | Type | Label | Admin Label | Required |
| --- | --- | --- | --- | --- |
| 38 | Section | Consultation | — | — |
| 39 | Radio Buttons | What kind of consultation would you like? | `consultation_type` | yes |

The choices of field 39 are `Phone Call` and `Zoom Meeting`. The value of each
choice is the same as its text.

The question has its own section, so it does not mix with the conflict check
questions. Neither field has conditional logic, so they show for all three matter
types.

The form now has 39 fields. `nextFieldId` is 40. The ids are 38–39 because the
form used ids 1–37 before. The array order puts them before field 31.

## How it was built

`scripts/add-consultation-type-field.php` updates the live form with
`GFAPI::update_form()`. Run it once:

```
studio wp eval-file scripts/add-consultation-type-field.php
```

If a field with the Admin Label `consultation_type` already exists, the script
stops, so a second run makes no duplicate. The importer
`scripts/import-initial-intake-form.php` also has the two fields now, so a rebuild
matches the live form.

No other change was necessary:

- The notifications use `{all_fields}`, so they show the new answer.
- The Calendly flow in `functions.php` does not read the field.
- The child theme CSS already styles section and radio fields, so the theme
  version did not change.

## Production and Zapier

- The production site needs the same change. Run the migration script there, or
  push the database with `studio push`.
- In the Zap, refresh the Gravity Forms trigger sample so `consultation_type`
  appears. Then map it where the workflow needs it.

## Verification

- The first run printed "Form updated. Fields: 39, nextFieldId: 40".
- A second run printed the "already exists" message and added no field.
- A read of form 8 showed the order `… 30, 38, 39, 31, 32, 33, 34`. Field 39 is
  required and has no conditional logic.
- A front-end test on `/book/`:
  - The "Consultation" section and the question show before "Conflict Check".
  - The radio choices are Phone Call and Zoom Meeting (`input_39`).
  - The section heading and the radio field have the same size and classes as
    the other sections and radio fields.
  - A Probate submission with every other required field filled and no
    consultation choice showed "This field is required." on field 39 only. The
    failed validation saved no entry.
  - At 375px wide, the field is 327px wide, and the page does not scroll sideways.
- A successful submission was not tested, because the notifications send email to
  a real inbox.
