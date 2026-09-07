<?php
/**
 * User Fields: admin-editable, site-wide values for the site.
 *
 * This file adds a "User Fields" admin menu. It uses the built-in WordPress Settings
 * API, so it needs no extra plugin. The page holds grouped sections:
 *
 *   1. "Services Settings" — service rate rows (a label and an amount per row), stored
 *      in the option `hlc_service_rates`. The `[hlc_service_rates]` shortcode renders
 *      them as the branded rate table.
 *   2. "FAQs" — question and answer rows, stored in the option `hlc_faqs`. The
 *      `[hlc_faqs]` shortcode renders them as the branded FAQ accordion.
 *
 * Both shortcodes reuse the existing brand CSS classes, so the output matches the rest
 * of the site. Place a shortcode on a page in an Elementor Shortcode widget.
 *
 * To add another group later, add a section in the render function and register a new
 * option under the same `hlc_user_fields` settings group.
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The option name that stores the service rate rows.
 */
const HLC_SERVICE_RATES_OPTION = 'hlc_service_rates';

/**
 * The option name that stores the FAQ rows.
 */
const HLC_FAQS_OPTION = 'hlc_faqs';

/**
 * The default rate rows, used until an admin saves the panel for the first time.
 *
 * @return array The default rate rows.
 */
function hlc_default_service_rates() {
	return array(
		array( 'label' => 'Senior Attorneys', 'amount' => '$500 / hour' ),
		array( 'label' => 'Paralegals', 'amount' => '$195 / hour' ),
		array( 'label' => 'Law Clerks', 'amount' => '$145 / hour' ),
	);
}

/**
 * The default FAQ rows, used until an admin saves the panel for the first time.
 *
 * These are the three FAQs from the homepage. They keep the new FAQs page working the
 * moment the shortcode is placed.
 *
 * @return array The default FAQ rows.
 */
function hlc_default_faqs() {
	return array(
		array(
			'question' => 'Do you offer free consultations?',
			'answer'   => '<p>As a matter of fact we do. Please feel free to use our online booking tool to setup a meeting at your earliest convenience.</p>',
		),
		array(
			'question' => 'Why should I work with Hedemark Law, P.C.?',
			'answer'   => '<p>Our clients are people first. We understand that when there is uncertainty, fear is not far behind. While we cannot eliminate that fear we can equip you with the resources necessary to make informed decisions with our guidance.</p>',
		),
		array(
			'question' => 'I can\'t come in for a meeting. Do you do phone consultations?',
			'answer'   => '<p>Yes, you can use our online booking tool. Or tap the number at the top of your screen to give us a call. And we also offer Video consultations upon request!</p>',
		),
	);
}

/**
 * Register the "User Fields" admin menu page.
 */
add_action( 'admin_menu', function () {
	add_menu_page(
		'User Fields',
		'User Fields',
		'manage_options',
		'hlc-user-fields',
		'hlc_render_user_fields_page',
		'dashicons-forms',
		30
	);
} );

/**
 * Register the options and their sanitize callbacks with the Settings API.
 *
 * Both options share the `hlc_user_fields` group, so one Save stores every section.
 */
add_action( 'admin_init', function () {
	register_setting(
		'hlc_user_fields',
		HLC_SERVICE_RATES_OPTION,
		array(
			'type'              => 'array',
			'sanitize_callback' => 'hlc_sanitize_service_rates',
			'default'           => array(),
		)
	);
	register_setting(
		'hlc_user_fields',
		HLC_FAQS_OPTION,
		array(
			'type'              => 'array',
			'sanitize_callback' => 'hlc_sanitize_faqs',
			'default'           => array(),
		)
	);
} );

/**
 * Clean the submitted rate rows before they are saved.
 *
 * @param mixed $input The raw submitted value.
 * @return array The clean rate rows.
 */
function hlc_sanitize_service_rates( $input ) {
	$out = array();
	if ( ! is_array( $input ) ) {
		return $out;
	}
	foreach ( $input as $rate ) {
		if ( ! is_array( $rate ) ) {
			continue;
		}
		$label  = sanitize_text_field( $rate['label'] ?? '' );
		$amount = sanitize_text_field( $rate['amount'] ?? '' );
		if ( '' === $label && '' === $amount ) {
			continue; // Drop an empty row.
		}
		$out[] = array( 'label' => $label, 'amount' => $amount );
	}
	return array_values( $out );
}

