# Trust Administration price teaser as a User Field

## Context

The Pricing hub page (`/pricing/`, page id 97) shows a Trust Administration card. The card's
price line "Hourly, from $500/hour" was fixed text in an Elementor HTML widget (widget id
`2ae01d1`, content `<p class="hp-price">Hourly, from $500/hour</p>`). An admin could not change
it without the Elementor editor.

The rate rows on `/pricing/trust-administration/` already come from the **User Fields** admin
page (see [20260907-user-fields.md](20260907-user-fields.md)). This change uses the same
pattern for the full price line. An admin now edits the whole string on the User Fields page.

## What changed — theme code

File `wp-content/themes/hello-biz-child/inc/user_fields_panel.php`:

- New option `hlc_trust_price_teaser` (constant `HLC_TRUST_PRICE_TEASER_OPTION`). It registers
  under the same `hlc_user_fields` settings group, so one Save stores every section. The
  sanitize callback is `sanitize_text_field`.
- `hlc_default_trust_price_teaser()` returns `Hourly, from $500/hour`. The card keeps its
  current text until the first save.
- The **Services Settings** section has a new text input, "Trust Administration price teaser
  (Pricing page card)", above the rate rows. A "Rate schedule" sub-heading now labels the rate
  rows.
- New shortcode `[hlc_trust_price_teaser]`. It outputs `<p class="hp-price">…</p>`, the same
  markup as the old widget. It outputs nothing when the value is empty.

No CSS or JS change, so the `style.css` version is unchanged.

## What changed — site data (Elementor, in SQLite, not git)

Done on 2026-11-23. The theme file was copied into the running site's checkout first, so the
shortcode was live before the widget swap. (Without the code, the Shortcode widget shows the
raw text `[hlc_trust_price_teaser]`.)

On page 97, replace the HTML widget `2ae01d1` with a Shortcode widget that holds
`[hlc_trust_price_teaser]`. An Elementor HTML widget does not run shortcodes, so the widget
type must change:

1. Back up the `_elementor_data` value of post 97.
2. Decode the JSON and find the element with id `2ae01d1`.
3. Set `widgetType` to `shortcode` and `settings` to `{"shortcode":"[hlc_trust_price_teaser]"}`.
4. Save with `update_post_meta( 97, '_elementor_data', wp_slash( wp_json_encode( $data ) ) )`.
5. Clear the Elementor CSS cache with `\Elementor\Plugin::$instance->files_manager->clear_cache()`.

## Verification

In the worktree (the live theme skipped with `--skip-themes`, the worktree file loaded):

- The file loads with no parse errors.
- `[hlc_trust_price_teaser]` with no saved value prints
  `<p class="hp-price">Hourly, from $500/hour</p>`.
- A saved value with HTML prints escaped text. An empty saved value prints nothing.
- The admin page renders the new field with the default value, and the three rate rows still
  render.

In the running site, after the widget swap:

- Browser `/pricing/`: the Trust Administration card shows "Hourly, from $500/hour" with the
  same `.hp-price` style as the other two cards. No raw shortcode text shows.
- Browser wp-admin **User Fields**: a save of a test value showed on `/pricing/`. The value was
  then restored. After the save, the 3 rate rows and 4 FAQs were still present.
