<?php
/**
 * One-off importer for the "Initial Intake" Gravity Forms triage form.
 *
 * Run once with the Studio CLI:
 *   studio wp eval-file scripts/import-initial-intake-form.php
 *
 * It creates the form, then a draft page that embeds the form with a shortcode.
 * The script stops if a form titled "Initial Intake" already exists, so a
 * second run does not make a duplicate.
 *
 * Source spec: Initial_Intake_Spec.pdf
 * Build record: docs/plans/20260911-initial-intake-gravity-form.md
 */

if ( ! class_exists( 'GFAPI' ) ) {
	echo "ERROR: Gravity Forms is not active. Aborting.\n";
	return;
}

// Guard against a duplicate build.
foreach ( GFAPI::get_forms() as $existing ) {
	if ( 'Initial Intake' === $existing['title'] ) {
		echo "ERROR: A form titled 'Initial Intake' already exists (id {$existing['id']}). Aborting.\n";
		return;
	}
}

/**
 * Helper: a "show" conditional-logic rule set.
 *
 * @param array $rules One or more rule arrays.
 * @return array
 */
function iif_logic( array $rules ) {
	return array(
		'enabled'    => true,
		'actionType' => 'show',
		'logicType'  => 'all',
		'rules'      => $rules,
	);
}

/**
 * Helper: turn a list of labels into Gravity Forms choices.
 *
 * @param array $labels Choice labels; the value equals the label.
 * @return array
 */
function iif_choices( array $labels ) {
	$choices = array();
	foreach ( $labels as $label ) {
		$choices[] = array(
			'text'  => $label,
			'value' => $label,
		);
	}
	return $choices;
}

/**
 * Helper: checkbox inputs that pair with the choices.
 *
 * @param int   $field_id The checkbox field id.
 * @param array $labels   Choice labels.
 * @return array
 */
function iif_checkbox_inputs( $field_id, array $labels ) {
	$inputs = array();
	$i      = 1;
	foreach ( $labels as $label ) {
		$inputs[] = array(
			'id'    => $field_id . '.' . $i,
			'label' => $label,
		);
		$i++;
	}
	return $inputs;
}

