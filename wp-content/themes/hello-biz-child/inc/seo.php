<?php
/**
 * SEO additions on top of Rank Math: the area served by the firm, and the attorney's
 * Person entity on the About page.
 *
 * Rank Math builds the firm's LegalService schema from its Local SEO settings. The free
 * version has no "area served" field, so this file adds it. The areas come from the
 * onboarding SOP (Section 7.2): San Francisco, the 7 other counties where the firm has
 * had probate and trust cases, and California for statewide matters.
 *
 * Build record: docs/plans/20261013-seo-rank-math.md
 *
 * @package HelloBizChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Keep the global schema graph (WebSite, the organization, WebPage) on every page.
 *
 * The setup turns the default page schema off, so service pages do not claim to be
 * an Article. Rank Math then also drops the global entities on those pages. This
 * filter keeps them.
 *
 * @return bool
 */
add_filter( 'rank_math/schema/add_global_entities', '__return_true' );

/**
 * The places the firm serves, for the schema.org `areaServed` property.
 *
 * @return array List of schema.org Place entities.
 */
function hlc_seo_area_served() {
	$areas = array(
		array( 'City', 'San Francisco' ),
		array( 'AdministrativeArea', 'San Mateo County' ),
		array( 'AdministrativeArea', 'Alameda County' ),
		array( 'AdministrativeArea', 'Contra Costa County' ),
		array( 'AdministrativeArea', 'Marin County' ),
		array( 'AdministrativeArea', 'Santa Clara County' ),
		array( 'AdministrativeArea', 'Solano County' ),
		array( 'AdministrativeArea', 'San Joaquin County' ),
		array( 'State', 'California' ),
	);

	$places = array();
	foreach ( $areas as $area ) {
		$places[] = array(
			'@type' => $area[0],
			'name'  => $area[1],
		);
	}
	return $places;
}

/**
 * Add `areaServed` to the organization entity in Rank Math's JSON-LD.
 *
 * Rank Math puts the organization under the `publisher` key, with the `@id`
 * `{home}/#organization`. The filter runs late, after Rank Math builds the entity.
 *
 * @param array $data The JSON-LD entities, keyed by name.
 * @return array
 */
function hlc_seo_add_area_served( $data ) {
	if ( ! is_array( $data ) ) {
		return $data;
	}
	foreach ( $data as $key => $entity ) {
		if ( is_array( $entity ) && isset( $entity['@id'] ) && home_url( '/#organization' ) === $entity['@id'] ) {
			$data[ $key ]['areaServed'] = hlc_seo_area_served();
		}
	}
	return $data;
}
add_filter( 'rank_math/json_ld', 'hlc_seo_add_area_served', 99 );

/**
 * Add a Person entity for the attorney on the About page.
 *
 * The person works for the firm (the `#organization` entity), and the About page is
 * about the person. Add the bar number (`hasCredential`) when the firm supplies it.
 *
 * @param array $data The JSON-LD entities, keyed by name.
 * @return array
 */
function hlc_seo_add_attorney_person( $data ) {
	if ( ! is_array( $data ) || ! is_page( 'about' ) ) {
		return $data;
	}

	$person_id = home_url( '/#justin-hedemark' );

	$data['hlcAttorney'] = array(
		'@type'       => 'Person',
		'@id'         => $person_id,
		'name'        => 'Justin Hedemark',
		'jobTitle'    => 'Attorney',
		'description' => 'San Francisco estate planning, probate, and trust administration attorney with more than 10 years in practice, and a licensed real estate agent.',
		'url'         => get_permalink(),
		'worksFor'    => array( '@id' => home_url( '/#organization' ) ),
		'knowsAbout'  => array(
			'Estate planning',
			'Living trusts',
			'Wills',
			'Powers of attorney',
			'Advance health care directives',
			'Special needs trusts',
			'Probate',
			'Trust administration',
			'Real estate',
		),
	);

	// Point the About page's WebPage entity at the person. The page's main image is the
	// attorney's photo, so the person uses it too.
	foreach ( $data as $key => $entity ) {
		if ( is_array( $entity ) && isset( $entity['@id'] ) && get_permalink() . '#webpage' === $entity['@id'] ) {
			$data[ $key ]['about'] = array( '@id' => $person_id );
			if ( ! empty( $entity['primaryImageOfPage'] ) ) {
				$data['hlcAttorney']['image'] = $entity['primaryImageOfPage'];
			}
		}
	}

	return $data;
}
add_filter( 'rank_math/json_ld', 'hlc_seo_add_attorney_person', 99 );
