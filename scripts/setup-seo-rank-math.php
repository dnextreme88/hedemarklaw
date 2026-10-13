<?php
/**
 * One-off setup: Rank Math SEO settings, redirects, page robots, and the SOP keyword map.
 *
 * Run with the Studio CLI, after the plugin is installed and active:
 *   studio wp plugin install seo-by-rank-math --activate
 *   studio wp eval-file scripts/setup-seo-rank-math.php
 *
 * The script finds each page by its path, not by its ID, because the IDs live in the
 * SQLite database and are not the same on production.
 *
 * What it does:
 * - Skips the Rank Math account step (free features need no account).
 * - Turns on the Rank Math modules the site uses and turns off the others.
 * - Sets the organization (LegalService) schema, sitemap, archive, and image settings.
 * - Sets the site tagline and the post permalinks (/blog/%postname%/).
 * - Moves the stale pages (sample-page, book-old) to the trash. It does not delete
 *   them permanently.
 * - Adds 301 redirects for the stale pages and the old dated post URLs.
 * - Sets noindex on the intake form, the /book/ booking steps, and the stub pages.
 * - Sets the title, description, and focus keywords of each page (SOP Section 7).
 *
 * A second run gives the same result. It adds no duplicate redirects.
 *
 * NAP data (address, phone, email, opening hours) is not set here yet. Set it under
 * Rank Math > Titles & Meta > Local SEO when the firm supplies it.
 *
 * Build record: docs/plans/20261013-seo-rank-math.md
 */

if ( ! class_exists( '\RankMath\Helper' ) ) {
	echo "ERROR: Rank Math is not active. Aborting.\n";
	return;
}

/**
 * Helper: find a page by its path, or print an error.
 *
 * @param string $path The page path, for example 'services/probate'.
 * @param string $status Optional post status to look up. Default 'publish'.
 * @return WP_Post|null
 */
function hlc_seo_page( $path, $status = 'publish' ) {
	$page = get_page_by_path( $path, OBJECT, 'page' );
	if ( ! $page || $status !== $page->post_status ) {
		echo "ERROR: No {$status} page at '{$path}'. Skipped.\n";
		return null;
	}
	return $page;
}

/**
 * Helper: add a 301 redirect, unless one with the same source already exists.
 *
 * @param string $pattern    The source pattern.
 * @param string $comparison 'exact' or 'regex'.
 * @param string $url_to     The target URL.
 */
function hlc_seo_redirect( $pattern, $comparison, $url_to ) {
	if ( \RankMath\Redirections\DB::match_redirections_source( $pattern ) ) {
		echo "Redirect '{$pattern}' already exists. Skipped.\n";
		return;
	}
	$redirection = \RankMath\Redirections\Redirection::from(
		array(
			'sources'     => array(
				array(
					'pattern'    => $pattern,
					'comparison' => $comparison,
				),
			),
			'url_to'      => $url_to,
			'header_code' => '301',
		)
	);
	$id = $redirection->save();
	echo $id ? "Redirect '{$pattern}' -> {$url_to} added (id {$id}).\n" : "ERROR: Redirect '{$pattern}' not saved.\n";
}

// 0. Skip the Rank Math account step, the same as "Skip" on its welcome screen. Without
// an account link or this skip, Rank Math prints nothing on the front end. This script
// does the setup wizard's work, so mark the wizard complete too.
update_option( 'rank_math_registration_skip', true );
update_option( 'rank_math_wizard_completed', true );

// 1. Modules.
\RankMath\Helper::update_modules(
	array(
		'seo-analysis'     => 'on',
		'sitemap'          => 'on',
		'rich-snippet'     => 'on',
		'local-seo'        => 'on',
		'redirections'     => 'on',
		'404-monitor'      => 'on',
		'image-seo'        => 'on',
		'link-counter'     => 'on',
		'analytics'        => 'off', // Needs a Google account link. Turn on after go-live.
		'content-ai'       => 'off',
		'instant-indexing' => 'off',
		'ai-visibility'    => 'off',
		'role-manager'     => 'off',
		'woocommerce'      => 'off',
		'buddypress'       => 'off',
		'bbpress'          => 'off',
		'acf'              => 'off',
		'web-stories'      => 'off',
	)
);
echo 'Modules: ' . implode( ', ', get_option( 'rank_math_modules', array() ) ) . "\n";

