/**
 * Hedemark Law — interface behaviour shared by every page.
 *
 * Every part is progressive: the page reads and works without this file. Each block
 * looks for its own markup and does nothing when it is not on the page.
 *
 *  1. Header: mobile menu button and the "Firm" disclosure menu.
 *  2. Section entrance: parts of each section rise in once as they enter the screen.
 *  3. Gravity Forms: "Submitting…" label beside the spinner, focus on the error summary.
 *  4. Essential Addons "Load more articles": busy state, focus on the first new post.
 * 4b. Blog search: "Searching…" busy state on the search button.
 *  5. Testimonials: previous / next / pause controls, no autoplay under reduced motion.
 *  6. Probate fee calculator: thousands separators while typing, live result.
 *  7. Calendly inline calendar: placeholder until the calendar loads, link fallback.
 *
 * Built in docs/plans/20261111-ui-ux-restyle.md.
 */
( function () {
	'use strict';

	var reduceMotion = window.matchMedia && window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
	var mobileNav = window.matchMedia ? window.matchMedia( '(max-width: 1024px)' ) : { matches: false };

	function ready( fn ) {
		if ( 'loading' !== document.readyState ) { fn(); } else { document.addEventListener( 'DOMContentLoaded', fn ); }
	}

	/* ------------------------------------------------------------------
	   1. Header
	   ------------------------------------------------------------------ */
	function initHeader() {
		// The skip link points at #content. Elementor page templates have no such id,
		// so give it to the main content block.
		if ( ! document.getElementById( 'content' ) ) {
			var main = document.querySelector( 'main, [data-elementor-type="wp-page"], .elementor, .hp-single' );
			if ( main ) { main.id = 'content'; }
		}
		var target = document.getElementById( 'content' );
		if ( target && ! target.hasAttribute( 'tabindex' ) ) { target.setAttribute( 'tabindex', '-1' ); }

		var header = document.querySelector( '.hp-header' );
		if ( ! header ) { return; }
		header.classList.add( 'is-js' );

		var burger = header.querySelector( '.hp-burger' );
		var nav = header.querySelector( '.hp-nav' );
		function setMenu( open ) {
			if ( ! burger || ! nav ) { return; }
			burger.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
			burger.setAttribute( 'aria-label', open ? 'Close menu' : 'Open menu' );
			header.classList.toggle( 'is-open', open );
			document.documentElement.classList.toggle( 'hp-noscroll', open );
		}
		if ( burger && nav ) {
			burger.addEventListener( 'click', function () {
				setMenu( 'true' !== burger.getAttribute( 'aria-expanded' ) );
			} );
			document.addEventListener( 'click', function ( e ) {
				if ( header.classList.contains( 'is-open' ) && ! header.contains( e.target ) ) { setMenu( false ); }
			} );
			mobileNav.addEventListener && mobileNav.addEventListener( 'change', function () { setMenu( false ); } );
		}

		var item = header.querySelector( '.hp-has-submenu' );
		var toggle = item && item.querySelector( '.hp-nav__toplink' );
		function setSub( open ) {
			if ( ! item || ! toggle ) { return; }
			item.classList.toggle( 'is-open', open );
			toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		}
		if ( item && toggle ) {
			// On the phone menu the group is always shown expanded.
			function syncMobile() {
				if ( mobileNav.matches ) { toggle.setAttribute( 'aria-expanded', 'true' ); } else { setSub( false ); }
			}
			syncMobile();
			mobileNav.addEventListener && mobileNav.addEventListener( 'change', syncMobile );
			// Hover opens the menu just before a mouse click arrives, so a click within
			// a short time of a hover-open keeps it open instead of closing it again.
			var hoverOpenedAt = 0;
			toggle.addEventListener( 'click', function () {
				if ( mobileNav.matches ) { return; }
				if ( Date.now() - hoverOpenedAt < 600 ) { setSub( true ); return; }
				setSub( ! item.classList.contains( 'is-open' ) );
			} );
			item.addEventListener( 'mouseenter', function () {
				if ( mobileNav.matches ) { return; }
				if ( ! item.classList.contains( 'is-open' ) ) { hoverOpenedAt = Date.now(); }
				setSub( true );
			} );
			item.addEventListener( 'mouseleave', function () { if ( ! mobileNav.matches ) { setSub( false ); } } );
			item.addEventListener( 'focusout', function ( e ) {
				if ( ! mobileNav.matches && ! item.contains( e.relatedTarget ) ) { setSub( false ); }
			} );
		}

		document.addEventListener( 'keydown', function ( e ) {
			if ( 'Escape' !== e.key ) { return; }
			if ( item && item.classList.contains( 'is-open' ) ) { setSub( false ); toggle.focus(); return; }
			if ( header.classList.contains( 'is-open' ) ) { setMenu( false ); burger.focus(); }
		} );
	}

	/* ------------------------------------------------------------------
	   2. Section entrance
	   ------------------------------------------------------------------ */
	function initReveal() {
		if ( reduceMotion || ! ( 'IntersectionObserver' in window ) ) { return; }
		var selector = [
			'.elementor-widget-heading',
			'.elementor-widget-text-editor',
			'.elementor-widget-image',
			'.elementor-widget-button',
			'.elementor-widget-shortcode',
			'.elementor-widget-html',
			'.hp-card',
			'.hp-article__inner > *',
			'.hp-prose__inner > *'
		].join( ',' );
		var parts = Array.prototype.slice.call( document.querySelectorAll( selector ) ).filter( function ( el ) {
			// Nothing inside the first screen moves: it is already there when the page opens.
			return el.getBoundingClientRect().top > window.innerHeight * 0.9 && ! el.closest( '.hp-header, .hp-footer' );
		} );
		if ( ! parts.length ) { return; }
		document.documentElement.classList.add( 'hp-reveal-on' );
		var io = new IntersectionObserver( function ( entries ) {
			// Stagger the parts that enter together, in reading order.
			var shown = entries.filter( function ( e ) { return e.isIntersecting; } );
			shown.forEach( function ( entry, i ) {
				entry.target.style.transitionDelay = Math.min( i * 75, 300 ) + 'ms';
				entry.target.classList.add( 'is-in' );
				io.unobserve( entry.target );
			} );
		}, { rootMargin: '0px 0px -8% 0px' } );
		parts.forEach( function ( el ) { el.classList.add( 'hp-reveal' ); io.observe( el ); } );
	}

	/* ------------------------------------------------------------------
	   3. Gravity Forms
	   ------------------------------------------------------------------ */
	function busy( btn, label ) {
		if ( ! btn || btn.dataset.hpBusy ) { return; }
		btn.dataset.hpBusy = '1';
		btn.dataset.hpLabel = 'INPUT' === btn.tagName ? btn.value : btn.innerHTML;
		btn.setAttribute( 'aria-busy', 'true' );
		btn.setAttribute( 'aria-disabled', 'true' );
		btn.classList.add( 'is-busy' );
		if ( 'INPUT' === btn.tagName ) { btn.value = label; } else { btn.textContent = label; }
	}
	function unbusy( btn ) {
		if ( ! btn || ! btn.dataset.hpBusy ) { return; }
		if ( 'INPUT' === btn.tagName ) { btn.value = btn.dataset.hpLabel; } else { btn.innerHTML = btn.dataset.hpLabel; }
		delete btn.dataset.hpBusy;
		btn.removeAttribute( 'aria-busy' );
		btn.removeAttribute( 'aria-disabled' );
		btn.classList.remove( 'is-busy' );
	}
	var SUBMIT_LABEL = 'Submitting…';

	// Gravity Forms 2.9 (Orbital theme) submits through its own script and, while the
	// request runs, adds `gform-has-spinner` to the button and a `.gform-loader` span
	// inside it. CSS puts that loader before the text; this changes the text label.
	// Only the text node changes, so the loader span stays in place.
	function labelNode( btn ) {
		for ( var i = 0; i < btn.childNodes.length; i++ ) {
			var n = btn.childNodes[ i ];
			if ( 3 === n.nodeType && n.nodeValue.trim() ) { return n; }
		}
		return null;
	}
	function setSubmitting( btn, on ) {
		if ( 'INPUT' === btn.tagName ) {
			if ( on && ! btn.dataset.hpLabel ) { btn.dataset.hpLabel = btn.value; btn.value = SUBMIT_LABEL; }
			if ( ! on && btn.dataset.hpLabel ) { btn.value = btn.dataset.hpLabel; delete btn.dataset.hpLabel; }
			return;
		}
		var node = labelNode( btn );
		if ( ! node ) { return; }
		if ( on && ! btn.dataset.hpLabel ) { btn.dataset.hpLabel = node.nodeValue; node.nodeValue = SUBMIT_LABEL; }
		if ( ! on && btn.dataset.hpLabel ) { node.nodeValue = btn.dataset.hpLabel; delete btn.dataset.hpLabel; }
	}
	function initForms() {
		if ( ! document.querySelector( '.gform_wrapper' ) ) { return; }

		// Watch every Gravity Forms submit button for the spinner class.
		new MutationObserver( function ( records ) {
			records.forEach( function ( r ) {
				var btn = r.target;
				if ( ! btn.classList || ! btn.classList.contains( 'gform_button' ) ) { return; }
				setSubmitting( btn, btn.classList.contains( 'gform-has-spinner' ) );
			} );
		} ).observe( document.body, { attributes: true, attributeFilter: [ 'class' ], subtree: true } );

		// Fallback for a form that submits without the Gravity Forms spinner: show our
		// own busy state (ring spinner + label).
		document.addEventListener( 'submit', function ( e ) {
			var form = e.target;
			if ( ! form.id || 0 !== form.id.indexOf( 'gform_' ) ) { return; }
			var btn = form.querySelector( '.gform_footer [type="submit"], .gform_page_footer [type="submit"]' );
			// Give Gravity Forms one frame to add its own spinner first.
			window.setTimeout( function () {
				if ( btn && ! btn.classList.contains( 'gform-has-spinner' ) ) { busy( btn, SUBMIT_LABEL ); }
			}, 0 );
		}, true );

		function afterRender() {
			document.querySelectorAll( '.gform_wrapper [aria-busy="true"]' ).forEach( unbusy );
			var summary = document.querySelector( '.gform_validation_errors' );
			if ( summary ) {
				summary.setAttribute( 'tabindex', '-1' );
				summary.focus( { preventScroll: true } );
				summary.scrollIntoView( { behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' } );
			}
		}
		if ( window.jQuery ) { window.jQuery( document ).on( 'gform_post_render', afterRender ); }
	}

	/* ------------------------------------------------------------------
	   4. Load more articles
	   ------------------------------------------------------------------ */
	function initLoadMore() {
		var btn = document.querySelector( '.hp-bloglist .eael-load-more-button' );
		if ( ! btn ) { return; }
		var grid = document.querySelector( '.hp-bloglist .eael-post-grid' );
		// Essential Addons changes its own label to "Loading..." and back; this adds
		// the busy state, the spinner, and moves focus to the first new post.
		function idle() {
			btn.classList.remove( 'is-busy' );
			btn.removeAttribute( 'aria-busy' );
		}
		btn.addEventListener( 'click', function () {
			if ( ! grid ) { return; }
			var before = grid.querySelectorAll( '.eael-grid-post' ).length;
			btn.classList.add( 'is-busy' );
			btn.setAttribute( 'aria-busy', 'true' );
			var mo = new MutationObserver( function () {
				var posts = grid.querySelectorAll( '.eael-grid-post' );
				if ( posts.length <= before ) { return; }
				mo.disconnect();
				idle();
				var link = posts[ before ].querySelector( '.eael-entry-title a' );
				if ( link ) { link.focus(); }
			} );
			mo.observe( grid, { childList: true, subtree: true } );
			// The widget hides the button when no posts are left; clear the state anyway.
			window.setTimeout( function () { mo.disconnect(); idle(); }, 15000 );
		} );
	}

	/* ------------------------------------------------------------------
	   4b. Blog search ([hlc_blog_search] on /blog)
	   ------------------------------------------------------------------ */
	function initBlogSearch() {
		var form = document.querySelector( '.hp-blogsearch__form' );
		if ( ! form ) { return; }
		var btn = form.querySelector( '.hp-blogsearch__btn' );
		// The search is a full page load. Show the busy state until the new page
		// replaces this one, and block a second submit in the meantime.
		form.addEventListener( 'submit', function ( e ) {
			if ( btn && btn.dataset.hpBusy ) { e.preventDefault(); return; }
			// Give the browser one frame to start the submit before the label changes.
			window.setTimeout( function () { busy( btn, 'Searching…' ); }, 0 );
		} );
		// Back / forward cache: the page comes back as it was left, still busy.
		window.addEventListener( 'pageshow', function ( e ) {
			if ( e.persisted ) { unbusy( btn ); }
		} );
	}

	/* ------------------------------------------------------------------
	   5. Testimonials
	   ------------------------------------------------------------------ */
	function initTestimonials() {
		var root = document.querySelector( '.hp-testi' );
		if ( ! root || root.dataset.hpInit ) { return; }
		root.dataset.hpInit = '1';
		var slides = root.querySelectorAll( '.hp-testi__slide' );
		var dots = root.querySelector( '.hp-testi__dots' );
		var prev = root.querySelector( '.hp-testi__prev' );
		var next = root.querySelector( '.hp-testi__next' );
		var pause = root.querySelector( '.hp-testi__pause' );
		var live = root.querySelector( '.hp-testi__track' );
		if ( ! slides.length ) { return; }
		var i = 0;
		var timer = null;
		var stopped = reduceMotion;
		var hovering = false;

		slides.forEach( function ( s, j ) {
			s.setAttribute( 'role', 'group' );
			s.setAttribute( 'aria-roledescription', 'slide' );
			s.setAttribute( 'aria-label', ( j + 1 ) + ' of ' + slides.length );
			if ( ! dots ) { return; }
			var b = document.createElement( 'button' );
			b.type = 'button';
			b.className = 'hp-testi__dot';
			b.setAttribute( 'aria-label', 'Show testimonial ' + ( j + 1 ) + ' of ' + slides.length );
			b.addEventListener( 'click', function () { show( j ); } );
			dots.appendChild( b );
		} );

		function show( n ) {
			i = ( n + slides.length ) % slides.length;
			slides.forEach( function ( s, j ) { s.hidden = j !== i; } );
			if ( dots ) {
				dots.querySelectorAll( '.hp-testi__dot' ).forEach( function ( d, j ) {
					d.classList.toggle( 'is-active', j === i );
					if ( j === i ) { d.setAttribute( 'aria-current', 'true' ); } else { d.removeAttribute( 'aria-current' ); }
				} );
			}
		}
		function schedule() {
			window.clearInterval( timer );
			if ( stopped || hovering ) { return; }
			timer = window.setInterval( function () { show( i + 1 ); }, 8000 );
		}
		function setStopped( value ) {
			stopped = value;
			if ( live ) { live.setAttribute( 'aria-live', stopped ? 'polite' : 'off' ); }
			if ( pause ) {
				pause.setAttribute( 'aria-pressed', stopped ? 'true' : 'false' );
				pause.textContent = stopped ? 'Play' : 'Pause';
			}
			schedule();
		}
		prev && prev.addEventListener( 'click', function () { show( i - 1 ); setStopped( true ); } );
		next && next.addEventListener( 'click', function () { show( i + 1 ); setStopped( true ); } );
		pause && pause.addEventListener( 'click', function () { setStopped( ! stopped ); } );
		root.addEventListener( 'mouseenter', function () { hovering = true; schedule(); } );
		root.addEventListener( 'mouseleave', function () { hovering = false; schedule(); } );
		root.addEventListener( 'focusin', function () { hovering = true; schedule(); } );
		root.addEventListener( 'focusout', function ( e ) { if ( ! root.contains( e.relatedTarget ) ) { hovering = false; schedule(); } } );
		show( 0 );
		setStopped( stopped );
	}

	/* ------------------------------------------------------------------
	   6. Probate fee calculator
	   ------------------------------------------------------------------ */
	function initCalculator() {
		var input = document.getElementById( 'hp-estate-value' );
		if ( ! input || input.dataset.hpInit ) { return; }
		input.dataset.hpInit = '1';
		var results = document.getElementById( 'hp-calc-results' );
		var over = document.getElementById( 'hp-calc-over' );
		var error = document.getElementById( 'hp-calc-error' );
		var att = document.getElementById( 'hp-calc-att' );
		var exec = document.getElementById( 'hp-calc-exec' );
		var total = document.getElementById( 'hp-calc-total' );
		// Probate Code §10810: 4% of the first $100k, 3% of the next $100k, 2% of the
		// next $800k, 1% of the next $9M, 0.5% of the next $15M.
		var brackets = [ [ 100000, 0.04 ], [ 100000, 0.03 ], [ 800000, 0.02 ], [ 9000000, 0.01 ], [ 15000000, 0.005 ] ];
		function fee( v ) {
			var f = 0, rem = v;
			for ( var k = 0; k < brackets.length && rem > 0; k++ ) {
				var amt = Math.min( rem, brackets[ k ][ 0 ] );
				f += amt * brackets[ k ][ 1 ];
				rem -= amt;
			}
			return f;
		}
		function money( n ) { return '$' + Math.round( n ).toLocaleString( 'en-US' ); }
		// At most 9 digits in whole dollars ($999,999,999). Above $25,000,000 the statutory
		// fee stops growing (the rest is set by the court), so larger values add nothing.
		var MAX_DIGITS = 9;
		function update() {
			var raw = input.value.replace( /[$,\s]/g, '' );
			var whole = raw.split( '.' )[ 0 ];
			if ( /^\d+$/.test( whole ) && whole.length > MAX_DIGITS ) {
				raw = whole.slice( 0, MAX_DIGITS ) + raw.slice( whole.length );
				input.value = raw;
			}
			var bad = '' !== raw && ! /^\d+(\.\d+)?$/.test( raw );
			input.setAttribute( 'aria-invalid', bad ? 'true' : 'false' );
			if ( error ) { error.hidden = ! bad; }
			// Keep the caret stable while adding separators to whole numbers.
			if ( ! bad && /^\d+$/.test( raw ) && raw.length > 3 ) {
				var fromEnd = input.value.length - ( input.selectionEnd || input.value.length );
				input.value = Number( raw ).toLocaleString( 'en-US' );
				var pos = Math.max( 0, input.value.length - fromEnd );
				try { input.setSelectionRange( pos, pos ); } catch ( err ) {}
			}
			var v = bad ? 0 : parseFloat( raw ) || 0;
			if ( v <= 0 ) { results.hidden = true; over.hidden = true; return; }
			var f = fee( v );
			results.hidden = false;
			over.hidden = v <= 25000000;
			att.textContent = money( f );
			exec.textContent = money( f );
			total.textContent = money( f * 2 );
		}
		input.addEventListener( 'input', update );
		update();
	}

	/* ------------------------------------------------------------------
	   7. Calendly inline calendar
	   ------------------------------------------------------------------ */
	function initCalendly() {
		function watch( box ) {
			if ( box.dataset.hpWatch ) { return; }
			box.dataset.hpWatch = '1';
			box.classList.add( 'is-loading' );
			var note = document.createElement( 'div' );
			note.className = 'hp-calwait';
			note.setAttribute( 'role', 'status' );
			note.innerHTML = '<span class="hp-spinner" aria-hidden="true"></span><span class="hp-calwait__text">Loading available times…</span>';
			box.appendChild( note );
			function done() { box.classList.remove( 'is-loading' ); if ( note.parentNode ) { note.parentNode.removeChild( note ); } }
			function hook() {
				var frame = box.querySelector( 'iframe' );
				if ( ! frame ) { return false; }
				frame.addEventListener( 'load', done );
				return true;
			}
			if ( ! hook() ) {
				var mo = new MutationObserver( function () { if ( hook() ) { mo.disconnect(); } } );
				mo.observe( box, { childList: true, subtree: true } );
			}
			// A slow or blocked calendar still leaves a way to book.
			window.setTimeout( function () {
				if ( ! box.classList.contains( 'is-loading' ) || ! box.dataset.url ) { return; }
				var text = note.querySelector( '.hp-calwait__text' );
				text.innerHTML = 'The calendar is taking longer than usual. <a href="' + box.dataset.url.replace( /"/g, '&quot;' ) + '" target="_blank" rel="noopener">Open the booking calendar in a new tab</a> or call <a href="tel:+14156921503">415-692-1503</a>.';
			}, 10000 );
		}
		function scan() { document.querySelectorAll( '.calendly-inline-widget[data-hlc-calendly]' ).forEach( watch ); }
		scan();
		new MutationObserver( scan ).observe( document.body, { childList: true, subtree: true } );
	}

	ready( function () {
		initHeader();
		initForms();
		initLoadMore();
		initBlogSearch();
		initTestimonials();
		initCalculator();
		initCalendly();
		initReveal();
	} );
} )();

/*
 * Keep "Skip to content" first in the tab order.
 * The AccessiYes toolbar script inserts its container at the top of <body>,
 * before the skip link. Move the skip link back to the top when that happens.
 */
( function () {
	'use strict';
	var skip = document.querySelector( '.hp-skip' );
	if ( ! skip || ! window.MutationObserver ) {
		return;
	}
	function keepFirst() {
		if ( document.body.firstElementChild !== skip ) {
			document.body.insertBefore( skip, document.body.firstChild );
		}
	}
	keepFirst();
	new MutationObserver( keepFirst ).observe( document.body, { childList: true } );
} )();
