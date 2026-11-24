<?php
/**
 * Uninstall feedback modal and handler for Accessibility Widget
 *
 * @link       https://www.cookieyes.com/
 * @since      3.1.0
 *
 * @package    CookieYes\AccessibilityWidget\Lite\Includes
 */

namespace CookieYes\AccessibilityWidget\Lite\Includes;

use function add_action;
use function __;
use function esc_html_e;
use function esc_attr;
use function esc_attr_e;
use function esc_js;
use function esc_html;
use function sanitize_text_field;
use function sanitize_textarea_field;
use function sanitize_email;
use function home_url;
use function get_bloginfo;
use function get_locale;
use function get_available_languages;
use function wp_get_theme;
use function is_multisite;
use function wp_remote_post;
use function wp_send_json_error;
use function wp_send_json_success;
use function wp_create_nonce;
use function wp_verify_nonce;
use function current_user_can;
use function wp_unslash;
use function wp_die;
use function phpversion;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Uninstall feedback modal and handler for Accessibility Widget
 */
class Uninstall_Feedback {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'admin_footer', array( $this, 'deactivate_scripts' ) );
		add_action( 'wp_ajax_cya11y_submit_uninstall_reason', array( $this, 'send_uninstall_reason' ) );
	}

	/**
	 * Get uninstall reasons
	 *
	 * @return array
	 */
	private function get_uninstall_reasons() {
		$reasons = array(
			array(
				'id'     => 'testing-only',
				'text'   => __( 'It was for testing only', 'accessibility-widget' ),
				'banner' => array(
					'message'   => __( 'Test didn\'t go as planned? Tell us what features would make us a better fit.', 'accessibility-widget' ),
					'link_text' => __( 'Suggest a feature', 'accessibility-widget' ),
					'link_url'  => 'https://wordpress.org/support/plugin/accessibility-widget/#new-post',
				),
			),
			array(
				'id'     => 'cant-figure-out',
				'text'   => __( 'I couldn\'t figure out how to use it', 'accessibility-widget' ),
				'fields' => array(
					array(
						'type'        => 'textarea',
						'label'       => __( 'What was confusing or difficult?', 'accessibility-widget' ),
						'placeholder' => __( 'e.g. Navigation was difficult, settings were unclear...', 'accessibility-widget' ),
					),
				),
				'banner' => array(
					'message'   => __( 'Need quick help? Our team can guide you step-by-step.', 'accessibility-widget' ),
					'link_text' => __( 'Connect with support', 'accessibility-widget' ),
					'link_url'  => 'https://wordpress.org/support/plugin/accessibility-widget/#new-post',
				),
			),
			array(
				'id'     => 'technical-issues',
				'text'   => __( 'It caused technical issues on my site', 'accessibility-widget' ),
				'fields' => array(
					array(
						'type'        => 'textarea',
						'label'       => __( 'What issue did you experience? (e.g., layout break, performance issue, plugin conflict)', 'accessibility-widget' ),
						'placeholder' => __( 'Describe the technical issue in detail...', 'accessibility-widget' ),
					),
				),
				'banner' => array(
					'message'   => __( 'We can usually resolve compatibility issues quickly.', 'accessibility-widget' ),
					'link_text' => __( 'Contact support', 'accessibility-widget' ),
					'link_url'  => 'https://wordpress.org/support/plugin/accessibility-widget/#new-post',
				),
			),
			array(
				'id'     => 'compliance-concern',
				'text'   => __( 'I\'m concerned about compliance or legal coverage', 'accessibility-widget' ),
				'fields' => array(
					array(
						'type'        => 'textarea',
						'label'       => __( 'What concerns do you have?', 'accessibility-widget' ),
						'placeholder' => __( 'Share your legal or compliance questions...', 'accessibility-widget' ),
					),
				),
			),
			array(
				'id'     => 'feature-missing',
				'text'   => __( 'I need a feature that isn\'t available', 'accessibility-widget' ),
				'fields' => array(
					array(
						'type'        => 'textarea',
						'label'       => __( 'Which feature were you looking for?', 'accessibility-widget' ),
						'placeholder' => __( 'Describe the feature you need...', 'accessibility-widget' ),
					),
				),
				'banner' => array(
					'message'   => __( 'We\'re actively improving AccessiYes and prioritizing feature requests.', 'accessibility-widget' ),
					'link_text' => __( 'Submit feature request', 'accessibility-widget' ),
					'link_url'  => 'https://wordpress.org/support/plugin/accessibility-widget/#new-post',
				),
			),
			array(
				'id'     => 'found-another-solution',
				'text'   => __( 'I found another solution', 'accessibility-widget' ),
				'fields' => array(
					array(
						'type'        => 'textarea',
						'label'       => __( 'What made the other solution a better fit?', 'accessibility-widget' ),
						'placeholder' => __( 'Which alternative are you using and why?', 'accessibility-widget' ),
					),
				),
				'banner' => array(
					'message'   => __( 'If there\'s something missing, let us know — we may already support it.', 'accessibility-widget' ),
					'link_text' => __( 'Tell us what’s missing', 'accessibility-widget' ),
					'link_url'  => 'https://wordpress.org/support/plugin/accessibility-widget/#new-post',
				),
			),
		);
		return $reasons;
	}

	/**
	 * Add deactivation scripts (modal + JS)
	 */
	public function deactivate_scripts() {
		global $pagenow;
		if ( 'plugins.php' !== $pagenow ) {
			return;
		}
		$reasons = $this->get_uninstall_reasons();
		$reasons = ( isset( $reasons ) && is_array( $reasons ) ) ? $reasons : array();

		// Generate nonce for security
		$nonce = wp_create_nonce( 'cya11y_uninstall_feedback_nonce' );
		?>
			<div class="cya11y-modal" id="cya11y-uninstall-modal" role="dialog" aria-modal="true" aria-labelledby="cya11y-modal-title" aria-hidden="true">
				<div class="cya11y-modal-wrap">
					<div class="cya11y-modal-header">
						<div class="cya11y-modal-header-text">
							<svg class="cya11y-modal-logo" viewBox="0 0 435 109" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AccessiYes by CookieYes">
								<path d="M118.623 67.1911H100.495L97.495 75.8639H87.909L104.277 30.283H114.905L131.273 75.8639H121.622L118.623 67.1911ZM116.144 59.8878L109.559 40.8468L102.972 59.8878H116.144ZM132.435 57.8011C132.435 54.0625 133.196 50.802 134.717 48.0198C136.239 45.1941 138.347 43.0205 141.042 41.4989C143.738 39.9339 146.825 39.1514 150.303 39.1514C154.78 39.1514 158.475 40.2817 161.388 42.5422C164.344 44.7593 166.322 47.8894 167.322 51.9323H157.476C156.954 50.3673 156.063 49.1501 154.802 48.2806C153.584 47.3677 152.063 46.9112 150.237 46.9112C147.629 46.9112 145.564 47.8676 144.042 49.7804C142.521 51.6497 141.76 54.3233 141.76 57.8011C141.76 61.2354 142.521 63.909 144.042 65.8218C145.564 67.6911 147.629 68.6257 150.237 68.6257C153.932 68.6257 156.345 66.9738 157.476 63.6699H167.322C166.322 67.5824 164.344 70.6906 161.388 72.995C158.432 75.2988 154.737 76.4507 150.303 76.4507C146.825 76.4507 143.738 75.6899 141.042 74.1685C138.347 72.6032 136.239 70.4296 134.717 67.6476C133.196 64.8219 132.435 61.5398 132.435 57.8011ZM169.054 57.8011C169.054 54.0625 169.815 50.802 171.336 48.0198C172.858 45.1941 174.966 43.0205 177.662 41.4989C180.357 39.9339 183.443 39.1514 186.921 39.1514C191.399 39.1514 195.094 40.2817 198.006 42.5422C200.963 44.7593 202.94 47.8894 203.941 51.9323H194.094C193.572 50.3673 192.681 49.1501 191.42 48.2806C190.204 47.3677 188.681 46.9112 186.856 46.9112C184.247 46.9112 182.183 47.8676 180.661 49.7804C179.139 51.6497 178.379 54.3233 178.379 57.8011C178.379 61.2354 179.139 63.909 180.661 65.8218C182.183 67.6911 184.247 68.6257 186.856 68.6257C190.551 68.6257 192.964 66.9738 194.094 63.6699H203.941C202.94 67.5824 200.963 70.6906 198.006 72.995C195.051 75.2988 191.355 76.4507 186.921 76.4507C183.443 76.4507 180.357 75.6899 177.662 74.1685C174.966 72.6032 172.858 70.4296 171.336 67.6476C169.815 64.8219 169.054 61.5398 169.054 57.8011ZM241.602 57.0186C241.602 58.3228 241.515 59.4965 241.342 60.5399H214.932C215.15 63.1482 216.063 65.1914 217.671 66.6695C219.28 68.1476 221.258 68.8866 223.605 68.8866C226.996 68.8866 229.409 67.4303 230.843 64.5176H240.69C239.647 67.9954 237.646 70.8646 234.69 73.1252C231.735 75.3419 228.104 76.4507 223.801 76.4507C220.323 76.4507 217.193 75.6899 214.41 74.1685C211.672 72.6032 209.52 70.408 207.955 67.5824C206.434 64.7567 205.673 61.4963 205.673 57.8011C205.673 54.0625 206.434 50.7803 207.955 47.9545C209.477 45.1288 211.607 42.9552 214.346 41.4337C217.084 39.9122 220.236 39.1514 223.801 39.1514C227.235 39.1514 230.3 39.8904 232.995 41.3685C235.734 42.8465 237.842 44.955 239.32 47.6937C240.842 50.389 241.602 53.4973 241.602 57.0186ZM232.147 54.4102C232.104 52.0627 231.256 50.1934 229.604 48.8023C227.953 47.3677 225.931 46.6504 223.54 46.6504C221.279 46.6504 219.367 47.346 217.801 48.737C216.28 50.0847 215.345 51.9757 214.997 54.4102H232.147ZM259.482 76.4507C256.526 76.4507 253.874 75.9294 251.527 74.886C249.179 73.7989 247.31 72.3429 245.918 70.5166C244.571 68.691 243.832 66.6695 243.702 64.4524H252.896C253.07 65.8435 253.743 66.9956 254.918 67.9084C256.135 68.8214 257.635 69.2778 259.417 69.2778C261.156 69.2778 262.503 68.93 263.46 68.2345C264.46 67.5389 264.96 66.6478 264.96 65.561C264.96 64.3872 264.351 63.5177 263.134 62.9526C261.96 62.344 260.069 61.6919 257.461 60.9963C254.765 60.3442 252.548 59.6704 250.809 58.9749C249.114 58.2793 247.636 57.2142 246.375 55.7796C245.158 54.345 244.549 52.4105 244.549 49.9761C244.549 47.9763 245.114 46.1504 246.245 44.4985C247.418 42.8465 249.071 41.5424 251.2 40.586C253.374 39.6296 255.917 39.1514 258.83 39.1514C263.134 39.1514 266.568 40.2382 269.133 42.4118C271.698 44.542 273.111 47.4329 273.371 51.0846H264.634C264.503 49.65 263.895 48.5197 262.807 47.6937C261.764 46.8243 260.351 46.3896 258.57 46.3896C256.917 46.3896 255.635 46.6939 254.722 47.3025C253.853 47.9111 253.418 48.7588 253.418 49.8456C253.418 51.0629 254.026 51.9975 255.243 52.6496C256.461 53.2582 258.352 53.8886 260.916 54.5406C263.525 55.1927 265.677 55.8666 267.373 56.5621C269.068 57.2577 270.524 58.3445 271.741 59.8226C273.002 61.2572 273.654 63.1699 273.698 65.561C273.698 67.6476 273.111 69.517 271.937 71.1687C270.807 72.821 269.155 74.1253 266.981 75.0816C264.851 75.9941 262.352 76.4507 259.482 76.4507ZM292.408 76.4507C289.451 76.4507 286.799 75.9294 284.452 74.886C282.105 73.7989 280.235 72.3429 278.844 70.5166C277.497 68.691 276.757 66.6695 276.627 64.4524H285.821C285.995 65.8435 286.669 66.9956 287.843 67.9084C289.06 68.8214 290.56 69.2778 292.342 69.2778C294.081 69.2778 295.429 68.93 296.385 68.2345C297.385 67.5389 297.885 66.6478 297.885 65.561C297.885 64.3872 297.276 63.5177 296.059 62.9526C294.885 62.344 292.994 61.6919 290.386 60.9963C287.691 60.3442 285.473 59.6704 283.735 58.9749C282.039 58.2793 280.561 57.2142 279.301 55.7796C278.083 54.345 277.475 52.4105 277.475 49.9761C277.475 47.9763 278.039 46.1504 279.17 44.4985C280.344 42.8465 281.996 41.5424 284.126 40.586C286.3 39.6296 288.843 39.1514 291.756 39.1514C296.059 39.1514 299.494 40.2382 302.058 42.4118C304.623 44.542 306.036 47.4329 306.297 51.0846H297.559C297.429 49.65 296.82 48.5197 295.733 47.6937C294.69 46.8243 293.277 46.3896 291.495 46.3896C289.843 46.3896 288.56 46.6939 287.647 47.3025C286.778 47.9111 286.343 48.7588 286.343 49.8456C286.343 51.0629 286.952 51.9975 288.169 52.6496C289.386 53.2582 291.277 53.8886 293.842 54.5406C296.451 55.1927 298.602 55.8666 300.298 56.5621C301.993 57.2577 303.45 58.3445 304.667 59.8226C305.927 61.2572 306.58 63.1699 306.623 65.561C306.623 67.6476 306.036 69.517 304.863 71.1687C303.732 72.821 302.08 74.1253 299.906 75.0816C297.777 75.9941 295.277 76.4507 292.408 76.4507ZM363.24 30.3482L347.851 60.0182V75.8639H338.722V60.0182L323.267 30.3482H333.57L343.351 51.1498L353.068 30.3482H363.24ZM399.479 57.0186C399.479 58.3228 399.393 59.4965 399.219 60.5399H372.809C373.026 63.1482 373.939 65.1914 375.548 66.6695C377.156 68.1476 379.134 68.8866 381.482 68.8866C384.873 68.8866 387.285 67.4303 388.719 64.5176H398.566C397.523 67.9954 395.524 70.8646 392.567 73.1252C389.611 75.3419 385.981 76.4507 381.677 76.4507C378.199 76.4507 375.07 75.6899 372.287 74.1685C369.548 72.6032 367.397 70.408 365.832 67.5824C364.31 64.7567 363.549 61.4963 363.549 57.8011C363.549 54.0625 364.31 50.7803 365.832 47.9545C367.353 45.1288 369.483 42.9552 372.222 41.4337C374.961 39.9122 378.112 39.1514 381.677 39.1514C385.111 39.1514 388.177 39.8904 390.871 41.3685C393.61 42.8465 395.719 44.955 397.197 47.6937C398.718 50.389 399.479 53.4973 399.479 57.0186ZM390.024 54.4102C389.981 52.0627 389.133 50.1934 387.481 48.8023C385.829 47.3677 383.807 46.6504 381.416 46.6504C379.156 46.6504 377.243 47.346 375.678 48.737C374.156 50.0847 373.222 51.9757 372.874 54.4102H390.024ZM417.358 76.4507C414.403 76.4507 411.751 75.9294 409.403 74.886C407.056 73.7989 405.186 72.3429 403.796 70.5166C402.447 68.691 401.708 66.6695 401.578 64.4524H410.773C410.946 65.8435 411.62 66.9956 412.794 67.9084C414.011 68.8214 415.511 69.2778 417.294 69.2778C419.032 69.2778 420.38 68.93 421.336 68.2345C422.336 67.5389 422.836 66.6478 422.836 65.561C422.836 64.3872 422.228 63.5177 421.01 62.9526C419.837 62.344 417.945 61.6919 415.337 60.9963C412.642 60.3442 410.425 59.6704 408.686 58.9749C406.99 58.2793 405.513 57.2142 404.251 55.7796C403.035 54.345 402.426 52.4105 402.426 49.9761C402.426 47.9763 402.991 46.1504 404.121 44.4985C405.295 42.8465 406.947 41.5424 409.077 40.586C411.251 39.6296 413.794 39.1514 416.706 39.1514C421.01 39.1514 424.444 40.2382 427.01 42.4118C429.575 44.542 430.988 47.4329 431.248 51.0846H422.51C422.379 49.65 421.771 48.5197 420.685 47.6937C419.641 46.8243 418.228 46.3896 416.446 46.3896C414.794 46.3896 413.512 46.6939 412.599 47.3025C411.729 47.9111 411.294 48.7588 411.294 49.8456C411.294 51.0629 411.903 51.9975 413.12 52.6496C414.337 53.2582 416.228 53.8886 418.793 54.5406C421.402 55.1927 423.554 55.8666 425.249 56.5621C426.944 57.2577 428.401 58.3445 429.618 59.8226C430.878 61.2572 431.53 63.1699 431.574 65.561C431.574 67.6476 430.988 69.517 429.813 71.1687C428.683 72.821 427.031 74.1253 424.858 75.0816C422.727 75.9941 420.228 76.4507 417.358 76.4507Z" fill="black"/>
								<path d="M315.279 42.3944C313.67 42.3944 312.323 41.8945 311.236 40.8946C310.193 39.8513 309.671 38.5688 309.671 37.0473C309.671 35.5258 310.193 34.2651 311.236 33.2652C312.323 32.2218 313.67 31.7002 315.279 31.7002C316.887 31.7002 318.213 32.2218 319.257 33.2652C320.344 34.2651 320.887 35.5258 320.887 37.0473C320.887 38.5688 320.344 39.8513 319.257 40.8946C318.213 41.8945 316.887 42.3944 315.279 42.3944ZM319.779 46.6982V75.8639H310.649V46.6982H319.779Z" fill="black"/>
								<path d="M63.9552 20.5745C65.8756 18.6985 68.9518 18.7294 70.834 20.6438L76.1159 26.0165C78.0035 27.936 77.9764 31.0222 76.0554 32.9083L40.3103 68.0109C39.5134 68.7934 38.2419 68.8103 37.4245 68.0493L12.4094 44.7593C10.351 42.843 10.3382 39.5868 12.3812 37.6542L18.0434 32.2982C19.9598 30.4853 22.9711 30.527 24.8364 32.3925L36.7304 44.2865C37.5391 45.0952 38.8479 45.1028 39.666 44.3036L63.9552 20.5745Z" fill="#1863DC"/>
								<path d="M15.1705 92.6348C13.5412 94.2669 10.8971 94.2697 9.26474 92.6404L2.95578 86.3436C1.32339 84.7143 1.32086 82.0702 2.95012 80.4374L24.7242 58.6218L36.9446 70.8187L15.1705 92.6348Z" fill="#1863DC"/>
								<path d="M64.1495 92.4518C65.8508 94.0158 68.4984 93.9002 70.0573 92.195L76.0784 85.6095C77.629 83.9133 77.5184 81.2824 75.8299 79.7234L50.7178 56.5339L40.9738 71.1501L64.1495 92.4518Z" fill="#1863DC"/>
								<path d="M39.5818 30.624C46.8852 30.624 52.8058 24.7034 52.8058 17.4C52.8058 10.0966 46.8852 4.17603 39.5818 4.17603C32.2784 4.17603 26.3578 10.0966 26.3578 17.4C26.3578 24.7034 32.2784 30.624 39.5818 30.624Z" fill="black"/>
							</svg>
							<h2 id="cya11y-modal-title"><?php esc_html_e( 'Before you deactivate, help us improve', 'accessibility-widget' ); ?></h2>
						</div>
						<button class="cya11y-modal-close" aria-label="<?php esc_attr_e( 'Close dialog', 'accessibility-widget' ); ?>">&times;</button>
					</div>
					<div class="cya11y-modal-body">
						<p class="cya11y-feedback-caption"><?php echo esc_html__( 'Your feedback helps us make AccessiYes better.', 'accessibility-widget' ); ?></p>
						
						<h3 id="cya11y-reasons-question" class="cya11y-feedback-question"><?php echo esc_html__( 'Why are you deactivating AccessiYes?', 'accessibility-widget' ); ?></h3>

						<ul class="cya11y-feedback-reasons-list" role="radiogroup" aria-labelledby="cya11y-reasons-question">
							<?php foreach ( $reasons as $reason ) : ?>
								<li>
									<div class="cya11y-feedback-form-group">
										<label class="cya11y-feedback-label">
											<input type="radio" name="selected-reason" value="<?php echo esc_attr( $reason['id'] ); ?>" class="cya11y-feedback-input-radio">
											<?php echo esc_html( $reason['text'] ); ?>
										</label>
										<div class="cya11y-feedback-dynamic-content" data-reason="<?php echo esc_attr( $reason['id'] ); ?>" style="display:none;">
											<?php
											// Render Fields (Textarea/Input)
											if ( ! empty( $reason['fields'] ) ) {
												foreach ( $reason['fields'] as $field ) {
													$field_type        = isset( $field['type'] ) ? $field['type'] : 'text';
													$field_placeholder = isset( $field['placeholder'] ) ? $field['placeholder'] : '';
													$field_name        = $reason['id'] . '-info'; // Simplified name

													// Label for accessibility (visually hidden or explicit)
													$label_text = isset( $field['label'] ) ? $field['label'] : $reason['text'];
													$label_class = isset( $field['label'] ) ? 'cya11y-feedback-input-label' : 'screen-reader-text';
													
													if ( 'textarea' === $field_type ) {
														echo '<label for="cya11y-reason-' . esc_attr($reason['id']) . '" class="' . esc_attr( $label_class ) . '">' . esc_html($label_text) . '</label>';
														echo '<textarea id="cya11y-reason-' . esc_attr($reason['id']) . '" rows="3" class="cya11y-feedback-input-field" name="reason_info" placeholder="' . esc_attr( $field_placeholder ) . '"></textarea>';
													} else {
														echo '<label for="cya11y-reason-' . esc_attr($reason['id']) . '" class="' . esc_attr( $label_class ) . '">' . esc_html($label_text) . '</label>';
														echo '<input type="text" id="cya11y-reason-' . esc_attr($reason['id']) . '" class="cya11y-feedback-input-field" name="reason_info" placeholder="' . esc_attr( $field_placeholder ) . '">';
													}
												}
											}

											// Render Banners based on Reason Data
											if ( ! empty( $reason['banner'] ) ) {
												?>
												<div class="cya11y-feedback-banner">
													<p>
														<?php echo esc_html( $reason['banner']['message'] ); ?>
														<a href="<?php echo esc_url( $reason['banner']['link_url'] ); ?>" target="_blank">
															<?php echo esc_html( $reason['banner']['link_text'] ); ?>
															<span class="dashicons dashicons-external"></span>
														</a>
													</p>
												</div>
												<?php
											}
											?>
										</div>
									</div>
								</li>
							<?php endforeach; ?>
						</ul>

						<div class="cya11y-uninstall-feedback-privacy">
							<?php 
								printf(
									/* translators: %s: Privacy Policy */
									esc_html__( 'We don’t collect personal data in this form. We only use your feedback to improve AccessiYes. %s', 'accessibility-widget' ),
									'<a href="https://www.cookieyes.com/privacy-policy/" target="_blank">' . esc_html__( 'Privacy Policy', 'accessibility-widget' ) . '</a>'
								);
							?>
						</div>
					</div>
					<div class="cya11y-modal-footer">
						<div class="cya11y-footer-left">
							<button class="button button-primary cya11y-modal-submit">
								<?php echo esc_html__( 'Submit & Deactivate', 'accessibility-widget' ); ?>
							</button>
							<a href="https://wordpress.org/support/plugin/accessibility-widget/#new-post" target="_blank" class="cya11y-goto-support">
								<span class="dashicons dashicons-external"></span>
								<?php echo esc_html__( 'Go to support', 'accessibility-widget' ); ?>
							</a>
						</div>
						<button class="button-link cya11y-modal-skip">
							<?php echo esc_html__( 'Skip & Deactivate', 'accessibility-widget' ); ?>
						</button>
					</div>
				</div>
			</div>

			<style type="text/css">
				.cya11y-modal {
					position: fixed;
					z-index: 99999;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background: rgba(0, 0, 0, 0.5);
					display: none;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
				}
				.cya11y-modal.modal-active {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.cya11y-modal-wrap {
					width: 550px;
					max-width: 90%;
					background: #fff;
					border-radius: 8px;
					box-shadow: 0 4px 10px rgba(0,0,0,0.1);
					overflow: hidden;
					display: flex;
					flex-direction: column;
				}
				.cya11y-modal-header {
					padding: 24px 30px 0 30px;
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
				}
				.cya11y-modal-header-text {
					display: flex;
					flex-direction: column;
					gap: 12px;
					flex: 1;
				}
				.cya11y-modal-logo {
					display: block;
					height: 28px;
					width: auto;
				}
				.cya11y-modal-close {
					background: none;
					border: none;
					cursor: pointer;
					font-size: 22px;
					line-height: 1;
					color: #787c82;
					padding: 0 0 0 12px;
					margin: -2px 0 0 0;
					flex-shrink: 0;
				}
				.cya11y-modal-close:hover {
					color: #1e1e1e;
				}
				.cya11y-modal-header h2 {
					margin: 0;
					font-size: 20px;
					font-weight: 600;
					color: #1e1e1e;
				}
				.cya11y-modal-body {
					padding: 10px 30px 20px 30px;
					font-size: 14px;
					color: #3c434a;
					overflow-y: auto;
					max-height: 70vh;
				}
				.cya11y-feedback-caption {
					margin: 0 0 20px 0;
					font-size: 14px;
					color: #646970;
				}
				.cya11y-feedback-question {
					margin: 0 0 15px 0;
					font-size: 14px;
					font-weight: 600;
					color: #1e1e1e;
				}
				.cya11y-feedback-reasons-list {
					margin: 0;
					padding: 0;
					list-style: none;
				}
				.cya11y-feedback-reasons-list li {
					margin-bottom: 12px;
				}
				.cya11y-feedback-label {
					display: flex;
					align-items: center;
					cursor: pointer;
					font-size: 14px;
					color: #3c434a;
				}
				.cya11y-feedback-input-radio {
					margin-right: 12px !important;
					margin-top: 0 !important;
				}
				.cya11y-feedback-dynamic-content {
					margin-left: 28px;
					margin-top: 10px;
					margin-bottom: 10px;
				}
				.cya11y-feedback-input-label {
					display: block;
					font-weight: 600;
					color: #3c434a;
					margin-bottom: 4px;
					font-size: 13px;
				}
				.cya11y-feedback-input-field {
					width: 100%;
					padding: 8px 12px;
					border: 1px solid #c3c4c7;
					border-radius: 4px;
					font-size: 13px;
					margin-bottom: 8px;
				}
				.cya11y-feedback-banner {
					background-color: #f0f6fc;
					border-left: 4px solid #72aee6;
					padding: 12px;
					margin-top: 5px;
					border-radius: 0 4px 4px 0;
				}
				.cya11y-feedback-banner p {
					margin: 0;
					font-size: 13px;
					line-height: 1.5;
				}
				.cya11y-feedback-banner a {
					display: block;
					margin-top: 6px;
					font-weight: 500;
					text-decoration: none;
				}
				.cya11y-feedback-banner a .dashicons {
					font-size: 14px;
					line-height: 1.5;
					margin-left: 2px;
				}
				.cya11y-error-message {
					color: #d63638;
					font-size: 13px;
					margin-top: 10px;
				}
				.cya11y-uninstall-feedback-privacy {
					margin-top: 25px;
					font-size: 12px;
					color: #8c8f94;
				}
				.cya11y-uninstall-feedback-privacy a {
					color: #2271b1;
					text-decoration: none;
				}
				.cya11y-modal-footer {
					padding: 16px 30px;
					background: #fff;
					border-top: 1px solid #f0f0f1;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.cya11y-footer-left {
					display: flex;
					gap: 12px;
					align-items: center;
				}
				.cya11y-modal-skip {
					color: #2271b1;
					text-decoration: none;
					font-size: 13px;
					padding: 0;
					background: none;
					border: none;
					cursor: pointer;
					opacity: 0.6;
				}
				.cya11y-goto-support {
					font-size: 13px;
					color: #2271b1;
					text-decoration: none;
					display: flex;
					align-items: center;
					gap: 4px;
				}
				.cya11y-goto-support .dashicons {
					font-size: 14px;
					line-height: 1.5;
				}
				.cya11y-modal-submit {
					background-color: #2271b1;
					border-color: #2271b1;
					color: #fff;
				}
				.screen-reader-text {
					border: 0;
					clip: rect(1px, 1px, 1px, 1px);
					-webkit-clip-path: inset(50%);
					clip-path: inset(50%);
					height: 1px;
					margin: -1px;
					overflow: hidden;
					padding: 0;
					position: absolute;
					width: 1px;
					word-wrap: normal !important;
				}
			</style>
			<script type="text/javascript">
			(function($){
				$(function(){
					const modal = $('#cya11y-uninstall-modal');
					let deactivateLink = '';
					const nonce = '<?php echo esc_js( $nonce ); ?>';
					const firstFocusableElement = modal.find('h2'); // Initial focus on title or close button if present (removed close button for redesign, title is good for context)
					
					// Focus Trap Logic
					const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
					
					function trapFocus(e) {
						const focusableElements = modal.find(focusableElementsString);
						const firstTab = focusableElements.first();
						const lastTab = focusableElements.last();

						if (e.keyCode === 9) { // Tab key
							if (e.shiftKey) { // Shift + Tab
								if (document.activeElement === firstTab[0]) {
									e.preventDefault();
									lastTab.focus();
								}
							} else { // Tab
								if (document.activeElement === lastTab[0]) {
									e.preventDefault();
									firstTab.focus();
								}
							}
						}
					}

					// Open Modal
					$('#the-list').on('click', 'a[href*="action=deactivate"][href*="accessibility-widget"]', function(e){
						e.preventDefault();
						deactivateLink = $(this).attr('href');
						
						// Reset form
						modal.find('input[type="radio"]').prop('checked', false);
						modal.find('.cya11y-feedback-dynamic-content').hide();
						modal.find('.cya11y-feedback-input-field').val('');
						$('#cya11y-feedback-error').hide();

						modal.addClass('modal-active').attr('aria-hidden', 'false');
						modal.on('keydown', trapFocus);
						// Focus on the close button so no radio button gets highlighted by default
						modal.find('.cya11y-modal-close').focus(); 
					});

					// Close Modal Logic (Close button, Escape)
					function closeModal() {
						modal.removeClass('modal-active').attr('aria-hidden', 'true');
						modal.off('keydown', trapFocus);
					}

					modal.on('click', '.cya11y-modal-close', function(e) {
						e.preventDefault();
						closeModal();
					});

					// Skip Feedback -> Just Deactivate
					modal.on('click', '.cya11y-modal-skip', function(e) {
						e.preventDefault();
						window.location.href = deactivateLink;
					});

					// Close on Escape key
					$(document).on('keydown', function(e) {
						if (e.keyCode === 27 && modal.hasClass('modal-active')) { // Escape key
							closeModal();
						}
					});

					// Handle Radio Selection
					modal.on('change', 'input[type="radio"]', function(){
						const selectedReason = $(this).val();
						
						// Hide other dynamic content
						const $allContent = modal.find('.cya11y-feedback-dynamic-content');
						const $targetContent = $allContent.filter(`[data-reason="${selectedReason}"]`);
						const $otherContent = $allContent.not($targetContent);

						$otherContent.slideUp();
						$otherContent.find('.cya11y-feedback-input-field').prop('disabled', true); // Disable hidden inputs

						// Show content for selected reason
						if ($targetContent.length) {
							$targetContent.slideDown();
							$targetContent.find('.cya11y-feedback-input-field').prop('disabled', false).focus();
						}
						
						$('#cya11y-feedback-error').hide();
					});

					// Submit Feedback
					modal.on('click', 'button.cya11y-modal-submit', function(e){
						e.preventDefault();
						const button = $(this);
						if (button.hasClass('disabled')) { return; }

						const $radio = $('input[type="radio"]:checked', modal);
						const reason_id = $radio.length ? $radio.val() : 'none';

						let reason_info = '';
						if ($radio.length) {
							const $visibleContent = modal.find(`.cya11y-feedback-dynamic-content[data-reason="${reason_id}"]`);
							if ($visibleContent.length) {
								reason_info = $visibleContent.find('.cya11y-feedback-input-field').val();
							}
						}

						$.ajax({
							url: ajaxurl,
							type: 'POST',
							data: {
								action: 'cya11y_submit_uninstall_reason',
								reason_id: reason_id,
								reason_info: reason_info ? reason_info.trim() : '',
								nonce: nonce
							},
							beforeSend: function(){ button.addClass('disabled').text('Processing...'); },
							complete: function(){ window.location.href = deactivateLink; }
						});
					});
				});
			})(jQuery);
			</script>
			<?php
	}

	/**
	 * AJAX: Send uninstall reason to server
	 */
	public function send_uninstall_reason() {

		// Security check: Verify this is a valid AJAX request
		if ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) {
			wp_send_json_error( array( 'message' => __( 'Invalid request.', 'accessibility-widget' ) ) );
		}

		// Security check: Verify nonce
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'cya11y_uninstall_feedback_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Security check failed.', 'accessibility-widget' ) ) );
			wp_die();
		}

		// Security check: Verify user capability (only administrators can deactivate plugins)
		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json_error( array( 'message' => __( 'Permission denied.', 'accessibility-widget' ) ) );
			wp_die();
		}

		global $wpdb;
		if ( ! isset( $_POST['reason_id'] ) ) {
			wp_send_json_error( array( 'message' => __( 'Missing required data.', 'accessibility-widget' ) ) );
			wp_die();
		}
		
		# User requested data structure
		$data = wp_json_encode( array(
			'reason_id'      => sanitize_text_field( wp_unslash( $_POST['reason_id'] ) ),
			'date'           => gmdate( 'M d, Y h:i:s A' ),
			'url'            => home_url(),
			'user_email'     => isset( $_POST['user_email'] ) ? sanitize_email( wp_unslash( $_POST['user_email'] ) ) : '',
			'reason_info'    => isset( $_POST['reason_info'] ) ? sanitize_textarea_field( wp_unslash( $_POST['reason_info'] ) ) : '',
			'software'       => isset( $_SERVER['SERVER_SOFTWARE'] ) ? sanitize_text_field( wp_unslash( $_SERVER['SERVER_SOFTWARE'] ) ) : '',
			'php_version'    => phpversion(),
			'mysql_version'  => $wpdb->db_version(),
			'wp_version'     => get_bloginfo( 'version' ),
			'wc_version'     => ( function_exists( 'WC' ) ) ? WC()->version : '',
			'locale'         => get_locale(),
			'languages'      => implode( ',', get_available_languages() ),
			'theme'          => wp_get_theme()->get( 'Name' ),
			'plugin_version' => defined( 'CY_A11Y_VERSION' ) ? CY_A11Y_VERSION : '',
			'is_multisite'   => is_multisite() ? true: false,
		));

		// Send feedback to remote endpoint (non-blocking) - Placeholder URL
		wp_remote_post(
			'https://feedback.cookieyes.com/api/v1/accessiyes-feedbacks',
			array(
				'headers'     => array( 'Content-Type' => 'application/json; charset=utf-8' ),
				'method'      => 'POST',
				'timeout'     => 45,
				'redirection' => 5,
				'httpversion' => '1.0',
				'blocking'    => false,
				'body'        => $data,
				'cookies'     => array(),
			)
		);

		wp_send_json_success();
	}
}

new Uninstall_Feedback();
