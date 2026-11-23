<?php
/**
 * One-off migration: UI/UX restyle of the Elementor pages.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/restyle-pages-20261111.php
 *
 * What it changes (see docs/plans/20261111-ui-ux-restyle.md):
 *
 * - Eyebrows: the small IBM Plex Mono labels go.
 *   - A label directly above a heading is deleted (the heading says it already).
 *   - "Pricing" above a pricing subpage title becomes a breadcrumb link to /pricing/.
 *   - A label that is the only title of its section becomes a real h2.
 *   - "Step 1 — Initial intake" becomes one plain sentence about the two parts.
 *   - Stat labels (div) keep their text and change to Inter, sentence case.
 * - Divider widgets (thin rules) and the icons on the home service cards are deleted.
 * - Home "Who we help" cards become a list (class hp-helplist), so it no longer repeats
 *   the service card row above it.
 * - Home testimonials and the probate calculator get new markup. Their behaviour moved
 *   to the theme file assets/ux.js, so the widgets no longer carry inline scripts.
 * - Services checklist: emoji check marks become a plain list.
 * - Booking pages: the titles say what the page books.
 * - The shared "Free 20-minute consultation" band is added to About, FAQs and the six
 *   placeholder pages, so no page ends without a next step.
 *
 * Pages are found by path. The script saves through Elementor (a revision per page and
 * a CSS rebuild). A second run finds nothing to change and saves nothing.
 */

if ( ! class_exists( '\Elementor\Plugin' ) ) {
	echo "ERROR: Elementor is not active. Aborting.\n";
	return;
}

$admins = get_users( array( 'role' => 'administrator', 'number' => 1, 'fields' => 'ID' ) );
if ( empty( $admins ) ) {
	echo "ERROR: No administrator user found. Aborting.\n";
	return;
}
wp_set_current_user( (int) $admins[0] );

const HLC_MONO = 'IBM Plex Mono';

/* ---------------------------------------------------------------------
   Markup used by the script
   --------------------------------------------------------------------- */

function hlc_rs_cta_html() {
	$arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
	$phone = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>';
	return '<section class="hp-cta"><div class="hp-cta__inner"><h2 class="hp-cta__title">Free 20-minute consultation</h2><p class="hp-cta__text">Tell us what&#8217;s going on, and we&#8217;ll tell you plainly what your options are &#8212; no pressure, no obligation.</p><div class="hp-cta__actions"><a class="hp-cta__btn hp-cta__btn--primary" href="/book/">Book online ' . $arrow . '</a><a class="hp-cta__btn hp-cta__btn--ghost" href="tel:+14156921503">' . $phone . ' 415-692-1503</a></div></div></section>';
}

/**
 * Testimonials: the four quotes from the old widget, with real controls. The first
 * slide is visible without JavaScript; ux.js hides the others and adds the dots.
 */
function hlc_rs_testimonials_html() {
	$quotes = array(
		array( 'Justin Hedemark is a thoughtful and responsive Estate Planner. He cares deeply for his clients and looks for the best outcome possible when setting up plans.', 'Patrick G.' ),
		array( 'I wish I could give Justin 10 stars for his hard work and dedication in helping me with my Living Trust. He was exceptional and very thorough in dealing with all my concerns.', 'Ernesto V.' ),
		array( 'Justin is very approachable, friendly and objective. I have no hesitation when referring my real estate clients or friends to Justin for estate planning services.', 'Patrick G.' ),
		array( 'After having estate planning on my list of to-do&#8217;s for several years I finally found the perfect partner to help me get it done. Justin was fantastic to work with on this! His clarity, patience and deep knowledge of this subject area turned what was a dreaded chore into a fun and enlightening experience.', 'Marcia G.' ),
	);
	$star = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>';
	$html = '<div class="hp-testi" role="region" aria-roledescription="carousel" aria-label="Client testimonials"><div class="hp-testi__track" aria-live="off">';
	foreach ( $quotes as $i => $q ) {
		$html .= '<figure class="hp-testi__slide"' . ( $i ? ' hidden' : '' ) . '>';
		$html .= '<div class="hp-testi__stars" role="img" aria-label="5 out of 5 stars">' . str_repeat( $star, 5 ) . '</div>';
		$html .= '<blockquote class="hp-testi__quote"><p>&#8220;' . $q[0] . '&#8221;</p></blockquote>';
		$html .= '<figcaption class="hp-testi__name">' . $q[1] . '</figcaption></figure>';
	}
	$html .= '</div><div class="hp-testi__controls">';
	$html .= '<button type="button" class="hp-testi__prev" aria-label="Previous testimonial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>';
	$html .= '<div class="hp-testi__dots"></div>';
	$html .= '<button type="button" class="hp-testi__next" aria-label="Next testimonial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>';
	$html .= '<button type="button" class="hp-testi__pause" aria-pressed="false">Pause</button>';
	$html .= '</div></div>';
	return $html;
}

