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
 * Is the current request a service subpage under /book/?
 *
 * The /book/ service pages are children of the page with slug `book`. Their page IDs
 * live in the SQLite database and are not portable, so this checks the ancestor slug
 * instead. The /book/ main page carries no form, so it returns false.
 *
 * @return bool True on a /book/{service} subpage.
 */
function hlc_is_booking_subpage() {
	if ( ! is_page() ) {
		return false;
	}
	$post = get_queried_object();
	if ( ! $post instanceof WP_Post ) {
		return false;
	}
	foreach ( get_post_ancestors( $post ) as $ancestor_id ) {
		if ( 'book' === get_post_field( 'post_name', $ancestor_id ) ) {
			return true;
		}
	}
	return false;
}

/**
 * Justin's Calendly scheduling URL.
 *
 * Set the real link here, or through the `hlc_calendly_url` filter. This is the only
 * value the booking flow cannot derive on its own.
 *
 * @return string The Calendly scheduling URL.
 */
function hlc_calendly_url() {
	return apply_filters( 'hlc_calendly_url', 'https://calendly.com/justin-hedemarklaw/wordpress-integration-book-consultation' );
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

	// Calendly inline embed assets, only on the /book/ service subpages.
	if ( hlc_is_booking_subpage() ) {
		wp_enqueue_style(
			'calendly-widget',
			'https://assets.calendly.com/assets/external/widget.css',
			array(),
			null
		);
		wp_enqueue_script(
			'calendly-widget',
			'https://assets.calendly.com/assets/external/widget.js',
			array(),
			null,
			true
		);
	}
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

/**
 * Replace the Stage 1 intake confirmation with the Calendly calendar.
 *
 * After a Stage 1 form submits (Estate Planning 7, Probate 6, Trust Administration 5),
 * show the Calendly inline calendar in place of the form. The visitor's name and email
 * pass to Calendly as query parameters, so Calendly prefills them.
 *
 * Return a string. A string forces a text confirmation, so it replaces any redirect or
 * default text stored in the form settings.
 *
 * @param string|array $confirmation The current confirmation.
 * @param array        $form         The current form.
 * @param array        $entry        The submitted entry.
 * @param bool         $ajax         True when the form submits by AJAX.
 * @return string|array The confirmation.
 */
add_filter( 'gform_confirmation', function ( $confirmation, $form, $entry, $ajax ) {
	$booking_forms = array( 5, 6, 7 );
	if ( ! in_array( (int) rgar( $form, 'id' ), $booking_forms, true ) ) {
		return $confirmation;
	}

	// Read the visitor's name and email by field type, not by a hardcoded field id.
	$name  = '';
	$email = '';
	foreach ( $form['fields'] as $field ) {
		if ( 'name' === $field->type && '' === $name ) {
			$first = trim( (string) rgar( $entry, $field->id . '.3' ) );
			$last  = trim( (string) rgar( $entry, $field->id . '.6' ) );
			$name  = trim( $first . ' ' . $last );
		}
		if ( 'email' === $field->type && '' === $email ) {
			$email = trim( (string) rgar( $entry, (string) $field->id ) );
		}
	}

	// Calendly reads `name` and `email` query parameters and prefills the booking form.
	$url = add_query_arg(
		array_filter(
			array(
				'name'  => $name,
				'email' => $email,
			)
		),
		hlc_calendly_url()
	);

	$html  = '<div class="hlc-booking-confirm">';
	$html .= '<p class="hlc-booking-confirm__lead">Thank you. Now pick a time with Justin.</p>';
	$html .= '<div class="calendly-inline-widget" data-hlc-calendly="1" data-url="' . esc_url( $url ) . '" style="min-width:320px;height:700px;"></div>';
	$html .= '</div>';

	return $html;
}, 10, 4 );

/**
 * Start the Calendly widget when its container enters the page.
 *
 * With AJAX on, Gravity Forms injects the confirmation after page load. Calendly's
 * widget.js auto-starts a container only at its own load time, so an injected container
 * needs a manual start. This build of Gravity Forms does not fire a usable JavaScript
 * event on the AJAX confirmation, so do not depend on one. Watch the DOM with a
 * MutationObserver instead, and start each `.calendly-inline-widget[data-hlc-calendly]`
 * container as soon as it appears.
 *
 * On the no-JavaScript path, Gravity Forms renders the confirmation as a full page and
 * widget.js auto-starts the container from its `data-url`. The `iframe` guard below then
 * skips it, so the widget never starts twice.
 */
add_action( 'wp_footer', function () {
	if ( ! hlc_is_booking_subpage() ) {
		return;
	}
	?>
	<script>
		( function () {
			function startOne( el ) {
				if ( el.dataset.hlcStarted ) { return; }
				// widget.js already started this one (non-AJAX path); leave it be.
				if ( el.querySelector( 'iframe' ) ) { el.dataset.hlcStarted = '1'; return; }
				if ( ! el.dataset.url ) { return; }
				el.dataset.hlcStarted = '1';
				window.Calendly.initInlineWidget( { url: el.dataset.url, parentElement: el } );
			}
			function scan() {
				var pending = document.querySelectorAll(
					'.calendly-inline-widget[data-hlc-calendly]:not([data-hlc-started])'
				);
				if ( ! pending.length ) { return; }
				// widget.js may not be ready yet; retry shortly.
				if ( ! window.Calendly ) { window.setTimeout( scan, 200 ); return; }
				pending.forEach( startOne );
			}
			// Watch for the confirmation being injected (AJAX path).
			new MutationObserver( scan ).observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
			// Full-page path (no AJAX, or a container already in the initial HTML).
			if ( 'loading' !== document.readyState ) { scan(); }
			else { document.addEventListener( 'DOMContentLoaded', scan ); }
		} )();
	</script>
	<?php
}, 99 );
