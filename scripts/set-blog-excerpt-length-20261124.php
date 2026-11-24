<?php
/**
 * One-off migration: set the excerpt length of the /blog list to 60 words.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/set-blog-excerpt-length-20261124.php
 *
 * The /blog/ page lists posts with an Essential Addons Post Grid widget that has the
 * CSS class `hp-bloglist`. The script sets its `eael_excerpt_length` to the value of
 * hlc_blog_excerpt_words() (child theme, inc/blog_search.php), so the list and the
 * search results cut the excerpt at the same length.
 *
 * The page is found by path, not by ID. The script saves through Elementor, so the
 * page gets a revision and its CSS cache is rebuilt. A second run changes nothing.
 *
 * Build record: docs/plans/20261124-blog-search.md
 */

if ( ! class_exists( '\Elementor\Plugin' ) ) {
	echo "ERROR: Elementor is not active. Aborting.\n";
	return;
}
if ( ! function_exists( 'hlc_blog_excerpt_words' ) ) {
	echo "ERROR: hlc_blog_excerpt_words() is missing. Deploy the child theme first. Aborting.\n";
	return;
}

$words = (int) hlc_blog_excerpt_words();

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

$page = get_page_by_path( 'blog', OBJECT, 'page' );
if ( ! $page || 'publish' !== $page->post_status ) {
	echo "ERROR: No published page at 'blog'. Aborting.\n";
	return;
}

$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
$data     = $document ? $document->get_elements_data() : array();

/**
 * Helper: set eael_excerpt_length on the blog list Post Grid widget, recursively.
 *
 * @param array $elements The elements.
 * @param int   $words    The new excerpt length.
 * @param int   $found    Count of widgets found, passed by reference.
 * @param int   $changed  Count of widgets changed, passed by reference.
 * @return array The changed elements.
 */
function hlc_blog_set_excerpt_length( array $elements, $words, &$found, &$changed ) {
	foreach ( $elements as $i => $el ) {
		$classes = (string) ( $el['settings']['_css_classes'] ?? '' );
		if ( 'eael-post-grid' === ( $el['widgetType'] ?? '' ) && false !== strpos( $classes, 'hp-bloglist' ) ) {
			$found++;
			if ( (int) ( $el['settings']['eael_excerpt_length'] ?? 0 ) !== $words ) {
				$elements[ $i ]['settings']['eael_excerpt_length'] = $words;
				$changed++;
			}
		}
		if ( ! empty( $el['elements'] ) ) {
			$elements[ $i ]['elements'] = hlc_blog_set_excerpt_length( $el['elements'], $words, $found, $changed );
		}
	}
	return $elements;
}

$found   = 0;
$changed = 0;
$data    = hlc_blog_set_excerpt_length( $data, $words, $found, $changed );

if ( 0 === $found ) {
	echo "ERROR: No blog list Post Grid widget on '/blog/' (id {$page->ID}). Aborting.\n";
	return;
}
if ( 0 === $changed ) {
	echo "'/blog/' (id {$page->ID}): excerpt already {$words} words. Skipped.\n";
	return;
}

$document->save( array( 'elements' => $data ) );
\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "'/blog/' (id {$page->ID}): excerpt length set to {$words} words.\n";