/** Probate calculator: a text field that accepts "1,250,000" or "$1250000". */
function hlc_rs_calc_html() {
	return '<div class="hp-calc">'
		. '<div class="hp-calc__inputrow">'
		. '<label class="hp-calc__label" for="hp-estate-value">Gross estate value</label>'
		. '<div class="hp-calc__field"><span class="hp-calc__prefix" aria-hidden="true">$</span>'
		. '<input class="hp-calc__input" id="hp-estate-value" type="text" inputmode="decimal" autocomplete="off" placeholder="1,000,000" aria-describedby="hp-calc-help hp-calc-error"></div>'
		. '</div>'
		. '<p class="hp-calc__error" id="hp-calc-error" hidden>Enter the value in dollars, for example 1,250,000.</p>'
		. '<div class="hp-calc__results" id="hp-calc-results" aria-live="polite" hidden>'
		. '<div class="hp-calc__row"><span class="hp-calc__row-label">Statutory attorney fee</span><span class="hp-calc__row-value" id="hp-calc-att">$0</span></div>'
		. '<div class="hp-calc__row"><span class="hp-calc__row-label">Executor / representative fee (identical, &sect;10800)</span><span class="hp-calc__row-value" id="hp-calc-exec">$0</span></div>'
		. '<div class="hp-calc__row hp-calc__row--total"><span class="hp-calc__row-label">Typical total estate cost</span><span class="hp-calc__row-value" id="hp-calc-total">$0</span></div>'
		. '</div>'
		. '<p class="hp-calc__note" id="hp-calc-over" hidden>These figures cover the statutory portion on the first $25,000,000. The amount above $25,000,000 is a reasonable fee determined by the court.</p>'
		. '<p class="hp-calc__note" id="hp-calc-help">Fees are calculated on the gross estate value &mdash; mortgages and debts are not subtracted. The personal representative or executor is entitled to an identical fee under Probate Code &sect;10800, so the total estate cost is typically double the attorney fee &mdash; unless a family member serving as executor waives their fee.</p>'
		. '<p class="hp-calc__disclaimer">This is an estimate only, not legal advice. Actual fees, including extraordinary fees, may vary. Consult the firm about your specific case.</p>'
		. '</div>';
}

/* ---------------------------------------------------------------------
   Element helpers
   --------------------------------------------------------------------- */

function hlc_rs_id( $seed ) {
	return substr( md5( 'hlc-restyle-' . $seed ), 0, 7 );
}

function hlc_rs_is_mono( $el ) {
	return 'heading' === ( $el['widgetType'] ?? '' ) && HLC_MONO === ( $el['settings']['typography_font_family'] ?? '' );
}

function hlc_rs_is_heading( $el ) {
	return 'heading' === ( $el['widgetType'] ?? '' ) && in_array( $el['settings']['header_size'] ?? 'h2', array( 'h1', 'h2', 'h3', 'h4' ), true );
}

/** Turn a mono label into a section h2 with the given text. */
function hlc_rs_to_h2( array $el, $title ) {
	$s = $el['settings'];
	foreach ( array_keys( $s ) as $k ) {
		if ( 0 === strpos( $k, 'typography_' ) || 'title_color' === $k ) {
			unset( $s[ $k ] );
		}
	}
	$s['title']       = $title;
	$s['header_size'] = 'h2';
	$s['css_classes'] = 'hp-h2';
	$el['settings']   = $s;
	return $el;
}

