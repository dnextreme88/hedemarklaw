# UI/UX restyle of all pages

**Executed:** 2026-11-11

## Context

The site is a revamp of an old Wix site: Elementor pages on the `hello-biz-child` theme,
with a fixed brand (navy `#00305B`, blues, fog and mist grounds, Fraunces and Inter). The
goal was to make every page follow good UI/UX practice and remove the parts that read as
generated ("AI slop"), and to keep the current design as much as possible.

Decisions (confirmed with the user):

- Keep the palette, Fraunces and Inter. Drop IBM Plex Mono and the small uppercase
  "eyebrow" labels.
- Restyle and minor redesigns only. No new layouts. Focus on responsiveness, control
  states, honest loading feedback and accessibility.
- The six "Under construction..." pages keep their text and get the new design.

The work used the taste-skill "restyle" path: inspect the site before the change
(`.taste-skill/before/`), change it, inspect it after (`.taste-skill/after/`). The
`.taste-skill/` folder is gitignored.

## What changed

### Theme files

| File | Change |
| --- | --- |
| `assets/child.css` | Tokens (action blue, type steps, one radius, page gutter, focus ring); new header, footer and back-to-top sections; targeted edits in every page section; a new "UI/UX layer" section at the end. |
| `assets/ux.js` (new) | Menu button and "Firm" menu, section entrance, form "Sending…" state and error focus, "Load more" busy state, slider controls, calculator, Calendly placeholder. |
| `template-parts/header.php` | Skip link; real `<button>` for the phone menu and for "Firm"; `aria-current` on the current page and section; a booking button that stays visible on phones and tablets. |
| `template-parts/footer.php` | Two link lists in place of the `<hr>`; `aria-current`; real icons for Facebook and LinkedIn; the address links to a map; "Schedule now" is a button. |
| `functions.php` | IBM Plex Mono removed from the font request; `ux.js` loaded (deferred, in the footer). |
| `style.css` | Version 1.7.11 → 1.8.8 (cache-bust). |

### Colour and contrast

The brand blue `#377DBD` gives white text 4.3:1, under the WCAG AA minimum of 4.5:1. It
was the fill of every primary button and the colour of most links. Text, links and button
fills now use the **action blue `#2D6CA8`** (5.5:1 on white, 4.9:1 on mist). The brand blue
stays in the kit as "Blue". Body text moved from the grey `#525252` to the ink `#22384D`.

### Database (Elementor pages and kit)

All page changes are in one idempotent script. It finds pages by path, saves through
Elementor (a revision per page, CSS rebuilt), and changes nothing on a second run.

```bash
studio wp eval-file scripts/restyle-pages-20261111.php
```

What it does:

- **Eyebrows:** a label above a heading is deleted; a label that was a section's only
  title becomes an `h2` ("In their words" → "What clients say"); "Pricing" above a pricing
  subpage title becomes an "All pricing" breadcrumb; "Step 1 — Initial intake" becomes one
  sentence about the two parts of booking; stat labels change to Inter, sentence case.
- **Buttons:** filled buttons take the action blue and a darker hover; outlined buttons get
  a solid border and a filled hover; all labels are 16px.
- **Home:** the service-card icons and the thin divider are deleted. "Who we help" becomes
  a list (`hp-helplist`), not a second card row. Its items are now real links: they had a
  link set, but a container renders it only with the HTML tag `a`, so they were never
  clickable. The testimonial slider gets previous, next and pause controls; its script
  moved to `ux.js`.
- **Services:** the emoji check marks become a plain list. The three rows get the ids
  `estate-planning`, `probate` and `trust-administration`, so the home links land on them.
- **Pricing → Probate:** the calculator field accepts "1,250,000" or "$1250000", adds
  separators while typing, flags invalid input and announces the result (`aria-live`).