/**
 * Clean the submitted FAQ rows before they are saved.
 *
 * The question is plain text. The answer allows the safe post HTML set (for example a
 * paragraph or a link).
 *
 * @param mixed $input The raw submitted value.
 * @return array The clean FAQ rows.
 */
function hlc_sanitize_faqs( $input ) {
	$out = array();
	if ( ! is_array( $input ) ) {
		return $out;
	}
	foreach ( $input as $faq ) {
		if ( ! is_array( $faq ) ) {
			continue;
		}
		$question = sanitize_text_field( $faq['question'] ?? '' );
		$answer   = wp_kses_post( $faq['answer'] ?? '' );
		if ( '' === $question && '' === trim( wp_strip_all_tags( $answer ) ) ) {
			continue; // Drop an empty row.
		}
		$out[] = array( 'question' => $question, 'answer' => $answer );
	}
	return array_values( $out );
}

/**
 * Render one rate row (a label input and an amount input).
 *
 * @param int|string $i    The row index, or the JavaScript placeholder.
 * @param array      $rate The rate values.
 */
function hlc_render_rate_row( $i, $rate ) {
	$label  = $rate['label'] ?? '';
	$amount = $rate['amount'] ?? '';
	$base   = HLC_SERVICE_RATES_OPTION . '[' . $i . ']';
	?>
	<div class="hlc-row hlc-rate">
		<input type="text" class="regular-text" name="<?php echo esc_attr( $base . '[label]' ); ?>" value="<?php echo esc_attr( $label ); ?>" placeholder="Label, for example Senior Attorneys" />
		<input type="text" class="regular-text" name="<?php echo esc_attr( $base . '[amount]' ); ?>" value="<?php echo esc_attr( $amount ); ?>" placeholder="Amount, for example $500 / hour" />
		<button type="button" class="button button-link-delete hlc-remove">Remove</button>
	</div>
	<?php
}

/**
 * Render one FAQ row (a question input and an answer textarea).
 *
 * @param int|string $i   The row index, or the JavaScript placeholder.
 * @param array      $faq The FAQ values.
 */
function hlc_render_faq_row( $i, $faq ) {
	$question = $faq['question'] ?? '';
	$answer   = $faq['answer'] ?? '';
	$base     = HLC_FAQS_OPTION . '[' . $i . ']';
	?>
	<div class="hlc-row hlc-faq-row">
		<div class="hlc-faq-row__fields">
			<input type="text" class="large-text" name="<?php echo esc_attr( $base . '[question]' ); ?>" value="<?php echo esc_attr( $question ); ?>" placeholder="Question" />
			<textarea class="large-text" rows="3" name="<?php echo esc_attr( $base . '[answer]' ); ?>" placeholder="Answer"><?php echo esc_textarea( $answer ); ?></textarea>
		</div>
		<button type="button" class="button button-link-delete hlc-remove">Remove</button>
	</div>
	<?php
}

/**
 * Render the "User Fields" admin page.
 *
 * The page holds grouped sections. Each section is a `.hlc-repeater` with its own list,
 * an add button, and a row template. One small script (below) drives every repeater.
 */