function hlc_rs_text( $seed, $html, $class = '' ) {
	$settings = array( 'editor' => $html );
	if ( $class ) {
		$settings['css_classes']  = $class;
		$settings['_css_classes'] = $class;
	}
	return array( 'id' => hlc_rs_id( $seed ), 'elType' => 'widget', 'settings' => $settings, 'elements' => array(), 'widgetType' => 'text-editor' );
}

/**
 * Walk a list of sibling elements and apply the rules.
 *
 * @param array  $els     Sibling elements.
 * @param string $path    Page path (rules differ per page).
 * @param int    $changes Change count, by reference.
 * @param bool   $in_card True inside a .hp-card container.
 * @return array
 */
function hlc_rs_walk( array $els, $path, &$changes, $in_card = false ) {
	$out   = array();
	$count = count( $els );
	for ( $i = 0; $i < $count; $i++ ) {
		$el       = $els[ $i ];
		$type     = $el['widgetType'] ?? $el['elType'];
		$settings = $el['settings'] ?? array();
		$classes  = (string) ( $settings['css_classes'] ?? '' );
		$next     = $els[ $i + 1 ] ?? null;

		// Thin rules.
		if ( 'divider' === $type ) {
			$changes++;
			continue;
		}

		// Icons in circles on the home service cards.
		if ( $in_card && 'icon' === $type ) {
			$changes++;
			continue;
		}

		if ( hlc_rs_is_mono( $el ) ) {
			$title = trim( wp_strip_all_tags( (string) ( $settings['title'] ?? '' ) ) );
			$size  = $settings['header_size'] ?? 'h2';

			if ( 'div' === $size ) {
				// Stat label: same words, Inter, sentence case.
				foreach ( array( 'typography_text_transform', 'typography_letter_spacing', 'typography_letter_spacing_mobile', 'typography_letter_spacing_tablet' ) as $k ) {
					unset( $el['settings'][ $k ] );
				}
				$el['settings']['typography_font_family'] = 'Inter';
				$el['settings']['typography_font_size']   = array( 'unit' => 'px', 'size' => 15, 'sizes' => array() );
				$el['settings']['css_classes']            = 'hp-statlabel';
				$changes++;
			} elseif ( 0 === stripos( $title, 'Step 1' ) ) {
				$out[] = hlc_rs_text( $path . '-progress', '<p>Fill in this short intake first. Next, you choose a time for your call on Justin&#8217;s calendar.</p>', 'hp-progress' );
				$changes++;
				continue;
			} elseif ( 'Pricing' === $title && 0 === strpos( $path, 'pricing/' ) ) {
				$out[] = hlc_rs_text( $path . '-crumb', '<nav aria-label="Breadcrumb"><a href="/pricing/">All pricing</a></nav>', 'hp-crumb' );
				$changes++;
				continue;
			} elseif ( $next && hlc_rs_is_heading( $next ) ) {
				// Eyebrow over a heading: the heading carries the section.
				$changes++;
				continue;
			} else {
				$map = array(
					'In their words'             => 'What clients say',
					'Frequently Asked Questions' => 'Frequently asked questions',
				);
				$el = hlc_rs_to_h2( $el, $map[ $title ] ?? $title );
				$changes++;
			}
		}

		// Elementor buttons: the brand blue #377DBD gives white text only 4.3:1, under
		// the WCAG AA minimum of 4.5:1. Filled buttons take the action blue #2D6CA8
		// (5.5:1) and a darker hover; outlined buttons get a solid border and a filled
		// hover. Every button gets the 16px label and the shared state class.
		if ( 'button' === $type && false === strpos( $classes, 'hp-ebtn' ) ) {
			$s      = &$el['settings'];
			$bg     = strtoupper( (string) ( $s['background_color'] ?? '' ) );
			$text   = strtoupper( (string) ( $s['button_text_color'] ?? '' ) );
			$filled = '' !== $bg && 0 !== strpos( $bg, 'RGBA(0,0,0,0' ) && 'TRANSPARENT' !== $bg;
			if ( $filled ) {
				$s['background_color']              = '#2D6CA8';
				$s['button_background_hover_color'] = '#0F4C85';
				$s['button_hover_color']            = '#FFFFFF';
				$s['css_classes']                   = trim( $classes . ' hp-ebtn hp-ebtn--primary' );
			} else {
				$on_dark                            = in_array( $text, array( '#FFFFFF', '#F4F7F9' ), true );
				$s['border_border']                 = 'solid';
				$s['border_width']                  = array( 'unit' => 'px', 'top' => '1', 'right' => '1', 'bottom' => '1', 'left' => '1', 'isLinked' => true );
				$s['border_color']                  = $on_dark ? 'rgba(244,247,249,0.7)' : '#00305B';
				$s['button_background_hover_color'] = $on_dark ? '#F4F7F9' : '#00305B';
				$s['button_hover_color']            = $on_dark ? '#00305B' : '#FFFFFF';
				$s['button_hover_border_color']     = $on_dark ? '#F4F7F9' : '#00305B';
				$s['css_classes']                   = trim( $classes . ' hp-ebtn hp-ebtn--ghost' );
			}
			$s['typography_font_size'] = array( 'unit' => 'px', 'size' => 16, 'sizes' => array() );
			$s['text_padding']         = array( 'unit' => 'px', 'top' => '14', 'right' => '26', 'bottom' => '14', 'left' => '26', 'isLinked' => false );
			unset( $s );
			$changes++;
		}

		// Text widgets: running text at 17px when a widget set it under 16px, and the
		// full ink in place of the soft grey #525252.
		if ( 'text-editor' === $type ) {
			foreach ( array( 'typography_font_size', 'typography_font_size_tablet', 'typography_font_size_mobile' ) as $k ) {
				$fs = $settings[ $k ] ?? null;
				if ( is_array( $fs ) && 'px' === ( $fs['unit'] ?? 'px' ) && ! empty( $fs['size'] ) && (float) $fs['size'] < 16 ) {
					$el['settings'][ $k ]['size'] = 17;
					$changes++;
				}
			}
			if ( '#525252' === strtoupper( (string) ( $settings['text_color'] ?? '' ) ) ) {
				$el['settings']['text_color'] = '#22384D';
				$changes++;
			}
		}

		// Home: "Who we help" row becomes a list.
		if ( 'home' === $path && false !== strpos( $classes, 'hp-cards-row' ) && ! empty( $el['elements'] ) && ! empty( $el['elements'][0]['settings']['link']['url'] ) ) {
			$el['settings']['css_classes'] = 'hp-helplist';
			foreach ( $el['elements'] as &$child ) {
				$child['settings']['css_classes'] = 'hp-helpitem';
			}
			unset( $child );
			$changes++;
		}

		// The "Who we help" items carry a link, but a container renders it only when
		// its HTML tag is "a". Without this the items were not clickable.
		if ( false !== strpos( $classes, 'hp-helpitem' ) && ! empty( $settings['link']['url'] ) && 'a' !== ( $settings['html_tag'] ?? '' ) ) {
			$el['settings']['html_tag'] = 'a';
			$changes++;
		}

		// Services rows get ids, so /services/#probate (from the home page) lands on the row.
		if ( 'services' === $path && false !== strpos( $classes, 'hp-svc-row' ) && empty( $settings['_element_id'] ) ) {
			$text = strtolower( wp_strip_all_tags( wp_json_encode( $el['elements'] ) ) );
			foreach ( array( 'trust administration' => 'trust-administration', 'estate planning' => 'estate-planning', 'probate' => 'probate' ) as $needle => $anchor ) {
				if ( preg_match( '/"title":"' . preg_quote( $needle, '/' ) . '"/', $text ) ) {
					$el['settings']['_element_id'] = $anchor;
					$changes++;
					break;
				}
			}
		}

		// Home testimonials.
		if ( 'html' === $type && false !== strpos( (string) ( $settings['html'] ?? '' ), 'hp-testi' ) && false === strpos( (string) $settings['html'], 'hp-testi__controls' ) ) {
			$el['settings']['html'] = hlc_rs_testimonials_html();
			$changes++;
		}

		// Probate calculator.
		if ( 'html' === $type && false !== strpos( (string) ( $settings['html'] ?? '' ), 'hp-estate-value' ) && false === strpos( (string) $settings['html'], 'hp-calc__error' ) ) {
			$el['settings']['html'] = hlc_rs_calc_html();
			$changes++;
		}

		// Services checklist: emoji to a plain list.
		$editor = (string) ( $settings['editor'] ?? '' );
		if ( 'text-editor' === $type && false !== strpos( $classes, 'hp-checklist' ) && ( false !== strpos( $editor, '&#9989;' ) || false !== strpos( $editor, "\u{2705}" ) ) ) {
			$el['settings']['editor'] = '<ul><li>20 minutes</li><li>Free consultation</li><li>By phone or online</li></ul>';
			$changes++;
		}

		// Booking page titles.
		if ( 'heading' === $type && 'h1' === ( $settings['header_size'] ?? '' ) && 0 === strpos( $path, 'book' ) ) {
			$titles = array(
				'book'                         => 'Book a free consultation',
				'book/estate-planning'         => 'Book an estate planning consultation',
				'book/probate'                 => 'Book a probate consultation',
				'book/trust-administration'    => 'Book a trust administration consultation',
			);
			if ( isset( $titles[ $path ] ) && $titles[ $path ] !== $settings['title'] ) {
				$el['settings']['title'] = $titles[ $path ];
				$changes++;
			}
		}

		if ( ! empty( $el['elements'] ) ) {
			$el['elements'] = hlc_rs_walk( $el['elements'], $path, $changes, $in_card || false !== strpos( $classes, 'hp-card' ) );
		}

		// Elementor renders a widget's classes from `_css_classes` (containers read
		// `css_classes`). Keep the two the same so every class set above shows.
		if ( 'widget' === ( $el['elType'] ?? '' ) && ! empty( $el['settings']['css_classes'] ) && ( $el['settings']['_css_classes'] ?? '' ) !== $el['settings']['css_classes'] ) {
			$el['settings']['_css_classes'] = $el['settings']['css_classes'];
			$changes++;
		}
		$out[] = $el;
	}
	return $out;
}

