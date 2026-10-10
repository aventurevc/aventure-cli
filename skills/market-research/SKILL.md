---
name: market-research
description: "Use only when asked for a market research report on the market a company or product sells into: market boundary, size with shown arithmetic, growth, segments, buyers, pricing, regulation, and the subject's position."
metadata:
  title: Market research
---

# Market Research

The deliverable lets an investor or operator decide whether the subject's market is large, growing, and reachable enough to matter. Every conclusion traces to evidence.

## Inputs

- The subject: an aVenture URL or a name. The URL wins when both appear.
- Market or segment (optional): it fixes the market boundary; analyze that boundary even when the subject also sells elsewhere, and say so.
- Context (optional): the reader's geography, period, or decision.

Apply the designated answer and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

## 1. Pin the Subject

1. Use available aVenture reads first: the subject's record holds its description, headquarters, founding year, funding rounds, people, news, and research. With the aVenture MCP server or CLI, an aventure.vc URL resolves in one read (`getEntityLookup`); the aventure skill names the other reads. Make these reads before any web search. Without an aVenture tool, fetch the subject's aventure.vc page. When neither yields a matched record, establish identity from the subject's own site and filings, say so in the report, and never invent record contents.
2. Name the exact entity the report covers, as of today. Brands, legal entities, parents, subsidiaries, and spin-offs are different subjects, and ownership changes. Nabisco is today a Mondelēz brand, not a standalone company. Kellogg's cereal belongs to Ferrero in the US, Canada, and the Caribbean and to Mars elsewhere, after the 2023 split into WK Kellogg Co and Kellanova and their 2025 sales. Verify current ownership and reporting scope from the latest filing or completion announcement before using any figure. Pre-spin consolidated figures cover both businesses; use a successor's recast or carve-out figures and state their scope.
3. A product subject is analyzed in its own market; its provider is context.
4. When two records fit the name, stop and report both candidates with the fact that separates them instead of choosing.

## 2. Define the Market

State the boundary in one sentence before sizing anything: the buyer, the job the buyer pays to get done, the product category, and the geography. A boundary taken from the subject's marketing copy ("the AI-native workflow market") is restated as buyers and budgets.

## 3. Size It

1. Bottom-up: model annual revenue from the relevant customers, seats, units, or transactions and realized revenue per unit. Label each input observed (with its source) or assumed (with its reasoning), check that segments do not double-count buyers, and keep current spending apart from addressable potential.
2. Top-down: find figures from a statistics agency, regulator, public-company filings, or a named research firm. Record the publisher, the year published, the period measured, and the publisher's own market definition.
3. Before comparing estimates, align category, geography, buyer unit, period, currency, price basis, and gross versus net revenue. Investigate any disagreement large enough to change the conclusion, without assuming its cause, and state which estimate the report relies on.
4. Give a range, not a point, for any estimate built on an assumed input, and show which assumption, if wrong, would reverse the conclusion.
5. TAM is eligible annual demand inside the boundary. SAM is the part the subject can serve with its current product, geography, and channels. SOM is the annual revenue it could obtain over a stated horizon, constrained by distribution, sales capacity, competition, and delivery capacity. Report each only with its basis.
6. Growth: show measured historical growth, split into price, volume, and mix where sources allow. Say whether a structural change (regulation, a new technology, a pricing reset) breaks the historical trend. Label every forward figure as a scenario or forecast with its publisher, assumptions, and horizon.

## 4. Analyze

- Segments: split the market along the axis buyers choose on (company size, use case, channel, region), with each segment's size or share where a source measures it.
- Demand drivers and constraints: each names its mechanism and its evidence (a regulation date, a price change, a measured adoption rate). A driver without evidence is cut.
- Buyers: who signs, from which budget line, through what purchase process, with what switching cost.
- Pricing: published price points and models across the main sellers; note where prices are not public.
- Regulation: rules in force or scheduled that change demand or cost, with dates.
- The subject's position: its rank or share against the three to five largest named vendors in the boundary, each cited, its revenue or scale where disclosed, and the segments it serves. Compute share only when numerator and denominator cover the same offering, geography, period, and revenue basis.

## 5. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences on the market's size, growth, and what that means for the subject.
2. Market boundary.
3. Size and growth: each estimate with method, period, and source, then the reconciliation.
4. Segments, buyers, pricing, drivers and constraints, regulation.
5. The subject's position.
6. What would change this view: the two or three measurable signals that would move the conclusion.
7. Gaps: each figure the report needed and could not establish.
8. Before sending, reread the report and move every sentence or table cell that states a number, date, role, customer, or ownership fact without a link in that same sentence or cell into Gaps.

## Evidence Rules

- A search-results page or a listing page (a topic, tag, stream, or index page) is never a source; open the article and cite it.
- Source ladder: filings, regulators, and official statistics; then the company's own primary sources; then dated reporting from established outlets; then analyst and data-provider estimates, labeled by publisher. Cite filings from the regulator (such as sec.gov) or the issuer's investor-relations page, and the company's own letters, never a data aggregator or a social-media repost of them.
- Read every cited source and cite it at the claim it directly supports. Syndicated or copied reporting is one source, not corroboration. Label estimates, interested-party claims, and your own inferences, and show calculation inputs.
- State the report's as-of date. Recheck current ownership, pricing, product status, and regulatory status; resolve conflicting sources by scope and date, and say how.
- Keep announcement and completion dates apart: an announced acquisition, a first close, or a planned launch is labeled as such. A past acquisition does not prove current ownership.
- Distinguish not disclosed, not found in the sources searched, not applicable, and conflicting. Never turn an unknown into zero or absence. Never estimate a private company's revenue without labeling the method.
- When the research budget runs out, write the report from what is established and list the rest under Gaps; never infer a missing figure.

## Writing Rules

- Every sentence or table cell that states a number, date, role, customer, or ownership fact links to the page you read for it. A claim you cannot cite moves to Gaps.
- A numeric threshold or target appears only with a cited benchmark; otherwise name the metric without a number.
- Keep the prose under 2,000 words unless the request asks for more; tables do not count toward it. Omit sections that do not apply. State each finding once; do not repeat a table in prose.
- Each sentence states a fact, a number, a comparison, or a judgment tied to evidence.
- Never write: "in today's fast-paced", "rapidly evolving landscape", "poised for growth", "game-changer", "cutting-edge", "robust", "seamless", "unlock", "delve", "navigate the", "it's worth noting", "in conclusion", "elite", "unmatched", "iconic", "immense", "massive", "dramatically", "deep-pocketed", "industry benchmark", "dominant", "powerhouse", "aggressively", "superior", "top-tier", "stronghold", or a closing summary that repeats the answer; state the measure instead. Use "leverage" only in its financial sense.
- Numbers carry currency, unit, period, and an as-of date. Round only after computing.
- State uncertainty once, at the claim it affects, with its cause.
- A recommendation names the action, the evidence for it, and the metric that would show it worked.
- Use a table for comparisons across three or more items or dimensions.
