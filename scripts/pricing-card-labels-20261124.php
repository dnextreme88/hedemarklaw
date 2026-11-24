<?php
/**
 * One-off migration: name each card on /pricing/ after its service.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/pricing-card-labels-20261124.php
 *
 * Each card on /pricing/ has a whole-card link (`.hp-card__link`, its text hidden off
 * screen) and a visible label (`.hp-cardmore`). The three labels all said "View pricing",
 * and the link names said "Estate Planning pricing" and so on. The script sets both to
 * the same text, for example "View estate planning pricing":
 *
 * - WCAG 2.4.4 (Link Purpose): each link name is unique and says where it goes.
 * - WCAG 2.5.3 (Label in Name): the link name holds the visible label, so a voice
 *   control user can say the text on the card.
 * - The visible label gets aria-hidden="true", because it repeats the link name and a
 *   screen reader would read it twice.
 *
 * The card is matched by its link URL. The page is found by path, not by ID. The script
 * saves through Elementor (a revision and a CSS rebuild). A second run changes nothing.
 *
 * Build record: docs/plans/20261124-blog-search.md
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

$page = get_page_by_path( 'pricing', OBJECT, 'page' );
if ( ! $page || 'publish' !== $page->post_status ) {
	echo "ERROR: No published page at 'pricing'. Aborting.\n";
	return;
}

// Link URL => the card's new label.
$labels = array(
	'/pricing/estate-planning/'      => 'View estate planning pricing',
	'/pricing/probate/'              => 'View probate pricing',
	'/pricing/trust-administration/' => 'View trust administration pricing',
);

$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
$data     = $document ? $document->get_elements_data() : array();

/**
 * Set the link name and the visible label in each pricing card, recursively.
 *
 * @param array $elements Elementor elements.
 * @param array $labels   Link URL => label.
 * @param int   $changed  Number of widgets changed (by reference).
 * @return array The changed elements.
 */
function hlc_pricing_card_labels( array $elements, array $labels, &$changed ) {
	foreach ( $elements as $i => $el ) {
		if ( 'container' === ( $el['elType'] ?? '' ) && false !== strpos( (string) ( $el['settings']['_css_classes'] ?? '' ), 'hp-card' ) && ! empty( $el['elements'] ) ) {
			// Which card is this? Read the URL of its whole-card link.
			$label = '';
			foreach ( $el['elements'] as $child ) {
				$html = (string) ( $child['settings']['html'] ?? '' );
				if ( preg_match( '#class="hp-card__link" href="([^"]+)"#', $html, $m ) && isset( $labels[ $m[1] ] ) ) {
					$label = $labels[ $m[1] ];
				}
			}
			if ( '' !== $label ) {
				foreach ( $el['elements'] as $j => $child ) {
					$html = (string) ( $child['settings']['html'] ?? '' );
					$new  = $html;
					if ( false !== strpos( $html, 'hp-card__link' ) ) {
						$new = preg_replace( '#(<a class="hp-card__link" href="[^"]+"><span>)[^<]*(</span>)#', '${1}' . esc_html( $label ) . '${2}', $html );
					} elseif ( false !== strpos( $html, 'hp-cardmore' ) ) {
						$new = '<span class="hp-cardmore" aria-hidden="true">' . esc_html( $label ) . '</span>';
					}
					if ( $new !== $html ) {
						$elements[ $i ]['elements'][ $j ]['settings']['html'] = $new;
						$changed++;
					}
				}
			}
		}
		if ( ! empty( $elements[ $i ]['elements'] ) ) {
			$elements[ $i ]['elements'] = hlc_pricing_card_labels( $elements[ $i ]['elements'], $labels, $changed );
		}
	}
	return $elements;
}

$changed = 0;
$data    = hlc_pricing_card_labels( $data, $labels, $changed );

if ( 0 === $changed ) {
	echo "'/pricing/' (id {$page->ID}): card labels already set. Skipped.\n";
	return;
}

$document->save( array( 'elements' => $data ) );
\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "'/pricing/' (id {$page->ID}): {$changed} card widget(s) updated.\n";