function hlc_rs_has_cta( array $els ) {
	foreach ( $els as $el ) {
		if ( false !== strpos( (string) ( $el['settings']['html'] ?? '' ), 'hp-cta' ) ) {
			return true;
		}
		if ( ! empty( $el['elements'] ) && hlc_rs_has_cta( $el['elements'] ) ) {
			return true;
		}
	}
	return false;
}

/* ---------------------------------------------------------------------
   Run
   --------------------------------------------------------------------- */

$paths = array(
	'home', 'about', 'services', 'services/estate-planning', 'services/probate', 'services/trust-administration',
	'pricing', 'pricing/estate-planning', 'pricing/probate', 'pricing/trust-administration',
	'faqs', 'blog', 'book', 'book/estate-planning', 'book/probate', 'book/trust-administration',
	'real-estate', 'estate-law', 'out-of-state-executors-heirs',
);
$add_cta = array( 'about', 'faqs', 'services/estate-planning', 'services/probate', 'services/trust-administration', 'real-estate', 'estate-law', 'out-of-state-executors-heirs' );

foreach ( $paths as $path ) {
	$page = get_page_by_path( $path, OBJECT, 'page' );
	if ( ! $page || 'publish' !== $page->post_status ) {
		echo "ERROR: No published page at '{$path}'. Skipped.\n";
		continue;
	}
	$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
	$data     = $document ? $document->get_elements_data() : array();
	if ( empty( $data ) ) {
		echo "ERROR: '{$path}' (id {$page->ID}) has no Elementor data. Skipped.\n";
		continue;
	}

	$changes = 0;
	$data    = hlc_rs_walk( $data, $path, $changes );

	if ( in_array( $path, $add_cta, true ) && ! hlc_rs_has_cta( $data ) ) {
		$data[] = array(
			'id'       => hlc_rs_id( $path . '-cta' ),
			'elType'   => 'container',
			'settings' => array(
				'content_width'  => 'full',
				'flex_direction' => 'column',
				'padding'        => array( 'unit' => 'px', 'top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0', 'isLinked' => false ),
			),
			'elements' => array(
				array( 'id' => hlc_rs_id( $path . '-cta-html' ), 'elType' => 'widget', 'settings' => array( 'html' => hlc_rs_cta_html() ), 'elements' => array(), 'widgetType' => 'html' ),
			),
			'isInner'  => false,
		);
		$changes++;
	}

	if ( 0 === $changes ) {
		echo "'{$path}' (id {$page->ID}): nothing to change.\n";
		continue;
	}
	$document->save( array( 'elements' => $data ) );
	echo "'{$path}' (id {$page->ID}): {$changes} change(s) saved.\n";
}

