<?php
/**
 * Shared Elementor page builder for the one-off content scripts.
 *
 * Used by scripts/fill-firm-pages-20261123.php and scripts/fill-service-pages-20261123.php.
 * It builds Elementor element arrays with the same settings and CSS classes as the
 * Pricing page, so new pages look like the rest of the site:
 *
 * - a title-only hero band (hp-dotgrid) with the page title as the h1;
 * - content sections in a 1280px box, so text lines up with the header logo and nav
 *   (the theme CSS gives each top-level section the page gutter);
 * - cards (hp-cards-row, hp-card), notes (hp-note), and inline links (hp-inlink).
 *
 * hlc_fp_save_page() saves a page through Elementor (a revision and a CSS rebuild),
 * keeps its consultation band, and skips a page whose content already matches.
 *
 * @package HelloBizChild
 */

if ( defined( 'HLC_FP_LIB' ) ) {
	return;
}
define( 'HLC_FP_LIB', true );

/* ---------------------------------------------------------------------
   Element helpers
   --------------------------------------------------------------------- */

function hlc_fp_id( $seed ) {
	return substr( md5( 'hlc-firm-pages-' . $seed ), 0, 7 );
}

function hlc_fp_pad( $top, $right, $bottom, $left ) {
	return array( 'unit' => 'px', 'top' => (string) $top, 'right' => (string) $right, 'bottom' => (string) $bottom, 'left' => (string) $left, 'isLinked' => false );
}

function hlc_fp_gap( $size ) {
	return array( 'unit' => 'px', 'size' => $size, 'column' => (string) $size, 'row' => (string) $size, 'isLinked' => true );
}

function hlc_fp_container( $seed, array $settings, array $children, $inner = true ) {
	return array( 'id' => hlc_fp_id( $seed ), 'elType' => 'container', 'settings' => $settings, 'elements' => $children, 'isInner' => $inner );
}

function hlc_fp_widget( $seed, $type, array $settings ) {
	return array( 'id' => hlc_fp_id( $seed ), 'elType' => 'widget', 'settings' => $settings, 'elements' => array(), 'widgetType' => $type );
}

function hlc_fp_classes( $class ) {
	return array( '_css_classes' => $class, 'css_classes' => $class );
}

/** A Fraunces heading in brand ink, same style as the other pages. */
function hlc_fp_heading( $seed, $title, $tag, $size, $size_small, $bottom = 0 ) {
	return hlc_fp_widget(
		$seed,
		'heading',
		array(
			'title'                        => $title,
			'header_size'                  => $tag,
			'align'                        => 'left',
			'title_color'                  => '#00305B',
			'typography_typography'        => 'custom',
			'typography_font_family'       => 'Fraunces',
			'typography_font_weight'       => '400',
			'typography_font_size'         => array( 'unit' => 'px', 'size' => $size ),
			'typography_font_size_tablet'  => array( 'unit' => 'px', 'size' => $size_small ),
			'typography_font_size_mobile'  => array( 'unit' => 'px', 'size' => $size_small ),
			'typography_line_height'       => array( 'unit' => 'em', 'size' => 1.25 ),
			'_margin'                      => hlc_fp_pad( 0, 0, $bottom, 0 ),
		)
	);
}

/** Body text in Inter, brand ink 2. */
function hlc_fp_text( $seed, $html, $size = 17, $class = '' ) {
	$settings = array(
		'editor'                 => $html,
		'text_color'             => '#22384D',
		'typography_typography'  => 'custom',
		'typography_font_family' => 'Inter',
		'typography_font_size'   => array( 'unit' => 'px', 'size' => $size ),
		'typography_line_height' => array( 'unit' => 'em', 'size' => 1.6 ),
		'align'                  => 'left',
	);
	if ( $class ) {
		$settings += hlc_fp_classes( $class );
	}
	return hlc_fp_widget( $seed, 'text-editor', $settings );
}

/**
 * Hero band: the page title only, as an h1 on the fog background with the dot grid (as on
 * About and Blog). The band is reserved for the title; the headline and intro go below it.
 */
function hlc_fp_hero( $slug, $title ) {
	return hlc_fp_container(
		"$slug-hero",
		array(
			'content_width'         => 'full',
			'flex_direction'        => 'column',
			'flex_align_items'      => 'center',
			'padding'               => hlc_fp_pad( 160, 0, 64, 0 ),
			'background_background' => 'classic',
			'background_color'      => '#F4F7F9',
		) + hlc_fp_classes( 'hp-dotgrid' ),
		array(
			hlc_fp_container(
				"$slug-hero-box",
				array(
					'flex_direction'   => 'column',
					'boxed_width'      => array( 'unit' => 'px', 'size' => 1280, 'sizes' => array() ),
					'flex_align_items' => 'stretch',
					'padding'          => hlc_fp_pad( 0, 0, 0, 0 ),
				),
				array( hlc_fp_heading( "$slug-h1", $title, 'h1', 48, 36 ) )
			),
		),
		false
	);
}

