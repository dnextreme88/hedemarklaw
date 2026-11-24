<?php

/**
 * Class Api file.
 *
 * @package Settings
 */

namespace CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings\Api;

use WP_REST_Server;
use WP_Error;
use stdClass;
use CookieYes\AccessibilityWidget\Lite\Includes\Rest_Controller;
use CookieYes\AccessibilityWidget\Lite\Admin\Modules\Settings\Includes\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Cookies API
 *
 * @class       Api
 * @version     3.0.0
 * @package     AccessibilityWidget
 * @extends     Rest_Controller
 */
class Api extends Rest_Controller {


	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'cya11y/v1';
	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'widgets';

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ), 10 );
	}
	/**
	 * Register the routes for cookies.
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'create_item_permissions_check' ),
					'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::CREATABLE ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/banners',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'update_banner' ),
					'permission_callback' => array( $this, 'create_item_permissions_check' ),
					'args'                => array(
						'banner_id' => array(
							'required'          => true,
							'type'              => 'string',
							'sanitize_callback' => 'sanitize_text_field',
							'description'       => __( 'Banner identifier.', 'accessibility-widget' ),
						),
						'data' => array(
							'required'    => true,
							'type'        => 'object',
							'description' => __( 'Banner data to store (status, expiry, etc).', 'accessibility-widget' ),
							'properties'  => array(
								'status' => array(
									'type' => 'boolean',
								),
								'until'  => array(
									'type' => 'integer',
								),
							),
						),
					),
				),
			)
		);
	}
	/**
	 * Get a collection of items.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		$object = new Settings();
		$data   = $object->get();
		$data['banners'] = get_option( 'cya11y_banners', array() );
		return rest_ensure_response( $data );
	}

	/**
	 * Update a banner's data.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function update_banner( $request ) {
		$banner_id = $request->get_param( 'banner_id' );
		$data = $request->get_param( 'data' );
		
		$banners = get_option( 'cya11y_banners', array() );
		
		// Update or create banner data
		$banners[ $banner_id ] = is_array( $data ) ? $data : array();
		
		update_option( 'cya11y_banners', $banners );
		
		return rest_ensure_response( array(
			'success' => true,
			'banners' => $banners,
		) );
	}
	/**
	 * Create a single cookie or cookie category.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function create_item( $request ) {
		$data    = $this->prepare_item_for_database( $request );
		$context = ! empty( $request['context'] ) ? $request['context'] : 'view';
		$data    = $this->add_additional_fields_to_object( $data, $request );
		$data    = $this->filter_response_by_context( $data, $context );
		return rest_ensure_response( $data );
	}


	/**
	 * Format data to provide output to API
	 *
	 * @param object $object Object of the corresponding item Cookie or Cookie_Categories.
	 * @param array  $request Request params.
	 * @return array
	 */
	public function prepare_item_for_response( $object, $request ) {
		$context = ! empty( $request['context'] ) ? $request['context'] : 'view';
		$data    = $this->add_additional_fields_to_object( $object, $request );
		$data    = $this->filter_response_by_context( $data, $context );
		return rest_ensure_response( $data );
	}

	/**
	 * Prepare a single item for create or update.
	 *
	 * @param  WP_REST_Request $request Request object.
	 * @return stdClass
	 */
	public function prepare_item_for_database( $request ) {
		$clear = $request->get_param( 'clear' );
		if ( is_null( $clear ) ) {
			$clear = true;
		} else {
			$clear = filter_var( $clear, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
		}
		$object     = new Settings();
		$data       = $object->get();
		$schema     = $this->get_item_schema();
		$properties = isset( $schema['properties'] ) && is_array( $schema['properties'] ) ? $schema['properties'] : array();
		if ( ! empty( $properties ) ) {
			$properties_keys = array_keys(
				array_filter(
					$properties,
					function ( $property ) {
						return isset( $property['readonly'] ) && true === $property['readonly'] ? false : true;
					}
				)
			);
			foreach ( $properties_keys as $key ) {
				$value        = isset( $request[ $key ] ) ? $request[ $key ] : '';
				$data[ $key ] = $value;
			}
		}
		// keyboard.shortcut is server-controlled; strip it even though 'keyboard' itself is writable.
		if ( isset( $data['keyboard'] ) && is_array( $data['keyboard'] ) ) {
			unset( $data['keyboard']['shortcut'] );
		}
		// language.showSelector is set only by the cya11y_show_language_selector filter (no admin UI);
		// strip it so a REST client cannot hide the selector where the admin screen can't show it.
		if ( isset( $data['language'] ) && is_array( $data['language'] ) ) {
			unset( $data['language']['showSelector'] );
		}
		$object->update( $data, $clear );
		return $object->get();
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		return array(
			'context'  => $this->get_context_param( array( 'default' => 'view' ) ),
			'paged'    => array(
				'description'       => __( 'Current page of the collection.', 'accessibility-widget' ),
				'type'              => 'integer',
				'default'           => 1,
				'sanitize_callback' => 'absint',
				'validate_callback' => 'rest_validate_request_arg',
				'minimum'           => 1,
			),
			'per_page' => array(
				'description'       => __( 'Maximum number of items to be returned in result set.', 'accessibility-widget' ),
				'type'              => 'integer',
				'default'           => 10,
				'minimum'           => 1,
				'maximum'           => 100,
				'sanitize_callback' => 'absint',
				'validate_callback' => 'rest_validate_request_arg',
			),
			'search'   => array(
				'description'       => __( 'Limit results to those matching a string.', 'accessibility-widget' ),
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => 'rest_validate_request_arg',
			),
			'force'    => array(
				'type'        => 'boolean',
				'description' => __( 'Force fetch data', 'accessibility-widget' ),
			),
		);
	}

	/**
	 * Get the Consent logs's schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'accessibility_widget',
			'type'       => 'object',
			'properties' => array(
				'status'       => array(
					'description' => __( 'Widget status.', 'accessibility-widget' ),
					'type'        => 'object',
					'context'     => array( 'view', 'edit' ),
					'properties'  => array(
						'mobile'  => array(
							'type' => 'boolean',
						),
						'desktop' => array(
							'type' => 'boolean',
						),
					),
				),
				'iconId'       => array(
					'description' => __( 'Icon identifier.', 'accessibility-widget' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
				),
				'iconSize'     => array(
					'description' => __( 'Icon size in pixels.', 'accessibility-widget' ),
					'type'        => 'integer',
					'context'     => array( 'view', 'edit' ),
				),
				'label'        => array(
					'description' => __( 'Widget label.', 'accessibility-widget' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
				),
				'heading'      => array(
					'description' => __( 'Widget heading.', 'accessibility-widget' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
				),
				'position'     => array(
					'description' => __( 'Widget position for different devices.', 'accessibility-widget' ),
					'type'        => 'object',
					'context'     => array( 'view', 'edit' ),
					'properties'  => array(
						'mobile'  => array(
							'type' => 'string',
						),
						'desktop' => array(
							'type' => 'string',
						),
					),
				),
				'language'     => array(
					'description' => __( 'Widget language.', 'accessibility-widget' ),
					'type'        => 'object',
					'context'     => array( 'view', 'edit' ),
					'properties'  => array(
						'default'      => array(
							'type' => 'string',
						),
						'selected'     => array(
							'type'  => 'array',
							'items' => array(
								'type' => 'string',
							),
						),
						'showSelector' => array(
							'type'     => 'boolean',
							'readonly' => true,
						),
					),
				),
				'margins'      => array(
					'description' => __( 'Widget margins in pixels.', 'accessibility-widget' ),
					'type'        => 'object',
					'context'     => array( 'view', 'edit' ),
					'properties'  => array(
						'desktop' => array(
							'type'       => 'object',
							'properties' => array(
								'top'    => array(
									'type' => 'integer',
								),
								'bottom' => array(
									'type' => 'integer',
								),
								'left'   => array(
									'type' => 'integer',
								),
								'right'  => array(
									'type' => 'integer',
								),
							),
						),
						'mobile'  => array(
							'type'       => 'object',
							'properties' => array(
								'top'    => array(
									'type' => 'integer',
								),
								'bottom' => array(
									'type' => 'integer',
								),
								'left'   => array(
									'type' => 'integer',
								),
								'right'  => array(
									'type' => 'integer',
								),
							),
						),
					),
				),
			'primaryColor'     => array(
				'description' => __( 'Primary color in hex format.', 'accessibility-widget' ),
				'type'        => 'string',
				'context'     => array( 'view', 'edit' ),
			),
			'keyboard'         => array(
				'description' => __( 'Keyboard shortcut configuration.', 'accessibility-widget' ),
				'type'        => 'object',
				'context'     => array( 'view', 'edit' ),
				'properties'  => array(
					'enabled'  => array( 'type' => 'boolean' ),
					'shortcut' => array(
						'type'     => 'string',
						'readonly' => true,
					),
				),
			),
			'dismissedBanners' => array(
					'description' => __( 'List of dismissed banner IDs.', 'accessibility-widget' ),
					'type'        => 'array',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
					'items'       => array(
						'type' => 'string',
					),
				),
			'modules'      => array(
				'description' => __( 'Widget modules configuration.', 'accessibility-widget' ),
				'type'        => 'object',
				'context'     => array( 'view', 'edit' ),
				'properties'  => array(
					'color'      => array(
						'type'       => 'object',
						'properties' => array(
							'darkContrast'   => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'lightContrast'  => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'highContrast'   => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'highSaturation' => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'lowSaturation'  => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'monochrome'     => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
						),
					),
					'content'    => array(
						'type'       => 'object',
						'properties' => array(
							'adjustFontSizing' => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'highlightTitle'   => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'highlightLinks'   => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'dyslexicFont'     => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'letterSpacing'    => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'lineHeight'       => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'fontWeight'       => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'textAlign'        => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
						),
					),
					'navigation' => array(
						'type'       => 'object',
						'properties' => array(
							'readingGuide'    => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'pauseAnimations' => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
							'bigCursor'       => array( 'type' => 'object', 'properties' => array( 'enabled' => array( 'type' => 'boolean' ) ) ),
						),
					),
					'statement'  => array(
						'type'       => 'object',
						'properties' => array(
							'enabled'         => array( 'type' => 'boolean' ),
							'url'             => array( 'type' => 'string' ),
							'displayInWidget' => array( 'type' => 'boolean' ),
							'generatedDate'   => array( 'type' => 'string' ),
							'formData'        => array(
								'type'       => 'object',
								'properties' => array(
									'companyName'       => array( 'type' => 'string' ),
									'businessEmail'     => array( 'type' => 'string' ),
									'website'           => array( 'type' => 'string' ),
									'wcagStandard'      => array( 'type' => 'string' ),
									'conformanceStatus' => array( 'type' => 'string' ),
								),
							),
						),
					),
						'profiles'   => array(
							'type'       => 'object',
							'properties' => array(
								'enabled' => array( 'type' => 'boolean' ),
							),
						),
						'pageRead'   => array(
							'type'       => 'object',
							'properties' => array(
								'enabled' => array( 'type' => 'boolean' ),
							),
						),
						'muteSounds' => array(
							'type'       => 'object',
							'properties' => array(
								'enabled' => array( 'type' => 'boolean' ),
							),
						),
				),
			),
			),
		);
		return $this->add_additional_fields_schema( $schema );
	}
} // End the class.
