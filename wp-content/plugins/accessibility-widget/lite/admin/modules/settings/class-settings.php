<?php
/**
 * Class Settings file.
 *
 * @package AccessibilityWidget
 */

namespace CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings;

use CookieYes\AccessibilityWidget\Lite\Includes\Modules;
use CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings\Api\Api;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Handles Cookies Operation
 *
 * @class       Settings
 * @version     3.0.0
 * @package     AccessibilityWidget
 */
class Settings extends Modules {

	/**
	 * Constructor.
	 */
	public function init() {
		$this->load_default();
		$this->load_apis();
	}

	/**
	 * Load API files
	 *
	 * @return void
	 */
	public function load_apis() {
		new Api();
	}


	/**
	 * Load default settings to the database.
	 *
	 * @return void
	 */
	public function load_default() {
		if ( false === cya11y_first_time_install() || false !== get_option( 'cya11y_widget_settings', false ) ) {
			return;
		}
		$settings = new \CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings\Includes\Settings();
		$default  = $settings->get_defaults();
		$settings->update( $default );
	}
}