function hlc_render_user_fields_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$rates = get_option( HLC_SERVICE_RATES_OPTION, hlc_default_service_rates() );
	if ( ! is_array( $rates ) ) {
		$rates = array();
	}
	$faqs = get_option( HLC_FAQS_OPTION, hlc_default_faqs() );
	if ( ! is_array( $faqs ) ) {
		$faqs = array();
	}
	?>
	<div class="wrap hlc-user-fields-wrap">
		<h1>User Fields</h1>

		<form method="post" action="options.php">
			<?php settings_fields( 'hlc_user_fields' ); ?>

			<div class="hlc-section">
				<h2 class="title">Services Settings</h2>
				<p class="description">Edit the label and value for each rate row. To show these rates on a page, add the shortcode <code>[hlc_service_rates]</code> in an Elementor Shortcode widget.</p>

				<div class="hlc-repeater">
					<div class="hlc-repeater__list">
						<?php
						if ( empty( $rates ) ) {
							hlc_render_rate_row( 0, array( 'label' => '', 'amount' => '' ) );
						} else {
							foreach ( $rates as $i => $rate ) {
								hlc_render_rate_row( $i, $rate );
							}
						}
						?>
					</div>
					<p><button type="button" class="button hlc-repeater__add">+ Add rate</button></p>
					<template class="hlc-repeater__tpl"><?php hlc_render_rate_row( '__INDEX__', array( 'label' => '', 'amount' => '' ) ); ?></template>
				</div>
			</div><!-- .hlc-section -->

			<div class="hlc-section">
				<h2 class="title">FAQs</h2>
				<p class="description">Edit the question and answer for each row. To show these on a page, add the shortcode <code>[hlc_faqs]</code> in an Elementor Shortcode widget. The answer accepts basic HTML.</p>

				<div class="hlc-repeater">
					<div class="hlc-repeater__list">
						<?php
						if ( empty( $faqs ) ) {
							hlc_render_faq_row( 0, array( 'question' => '', 'answer' => '' ) );
						} else {
							foreach ( $faqs as $i => $faq ) {
								hlc_render_faq_row( $i, $faq );
							}
						}
						?>
					</div>
					<p><button type="button" class="button hlc-repeater__add">+ Add FAQ</button></p>
					<template class="hlc-repeater__tpl"><?php hlc_render_faq_row( '__INDEX__', array( 'question' => '', 'answer' => '' ) ); ?></template>
				</div>
			</div><!-- .hlc-section -->

			<?php submit_button(); ?>
		</form>

		<style>
			.hlc-section { margin-top: 8px; }
			.hlc-section > h2.title { margin-top: 24px; padding-bottom: 8px; border-bottom: 1px solid #dcdcde; }
			.hlc-row { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 8px; }
			.hlc-row input { margin: 0; }
			.hlc-rate { flex-wrap: wrap; align-items: center; }
			.hlc-faq-row__fields { display: flex; flex-direction: column; gap: 6px; flex: 1; }
			.hlc-faq-row__fields textarea { margin: 0; }
			.hlc-repeater__add { margin-top: 4px; }
		</style>

		<script>
			( function () {
				document.querySelectorAll( '.hlc-repeater' ).forEach( function ( rep ) {
					var list = rep.querySelector( '.hlc-repeater__list' );
					var tpl  = rep.querySelector( '.hlc-repeater__tpl' ).innerHTML;
					var add  = rep.querySelector( '.hlc-repeater__add' );
					var uid  = Date.now();
					add.addEventListener( 'click', function () {
						var d = document.createElement( 'div' );
						d.innerHTML = tpl.replace( /__INDEX__/g, 'n' + ( uid++ ) ).trim();
						list.appendChild( d.firstElementChild );
					} );
					list.addEventListener( 'click', function ( e ) {
						if ( e.target.classList.contains( 'hlc-remove' ) ) {
							var row = e.target.closest( '.hlc-row' );
							if ( row ) { row.remove(); }
						}
					} );
				} );
			} )();
		</script>
	</div>
	<?php
}

/**
 * Shortcode: [hlc_service_rates]
 *
 * Render the service rate rows as the branded rate table. Return an empty string when
 * there are no rate rows.
 *
 * @return string The rate table HTML, or an empty string.
 */
add_shortcode( 'hlc_service_rates', function () {
	$rates = get_option( HLC_SERVICE_RATES_OPTION, hlc_default_service_rates() );
	if ( ! is_array( $rates ) || empty( $rates ) ) {
		return '';
	}

	$html = '<ul class="hp-rate-table">';
	foreach ( $rates as $rate ) {
		if ( ! is_array( $rate ) ) {
			continue;
		}
		$label  = trim( (string) ( $rate['label'] ?? '' ) );
		$amount = trim( (string) ( $rate['amount'] ?? '' ) );
		if ( '' === $label && '' === $amount ) {
			continue; // Skip an empty row.
		}
		$html .= '<li>';
		$html .= '<span class="hp-rate-role">' . esc_html( $label ) . '</span>';
		$html .= '<span class="hp-rate-amount">' . esc_html( $amount ) . '</span>';
		$html .= '</li>';
	}
	$html .= '</ul>';

	return $html;
} );

/**
 * Shortcode: [hlc_faqs]
 *
 * Render the FAQ rows as the branded accordion. The markup mirrors the homepage
 * Elementor accordion (the `hp-faq` classes), so the visual style matches. A small
 * script drives the collapse. The extra `hp-faq-lite` class scopes the behavior CSS, so
 * this shortcode never affects the homepage accordion.
 *
 * The method also prints an FAQ structured-data block (schema.org FAQPage), like the
 * homepage accordion. Return an empty string when there are no FAQ rows.
 *
 * @return string The FAQ accordion HTML, or an empty string.
 */
