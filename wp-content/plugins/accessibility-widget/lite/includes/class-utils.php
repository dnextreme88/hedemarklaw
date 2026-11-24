<?php
/**
 * Utility functions class
 *
 * @link       https://www.cookieyes.com/
 * @since      3.0.0
 *
 * @author     CookieYes <info@cookieyes.com>
 * @package    CookieYes\AccessibilityWidget\Lite\Includes
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
if ( ! function_exists( 'cya11y_first_time_install' ) ) {

	/**
	 * Check if the plugin is activated for the first time.
	 *
	 * @return boolean
	 */
	function cya11y_first_time_install() {
		return (bool) get_site_transient( 'cya11y_first_time_install' ) || (bool) get_option( 'cya11y_first_time_activated_plugin' );
	}
}

if ( ! function_exists( 'cya11y_is_admin_page' ) ) {

	/**
	 * Check if the plugin is activated for the first time.
	 *
	 * @return boolean
	 */
	function cya11y_is_admin_page() {
		if ( ! is_admin() ) {
			return false;
		}
		if ( function_exists( 'get_current_screen' ) && ! empty( get_current_screen() ) ) {
			$screen = get_current_screen();
			$page   = isset( $screen->id ) ? $screen->id : false;
			if ( false !== strpos( $page, 'accessibility-widget' ) ) {
				return true;
			}
			if ( ! empty( $screen->parent_base ) && false !== strpos( $screen->parent_base, 'accessibility-widget' ) ) {
				return true;
			}
		} else {
			$page = isset( $_GET['page'] ) ? sanitize_text_field( wp_unslash( $_GET['page'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		}
		return false !== strpos( $page, 'accessibility-widget' );
	}
}

