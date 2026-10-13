<?php
/**
 * One-off migration: new headline on the dark "Book online" CTA band.
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/update-cta-headline.php
 *
 * The band had a small mono eyebrow ("Free 20-minute consultation") above a serif
 * headline ("Your family shouldn't have to guess."). The script removes the eyebrow
 * and makes the headline "Free 20-minute consultation" in Inter.
 *
 * - Home: the band is two Elementor Heading widgets. The script deletes the eyebrow
 *   widget, and sets the headline widget's text and font family (Inter).
 * - Services, Pricing, and the three pricing subpages: the band is one HTML widget
 *   with the `hp-cta` markup. The script removes the eyebrow <p> and replaces the
 *   <h2> text. The Inter font comes from `.hp-cta__title` in the child theme CSS.
 *
 * The blog post band lives in the theme (template-parts/single.php), not here.
 *
 * Pages are found by path, not by ID, because the IDs differ between sites. The
 * script saves through Elementor, so each page gets a revision and its CSS cache is
 * rebuilt. A second run finds nothing to change and saves nothing.
 *
 * Build record: docs/plans/20261013-blog-and-cta-styling.md
 */

if ( ! class_exists( '\Elementor\Plugin' ) ) {
	echo "ERROR: Elementor is not active. Aborting.\n";
	return;
}

// Elementor checks the edit capability on save, so act as an administrator.
$admins = get_users(
	array(
		'role'   => 'administrator',
		'number' => 1,
		'fields' => 'ID',
	)
);
if ( empty( $admins ) ) {
	echo "ERROR: No administrator user found. Aborting.\n";
	return;
}
wp_set_current_user( (int) $admins[0] );

$new_title = 'Free 20-minute consultation';

/**
 * Helper: apply the change to a list of Elementor elements, recursively.
 *
 * @param array  $elements  The elements.
 * @param string $new_title The new headline.
 * @param int    $changes   Count of changes, passed by reference.
 * @return array The changed elements.
 */
function hlc_cta_update_elements( array $elements, $new_title, &$changes ) {
	$out = array();
	foreach ( $elements as $el ) {
		$type     = $el['widgetType'] ?? '';
		$settings = $el['settings'] ?? array();

		if ( 'heading' === $type ) {
			$title = (string) ( $settings['title'] ?? '' );

			// The eyebrow: a small heading with the old eyebrow text. Delete it.
			if ( 'p' === ( $settings['header_size'] ?? '' ) && 0 === strcasecmp( $title, 'Free 20-minute consultation' ) ) {
				$changes++;
				continue;
			}

			// The headline: new text, Inter.
			if ( false !== stripos( $title, 'have to guess' ) ) {
				$el['settings']['title']                  = $new_title;
				$el['settings']['typography_typography']  = 'custom';
				$el['settings']['typography_font_family'] = 'Inter';
				$changes++;
			}
		}

		if ( 'html' === $type && false !== strpos( (string) ( $settings['html'] ?? '' ), 'hp-cta__eyebrow' ) ) {
			$html = (string) $settings['html'];
			$html = preg_replace( '#<p class="hp-cta__eyebrow">.*?</p>#s', '', $html );
			$html = preg_replace( '#(<h2 class="hp-cta__title">).*?(</h2>)#s', '${1}' . esc_html( $new_title ) . '${2}', $html );

			$el['settings']['html'] = $html;
			$changes++;
		}

		if ( ! empty( $el['elements'] ) ) {
			$el['elements'] = hlc_cta_update_elements( $el['elements'], $new_title, $changes );
		}

		$out[] = $el;
	}
	return $out;
}

$paths = array( 'home', 'services', 'pricing', 'pricing/estate-planning', 'pricing/probate', 'pricing/trust-administration' );

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
	$data    = hlc_cta_update_elements( $data, $new_title, $changes );

	if ( 0 === $changes ) {
		echo "'{$path}' (id {$page->ID}): nothing to change. Skipped.\n";
		continue;
	}

	$document->save( array( 'elements' => $data ) );
	echo "'{$path}' (id {$page->ID}): {$changes} change(s) saved.\n";
}

// Rebuild the generated Elementor CSS files.
\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "Elementor CSS cache cleared.\n";
