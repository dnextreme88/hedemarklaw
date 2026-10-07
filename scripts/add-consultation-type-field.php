<?php
/**
 * One-off migration: add the consultation type question to the four booking forms.
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/add-consultation-type-field.php
 *
 * It adds a required radio field, "What kind of consultation would you like?", with
 * the choices Phone Call and Zoom Meeting, and the Admin Label `consultation_type`.
 * The answer picks the Calendly event (see hlc_calendly_url() in the child theme).
 *
 * - Form 8 ("Initial Intake"): a "Consultation" section (field 38) and the question
 *   (field 39), directly before field 31 (the "Conflict Check" section).
 * - Forms 5, 6, 7 (the Stage 1 forms): the question only, because these forms have no
 *   sections. It goes directly before the conflict check field, and takes the form's
 *   next free field id.
 *
 * The fields have no conditional logic, so they show for every visitor.
 *
 * If a form already has the question, the script skips that form, so a second run
 * makes no duplicate.
 *
 * Build record: docs/plans/20261007-initial-intake-consultation-type.md
 */

if ( ! class_exists( 'GFAPI' ) ) {
	echo "ERROR: Gravity Forms is not active. Aborting.\n";
	return;
}

$choices = array();
foreach ( array( 'Phone Call', 'Zoom Meeting' ) as $label ) {
	$choices[] = array(
		'text'  => $label,
		'value' => $label,
	);
}

/**
 * Helper: the consultation type radio field.
 *
 * @param int   $form_id  The form id.
 * @param int   $field_id The new field id.
 * @param array $choices  The radio choices.
 * @return GF_Field
 */
function hlc_consultation_type_field( $form_id, $field_id, array $choices ) {
	return GF_Fields::create(
		array(
			'id'         => $field_id,
			'formId'     => $form_id,
			'type'       => 'radio',
			'label'      => 'What kind of consultation would you like?',
			'adminLabel' => 'consultation_type',
			'isRequired' => true,
			'choices'    => $choices,
		)
	);
}

// Form id => expected title.
$targets = array(
	8 => 'Initial Intake',
	7 => 'Stage 1 Initial Intake - Estate Planning',
	6 => 'Stage 1 Initial Intake - Probate',
	5 => 'Stage 1 Initial Intake - Trust Administration',
);

foreach ( $targets as $form_id => $title ) {
	$form = GFAPI::get_form( $form_id );

	if ( ! $form || $title !== $form['title'] ) {
		echo "ERROR: Form {$form_id} is not the '{$title}' form. Skipped.\n";
		continue;
	}

	// On a second run, do not add the fields again.
	$exists = false;
	foreach ( $form['fields'] as $field ) {
		if ( 'consultation_type' === $field->adminLabel ) {
			echo "Form {$form_id}: the question already exists (field {$field->id}). Skipped.\n";
			$exists = true;
			break;
		}
	}
	if ( $exists ) {
		continue;
	}

	if ( 8 === $form_id ) {
		// Fixed ids, so they match the importer (scripts/import-initial-intake-form.php).
		$new_fields    = array(
			GF_Fields::create(
				array(
					'id'          => 38,
					'formId'      => $form_id,
					'type'        => 'section',
					'label'       => 'Consultation',
					'displayOnly' => true,
				)
			),
			hlc_consultation_type_field( $form_id, 39, $choices ),
		);
		$next_field_id = 40;
		$is_anchor     = function ( $field ) {
			return 31 === (int) $field->id; // The "Conflict Check" section.
		};
	} else {
		$new_id        = (int) $form['nextFieldId'];
		$new_fields    = array( hlc_consultation_type_field( $form_id, $new_id, $choices ) );
		$next_field_id = $new_id + 1;
		$is_anchor     = function ( $field ) {
			return false !== stripos( (string) $field->label, 'conflict check' );
		};
	}

	// Put the new fields directly before the anchor field.
	$fields = array();
	$placed = false;
	foreach ( $form['fields'] as $field ) {
		if ( ! $placed && $is_anchor( $field ) ) {
			$fields = array_merge( $fields, $new_fields );
			$placed = true;
		}
		$fields[] = $field;
	}

	if ( ! $placed ) {
		echo "ERROR: Form {$form_id}: the conflict check field was not found. Skipped.\n";
		continue;
	}

	$form['fields']      = $fields;
	$form['nextFieldId'] = max( (int) $form['nextFieldId'], $next_field_id );

	$result = GFAPI::update_form( $form );

	if ( is_wp_error( $result ) ) {
		echo "ERROR: Form {$form_id}: " . $result->get_error_message() . "\n";
		continue;
	}

	echo "Form {$form_id} updated. Fields: " . count( $fields ) . ", nextFieldId: {$form['nextFieldId']}\n";
}
