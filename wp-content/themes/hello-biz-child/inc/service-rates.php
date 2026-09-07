<?php
/**
 * User Fields: admin-editable, site-wide values for the site.
 *
 * This file adds a "User Fields" admin menu. It uses the built-in WordPress Settings
 * API, so it needs no extra plugin. The page holds grouped sections. The first section
 * is "Services Settings", where an admin edits the service rate rows (a label and an
 * amount per row). WordPress stores the rows in one site option (`hlc_service_rates`).
 *
 * The `hlc_service_rates` shortcode reads that option and renders the rows as the
 * branded rate table. Place the shortcode on a page in an Elementor Shortcode widget.
 * The values are edited once and show on any page that uses the shortcode.
 *
 * To add another group later, add a new section in the render function and register a
 * new option under the same `hlc_user_fields` settings group.
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
 * The default rate rows, used until an admin saves the panel for the first time.
 *
 * These are the three current Trust Administration rates. They keep the page working
 * the moment the shortcode replaces the old fixed markup.
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
 * Register the option and its sanitize callback with the Settings API.
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
} );

/**
 * Clean the submitted rate rows before they are saved.
 *
 * The method drops empty rows. It reindexes the array, so the stored keys are always
 * 0, 1, 2, and so on. It sanitizes every text value.
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
 * Render one rate row (a label input and an amount input).
 *
 * @param int|string $ri   The rate index, or the JavaScript placeholder.
 * @param array      $rate The rate values.
 */
function hlc_render_rate_row( $ri, $rate ) {
	$label  = $rate['label'] ?? '';
	$amount = $rate['amount'] ?? '';
	$base   = HLC_SERVICE_RATES_OPTION . '[' . $ri . ']';
	?>
	<div class="hlc-rate">
		<input type="text" class="regular-text" name="<?php echo esc_attr( $base . '[label]' ); ?>" value="<?php echo esc_attr( $label ); ?>" placeholder="Label, for example Senior Attorneys" />
		<input type="text" class="regular-text" name="<?php echo esc_attr( $base . '[amount]' ); ?>" value="<?php echo esc_attr( $amount ); ?>" placeholder="Amount, for example $500 / hour" />
		<button type="button" class="button button-link-delete hlc-remove-rate">Remove</button>
	</div>
	<?php
}

/**
 * Render the "User Fields" admin page.
 *
 * The page holds one or more grouped sections. Each section has a heading and its own
 * settings below it. The first section is "Services Settings", which holds the service
 * rate rows. Add more sections here later for other user fields.
 */
function hlc_render_user_fields_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$rates = get_option( HLC_SERVICE_RATES_OPTION, hlc_default_service_rates() );
	if ( ! is_array( $rates ) ) {
		$rates = array();
	}
	?>
	<div class="wrap hlc-user-fields-wrap">
		<h1>User Fields</h1>

		<form method="post" action="options.php">
			<?php settings_fields( 'hlc_user_fields' ); ?>

			<div class="hlc-section">
				<h2 class="title">Services Settings</h2>
				<p class="description">Edit the label and value for each rate row. To show these rates on a page, add the shortcode <code>[hlc_service_rates]</code> in an Elementor Shortcode widget.</p>

				<div id="hlc-rates-list">
					<?php
					if ( empty( $rates ) ) {
						hlc_render_rate_row( 0, array( 'label' => '', 'amount' => '' ) );
					} else {
						foreach ( $rates as $ri => $rate ) {
							hlc_render_rate_row( $ri, $rate );
						}
					}
					?>
				</div>
				<p><button type="button" class="button" id="hlc-add-rate">+ Add rate</button></p>
			</div><!-- .hlc-section -->

			<?php submit_button(); ?>
		</form>

		<template id="hlc-rate-tpl"><?php hlc_render_rate_row( '__RINDEX__', array( 'label' => '', 'amount' => '' ) ); ?></template>

		<style>
			.hlc-section { margin-top: 8px; }
			.hlc-section > h2.title { margin-top: 24px; padding-bottom: 8px; border-bottom: 1px solid #dcdcde; }
			.hlc-rates-list { margin: 6px 0 4px; }
			.hlc-rate { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 6px; }
			.hlc-rate input { margin: 0; }
		</style>

		<script>
			( function () {
				var list    = document.getElementById( 'hlc-rates-list' );
				var rateTpl = document.getElementById( 'hlc-rate-tpl' ).innerHTML;
				var uid     = Date.now();
				function next() { return 'n' + ( uid++ ); }
				function build( html ) {
					var tmp = document.createElement( 'div' );
					tmp.innerHTML = html.trim();
					return tmp.firstElementChild;
				}

				document.getElementById( 'hlc-add-rate' ).addEventListener( 'click', function () {
					list.appendChild( build( rateTpl.replace( /__RINDEX__/g, next() ) ) );
				} );

				list.addEventListener( 'click', function ( e ) {
					if ( e.target.classList.contains( 'hlc-remove-rate' ) ) {
						var row = e.target.closest( '.hlc-rate' );
						if ( row ) { row.remove(); }
					}
				} );
			} )();
		</script>
	</div>
	<?php
}

/**
 * Shortcode: [hlc_service_rates]
 *
 * Render the service rate rows as the branded rate table. The output reuses the
 * `hp-rate-table` classes, so the styling is unchanged from the old fixed markup.
 *
 * Return an empty string when there are no rate rows. The shortcode never prints a
 * warning.
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
