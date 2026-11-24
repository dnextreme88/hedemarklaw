# Contact page — Gravity Forms contact form, map, and header nav link

## Context

The site had no Contact page and no general contact form. WordPress core has no built-in
contact form. Gravity Forms is already installed and runs the intake forms, so the
contact form uses Gravity Forms too: one form system, one entries screen, and the
existing Zapier link.

## What was built

### Gravity Forms form 17 "Contact"

| ID | Field | Type | Required |
|----|-------|------|----------|
| 1 | First Name | Single Line Text, half width | Yes |
| 2 | Last Name | Single Line Text, half width | No |
| 3 | Email | Email | Yes |
| 4 | Choose an option | Drop Down: Administration of Estates, Estate Planning, Probate | Yes |
| 5 | Any additional information you'd like to include? | Paragraph Text, copied from form 8 field 34 | No |

- Honeypot anti-spam is on. The submit uses AJAX.
- Notification "Contact form": To `justin@hedemarklaw.com`, Reply-To `{Email:3}`,
  subject "New contact form message from {First Name:1} {Last Name:2}", body
  `{all_fields}`. Justin can press Reply to answer the visitor.
- Confirmation: "Thanks for contacting us! We will get in touch with you shortly." (the
  same text as form 8).

### Where the email goes

Each Gravity Forms form has its own list of notifications (Forms → Contact → Settings →
Notifications). The **Send To** value sets the recipient. Gravity Forms gives the email
to `wp_mail()`. The **From** address is the WordPress admin email
(Settings → General). On the live host, use an SMTP plugin (for example WP Mail SMTP),
so that the email does not go to spam.

### Page "Contact" (ID 1585, `/contact/`)

Elementor page, template `elementor_header_footer`. It copies the Book page structure:

1. Hero: light blue `#F4F7F9` band with `hp-dotgrid`, 1280 px box, H1 "Contact".
2. Body: 1280 px box (aligned with the header nav), padding 64/24/96/24:
   1. Text Editor: the intro sentence about the free initial consultation.
   2. HTML widget (class `hp-map`): the Google Maps embed `<iframe>`.
   3. Shortcode: `[gravityform id="17" title="false" description="false" ajax="true"]`.
   4. HTML widget: the `hp-fineprint` disclaimer, the same as on the Book page.

There is no "Free 20-minute consultation" CTA band on this page.

### Header nav

`wp-content/themes/hello-biz-child/template-parts/header.php` hard-codes the nav. A
"Contact" item now follows "FAQs". The WordPress menu "Primary" (ID 3) also has the
item, at position 6, so that the menu stays in sync.

## Deploy

The form, the page, and the menu item are in the database. They go live with
`studio push`. Git holds only the header change and this document.

## Verification

- Empty submit: errors show for First Name, Email, and Choose an option.
- Valid submit: the confirmation shows. The entry note says "WordPress successfully
  passed the notification email to the sending server". The email that Studio captured
  has To `justin@hedemarklaw.com` and Reply-To the visitor's email.
- Gravity Forms rejects placeholder addresses such as `test@example.com` as spam
  (`is_email_rejected`). Use a realistic address for tests.
- Mobile (375 px): no horizontal scroll. The map fits the width.
