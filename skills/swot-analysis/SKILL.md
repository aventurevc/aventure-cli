---
name: swot-analysis
description: "Use only when asked for a SWOT analysis of a company, product, or investment firm: internal strengths and weaknesses, external opportunities and threats, each specific and sourced, ranked for the reader's decision, and crossed into feasible actions."
metadata:
  title: SWOT analysis
---

# SWOT Analysis

The deliverable is a SWOT a reader can act on: few items, each specific to the subject, each backed by evidence, each with its consequence stated, crossed into actions for the reader's decision.

## Inputs

- The subject: an aVenture URL or a name. The URL wins when both appear.
- Decision it should inform (optional): an investment, partnership, acquisition, competitive response, or hire. When absent, state the assessment lens the report uses: revenue growth and margin for an operating company or product; deal access, fundraising, and portfolio outcomes for an investment firm.
- Context (optional): constraints or facts the reader supplied.

Apply the designated answer and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

## 1. Pin the Subject

1. Use available aVenture reads first: the subject's record holds its description, headquarters, founding year, funding rounds, people, news, and research. A SWOT entry already in the record is a hypothesis to verify and date, not the answer. With the aVenture MCP server or CLI, an aventure.vc URL resolves in one read (`getEntityLookup`); the aventure skill names the other reads. Make these reads before any web search. Without an aVenture tool, fetch the subject's aventure.vc page. When neither yields a matched record, establish identity from the subject's own site and filings, say so in the report, and never invent record contents.
2. Name the exact entity the report covers, as of today. Brands, legal entities, parents, subsidiaries, and spin-offs are different subjects, and ownership changes. Nabisco is today a Mondelēz brand, not a standalone company. Kellogg's cereal belongs to Ferrero in the US, Canada, and the Caribbean and to Mars elsewhere, after the 2023 split into WK Kellogg Co and Kellanova and their 2025 sales. A parent's strength is the subsidiary's only when the subsidiary can use it.
3. When two records fit the name, stop and report both candidates with the fact that separates them.
4. Name current leaders and partners, with every co-leader, from the firm's own team page or a dated announcement within the last six months; an aVenture people list is a lead, not proof.
5. An investment firm is analyzed as an investor, and a fund as its own vehicle (vintage, size, mandate, holdings) apart from its manager: fund sizes and vintages, deployment pace, portfolio outcomes, partners, reputation with founders, and access to deals.

## 2. Gather Evidence

Collect before classifying: financial or scale figures with dates, product and pricing facts, customer and review evidence, team history, funding history, competitor moves, market growth figures, and scheduled regulation.

## 3. Classify

- Strengths and weaknesses are internal: what the subject controls or owns today (product, cost structure, team, customers, balance sheet, distribution, brand).
- Opportunities and threats are external: market, competitor, regulatory, technology, and macro conditions it does not control.
- An item that fits two quadrants goes where its cause sits. "A competitor cut prices" is a threat; "our unit cost is twice theirs" is a weakness.

Each item is:
1. Specific to this subject. "Strong team", "competition", and "economic uncertainty" appear only with the subject-specific fact that makes them true: who, what number, which rival, which rule.
2. Evidenced, with its source, and measured against a baseline: what buyers require, what the closest rivals have, or what the reader's decision needs. A large funding round or headcount is a strength only when it exceeds that baseline.
3. Followed by its consequence for revenue, cost, risk, or the reader's decision.

Include only material, substantiated items, ranked by materiality, likelihood, and time horizon where evidence supports them. There is no minimum count; an empty quadrant is stated as empty.

## 4. Cross Into Actions

For each pairing with substance, write one action:
- Strength × Opportunity: the move that uses a strength to capture an opportunity.
- Strength × Threat: how a strength blunts a threat.
- Weakness × Opportunity: the opportunity the subject misses unless a weakness is fixed.
- Weakness × Threat: the exposure where a weakness meets a threat, and its likely cost.

Each action names who acts, what changes, its prerequisites, its main tradeoff, and the metric that would show it worked, named without a target number unless a linked benchmark gives one. When evidence cannot justify acting, propose the test that would decide it.

## 5. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences naming the item that matters most for the decision in each non-empty quadrant, and the resulting judgment.
2. The four quadrants, each a ranked list of items with evidence and consequence.
3. The cross-actions.
4. What would change this view: the dated signals that would move an item between quadrants or off the list.
5. Gaps: what could not be established.
6. Before sending, reread the report and move every sentence or table cell that states a number, date, role, customer, or ownership fact without a link in that same sentence or cell into Gaps.

## Evidence Rules

- A search-results page or a listing page (a topic, tag, stream, or index page) is never a source; open the article and cite it.
- Source ladder: filings, regulators, and official statistics; then the company's own primary sources; then dated reporting from established outlets; then analyst and data-provider estimates, labeled by publisher. Cite filings from the regulator (such as sec.gov) or the issuer's investor-relations page, and the company's own letters, never a data aggregator or a social-media repost of them.
- Read every cited source and cite it at the claim it directly supports. Syndicated or copied reporting is one source, not corroboration. Label estimates, interested-party claims, and your own inferences.
- State the report's as-of date. Recheck current ownership, roles, pricing, product status, and regulatory status; resolve conflicting sources by scope and date, and say how.
- Keep announcement and completion dates apart: an announced deal, a first close, or a planned product is labeled as such. A past acquisition does not prove current ownership.
- Distinguish not disclosed, not found in the sources searched, not applicable, and conflicting. Never turn an unknown into zero or absence.
- When the research budget runs out, write the report from what is established and list the rest under Gaps; never infer a missing figure.

## Writing Rules

- Every sentence or table cell that states a number, date, role, customer, or ownership fact links to the page you read for it. A claim you cannot cite moves to Gaps.
- A numeric threshold or target appears only with a cited benchmark; otherwise name the metric without a number.
- Keep the prose under 2,000 words unless the request asks for more; tables do not count toward it. Omit sections that do not apply. State each finding once.
- Each sentence states a fact, a number, a comparison, or a judgment tied to evidence.
- Never write: "well-positioned", "poised to", "strong brand" without a measure, "headwinds and tailwinds", "robust", "seamless", "cutting-edge", "game-changer", "unlock", "delve", "it's worth noting", "in conclusion", "elite", "unmatched", "iconic", "immense", "massive", "dramatically", "deep-pocketed", "industry benchmark", "dominant", "powerhouse", "aggressively", "superior", "top-tier", "stronghold", or a closing summary that repeats the answer; state the measure instead. Use "leverage" only in its financial sense.
- Numbers carry currency, unit, period, and an as-of date.
- State uncertainty once, at the claim it affects, with its cause.
