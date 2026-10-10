---
name: competitor-analysis
description: "Use only when asked for a competitor analysis of a company or product: head-to-head comparison with its closest rivals on product, total cost, customers, distribution, traction, economics, and team, with the subject's relative strength judged on evidence."
metadata:
  title: Competitor analysis
---

# Competitor Analysis

The deliverable compares the subject with its closest rivals on evidence, so a reader can name the rival most likely to take the subject's next customer, and why.

## Inputs

- The subject: an aVenture URL or a name. The URL wins when both appear.
- Competitors to include (optional): analyze every name given, even one research shows serves a different buyer; then say so with the evidence.
- Context (optional): the segment, buyer, or decision the comparison serves.

Apply the designated answer and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

## 1. Pin the Subject

1. Use available aVenture reads first: the subject's record holds its description, headquarters, founding year, funding rounds, people, news, and research. With the aVenture MCP server or CLI, an aventure.vc URL resolves in one read (`getEntityLookup`); the aventure skill names the other reads. Make these reads before any web search. Without an aVenture tool, fetch the subject's aventure.vc page. When neither yields a matched record, establish identity from the subject's own site and filings, say so in the report, and never invent record contents.
2. Name the exact entity or product the report covers, as of today. Brands, legal entities, parents, subsidiaries, and spin-offs are different subjects, and ownership changes. Nabisco is today a Mondelēz brand, not a standalone company. Kellogg's cereal belongs to Ferrero in the US, Canada, and the Caribbean and to Mars elsewhere, after the 2023 split into WK Kellogg Co and Kellanova and their 2025 sales. Compare the unit that sells the product. Never attribute a parent's consolidated figures to it; credit a specific parent resource (distribution, procurement, infrastructure, financing) only where evidence shows the unit uses it.
3. When two records fit the name, stop and report both candidates with the fact that separates them.

## 2. Select Competitors

1. A direct competitor sells to the same buyer, for the same job, from the same budget. Candidates come from aVenture's similar-company results, the subject's comparison pages, buyer review sites, and "alternatives to" searches.
2. Verify each candidate from its own site or documentation. Keep the closest few, usually three to six, plus every user-named competitor.
3. Name the near-misses in one line each with the reason they were excluded.

## 3. Compare

Collect the same evidence for every company. Where one company's figure is missing, mark it with its reason (not disclosed, not found, not applicable); never fill it from a different year or measure without saying so.

| Dimension | Evidence to collect |
|---|---|
| Product | Capabilities live in documentation, changelogs, and API references on the as-of date, not marketing pages; a retired capability is excluded; a vendor's description of itself is attributed; launch dates of the capabilities the buyer cares about |
| Total cost | Published plans with the date read, then the total cost for the same buyer workload: usage, implementation, required add-ons, contract minimums, and switching cost; say when pricing is sales-only |
| Customers | Current customers apart from historical references and vendor-chosen testimonials; review ratings compared only across the same platform, period, and buyer population, with known incentives noted |
| Distribution | Sales motion (self-serve, inside sales, field sales, channel), partnerships, marketplaces, geography |
| Traction | Revenue or ARR where disclosed, customer counts, headcount trend, usage from a named source, each dated |
| Economics | Disclosed margins, retention or repeat purchase, acquisition efficiency, cash flow, debt, and liquidity, with matching definitions and periods; funding raised is financing, not profitability |
| Funding and backing | Total raised and the last round with date, amount, and lead investor |
| Team | Founders and current leaders with relevant prior roles, confirmed from a source dated within the last six months; an aVenture people list is a lead, not proof |
| Durable advantages | For each claimed advantage (network effects, switching costs, proprietary data, licenses, scale economies): its economic mechanism, the evidence it exists, and what would erode it |

## 4. Judge Relative Strength

1. For each material dimension, judge the subject against each rival as stronger, parity, weaker, or insufficient evidence, for the stated buyer. Parity needs evidence of equivalence, not an absence of difference. Give the evidence that decides each judgment. No weighted numeric scores.
2. Where the subject wins, and the buyer for whom that matters.
3. Where it loses, and what closing the gap would take.
4. The rival moves that would hurt most, each tied to evidence of that rival's direction (hiring, launches, funding, pricing changes).

## 5. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences naming the subject's clearest advantage, its largest gap, and the most dangerous rival when the evidence supports one.
2. Competitor set with selection reasons and near-misses.
3. The comparison by dimension, with each relative-strength judgment in the same place as its evidence.
4. What to watch: the dated signals that would change a judgment.
5. Gaps: what could not be established.

## Evidence Rules

- A search-results page (a search engine's results or a site's own search page) is never a source; open the result and cite that page.
- Source ladder: filings, regulators, and official statistics; then the company's own primary sources; then dated reporting from established outlets; then analyst and data-provider estimates, labeled by publisher.
- Read every cited source and cite it at the claim it directly supports. Syndicated or copied reporting is one source, not corroboration. Quote a company's own claim only as attributed ("the company says") and check it against another source.
- State the report's as-of date. Recheck current pricing, product status, and ownership; resolve conflicting sources by scope and date, and say how.
- Keep announcement and completion dates apart: an announced deal, a first close, or a planned feature is labeled as such.
- Distinguish not disclosed, not found in the sources searched, not applicable, and conflicting. Never turn an unknown into zero, absence, or parity.
- When the research budget runs out, write the report from what is established and list the rest under Gaps; never infer a missing figure.

## Writing Rules

- Every sentence or table cell that states a number, date, role, customer, or ownership fact links to the page you read for it. A claim you cannot cite moves to Gaps.
- A numeric threshold or target appears only with a cited benchmark.
- Keep the prose under 2,000 words unless the request asks for more; tables do not count toward it. Omit sections that do not apply. State each finding once; do not repeat a table in prose.
- Each sentence states a fact, a number, a comparison, or a judgment tied to evidence.
- Never write: "best-in-class", "industry-leading", "robust", "seamless", "cutting-edge", "game-changer", "unlock", "delve", "it's worth noting", "in conclusion", "elite", "unmatched", "iconic", "immense", "massive", "dramatically", "deep-pocketed", "industry benchmark", or a closing summary that repeats the answer; state the measure instead. Use "leverage" only in its financial sense.
- Numbers carry currency, unit, period, and an as-of date.
- State uncertainty once, at the claim it affects, with its cause.
- Use a table for comparisons across three or more items or dimensions.
