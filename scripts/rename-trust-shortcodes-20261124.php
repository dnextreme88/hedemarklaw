<?php
/**
 * One-off migration: rename the two Trust Administration shortcodes in the Elementor data.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/rename-trust-shortcodes-20261124.php
 *
 * Renames:
 * - [hlc_service_rates]      -> [hlc_trust_administration_rate_schedules]
 * - [hlc_trust_price_teaser] -> [hlc_trust_administration_rate_teaser]
 *
 * The script looks in every published Elementor page and changes only the `shortcode`
 * setting of Shortcode widgets. It saves through Elementor (a revision per page and a CSS
 * rebuild). A page with no old name is skipped, so a second run changes nothing.
 * The option names (`hlc_service_rates`, `hlc_trust_price_teaser`) do not change.
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

$renames = array(
	'[hlc_service_rates]'      => '[hlc_trust_administration_rate_schedules]',
	'[hlc_trust_price_teaser]' => '[hlc_trust_administration_rate_teaser]',
);

/**
 * Rename the old shortcodes in the Shortcode widgets of an Elementor element tree.
 *
 * @param array $elements Elementor elements.
 * @param array $renames  Old shortcode => new shortcode.
 * @param int   $count    Number of widgets changed (by reference).
 * @return array The changed elements.
 */
function hlc_rename_trust_shortcodes( array $elements, array $renames, &$count ) {
	foreach ( $elements as &$el ) {
		if ( 'widget' === ( $el['elType'] ?? '' ) && 'shortcode' === ( $el['widgetType'] ?? '' ) && isset( $el['settings']['shortcode'] ) ) {
			$new = strtr( $el['settings']['shortcode'], $renames );
			if ( $new !== $el['settings']['shortcode'] ) {
				$el['settings']['shortcode'] = $new;
				$count++;
			}
		}
		if ( ! empty( $el['elements'] ) && is_array( $el['elements'] ) ) {
			$el['elements'] = hlc_rename_trust_shortcodes( $el['elements'], $renames, $count );
		}
	}
	return $elements;
}

$pages = get_posts(
	array(
		'post_type'   => array( 'page', 'post' ),
		'post_status' => 'publish',
		'numberposts' => -1,
		'meta_key'    => '_elementor_data',
	)
);

$changed = 0;
foreach ( $pages as $page ) {
	$raw = get_post_meta( $page->ID, '_elementor_data', true );
	if ( ! is_string( $raw ) || false === strpos( $raw, 'hlc_service_rates' ) && false === strpos( $raw, 'hlc_trust_price_teaser' ) ) {
		continue;
	}
	$data  = json_decode( $raw, true );
	$count = 0;
	$data  = hlc_rename_trust_shortcodes( is_array( $data ) ? $data : array(), $renames, $count );
	if ( 0 === $count ) {
		continue;
	}
	$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
	$document->save( array( 'elements' => $data ) );
	$changed++;
	printf( "Renamed %d shortcode(s) on %s (ID %d)\n", $count, wp_make_link_relative( get_permalink( $page->ID ) ), $page->ID );
}

echo 0 === $changed ? "Nothing to rename.\n" : "Done: {$changed} page(s) updated.\n";