/*
 * Estate planning intake page (Gutenberg, Elementor Canvas template, no site header).
 * Its logo sat under the form and pointed at a resized copy that does not exist, and
 * the page had no h1. The new content: the logo (linked home) at the top, an h1, then
 * form 16 with the action blue.
 */
$intake = get_page_by_path( 'estate-planning-intake-form', OBJECT, 'page' );
if ( $intake && false === strpos( $intake->post_content, 'hp-intake' ) ) {
	$logo = content_url( '/uploads/2026/09/Left-Align-Solid-Background.jpg' );
	$body = '<!-- wp:group {"className":"hp-intake","layout":{"type":"constrained"}} -->' . "\n"
		. '<div class="wp-block-group hp-intake"><!-- wp:html -->' . "\n"
		. '<a class="hp-intake__logo" href="/"><img src="' . esc_url( $logo ) . '" alt="Hedemark Law home" width="260" height="67"></a>' . "\n"
		. '<!-- /wp:html -->' . "\n\n"
		. '<!-- wp:heading {"level":1} -->' . "\n" . '<h1 class="wp-block-heading">Estate planning intake</h1>' . "\n" . '<!-- /wp:heading -->' . "\n\n"
		. '<!-- wp:paragraph -->' . "\n" . '<p>Your answers help Justin prepare for your first meeting.</p>' . "\n" . '<!-- /wp:paragraph -->' . "\n\n"
		. '<!-- wp:gravityforms/form {"formId":"16","inputPrimaryColor":"#2D6CA8"} /--></div>' . "\n"
		. '<!-- /wp:group -->';
	wp_update_post( array( 'ID' => $intake->ID, 'post_content' => $body ) );
	echo "'estate-planning-intake-form' (id {$intake->ID}): content rebuilt.\n";
} elseif ( $intake ) {
	echo "'estate-planning-intake-form' (id {$intake->ID}): nothing to change.\n";
}

