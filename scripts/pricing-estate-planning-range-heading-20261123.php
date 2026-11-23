<?php
/**
 * One-off migration: one heading for the price range on /pricing/estate-planning/.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/pricing-estate-planning-range-heading-20261123.php
 *
 * The page showed a "General range" h2 (a label above the price, like an eyebrow) and
 * then "$2,000–$7,000" as a separate 56px figure (class hp-bigprice). The two large lines
 * competed with each other. This script makes them one h2, "Most estate plans cost
 * $2,000–$7,000", in the same hp-h2 style as the other pricing section headings, and
 * removes the separate figure.
 *
 * See docs/plans/20261123-pricing-calculator-and-range-heading.md. The script saves through
 * Elementor (a revision and a CSS rebuild). A second run changes nothing.
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

const HLC_RANGE_HEADING = 'Most estate plans cost $2,000–$7,000';

/**
 * Rename the "General range" heading and drop the hp-bigprice widget.
 *
 * @param array $els     Sibling elements.
 * @param int   $changes Change count, by reference.
 * @return array The elements.
 */
function hlc_range_walk( array $els, &$changes ) {
	$out = array();
	foreach ( $els as $el ) {
		$type = $el['widgetType'] ?? '';
		if ( 'html' === $type && false !== strpos( (string) ( $el['settings']['html'] ?? '' ), 'hp-bigprice' ) ) {
			$changes++;
			continue;
		}
		if ( 'heading' === $type && 'General range' === trim( (string) ( $el['settings']['title'] ?? '' ) ) ) {
			$el['settings']['title'] = HLC_RANGE_HEADING;
			$changes++;
		}
		if ( ! empty( $el['elements'] ) ) {
			$el['elements'] = hlc_range_walk( $el['elements'], $changes );
		}
		$out[] = $el;
	}
	return $out;
}

$page = get_page_by_path( 'pricing/estate-planning' );
if ( ! $page ) {
	echo "ERROR: page 'pricing/estate-planning' not found.\n";
	return;
}
$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
$data     = $document ? $document->get_elements_data() : array();
if ( empty( $data ) ) {
	echo "ERROR: 'pricing/estate-planning' (id {$page->ID}) has no Elementor data.\n";
	return;
}

$changes = 0;
$data    = hlc_range_walk( $data, $changes );
if ( 0 === $changes ) {
	echo "'pricing/estate-planning' (id {$page->ID}): nothing to change.\n";
	return;
}
$document->save( array( 'elements' => $data ) );
echo "'pricing/estate-planning' (id {$page->ID}): {$changes} change(s) saved.\n";
