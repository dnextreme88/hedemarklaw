<?php
/**
 * One-off migration: move the disclaimer on /contact/ to just before the form.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/contact-disclaimer-before-form-20261125.php
 *
 * The "Do not submit any privileged or confidential information..." disclaimer
 * (an Elementor HTML widget with the class `hp-fineprint`) sat after the Gravity Forms
 * form on /contact/. On /book/ it sits just before the form. The script moves the
 * /contact/ disclaimer so it is the element just before the form shortcode widget, in
 * the same container, so both pages show the disclaimer before the form.
 *
 * The page is found by path, not by ID. The script saves through Elementor (a revision
 * and a CSS rebuild). If the disclaimer is already just before the form, it changes
 * nothing, so a second run is safe.
 *
 * Build record: docs/plans/20261125-mobile-bands-contact-form-cards.md
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

$page = get_page_by_path( 'contact', OBJECT, 'page' );
if ( ! $page || 'publish' !== $page->post_status ) {
	echo "ERROR: No published page at 'contact'. Aborting.\n";
	return;
}

$document = \Elementor\Plugin::$instance->documents->get( $page->ID );
$data     = $document ? $document->get_elements_data() : array();

/**
 * In the container that holds both, move the disclaimer to just before the form.
 *
 * @param array  $elements Elementor elements.
 * @param string $status   'moved', 'already', or '' (by reference).
 * @return array The changed elements.
 */
function hlc_contact_disclaimer_first( array $elements, &$status ) {
	$form_index       = null;
	$disclaimer_index = null;
	foreach ( $elements as $i => $el ) {
		if ( 'shortcode' === ( $el['widgetType'] ?? '' ) && false !== strpos( (string) ( $el['settings']['shortcode'] ?? '' ), '[gravityform' ) ) {
			$form_index = $i;
		}
		if ( 'html' === ( $el['widgetType'] ?? '' ) && false !== strpos( (string) ( $el['settings']['html'] ?? '' ), 'hp-fineprint' ) ) {
			$disclaimer_index = $i;
		}
	}
	if ( null !== $form_index && null !== $disclaimer_index ) {
		if ( $disclaimer_index === $form_index - 1 ) {
			$status = 'already';
			return $elements;
		}
		$disclaimer = $elements[ $disclaimer_index ];
		unset( $elements[ $disclaimer_index ] );
		$elements = array_values( $elements );
		// The form index moves down by one when the disclaimer was before it.
		$form_index = $disclaimer_index < $form_index ? $form_index - 1 : $form_index;
		array_splice( $elements, $form_index, 0, array( $disclaimer ) );
		$status = 'moved';
		return $elements;
	}
	foreach ( $elements as $i => $el ) {
		if ( '' === $status && ! empty( $el['elements'] ) ) {
			$elements[ $i ]['elements'] = hlc_contact_disclaimer_first( $el['elements'], $status );
		}
	}
	return $elements;
}

$status = '';
$data   = hlc_contact_disclaimer_first( $data, $status );

if ( 'already' === $status ) {
	echo "'/contact/' (id {$page->ID}): the disclaimer is already just before the form. Skipped.\n";
	return;
}
if ( 'moved' !== $status ) {
	echo "ERROR: No container on '/contact/' holds both the form and the disclaimer. Aborting.\n";
	return;
}

$document->save( array( 'elements' => $data ) );
\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "'/contact/' (id {$page->ID}): moved the disclaimer to just before the form.\n";
