<?php
/**
 * Initialize the plugin.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'cya11y_define_constants' ) ) {
	/**
	 * Return parsed URL
	 *
	 * @return void
	 */
	function cya11y_define_constants() {
	}
}

cya11y_define_constants();

require_once CY_A11Y_PLUGIN_BASEPATH . 'class-autoloader.php';

$cya11y_autoloader = new \CookieYes\AccessibilityWidget\Lite\Autoloader();
$cya11y_autoloader->register();

// register_activation_hook( __FILE__, array( \CookieYes\AccessibilityWidget\Lite\Includes\Activator::get_instance(), 'install' ) );

$cya11y_loader = new \CookieYes\AccessibilityWidget\Lite\Includes\Base();
$cya11y_loader->run();
