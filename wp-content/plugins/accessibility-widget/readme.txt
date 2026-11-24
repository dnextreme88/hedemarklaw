=== AccessiYes Accessibility Widget for ADA, EAA & WCAG Readiness ===
Contributors: cookieyesdev, webtoffee
Tags: web accessibility, wp accessibility, accessibility widget, accessibility toolbar, accessibility overlay
Requires at least: 5.0.0
Tested up to: 7.1.4
Requires PHP: 5.6
Stable tag: 3.2.8
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Free WordPress accessibility widget to improve accessibility for your website visitors. Supports efforts towards meeting WCAG, ADA & EAA requirements.

== Description ==

AccessiYes Accessibility Widget is a free, lightweight plugin that adds an accessibility widget to your WordPress website.

Visitors open the widget and adjust your site to suit how they read and browse. They can change font size, contrast, spacing and more, or apply a ready-made accessibility profile with one click.

The widget supports your work towards accessibility standards such as the Web Content Accessibility Guidelines (WCAG) 2.2 AA, and laws like the Americans with Disabilities Act (ADA) and the European Accessibility Act (EAA). It also includes a free accessibility statement generator, so you can publish your statement and show it right inside the widget.

**Disclaimer:**

AccessiYes Accessibility Widget is intended to support your accessibility efforts. It does not guarantee conformance with WCAG or compliance with laws such as the ADA, EAA, or other regulations. Full compliance may still require a comprehensive audit and remediation.

== Why accessibility matters ==

Over 1 billion people globally live with some form of disability. Web accessibility makes sure your content is usable by everyone, including people with visual, cognitive, motor, and neurological impairments.

WordPress powers over 43% of all websites in 2026, so improving accessibility on WordPress sites makes a real difference to how inclusive the web is.

AccessiYes gives your visitors simple tools to change how your website looks and behaves based on their needs, while you continue improving accessibility in your site's code.

== Features ==

= Accessibility profiles =
* **One-click profiles:** Visitors can apply a preset combination of settings built for a specific need. Available profiles are Low Vision, ADHD, Seizure Safe and Epilepsy Safe.

= Text and Reading =
* **Font size controls:** Increase or decrease the font size for easier reading.
* **Highlight title:** Emphasise page headings to help visitors scan content.
* **Highlight links:** Make every link on the page stand out.
* **Dyslexia-friendly font:** Switch the site to a high-legibility font.
* **Font weight:** Make text bolder for better visibility.
* **Letter spacing and line height:** Adjust text spacing to support visitors with dyslexia or other reading difficulties.
* **Text alignment:** Align content to the left, center or right.

= Color and Contrast =
* **Contrast modes:** Dark Contrast, Light Contrast and High Contrast.
* **Saturation options:** High saturation, low saturation and monochrome (grayscale) views.

= Navigation and Interaction =
* **Reading guide:** A horizontal band that helps visitors keep their place while reading. It works on mobile too, where the band can be tapped or dragged into position.
* **Pause animations:** Stops CSS animations, animated GIFs and autoplaying videos that may distract or cause discomfort.
* **Big cursor:** A larger, higher-contrast cursor.
* **Page reader:** Reads page content aloud when visitors select, click or tab to it.
* **Mute sounds:** Mutes all audio on the page.
* **Keyboard shortcut:** Visitors can open and close the widget with Alt+A (Windows) or Option+A (Mac), without using a mouse.

= Accessibility statement =
* **Statement generator:** Create an accessibility statement inside the plugin. Choose your target standard (WCAG 2.2, 2.1 or 2.0 Level AA, or another standard) and your conformance status, then preview, copy or edit the result.
* **Show the statement inside the widget:** Visitors can read your generated statement in a panel within the widget, in their own language. The statement is available in 21 languages and falls back to English.
* **Link an existing statement:** Already have a statement page or VPAT? Link it, and the widget will open it in a new tab.

= Widget customisation =
* **Look and feel:** Pick the widget colour, icon (four shapes) and size (small, medium or large). A built-in reminder helps you check your colour against WCAG AA contrast guidelines.
* **Position:** Place the widget in any corner and set separate margins for desktop and mobile.
* **Device visibility:** Show or hide the widget on desktop and mobile separately.
* **Choose the features visitors see:** Turn individual features on or off from the Modules tab, so the widget only shows the options your audience needs.

= Languages =
* **58 languages:** The widget appears in the visitor's browser language. If that language isn't supported, it uses the default language you choose.
* **Multilingual sites:** When your page language changes, the widget switches to match. This works with translation plugins that update the page language.

= Built to stay out of your way =
* **Isolated styling:** The widget loads separately from your theme, so your site's CSS won't break it and it won't change your site's design.
* **No visitor tracking:** The plugin does not collect or store personal data about your visitors.

