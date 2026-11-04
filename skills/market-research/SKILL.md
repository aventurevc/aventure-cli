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

Apply the optional inputs and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

Before research, load the aventure-cookbook skill and apply §9 Analyze Business Implications within this framework. Keep this report's evidence and output rules.

## 1. Pin the Subject

1. Use available aVenture reads first: the subject's record holds its description, headquarters, founding year, funding rounds, people, news, and research. With the aVenture MCP server or CLI, an aventure.vc URL resolves in one read (`getEntityLookup`); the aventure skill names the other reads. Make these reads before any web search. Without an aVenture tool, follow aventure skill §1 step 2. When no matched record results, establish identity from the subject's own site and filings, say so in the report, and never invent record contents.
2. Name the exact entity the report covers, as of today. Brands, legal entities, parents, subsidiaries, and spin-offs are different subjects, and ownership changes. Nabisco is today a Mondelēz brand, not a standalone company. Kellogg's cereal belongs to Ferrero in the US, Canada, and the Caribbean and to Mars elsewhere, after the 2023 split into WK Kellogg Co and Kellanova and their 2025 sales. Verify current ownership and reporting scope from the latest filing or completion announcement before using any figure. Pre-spin consolidated figures cover both businesses; use a successor's recast or carve-out figures and state their scope.
3. A product subject is analyzed in its own market; its provider is context.
4. When two records fit the name, stop and report both candidates with the fact that separates them instead of choosing.

## 2. Define the Market

State the boundary in one sentence before sizing anything: the buyer, the job the buyer pays to get done, the product category, and the geography. A boundary taken from the subject's marketing copy ("the AI-native workflow market") is restated as buyers and budgets.

## 3. Size It

Load the market-sizing skill and apply its Inputs defaults (horizon and currency, unless the request names them) and its Steps 2–13 to the §2 boundary: its boundary cards, input ledger, build-up, break-down, floor, reconciliation, SAM, SOM, ranges, and growth. Reuse its tables in §5 item 3 instead of restating them, keep this report's evidence and output rules, and do not write that skill's report.

## 4. Analyze

- Segments: split the market along the axis buyers choose on (company size, use case, channel, region), with each segment's size or share where a source measures it.
- Demand drivers and constraints: each names its mechanism and its evidence (a regulation date, a price change, a measured adoption rate). A driver without evidence is cut.
- Buyers: who signs, from which budget line, through what purchase process, with what switching cost.
- Pricing: published price points and models across the main sellers; note where prices are not public.
- Regulation: rules in force or scheduled that change demand or cost, with dates.
- The subject's position: its rank or share against the three to five largest named vendors in the boundary, each cited, its revenue or scale where disclosed, and the segments it serves. Compute share only when numerator and denominator cover the same offering, geography, period, and revenue basis. Where no source measures a vendor's share, write "not disclosed"; never estimate a rival's share or range. The subject's own share follows market-sizing Step 13 item 2, labeled "modeled implied share" when either side is an estimate.

## 5. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences on the market's size, growth, and what that means for the subject.
2. Market boundary.
3. Size and growth: the market-sizing input ledger, build-up tree, summary, reconciliation, SAM, and SOM tables, each estimate with its method, period, and source; a figure computed from these tables cites the table.
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
