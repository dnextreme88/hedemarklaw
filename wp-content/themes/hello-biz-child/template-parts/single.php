<?php
/**
 * Child override: single post layout matching the Hedemark Law brand.
 *
 * Rendered by the parent index.php via get_template_part( 'template-parts/single' ),
 * inside get_header() / get_footer() (which output the branded hp-header / hp-footer).
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$blog_url = home_url( '/blog/' );

while ( have_posts() ) :
	the_post();
	?>

<main id="content" <?php post_class( 'hp-single' ); ?>>

	<section class="hp-article hp-dotgrid">
		<div class="hp-article__inner">
			<a class="hp-article__back" href="<?php echo esc_url( $blog_url ); ?>">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M19 12H5" />
					<path d="m12 19-7-7 7-7" />
				</svg>
				<?php esc_html_e( 'Blog', 'hello-biz-child' ); ?>
			</a>
			<p class="hp-article__eyebrow"><?php echo esc_html( get_the_date() ); ?></p>
			<?php the_title( '<h1 class="hp-article__title">', '</h1>' ); ?>
		</div>
	</section>

	<article class="hp-prose">
		<div class="hp-prose__inner">
			<?php the_content(); ?>
			<?php wp_link_pages(); ?>
		</div>
	</article>

	<?php
	$prev_post = get_previous_post(); // Older post.
	$next_post = get_next_post();     // Newer post.
	if ( $prev_post || $next_post ) :
		?>
	<nav class="hp-postnav" aria-label="<?php esc_attr_e( 'Post navigation', 'hello-biz-child' ); ?>">
		<div class="hp-postnav__inner">
			<?php if ( $prev_post instanceof WP_Post ) : ?>
				<a class="hp-postnav__card hp-postnav__card--prev" href="<?php echo esc_url( get_permalink( $prev_post ) ); ?>">
					<span class="hp-postnav__label">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M19 12H5" />
							<path d="m12 19-7-7 7-7" />
						</svg>
						<?php esc_html_e( 'Previous', 'hello-biz-child' ); ?>
					</span>
					<span class="hp-postnav__title"><?php echo esc_html( get_the_title( $prev_post ) ); ?></span>
				</a>
			<?php else : ?>
				<span class="hp-postnav__spacer" aria-hidden="true"></span>
			<?php endif; ?>

			<?php if ( $next_post instanceof WP_Post ) : ?>
				<a class="hp-postnav__card hp-postnav__card--next" href="<?php echo esc_url( get_permalink( $next_post ) ); ?>">
					<span class="hp-postnav__label">
						<?php esc_html_e( 'Next', 'hello-biz-child' ); ?>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</span>
					<span class="hp-postnav__title"><?php echo esc_html( get_the_title( $next_post ) ); ?></span>
				</a>
			<?php else : ?>
				<span class="hp-postnav__spacer" aria-hidden="true"></span>
			<?php endif; ?>
		</div>
	</nav>
	<?php endif; ?>

	<section class="hp-cta">
		<div class="hp-cta__inner">
			<p class="hp-cta__eyebrow"><?php esc_html_e( 'Free 20-minute consultation', 'hello-biz-child' ); ?></p>
			<h2 class="hp-cta__title"><?php esc_html_e( 'Your family shouldn\'t have to guess.', 'hello-biz-child' ); ?></h2>
			<p class="hp-cta__text"><?php esc_html_e( 'Tell us what\'s going on, and we\'ll tell you plainly what your options are — no pressure, no obligation.', 'hello-biz-child' ); ?></p>
			<div class="hp-cta__actions">
				<a class="hp-cta__btn hp-cta__btn--primary" href="#">
					<?php esc_html_e( 'Book online', 'hello-biz-child' ); ?>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</a>
				<a class="hp-cta__btn hp-cta__btn--ghost" href="tel:+14156921503">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
					</svg>
					415-692-1503
				</a>
			</div>
		</div>
	</section>

</main>

	<?php
endwhile;
