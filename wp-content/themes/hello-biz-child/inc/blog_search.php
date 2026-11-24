<?php
/**
 * Blog search on the /blog page.
 *
 * The /blog list is an Essential Addons Post Grid widget. The widget gives no filter on
 * its query, so the search shows its own results list:
 *
 * - The `[hlc_blog_search]` shortcode (in an Elementor Shortcode widget above the grid)
 *   prints a search form. The form submits `/blog/?q=term`.
 * - When `q` is set, the shortcode prints the matching posts below the form. The results
 *   use the markup and classes of the Post Grid skin "one" inside `.hp-bloglist`, so the
 *   BLOG LISTING styles in assets/child.css apply to them.
 * - The `hp-blog-searching` body class hides the Post Grid widget while results show.
 * - Search URLs get `noindex, follow`.
 *
 * The parameter is `q`, not `s`: with `s`, WordPress runs its own search query in place
 * of the /blog page.
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The search term on the /blog page.
 *
 * @return string The sanitized term (at most 100 characters), or '' when there is no
 *                term or the page is not /blog.
 */
function hlc_blog_search_term() {
	if ( ! is_page( 'blog' ) || ! isset( $_GET['q'] ) || ! is_string( $_GET['q'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return '';
	}
	$term = trim( sanitize_text_field( wp_unslash( $_GET['q'] ) ) ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	return mb_substr( $term, 0, 100 );
}

/**
 * The excerpt length, in words, on the /blog list and in the search results.
 *
 * The Post Grid widget keeps its own copy in its `eael_excerpt_length` setting.
 * scripts/set-blog-excerpt-length-20261124.php sets that setting from this function.
 *
 * @return int Words.
 */
function hlc_blog_excerpt_words() {
	return 60;
}

/**
 * Print one result in the markup of the Post Grid skin "one" (date, title, excerpt,
 * "Read more"). Call it inside the loop.
 */
function hlc_blog_search_render_post() {
	$permalink = get_permalink();
	$title     = wp_strip_all_tags( get_the_title() );
	$excerpt   = wp_trim_words( strip_shortcodes( get_the_excerpt() ? get_the_excerpt() : get_the_content() ), hlc_blog_excerpt_words(), '...' );
	?>
	<article class="eael-grid-post eael-post-grid-column" data-id="<?php echo esc_attr( get_the_ID() ); ?>">
		<div class="eael-grid-post-holder">
			<div class="eael-grid-post-holder-inner">
				<div class="eael-entry-wrapper">
					<header class="eael-entry-header">
						<h2 class="eael-entry-title"><a class="eael-grid-post-link" href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a></h2>
					</header>
					<div class="eael-entry-header-after">
						<div class="eael-entry-meta">
							<span class="eael-posted-on"><time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time></span>
						</div>
					</div>
					<div class="eael-entry-content">
						<div class="eael-grid-post-excerpt">
							<p><?php echo esc_html( $excerpt ); ?></p>
							<a href="<?php echo esc_url( $permalink ); ?>" class="eael-post-elements-readmore-btn">Read more<span class="screen-reader-text">: <?php echo esc_html( $title ); ?></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
	<?php
}

/**
 * Shortcode: [hlc_blog_search]
 *
 * The search form, and the results when the URL has a `q` term.
 *
 * @return string The HTML.
 */
function hlc_render_blog_search() {
	$term     = hlc_blog_search_term();
	$blog_url = home_url( '/blog/' );

	ob_start();
	?>
	<div class="hp-blogsearch">
		<form class="hp-blogsearch__form" role="search" method="get" action="<?php echo esc_url( $blog_url ); ?>">
			<label class="hp-blogsearch__label" for="hp-blogsearch-q">Search articles</label>
			<div class="hp-blogsearch__row">
				<input class="hp-blogsearch__input" id="hp-blogsearch-q" type="search" name="q" value="<?php echo esc_attr( $term ); ?>" maxlength="100" autocomplete="off" placeholder="For example: probate, trust, will">
				<button class="hp-blogsearch__btn" type="submit">Search</button>
			</div>
		</form>
		<?php
		if ( '' !== $term ) :
			$query = new WP_Query(
				array(
					'post_type'           => 'post',
					'post_status'         => 'publish',
					's'                   => $term,
					'posts_per_page'      => 50,
					'ignore_sticky_posts' => true,
				)
			);
			$count = (int) $query->found_posts;
			?>
			<div class="hp-blogsearch__status">
				<p class="hp-blogsearch__count" role="status">
					<?php
					if ( 0 === $count ) {
						echo 'No articles match “' . esc_html( $term ) . '”.';
					} else {
						echo esc_html( $count . ( 1 === $count ? ' article matches' : ' articles match' ) ) . ' “' . esc_html( $term ) . '”';
					}
					?>
				</p>
				<a class="hp-blogsearch__clear" href="<?php echo esc_url( $blog_url ); ?>">Clear search</a>
			</div>
			<?php if ( $query->have_posts() ) : ?>
				<div class="hp-bloglist hp-blogsearch__results">
					<div class="eael-post-grid-container">
						<div class="eael-post-grid eael-post-appender">
							<?php
							while ( $query->have_posts() ) {
								$query->the_post();
								hlc_blog_search_render_post();
							}
							wp_reset_postdata();
							?>
						</div>
					</div>
				</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>
	<?php
	return ob_get_clean();
}
add_shortcode( 'hlc_blog_search', 'hlc_render_blog_search' );

/**
 * Add `hp-blog-searching` to the body while search results show. The CSS hides the Post
 * Grid widget with it.
 *
 * @param string[] $classes Body classes.
 * @return string[] Body classes.
 */
add_filter( 'body_class', function ( $classes ) {
	if ( '' !== hlc_blog_search_term() ) {
		$classes[] = 'hp-blog-searching';
	}
	return $classes;
} );

/**
 * Keep search URLs out of search engines: `noindex, follow` on /blog/?q=term.
 *
 * @param array $robots Rank Math robots directives.
 * @return array Robots directives.
 */
add_filter( 'rank_math/frontend/robots', function ( $robots ) {
	if ( '' !== hlc_blog_search_term() ) {
		$robots['index']  = 'noindex';
		$robots['follow'] = 'follow';
	}
	return $robots;
} );
