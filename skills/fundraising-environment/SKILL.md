---
name: fundraising-environment
description: "Use only when asked about the venture and growth capital environment for a company's specific sub-sector: round counts and sizes, valuation direction, active and retreating investors, exits, and implications for its next raise."
metadata:
  title: Fundraising environment
---

# Fundraising Environment

The deliverable explains which capital is available to comparable companies, on what evidenced terms, and what that implies for the subject's next raise. Sector funding totals alone do not answer that question.

## Inputs

- The subject: an aVenture URL or a name. The URL wins when both appear.
- Sub-sector or financing stage (optional): the cohort to assess.
- Context (optional): geography, raise timing, intended use of proceeds, or investor constraints.

Apply the designated answer and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

Before research, load the aventure-cookbook skill and apply §9 Analyze Business Implications within this framework. Keep this report's evidence and output rules.

## 1. Pin the Subject

1. Use available aVenture reads first: resolve an aventure.vc URL through `getEntityLookup` and read the returned description, funding rounds, investors, and news. The aventure skill names the exact operations and their CLI projections. Read sub-resources only where the detail omits or truncates them. Make these reads before any web search. Without an aVenture tool, follow aventure skill §1 step 2. If no matched record is available, state that limitation and use external evidence without inventing database coverage.
2. Establish the exact company, current ownership, operating sub-sector, geography, and latest disclosed financing. Keep a subsidiary's raise apart from its parent's financing and a fund's close apart from an operating company's round.
3. When two records fit the name, stop and report both candidates with the fact that separates them.

## 2. Build the Funding Cohort from aVenture

1. Define the cohort by product, buyer, geography, and financing stage before selecting deals. Use the aventure skill's entity discovery operations to find comparable companies, including named alternatives. Analyze economically different sub-sectors separately.
2. Read their rounds with `listEntityFundraiseRounds` and round participants with `listEntityFundraiseInvestorJoins`; both key on the company that raised, never the investor. Use `listEntityInvestors` for a company's backers and `listEntityInvestments` for an investor's portfolio. These are aVenture's own structured funding and investor records, not web-search substitutes.
3. Record each round's company, stage, date, amount, currency, valuation when disclosed, lead, participants, and source. Deduplicate announcements, extensions, and successive closes; state whether an extension is part of one round or a separate financing. Separate equity, debt, grants, and secondary transactions.
4. Choose a recent observation window and a comparable prior window; state exact dates and date basis. Compare equal durations and seasonally comparable periods. Identify incomplete periods and reporting lag before interpreting a decline.
5. Only after those reads, use web sources to fill missing amounts, valuations, investor activity, exits, and coverage. Keep external additions identifiable and reconcile discrepancies against the structured records. If access or coverage prevents a complete cohort, report the observed sample rather than a sector-wide total.

## 3. Measure the Environment

- Round counts and sizes: show observed count, disclosed-amount count, disclosed capital, and median disclosed round size by stage and period. Identify outsized rounds separately; show whether the conclusion survives without them. Missing amounts are not zero.
- Valuation direction: compare disclosed pre-money with pre-money and post-money with post-money at comparable stages. Keep priced rounds apart from convertible caps and public-market multiples. Report a company's up or down round only with comparable prior terms; absent those, valuation direction is unknown, not inferred from round size.
- Active and retreating investors: name leads, repeat backers, new entrants, and investors reducing deployment, with dated deals or explicit mandate changes. Separate new investments from follow-ons. A newly raised fund is not proof of deployment, and no observed deal is not proof an investor has withdrawn.
- Exits: identify completed and announced acquisitions, IPOs, shutdowns, and secondary liquidity separately. State proceeds or returns only when disclosed; distinguish transaction value from cash returned to venture investors. Explain how evidenced liquidity affects appetite for new rounds without assuming it does.
- Terms and concentration: include liquidation preferences, dilution, investor concentration, or financing conditions only where disclosed and comparable. Do not translate an aggregate funding increase into easier terms for every stage.

## 4. Draw the Next-Raise Implication

Compare the subject's disclosed stage, last raise, operating evidence, capital needs, and milestones with named companies that recently raised in the cohort. Name plausible investors only where their mandate and recent activity fit; distinguish an existing backer from a prospective lead and interest from a commitment.

Explain whether the evidence supports a more accessible, more selective, or unresolved next-raise environment for this subject. Separate sector capital availability from company readiness. Give conditional timing, size, and milestone implications only where comparables support them; without current cash and burn, do not calculate runway or assert an imminent financing need. Do not predict a valuation, term sheet, or probability of success.

## 5. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences on capital availability in the defined cohort and the implication for the subject's next raise.
2. Cohort boundary, date basis, comparison windows, and aVenture coverage.
3. Round counts and sizes, valuation evidence, and concentration by stage and period, with calculation inputs.
4. Active and retreating investors and the deals or mandate changes supporting each judgment.
5. Exits and their evidenced financing implications.
6. The subject against named alternatives: next-raise conditions, suitable investor mandates, and milestones.
7. What would change this view: dated deployment, valuation, exit, and company signals.
8. Gaps: undisclosed terms, missing records, reporting lag, and limits on inference.
9. Before sending, reread the report and move every sentence or table cell that states a number, date, role, customer, or ownership fact without a link in that same sentence or cell into Gaps.

## Evidence Rules

- Use aVenture funding and investor records first, citing the record and its source where available. For gaps, prefer company and investor announcements, regulatory filings, exchange disclosures, and dated independent reporting; label data-provider estimates by publisher.
- A search-results page or a listing page (a topic, tag, stream, or index page) is never a source; open the article and cite it. Read every cited source. Syndicated reporting is one source, not corroboration.
- Label the population as the observed aVenture cohort unless completeness is established. Record filters, missing disclosures, and external additions; do not equate database counts with the whole market.
- Align stage, geography, currency, period, instrument, and valuation basis. Show any currency conversion's rate and date; otherwise keep currencies separate.
- Keep announcement dates, financing closes, and completed exits apart. Resolve conflicts by source, scope, and date, and say how. Label estimates, interested-party claims, and your own inferences.
- Distinguish not disclosed, not found in the sources searched, not applicable, and conflicting. Never turn an unknown into zero, investor retreat, or financing failure.
- When the research budget runs out, write from what is established and list the rest under Gaps; never infer a missing figure.

## Writing Rules

- Every sentence or table cell that states a number, date, role, customer, or ownership fact links to the record or page you read for it. A claim you cannot cite moves to Gaps.
- A numeric threshold or target appears only with a cited benchmark; otherwise name the metric without a number.
- Keep the prose under 2,000 words unless the request asks for more; tables do not count toward it. State each finding once; do not repeat a table in prose.
- Each sentence states a fact, a number, a comparison, or a judgment tied to evidence.
- Never write "hot sector", "dry powder" as proof of available funding, "well-positioned", "poised to raise", "deep-pocketed", "robust", or a closing summary that repeats the answer; state the measure instead. Use "leverage" only in its financial sense.
- Numbers carry currency, unit, period, and an as-of date. Round only after computing.
- State uncertainty once, at the claim it affects, with its cause.
