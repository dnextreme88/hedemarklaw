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
$has_menu  = has_nav_menu( 'menu-1' );
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
		</div>

		<input type="checkbox" id="hp-nav-toggle" class="hp-nav-toggle" aria-hidden="true">
		<label for="hp-nav-toggle" class="hp-burger" aria-label="<?php esc_attr_e( 'Toggle menu', 'hello-biz-child' ); ?>">
			<span></span><span></span><span></span>
		</label>

		<nav class="hp-nav" aria-label="<?php esc_attr_e( 'Main menu', 'hello-biz-child' ); ?>">
			<?php
			if ( $has_menu ) {
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'container'      => false,
					'menu_class'     => 'hp-nav__list',
					'fallback_cb'    => false,
					'depth'          => 1,
				) );
			} else {
				?>
				<ul class="hp-nav__list">
					<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
					<li class="<?php echo is_page( 'about' ) ? 'current-menu-item' : ''; ?>">
						<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Your Attorney</a>
					</li>
					<li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Blog</a></li>
				</ul>
			<?php } ?>

			<div class="hp-nav__actions">
				<a class="hp-phone" href="tel:+14156921503">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
					</svg>
					415-692-1503
				</a>
				<a class="hp-btn" href="#">Book a free consultation</a>
			</div>
		</nav>

	</div>
</header>
