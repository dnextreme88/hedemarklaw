<?php
/**
 * One-off migration: the light blue hero band holds only the page title.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/title-only-heroes-20261123.php
 *
 * The first section of an Elementor page is the hero band: light blue (class hp-dotgrid)
 * with the page title as the h1. Some pages also had other content in the band. For each
 * page below, this script:
 *
 * - adds the hp-dotgrid class when it is missing, so the band shows the light blue colour
 *   (FAQs and the three /services/ stubs had only an inline colour, the same as the page);
 * - keeps only the h1 heading in the band;
 * - moves the other content (an intro, a checklist, the FAQ list, a stub line) to the top
 *   of the next section. When the next section is the consultation band, it adds a new
 *   section for that content instead;
 * - moves a "← All pricing" link (class hp-crumb) to the end of that section, just above
 *   the "Free 20-minute consultation" band;
 * - sets the band's bottom padding, and the next section's top padding, to 64px.
 *
 * See docs/plans/20261123-title-only-heroes.md. The script saves through Elementor (a
 * revision per page and a CSS rebuild). A band that already holds only the title and has
 * the class is skipped, so a second run changes nothing.
 */

if ( ! class_exists( '\Elementor\Plugin' ) ) {
	echo "ERROR: Elementor is not active. Aborting.\n";
	return;
}

$admins = get_users( array( 'role' => 'administrator', 'number' => 1, 'fields' => 'ID' ) );
if ( empty( $admins ) ) {
	echo "ERROR: No administrator user found. Aborting.\n";
	return;
}
wp_set_current_user( (int) $admins[0] );

/**
 * Take every widget except the h1 heading out of a band tree. A crumb (class hp-crumb) is
 * returned apart from the other widgets. Containers stay.
 *
 * @param array $els    Sibling elements.
 * @param array $crumbs Crumb widgets found, by reference.
 * @param array $moved  Other widgets found, in page order, by reference.
 * @return array The elements that stay in the band.
 */
function hlc_toh_strip( array $els, array &$crumbs, array &$moved ) {
	$out = array();
	foreach ( $els as $el ) {
		if ( 'widget' === ( $el['elType'] ?? '' ) ) {
			$is_h1 = 'heading' === ( $el['widgetType'] ?? '' ) && 'h1' === ( $el['settings']['header_size'] ?? '' );
			if ( $is_h1 ) {
				$out[] = $el;
				continue;
			}
			$classes = (string) ( $el['settings']['css_classes'] ?? '' ) . ' ' . (string) ( $el['settings']['_css_classes'] ?? '' );
			if ( false !== strpos( $classes, 'hp-crumb' ) ) {
				$crumbs[] = $el;
			} else {
				$moved[] = $el;
			}
			continue;
		}
		if ( ! empty( $el['elements'] ) ) {
			$el['elements'] = hlc_toh_strip( $el['elements'], $crumbs, $moved );
		}
		$out[] = $el;
	}
	return $out;
}

/** True when the element holds the shared consultation band. */
function hlc_toh_is_cta( array $el ) {
	return false !== strpos( (string) wp_json_encode( $el ), 'hp-cta' );
}

/**
 * In a full-width section, find the one boxed container that holds the content. Content
 * moved out of the band must go in there, so it lines up with the logo and the title.
 *
 * @param array $section A top-level section.
 * @return int|null The index of the boxed child, or null when the section is boxed itself.
 */
function hlc_toh_boxed_child( array $section ) {
	if ( 'full' !== ( $section['settings']['content_width'] ?? 'boxed' ) ) {
		return null;
	}
	$found = null;
	foreach ( $section['elements'] ?? array() as $i => $el ) {
		if ( 'container' === ( $el['elType'] ?? '' ) && 'full' !== ( $el['settings']['content_width'] ?? 'boxed' ) ) {
			if ( null !== $found ) {
				return null; // More than one: leave the section as it is.
			}
			$found = $i;
		}
	}
	return $found;
}

/**
 * Put moved widgets at the start of a section's content, and crumbs at the end. In a
 * full-width section, the widgets go in its boxed container. Widgets that an earlier run
 * left directly in the full-width section are moved into the boxed container too.
 *
 * @param array $section A top-level section.
 * @param array $moved   Widgets for the start.
 * @param array $crumbs  Crumbs for the end.
 * @return array The section.
 */
