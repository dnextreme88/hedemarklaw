<?php
/**
 * One-off migration: replace the "Under construction..." content on the three Firm pages.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/fill-firm-pages-20261123.php
 *
 * Pages (see docs/plans/20261123-firm-pages-content.md):
 *
 * - /real-estate/                   — the sale side of SOP 7.2c (attorney and licensed agent).
 * - /estate-law/                    — the planning side of SOP 7.2c (real estate in a trust).
 * - /out-of-state-executors-heirs/  — remote probate for executors and heirs outside California.
 *
 * Each page gets: a title-only hero (the page title as the h1), an intro section (the
 * headline as an h2 and a lead paragraph), a row of three cards, a "how it works" section
 * with an ordered list, a note box, and the shared consultation band. The layout reuses
 * the settings and the CSS classes of the Pricing page (hp-dotgrid, hp-measure,
 * hp-cards-row, hp-card, hp-note, hp-inlink, hp-cta).
 *
 * The script also removes the Rank Math noindex from the three pages, because they now
 * have real content (see docs/plans/20261013-seo-rank-math.md, "Robots").
 *
 * The script saves through Elementor (a revision per page and a CSS rebuild). A page is
 * rebuilt only while it shows "Under construction..." or holds this script's own hero. A
 * page whose content already matches is skipped, so a second run changes nothing.
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

require_once __DIR__ . '/lib/page-builder.php';

/* ---------------------------------------------------------------------
   Page content
   --------------------------------------------------------------------- */

