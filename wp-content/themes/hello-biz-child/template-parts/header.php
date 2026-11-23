<?php
/**
 * Child override: site header matching the Hedemark Law brand.
 *
 * The behaviour (menu button, "Firm" menu, Escape to close) lives in assets/ux.js.
 * Without JavaScript the phone menu stays open and the "Firm" menu opens on hover and
 * keyboard focus, so every link is still reachable.
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Is the current page the page at $path, or a child of it?
 *
 * @param string $path Page path, for example 'pricing'.
 * @return bool
 */
if ( ! function_exists( 'hlc_on_section' ) ) :
function hlc_on_section( $path ) {
	$page = get_page_by_path( $path );
	if ( ! $page || ! is_page() ) {
		return false;
	}
	return is_page( $page->ID ) || in_array( $page->ID, get_post_ancestors( get_queried_object_id() ), true );
}
endif;

$hp_on_services = hlc_on_section( 'services' );
$hp_on_firm     = $hp_on_services || is_page( array( 'real-estate', 'estate-law', 'out-of-state-executors-heirs' ) );
$hp_on_pricing  = hlc_on_section( 'pricing' );
$hp_on_blog     = is_page( 'blog' ) || is_singular( 'post' ) || is_category() || is_tag() || is_author() || is_date();

/**
 * One nav link. aria-current="page" only on the exact page; "true" for a section.
 *
 * @param string $path  Path under the site root.
 * @param string $label Link text.
 * @param bool   $on    Current page or section.
 * @param bool   $exact The exact page (not a child of it).
 */
if ( ! function_exists( 'hlc_nav_link' ) ) :
function hlc_nav_link( $path, $label, $on, $exact ) {
	$current = $on ? ( $exact ? ' aria-current="page"' : ' aria-current="true"' ) : '';
	printf(
		'<a href="%s"%s>%s</a>',
		esc_url( home_url( $path ) ),
		$current, // Fixed strings only.
		esc_html( $label )
	);
}
endif;
?>
<a class="hp-skip" href="#content"><?php esc_html_e( 'Skip to content', 'hello-biz-child' ); ?></a>
<header id="site-header" class="hp-header">
	<div class="hp-header__inner">

		<div class="hp-header__brand">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			} else {
				?>
				<a class="hp-wordmark" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">Hedemark Law</a>
			<?php } ?>
			<span class="hp-header__tagline">a Professional Corporation</span>
		</div>

		<a class="hp-btn hp-header__quick" href="<?php echo esc_url( home_url( '/book/' ) ); ?>">Book a consultation</a>

		<button type="button" class="hp-burger" aria-expanded="false" aria-controls="hp-nav" aria-label="<?php esc_attr_e( 'Open menu', 'hello-biz-child' ); ?>">
			<svg class="hp-burger__open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
			<svg class="hp-burger__close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
		</button>

		<nav id="hp-nav" class="hp-nav" aria-label="<?php esc_attr_e( 'Main menu', 'hello-biz-child' ); ?>">
			<ul class="hp-nav__list">
				<li class="hp-has-submenu<?php echo $hp_on_firm ? ' current-menu-item' : ''; ?>">
					<button type="button" class="hp-nav__toplink" aria-expanded="false" aria-controls="hp-submenu-firm">
						Firm
						<svg class="hp-nav__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
					</button>
					<ul class="hp-submenu" id="hp-submenu-firm">
						<li<?php echo $hp_on_services ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/services/', 'Services', $hp_on_services, is_page( 'services' ) ); ?></li>
						<li<?php echo is_page( 'real-estate' ) ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/real-estate/', 'Real Estate', is_page( 'real-estate' ), true ); ?></li>
						<li<?php echo is_page( 'estate-law' ) ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/estate-law/', 'Estate Law', is_page( 'estate-law' ), true ); ?></li>
						<li<?php echo is_page( 'out-of-state-executors-heirs' ) ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/out-of-state-executors-heirs/', 'Out-of-State Executors & Heirs', is_page( 'out-of-state-executors-heirs' ), true ); ?></li>
					</ul>
				</li>
				<li<?php echo $hp_on_pricing ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/pricing/', 'Pricing', $hp_on_pricing, is_page( 'pricing' ) ); ?></li>
				<li<?php echo is_page( 'about' ) ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/about/', 'About Your Attorney', is_page( 'about' ), true ); ?></li>
				<li<?php echo $hp_on_blog ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/blog/', 'Blog', $hp_on_blog, is_page( 'blog' ) ); ?></li>
				<li<?php echo is_page( 'faqs' ) ? ' class="current-menu-item"' : ''; ?>><?php hlc_nav_link( '/faqs/', 'FAQs', is_page( 'faqs' ), true ); ?></li>
			</ul>

			<div class="hp-nav__actions">
				<a class="hp-phone" href="tel:+14156921503" aria-label="<?php esc_attr_e( 'Call 415-692-1503', 'hello-biz-child' ); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
					</svg>
					<span class="hp-phone__number">415-692-1503</span>
				</a>
				<a class="hp-btn" href="<?php echo esc_url( home_url( '/book/' ) ); ?>"<?php echo hlc_on_section( 'book' ) ? ' aria-current="page"' : ''; ?>>Book a free consultation</a>
			</div>
		</nav>

	</div>
</header>
