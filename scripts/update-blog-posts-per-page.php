<?php
/**
 * One-off migration: show 5 posts on the /blog/ page instead of 2.
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/update-blog-posts-per-page.php
 *
 * The /blog/ page lists posts with an Essential Addons Post Grid widget that has the
 * CSS class `hp-bloglist`. The script sets its `posts_per_page` to 5. The "Load more
 * articles" button loads the same number, so it now loads 5 more each time.
 *
 * The page is found by path, not by ID. The script saves through Elementor, so the
 * page gets a revision and its CSS cache is rebuilt. A second run changes nothing.
 *
 * Build record: docs/plans/20261013-blog-and-cta-styling.md
 */

if ( ! class_exists( '\Elementor\Plugin' ) ) {
	echo "ERROR: Elementor is not active. Aborting.\n";
	return;
}

$posts_per_page = 5;

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
 * Helper: set posts_per_page on the blog list Post Grid widget, recursively.
 *
 * @param array $elements The elements.
 * @param int   $count    The new posts per page.
 * @param int   $found    Count of widgets found, passed by reference.
 * @param int   $changed  Count of widgets changed, passed by reference.
 * @return array The changed elements.
 */
function hlc_blog_set_per_page( array $elements, $count, &$found, &$changed ) {
	foreach ( $elements as $i => $el ) {
		$classes = (string) ( $el['settings']['_css_classes'] ?? '' );
		if ( 'eael-post-grid' === ( $el['widgetType'] ?? '' ) && false !== strpos( $classes, 'hp-bloglist' ) ) {
			$found++;
			if ( (int) ( $el['settings']['posts_per_page'] ?? 0 ) !== $count ) {
				$elements[ $i ]['settings']['posts_per_page'] = $count;
				$changed++;
			}
		}
		if ( ! empty( $el['elements'] ) ) {
			$elements[ $i ]['elements'] = hlc_blog_set_per_page( $el['elements'], $count, $found, $changed );
		}
	}
	return $elements;
}

$found   = 0;
$changed = 0;
$data    = hlc_blog_set_per_page( $data, $posts_per_page, $found, $changed );

if ( 0 === $found ) {
	echo "ERROR: No blog list Post Grid widget on '/blog/' (id {$page->ID}). Aborting.\n";
	return;
}
if ( 0 === $changed ) {
	echo "'/blog/' (id {$page->ID}): already {$posts_per_page} posts per page. Skipped.\n";
	return;
}

$document->save( array( 'elements' => $data ) );
\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "'/blog/' (id {$page->ID}): posts per page set to {$posts_per_page}.\n";
