<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.cookieyes.com/
 * @since      3.0.0
 *
 * @package    CookieYes\AccessibilityWidget\Lite\Admin
 */

namespace CookieYes\AccessibilityWidget\Lite\Admin;
use CookieYes\AccessibilityWidget\Lite\Includes\Activator;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    AccessibilityWidget
 * @author     AccessibilityWidget <info@cookieyes.com>
 */
class Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    3.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    3.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Admin modules of the plugin
	 *
	 * @var array
	 */
	private static $modules;

	/**
	 * Currently active modules
	 *
	 * @var array
	 */
	private static $active_modules;

	/**
	 * Existing modules
	 *
	 * @var array
	 */
	public static $existing_modules;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    3.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
		self::$modules     = $this->get_default_modules();
		$this->load();
		$this->load_modules();
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'admin_print_scripts', array( $this, 'hide_admin_notices' ) );
		add_action( 'admin_notices', array( $this, 'admin_notices' ) );
		add_action( 'admin_init', array( $this, 'handle_review_notice_actions' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_global_styles' ) );

		// add_filter( 'admin_body_class', array( $this, 'admin_body_classes' ) );
	}

	/**
	 * Load activator on each load.
	 *
	 * @return void
	 */
	public function load() {
		Activator::init();
		if ( false === get_option( 'cya11y_review_install_date', false ) ) {
			add_option( 'cya11y_review_install_date', time() );
		}
	}

	/**
	 * Get the default modules array
	 *
	 * @return array
	 */
	public function get_default_modules() {
		$modules = array(
			'settings',
		);
		return $modules;
	}

	/**
	 * Get the active admin modules
	 *
	 * @return void
	 */
	public function get_active_modules() {
	}
	/**
	 * Load all the modules
	 *
	 * @return void
	 */
	public function load_modules() {
		foreach ( self::$modules as $module ) {
			$parts      = explode( '_', $module );
			$class      = implode( '_', $parts );
			$class_name = 'CookieYes\AccessibilityWidget\Lite\\Admin\\Modules\\' . ucfirst( $module ) . '\\' . ucfirst( $class );

			if ( class_exists( $class_name ) ) {
				$module_obj = new $class_name( $module );
				if ( $module_obj instanceof $class_name ) {
					if ( $module_obj->is_active() ) {
						self::$active_modules[ $module ] = true;
					}
				}
			}
		}
	}

	/**
	 * Register the global stylesheets for the admin area (loaded on all WP admin pages).
	 *
	 * @since    3.0.0
	 */
	public function enqueue_global_styles() {
		wp_enqueue_style( $this->plugin_name . '-admin-notice', plugin_dir_url( __FILE__ ) . 'css/admin-notice.css', array(), $this->version );
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    3.0.0
	 */
	public function enqueue_styles() {
		$css_path = plugin_dir_path( __FILE__ ) . 'app/dist/assets/index.css';
		$css_ver  = file_exists( $css_path ) ? (string) filemtime( $css_path ) : $this->version;
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'app/dist/assets/index.css', array(), $css_ver );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    3.0.0
	 */
	public function enqueue_scripts() {
		$js_path = plugin_dir_path( __FILE__ ) . 'app/dist/assets/index.js';
		$js_ver  = file_exists( $js_path ) ? (string) filemtime( $js_path ) : $this->version;
		wp_enqueue_script( $this->plugin_name . '-app', plugin_dir_url( __FILE__ ) . 'app/dist/assets/index.js', array( 'wp-i18n' ), $js_ver, true );

		// Primary: Inject translations from the MO file directly as an inline script.
		// This is more reliable than wp_set_script_translations because it does not
		// depend on a JSON file with a site-specific MD5 filename hash.
		$locale_data = $this->get_jed_locale_data( 'accessibility-widget' );
		if ( ! empty( $locale_data ) ) {
			wp_add_inline_script(
				$this->plugin_name . '-app',
				sprintf(
					'wp.i18n.setLocaleData(%s,"accessibility-widget");',
					wp_json_encode( $locale_data )
				),
				'before'
			);
		}

		// Fallback: also register for wp_set_script_translations so Loco Translate
		// can detect the handle and generate JSON files automatically.
		// Path corrected: plugin root languages/ (2 levels up from lite/admin/).
		wp_set_script_translations(
			$this->plugin_name . '-app',
			'accessibility-widget',
			plugin_dir_path( dirname( dirname( __FILE__ ) ) ) . 'languages'
		);

		wp_localize_script(
			$this->plugin_name . '-app',
			'cyA11yGlobals',
			array(
				'api' => array(
					'endpoint' => rest_url( 'cya11y/v1/' ),
					'nonce'    => wp_create_nonce( 'wp_rest' ),
				),
				'site' => array(
					'url' => home_url( '/' ),
				),
				'version'           => CY_A11Y_VERSION,
				/** @see cya11y_keyboard_shortcut filter in class-frontend.php */
				'keyboardShortcut'  => apply_filters( 'cya11y_keyboard_shortcut', 'alt+a' ),
				'reviewBanner' => array(
					'installDate' => absint( get_option( 'cya11y_review_install_date', 0 ) ),
					'reviewUrl'   => 'https://wordpress.org/support/plugin/accessibility-widget/reviews/#new-post',
				),
			)
		);
	}

	/**
	 * Register main menu and sub menus
	 *
	 * @return void
	 */
	public function admin_menu() {
		$capability = 'manage_options';
		$slug       = 'accessibility-widget';

		$hook = add_menu_page(
			__( 'Accessibility Widget', 'accessibility-widget' ),
			__( 'AccessiYes', 'accessibility-widget' ),
			$capability,
			$slug,
			array( $this, 'menu_page_template' ),
			'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0MyA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMwN18xNSkiPgo8cGF0aCBkPSJNMTkuNDQ3OCAxMy4zMDA5QzIyLjk1OTcgMTMuMzAwOSAyNS44MDc4IDEwLjQ3OTEgMjUuODA3OCA2Ljk5OTQ5VjYuODA1QzI1LjgwNzggMy4zMjU0MSAyMi45NTk3IDAuNTAzNTQgMTkuNDQ3OCAwLjUwMzU0QzE1LjkzNTggMC41MDM1NCAxMy4wODc3IDMuMzI1NDEgMTMuMDg3NyA2LjgwNVY2Ljk5OTQ5QzEzLjA4NzcgMTAuNDc5MSAxNS45MzU4IDEzLjMwMDkgMTkuNDQ3OCAxMy4zMDA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTAgNDIuODI0NEw2LjM2NzIgNDguNDk5OUwxOS4xNDggMzQuNDI5NUwxMi44MzQzIDI4LjY5MzhMMCA0Mi44MjQ0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQzIDExLjk1NzJMMzcuMDQzMyA1Ljg1NzNMMjAuMTA0NSAyMi4wOTg5TDExLjM0NiAxMy44MjA4TDUuNDY0MjMgMTkuOTI3N0wyMC4zMjk0IDMzLjY5NEwyMC4zODI5IDMzLjY0NDVMMjAuMzkgMzMuNjU1MUwyNS4xMjYyIDI4Ljk4MzlMMjEuMzA3MyAzNC42NTU5TDMyLjg5OTYgNDguMzkzOUwzOS40NTU5IDQyLjkzMDVMMjYuNTUzOCAyNy43Mjg1TDQzIDExLjk1NzJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzMwN18xNSI+CjxyZWN0IHdpZHRoPSI0MyIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=',
			40
		);
	}

	/**
	 * Main menu template
	 *
	 * @return void
	 */
	public function menu_page_template() {
		echo '<div id="accessibility-widget-app" class="accessibility-widget-app"></div>';
	}

	/**
	 * Returns Jed-formatted localization data. Added for backwards-compatibility.
	 *
	 * @since 4.0.0
	 *
	 * @param  string $domain Translation domain.
	 * @return array          The information of the locale.
	 */
	public function get_jed_locale_data( $domain ) {
		$translations = get_translations_for_domain( $domain );
		$locale       = array(
			'' => array(
				'domain' => $domain,
				'lang'   => is_admin() && function_exists( 'get_user_locale' ) ? get_user_locale() : get_locale(),
			),
		);

		if ( ! empty( $translations->headers['Plural-Forms'] ) ) {
			$locale['']['plural_forms'] = $translations->headers['Plural-Forms'];
		}

		foreach ( $translations->entries as $entry ) {
			$key = is_object( $entry ) && method_exists( $entry, 'key' ) ? $entry->key() : false;
			if ( false !== $key ) {
				$locale[ $key ] = $entry->translations;
				// Also register under the plain singular key so __() lookups work
				// even when the translator accidentally set a msgctxt in Loco Translate.
				if ( ! empty( $entry->context ) && ! empty( $entry->singular ) ) {
					$locale[ $entry->singular ] = $entry->translations;
				}
			}
		}

		// If any of the translated strings incorrectly contains HTML line breaks, we need to return or else the admin is no longer accessible.
		$json = wp_json_encode( $locale );
		if ( preg_match( '/<br[\s\/\\\\]*>/', $json ) ) {
			return array();
		}

		return $locale;
	}

	/**
	 * Modify plugin action links on plugin listing page.
	 *
	 * @param array $links Existing links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {
		$links[] = '<a href="https://wordpress.org/support/plugin/accessibility-widget/#new-post" target="_blank">' . esc_html__( 'Support', 'accessibility-widget' ) . '</a>';
		$links[] = '<a href="' . get_admin_url( null, 'admin.php?page=accessibility-widget' ) . '">' . esc_html__( 'Settings', 'accessibility-widget' ) . '</a>';
		return array_reverse( $links );
	}

	/**
	 * Display the review banner as a standard WordPress admin notice.
	 */
	public function admin_notices() {
		// Do not show on the plugin's own settings page.
		if ( function_exists( 'cya11y_is_admin_page' ) && cya11y_is_admin_page() ) {
			return;
		}

		// Check if 7 days have passed since install.
		$install_date = get_option( 'cya11y_review_install_date', time() );
		if ( time() - $install_date < 7 * DAY_IN_SECONDS ) {
			return;
		}

		// Check if dismissed in options
		$banners = get_option( 'cya11y_banners', array() );
		$review_banner = isset( $banners['review-banner'] ) ? $banners['review-banner'] : null;

		// If status is false, banner is dismissed (permanently or temporarily).
		if (
			$review_banner &&
			isset( $review_banner['status'] ) &&
			false === $review_banner['status'] &&
			( ! isset( $review_banner['until'] ) || time() < $review_banner['until'] )
		) {
			return;
		}

		// Build URLs for actions and strictly sanitize SERVER data to pass PHPCS
		$http_host   = isset( $_SERVER['HTTP_HOST'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ) ) : '';
		$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
		$current_url = set_url_scheme( 'http://' . $http_host . $request_uri );
		$permanent_url  = add_query_arg( array(
			'cya11y_dismiss_review' => 'permanent',
			'_wpnonce' => wp_create_nonce( 'cya11y_dismiss_review_nonce' )
		), $current_url );
		$temporary_url  = add_query_arg( array(
			'cya11y_dismiss_review' => 'temporary',
			'_wpnonce' => wp_create_nonce( 'cya11y_dismiss_review_nonce' )
		), $current_url );

		?>
		<div class="notice cya11y-review-notice-wrap">
			<div class="cya11y-review-notice">
				<a href="<?php echo esc_url( $temporary_url ); ?>" class="cya11y-review-close" aria-label="<?php esc_attr_e( 'Dismiss review banner', 'accessibility-widget' ); ?>">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				</a>

				<div class="cya11y-review-content">
					<svg class="cya11y-review-logo" viewBox="0 0 435 109" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AccessiYes by CookieYes">
						<path d="M118.623 67.1911H100.495L97.495 75.8639H87.909L104.277 30.283H114.905L131.273 75.8639H121.622L118.623 67.1911ZM116.144 59.8878L109.559 40.8468L102.972 59.8878H116.144ZM132.435 57.8011C132.435 54.0625 133.196 50.802 134.717 48.0198C136.239 45.1941 138.347 43.0205 141.042 41.4989C143.738 39.9339 146.825 39.1514 150.303 39.1514C154.78 39.1514 158.475 40.2817 161.388 42.5422C164.344 44.7593 166.322 47.8894 167.322 51.9323H157.476C156.954 50.3673 156.063 49.1501 154.802 48.2806C153.584 47.3677 152.063 46.9112 150.237 46.9112C147.629 46.9112 145.564 47.8676 144.042 49.7804C142.521 51.6497 141.76 54.3233 141.76 57.8011C141.76 61.2354 142.521 63.909 144.042 65.8218C145.564 67.6911 147.629 68.6257 150.237 68.6257C153.932 68.6257 156.345 66.9738 157.476 63.6699H167.322C166.322 67.5824 164.344 70.6906 161.388 72.995C158.432 75.2988 154.737 76.4507 150.303 76.4507C146.825 76.4507 143.738 75.6899 141.042 74.1685C138.347 72.6032 136.239 70.4296 134.717 67.6476C133.196 64.8219 132.435 61.5398 132.435 57.8011ZM169.054 57.8011C169.054 54.0625 169.815 50.802 171.336 48.0198C172.858 45.1941 174.966 43.0205 177.662 41.4989C180.357 39.9339 183.443 39.1514 186.921 39.1514C191.399 39.1514 195.094 40.2817 198.006 42.5422C200.963 44.7593 202.94 47.8894 203.941 51.9323H194.094C193.572 50.3673 192.681 49.1501 191.42 48.2806C190.204 47.3677 188.681 46.9112 186.856 46.9112C184.247 46.9112 182.183 47.8676 180.661 49.7804C179.139 51.6497 178.379 54.3233 178.379 57.8011C178.379 61.2354 179.139 63.909 180.661 65.8218C182.183 67.6911 184.247 68.6257 186.856 68.6257C190.551 68.6257 192.964 66.9738 194.094 63.6699H203.941C202.94 67.5824 200.963 70.6906 198.006 72.995C195.051 75.2988 191.355 76.4507 186.921 76.4507C183.443 76.4507 180.357 75.6899 177.662 74.1685C174.966 72.6032 172.858 70.4296 171.336 67.6476C169.815 64.8219 169.054 61.5398 169.054 57.8011ZM241.602 57.0186C241.602 58.3228 241.515 59.4965 241.342 60.5399H214.932C215.15 63.1482 216.063 65.1914 217.671 66.6695C219.28 68.1476 221.258 68.8866 223.605 68.8866C226.996 68.8866 229.409 67.4303 230.843 64.5176H240.69C239.647 67.9954 237.646 70.8646 234.69 73.1252C231.735 75.3419 228.104 76.4507 223.801 76.4507C220.323 76.4507 217.193 75.6899 214.41 74.1685C211.672 72.6032 209.52 70.408 207.955 67.5824C206.434 64.7567 205.673 61.4963 205.673 57.8011C205.673 54.0625 206.434 50.7803 207.955 47.9545C209.477 45.1288 211.607 42.9552 214.346 41.4337C217.084 39.9122 220.236 39.1514 223.801 39.1514C227.235 39.1514 230.3 39.8904 232.995 41.3685C235.734 42.8465 237.842 44.955 239.32 47.6937C240.842 50.389 241.602 53.4973 241.602 57.0186ZM232.147 54.4102C232.104 52.0627 231.256 50.1934 229.604 48.8023C227.953 47.3677 225.931 46.6504 223.54 46.6504C221.279 46.6504 219.367 47.346 217.801 48.737C216.28 50.0847 215.345 51.9757 214.997 54.4102H232.147ZM259.482 76.4507C256.526 76.4507 253.874 75.9294 251.527 74.886C249.179 73.7989 247.31 72.3429 245.918 70.5166C244.571 68.691 243.832 66.6695 243.702 64.4524H252.896C253.07 65.8435 253.743 66.9956 254.918 67.9084C256.135 68.8214 257.635 69.2778 259.417 69.2778C261.156 69.2778 262.503 68.93 263.46 68.2345C264.46 67.5389 264.96 66.6478 264.96 65.561C264.96 64.3872 264.351 63.5177 263.134 62.9526C261.96 62.344 260.069 61.6919 257.461 60.9963C254.765 60.3442 252.548 59.6704 250.809 58.9749C249.114 58.2793 247.636 57.2142 246.375 55.7796C245.158 54.345 244.549 52.4105 244.549 49.9761C244.549 47.9763 245.114 46.1504 246.245 44.4985C247.418 42.8465 249.071 41.5424 251.2 40.586C253.374 39.6296 255.917 39.1514 258.83 39.1514C263.134 39.1514 266.568 40.2382 269.133 42.4118C271.698 44.542 273.111 47.4329 273.371 51.0846H264.634C264.503 49.65 263.895 48.5197 262.807 47.6937C261.764 46.8243 260.351 46.3896 258.57 46.3896C256.917 46.3896 255.635 46.6939 254.722 47.3025C253.853 47.9111 253.418 48.7588 253.418 49.8456C253.418 51.0629 254.026 51.9975 255.243 52.6496C256.461 53.2582 258.352 53.8886 260.916 54.5406C263.525 55.1927 265.677 55.8666 267.373 56.5621C269.068 57.2577 270.524 58.3445 271.741 59.8226C273.002 61.2572 273.654 63.1699 273.698 65.561C273.698 67.6476 273.111 69.517 271.937 71.1687C270.807 72.821 269.155 74.1253 266.981 75.0816C264.851 75.9941 262.352 76.4507 259.482 76.4507ZM292.408 76.4507C289.451 76.4507 286.799 75.9294 284.452 74.886C282.105 73.7989 280.235 72.3429 278.844 70.5166C277.497 68.691 276.757 66.6695 276.627 64.4524H285.821C285.995 65.8435 286.669 66.9956 287.843 67.9084C289.06 68.8214 290.56 69.2778 292.342 69.2778C294.081 69.2778 295.429 68.93 296.385 68.2345C297.385 67.5389 297.885 66.6478 297.885 65.561C297.885 64.3872 297.276 63.5177 296.059 62.9526C294.885 62.344 292.994 61.6919 290.386 60.9963C287.691 60.3442 285.473 59.6704 283.735 58.9749C282.039 58.2793 280.561 57.2142 279.301 55.7796C278.083 54.345 277.475 52.4105 277.475 49.9761C277.475 47.9763 278.039 46.1504 279.17 44.4985C280.344 42.8465 281.996 41.5424 284.126 40.586C286.3 39.6296 288.843 39.1514 291.756 39.1514C296.059 39.1514 299.494 40.2382 302.058 42.4118C304.623 44.542 306.036 47.4329 306.297 51.0846H297.559C297.429 49.65 296.82 48.5197 295.733 47.6937C294.69 46.8243 293.277 46.3896 291.495 46.3896C289.843 46.3896 288.56 46.6939 287.647 47.3025C286.778 47.9111 286.343 48.7588 286.343 49.8456C286.343 51.0629 286.952 51.9975 288.169 52.6496C289.386 53.2582 291.277 53.8886 293.842 54.5406C296.451 55.1927 298.602 55.8666 300.298 56.5621C301.993 57.2577 303.45 58.3445 304.667 59.8226C305.927 61.2572 306.58 63.1699 306.623 65.561C306.623 67.6476 306.036 69.517 304.863 71.1687C303.732 72.821 302.08 74.1253 299.906 75.0816C297.777 75.9941 295.277 76.4507 292.408 76.4507ZM363.24 30.3482L347.851 60.0182V75.8639H338.722V60.0182L323.267 30.3482H333.57L343.351 51.1498L353.068 30.3482H363.24ZM399.479 57.0186C399.479 58.3228 399.393 59.4965 399.219 60.5399H372.809C373.026 63.1482 373.939 65.1914 375.548 66.6695C377.156 68.1476 379.134 68.8866 381.482 68.8866C384.873 68.8866 387.285 67.4303 388.719 64.5176H398.566C397.523 67.9954 395.524 70.8646 392.567 73.1252C389.611 75.3419 385.981 76.4507 381.677 76.4507C378.199 76.4507 375.07 75.6899 372.287 74.1685C369.548 72.6032 367.397 70.408 365.832 67.5824C364.31 64.7567 363.549 61.4963 363.549 57.8011C363.549 54.0625 364.31 50.7803 365.832 47.9545C367.353 45.1288 369.483 42.9552 372.222 41.4337C374.961 39.9122 378.112 39.1514 381.677 39.1514C385.111 39.1514 388.177 39.8904 390.871 41.3685C393.61 42.8465 395.719 44.955 397.197 47.6937C398.718 50.389 399.479 53.4973 399.479 57.0186ZM390.024 54.4102C389.981 52.0627 389.133 50.1934 387.481 48.8023C385.829 47.3677 383.807 46.6504 381.416 46.6504C379.156 46.6504 377.243 47.346 375.678 48.737C374.156 50.0847 373.222 51.9757 372.874 54.4102H390.024ZM417.358 76.4507C414.403 76.4507 411.751 75.9294 409.403 74.886C407.056 73.7989 405.186 72.3429 403.796 70.5166C402.447 68.691 401.708 66.6695 401.578 64.4524H410.773C410.946 65.8435 411.62 66.9956 412.794 67.9084C414.011 68.8214 415.511 69.2778 417.294 69.2778C419.032 69.2778 420.38 68.93 421.336 68.2345C422.336 67.5389 422.836 66.6478 422.836 65.561C422.836 64.3872 422.228 63.5177 421.01 62.9526C419.837 62.344 417.945 61.6919 415.337 60.9963C412.642 60.3442 410.425 59.6704 408.686 58.9749C406.99 58.2793 405.513 57.2142 404.251 55.7796C403.035 54.345 402.426 52.4105 402.426 49.9761C402.426 47.9763 402.991 46.1504 404.121 44.4985C405.295 42.8465 406.947 41.5424 409.077 40.586C411.251 39.6296 413.794 39.1514 416.706 39.1514C421.01 39.1514 424.444 40.2382 427.01 42.4118C429.575 44.542 430.988 47.4329 431.248 51.0846H422.51C422.379 49.65 421.771 48.5197 420.685 47.6937C419.641 46.8243 418.228 46.3896 416.446 46.3896C414.794 46.3896 413.512 46.6939 412.599 47.3025C411.729 47.9111 411.294 48.7588 411.294 49.8456C411.294 51.0629 411.903 51.9975 413.12 52.6496C414.337 53.2582 416.228 53.8886 418.793 54.5406C421.402 55.1927 423.554 55.8666 425.249 56.5621C426.944 57.2577 428.401 58.3445 429.618 59.8226C430.878 61.2572 431.53 63.1699 431.574 65.561C431.574 67.6476 430.988 69.517 429.813 71.1687C428.683 72.821 427.031 74.1253 424.858 75.0816C422.727 75.9941 420.228 76.4507 417.358 76.4507Z" fill="black"/>
						<path d="M315.279 42.3944C313.67 42.3944 312.323 41.8945 311.236 40.8946C310.193 39.8513 309.671 38.5688 309.671 37.0473C309.671 35.5258 310.193 34.2651 311.236 33.2652C312.323 32.2218 313.67 31.7002 315.279 31.7002C316.887 31.7002 318.213 32.2218 319.257 33.2652C320.344 34.2651 320.887 35.5258 320.887 37.0473C320.887 38.5688 320.344 39.8513 319.257 40.8946C318.213 41.8945 316.887 42.3944 315.279 42.3944ZM319.779 46.6982V75.8639H310.649V46.6982H319.779Z" fill="black"/>
						<path d="M63.9552 20.5745C65.8756 18.6985 68.9518 18.7294 70.834 20.6438L76.1159 26.0165C78.0035 27.936 77.9764 31.0222 76.0554 32.9083L40.3103 68.0109C39.5134 68.7934 38.2419 68.8103 37.4245 68.0493L12.4094 44.7593C10.351 42.843 10.3382 39.5868 12.3812 37.6542L18.0434 32.2982C19.9598 30.4853 22.9711 30.527 24.8364 32.3925L36.7304 44.2865C37.5391 45.0952 38.8479 45.1028 39.666 44.3036L63.9552 20.5745Z" fill="#1863DC"/>
						<path d="M15.1705 92.6348C13.5412 94.2669 10.8971 94.2697 9.26474 92.6404L2.95578 86.3436C1.32339 84.7143 1.32086 82.0702 2.95012 80.4374L24.7242 58.6218L36.9446 70.8187L15.1705 92.6348Z" fill="#1863DC"/>
						<path d="M64.1495 92.4518C65.8508 94.0158 68.4984 93.9002 70.0573 92.195L76.0784 85.6095C77.629 83.9133 77.5184 81.2824 75.8299 79.7234L50.7178 56.5339L40.9738 71.1501L64.1495 92.4518Z" fill="#1863DC"/>
						<path d="M39.5818 30.624C46.8852 30.624 52.8058 24.7034 52.8058 17.4C52.8058 10.0966 46.8852 4.17603 39.5818 4.17603C32.2784 4.17603 26.3578 10.0966 26.3578 17.4C26.3578 24.7034 32.2784 30.624 39.5818 30.624Z" fill="black"/>
					</svg>

					<p class="cya11y-review-text">
						<?php esc_html_e( 'Hey, we at', 'accessibility-widget' ); ?> <strong><?php esc_html_e( 'AccessiYes', 'accessibility-widget' ); ?></strong> <?php esc_html_e( 'would like to thank you for using our plugin. We would really appreciate if you could take a moment to drop a quick review that will inspire us to keep going.', 'accessibility-widget' ); ?>
					</p>

					<div class="cya11y-review-actions">
						<a href="https://wordpress.org/support/plugin/accessibility-widget/reviews/#new-post" class="cya11y-btn cya11y-btn-primary" target="_blank" rel="noopener noreferrer" onclick="window.location.href='<?php echo esc_url( $permanent_url ); ?>'; return true;">
							<?php esc_html_e( 'Review now', 'accessibility-widget' ); ?>
						</a>
						<a href="<?php echo esc_url( $permanent_url ); ?>" class="cya11y-btn cya11y-btn-outline">
							<?php esc_html_e( 'Never show again', 'accessibility-widget' ); ?>
						</a>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * Handle admin notice dismiss actions for the review banner.
	 */
	public function handle_review_notice_actions() {
		if ( ! isset( $_GET['cya11y_dismiss_review'] ) || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! isset( $_GET['_wpnonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ) ), 'cya11y_dismiss_review_nonce' ) ) {
			return;
		}

		$dismiss_type = sanitize_text_field( wp_unslash( $_GET['cya11y_dismiss_review'] ) );
		$banners      = get_option( 'cya11y_banners', array() );

		if ( 'permanent' === $dismiss_type ) {
			$banners['review-banner'] = array(
				'status' => false,
			);
		} elseif ( 'temporary' === $dismiss_type ) {
			$banners['review-banner'] = array(
				'status' => false,
				'until'  => time() + ( 60 * DAY_IN_SECONDS ),
			);
		}

		update_option( 'cya11y_banners', $banners );

		// Redirect cleanly
		$redirect_url = remove_query_arg( array( 'cya11y_dismiss_review', '_wpnonce' ) );
		wp_safe_redirect( $redirect_url );
		exit;
	}

	/**
	 * Hide all the unrelated notices from plugin page.
	 *
	 * @since 3.0.0
	 * @return void
	 */
	public function hide_admin_notices() {
		// Bail if we're not on a CookieYes screen.
		if ( empty( $_REQUEST['page'] ) || ! preg_match( '/accessibility-widget/', esc_html( wp_unslash( $_REQUEST['page'] ) ) ) ) { // phpcs:ignore WordPress.Security.NonceVerification,WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			return;
		}
		global $wp_filter;

		$notices_type = array(
			'user_admin_notices',
			'admin_notices',
			'all_admin_notices',
		);

		foreach ( $notices_type as $type ) {
			if ( empty( $wp_filter[ $type ]->callbacks ) || ! is_array( $wp_filter[ $type ]->callbacks ) ) {
				continue;
			}

			foreach ( $wp_filter[ $type ]->callbacks as $priority => $hooks ) {
				foreach ( $hooks as $name => $arr ) {
					if ( is_object( $arr['function'] ) && $arr['function'] instanceof \Closure ) {
						unset( $wp_filter[ $type ]->callbacks[ $priority ][ $name ] );
						continue;
					}
					$class = ! empty( $arr['function'][0] ) && is_object( $arr['function'][0] ) ? strtolower( get_class( $arr['function'][0] ) ) : '';

					if ( ! empty( $class ) && preg_match( '/^(?:cya11y)/', $class ) ) {
						continue;
					}
					if ( ! empty( $name ) && ! preg_match( '/^(?:cya11y)/', $name ) ) {
						unset( $wp_filter[ $type ]->callbacks[ $priority ][ $name ] );
					}
				}
			}
		}
	}
}