// 2. Titles & Meta: organization schema, archives, page defaults.
$about = hlc_seo_page( 'about' );
$book  = hlc_seo_page( 'book' );

$titles = get_option( 'rank-math-options-titles', array() );
$titles = array_merge(
	$titles,
	array(
		'knowledgegraph_type'         => 'company',
		'knowledgegraph_name'         => 'Hedemark Law, P.C.',
		'local_business_type'         => 'LegalService',
		'url'                         => home_url( '/' ),
		'opening_hours'               => array(), // The firm has not supplied its hours yet.
		'local_seo_about_page'        => $about ? $about->ID : '',
		'local_seo_contact_page'      => $book ? $book->ID : '',
		'author_custom_robots'        => 'on',
		'author_robots'               => array( 'noindex' ),
		'disable_date_archives'       => 'on',
		'tax_post_tag_custom_robots'  => 'on',
		'tax_post_tag_robots'         => array( 'noindex' ),
		'pt_page_default_rich_snippet' => 'off', // Pages get WebPage schema, not Article.
	)
);
update_option( 'rank-math-options-titles', $titles );
echo "Titles & Meta settings saved.\n";

// 3. General: attachment redirects and image alt fallback.
$general = get_option( 'rank-math-options-general', array() );
$general = array_merge(
	$general,
	array(
		'attachment_redirect_urls'    => 'on',
		'attachment_redirect_default' => home_url( '/' ),
		'add_img_alt'                 => 'on',
		'img_alt_format'              => '%filename%',
	)
);
update_option( 'rank-math-options-general', $general );
echo "General settings saved.\n";

// 4. Sitemap: pages, posts, and categories only.
$sitemap = get_option( 'rank-math-options-sitemap', array() );
$sitemap = array_merge(
	$sitemap,
	array(
		'authors_sitemap'               => 'off',
		'pt_e-floating-buttons_sitemap' => 'off',
		'pt_product_sitemap'            => 'off',
	)
);
update_option( 'rank-math-options-sitemap', $sitemap );
echo "Sitemap settings saved.\n";

// 5. Tagline and permalinks.
update_option( 'blogdescription', 'Estate Planning, Probate & Trust Administration Attorney in San Francisco, CA' );

if ( '/blog/%postname%/' !== get_option( 'permalink_structure' ) ) {
	global $wp_rewrite;
	$wp_rewrite->set_permalink_structure( '/blog/%postname%/' );
	echo "Permalinks set to /blog/%postname%/.\n";
}
flush_rewrite_rules( false );

// Old dated post URLs (/2026/03/07/slug/) go to /blog/slug/. Use [0-9], not \d: Rank
// Math runs stripslashes() on regex patterns, so \d would become a plain "d".
hlc_seo_redirect( '^[0-9]{4}/[0-9]{2}/[0-9]{2}/([^/]+)/?$', 'regex', home_url( '/blog/$1/' ) );

// 6. Stale pages: move to the trash and redirect.
$stale = array(
	'sample-page' => array( 'Sample Page', home_url( '/' ) ),
	'book-old'    => array( 'Book a Free Consultation', home_url( '/book/' ) ),
);
foreach ( $stale as $path => $data ) {
	list( $title, $target ) = $data;
	$page = get_page_by_path( $path, OBJECT, 'page' );
	if ( $page && 'trash' !== $page->post_status ) {
		if ( $title !== $page->post_title ) {
			echo "ERROR: '{$path}' is not the '{$title}' page. Not trashed.\n";
			continue;
		}
		wp_trash_post( $page->ID ); // Trash only. Emptying the trash is a manual step.
		echo "Page '{$path}' (id {$page->ID}) moved to the trash.\n";
	}
	hlc_seo_redirect( $path, 'exact', $target );
}

