<?php
/**
 * Child override: site header matching the Hedemark Law brand.
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$site_name = get_bloginfo( 'name' );

// Highlight "Pricing" on the Pricing page and any of its subpages.
$hp_pricing_page = get_page_by_path( 'pricing' );
$hp_on_pricing   = false;
if ( $hp_pricing_page ) {
	$hp_on_pricing = is_page( $hp_pricing_page->ID )
		|| ( is_page() && in_array( $hp_pricing_page->ID, get_post_ancestors( get_queried_object_id() ), true ) );
}

// Pages grouped under the "Firm" menu. Highlight the parent when the visitor is on
// any of them.
$hp_firm_slugs = array( 'services', 'real-estate', 'estate-law', 'out-of-state-executors-heirs' );
$hp_on_firm    = false;
foreach ( $hp_firm_slugs as $hp_slug ) {
	if ( is_page( $hp_slug ) ) {
		$hp_on_firm = true;
		break;
	}
}
?>
<header id="site-header" class="hp-header">
	<div class="hp-header__inner">

		<div class="hp-header__brand">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			} else {
				?>
				<a class="hp-wordmark" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					Hedemark <em>Law</em>
				</a>
			<?php } ?>
			<span class="hp-header__tagline">a Professional Corporation</span>
		</div>

		<input type="checkbox" id="hp-nav-toggle" class="hp-nav-toggle" aria-hidden="true">
		<label for="hp-nav-toggle" class="hp-burger" aria-label="<?php esc_attr_e( 'Toggle menu', 'hello-biz-child' ); ?>">
			<span></span><span></span><span></span>
		</label>

		<nav class="hp-nav" aria-label="<?php esc_attr_e( 'Main menu', 'hello-biz-child' ); ?>">
			<ul class="hp-nav__list">
				<li class="hp-has-submenu<?php echo $hp_on_firm ? ' current-menu-item' : ''; ?>">
					<a class="hp-nav__toplink" href="#" aria-haspopup="true" aria-expanded="false">
						Firm
						<svg class="hp-nav__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
					</a>
					<ul class="hp-submenu">
						<li class="<?php echo is_page( 'services' ) ? 'current-menu-item' : ''; ?>"><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
						<li class="<?php echo is_page( 'real-estate' ) ? 'current-menu-item' : ''; ?>"><a href="<?php echo esc_url( home_url( '/real-estate/' ) ); ?>">Real Estate</a></li>
						<li class="<?php echo is_page( 'estate-law' ) ? 'current-menu-item' : ''; ?>"><a href="<?php echo esc_url( home_url( '/estate-law/' ) ); ?>">Estate Law</a></li>
						<li class="<?php echo is_page( 'out-of-state-executors-heirs' ) ? 'current-menu-item' : ''; ?>"><a href="<?php echo esc_url( home_url( '/out-of-state-executors-heirs/' ) ); ?>">Out-of-State Executors &amp; Heirs</a></li>
					</ul>
				</li>
				<li class="<?php echo $hp_on_pricing ? 'current-menu-item' : ''; ?>">
					<a href="<?php echo esc_url( home_url( '/pricing/' ) ); ?>">Pricing</a>
				</li>
				<li class="<?php echo is_page( 'about' ) ? 'current-menu-item' : ''; ?>">
					<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Your Attorney</a>
				</li>
				<li class="<?php echo is_page( 'blog' ) ? 'current-menu-item' : ''; ?>"><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Blog</a></li>
				<li class="<?php echo is_page( 'faqs' ) ? 'current-menu-item' : ''; ?>"><a href="<?php echo esc_url( home_url( '/faqs/' ) ); ?>">FAQs</a></li>
			</ul>

			<div class="hp-nav__actions">
				<a class="hp-phone" href="tel:+14156921503">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
					</svg>
					415-692-1503
				</a>
				<a class="hp-btn" href="<?php echo esc_url( home_url( '/book/' ) ); ?>">Book a free consultation</a>
			</div>
		</nav>

	</div>

	<script>
		( function () {
			// The "Firm" top link is a hover/focus menu trigger, not a link. Stop its
			// click from jumping to the top of the page, and mirror the open state in
			// aria-expanded for assistive tech. Desktop reveal is CSS (:hover /
			// :focus-within); on mobile the submenu is always expanded.
			var item = document.querySelector( '.hp-header .hp-has-submenu' );
			if ( ! item ) { return; }
			var link = item.querySelector( '.hp-nav__toplink' );
			if ( ! link ) { return; }
			link.addEventListener( 'click', function ( e ) { e.preventDefault(); } );
			function set( open ) { link.setAttribute( 'aria-expanded', open ? 'true' : 'false' ); }
			item.addEventListener( 'mouseenter', function () { set( true ); } );
			item.addEventListener( 'mouseleave', function () { set( false ); } );
			item.addEventListener( 'focusin', function () { set( true ); } );
			item.addEventListener( 'focusout', function () { set( false ); } );
		} )();
	</script>
</header>