/** First content section: the headline as an h2 and the intro paragraph under it. */
function hlc_fp_intro_section( $slug, $headline, $intro ) {
	return hlc_fp_container(
		"$slug-intro-sec",
		array(
			'content_width'    => 'full',
			'flex_direction'   => 'column',
			'flex_align_items' => 'center',
			'padding'          => hlc_fp_pad( 0, 0, 0, 0 ),
		),
		array(
			hlc_fp_container(
				"$slug-intro-box",
				array(
					'flex_direction' => 'column',
					'boxed_width'    => array( 'unit' => 'px', 'size' => 1280 ),
					'flex_gap'       => hlc_fp_gap( 16 ),
					'padding'        => hlc_fp_pad( 64, 24, 0, 24 ),
				),
				array(
					hlc_fp_heading( "$slug-intro-h2", $headline, 'h2', 36, 30 ),
					hlc_fp_text( "$slug-intro", $intro, 18, 'hp-measure' ),
				)
			),
		),
		false
	);
}

/** One card: h3 title and text. With a link, the whole card links (as on Pricing). */
function hlc_fp_card( $seed, array $card ) {
	$children = array();
	if ( ! empty( $card['link'] ) ) {
		$children[] = hlc_fp_widget(
			"$seed-link",
			'html',
			array( 'html' => '<a class="hp-card__link" href="' . esc_url( $card['link'] ) . '"><span>' . esc_html( $card['link_label'] ) . '</span></a>' ) + hlc_fp_classes( 'hp-card__linkwrap' )
		);
	}
	$children[] = hlc_fp_heading( "$seed-title", $card['title'], 'h3', 24, 22, 4 );
	$children[] = hlc_fp_text( "$seed-text", $card['text'], 17 );
	if ( ! empty( $card['link'] ) ) {
		$children[] = hlc_fp_widget( "$seed-more", 'html', array( 'html' => '<span class="hp-cardmore">' . esc_html( $card['more'] ) . '</span>' ) );
	}
	return hlc_fp_container(
		$seed,
		array(
			'content_width'  => 'full',
			'flex_direction' => 'column',
			'flex_gap'       => hlc_fp_gap( 12 ),
		) + hlc_fp_classes( 'hp-card' ),
		$children
	);
}

/**
 * Section with an h2, an optional lead paragraph, and rows of cards.
 *
 * @param string $slug    Page slug (seed for the element IDs).
 * @param string $title   The h2.
 * @param string $lead    Lead paragraph HTML, or ''.
 * @param array  $cards   Cards (see hlc_fp_card()).
 * @param int    $per_row Cards per row on a wide screen. Rows stack under 880px (theme CSS).
 * @param string $key     Section key, for a page with more than one card section.
 * @return array The section.
 */
function hlc_fp_cards_section( $slug, $title, $lead, array $cards, $per_row = 3, $key = 'cards' ) {
	$base = "$slug-$key";
	// The first card section keeps its original seeds, so existing pages keep their IDs.
	$card_seed = 'cards' === $key ? "$slug-card" : "$base-card";

	$children = array( hlc_fp_heading( "$base-h2", $title, 'h2', 36, 30 ) );
	if ( $lead ) {
		$children[] = hlc_fp_text( "$base-lead", $lead, 17, 'hp-measure' );
	}
	foreach ( array_chunk( $cards, max( 1, (int) $per_row ), true ) as $n => $chunk ) {
		$row = array();
		foreach ( $chunk as $i => $card ) {
			$row[] = hlc_fp_card( "$card_seed-$i", $card );
		}
		$children[] = hlc_fp_container(
			0 === $n ? "$base-row" : "$base-row-$n",
			array(
				'content_width'  => 'full',
				'flex_direction' => 'row',
				'flex_gap'       => hlc_fp_gap( 24 ),
			) + hlc_fp_classes( 'hp-cards-row' ),
			$row
		);
	}
	return hlc_fp_container(
		$base,
		array(
			'content_width'    => 'full',
			'flex_direction'   => 'column',
			'flex_align_items' => 'center',
			'padding'          => hlc_fp_pad( 0, 0, 0, 0 ),
		),
		array(
			hlc_fp_container(
				"$base-box",
				array(
					'flex_direction' => 'column',
					'boxed_width'    => array( 'unit' => 'px', 'size' => 1280 ),
					'flex_gap'       => hlc_fp_gap( 24 ),
					'padding'        => hlc_fp_pad( 48, 24, 64, 24 ),
				),
				$children
			),
		),
		false
	);
}