// 7. Robots. Rank Math leaves noindex pages out of the sitemap.
$robots = array(
	// Form and booking steps: never in search.
	'estate-planning-intake-form'       => array( 'noindex', 'nofollow' ),
	'book/estate-planning'              => array( 'noindex', 'nofollow' ),
	'book/probate'                      => array( 'noindex', 'nofollow' ),
	'book/trust-administration'         => array( 'noindex', 'nofollow' ),
	// Stub pages ("Under construction..."): noindex until the content is published.
	// Remove the entry (or set 'index' in the Rank Math panel) when a page goes live.
	'services/estate-planning'          => array( 'noindex' ),
	'services/probate'                  => array( 'noindex' ),
	'services/trust-administration'     => array( 'noindex' ),
	'real-estate'                       => array( 'noindex' ),
	'estate-law'                        => array( 'noindex' ),
	'out-of-state-executors-heirs'      => array( 'noindex' ),
);
foreach ( $robots as $path => $value ) {
	$page = hlc_seo_page( $path );
	if ( $page ) {
		update_post_meta( $page->ID, 'rank_math_robots', $value );
		echo "Robots '{$path}': " . implode( ', ', $value ) . "\n";
	}
}

// 8. Keyword map (SOP Section 7.6). Focus keywords: primary first, then secondaries.
// Each primary keyword belongs to one page only, so the pages do not compete.
$seo = array(
	''                              => array(
		'title'    => 'Estate Planning Attorney San Francisco, Probate & Trusts %sep% %sitename%',
		'desc'     => 'Estate planning, probate, and trust administration attorney in San Francisco, CA, and a licensed realtor for inherited property. Book a free consultation.',
		'keywords' => array( 'estate planning attorney San Francisco', 'probate attorney San Francisco', 'trust administration attorney San Francisco', 'boutique estate planning law firm San Francisco' ),
	),
	'services/estate-planning'      => array(
		'title'    => 'Estate Planning Lawyer San Francisco CA: Wills & Trusts %sep% %sitename%',
		'desc'     => 'Living trusts, wills, powers of attorney, and advance health care directives from a San Francisco estate planning lawyer. Book a free consultation.',
		'keywords' => array( 'estate planning lawyer San Francisco CA', 'living trust lawyer San Francisco', 'will attorney San Francisco', 'wills and trusts attorney San Francisco', 'California estate planning attorney' ),
	),
	'services/probate'              => array(
		'title'    => 'Probate Lawyer San Francisco CA & Bay Area Counties %sep% %sitename%',
		'desc'     => 'Probate lawyer for San Francisco, the Bay Area, and all of California, with help for executors who live out of state. Book a free consultation.',
		'keywords' => array( 'probate lawyer San Francisco CA', 'California probate attorney', 'probate real estate attorney San Francisco', 'California probate attorney for out-of-state executors' ),
	),
	'services/trust-administration' => array(
		'title'    => 'Trust Administration Attorney San Francisco %sep% %sitename%',
		'desc'     => 'Help for successor trustees in San Francisco and across California: notices to beneficiaries, trust property sales, and distributions. Book a free consultation.',
		'keywords' => array( 'trust administration attorney San Francisco', 'successor trustee attorney California', 'California trust administration attorney', 'trust administration attorney Santa Clara County' ),
	),
	'out-of-state-executors-heirs'  => array(
		'title'    => 'California Probate Attorney for Relatives Living Out of State %sep% %sitename%',
		'desc'     => 'Live outside California? A San Francisco probate attorney handles California probate remotely for out-of-state executors and heirs. Book a free consultation.',
		'keywords' => array( 'California probate attorney for relatives living out of state', 'executor lives out of state California probate process', 'remote probate administration California attorney', 'California probate for non-resident heirs' ),
	),
	'real-estate'                   => array(
		'title'    => 'Attorney and Realtor for Inherited Property San Francisco %sep% %sitename%',
		'desc'     => 'Sell inherited, probate, or trust property in San Francisco with one advisor who is both an estate attorney and a licensed realtor. Book a free consultation.',
		'keywords' => array( 'attorney and realtor for inherited property San Francisco', 'selling a house in probate San Francisco', 'trust property sale attorney San Francisco', 'dual-licensed attorney realtor California probate', 'off-market estate sale attorney California' ),
	),
	'estate-law'                    => array(
		'title'    => 'Estate Planning Attorney Who Is Also a Realtor, San Francisco %sep% %sitename%',
		'desc'     => 'Put California real estate into a living trust and title it the right way. Estate planning for real estate investors and landlords. Book a free consultation.',
		'keywords' => array( 'estate planning attorney who is also a realtor San Francisco', 'transferring real property into a living trust California', 'how to title real estate in a California trust', 'estate planning for real estate investors San Francisco', 'estate planning for rental property owners California' ),
	),
	'services'                      => array(
		'title'    => 'Estate Planning, Probate & Trust Services in San Francisco %sep% %sitename%',
		'desc'     => 'Estate planning, probate, and trust administration services in San Francisco and across California, plus real estate help for estates. Book a free consultation.',
		'keywords' => array( 'estate planning and probate services San Francisco' ),
	),
	'blog'                          => array(
		'title'    => 'California Estate Planning & Probate Blog %sep% %sitename%',
		'desc'     => 'Articles on California estate planning, probate, and trust administration: wills, living trusts, executors, and inherited property, kept up to date.',
		'keywords' => array( 'California estate planning and probate blog' ),
	),
	'pricing'                       => array(
		'title'    => 'How Much Does Estate Planning Cost in San Francisco? %sep% %sitename%',
		'desc'     => 'Fees for estate planning, probate, and trust administration in San Francisco: price ranges, California statutory probate fees, and hourly rates.',
		'keywords' => array( 'how much does estate planning cost in San Francisco', 'how much does probate cost in California' ),
	),
	'pricing/estate-planning'       => array(
		'title'    => 'Estate Planning Cost San Francisco: Wills & Trust Prices %sep% %sitename%',
		'desc'     => 'Estate planning in San Francisco usually costs $2,000 to $7,000, from a simple will to a full trust package with POA and AHCD. Book a free consultation.',
		'keywords' => array( 'estate planning cost San Francisco' ),
	),
	'pricing/probate'               => array(
		'title'    => 'California Probate Attorney Fees & Fee Calculator %sep% %sitename%',
		'desc'     => 'California probate attorney fees are set by statute (Probate Code 10810). Estimate your statutory fee with our calculator. Book a free consultation.',
		'keywords' => array( 'California probate attorney fees', 'probate fee calculator California' ),
	),
	'pricing/trust-administration'  => array(
		'title'    => 'Trust Administration Attorney Fees California %sep% %sitename%',
		'desc'     => 'Trust administration is billed hourly: senior attorneys $500, paralegals $195, and law clerks $145 per hour. See what is included. Book a free consultation.',
		'keywords' => array( 'trust administration attorney fees California' ),
	),
	'book'                          => array(
		'title'    => 'Free Consultation, Estate Planning Attorney San Francisco %sep% %sitename%',
		'desc'     => 'Book a free consultation with a San Francisco estate planning, probate, and trust administration attorney. Answer a few questions, then pick a time.',
		'keywords' => array( 'free consultation estate planning attorney San Francisco' ),
	),
	'faqs'                          => array(
		'title'    => 'Estate Planning & Probate FAQ, California %sep% %sitename%',
		'desc'     => 'Plain answers to common California estate planning, probate, and trust administration questions, from wills and trusts to out-of-state executors.',
		'keywords' => array( 'estate planning and probate FAQ California' ),
	),
	'about'                         => array(
		'title'    => 'Justin Hedemark, Estate Planning Attorney & Realtor %sep% %sitename%',
		'desc'     => 'Justin Hedemark is a San Francisco estate planning, probate, and trust attorney with 10+ years in practice, and a licensed realtor. Book a free consultation.',
		'keywords' => array( 'estate planning attorney and realtor San Francisco', 'Justin Hedemark' ),
	),
);

$primaries = array();
foreach ( $seo as $path => $meta ) {
	$page = '' === $path ? get_post( (int) get_option( 'page_on_front' ) ) : hlc_seo_page( $path );
	if ( ! $page ) {
		continue;
	}

	$primary = strtolower( $meta['keywords'][0] );
	if ( isset( $primaries[ $primary ] ) ) {
		echo "ERROR: Primary keyword '{$primary}' repeats ('{$primaries[ $primary ]}' and '{$path}'). Skipped.\n";
		continue;
	}
	$primaries[ $primary ] = $path;

	update_post_meta( $page->ID, 'rank_math_title', $meta['title'] );
	update_post_meta( $page->ID, 'rank_math_description', $meta['desc'] );
	update_post_meta( $page->ID, 'rank_math_focus_keyword', implode( ',', $meta['keywords'] ) );

	$length = strlen( $meta['desc'] );
	$note   = ( $length < 120 || $length > 160 ) ? " (check: description is {$length} characters)" : '';
	echo 'SEO meta: /' . $path . " (id {$page->ID}){$note}\n";
}

echo "Done.\n";