function hlc_render_faqs_shortcode() {
	static $script_done = false;

	$faqs = get_option( HLC_FAQS_OPTION, hlc_default_faqs() );
	if ( ! is_array( $faqs ) || empty( $faqs ) ) {
		return '';
	}

	$chevron = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

	$items    = '';
	$schema   = array();
	$index    = 0;
	foreach ( $faqs as $faq ) {
		if ( ! is_array( $faq ) ) {
			continue;
		}
		$question = trim( (string) ( $faq['question'] ?? '' ) );
		$answer   = trim( (string) ( $faq['answer'] ?? '' ) );
		if ( '' === $question && '' === trim( wp_strip_all_tags( $answer ) ) ) {
			continue;
		}

		// The first row starts open, to match the Elementor accordion default.
		$is_open   = ( 0 === $index );
		$item_cls  = 'elementor-accordion-item' . ( $is_open ? ' is-open' : '' );
		$expanded  = $is_open ? 'true' : 'false';
		$content_id = 'hlc-faq-content-' . $index;

		$items .= '<div class="' . esc_attr( $item_cls ) . '">';
		$items .= '<div class="elementor-tab-title" role="button" tabindex="0" aria-expanded="' . $expanded . '" aria-controls="' . esc_attr( $content_id ) . '">';
		$items .= '<span class="elementor-accordion-title">' . esc_html( $question ) . '</span>';
		$items .= '<span class="elementor-accordion-icon" aria-hidden="true">' . $chevron . '</span>';
		$items .= '</div>';
		$items .= '<div class="elementor-tab-content" id="' . esc_attr( $content_id ) . '" role="region">' . wp_kses_post( $answer ) . '</div>';
		$items .= '</div>';

		$schema[] = array(
			'@type'          => 'Question',
			'name'           => $question,
			'acceptedAnswer' => array(
				'@type' => 'Answer',
				'text'  => wp_strip_all_tags( $answer ),
			),
		);
		$index++;
	}

	if ( '' === $items ) {
		return '';
	}

	$html  = '<div class="hp-faq hp-faq-lite">';
	$html .= '<div class="elementor-accordion" role="list">' . $items . '</div>';
	$html .= '</div>';

	// FAQ structured data (schema.org FAQPage).
	$ld = array(
		'@context'   => 'https://schema.org',
		'@type'      => 'FAQPage',
		'mainEntity' => $schema,
	);
	$html .= '<script type="application/ld+json">' . wp_json_encode( $ld ) . '</script>';

	// One delegated collapse script for every accordion on the page.
	if ( ! $script_done ) {
		$script_done = true;
		$html .= <<<'JS'
<script>
( function () {
	if ( window.hlcFaqBound ) { return; }
	window.hlcFaqBound = true;
	function toggle( title ) {
		var item = title.closest( '.elementor-accordion-item' );
		if ( ! item ) { return; }
		var willOpen = ! item.classList.contains( 'is-open' );
		// Close the other open item, so only one item is open at a time.
		var acc = title.closest( '.elementor-accordion' );
		if ( acc ) {
			acc.querySelectorAll( '.elementor-accordion-item.is-open' ).forEach( function ( other ) {
				if ( other !== item ) {
					other.classList.remove( 'is-open' );
					var t = other.querySelector( '.elementor-tab-title' );
					if ( t ) { t.setAttribute( 'aria-expanded', 'false' ); }
				}
			} );
		}
		item.classList.toggle( 'is-open', willOpen );
		title.setAttribute( 'aria-expanded', willOpen ? 'true' : 'false' );
	}
	document.addEventListener( 'click', function ( e ) {
		var title = e.target.closest( '.hp-faq-lite .elementor-tab-title' );
		if ( title ) { toggle( title ); }
	} );
	document.addEventListener( 'keydown', function ( e ) {
		if ( 'Enter' !== e.key && ' ' !== e.key ) { return; }
		var title = e.target.closest( '.hp-faq-lite .elementor-tab-title' );
		if ( title ) { e.preventDefault(); toggle( title ); }
	} );
} )();
</script>
JS;
	}

	return $html;
}
add_shortcode( 'hlc_faqs', 'hlc_render_faqs_shortcode' );
