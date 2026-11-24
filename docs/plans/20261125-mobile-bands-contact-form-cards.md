# Compact phone title bands, form submit spinner, Contact name rows, service images, and required intake fields

## Context

Four layout problems, most of them on small screens, and one form change:

1. On phones, the light blue title band (`.hp-dotgrid`) was 341px tall for a one-line title. Most of that height was empty space.
2. On a Gravity Forms submit, the loading spinner sat on top of the "Submit" label, and the label did not change.
3. On the Contact form, First Name and Last Name shared one row. Every other field has its own row.
4. On `/services/`, at wide-phone and small-tablet widths (for example 716px), each service image grew past its box and covered the heading and the text under it.
5. On the Initial Intake form, many questions were optional. Every input except the "additional information" box must now be required, and a conditional field must be required only while it shows.

## Changes

### 1. Title bands on phones (`assets/child.css`)
- Below 768px, `.hp-dotgrid.e-con` and `.hp-article.hp-dotgrid` have no minimum height. The top padding is `calc(68px + 2em)`: it clears the fixed 68px header and adds 2em. The bottom padding is `2em`.
- A one-line title band is now 171px tall, not 341px. Bands no longer share one phone height: a title with more lines makes a taller band (210px for two lines, 249px for three).
- From 768px up, nothing changes: 160px top, 64px bottom, 293px minimum.

### 2. Gravity Forms submit spinner (`assets/ux.js`, `assets/child.css`)
- **Cause:** Gravity Forms 2.9 with the Orbital theme submits through its own script (`gform.submission.handleButtonClick`). While the request runs, it adds `gform-has-spinner` to the button and puts a `.gform-loader` span inside the button, with `position: absolute` and auto margins, so the loader covered the label. The old `ux.js` code listened for the `submit` event to show "Sending…", but this Gravity Forms version does not fire that event, so the label never changed.
- **CSS:** `.gform_button.gform-has-spinner` is an inline flex row with a 10px gap. `.gform-loader` is `position: static` and `order: -1`, so it shows before the label.
- **JS:** A `MutationObserver` watches the class of every `.gform_button`. When `gform-has-spinner` is on, the label text node changes to "Submitting…". The loader span stays in place. When the class goes, or when Gravity Forms renders the form again, the label is "Submit" again.
- **Fallback:** If a form submits without the Gravity Forms spinner, the `submit` listener shows our own ring spinner and "Submitting…" (`busy()`, `.gform_button.is-busy`).
- This applies to every Gravity Forms form on the site: Contact and the booking intake forms. The plugin is not changed.

### 3. Contact form name fields (`scripts/contact-form-full-width-names-20261125.php`, new)
- First Name and Last Name had `layoutGridColumnSpan` 6 (half width). The script sets both to 12 (full width), the same as the width setting in the Gravity Forms editor.
- It finds the form by its title ("Contact") and the fields by their labels, not by IDs. A second run changes nothing. Run it on staging and live after deploy:

```
studio wp eval-file scripts/contact-form-full-width-names-20261125.php
```

### 4. Service images on `/services/` (`assets/child.css`)
- **Cause:** The 3:2 ratio was on the `<img>` only. In the column flex layout of `.hp-svc-media`, the image widget box took its height from the image file size (290 × 194), so the box stayed 193px tall. At 716px the image is 659 × 439px, so it overflowed the box and covered the heading and the text.
- **Fix:** The 3:2 ratio is on the image widget box (`.hp-svc-media > .elementor-widget-image`, with `overflow: hidden` and the brand radius), and the image fills the box (`height: 100%`, `object-fit: cover`).
- On desktop, nothing changes: each image is 440 × 294, beside an 881px text column.

### 5. Initial Intake required fields (`scripts/initial-intake-required-fields-20261125.php`, new)
- Every input on the "Initial Intake" form is now required, except "Any additional information you'd like to include?". Section headings and other display-only field types are not inputs, so the script leaves them alone.
- 21 fields changed: the "Individual or Couple" question, the Estate Planning, Probate, and Trust Administration questions, and the two "Please describe the deadline(s)" boxes. Full Name, Email, Contact Number, the matter type, the spouse name fields, and the conflict-check names were already required.
- Gravity Forms skips the required check for a field that its conditional logic hides. So a conditional field is required only while it shows: the spouse name fields only for "Couple", each matter's questions only for that matter type, and each deadline description only after "Yes".
- Full Name keeps the Gravity Forms rule for a required Name field: First and Last are required, and Middle is optional.
- The script finds the form by its title and the optional field by its label, not by IDs. A second run changes nothing. Run it on staging and live after deploy:

```
studio wp eval-file scripts/initial-intake-required-fields-20261125.php
```

### 6. Theme version
`style.css` goes from 1.10.0 to 1.10.2, so browsers load the new `child.css` and `ux.js`.

## Verification (local)
- Title bands at 375px on 14 pages: 171px for one-line titles, taller for longer titles, and 32px under each title. At 1440px: 293px, the same as before. The home page has no title band.
- Contact form at 1440px: First Name, Last Name, Email, Choose an option, and the message field each have their own full-width row.
- Contact form submit (empty form, so validation fails and nothing is saved or sent): during the request the button shows the loader at 32–52px and "Submitting…" at 58–163px, with no overlap; after the response the label is "Submit" again.
- `/services/` at 716px: the image is at 378–817px and the heading starts at 837px, below it. At 375px and at 1440px the layout is correct.
- Initial Intake, with `GFAPI::validate_form` (runs the submit checks; saves no entry and sends nothing), one case per process: Estate Planning + Individual with no spouse names is valid; Estate Planning + Couple with no spouse names fails on the 3 spouse fields; with spouse names it is valid; a missing "children" answer fails; Probate with deadlines "No" and no description is valid; with "Yes" and no description it fails; no asset type checked fails; Trust Administration with all answers is valid; a missing target date fails; an empty "additional information" box is valid.
- Initial Intake on `/book/` in the browser, with Estate Planning and Couple chosen: every visible field shows "(Required)" except "Any additional information you'd like to include?".
- Not tested: a submit on the booking intake forms. They use the same Gravity Forms classes, so the same CSS and script apply.
