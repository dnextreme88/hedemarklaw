<?php
/**
 * One-off migration: add the consultation type question to the "Initial Intake" form.
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/add-consultation-type-field.php
 *
 * It adds a "Consultation" section (field 38) and a required radio field (field 39,
 * "What kind of consultation would you like?") with the choices Phone Call and Zoom
 * Meeting. Both go directly before field 31 (the "Conflict Check" section). They
 * have no conditional logic, so they show for every matter type.
 *
 * If the question already exists, the script stops, so a second run makes no
 * duplicate.
 *
 * Build record: docs/plans/20261007-initial-intake-consultation-type.md
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

// On a second run, do not add the fields again.
foreach ( $form['fields'] as $field ) {
	if ( 'consultation_type' === $field->adminLabel ) {
		echo "The consultation type question already exists (field {$field->id}). Nothing to do.\n";
		return;
	}
}

$choices = array();
foreach ( array( 'Phone Call', 'Zoom Meeting' ) as $label ) {
	$choices[] = array(
		'text'  => $label,
		'value' => $label,
	);
}

$new_fields = array(
	GF_Fields::create(
		array(
			'id'          => 38,
			'formId'      => $form_id,
			'type'        => 'section',
			'label'       => 'Consultation',
			'displayOnly' => true,
		)
	),
	GF_Fields::create(
		array(
			'id'         => 39,
			'formId'     => $form_id,
			'type'       => 'radio',
			'label'      => 'What kind of consultation would you like?',
			'adminLabel' => 'consultation_type',
			'isRequired' => true,
			'choices'    => $choices,
		)
	),
);

// Put the new fields directly before field 31 (the "Conflict Check" section).
$fields = array();
$placed = false;
foreach ( $form['fields'] as $field ) {
	if ( 31 === (int) $field->id ) {
		$fields = array_merge( $fields, $new_fields );
		$placed = true;
	}
	$fields[] = $field;
}

if ( ! $placed ) {
	echo "ERROR: Field 31 was not found. Aborting.\n";
	return;
}

$form['fields']      = $fields;
$form['nextFieldId'] = max( (int) $form['nextFieldId'], 40 );

$result = GFAPI::update_form( $form );

if ( is_wp_error( $result ) ) {
	echo 'ERROR updating form: ' . $result->get_error_message() . "\n";
	return;
}

echo 'Form updated. Fields: ' . count( $fields ) . ", nextFieldId: {$form['nextFieldId']}\n";
