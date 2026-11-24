<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.cookieyes.com/
 * @since      3.0.0
 *
 * @package    AccessibilityWidget
 * @subpackage AccessibilityWidget/Frontend
 */

namespace CookieYes\AccessibilityWidget\Lite\Frontend;
use CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings\Includes\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    AccessibilityWidget
 * @subpackage CookieYes\AccessibilityWidget\Lite\Frontend
 * @author     CookieYes <info@cookieyes.com>
 */
class Frontend {


	/**
	 * The ID of this plugin.
	 *
	 * @since    3.0.0
	 * @access   private
	 * @var      string    $plugin_name  The ID of this plugin.
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
	 * Banner object
	 *
	 * @var object
	 */
	protected $banner;

	/**
	 * Plugin settings
	 *
	 * @var object
	 */
	protected $settings;

	/**
	 * Plugin settings
	 *
	 * @var object
	 */
	protected $gcm_settings;

	/**
	 * Banner template
	 *
	 * @var object
	 */
	protected $template;

	/**
	 * Providers list
	 *
	 * @var array
	 */
	protected $providers = array();
	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    3.0.0
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
		$this->load_modules();
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 1 );
	}

	/**
	 * Get the default modules array
	 *
	 * @since 3.0.0
	 * @return array
	 */
	public function get_default_modules() {
		$modules = array();
		return $modules;
	}

	/**
	 * Load all the modules
	 *
	 * @return void
	 */
	public function load_modules() {}

	/**
	 * Enqeue front end scripts
	 *
	 * @return void
	 */
	public function enqueue_scripts() {
		$suffix      = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
		$widget_file = 'assets/js/widget' . $suffix . '.js';
		$widget_path = plugin_dir_path( __FILE__ ) . $widget_file;
		// Release packages may ship only the minified bundle; fall back to it so
		// SCRIPT_DEBUG sites don't 404 on widget.js and lose the widget entirely.
		if ( '' === $suffix && ! file_exists( $widget_path ) ) {
			$widget_file = 'assets/js/widget.min.js';
			$widget_path = plugin_dir_path( __FILE__ ) . $widget_file;
		}
		// Version by file mtime so a rebuilt bundle always busts the browser cache;
		// a static plugin version would keep serving stale JS after an update.
		$widget_ver = file_exists( $widget_path ) ? filemtime( $widget_path ) : $this->version;
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . $widget_file, array(), $widget_ver, true );
		$config = $this->get_store_data();
		wp_localize_script( $this->plugin_name, '_cyA11yConfig', $config );
		wp_localize_script(
			$this->plugin_name,
			'_cyA11yAssets',
			array(
				'fonts' => plugin_dir_url( __FILE__ ) . 'assets/fonts/',
			)
		);
		// The statement templates (~140 KB inline, all languages) are only consumed
		// by the in-widget statement panel, which the widget renders only when
		// displayInWidget is on and a company name exists (renderMenu.ts). Sites
		// using an external statement URL never read them, so skip the payload.
		$statement = isset( $config['modules']['statement'] ) ? $config['modules']['statement'] : array();
		if ( ! empty( $statement['displayInWidget'] ) && ! empty( $statement['formData']['companyName'] ) ) {
			wp_localize_script( $this->plugin_name, '_cyA11yStatementTemplates', $this->get_statement_templates() );
		}
	}

	/**
	 * Load statement templates from JSON files and return as an associative array keyed by language code.
	 *
	 * @return array
	 */
	private function get_statement_templates(): array {
		$templates = array();
		$dir       = plugin_dir_path( __FILE__ ) . 'assets/statement-templates/';
		$files     = glob( $dir . '*.json' );
		if ( ! $files ) {
			return $templates;
		}
		foreach ( $files as $file ) {
			$lang = basename( $file, '.json' );
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$raw = file_get_contents( $file );
			if ( false === $raw ) {
				continue;
			}
			$data = json_decode( $raw, true );
			if ( is_array( $data ) ) {
				$templates[ $lang ] = $data;
			}
		}
		return $templates;
	}

	/**
	 * Get store data
	 *
	 * @return array
	 */
	public function get_store_data() {
		$settings = Settings::get_instance()->get();
		if ( isset( $settings['keyboard'] ) ) {
			/**
			 * Filters the keyboard shortcut for the accessibility widget.
			 *
			 * Use this to change the shortcut without touching admin settings.
			 * Format: modifier+key, e.g. "alt+a", "shift+alt+w".
			 * Takes effect immediately — no re-save required.
			 *
			 * @param string $shortcut Default shortcut value.
			 */
			$settings['keyboard']['shortcut'] = apply_filters( 'cya11y_keyboard_shortcut', 'alt+a' );
		}

		if ( isset( $settings['language'] ) ) {
			/**
			 * Filters whether the language selector card is shown inside the widget menu.
			 *
			 * Return false to hide the selector. The widget still auto-translates
			 * (page/browser language first, then the default language chosen in the
			 * admin settings); visitors only lose the manual override.
			 * Takes effect immediately — no re-save required.
			 *
			 * @since 3.2.8
			 *
			 * @param bool $show Whether to show the selector. Defaults to the saved setting (true).
			 */
			$settings['language']['showSelector'] = (bool) apply_filters( 'cya11y_show_language_selector', $settings['language']['showSelector'] );
		}

		/**
		 * Filters the keyboard focus-ring colour used inside the widget panel.
		 *
		 * Return a 3, 6, or 8-digit hex string (e.g. "#FFD400") to override the
		 * auto-computed focus colour. Return null/false/empty to keep the default
		 * behaviour (primary brand colour, or black for low-contrast primaries).
		 *
		 * Notes:
		 * - The widget renders inside a Shadow DOM, so site-wide :focus CSS does
		 *   not cascade in. This filter is the supported way to recolour the
		 *   focus ring on widget chrome.
		 * - Width / offset / glow are unchanged; only the colour swaps.
		 *
		 * @param string|null $color Filter return value; null by default.
		 */
		$focus_color_raw = apply_filters( 'cya11y_focus_ring_color', null );
		$settings['focusRingColor'] = ( is_string( $focus_color_raw ) && preg_match( '/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i', $focus_color_raw ) )
			? $focus_color_raw
			: null;

		return $settings;
	}
}
