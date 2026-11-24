<?php
/**
 * One-off migration: give the home page the shared "Free 20-minute consultation" band.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/unify-home-cta-20261124.php
 *
 * Every other page shows the band as one Elementor HTML widget with the `hp-cta`
 * classes, so assets/child.css styles all of them. The home page had its own band built
 * from Elementor widgets (a container, a heading, a text editor, and two buttons), with
 * the old ink background and Inter fonts set in the widget settings. That band ignored
 * the CSS, so it kept the old style.
 *
 * The script copies the shared band container from the page with the slug `about` and
 * puts it in place of the home page band. The home page then follows the CSS like every
 * other page. Pages are found by slug and the front-page setting, not by ID. The script
 * saves through Elementor (a revision and a CSS rebuild). If the home page already has
 * the shared band, it changes nothing, so a second run is safe.
 *
 * Build record: docs/plans/20261124-blog-search.md
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

$home_id = (int) get_option( 'page_on_front' );
$about   = get_page_by_path( 'about', OBJECT, 'page' );
if ( ! $home_id || ! $about ) {
	echo "ERROR: No static front page, or no page with the slug `about`. Aborting.\n";
	return;
}

$home_doc   = \Elementor\Plugin::$instance->documents->get( $home_id );
$about_doc  = \Elementor\Plugin::$instance->documents->get( $about->ID );
$home_data  = $home_doc ? $home_doc->get_elements_data() : array();
$about_data = $about_doc ? $about_doc->get_elements_data() : array();

// The shared band: the top-level container on /about/ that holds the `hp-cta` section.
$shared = null;
foreach ( $about_data as $el ) {
	if ( false !== strpos( wp_json_encode( $el ), 'hp-cta__title' ) ) {
		$shared = $el;
		break;
	}
}
if ( ! $shared ) {
	echo "ERROR: No shared CTA band on /about/. Aborting.\n";
	return;
}

// The home band: the top-level element with the CTA headline but not the shared markup.
$index = null;
foreach ( $home_data as $i => $el ) {
	$json = wp_json_encode( $el );
	if ( false !== strpos( $json, 'hp-cta__title' ) ) {
		echo "Nothing to do: the home page already has the shared CTA band.\n";
		return;
	}
	if ( null === $index && false !== strpos( $json, 'Free 20-minute consultation' ) ) {
		$index = $i;
	}
}
if ( null === $index ) {
	echo "ERROR: No CTA band on the home page. Aborting.\n";
	return;
}

/**
 * Give an element tree new Elementor IDs, so the copy does not share IDs with /about/.
 *
 * @param array $el An Elementor element.
 * @return array The element with new IDs.
 */
function hlc_cta_new_ids( array $el ) {
	$el['id'] = substr( md5( uniqid( '', true ) ), 0, 7 );
	if ( ! empty( $el['elements'] ) ) {
		$el['elements'] = array_map( 'hlc_cta_new_ids', $el['elements'] );
	}
	return $el;
}

$home_data[ $index ] = hlc_cta_new_ids( $shared );
$home_doc->save( array( 'elements' => $home_data ) );
\Elementor\Plugin::$instance->files_manager->clear_cache();

printf( "Replaced the home page CTA band (element %d) with the shared band from /about/.\n", $index );
