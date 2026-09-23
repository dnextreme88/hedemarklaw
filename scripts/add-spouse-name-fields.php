<?php
/**
 * One-off migration: add the spouse name fields to the "Initial Intake" form.
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/add-spouse-name-fields.php
 *
 * It adds three required Single Line Text fields (Spouse First, Middle, and
 * Last Name) directly after field 8 ("Is this for an individual, or for you and
 * a spouse/partner?"). They show only when field 6 is "Estate Planning" and
 * field 8 is "Couple". The Zapier Zap and the Dropbox folder structure use them.
 *
 * Each field spans 4 of the 12 grid columns, so the three share one row. The
 * placeholders are "Jane", "B", and "Doe".
 *
 * If the fields already exist, the script does not add them again. It only sets
 * their column span and placeholders, so a second run makes no duplicate.
 *
 * Build record: docs/plans/20260923-initial-intake-spouse-name-fields.md
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

// Field id => label, Admin Label, placeholder. The placeholders follow the
// "John / A / Doe" style of the Full Name field.
$spouse_fields = array(
	35 => array( 'Spouse First Name', 'spouse_first_name', 'Jane' ),
	36 => array( 'Spouse Middle Name', 'spouse_middle_name', 'B' ),
	37 => array( 'Spouse Last Name', 'spouse_last_name', 'Doe' ),
);

// On a second run, do not add the fields again. Only make sure that they share
// one row of three columns (4 of the 12 grid columns each), like the Full Name
// field, and that they have their placeholders.
$existing = 0;
foreach ( $form['fields'] as $field ) {
	foreach ( $spouse_fields as $def ) {
		if ( $def[1] === $field->adminLabel ) {
			$field->layoutGridColumnSpan = 4;
			$field->placeholder          = $def[2];
			$existing++;
		}
	}
}

if ( $existing ) {
	$result = GFAPI::update_form( $form );
	if ( is_wp_error( $result ) ) {
		echo 'ERROR updating form: ' . $result->get_error_message() . "\n";
		return;
	}
	echo "The spouse name fields already exist. Updated the width and placeholder of {$existing} of them.\n";
	return;
}

$ep_couple = array(
	'enabled'    => true,
	'actionType' => 'show',
	'logicType'  => 'all',
	'rules'      => array(
		array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Estate Planning' ),
		array( 'fieldId' => '8', 'operator' => 'is', 'value' => 'Couple' ),
	),
);

$new_fields = array();
foreach ( $spouse_fields as $id => $def ) {
	$new_fields[] = GF_Fields::create(
		array(
			'id'               => $id,
			'formId'           => $form_id,
			'type'             => 'text',
			'label'            => $def[0],
			'adminLabel'       => $def[1],
			'placeholder'      => $def[2],
			'isRequired'       => true,
			'conditionalLogic' => $ep_couple,
			// One row of three columns, like the Full Name field.
			'layoutGridColumnSpan' => 4,
		)
	);
}

// Put the new fields directly after field 8.
$fields = array();
$placed = false;
foreach ( $form['fields'] as $field ) {
	$fields[] = $field;
	if ( 8 === (int) $field->id ) {
		$fields = array_merge( $fields, $new_fields );
		$placed = true;
	}
}

if ( ! $placed ) {
	echo "ERROR: Field 8 was not found. Aborting.\n";
	return;
}

$form['fields']      = $fields;
$form['nextFieldId'] = max( (int) $form['nextFieldId'], 38 );

$result = GFAPI::update_form( $form );

if ( is_wp_error( $result ) ) {
	echo 'ERROR updating form: ' . $result->get_error_message() . "\n";
	return;
}

echo 'Form updated. Fields: ' . count( $fields ) . ", nextFieldId: {$form['nextFieldId']}\n";