- **Booking pages:** titles say what the page books ("Book an estate planning
  consultation").
- **Text widgets:** text under 16px goes to 17px; the grey `#525252` goes to the ink.
- **Widget classes:** Elementor renders widget classes from `_css_classes` (containers use
  `css_classes`); the script keeps both the same.
- **CTA band** ("Free 20-minute consultation") added to About, FAQs and the six
  placeholder pages, so no page ends without a next step.
- **Estate planning intake page** (Gutenberg, Canvas template): the logo moves to the top
  and links home (it pointed at a resized image that does not exist), an `h1` and one
  sentence are added, and the form uses the action blue.
- **Kit 6:** the "Accent" typography changes from IBM Plex Mono to Inter (it made
  Elementor load the font on every page); text colour → `#22384D`; secondary colour →
  `#2D6CA8`; new custom colour "Action Blue".

### States and feedback

- **Every control:** visible `:focus-visible` ring, hover, pressed (`:active`), 44px
  minimum touch target. Mouse clicks do not show the ring.
- **Header:** current page marked with a bar and `aria-current`; "Firm" is also marked on
  `/services/*` children, and "Blog" on posts and archives. Escape closes the menus; the
  phone menu locks page scroll and returns focus to its button.
- **Forms:** the submit button shows "Sending…" with a spinner and `aria-busy` while
  Gravity Forms works; on errors the summary gets focus and each field shows its message
  under it, with a "!" so colour is not the only signal. Fields are 16px or more (phones do
  not zoom in). Field shadows and section rules are removed.
- **Calendly:** after the intake submits, a "Loading available times…" placeholder holds
  the calendar's space until the calendar loads. After 10 seconds it adds a direct link to
  the calendar and the phone number.
- **Blog "Load more articles":** "Loading articles…" with a spinner while it loads; focus
  moves to the first new post.
- **Motion:** parts of each section rise in once as they enter the screen (only below the
  first screen, never hidden without JavaScript, off under reduced motion). The home hero
  photo drifts slowly.

### Layout fixes found by the inspection

- Header and footer had no side padding under 1280px, so text touched the screen edge on
  tablets and phones. One page gutter (`--hp-gutter`, 16–32px) now applies to the header,
  every top-level Elementor section and the footer.
- The page scrolled sideways by 34px at 768px. Fixed by the same gutter.
- Tablets and phones had no booking button on the first screen. The header now carries one.
- Running text is held to about 72 characters per line; blog posts to 70 characters inside
  the 1280px container (the container width from 2026-10-13 is unchanged).
- Removed: the header's glass blur, the hero's fog gradient and blur, the dotted pattern
  behind page titles, 1px outlined cards, resting shadows, hairline separators.

## Verification (local)

- `scripts/restyle-pages-20261111.php` run twice: the second run reports "nothing to
  change" for every page and the kit.
- No PHP errors or warnings in the rendered pages. IBM Plex Mono is no longer requested.
- taste-skill `lint.mjs` on the child theme: 0 FAIL (the remaining shadows are focus rings,
  the floating menu, the back-to-top button and the dialog, marked as such).
- Checked by hand in the browser pane:
  - Header at 1440px: "Firm" opens on click and hover, Escape closes it and returns focus;
    "Firm" and "Services" are marked on `/services/probate/`.
  - Phone menu (375px): the button opens and closes the menu, sets `aria-expanded`,
    locks page scroll, Escape closes it; the current section shows its bar.
  - Booking form, empty submit only (no entry is created): the button goes busy, the
    error summary takes focus, 10 fields show their messages, the button returns to normal.
  - Calendly placeholder: shows "Loading available times…", goes away when the calendar
    loads.
  - Blog: "Load more articles" shows the busy state, 5 → 10 posts, focus moves to the
    first new post.
  - Probate calculator: $1,250,000 gives an attorney fee of $25,500 and a total of
    $51,000; "x" shows the error and hides the result.
  - Testimonials: next, previous, dots and pause work.
- taste-skill `inspect.mjs` at 1440, 768 and 390px, FAIL count per page:

| Page | Before | After |
| --- | --- | --- |
| Home | 14 | 5 |
| About | 11 | 6 |
| Services | 7 | 3 |
| Services → Estate Planning / Probate / Trust Administration | 8 / 8 / 8 | 4 / 4 / 4 |
| Pricing | 9 | 4 |
| Pricing → Estate Planning / Probate / Trust Administration | 8 / 8 / 10 | 4 / 4 / 4 |
| FAQs | 7 | 4 |
| Blog | 12 | 7 |
| Book | 11 | 5 |
| Book → Estate Planning / Probate / Trust Administration | 10 / 11 / 11 | 5 / 4 / 5 |
| Real Estate / Estate Law / Out-of-State Executors & Heirs | 8 / 8 / 8 | 4 / 4 / 4 |
| Estate planning intake | 13 | 3 |
| **Total (20 pages)** | **190** | **87** |

A blog post was inspected after the change only (4 FAIL); the "before" run used a wrong
URL.

The FAILs that remain are the same on most pages, and are outside this restyle:

- Fewer than four real pictures and no video (new content).
- "Little motion": the short pages fit on one screen, so nothing enters on scroll.
- "Hidden text under reduced motion": the closed "Firm" menu; it is closed on purpose.
- "No dominant element": page titles are 64px, not poster size; the current design is kept.
- Headlines over two lines on phones (the words were not changed).
- 15px text on short pages: the footer's legal note is most of the text there.

## Not done

- No new pictures or video. The inspection asks for more real pictures on most pages;
  that is new content, outside this restyle.
- Some headlines run to three or four lines on phones (the home `h1` is the SEO line).
  The words were not changed.
- The six placeholder pages still say "Under construction...".
- The FAQ list (User Fields panel) has an item called "Placeholder Question"; the firm
  should replace or delete it.
- Nothing is committed.