function hlc_toh_place( array $section, array $moved, array $crumbs ) {
	$box = hlc_toh_boxed_child( $section );
	if ( null === $box ) {
		$section['elements'] = array_merge( $moved, $section['elements'] ?? array(), $crumbs );
		$section['settings']['padding']['top'] = '64';
		return $section;
	}
	// Widgets sitting loose in the full-width section belong in the boxed container.
	$loose = array();
	$keep  = array();
	foreach ( $section['elements'] as $i => $el ) {
		if ( $i !== $box && 'widget' === ( $el['elType'] ?? '' ) ) {
			$loose[] = $el;
		} else {
			$keep[] = $el;
		}
	}
	$section['elements'] = $keep;
	$box                 = hlc_toh_boxed_child( $section );
	$inner               = $section['elements'][ $box ];
	$inner['elements']   = array_merge( $moved, $loose, $inner['elements'] ?? array(), $crumbs );
	$inner['settings']['padding']['top'] = '64';
	$section['elements'][ $box ]         = $inner;
	$section['settings']['padding']['top'] = '0';
	return $section;
}

/** True when a full-width section has widgets loose next to its boxed container. */
function hlc_toh_has_loose( array $section ) {
	$box = hlc_toh_boxed_child( $section );
	if ( null === $box ) {
		return false;
	}
	foreach ( $section['elements'] as $i => $el ) {
		if ( $i !== $box && 'widget' === ( $el['elType'] ?? '' ) ) {
			return true;
		}
	}
	return false;
}

/** Add a CSS class to an element's class settings when it is missing. */
function hlc_toh_add_class( array $el, $class ) {
	foreach ( array( 'css_classes', '_css_classes' ) as $key ) {
		$list = preg_split( '/\s+/', trim( (string) ( $el['settings'][ $key ] ?? '' ) ), -1, PREG_SPLIT_NO_EMPTY );
		if ( ! in_array( $class, $list, true ) ) {
			$list[] = $class;
		}
		$el['settings'][ $key ] = implode( ' ', $list );
	}
	return $el;
}

$paths = array(
	'pricing',
	'pricing/estate-planning',
	'pricing/probate',
	'pricing/trust-administration',
	'services',
	'services/estate-planning',
	'services/probate',
	'services/trust-administration',
	'book',
	'book/estate-planning',
	'book/probate',
	'book/trust-administration',
	'faqs',
);

foreach ( $paths as $path ) {
	$page = get_page_by_path( $path );
	if ( ! $page ) {
		echo "ERROR: page '{$path}' not found. Skipped.\n";
		continue;
	}
	$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
	$data     = $document ? $document->get_elements_data() : array();
	if ( count( $data ) < 2 ) {
		echo "ERROR: '{$path}' (id {$page->ID}) has an unexpected layout. Skipped.\n";
		continue;
	}

	$hero      = $data[0];
	$has_class = false !== strpos( (string) ( $hero['settings']['css_classes'] ?? '' ), 'hp-dotgrid' );
	$is_band   = $has_class || '#F4F7F9' === strtoupper( (string) ( $hero['settings']['background_color'] ?? '' ) );
	if ( ! $is_band ) {
		echo "ERROR: '{$path}' (id {$page->ID}) does not start with the hero band. Skipped.\n";
		continue;
	}

	$crumbs = array();
	$moved  = array();
	$hero['elements'] = hlc_toh_strip( $hero['elements'], $crumbs, $moved );
	if ( $has_class && empty( $crumbs ) && empty( $moved ) && ! hlc_toh_has_loose( $data[1] ) ) {
		echo "'{$path}' (id {$page->ID}): band holds only the title. Nothing to change.\n";
		continue;
	}

	$hero = hlc_toh_add_class( $hero, 'hp-dotgrid' );
	$hero['settings']['padding']['bottom'] = '64';
	$data[0] = $hero;

	if ( ! empty( $crumbs ) || ! empty( $moved ) || hlc_toh_has_loose( $data[1] ) ) {
		if ( hlc_toh_is_cta( $data[1] ) ) {
			// No content section before the consultation band: add one.
			$section = array(
				'id'       => substr( md5( 'hlc-title-only-' . $path ), 0, 7 ),
				'elType'   => 'container',
				'settings' => array(
					'boxed_width'    => array( 'unit' => 'px', 'size' => 1280 ),
					'flex_direction' => 'column',
					'flex_gap'       => array( 'unit' => 'px', 'size' => 24, 'column' => '24', 'row' => '24', 'isLinked' => true ),
					'padding'        => array( 'unit' => 'px', 'top' => '64', 'right' => '24', 'bottom' => '96', 'left' => '24', 'isLinked' => false ),
				),
				'elements' => array_merge( $moved, $crumbs ),
				'isInner'  => false,
			);
			array_splice( $data, 1, 0, array( $section ) );
		} else {
			$data[1] = hlc_toh_place( $data[1], $moved, $crumbs );
		}
	}

	$document->save( array( 'elements' => $data ) );
	printf( "'%s' (id %d): band class %s; moved %d widget(s) and %d crumb(s) out of the band.\n", $path, $page->ID, $has_class ? 'kept' : 'added', count( $moved ), count( $crumbs ) );
}
