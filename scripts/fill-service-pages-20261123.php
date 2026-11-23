<?php
/**
 * One-off migration: replace the "Under construction..." content on the three service
 * detail pages.
 *
 * Run with the Studio CLI:
 *   studio wp eval-file scripts/fill-service-pages-20261123.php
 *
 * Pages (see docs/plans/20261123-service-pages-content.md and the keyword map in
 * docs/plans/20261013-seo-rank-math.md):
 *
 * - /services/estate-planning/      — the documents in a plan, and plans for each family type.
 * - /services/probate/              — how probate works, one card per county, related help.
 * - /services/trust-administration/ — successor trustee duties, timeline, related help.
 *
 * Each page gets a title-only hero (the page title as the h1), then its sections in the
 * 1280px box, so the content lines up with the header logo and nav. The page keeps its
 * "Free 20-minute consultation" band at the end. The layout comes from
 * scripts/lib/page-builder.php, the same builder as the Firm pages.
 *
 * The script saves through Elementor (a revision per page and a CSS rebuild) and sets Rank
 * Math robots to index. A page whose content already matches is skipped, so a second run
 * changes nothing.
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
   /services/estate-planning/
   --------------------------------------------------------------------- */

hlc_fp_save_page(
	'services/estate-planning',
	function ( $page ) {
		$slug = 'services/estate-planning';
		return array(
			hlc_fp_hero( $slug, $page->post_title ),
			hlc_fp_intro_section(
				$slug,
				'Estate planning lawyer in San Francisco',
				'<p>An estate plan decides who receives what you own, who manages it, and who makes decisions for you and your children if you cannot. Justin Hedemark prepares complete California estate plans: living trusts, wills, powers of attorney, and health care directives. Every plan starts with a conversation about your family, not a form.</p>'
			),
			hlc_fp_cards_section(
				$slug,
				'The documents in your plan',
				'<p>Most plans use some or all of these documents. We explain what each one does, and you choose what your family needs.</p>',
				array(
					array(
						'title' => 'Revocable living trust',
						'text'  => 'The center of most California plans. Property held in the trust passes to your beneficiaries without probate, and you keep full control while you are alive.',
					),
					array(
						'title' => 'Will and pour-over will',
						'text'  => 'A pour-over will moves anything left outside your trust into it at your death. A will is also where you name a guardian for your minor children.',
					),
					array(
						'title' => 'Durable power of attorney',
						'text'  => 'Names the person who manages your finances if you cannot, so your family does not need a court conservatorship to pay your bills.',
					),
					array(
						'title' => 'Advance health care directive',
						'text'  => 'Names the person who makes medical decisions for you, and records your wishes for care at the end of life.',
					),
					array(
						'title' => 'Special needs trust',
						'text'  => 'Provides for a family member with a disability without putting their eligibility for public benefits such as SSI and Medi-Cal at risk.',
					),
					array(
						'title' => 'Guardianship nomination',
						'text'  => 'Names who should raise your children if neither parent can. Without it, a court decides with no word from you.',
					),
				),
				3,
				'cards'
			),
			hlc_fp_cards_section(
				$slug,
				'Plans for every kind of family',
				'',
				array(
					array(
						'title' => 'Married couples',
						'text'  => 'A joint trust that cares for the surviving spouse first, then passes to your children or other beneficiaries.',
					),
					array(
						'title' => 'Blended families',
						'text'  => 'A plan that provides for your spouse and still protects what you want to leave to children from an earlier relationship.',
					),
					array(
						'title' => 'Unmarried couples',
						'text'  => 'California law gives an unmarried partner few automatic rights. Your trust, powers of attorney, and health care directive fill that gap.',
					),
					array(
						'title' => 'Parents with minor children',
						'text'  => 'A guardian for your children, and a trust that manages their inheritance until they are old enough to receive it.',
					),
				),
				4,
				'families'
			),
			hlc_fp_steps_section(
				$slug,
				'How the process works',
				'<ol><li><strong>Free 20-minute call.</strong> By phone or Zoom. Tell us about your family and what you want to protect.</li><li><strong>Design meeting.</strong> We go through your assets, your beneficiaries, and the people you trust to act for you.</li><li><strong>Drafts.</strong> We prepare your documents and explain each one in plain language. You review them and ask for changes.</li><li><strong>Signing.</strong> You sign with a notary and witnesses, as California law requires.</li><li><strong>Funding.</strong> We help you move your home and accounts into the trust, so the trust actually avoids probate.</li></ol>',
				'<p style="margin:0"><strong>What does it cost?</strong> Most plans fall in the range on <a class="hp-inlink" href="/pricing/estate-planning/">Estate Planning pricing</a>. <strong>Own real estate or rentals?</strong> See <a class="hp-inlink" href="/estate-law/">Estate Law</a> for how to title property in your trust.</p>'
			),
		);
	}
);