/** Section with a top hairline: h2, body text (an ordered list), and a note box. */
function hlc_fp_steps_section( $slug, $title, $body, $note ) {
	return hlc_fp_container(
		"$slug-steps",
		array(
			'boxed_width'    => array( 'unit' => 'px', 'size' => 1280 ),
			'flex_direction' => 'column',
			'flex_gap'       => hlc_fp_gap( 24 ),
			'padding'        => hlc_fp_pad( 64, 24, 96, 24 ),
			'border_border'  => 'solid',
			'border_width'   => hlc_fp_pad( 1, 0, 0, 0 ),
			'border_color'   => '#DCE4EA',
		),
		array(
			hlc_fp_heading( "$slug-steps-h2", $title, 'h2', 36, 30 ),
			hlc_fp_text( "$slug-steps-body", $body, 17, 'hp-measure' ),
			hlc_fp_widget( "$slug-note", 'html', array( 'html' => '<div class="hp-note">' . $note . '</div>' ) ),
		),
		false
	);
}

/**
 * Text section in the 1280px box: an h2, body HTML (paragraphs, lists, h3s), and an
 * optional note box. With $rule, a hairline separates it from the section above.
 *
 * @param string $slug  Page slug (seed for the element IDs).
 * @param string $key   Section key, unique on the page.
 * @param string $title The h2.
 * @param string $body  Body HTML.
 * @param string $note  Note HTML for an hp-note box, or ''.
 * @param bool   $rule  True for a top hairline.
 * @return array The section.
 */
function hlc_fp_prose_section( $slug, $key, $title, $body, $note = '', $rule = true ) {
	$settings = array(
		'boxed_width'    => array( 'unit' => 'px', 'size' => 1280 ),
		'flex_direction' => 'column',
		'flex_gap'       => hlc_fp_gap( 24 ),
		'padding'        => hlc_fp_pad( 64, 24, 64, 24 ),
	);
	if ( $rule ) {
		$settings += array(
			'border_border' => 'solid',
			'border_width'  => hlc_fp_pad( 1, 0, 0, 0 ),
			'border_color'  => '#DCE4EA',
		);
	}
	$children = array(
		hlc_fp_heading( "$slug-$key-h2", $title, 'h2', 36, 30 ),
		hlc_fp_text( "$slug-$key-body", $body, 17, 'hp-measure' ),
	);
	if ( $note ) {
		$children[] = hlc_fp_widget( "$slug-$key-note", 'html', array( 'html' => '<div class="hp-note">' . $note . '</div>' ) );
	}
	return hlc_fp_container( "$slug-$key", $settings, $children, false );
}

/**
 * Save new content to a page through Elementor.
 *
 * The page is rebuilt only while it shows "Under construction" or holds the hero this
 * builder made. The page's consultation band (the container with .hp-cta) is kept and goes
 * last. A page whose content already matches is not saved. On save, Rank Math robots is
 * set to index, because the page now has real content.
 *
 * @param string   $slug  Page path.
 * @param callable $build function( WP_Post $page ): array of sections, without the band.
 */
function hlc_fp_save_page( $slug, callable $build ) {
	$page = get_page_by_path( $slug );
	if ( ! $page ) {
		echo "ERROR: page '{$slug}' not found. Skipped.\n";
		return;
	}
	$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
	$data     = $document ? $document->get_elements_data() : array();
	if ( empty( $data ) ) {
		echo "ERROR: '{$slug}' (id {$page->ID}) has no Elementor data. Skipped.\n";
		return;
	}
	$json = wp_json_encode( $data );
	if ( false === strpos( $json, 'Under construction' ) && false === strpos( $json, '"' . hlc_fp_id( "$slug-hero" ) . '"' ) ) {
		echo "'{$slug}' (id {$page->ID}): has other content. Skipped.\n";
		return;
	}

	$cta = null;
	foreach ( $data as $el ) {
		if ( false !== strpos( wp_json_encode( $el ), 'hp-cta' ) ) {
			$cta = $el;
		}
	}
	if ( ! $cta ) {
		echo "ERROR: '{$slug}' (id {$page->ID}) has no consultation band. Skipped.\n";
		return;
	}

	$new   = call_user_func( $build, $page );
	$new[] = $cta;

	if ( wp_json_encode( $new ) === $json ) {
		echo "'{$slug}' (id {$page->ID}): nothing to change.\n";
		return;
	}

	$document->save( array( 'elements' => $new ) );
	update_post_meta( $page->ID, 'rank_math_robots', array( 'index' ) );
	echo "'{$slug}' (id {$page->ID}): content saved, robots set to index.\n";
}
