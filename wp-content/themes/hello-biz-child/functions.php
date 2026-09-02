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

/**
 * Reject a "target completion date" earlier than today.
 *
 * Gravity Forms does not validate a date against the current date on its own. The
 * Stage 1 intake forms (Estate Planning id 7, Trust Administration id 5) ask for a
 * target completion date, which must be today or later.
 *
 * @param array    $result The validation result (is_valid, message).
 * @param mixed    $value  The submitted field value.
 * @param array    $form   The current form.
 * @param GF_Field $field  The current field.
 * @return array The validation result.
 */
add_filter( 'gform_field_validation', function ( $result, $value, $form, $field ) {
	if ( 'date' !== $field->type ) {
		return $result;
	}
	if ( false === stripos( (string) $field->label, 'target completion date' ) ) {
		return $result;
	}
	$raw = is_array( $value ) ? implode( '/', array_filter( $value ) ) : (string) $value;
	if ( '' === trim( $raw ) ) {
		return $result; // Empty values are handled by the required check.
	}
	$ts = strtotime( $raw );
	if ( false !== $ts && $ts < strtotime( 'today' ) ) {
		$result['is_valid'] = false;
		$result['message']  = 'Please choose a date that is today or later.';
	}
	return $result;
}, 10, 4 );

/**
 * Make past dates non-selectable on the intake date fields (forms 5 and 7).
 *
 * This Gravity Forms build ships the new accessible date picker (not jQuery UI), so the
 * old `gform_datepicker_options_pre_config` minDate filter has no effect. Instead, swap
 * the text date field for a native HTML5 date input with `min` set to today — the browser
 * then blocks earlier dates. The native input stays a UI proxy; it writes the chosen date
 * back into the original Gravity Forms input in `mm/dd/yyyy` format, so the stored value
 * and Gravity Forms' own validation are unchanged. The server-side check above is still
 * the authoritative guard.
 */
add_action( 'wp_footer', function () {
	if ( ! class_exists( 'GFForms' ) ) {
		return;
	}
	?>
	<script>
		( function () {
			function pad( n ) { return ( n < 10 ? '0' : '' ) + n; }
			function todayIso() {
				var d = new Date();
				return d.getFullYear() + '-' + pad( d.getMonth() + 1 ) + '-' + pad( d.getDate() );
			}
			function setNative( el, value ) {
				var setter = Object.getOwnPropertyDescriptor( window.HTMLInputElement.prototype, 'value' ).set;
				setter.call( el, value );
				el.dispatchEvent( new Event( 'input', { bubbles: true } ) );
				el.dispatchEvent( new Event( 'change', { bubbles: true } ) );
			}
			function enhance( root ) {
				var forms = ( root || document ).querySelectorAll( 'form[id="gform_5"], form[id="gform_7"]' );
				forms.forEach( function ( form ) {
					form.querySelectorAll( 'input.gform-datepicker' ).forEach( function ( orig ) {
						if ( orig.dataset.nativeDone ) { return; }
						orig.dataset.nativeDone = '1';
						var native = document.createElement( 'input' );
						native.type = 'date';
						native.min = todayIso();
						native.className = 'gfield_date_native ' + orig.className.replace( /gform-datepicker|datepicker[^ ]*|mdy/g, '' ).trim();
						native.setAttribute( 'aria-label', orig.getAttribute( 'aria-label' ) || 'Date' );
						if ( orig.getAttribute( 'aria-required' ) ) { native.setAttribute( 'aria-required', orig.getAttribute( 'aria-required' ) ); }
						// Carry an existing mm/dd/yyyy value across (e.g. after a validation reload).
						if ( orig.value ) {
							var p = orig.value.split( '/' );
							if ( 3 === p.length ) { native.value = p[2] + '-' + p[0] + '-' + p[1]; }
						}
						orig.style.display = 'none';
						var toggle = document.getElementById( 'datepicker_toggle_' + orig.id );
						if ( toggle ) { toggle.style.display = 'none'; }
						orig.parentNode.insertBefore( native, orig );
						native.addEventListener( 'change', function () {
							if ( ! native.value ) { setNative( orig, '' ); return; }
							var q = native.value.split( '-' ); // yyyy-mm-dd
							setNative( orig, q[1] + '/' + q[2] + '/' + q[0] );
						} );
					} );
				} );
			}
			if ( window.jQuery ) {
				jQuery( document ).on( 'gform_post_render', function () { enhance( document ); } );
			}
			if ( document.readyState !== 'loading' ) { enhance( document ); }
			else { document.addEventListener( 'DOMContentLoaded', function () { enhance( document ); } ); }
		} )();
	</script>
	<?php
}, 99 );
