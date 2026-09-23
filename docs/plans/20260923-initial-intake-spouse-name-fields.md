# Initial Intake — spouse name fields

**Executed:** 2026-09-23

## Goal

The Zapier Zap and the Dropbox folder structure need the spouse's name for a
couple's estate plan. Form 8 ("Initial Intake") asked "Is this for an individual,
or for you and a spouse/partner?" (field 8), but it did not collect the spouse's
name. Without the name, the Zap cannot finish.

## What the change made

Three required **Single Line Text** fields on form 8, directly after field 8:

| Field id | Label | Admin Label | Placeholder | Required |
| --- | --- | --- | --- | --- |
| 35 | Spouse First Name | `spouse_first_name` | Jane | yes |
| 36 | Spouse Middle Name | `spouse_middle_name` | B | yes |
| 37 | Spouse Last Name | `spouse_last_name` | Doe | yes |

The placeholders follow the "John / A / Doe" style of the Full Name field.

The form now has 37 fields. `nextFieldId` is 38. The ids are 35–37 because
entry data uses ids 1–34. The array order puts them after field 8.

Three separate text fields (not one Name field) give each value its own merge tag
and its own key in Zapier.

## Layout: one row of three

The three fields share one row, like the First / Middle / Last sub-fields of Full
Name. Each field has `layoutGridColumnSpan: 4` (4 of 12 grid columns), so Gravity
Forms gives it the class `gfield--width-third`.

The Gravity Forms grid does not work inside the Elementor embed. The child theme
replaces it with a flexbox layout in
`wp-content/themes/hello-biz-child/assets/child.css`. That layout knew only
`gfield--width-half`. This change adds a `gfield--width-third` rule
(`flex: 1 1 calc((100% - 32px) / 3)`). At 640px wide or less, the third-width
fields stack at full width, like the half-width fields. The child theme version
went from 1.7.6 to 1.7.7, so browsers load the new CSS.

## Conditional logic

Each spouse field has `actionType: show`, `logicType: all`, and two rules:

- field 6 (`matter_type`) `is` `Estate Planning`
- field 8 `is` `Couple`

The rule on field 6 is necessary. If a visitor picks Couple and then changes the
matter type to Probate, the spouse fields hide. Gravity Forms does not validate a
required field that conditional logic hides, so an Individual, Probate, or Trust
Administration submission is not blocked.

The Middle Name is required. A spouse with no middle name must type a value.

## How it was built

`scripts/add-spouse-name-fields.php` updates the live form with
`GFAPI::update_form()`. Run it once:

```
studio wp eval-file scripts/add-spouse-name-fields.php
```

If the spouse fields already exist, the script does not add them again. It only
sets their column span and placeholders, so a second run makes no duplicate. The importer
`scripts/import-initial-intake-form.php` also has the three fields now, so a
rebuild matches the live form.

The notifications use `{all_fields}`, so they show the new fields with no change.
The Calendly flow in `functions.php` needs no change.

## Production and Zapier

- The production site needs the same change. Run the migration script there, or
  push the database with `studio push`. Deploy the child theme too, for the
  one-third-width CSS.
- In the Zap, refresh the Gravity Forms trigger sample so the three spouse fields
  appear. Then map them into the Dropbox folder path.

## Verification

- A second run of the migration added no fields. It set the column span and
  the placeholders on the 3 existing fields.
- A read of form 8 showed 37 fields, `nextFieldId` 38, and fields 35–37 after
  field 8. Each is required and has the two rules.
- A front-end test on `/book/`:
  - At first, and with Estate Planning + Individual, no spouse field shows.
  - Estate Planning + Couple shows the three spouse fields after the question.
  - A change from Couple to Probate hides the spouse fields.
  - At 1440px wide, the three fields share one row (416px each). They line up
    with the First / Middle / Last sub-fields of Full Name. At 375px wide, they
    stack at full width, and the page does not scroll sideways.
  - The inputs show the placeholders Jane, B, and Doe.
  - A submission with Spouse Middle and Last Name empty showed "This field is
    required." on both. The failed validation saved no entry.
