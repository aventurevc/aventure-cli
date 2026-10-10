---
name: porters-five-forces
description: "Use only when asked for a Porter's Five Forces analysis of the industry a company or product competes in: a defined industry boundary, each force rated from structural evidence, its direction, the profit implication, and the subject's position."
metadata:
  title: Porter's Five Forces
---

# Porter's Five Forces

The deliverable explains how much profit the industry's structure allows and who captures it. It rates each force from structural evidence, states where each force is heading when evidence shows it, and places the subject within that structure.

## Inputs

- The subject: an aVenture URL or a name. The URL wins when both appear.
- Industry boundary (optional): analyze exactly that product and geography.
- Context (optional): the reader's purpose or time horizon.

Apply the designated answer and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

## 1. Pin the Subject

1. Use available aVenture reads first: the subject's record holds its description, headquarters, founding year, funding rounds, people, news, and research. A Five Forces entry already in the record is a hypothesis to verify and date. With the aVenture MCP server or CLI, an aventure.vc URL resolves in one read (`getEntityLookup`); the aventure skill names the other reads. Make these reads before any web search. Without an aVenture tool, fetch the subject's aventure.vc page. When neither yields a matched record, establish identity from the subject's own site and filings, say so in the report, and never invent record contents.
2. Name the exact entity the report covers, as of today. Brands, legal entities, parents, subsidiaries, and spin-offs are different subjects, and ownership changes. Nabisco is today a Mondelēz brand, not a standalone company. Kellogg's cereal belongs to Ferrero in the US, Canada, and the Caribbean and to Mars elsewhere, after the 2023 split into WK Kellogg Co and Kellanova and their 2025 sales; the two units had different product and geographic scopes. Establish each unit's buyers, suppliers, and rivals from evidence, under its current owner.
3. When two records fit the name, stop and report both candidates with the fact that separates them.

## 2. Define the Industry

State the boundary in one sentence: the product, the buyer, and the geography. Too broad ("software") hides the forces; too narrow ("the subject's niche feature") drops real rivals and substitutes. When the subject operates in industries with different structures, analyze each economically material one separately, or analyze one and limit every conclusion to it; never present one industry's structure as the whole company's.

## 3. Rate Each Force

Rate each force low, medium, high, or unrated. High means stronger pressure on the profits of the industry's incumbents. Explain how the decisive drivers set the rating and how conflicting evidence was resolved; do not count drivers. A force with no evidence is unrated.

| Force | Structural drivers to test |
|---|---|
| Rivalry among existing competitors | Number and size balance of rivals (concentration from market shares with a stated denominator), industry growth rate, fixed-cost share, product differentiation, switching costs, exit barriers, price-cutting history |
| Threat of new entrants | Capital required, scale economies, network effects, proprietary technology or data, regulatory licenses, access to distribution, incumbent retaliation history, recent entries and their outcomes |
| Bargaining power of suppliers | Supplier concentration relative to the industry, supplier dependence on this industry, uniqueness of inputs, switching costs, supplier forward integration |
| Bargaining power of buyers | Buyer concentration and purchase volume, price sensitivity, switching costs, buyer backward integration, information available to buyers |
| Threat of substitutes | Alternatives that do the same job another way, their price-performance relative to the industry, buyer switching cost to them |

Assess distinct supplier groups and buyer segments separately when they differ. An input's share of industry cost measures exposure, not bargaining power on its own.

For each force, state its direction over the requested horizon (default two to three years) as strengthening, stable, weakening, or unknown. A direction is an inference: give its mechanism and the evidence behind it.

Regulation, complementary products, and technology shifts are not forces; describe each through the force it moves.

## 4. Draw the Implication

1. Industry profitability: prefer multi-year returns on invested capital for comparable businesses; operating margins are a proxy, labeled as one. Compare only against a named benchmark (public peers' filings, or a published dataset such as Aswath Damodaran's industry margin and return tables), and separate the industry's structure from one company's position and from temporary conditions.
2. Who captures value: industry participants, suppliers, or buyers.
3. The subject's position: which forces bear on it hardest and whether its strategy (cost, differentiation, focus) defends against them, with evidence.

## 5. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences on the industry's structural attractiveness and the subject's position in it.
2. Industry boundary.
3. One section per force: rating, decisive drivers with evidence, direction.
4. A table of the five ratings and directions.
5. Profit implication and the subject's position.
6. What would change this view: the measurable shifts that would move a rating.
7. Gaps: what could not be established.

## Evidence Rules

- A search-results page (a search engine's results or a site's own search page) is never a source; open the result and cite that page.
- Source ladder: filings, regulators, and official statistics; then the company's own primary sources; then dated reporting from established outlets; then analyst and data-provider estimates, labeled by publisher.
- Read every cited source and cite it at the claim it directly supports. Syndicated or copied reporting is one source, not corroboration. Label estimates, interested-party claims, and your own inferences, and show calculation inputs.
- State the report's as-of date. Recheck current ownership and regulatory status; resolve conflicting sources by scope and date, and say how.
- Keep announcement and completion dates apart: an announced merger has not yet changed concentration.
- Distinguish not disclosed, not found in the sources searched, not applicable, and conflicting. Never turn an unknown into zero or absence.
- When the research budget runs out, write the report from what is established and list the rest under Gaps; never infer a missing figure.

## Writing Rules

- Every sentence or table cell that states a number, date, role, customer, or ownership fact links to the page you read for it. A claim you cannot cite moves to Gaps.
- A numeric threshold or target appears only with a cited benchmark.
- Keep the prose under 2,000 words unless the request asks for more; tables do not count toward it. State each finding once; do not repeat the table in prose.
- Each sentence states a fact, a number, a comparison, or a judgment tied to evidence.
- Never write: "intense competition" without its measure, "high barriers to entry" without naming them, "robust", "seamless", "cutting-edge", "game-changer", "unlock", "delve", "it's worth noting", "in conclusion", "elite", "unmatched", "iconic", "immense", "massive", "dramatically", "deep-pocketed", "industry benchmark", or a closing summary that repeats the answer; state the measure instead. Use "leverage" only in its financial sense.
- Numbers carry currency, unit, period, and an as-of date.
- State uncertainty once, at the claim it affects, with its cause.
