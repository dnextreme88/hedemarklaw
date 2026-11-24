<?php

/**
 * Class Banner file.
 *
 * @package AccessibilityWidget
 */

namespace CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings\Includes;

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
class Settings {


	/**
	 * Data array, with defaults.
	 *
	 * @var array
	 */
	protected $data = array();

	/**
	 * Instance of the current class
	 *
	 * @var object
	 */
	private static $instance;

	/**
	 * Return the current instance of the class
	 *
	 * @return object
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	/**
	 * Constructor
	 */
	public function __construct() {
		$this->data = $this->get_defaults();
	}

	/**
	 * Get default plugin settings
	 *
	 * @return array
	 */
	public function get_defaults() {
		return array(
			'status'       => array(
				'mobile'  => true,
				'desktop' => true,
			),
			'iconId'       => 'default',
			'iconSize'     => 48,
			'label'        => 'Accessibility widget',
			'heading'      => 'Accessibility menu',
			'position'     => array(
				'mobile'  => 'bottom-right',
				'desktop' => 'bottom-right',
			),
			'language'     => array(
				'default'      => 'en',
				'selected'     => array(),
				'showSelector' => true,
			),
			'margins'      => array(
				'desktop' => array(
					'top'    => 20,
					'bottom' => 20,
					'left'   => 20,
					'right'  => 20,
				),
				'mobile'  => array(
					'top'    => 20,
					'bottom' => 20,
					'left'   => 20,
					'right'  => 20,
				),
			),
			'primaryColor' => '#1863DC',
			'keyboard'     => array(
				'enabled'  => false,
				'shortcut' => 'alt+a',
			),
			'modules'      => array(
				'color'      => array(
					'darkContrast'   => array( 'enabled' => true ),
					'lightContrast'  => array( 'enabled' => true ),
					'highContrast'   => array( 'enabled' => true ),
					'highSaturation' => array( 'enabled' => true ),
					'lowSaturation'  => array( 'enabled' => true ),
					'monochrome'     => array( 'enabled' => true ),
				),
				'content'    => array(
					'adjustFontSizing' => array( 'enabled' => true ),
					'highlightTitle'   => array( 'enabled' => true ),
					'highlightLinks'   => array( 'enabled' => true ),
					'dyslexicFont'     => array( 'enabled' => true ),
					'letterSpacing'    => array( 'enabled' => true ),
					'lineHeight'       => array( 'enabled' => true ),
					'fontWeight'       => array( 'enabled' => true ),
					'textAlign'        => array( 'enabled' => true ),
				),
				'navigation' => array(
					'readingGuide'    => array( 'enabled' => true ),
					'pauseAnimations' => array( 'enabled' => true ),
					'bigCursor'       => array( 'enabled' => true ),
				),
				'statement'  => array(
					'enabled'         => false,
					'url'             => '',
					'displayInWidget' => false,
					'generatedDate'   => '',
					'formData'        => array(
						'companyName'       => '',
						'businessEmail'     => '',
						'website'           => '',
						'wcagStandard'      => 'WCAG 2.2 Level AA',
						'conformanceStatus' => 'fully-conformant',
					),
				),
				'profiles'   => array(
					'enabled' => true,
				),
				'pageRead'   => array(
					'enabled' => true,
				),
				'muteSounds' => array(
					'enabled' => true,
				),
			),
		);
	}
	/**
	 * Get settings
	 *
	 * @param string $group Name of the group.
	 * @param string $key Name of the key.
	 * @return array
	 */
	public function get( $group = '', $key = '' ) {
		$settings = get_option( 'cya11y_widget_settings', $this->data );
		$settings = self::sanitize( $settings, $this->data );
		if ( empty( $key ) && empty( $group ) ) {
			return $settings;
		} elseif ( ! empty( $key ) && ! empty( $group ) ) {
			$settings = isset( $settings[ $group ] ) ? $settings[ $group ] : array();
			return isset( $settings[ $key ] ) ? $settings[ $key ] : array();
		} else {
			return isset( $settings[ $group ] ) ? $settings[ $group ] : array();
		}
	}

	/**
	 * Excludes a key from sanitizing multiple times.
	 *
	 * @return array
	 */
	public static function get_excludes() {
		return array(
			'selected',
		);
	}

	/**
	 * Keys that contain HTML and should be sanitized with wp_kses_post instead of sanitize_text_field.
	 *
	 * @return array
	 */
	public static function get_html_keys() {
		return array();
	}
	/**
	 * Update settings to database.
	 *
	 * @param array $data Array of settings data.
	 * @return void
	 */
	public function update( $data, $clear = true ) {
		// Always sanitize against the class defaults so that newly added fields
		// (e.g. statementContent, formData) are preserved even when they are
		// absent from the currently stored DB value.
		$settings = self::sanitize( $data, $this->data );
		update_option( 'cya11y_widget_settings', $settings );
		do_action( 'cya11y_after_update_settings', $clear );
	}

	/**
	 * Sanitize options
	 *
	 * @param array $settings Input settings array.
	 * @param array $defaults Default settings array.
	 * @return array
	 */
	public static function sanitize( $settings, $defaults ) {
		$result    = array();
		$excludes  = self::get_excludes();
		$html_keys = self::get_html_keys();
		foreach ( $defaults as $key => $data ) {
			if ( in_array( $key, $excludes, true ) ) {
				continue;
			}
			if ( ! isset( $settings[ $key ] ) ) {
				$result[ $key ] = $data;
				continue;
			}
			if ( in_array( $key, $html_keys, true ) ) {
				$result[ $key ] = \wp_kses_post( $settings[ $key ] );
			} elseif ( is_array( $data ) ) {
				$result[ $key ] = self::sanitize_widget_data( $settings[ $key ], $data, $excludes );
			} else {
				$result[ $key ] = self::sanitize_value( $settings[ $key ], $data );
			}
		}
		return $result;
	}

	private static function sanitize_widget_data( $input, $default, $excludes = array() ) {
		$result = array();
		foreach ( $default as $key => $value ) {
			// Excluded keys (e.g. 'selected') are plain lists, not templates to
			// reconcile against — walking $default's (empty) keys would always
			// discard whatever the caller submitted, so sanitize them as a list.
			if ( in_array( $key, $excludes, true ) ) {
				$result[ $key ] = self::sanitize_list( isset( $input[ $key ] ) ? $input[ $key ] : $value );
				continue;
			}
			if ( ! isset( $input[ $key ] ) ) {
				$result[ $key ] = $value;
				continue;
			}
			if ( is_array( $value ) ) {
				$result[ $key ] = self::sanitize_widget_data( $input[ $key ], $value, $excludes );
			} else {
				$result[ $key ] = self::sanitize_value( $input[ $key ], $value );
			}
		}
		return $result;
	}

	/**
	 * Sanitize a flat list of scalar values (e.g. language codes).
	 *
	 * @param mixed $input Input value expected to be an array of strings.
	 * @return array
	 */
	private static function sanitize_list( $input ) {
		if ( ! is_array( $input ) ) {
			return array();
		}
		return array_values( array_map( 'sanitize_text_field', array_filter( $input, 'is_string' ) ) );
	}

	private static function sanitize_value( $input, $default ) {
		$type = gettype( $default );
		switch ( $type ) {
			case 'string':
				return \sanitize_text_field( $input );
			case 'integer':
				return \absint( $input );
			case 'boolean':
				return (bool) $input;
			case 'double': // For float/decimal numbers
				return (float) $input;
			default:
				return $input;
		}
	}
}
