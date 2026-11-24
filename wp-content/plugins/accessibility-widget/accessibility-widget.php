<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.cookieyes.com/
 * @since             1.6.6
 * @package           AccessibilityWidget
 *
 * @wordpress-plugin
 * Plugin Name:       AccessiYes Accessibility Widget for ADA, EAA & WCAG Readiness
 * Plugin URI:        https://www.cookieyes.com/accessibility-widget/
 * Description:       A simple way to make your website more accessible.
 * Version:           3.2.8
 * Author:            CookieYes
 * Author URI:        https://www.cookieyes.com/
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       accessibility-widget
 * Domain Path:       /languages
 */

/*
	Copyright 2025  AccessibilityWidget

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as
	published by the Free Software Foundation.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'CY_A11Y_VERSION', '3.2.8' );
define( 'CY_A11Y_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
define( 'CY_A11Y_PLUGIN_BASEPATH', plugin_dir_path( __FILE__ ) );
// Previous version settings (deprecated from 0.9 onwards).
define( 'CY_A11Y_PLUGIN_FILENAME', __FILE__ );
define( 'CY_A11Y_DEFAULT_LANGUAGE', cya11y_set_default_language() );


/**
 * Load the plugin textdomain so translations bundled in /languages (or added
 * via Loco Translate, WPML, Poedit, etc.) are picked up. Language packs from
 * translate.wordpress.org load automatically, but locally stored .mo files
 * require this call.
 */
function cya11y_load_textdomain() {
	load_plugin_textdomain( 'accessibility-widget', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'init', 'cya11y_load_textdomain' );

function cya11y_set_default_language() {
	$default = get_option( 'WPLANG', 'en_US' );
	if ( empty( $default ) || strlen( $default ) <= 1 ) {
		$default = 'en';
	}
	return substr( $default, 0, 2 );
}

/**
 * Check if plugin is in legacy version.
 *
 * @return boolean
 */
function cya11y_is_legacy() {
	if ( empty( get_option( 'cya11y_widget_settings', array() ) ) && ! empty( get_option( 'widget_accesstxt', '' ) ) ) {
		return true;
	} else {
		return false;
	}
}

if ( cya11y_is_legacy() ) {
	require_once CY_A11Y_PLUGIN_BASEPATH . 'legacy/loader.php';
} else {
	require_once CY_A11Y_PLUGIN_BASEPATH . 'lite/loader.php';
}