$pages = array(

	'real-estate' => array(
		'headline' => 'Attorney and real estate agent for inherited property in San Francisco',
		'intro' => '<p>Selling a house after a death is a legal job and a real estate job at the same time. Justin Hedemark is an estate attorney and a licensed real estate agent, so you get both from one person, with one plan and one point of contact.</p>',
		'cards_title' => 'How we help with inherited property',
		'cards_lead'  => '<p>Most families come to us with a house in a probate estate or a trust, and a question: keep it, sell it, or give it to the heirs?</p>',
		'cards' => array(
			array(
				'title'      => 'Selling a house in probate',
				'text'       => 'We handle the court side and the sale side together. Depending on the authority the court gives the executor, a sale either goes ahead after notice to the heirs or needs court confirmation. We tell you which applies before the house goes on the market.',
				'link'       => '/pricing/probate/',
				'link_label' => 'Probate fees',
				'more'       => 'Estimate probate fees',
			),
			array(
				'title'      => 'Selling trust property',
				'text'       => 'A successor trustee can usually sell without court involvement, but still has duties to every beneficiary. We help you value, prepare, and sell the property, and keep the records the beneficiaries are entitled to see.',
				'link'       => '/pricing/trust-administration/',
				'link_label' => 'Trust administration rates',
				'more'       => 'View trust administration rates',
			),
			array(
				'title' => 'Private and off-market sales',
				'text'  => 'Not every estate sale needs a public listing. When it suits the family, for example a sale to a relative, a tenant, or a neighbor, we can arrange a private sale and handle the legal steps that go with it.',
			),
		),
		'steps_title' => 'How a sale works with us',
		'steps_body'  => '<ol><li><strong>Free 20-minute call.</strong> Tell us about the property, the estate or trust, and the people involved.</li><li><strong>Authority first.</strong> We confirm who has legal authority to sell: an executor through the probate court, or a successor trustee under the trust.</li><li><strong>Value and prepare.</strong> We get a value for the property, and work with our network of CPAs, contractors, and other professionals to prepare it.</li><li><strong>Sell.</strong> We list the property or arrange a private sale, and give the heirs or beneficiaries the notices the law requires.</li><li><strong>Close and distribute.</strong> We close the sale and account for the proceeds in the estate or trust.</li></ol>',
		'note'        => '<p style="margin:0"><strong>You choose the services you need.</strong> Our legal work and our real estate services are separate. Before we start, we explain how each one is billed. <strong>Live outside California?</strong> See <a class="hp-inlink" href="/out-of-state-executors-heirs/">Out-of-State Executors &amp; Heirs</a>.</p>',
	),

	'estate-law' => array(
		'headline' => 'Estate planning for California real estate owners',
		'intro' => '<p>For most families, real estate is the largest part of the estate. How the property is titled decides what happens to it. Justin Hedemark is an estate planning attorney and a licensed real estate agent, so your plan and your property records match.</p>',
		'cards_title' => 'Real estate in your estate plan',
		'cards_lead'  => '',
		'cards' => array(
			array(
				'title'      => 'Put your property into a living trust',
				'text'       => 'A trust only avoids probate for property that is in it. We prepare and record the deed that moves your home or rental into your revocable living trust, so that the trust does what you set it up to do.',
				'link'       => '/pricing/estate-planning/',
				'link_label' => 'Estate planning pricing',
				'more'       => 'View estate planning pricing',
			),
			array(
				'title' => 'Title it the right way',
				'text'  => 'Joint tenancy, community property, community property with right of survivorship, or a trust: each one gives a different result at death and for taxes. We review how your property is titled now and fix what does not fit your plan.',
			),
			array(
				'title' => 'Investors and landlords',
				'text'  => 'Rental property, more than one property, or property in another state each need a plan of their own. We coordinate your trust with your leases and your CPA, and help you avoid a second probate in another state.',
			),
		),
		'steps_title' => 'What we review with you',
		'steps_body'  => '<ol><li><strong>Every property you own,</strong> in California and in other states, and how each one is titled today.</li><li><strong>Who should receive each property,</strong> and who should manage it if you cannot.</li><li><strong>Property tax.</strong> A transfer between parents and children can lead to a new property tax assessment. We explain what applies to your family.</li><li><strong>The deeds.</strong> We prepare and record the deeds that put your plan into effect.</li></ol>',
		'note'        => '<p style="margin:0"><strong>Selling property after a death instead?</strong> See <a class="hp-inlink" href="/real-estate/">Real Estate</a> for probate and trust sales.</p>',
	),

	'out-of-state-executors-heirs' => array(
		'headline' => 'California probate for executors and heirs who live out of state',
		'intro' => '<p>"I live in Ohio, and my mom died owning a house in San Francisco." We hear this often. You usually do not need to travel to settle a California estate. We handle the local work, and you approve each step from home.</p>',
		'cards_title' => 'Settling a California estate from out of state',
		'cards_lead'  => '',
		'cards' => array(
			array(
				'title' => 'Remote from start to finish',
				'text'  => 'Consultations by phone or Zoom. Documents signed electronically or by mail. Regular updates by email or phone, so you always know where the estate stands.',
			),
			array(
				'title'      => 'Executors and trustees outside California',
				'text'       => 'A California court can appoint an executor who lives in another state. The court may ask for a bond, and you must give the court a permanent address. We prepare the filings and appear in court for you.',
				'link'       => '/pricing/probate/',
				'link_label' => 'Probate fees',
				'more'       => 'Estimate probate fees',
			),
			array(
				'title'      => 'Property you cannot visit',
				'text'       => 'Justin is also a licensed real estate agent. We secure, value, and sell or transfer the house or condo, with our local network of CPAs and other professionals.',
				'link'       => '/real-estate/',
				'link_label' => 'Real estate for inherited property',
				'more'       => 'Inherited property',
			),
		),
		'steps_title' => 'How remote probate works',
		'steps_body'  => '<ol><li><strong>Free 20-minute call.</strong> By phone or Zoom. Tell us what you know about the estate. A will or trust is helpful, but not required to start.</li><li><strong>Review.</strong> We find out if probate is needed, if a trust covers the assets, or if a simpler small-estate process applies.</li><li><strong>Filings.</strong> We file in the right county court. We work in San Francisco, San Mateo, Alameda, Contra Costa, Marin, Santa Clara, Solano, San Joaquin, and all of California.</li><li><strong>Property and accounts.</strong> We secure the property, collect the assets, and pay the debts and taxes of the estate.</li><li><strong>Distribution.</strong> We close the estate and send each heir their share, wherever they live.</li></ol><p><strong>Heirs:</strong> if you are named in a will or trust, or you are next of kin, you have a right to notice. We can explain what you are entitled to and when.</p>',
		'note'        => '<p style="margin:0"><strong>Not sure if probate is needed?</strong> Smaller estates can use a simpler process. See the current thresholds on <a class="hp-inlink" href="/pricing/probate/">Probate pricing</a>.</p>',
	),
);

/* ---------------------------------------------------------------------
   Build and save
   --------------------------------------------------------------------- */

foreach ( $pages as $slug => $c ) {
	hlc_fp_save_page(
		$slug,
		function ( $page ) use ( $slug, $c ) {
			return array(
				hlc_fp_hero( $slug, $page->post_title ),
				hlc_fp_intro_section( $slug, $c['headline'], $c['intro'] ),
				hlc_fp_cards_section( $slug, $c['cards_title'], $c['cards_lead'], $c['cards'] ),
				hlc_fp_steps_section( $slug, $c['steps_title'], $c['steps_body'], $c['note'] ),
			);
		}
	);
}
