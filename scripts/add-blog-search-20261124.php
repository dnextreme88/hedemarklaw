<?php
/**
 * One-off migration: add the blog search box above the post list on /blog.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/add-blog-search-20261124.php
 *
 * The script finds the page with the slug `blog` (not by ID, because IDs differ from
 * site to site). It puts an Elementor Shortcode widget with `[hlc_blog_search]` just
 * before the Essential Addons Post Grid widget, in the same container. It saves through
 * Elementor (a revision and a CSS rebuild). If the page already has the shortcode, the
 * script changes nothing, so a second run is safe.
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

$page = get_page_by_path( 'blog', OBJECT, 'page' );
if ( ! $page ) {
	echo "ERROR: No page with the slug `blog`. Aborting.\n";
	return;
}

$raw = get_post_meta( $page->ID, '_elementor_data', true );
if ( ! is_string( $raw ) || '' === $raw ) {
	echo "ERROR: The blog page has no Elementor data. Aborting.\n";
	return;
}
if ( false !== strpos( $raw, 'hlc_blog_search' ) ) {
	echo "Nothing to do: the blog page already has [hlc_blog_search].\n";
	return;
}

/**
 * Put the search Shortcode widget before the first Post Grid widget in a tree.
 *
 * @param array $elements Elementor elements.
 * @param bool  $done     True after the widget is added (by reference).
 * @return array The changed elements.
 */
function hlc_add_blog_search_widget( array $elements, &$done ) {
	$out = array();
	foreach ( $elements as $el ) {
		if ( ! $done && 'widget' === ( $el['elType'] ?? '' ) && 'eael-post-grid' === ( $el['widgetType'] ?? '' ) ) {
			$out[] = array(
				'id'         => substr( md5( 'hlc_blog_search' ), 0, 7 ),
				'elType'     => 'widget',
				'widgetType' => 'shortcode',
				'settings'   => array(
					'shortcode'    => '[hlc_blog_search]',
					'_css_classes' => 'hp-blogsearch-widget',
				),
				'elements'   => array(),
			);
			$done = true;
		}
		if ( ! empty( $el['elements'] ) && is_array( $el['elements'] ) ) {
			$el['elements'] = hlc_add_blog_search_widget( $el['elements'], $done );
		}
		$out[] = $el;
	}
	return $out;
}

$data = json_decode( $raw, true );
$done = false;
$data = hlc_add_blog_search_widget( is_array( $data ) ? $data : array(), $done );
if ( ! $done ) {
	echo "ERROR: No Essential Addons Post Grid widget on the blog page. Aborting.\n";
	return;
}

$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
$document->save( array( 'elements' => $data ) );
\Elementor\Plugin::$instance->files_manager->clear_cache();

printf( "Added [hlc_blog_search] above the post list on %s (ID %d).\n", wp_make_link_relative( get_permalink( $page->ID ) ), $page->ID );
