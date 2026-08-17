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
?>
<footer id="site-footer" class="hp-footer">
	<div class="hp-footer__inner">

		<div class="hp-footer__grid">

			<div class="hp-footer__brand">
				<p class="hp-footer__wordmark">Hedemark <em>Law</em></p>
				<p class="hp-footer__blurb">A professional corporation focused on estate planning, probate, and trust administration in San Francisco.</p>
				<div class="hp-footer__social">
					<a href="https://www.facebook.com/Hedemarklaw" aria-label="Facebook">f</a>
					<a href="https://www.linkedin.com/in/justin-hedemark-esq-a76085b8/" aria-label="LinkedIn">in</a>
				</div>
			</div>

			<div class="hp-footer__col">
				<p class="hp-footer__heading">Firm</p>
				<ul>
					<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
					<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Your Attorney</a></li>
					<li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Blog</a></li>
				</ul>
			</div>

			<div class="hp-footer__col">
				<p class="hp-footer__heading">Contact</p>
				<ul class="hp-footer__contact">
					<li>220 Montgomery Street, Suite 1100, San Francisco, CA 94104</li>
					<li><a href="tel:+14156921503">415-692-1503</a></li>
					<li><a href="mailto:justin@hedemarklaw.com">justin@hedemarklaw.com</a></li>
				</ul>
			</div>

			<div class="hp-footer__col">
				<p class="hp-footer__heading">Book online</p>
				<p class="hp-footer__blurb">Free 20-minute consultations for estate planning, probate, and trust administration.</p>
				<a class="hp-footer__link" href="#">Schedule now &rarr;</a>
			</div>

		</div>

		<div class="hp-footer__legal">
			<p>Do not submit any privileged or confidential information through this website or via email to the law firm as it will not be reviewed and does not create an attorney-client relationship. No attorney-client relationship exists unless and until attorney and client sign a written agreement detailing the scope, rights, and duties of both parties.</p>
			<p class="hp-footer__copy">&copy; <?php echo esc_html( $year ); ?> Hedemark Law, P.C.</p>
		</div>

	</div>
</footer>
