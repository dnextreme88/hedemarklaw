<?php
/**
 * One-off migration: make every input on the Initial Intake form required, except the
 * "Any additional information you'd like to include?" text box.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/initial-intake-required-fields-20261125.php
 *
 * Many fields on the form show only under conditional logic: the Estate Planning,
 * Probate, and Trust Administration questions show only for their matter type, the
 * spouse name fields only for "Couple", and the deadline text boxes only after "Yes".
 * Gravity Forms skips the required check for a field that its conditional logic hides,
 * so a conditional field is required only while it shows. For example, the spouse name
 * fields are required for "Couple" and not for "Individual".
 *
 * Section headings (and other display-only field types) are not inputs, so the script
 * leaves them alone. The form is found by its title ("Initial Intake") and the optional
 * field by its label, not by IDs, because IDs can differ from site to site. A second run
 * changes nothing.
 *
 * Build record: docs/plans/20261125-mobile-bands-contact-form-cards.md
 */

if ( ! class_exists( 'GFAPI' ) ) {
	echo "ERROR: Gravity Forms is not active. Aborting.\n";
	return;
}

$form = null;
foreach ( GFAPI::get_forms() as $candidate ) {
	if ( 'Initial Intake' === $candidate['title'] ) {
		$form = $candidate;
		break;
	}
}
if ( ! $form ) {
	echo "ERROR: No Gravity Forms form with the title 'Initial Intake'. Aborting.\n";
	return;
}

// The one input that stays optional.
$optional_label = "Any additional information you'd like to include?";

// Field types that show content but take no input.
$display_only = array( 'section', 'html', 'page', 'captcha', 'honeypot', 'hidden' );

$found_optional = false;
$changed        = array();
foreach ( $form['fields'] as $field ) {
	if ( in_array( $field->type, $display_only, true ) ) {
		continue;
	}
	if ( $optional_label === $field->label ) {
		$found_optional = true;
		continue;
	}
	if ( ! $field->isRequired ) {
		$field->isRequired = true;
		$changed[]         = $field->id . ' ' . $field->label;
	}
}

if ( ! $found_optional ) {
	echo "ERROR: Form {$form['id']} has no field labeled \"{$optional_label}\". Aborting.\n";
	return;
}
if ( empty( $changed ) ) {
	echo "Form {$form['id']} (Initial Intake): all inputs are already required. Skipped.\n";
	return;
}

$result = GFAPI::update_form( $form );
if ( is_wp_error( $result ) ) {
	echo 'ERROR: ' . $result->get_error_message() . "\n";
	return;
}
printf( "Form %d (Initial Intake): %d field(s) set to required:\n  %s\n", $form['id'], count( $changed ), implode( "\n  ", $changed ) );