$ep = iif_logic( array( array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Estate Planning' ) ) );
$pr = iif_logic( array( array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Probate' ) ) );
$ta = iif_logic( array( array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Trust Administration' ) ) );

$counties = array(
	'Alameda', 'Alpine', 'Amador', 'Butte', 'Calaveras', 'Colusa', 'Contra Costa',
	'Del Norte', 'El Dorado', 'Fresno', 'Glenn', 'Humboldt', 'Imperial', 'Inyo',
	'Kern', 'Kings', 'Lake', 'Lassen', 'Los Angeles', 'Madera', 'Marin', 'Mariposa',
	'Mendocino', 'Merced', 'Modoc', 'Mono', 'Monterey', 'Napa', 'Nevada', 'Orange',
	'Placer', 'Plumas', 'Riverside', 'Sacramento', 'San Benito', 'San Bernardino',
	'San Diego', 'San Francisco', 'San Joaquin', 'San Luis Obispo', 'San Mateo',
	'Santa Barbara', 'Santa Clara', 'Santa Cruz', 'Shasta', 'Sierra', 'Siskiyou',
	'Solano', 'Sonoma', 'Stanislaus', 'Sutter', 'Tehama', 'Trinity', 'Tulare',
	'Tuolumne', 'Ventura', 'Yolo', 'Yuba',
);

$asset_choices = array(
	'Real Estate',
	'Bank or Financial Accounts',
	'Retirement Accounts',
	'Investments (Stocks/Bonds)',
	'Vehicles',
	'Business Interests',
	'Personal Property (jewelry, art, collectibles)',
	'Other',
);

$fields = array();

// ---- Contact block (always visible) ----
$fields[] = array( 'id' => 1, 'type' => 'section', 'label' => 'Contact Information', 'displayOnly' => true );

$fields[] = array(
	'id'         => 2,
	'type'       => 'name',
	'label'      => 'Full Name',
	'isRequired' => true,
	'nameFormat' => 'advanced',
	'inputs'     => array(
		array( 'id' => '2.2', 'label' => 'Prefix', 'isHidden' => true ),
		array( 'id' => '2.3', 'label' => 'First', 'placeholder' => 'John' ),
		// Gravity Forms renders the Middle sub-field only when isHidden is
		// explicitly false; an absent key leaves it hidden (see
		// class-gf-field-name.php).
		array( 'id' => '2.4', 'label' => 'Middle', 'isHidden' => false, 'placeholder' => 'A' ),
		array( 'id' => '2.6', 'label' => 'Last', 'placeholder' => 'Doe' ),
		array( 'id' => '2.8', 'label' => 'Suffix', 'isHidden' => true ),
	),
);

$fields[] = array( 'id' => 3, 'type' => 'email', 'label' => 'Email', 'isRequired' => true, 'placeholder' => 'user@domain.com' );
$fields[] = array( 'id' => 4, 'type' => 'phone', 'label' => 'Contact Number', 'isRequired' => true, 'phoneFormat' => 'standard' );

$fields[] = array( 'id' => 5, 'type' => 'section', 'label' => 'What can we help you with?', 'displayOnly' => true );

$fields[] = array(
	'id'         => 6,
	'type'       => 'radio',
	'label'      => 'What type of matter can we help you with?',
	'isRequired' => true,
	'adminLabel' => 'matter_type',
	'choices'    => iif_choices( array( 'Estate Planning', 'Probate', 'Trust Administration' ) ),
);

// ---- Estate Planning section ----
$fields[] = array( 'id' => 7, 'type' => 'section', 'label' => 'Estate Planning', 'displayOnly' => true, 'conditionalLogic' => $ep );
$fields[] = array( 'id' => 8, 'type' => 'radio', 'label' => 'Is this for an individual, or for you and a spouse/partner?', 'choices' => iif_choices( array( 'Individual', 'Couple' ) ), 'conditionalLogic' => $ep );
$fields[] = array( 'id' => 9, 'type' => 'radio', 'label' => 'Do you have any estate planning documents already?', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $ep );
$fields[] = array( 'id' => 10, 'type' => 'radio', 'label' => 'Do you own real estate?', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $ep );
$fields[] = array( 'id' => 11, 'type' => 'radio', 'label' => 'Do you have any children?', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $ep );
$fields[] = array( 'id' => 12, 'type' => 'radio', 'label' => 'Are you a U.S. citizen?', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $ep );
$fields[] = array( 'id' => 13, 'type' => 'date', 'label' => 'What is your target completion date?', 'dateType' => 'datepicker', 'conditionalLogic' => $ep );

// ---- Probate section ----
$fields[] = array( 'id' => 14, 'type' => 'section', 'label' => 'Probate', 'displayOnly' => true, 'conditionalLogic' => $pr );
$fields[] = array( 'id' => 15, 'type' => 'radio', 'label' => 'Does this involve litigation?', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $pr );
$fields[] = array(
	'id'      => 16,
	'type'    => 'radio',
	'label'   => 'Has a probate case already been filed, or did the decedent have a Will or Trust?',
	'choices' => iif_choices( array(
		'A probate case has already been filed',
		'No case filed — decedent had a Will',
		'No case filed — decedent had a Trust',
		'No case filed — no Will or Trust, or not sure',
	) ),
	'conditionalLogic' => $pr,
);
$fields[] = array( 'id' => 17, 'type' => 'text', 'label' => 'What is your relationship to the decedent?', 'conditionalLogic' => $pr );
$fields[] = array(
	'id'      => 18,
	'type'    => 'checkbox',
	'label'   => 'What kind of assets did they own?',
	'choices' => iif_choices( $asset_choices ),
	'inputs'  => iif_checkbox_inputs( 18, $asset_choices ),
	'conditionalLogic' => $pr,
);
$fields[] = array(
	'id'          => 19,
	'type'        => 'select',
	'label'       => 'Which California county did the decedent reside in?',
	'placeholder' => 'Select a county',
	'choices'     => iif_choices( $counties ),
	'conditionalLogic' => $pr,
);
$fields[] = array( 'id' => 20, 'type' => 'radio', 'label' => 'Are you aware of any deadlines?', 'adminLabel' => 'probate_deadlines', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $pr );
$fields[] = array(
	'id'    => 21,
	'type'  => 'textarea',
	'label' => 'Please describe the deadline(s)',
	'conditionalLogic' => iif_logic( array(
		array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Probate' ),
		array( 'fieldId' => '20', 'operator' => 'is', 'value' => 'Yes' ),
	) ),
);

// ---- Trust Administration section ----
$fields[] = array( 'id' => 22, 'type' => 'section', 'label' => 'Trust Administration', 'displayOnly' => true, 'conditionalLogic' => $ta );
$fields[] = array( 'id' => 23, 'type' => 'radio', 'label' => 'Does this involve litigation or a lawsuit?', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $ta );
$fields[] = array( 'id' => 24, 'type' => 'radio', 'label' => 'Did the decedent have a Will or Trust?', 'choices' => iif_choices( array( 'Will', 'Trust', 'Both', 'Neither, or not sure' ) ), 'conditionalLogic' => $ta );
$fields[] = array( 'id' => 25, 'type' => 'text', 'label' => 'What is your relationship to the decedent?', 'conditionalLogic' => $ta );
$fields[] = array(
	'id'          => 26,
	'type'        => 'select',
	'label'       => 'Which California county did the decedent reside in?',
	'placeholder' => 'Select a county',
	'choices'     => iif_choices( $counties ),
	'conditionalLogic' => $ta,
);
$fields[] = array(
	'id'      => 27,
	'type'    => 'checkbox',
	'label'   => 'What kind of assets did they own?',
	'choices' => iif_choices( $asset_choices ),
	'inputs'  => iif_checkbox_inputs( 27, $asset_choices ),
	'conditionalLogic' => $ta,
);
$fields[] = array( 'id' => 28, 'type' => 'date', 'label' => 'What is your target completion date for this matter?', 'dateType' => 'datepicker', 'conditionalLogic' => $ta );
$fields[] = array( 'id' => 29, 'type' => 'radio', 'label' => 'Are you aware of any deadlines?', 'adminLabel' => 'trust_admin_deadlines', 'choices' => iif_choices( array( 'Yes', 'No' ) ), 'conditionalLogic' => $ta );
$fields[] = array(
	'id'    => 30,
	'type'  => 'textarea',
	'label' => 'Please describe the deadline(s)',
	'conditionalLogic' => iif_logic( array(
		array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Trust Administration' ),
		array( 'fieldId' => '29', 'operator' => 'is', 'value' => 'Yes' ),
	) ),
);

// ---- Shared closing block (always visible) ----
$fields[] = array( 'id' => 31, 'type' => 'section', 'label' => 'Conflict Check', 'displayOnly' => true );
$fields[] = array( 'id' => 32, 'type' => 'textarea', 'label' => 'Please provide the full names of all people involved in this matter, so we can run a required conflict check', 'isRequired' => true );
$fields[] = array( 'id' => 33, 'type' => 'section', 'label' => 'Anything Else', 'displayOnly' => true );
$fields[] = array( 'id' => 34, 'type' => 'textarea', 'label' => "Any additional information you'd like to include?" );

// The inbox that receives new-lead alerts. Change this to the real intake
// address (or a matter-specific inbox per notification below) when ready.
$intake_inbox = '{admin_email}';

$notification_ep_id = uniqid();
$notification_pt_id = uniqid();
$confirmation_id    = uniqid();

$form = array(
	'title'                => 'Initial Intake',
	'description'          => 'Short triage form. It captures a new lead and finds the matter type before the detailed intake goes out.',
	'labelPlacement'       => 'top_label',
	'descriptionPlacement' => 'above',
	'button'               => array( 'type' => 'text', 'text' => 'Submit' ),
	'fields'               => $fields,
	'version'              => GFForms::$version,
	'nextFieldId'          => 35,
	// Two conditional notifications route each submission by matter_type
	// (field 6), so the right inbox gets the full submission and no inbox gets
	// a duplicate. Point each 'to' at its own inbox when routing is needed.
	'notifications'        => array(
		$notification_ep_id => array(
			'id'      => $notification_ep_id,
			'isActive' => true,
			'name'    => 'Estate Planning',
			'event'   => 'form_submission',
			'toType'  => 'email',
			'to'      => $intake_inbox,
			'subject' => 'New Estate Planning lead — {form_title}',
			'message' => '{all_fields}',
			'conditionalLogic' => array(
				'actionType' => 'show',
				'logicType'  => 'all',
				'rules'      => array(
					array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Estate Planning' ),
				),
			),
		),
		$notification_pt_id => array(
			'id'      => $notification_pt_id,
			'isActive' => true,
			'name'    => 'Probate / Trust Administration',
			'event'   => 'form_submission',
			'toType'  => 'email',
			'to'      => $intake_inbox,
			'subject' => 'New Probate / Trust Administration lead — {form_title}',
			'message' => '{all_fields}',
			'conditionalLogic' => array(
				'actionType' => 'show',
				'logicType'  => 'any',
				'rules'      => array(
					array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Probate' ),
					array( 'fieldId' => '6', 'operator' => 'is', 'value' => 'Trust Administration' ),
				),
			),
		),
	),
	'confirmations'        => array(
		$confirmation_id => array(
			'id'        => $confirmation_id,
			'name'      => 'Default Confirmation',
			'isDefault' => true,
			'type'      => 'message',
			'message'   => 'Thanks for contacting us! We will get in touch with you shortly.',
			'url'       => '',
			'pageId'    => '',
			'queryString' => '',
		),
	),
);

$form_id = GFAPI::add_form( $form );

if ( is_wp_error( $form_id ) ) {
	echo 'ERROR adding form: ' . $form_id->get_error_message() . "\n";
	return;
}

echo "Form created. id={$form_id}\n";

// Create the draft page that embeds the form.
$shortcode = '[gravityform id="' . $form_id . '" title="false" description="false" ajax="true"]';
$page_id   = wp_insert_post(
	array(
		'post_title'   => 'Temporary: Gravity Forms Initial Intake',
		'post_content' => $shortcode,
		'post_status'  => 'draft',
		'post_type'    => 'page',
	),
	true
);

if ( is_wp_error( $page_id ) ) {
	echo 'Form is created, but the page failed: ' . $page_id->get_error_message() . "\n";
	return;
}

echo "Page created (draft). id={$page_id}\n";
echo 'Preview: ' . get_permalink( $page_id ) . "\n";