/* ---------------------------------------------------------------------
   /services/probate/
   --------------------------------------------------------------------- */

$hlc_counties = array(
	'San Francisco' => 'Our home county. We handle probate for San Francisco homes, condos, and accounts, and know the local court process well.',
	'San Mateo'     => 'Probate for estates in San Mateo County, from Daly City to Menlo Park, including the sale of estate property.',
	'Alameda'       => 'Probate for estates in Oakland, Berkeley, Fremont, and the rest of Alameda County.',
	'Contra Costa'  => 'Probate for estates in Walnut Creek, Concord, Richmond, and across Contra Costa County.',
	'Marin'         => 'Probate for estates in San Rafael, Novato, Mill Valley, and the rest of Marin County.',
	'Santa Clara'   => 'Probate for estates in San Jose, Palo Alto, Sunnyvale, and across Santa Clara County.',
	'Solano'        => 'Probate for estates in Vallejo, Fairfield, Vacaville, and the rest of Solano County.',
	'San Joaquin'   => 'Probate for estates in Stockton, Tracy, Lodi, and across San Joaquin County.',
);
$hlc_county_cards = array();
foreach ( $hlc_counties as $county => $text ) {
	$hlc_county_cards[] = array(
		'title' => "$county County",
		'text'  => $text . " We file in the Superior Court of California, County of $county.",
	);
}

hlc_fp_save_page(
	'services/probate',
	function ( $page ) use ( $hlc_county_cards ) {
		$slug = 'services/probate';
		return array(
			hlc_fp_hero( $slug, $page->post_title ),
			hlc_fp_intro_section(
				$slug,
				'Probate lawyer in San Francisco and the Bay Area',
				'<p>When someone dies without a trust, their estate usually goes through probate: a court process that pays the debts and passes the property to the heirs. It is slow and full of deadlines, at a time when the family is grieving. We handle the court work and tell you plainly what comes next, so you can focus on your family.</p>'
			),
			hlc_fp_prose_section(
				$slug,
				'how',
				'How probate works in California',
				'<ol><li><strong>Petition.</strong> We file a petition in the superior court of the county where the person lived, to have an executor or administrator appointed.</li><li><strong>Notice and hearing.</strong> Notice of the petition goes to the heirs and is published in a local newspaper. The court then holds a hearing.</li><li><strong>Letters.</strong> The court issues letters that give the executor legal authority to act for the estate.</li><li><strong>Inventory and appraisal.</strong> We list the assets. A probate referee appraises property such as real estate.</li><li><strong>Creditors.</strong> Creditors usually have four months after the executor is appointed to file claims. We review and pay valid debts and taxes.</li><li><strong>Property.</strong> We sell or keep property as the estate and the heirs need.</li><li><strong>Final distribution.</strong> We file a final petition. When the court approves it, the executor distributes the estate and is discharged.</li></ol><p>A simple estate often takes nine to eighteen months. A contested or complex estate takes longer.</p>',
				'<p style="margin:0"><strong>Probate fees are set by law.</strong> Estimate yours with the calculator on <a class="hp-inlink" href="/pricing/probate/">Probate pricing</a>. Smaller estates may not need probate at all: the same page lists the current small-estate thresholds.</p>',
				true
			),
			hlc_fp_cards_section(
				$slug,
				'Counties we serve',
				'<p>We handle probate in these eight Bay Area and Central Valley counties, and in all of California.</p>',
				$hlc_county_cards,
				4,
				'counties'
			),
			hlc_fp_cards_section(
				$slug,
				'Probate with property, or from out of state',
				'',
				array(
					array(
						'title'      => 'Selling a house in probate',
						'text'       => 'Justin is also a licensed real estate agent, so the court steps and the sale come from one advisor.',
						'link'       => '/real-estate/',
						'link_label' => 'Real estate for inherited property',
						'more'       => 'Inherited property',
					),
					array(
						'title'      => 'Executors who live out of state',
						'text'       => 'You usually do not need to travel. We handle the local work, and you approve each step from home.',
						'link'       => '/out-of-state-executors-heirs/',
						'link_label' => 'Out-of-state executors and heirs',
						'more'       => 'Out-of-state executors',
					),
					array(
						'title'      => 'There is a trust instead',
						'text'       => 'A funded living trust usually avoids probate. The successor trustee administers it instead.',
						'link'       => '/services/trust-administration/',
						'link_label' => 'Trust administration',
						'more'       => 'Trust administration',
					),
				),
				3,
				'help'
			),
		);
	}
);