/*
 * Kit globals: the "Accent" typography was IBM Plex Mono, which made Elementor load
 * the font on every page. It becomes Inter. The global text colour becomes the full
 * ink #22384D, and the secondary colour becomes the action blue #2D6CA8 (white text
 * on it passes WCAG AA). The brand blue #377DBD stays as the custom "Blue".
 */
$kit_id = (int) \Elementor\Plugin::$instance->kits_manager->get_active_id();
$kit    = $kit_id ? \Elementor\Plugin::$instance->documents->get( $kit_id ) : null;
if ( $kit ) {
	$ks      = $kit->get_settings();
	$changed = 0;
	foreach ( $ks['system_typography'] ?? array() as $i => $t ) {
		if ( 'accent' === ( $t['_id'] ?? '' ) && 'Inter' !== ( $t['typography_font_family'] ?? '' ) ) {
			$ks['system_typography'][ $i ]['typography_font_family'] = 'Inter';
			$ks['system_typography'][ $i ]['typography_font_weight'] = '600';
			$changed++;
		}
	}
	$want = array( 'text' => '#22384D', 'secondary' => '#2D6CA8' );
	foreach ( $ks['system_colors'] ?? array() as $i => $col ) {
		$id = $col['_id'] ?? '';
		if ( isset( $want[ $id ] ) && strtoupper( $col['color'] ) !== $want[ $id ] ) {
			$ks['system_colors'][ $i ]['color'] = $want[ $id ];
			$changed++;
		}
	}
	$has_action = false;
	foreach ( $ks['custom_colors'] ?? array() as $col ) {
		$has_action = $has_action || 'actionblue' === ( $col['_id'] ?? '' );
	}
	if ( ! $has_action ) {
		$ks['custom_colors'][] = array( '_id' => 'actionblue', 'title' => 'Action Blue', 'color' => '#2D6CA8' );
		$changed++;
	}
	if ( $changed ) {
		$kit->save( array( 'settings' => $ks ) );
		echo "Kit (id {$kit_id}): {$changed} change(s) saved.\n";
	} else {
		echo "Kit (id {$kit_id}): nothing to change.\n";
	}
}

\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "Elementor CSS cache cleared.\n";
