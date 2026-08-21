# Elementor "Services" page for Hedemark Law

**Executed:** 2026-08-22

## Context

The site's nav already linked **Services → `/services/`**, but that page didn't exist yet (it
404'd — a standing follow-up in the About and Homepage plans). This task built the **Services**
page with **Elementor**, mirroring the static mockup at
`C:\Users\storm\Documents\Hedemarklaw\hedemark-law-redesign\services.html`: **text copied
verbatim**, **layout** matched, and **font sizes** matched. It is the fourth page on the
established brand system (About id 20, Blog id 36, Home id 83) — reusing the `hello-biz-child`
theme, Elementor kit **id 6** globals, and the `hp-*` helper classes, adding a small set of
`.hp-svc-*` helpers for the services-list rows.

## Environment

- WordPress Studio (SQLite, PHP 8.3, WP 7.0.4) at `http://localhost:8881/`. All `wp` via
  `studio wp` (PowerShell; `studio` is not on the Bash PATH).
- Elementor **4.2.2** (flex **container** layout), active kit **id 6**. Theme
  `hello-biz-child` (parent `hello-biz` 1.2.2); header/footer are global via
  `template-parts/header.php` / `footer.php` — not rebuilt here. Kit uses Elementor's default
  boxed width (1140), so each section's inner container pins **`boxed_width: 1280px`** to match
  the mockup's `max-w-7xl`.

## What was implemented

1. **Assets.** Imported the three mockup service images (attachment ids **92**
   `services-bg-estate-planning.avif`, **93** `services-bg-probate.avif`, **94**
   `services-bg-trust-administration.avif`).

2. **Services page (id 95, published, slug `services`, template `elementor_header_footer`).**
   `_elementor_data` = **4 top-level flex containers** mirroring `services.html`, all carrying
   literal brand hex + Fraunces / Inter / IBM Plex Mono typography set directly on the widgets
   (responsive: desktop / tablet / mobile):
   - **Header band** — fog background + `.hp-dotgrid` dotted grid, ~160px top padding. Azure
     IBM Plex Mono uppercase eyebrow "Legal services" (24px, 0.3em tracking) + Fraunces ink H1
     "Helping your families one step ahead." (48/36px), clamped by `.hp-measure` (max-width
     768px) so it wraps like the mockup's `max-w-3xl`; its Elementor default 10px container
     padding is zeroed so the eyebrow/H1 align flush-left with the checklist below. A Text
     widget `.hp-checklist`
     with the literal ✅ list (18px, ink): "20 minutes / Free Consultation / Phone or Online".
   - **Services list** — three `.hp-svc-row` rows (media `1fr` / body `2fr`), gap 40px, each
     `py-10`; rows 2 & 3 add `.hp-svc-row--divided` (top hairline). Each media column: image
     (rounded 16px, cropped to 160px via `object-fit: cover`) + Fraunces H2 (30/24px, ink).
     Body: muted Inter paragraphs at `line-height: 1.625`. Text verbatim (Estate Planning =
     one paragraph; Probate & Trust Administration = two each).
   - **Cancellation Policy** — top hairline border, `py-16`. Fraunces ink H2 (60/48px) +
     muted paragraph "For cancellations, please contact us twenty-four (24) hours in advance."
   - **CTA** — full-bleed **ink** band via a single **HTML widget** reusing the existing
     `.hp-cta` component (bluelight mono eyebrow "Free 20-minute consultation", Fraunces white
     H2 "Your family shouldn't have to guess.", muted subtext, "Book online" `#` + phone
     `tel:` pill buttons). Reusing `.hp-cta` guarantees pixel-consistency with the single-post
     CTA and avoids hand-tuning button controls.

3. **hello-biz child theme CSS** (`assets/child.css`): added a **SERVICES** block —
   `.hp-measure` (768px clamp), `.hp-checklist` (✅ list), and `.hp-svc-row` /
   `.hp-svc-media` (`flex:1 1 0`) / `.hp-svc-body` (`flex:2 1 0`) using the same
   "pin flex children past Elementor's forced `width:100%`" technique as `.hp-about-row` /
   `.hp-stat`, stacking under 767px, plus `.hp-svc-row--divided` and the rounded/cropped
   image rule. Bumped child theme **1.2.13 → 1.2.14** to bust the versioned CSS enqueue.

## Verification

- Page **id 95** published at `/services/`; `_wp_page_template=elementor_header_footer`;
  `_elementor_data` valid JSON (builder mode). `post-95.css` generated. No PHP
  Warning/Notice/Fatal in the rendered output.
- **Computed styles (live DOM, desktop 1280px):** eyebrow IBM Plex Mono 24px azure
  `rgb(15,76,133)` 7.2px tracking uppercase; H1 Fraunces 48px ink `rgb(0,48,91)` line-height
  60px, block width 748px (wraps); services rows 1:2 (media ~399 / body ~778, `flex-direction:
  row`); service images 160px tall, `object-fit: cover`, 16px radius; dividers 1px hairline;
  service H2 Fraunces 30px ink; Cancellation H2 60px; body paragraph line-height 26px/16px
  (1.625); CTA band `rgb(0,48,91)` full-bleed, Fraunces 48px white title; nav "Services" =
  `current-menu-item`; ✅ checklist renders (18px).
- **Mobile (375px):** rows wrap and stack full-width (media & body 327px each); H1 36px, H2
  24px, eyebrow 16px; document scrollWidth 375 — **no horizontal overflow**.

## Follow-ups / notes

- "Book online" links to a `#` placeholder (matches Home/About until a real booking page exists).
- The page content lives only in the **gitignored SQLite DB** — the durable artifacts are the
  `child.css` / `style.css` changes and this plan. The provisioning script
  (`build-services.php`) was run from a scratch dir and is **not committed** (mirrors the
  About/Blog/Home approach).