**Need help?** Post in the [WordPress.org support forum](https://wordpress.org/support/plugin/accessibility-widget/) and our team will get back to you.

**Got feedback about the plugin?** We'd love to hear it. Write to us at support@accessiyes.com.

*Note: AccessiYes is a standalone accessibility widget developed by CookieYes. It works independently and does not need a CookieYes account.*

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. The accessibility widget appears on your site straight away. No setup required.
4. Optional: go to **AccessiYes** in your WordPress admin menu to customise the widget, generate an accessibility statement, or choose which features visitors see.

== Frequently Asked Questions ==

= Will this plugin make my website compliant with accessibility laws? =
The widget supports your efforts towards WCAG, ADA, EAA and EN 301 549, and gives visitors more ways to use your site. It does not guarantee full legal compliance on its own. A complete accessibility audit and fixes to your site's code may still be needed.

= Does the plugin collect visitor data? =
No. The plugin does not track or store any personal data about your visitors. Visitor preferences are saved only in their own browser so their settings stay in place as they move between pages.

= Can visitors reset the settings they applied? =
Yes. The widget has a Reset button at the top and at the bottom of the menu.

= Does the widget work on multilingual websites? =
Yes. The widget supports 58 languages and follows the visitor's browser language. It also updates automatically when the page language changes. The generated accessibility statement is available in 21 languages.

= Can I choose which features appear in the widget? =
Yes. Open the Modules tab in the plugin settings and turn individual features on or off across Accessibility Profile, Text and Reading, Color and Contrast, and Navigation and Interaction. Visitors only see the features you enable.

= How do I show my accessibility statement in the widget? =
Go to the Statement tab. Generate a statement and turn on "Display in widget overlay" to show it inside the widget, or turn on "Link statement on widget" and add the URL of your existing statement page.

= What is the keyboard shortcut to open the widget? =
Alt+A on Windows and Linux, or Option+A on Mac. Turn it on under Settings > Enable keyboard shortcut. It is off by default.

= Can developers customise the widget with code? =
Yes. The plugin includes these hooks:

* `cya11y_keyboard_shortcut` (filter): change the keyboard shortcut, for example `shift+alt+w`.
* `cya11y_focus_ring_color` (filter): set a custom hex colour for the focus ring inside the widget.
* `cya11y_show_language_selector` (filter): return false to hide the language selector from the widget menu.
* `cya11y_is_module_active_{module_id}` (filter): turn a module on or off in code.
* `cya11y_after_update_settings` (action): runs after the plugin settings are saved.
* `cya11y_after_activate` (action): runs after the plugin is activated.
* `cya11y:widgetStateChanged` (JavaScript event): fires on `window` whenever a visitor changes a widget setting.

== External services ==

This plugin connects to an external service only when you choose to share deactivation feedback.

**CookieYes feedback service**
When you deactivate the plugin, a short optional form asks why. If you click "Submit & Deactivate", the following is sent to `https://feedback.cookieyes.com`: the reason you selected, any comment you typed, your email address if you entered one, your site URL, and technical details about your setup (WordPress, PHP, MySQL and plugin versions, server software, site language, active theme, and whether the site is a multisite). If you click "Skip & Deactivate", nothing is sent. This data is used only to improve the plugin.
Privacy policy: https://www.cookieyes.com/privacy-policy/

The plugin admin also shows optional links to WebYes (an accessibility scanner and a free accessibility consultation). These are plain links. No data is sent unless you click them and use those services.

== Screenshots ==

1. Accessibility menu with profiles, text, colour and navigation tools.
2. Customise the widget language, colour, icon, size and position, with a live desktop and mobile preview.
3. Generate an accessibility statement or link your existing statement page.
4. General settings: show the widget on desktop and mobile, and turn on the keyboard shortcut.
5. Choose which accessibility features visitors see in the widget.

== Changelog ==

= 3.2.8 2026-11-10 =

[Add] - Added the `cya11y_show_language_selector` filter to hide the language selector from the widget menu. The widget still auto-translates to the visitor's page or browser language, or the default language set in the admin settings.
[Fix] - The widget no longer logs "Invalid original font size for element" console warnings on pages where Elementor sets a zero font size on social icon containers.
[Fix] - The widget now switches language right away when the page language changes while the menu is open.

= 3.2.7 2026-11-03 =

[Add] - Added Slovenian accessibility statement template.
[Fix] - Colour filter modes (High Contrast, High Saturation, Low Saturation, Monochrome) no longer break the page layout, such as sliders shrinking or sticky headers scrolling away.
[Fix] - Features turned off in the admin settings no longer stay active for visitors who had enabled them earlier.
[Fix] - The back button on the accessibility statement panel is now translated.
[Fix] - Serbian (Cyrillic) can now be selected as the widget's default/enabled language in the admin settings.
[Fix] - Added missing Galician language option to the widget language list in the admin settings.
[Compatibility] - Tested OK with WordPress version 7.1.4.

= 3.2.6 2026-08-24 =

[Add] - Renamed widget menu categories for clarity
[Enhancement] - Improved color contrast in the widget's dark and light themes.
[Fix] - Widget aria-labels are now translatable.
[Fix] - Fixed translation function issue in the settings dashboard, backend strings can now be translated using translation plugins.

= 3.2.5 2026-07-09 =

[Fix] - Page reader now reads content on click and keyboard focus, in addition to text selection.
[Fix] - Updated and corrected widget translations across all supported languages.

= 3.2.4 2026-06-30 =

[Fix] - Pause Animations now also stops animated GIFs and autoplaying videos, not just CSS animations.
[Fix] - Reading Guide no longer leaves a fixed dark overlay on mobile/touch devices; the reading band can be repositioned by tapping a line or dragging the handle.

= 3.2.3 2026-06-18 =

[Add] - Additional widget language support: Simplified Chinese and Traditional Chinese.

= 3.2.2 2026-05-21 =

[Fix] - Admin settings UI conflict with other plugins declaring `React` globally.

= 3.2.1 2026-05-06 =

[Add] - Accessibility profile feature.
[Add] - Add screen reader and mute sound features.
[Enhancement] - Improve the low sturation and text alignment features.
[Compatibility] - Tested OK with WordPress version 7.0.

= 3.2.0 2026-04-22 =

[Add] - New Modules tab in admin settings to enable or disable individual accessibility features.
[Add] - Keyboard shortcut support to open and close the accessibility widget (default: Alt+A/Option+A).
[Enhancement] - Focus indicators on widget interactive elements are now dynamic for improved keyboard navigation visibility.

= 3.1.3 2026-03-30 =

[Fix] - Resolved missing pointer cursors on various interactive UI elements within the plugin settings dashboard.
[Fix] - Fixed translation issue for the "Reset settings" button in the accessibility widget.
[Add] - Global WordPress admin notice for the review banner to improve visibility.
[Enhancement] - Refactored uninstall feedback modal layout and removed the mandatory option selection requirement.
[Enhancement] - Updated plugin support links to point directly to the WordPress.org support forum.

= 3.1.2 2026-03-13 =

[Add] - Accessibility statement generator.
[Fix] - Ensure 'disableContrast()' removes the class from '<body>' instead of 'documentElement'.
[Enhancement] - Add 'cya11y-dark-contrast' body class when Dark Contrast mode is active to allow site CSS overrides.
[Enhancement] - Add 'nav' to 'DARK_CONTRAST_SELECTORS' to support pagination elements in Dark Contrast mode.

= 3.1.1 2026-02-19 =

[Add] - Implemented the uninstall feedback pop.
[Enhancement] - Removed the tooltip from the widget button and enhanced widget focus visibility.
[Fix] - Minor bugs.

= 3.1.0 2026-02-04 =

[Fix] - The Reading Guide is not functional when color adjustment modes such as High Contrast, High Saturation, Low Saturation, or Monochrome are enabled.

= 3.0.9.1 2026-02-02 =

[Fix] - Font size reset preserves original inline styles.

= 3.0.9 2026-01-13 =

[Fix] - Font size override issue.

= 3.0.8 2025-12-26 =

[Fix] - Incorrect font size issue.

= 3.0.7 2025-12-4 =

[Compatibility] – Tested OK with WordPress version 6.9.
[Add] - Ukrainian language support.
[Fix] - Minor fixes.

= 3.0.6 2025-10-16 =

[Add] - Latvian and Lithuanian language support.
[Fix] - Minor fixes.

= 3.0.5 2025-09-24 =

[Fix] - Removed duplicate entry of slovene language.

= 3.0.4 2025-08-18 =

[Fix] - Language is not loading properly when Norwegian bokmål is selected.
[Enhancement] - Added custom event "cya11y:widgetStateChanged" to track widget changes.

= 3.0.3 2025-07-31 =

[Fix] - Resolved a conflict issue with the MonsterInsights plugin.
[Fix] - Corrected fallback language behavior when translation for the site language is unavailable.
[Fix] - Language files were not loading properly when a caching plugin is active.

= 3.0.2 = 

[Fix] – Added translation to the widget button tooltip

= 3.0.1 = 

[Enhancement] - New improved UI

= 3.0.0 = 

[Compatibility] - Tested OK with WordPress version 6.8
[Enhancement] - Added accessibility widget
[Enhancement] - New improved UI

== Upgrade Notice ==

= 3.2.8 2026-11-10 =

[Add] - Added the `cya11y_show_language_selector` filter to hide the language selector from the widget menu. The widget still auto-translates to the visitor's page or browser language, or the default language set in the admin settings.
[Fix] - The widget no longer logs "Invalid original font size for element" console warnings on pages where Elementor sets a zero font size on social icon containers.
[Fix] - The widget now switches language right away when the page language changes while the menu is open.
