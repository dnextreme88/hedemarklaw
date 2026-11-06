<?php
/**
 * One-off migration: remove the consultation type question from form 8 (Initial Intake).
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/remove-consultation-type-field-form-8.php
 *
 * Form 8 now always opens the Calendly event "phone and Zoom" (see hlc_calendly_url()
 * in the child theme). On that event, the invitee selects a phone call or a Zoom meeting,
 * so the form does not ask any more.
 *
 * The script removes the "Consultation" section (field 38) and the question
 * "What kind of consultation would you like?" (field 39, Admin Label `consultation_type`).
 *
 * GFAPI::update_form() does not delete entry values, so old entries keep their answers.
 *
 * Gravity Forms computes nextFieldId from the highest field id each time it loads a form
 * (GFFormsModel::get_form_meta()), so nextFieldId becomes 38 after this change. A new
 * field can then get id 38 or 39, and old entries still hold values under those ids.
 *
 * The Stage 1 forms (5, 6, 7) keep their question.
 *
 * If form 8 has no `consultation_type` field, the script makes no change, so a second
 * run is safe.
 *
 * Build record: docs/plans/20261107-initial-intake-calendly-phone-and-zoom.md
 */

if ( ! class_exists( 'GFAPI' ) ) {
	echo "ERROR: Gravity Forms is not active. Aborting.\n";
	return;
}

$form_id = 8;
$form    = GFAPI::get_form( $form_id );

if ( ! $form || 'Initial Intake' !== $form['title'] ) {
	echo "ERROR: Form {$form_id} is not the 'Initial Intake' form. Aborting.\n";
	return;
}

$remove_ids = array();
foreach ( $form['fields'] as $field ) {
	if ( 'consultation_type' === $field->adminLabel ) {
		$remove_ids[] = (int) $field->id;
	}
	// The "Consultation" section that holds the question.
	if ( 38 === (int) $field->id && 'section' === $field->type && 'Consultation' === $field->label ) {
		$remove_ids[] = 38;
	}
}

if ( ! $remove_ids ) {
	echo "Form {$form_id}: no consultation type field. Skipped.\n";
	return;
}

$fields = array();
foreach ( $form['fields'] as $field ) {
	if ( ! in_array( (int) $field->id, $remove_ids, true ) ) {
		$fields[] = $field;
	}
}

$form['fields'] = $fields;

$result = GFAPI::update_form( $form );

if ( is_wp_error( $result ) ) {
	echo "ERROR: Form {$form_id}: " . $result->get_error_message() . "\n";
	return;
}

echo "Form {$form_id} updated. Removed fields: " . implode( ', ', $remove_ids ) . '. Fields: ' . count( $fields ) . ", nextFieldId: {$form['nextFieldId']}\n";
