<?php
/**
 * Hello Biz Child — Hedemark Law
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue brand fonts and the child theme stylesheet.
 */
add_action( 'wp_enqueue_scripts', function () {
	// Brand fonts (also loaded by Elementor, but header/footer are theme-rendered).
	wp_enqueue_style(
		'hedemark-fonts',
		'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
		array(),
		null
	);

	// Child styles (header, footer, and Elementor helper classes).
	wp_enqueue_style(
		'hello-biz-child',
		get_stylesheet_directory_uri() . '/assets/child.css',
		array(),
		wp_get_theme()->get( 'Version' )
	);
}, 20 );
