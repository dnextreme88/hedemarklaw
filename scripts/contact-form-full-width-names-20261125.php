<?php
/**
 * One-off migration: give First Name and Last Name their own rows on the Contact form.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/contact-form-full-width-names-20261125.php
 *
 * On the Gravity Forms "Contact" form, First Name and Last Name each had a column span
 * of 6 (half width), so they shared one row. The other fields span the full row. The
 * script sets both name fields to a span of 12 (full width), so every field has its own
 * row. This is the same as setting the width in the Gravity Forms form editor.
 *
 * The form is found by its title ("Contact") and the fields by their labels, not by
 * IDs, because IDs can differ from site to site. A second run changes nothing.
 *
 * Build record: docs/plans/20261125-mobile-bands-contact-form-cards.md
 */

if ( ! class_exists( 'GFAPI' ) ) {
	echo "ERROR: Gravity Forms is not active. Aborting.\n";
	return;
}

$form = null;
foreach ( GFAPI::get_forms() as $candidate ) {
	if ( 'Contact' === $candidate['title'] ) {
		$form = $candidate;
		break;
	}
}
if ( ! $form ) {
	echo "ERROR: No Gravity Forms form with the title 'Contact'. Aborting.\n";
	return;
}

$labels  = array( 'First Name', 'Last Name' );
$found   = 0;
$changed = 0;
foreach ( $form['fields'] as $field ) {
	if ( ! in_array( $field->label, $labels, true ) ) {
		continue;
	}
	$found++;
	if ( 12 !== (int) $field->layoutGridColumnSpan ) {
		$field->layoutGridColumnSpan = 12;
		$changed++;
	}
}

if ( count( $labels ) !== $found ) {
	echo "ERROR: Form {$form['id']} does not have both a 'First Name' and a 'Last Name' field. Aborting.\n";
	return;
}
if ( 0 === $changed ) {
	echo "Form {$form['id']} (Contact): the name fields are already full width. Skipped.\n";
	return;
}

$result = GFAPI::update_form( $form );
if ( is_wp_error( $result ) ) {
	echo 'ERROR: ' . $result->get_error_message() . "\n";
	return;
}
echo "Form {$form['id']} (Contact): {$changed} name field(s) set to full width.\n";
