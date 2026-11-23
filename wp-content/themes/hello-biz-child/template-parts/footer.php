<?php
/**
 * Child override: site footer matching the Hedemark Law brand.
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$year = date( 'Y' );

/**
 * One footer link, marked when it is the current page.
 *
 * @param string $path  Path under the site root.
 * @param string $label Link text.
 */
if ( ! function_exists( 'hlc_footer_link' ) ) :
	function hlc_footer_link( $path, $label ) {
		$page    = get_page_by_path( trim( $path, '/' ) );
		$current = ( $page && is_page( $page->ID ) ) ? ' aria-current="page"' : '';
		printf( '<li><a href="%s"%s>%s</a></li>', esc_url( home_url( $path ) ), $current, esc_html( $label ) );
	}
endif;
?>
<footer id="site-footer" class="hp-footer">
	<div class="hp-footer__inner">

		<div class="hp-footer__grid">

			<div class="hp-footer__brand">
				<p class="hp-footer__wordmark">Hedemark Law, P.C.</p>
				<p class="hp-footer__blurb">A professional corporation focused on estate planning, probate, and trust administration serving the San Francisco Bay Area.</p>
				<div class="hp-footer__social">
					<a href="https://www.facebook.com/Hedemarklaw" aria-label="Hedemark Law on Facebook" rel="noopener" target="_blank">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/></svg>
					</a>
					<a href="https://www.linkedin.com/in/justin-hedemark-esq-a76085b8/" aria-label="Justin Hedemark on LinkedIn" rel="noopener" target="_blank">
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.9 8.7H3.7V20h3.2V8.7zM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.3 13.4c0-3-1.6-4.9-4.3-4.9-1.4 0-2.4.7-2.8 1.4V8.7H10V20h3.2v-5.9c0-1.5.6-2.6 2-2.6 1.3 0 1.9 1 1.9 2.6V20h3.2v-6.6z"/></svg>
					</a>
				</div>
			</div>

			<div class="hp-footer__col">
				<p class="hp-footer__heading">Firm</p>
				<ul>
					<?php
					hlc_footer_link( '/services/', 'Services' );
					hlc_footer_link( '/real-estate/', 'Real Estate' );
					hlc_footer_link( '/estate-law/', 'Estate Law' );
					hlc_footer_link( '/out-of-state-executors-heirs/', 'Out-of-State Executors & Heirs' );
					?>
				</ul>
				<ul>
					<?php
					hlc_footer_link( '/pricing/', 'Pricing' );
					hlc_footer_link( '/about/', 'About Your Attorney' );
					hlc_footer_link( '/blog/', 'Blog' );
					hlc_footer_link( '/faqs/', 'FAQs' );
					?>
				</ul>
			</div>

			<div class="hp-footer__col">
				<p class="hp-footer__heading">Contact</p>
				<ul class="hp-footer__contact">
					<li>
						<svg class="hp-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M12 22s7-7.58 7-12A7 7 0 0 0 5 10c0 4.42 7 12 7 12z" />
							<circle cx="12" cy="10" r="2.5" />
						</svg>
						<a href="https://maps.google.com/?q=220+Montgomery+Street+Suite+1100+San+Francisco+CA+94104" target="_blank" rel="noopener">220 Montgomery Street, Suite 1100, San Francisco, CA 94104</a>
					</li>
					<li>
						<svg class="hp-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
						</svg>
						<a href="tel:+14156921503">415-692-1503</a>
					</li>
					<li>
						<svg class="hp-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="3" y="5" width="18" height="14" rx="2" />
							<path d="m3 7 9 6 9-6" />
						</svg>
						<a href="mailto:justin@hedemarklaw.com">justin@hedemarklaw.com</a>
					</li>
				</ul>
			</div>

			<div class="hp-footer__col">
				<p class="hp-footer__heading">Book a consultation</p>
				<p class="hp-footer__blurb">Free 20-minute consultations for estate planning, probate, and trust administration.</p>
				<a class="hp-btn hp-footer__link" href="<?php echo esc_url( home_url( '/book/' ) ); ?>">Schedule now</a>
			</div>

		</div>

		<div class="hp-footer__legal">
			<p>Do not submit any privileged or confidential information through this website or via email to the law firm as it will not be reviewed and does not create an attorney-client relationship. No attorney-client relationship exists unless and until attorney and client sign a written agreement detailing the scope, rights, and duties of both parties.</p>
			<p class="hp-footer__copy">&copy; <?php echo esc_html( $year ); ?> Hedemark Law, P.C.</p>
		</div>

	</div>
</footer>

<?php if ( is_front_page() ) : ?>
	<button id="hp-totop" class="hp-totop" type="button" aria-label="Back to top">
		<span class="hp-totop__label">Back to top</span>
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M12 19V5" />
			<path d="m5 12 7-7 7 7" />
		</svg>
	</button>
	<script>
		( function () {
			var btn = document.getElementById( 'hp-totop' );
			if ( ! btn ) { return; }
			function toggle() {
				if ( window.pageYOffset > 400 ) {
					btn.classList.add( 'is-visible' );
				} else {
					btn.classList.remove( 'is-visible' );
				}
			}
			window.addEventListener( 'scroll', toggle, { passive: true } );
			toggle();
			btn.addEventListener( 'click', function () {
				window.scrollTo( { top: 0, behavior: 'smooth' } );
			} );
		} )();
	</script>
<?php endif; ?>
