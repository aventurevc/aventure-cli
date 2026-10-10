---
name: investor-portfolio-analysis
description: "Use only when asked for a portfolio analysis of an investment firm or individual investor: funds, observed deal activity by year, stage, sector, and geography, lead and follow-on behavior with coverage stated, verified outcomes, co-investors, stated versus revealed thesis, and recent activity."
metadata:
  title: Portfolio analysis
---

# Portfolio Analysis

The deliverable shows what an investor does with its money, measured from its deals, so a founder can judge fit and a limited partner or co-investor can judge behavior. Revealed behavior outranks the investor's description of itself, and the report says how complete its deal list is.

## Inputs

- The subject: an aVenture URL or a name of an investment firm or an individual investor. The URL wins when both appear.
- Sector, stage, or period (optional): analyze that slice and compare it with the whole portfolio.
- Context (optional): the reader's purpose, such as raising a round or evaluating a fund.

Apply the designated answer and the context through every step; the defaults below apply only where they are absent. Facts the user supplies are claims to verify.

## 1. Pin the Subject

1. Use available aVenture reads first: the subject's record holds its description, headquarters, people, news, research, and investments. With the aVenture MCP server or CLI, an aventure.vc URL resolves in one read (`getEntityLookup`, or `getPersonLookup` for a person), and `listEntityInvestments` or `listPersonInvestments` lists what the subject backed; the aventure skill names the other reads. Make these reads before any web search. Without an aVenture tool, fetch the subject's aventure.vc page. When neither yields a matched record, establish identity from the investor's own site and filings, say so in the report, and never invent record contents.
2. Name the exact investor covered. When the subject is a fund, analyze that vehicle (vintage, size, mandate, holdings) apart from its manager's other funds. A firm's separate funds and vehicles, its corporate parent, a partner's personal angel investing, and a similarly named firm are different subjects. Attribute invested capital to the documented firm or vehicle; describe a person's sourced deal role separately, and call an investment personal only when a source documents it.
3. When no source documents an investment by the subject, say so in one paragraph and stop; never pad the report with the person's other roles.
4. When two records fit the name, stop and report both candidates with the fact that separates them.

## 2. Build the Deal List

1. Start from the aVenture investment records: each portfolio company, round, date, and amount. Add announced deals the records lack from the investor's portfolio page and dated announcements, marking each addition with its source. Reconcile against exited, written-off, and removed holdings (archived portfolio pages, prior announcements), because current portfolio pages show survivors.
2. Reconcile repeated announcements, extensions, tranches, and filing amendments before counting. Keep primary capital apart from secondary sales, and announced financings apart from completed ones.
3. Record lead, co-lead, or follow only where a source states it; otherwise leave it unknown.
4. State the coverage: the observation window, the sources searched, the count of unique companies and of financings, and whether completeness is known. An unknown classification stays unknown; it never becomes non-participation.

## 3. Analyze

- Funds: names, sizes, vintages, and close status (first close and final close are different events). On SEC Form D, the amount sold as of filing can include future commitments and does not by itself establish a final close; Form ADV regulatory assets include uncalled commitments and establish neither original fund size nor performance.
- Activity: deal count by year, stage, sector, and geography, labeled as observed deal activity. Report dollars deployed only from disclosed amounts the subject itself invested, with their coverage; never infer a check from round size, syndicate size, or lead status.
- Leading and follow-on: lead share among deals with known leadership; follow-on rate among companies with verified later financings and known participation. Show the exclusions, and never generalize a rate computed on known cases to the whole portfolio while the unknown share is material.
- Outcomes: IPOs and acquisitions with announcement and completion dates and sources; shutdowns; later rounds at disclosed valuations. An exit or markup of a portfolio company is not the investor's realized proceeds. For any performance figure, keep its metric, vehicle, vintage, measurement date, gross or net basis, and realized or unrealized basis, and label figures the manager reports about itself.
- Co-investors: the investors that appear most often beside the subject, with counts.
- People: the partners who lead deals, with their sectors, where sources attribute deals to them.
- Thesis: the stated focus against the revealed pattern; name where they diverge.
- Recent activity: deals and fund events in the last 12 months, or the requested period, dated.

## 4. Write the Report

The report's first line is "As of YYYY-MM-DD." Then:

1. Answer: three to five sentences on what the investor backs, at what stage, how often, and how recently, with the coverage caveat that matters most.
2. Coverage of the deal list.
3. Funds and capital.
4. Activity by year, stage, sector, and geography.
5. Lead, follow-on, and check-size evidence.
6. Outcomes.
7. Co-investors and deal partners.
8. Stated versus revealed thesis.
9. Recent activity.
10. Gaps: deals, amounts, or outcomes that could not be established.
11. Before sending, reread the report and move every sentence or table cell that states a number, date, role, customer, or ownership fact without a link in that same sentence or cell into Gaps.

## Evidence Rules

- A search-results page or a listing page (a topic, tag, stream, or index page) is never a source; open the article and cite it.
- Source ladder: regulatory filings (such as SEC Form D and Form ADV where they exist), then the investor's and portfolio companies' own announcements, then dated reporting from established outlets, then data providers labeled by name. Cite filings from the regulator (such as sec.gov) or the issuer's investor-relations page, and the company's own letters, never a data aggregator or a social-media repost of them.
- Read every cited source and cite it at the claim it directly supports. Syndicated or copied reporting is one source, not corroboration.
- State the report's as-of date. Resolve conflicting sources by scope and date, and say how.
- Keep announcement and completion dates apart. A past acquisition does not prove current ownership.
- Distinguish not disclosed, not found in the sources searched, not applicable, and conflicting. Never turn an unknown into zero or absence.
- When the research budget runs out, write the report from what is established and list the rest under Gaps; never infer a missing figure.

## Writing Rules

- Every sentence or table cell that states a number, date, role, customer, or ownership fact links to the page you read for it. A claim you cannot cite moves to Gaps.
- A numeric threshold or target appears only with a cited benchmark; otherwise name the metric without a number.
- Keep the prose under 2,000 words unless the request asks for more; tables do not count toward it. State each finding once; do not repeat a table in prose.
- Each sentence states a fact, a number, a comparison, or a judgment tied to evidence.
- Never write: "founder-friendly" or "value-add" without the evidence, "top-tier", "robust", "seamless", "cutting-edge", "game-changer", "unlock", "delve", "it's worth noting", "in conclusion", "elite", "unmatched", "iconic", "immense", "massive", "dramatically", "deep-pocketed", "industry benchmark", "dominant", "powerhouse", "aggressively", "superior", "stronghold", or a closing summary that repeats the answer; state the measure instead. Use "leverage" only in its financial sense.
- Percentages state their denominator ("12 of 40 deals with known leadership, 30%").
- Numbers carry currency, unit, period, and an as-of date.
- State uncertainty once, at the claim it affects, with its cause.