/* ---------------------------------------------------------------------
   /services/trust-administration/
   --------------------------------------------------------------------- */

hlc_fp_save_page(
	'services/trust-administration',
	function ( $page ) {
		$slug = 'services/trust-administration';
		return array(
			hlc_fp_hero( $slug, $page->post_title ),
			hlc_fp_intro_section(
				$slug,
				'Trust administration attorney for successor trustees',
				'<p>If you are the successor trustee of a loved one&#8217;s trust, the law gives you real duties and firm deadlines. We guide you through each step, keep you compliant, and work with our network of CPAs and real estate professionals, so the trust is settled correctly and you are protected.</p>'
			),
			hlc_fp_cards_section(
				$slug,
				'Your duties as successor trustee',
				'',
				array(
					array(
						'title' => 'Take control of the assets',
						'text'  => 'Secure the trust property, retitle accounts to the trust, and keep homes insured and maintained.',
					),
					array(
						'title' => 'Notify beneficiaries and heirs',
						'text'  => 'California requires a written notice to the beneficiaries and heirs within 60 days after the trust becomes irrevocable (Probate Code §16061.7).',
					),
					array(
						'title' => 'Value the trust property',
						'text'  => 'Get date-of-death values for real estate and investments. These values matter for income tax later.',
					),
					array(
						'title' => 'Pay debts, expenses, and taxes',
						'text'  => 'Pay valid debts and final bills, and file the final income tax returns and any trust returns.',
					),
					array(
						'title' => 'Keep beneficiaries informed',
						'text'  => 'Beneficiaries have a right to reasonable information and to an accounting. Good records prevent disputes.',
					),
					array(
						'title' => 'Distribute the trust',
						'text'  => 'Sell or transfer property as the trust directs, then distribute each share and close the trust.',
					),
				),
				3,
				'cards'
			),
			hlc_fp_prose_section(
				$slug,
				'timeline',
				'A typical timeline',
				'<ol><li><strong>First weeks.</strong> Secure the property, get the death certificates, and get a tax ID number for the trust.</li><li><strong>Within 60 days.</strong> Send the required notice to the beneficiaries and heirs.</li><li><strong>About four months after the notice.</strong> The 120-day period to contest the trust usually ends.</li><li><strong>Months two to nine.</strong> Value the assets, pay debts and taxes, and sell property if needed.</li><li><strong>At the end.</strong> Give the beneficiaries an accounting and distribute the trust.</li></ol><p>Many trusts are settled in six to twelve months. A trust with real estate, a business, or a dispute can take longer.</p>',
				'<p style="margin:0"><strong>Billed hourly.</strong> See the current rate schedule on <a class="hp-inlink" href="/pricing/trust-administration/">Trust Administration pricing</a>.</p>',
				true
			),
			hlc_fp_cards_section(
				$slug,
				'Common situations',
				'',
				array(
					array(
						'title'      => 'Selling trust property',
						'text'       => 'Justin is also a licensed real estate agent, so the legal steps and the sale come from one advisor.',
						'link'       => '/real-estate/',
						'link_label' => 'Real estate for trust property',
						'more'       => 'Trust property sales',
					),
					array(
						'title'      => 'Trustees who live out of state',
						'text'       => 'You can serve as trustee from anywhere. We handle the local work, and you approve each step from home.',
						'link'       => '/out-of-state-executors-heirs/',
						'link_label' => 'Out-of-state trustees and heirs',
						'more'       => 'Out-of-state trustees',
					),
					array(
						'title' => 'Where we work',
						'text'  => 'San Francisco, San Mateo, Alameda, Contra Costa, Marin, Santa Clara, Solano, and San Joaquin counties, and all of California.',
					),
				),
				3,
				'help'
			),
		);
	}
);
