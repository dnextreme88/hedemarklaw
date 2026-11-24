<?php
/**
 * One-off migration: the /book/ title band heading reads "Initial Intake".
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/book-heading-initial-intake-20261124.php
 *
 * Changes only the h1 in the light blue band (class hp-dotgrid) of the /book/ page, from
 * "Book a free consultation" to "Initial Intake". The page title, the header button, and
 * the SEO texts do not change. The script saves through Elementor (a revision and a CSS
 * rebuild). When the heading already reads "Initial Intake", nothing changes.
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

$page = get_page_by_path( 'book' );
if ( ! $page ) {
	echo "ERROR: The /book/ page was not found. Aborting.\n";
	return;
}

$data = json_decode( (string) get_post_meta( $page->ID, '_elementor_data', true ), true );
if ( ! is_array( $data ) || empty( $data[0] ) ) {
	echo "ERROR: The /book/ page has no Elementor data. Aborting.\n";
	return;
}

/**
 * Rename the first h1 heading widget in an element tree.
 *
 * @param array  $elements Elementor elements.
 * @param string $from     Old heading text (case-insensitive).
 * @param string $to       New heading text.
 * @param string $state    'changed', 'same', or '' (by reference).
 * @return array The changed elements.
 */
function hlc_rename_band_h1( array $elements, $from, $to, &$state ) {
	foreach ( $elements as &$el ) {
		if ( '' !== $state ) {
			break;
		}
		if ( 'heading' === ( $el['widgetType'] ?? '' ) && 'h1' === ( $el['settings']['header_size'] ?? '' ) ) {
			$title = trim( (string) ( $el['settings']['title'] ?? '' ) );
			if ( 0 === strcasecmp( $title, $to ) ) {
				$state = 'same';
			} elseif ( 0 === strcasecmp( $title, $from ) ) {
				$el['settings']['title'] = $to;
				$state                   = 'changed';
			} else {
				$state = 'other:' . $title;
			}
			break;
		}
		if ( ! empty( $el['elements'] ) && is_array( $el['elements'] ) ) {
			$el['elements'] = hlc_rename_band_h1( $el['elements'], $from, $to, $state );
		}
	}
	return $elements;
}

// The band is the first section of the page.
$classes = (string) ( $data[0]['settings']['css_classes'] ?? $data[0]['settings']['_css_classes'] ?? '' );
if ( false === strpos( $classes, 'hp-dotgrid' ) ) {
	echo "ERROR: The first section of /book/ is not the hp-dotgrid band. Aborting.\n";
	return;
}

$state   = '';
$data[0] = hlc_rename_band_h1( array( $data[0] ), 'Book a free consultation', 'Initial Intake', $state )[0];

if ( 'same' === $state ) {
	echo "Nothing to change: the heading already reads \"Initial Intake\".\n";
	return;
}
if ( 'changed' !== $state ) {
	echo 'ERROR: Unexpected band heading (' . ( '' === $state ? 'none' : substr( $state, 6 ) ) . "). Aborting.\n";
	return;
}

\Elementor\Plugin::$instance->documents->get( $page->ID )->save( array( 'elements' => $data ) );
echo "Done: /book/ (ID {$page->ID}) heading is now \"Initial Intake\".\n";
