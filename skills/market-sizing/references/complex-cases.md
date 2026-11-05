# Complex Cases

Read these rules before SKILL.md Step 1 and apply every rule whose condition the subject meets at the step it names; SKILL.md Step 4 item 3 lists them, and each is checked off at its step. Several can apply at once: a hardware-plus-software product sold to governments in three jurisdictions takes four rules.

## Several Products or Services

- Step 3: one boundary card per revenue line. Each `productService` offering from Step 2 is a candidate line; an offering with no sale evidence is in TAM and out of SAM.
- Step 6: mark each line a same-buyer add-on or a separate-buyer market. A buyer in two lines counts once; its spend on separate budgets adds, less any evidenced suite discount.
- Step 11: split new-customer wins from cross-sell to existing customers; sales capacity, delivery, and financing limits are shared across all lines, never granted to each line in full.
- Step 14: report each line, then the deduplicated total.

## A Product or Service Inside a Larger Provider

- Step 1: the offering is the subject; its provider is context.
- Steps 9 and 13: provider revenue is never the offering's revenue or share. Use the offering's own disclosed figures, or a provider segment a filing says contains only this offering.
- Step 11: the provider's sales force or customers add to the channel route only with evidence of bundling, shared sales compensation, or native embedding, capped by attach rates of comparable add-ons the provider discloses.

## Conglomerates and Multi-Segment Companies

- Step 3: one boundary per reportable segment named in the latest filing; group the rest as "segments not sized". Never one consolidated TAM.
- Step 13: remove revenue between segments before any share; each segment's external revenue is its current revenue; implied share is per segment, then a sum-of-segments table.

## Two-Sided Marketplaces and Take-Rate Businesses

- Step 4: the take-rate tree; size every paying side.
- Steps 9 and 13: GMV against GMV, revenue against revenue. TAM, SAM, and SOM are revenue; GMV appears only on its own labeled row beside them.
- Step 11: liquidity binds market by market. SOM sums launched markets (cities, regions, verticals) with evidenced supply; a national share never applies to markets not launched.

## Platforms and B2B2C

- Step 3: the buyer unit is the payer (employer, bank, carrier, school), not the end user. End users set volume per payer.
- Step 6: count payers once. When the subject sells both directly and through partners to the same end users, split the end users by channel. Deduct a partner's revenue share when the partner bills the end customer.
- Step 10: the partner relationship is the channel-reach filter; it proves access, not end-user adoption.

## Usage-Based and Hybrid Pricing

- Step 4: split a hybrid price into its components from the pricing page: a base fee plus usage above the included allowance, never full seat revenue plus usage from the first unit.
- Step 6: usage needs a measured volume series; seats need an occupation count. A usage line carries a wider range because volume varies by buyer size; say so at the line.
- Step 13: growth separates fewer seats, more usage, and falling unit prices; price and volume assumptions move together.

## Hardware, Software, and Services Together

- Step 4: lines with different frequencies: one-time hardware, one-time installation, annual software or service, project work; the installed base drives the recurring lines. For hardware sold as a service, confirm from the contract terms which part is a lease and which is service.
- Step 11: production capacity, contract-manufacturer lead times, installation crews, and working capital are candidate binding limits; read them from filings or dated reporting.

## A New Category With No Published Total

- Step 3: name the buyer's existing job and current alternative before naming the category.
- Step 7: published totals for the new category are inadmissible; a total for the prior alternative's category is admissible as the substitution source.
- Step 8: build-up plus substitution. Current spend is the supply-side floor, which may be near zero; say so. Without a defensible price range, report eligible buyers in physical units and the buyer benefit, not revenue TAM.
- Step 14: state that no publisher measures the category.

## Regulated or Geography-Split Markets

- Step 3: one boundary card per jurisdiction where rules, reimbursement, prices, or buyers differ.
- Step 7: convert each jurisdiction's figures to the report currency at the period-average rate, with its source, before summing.
- Step 10: regulatory eligibility is in or out per jurisdiction and per approved use, from the regulator's register with the date read; an unapproved use is out. A jurisdiction without the license is TAM, not Current SAM, and enters Expansion SAM only with a dated filing.
- Step 13: a pending rule is a conditional scenario with its expected effective date; a trend change ties to the date a rule took effect.

## Government and Long-Cycle Enterprise Buyers

- Inputs: the horizon is the current year plus five unless the request names one (SKILL.md Inputs).
- Step 6: current spend comes from obligations, outlays, and award records attributed to the funding agency (a reseller's award belongs to the agency that funds it). A contract vehicle's ceiling or an authorization is capacity to buy, not spend; annualize a multi-year award only as its delivery schedule supports.
- Step 11: the sales route is evidenced deals per year with cycle length from awards or buyer-persona-analysis journey evidence; contestable spend follows contract terms.

## Consumer Subscriptions

- Step 3: the buyer unit is a household or person from official population statistics.
- Step 6: eligible share only from measured attributes (device ownership, income band, age band, a survey with a published sample), never from invented demographics. Free users, trials, downloads, and active users are not subscribers. Price is the plan price weighted by the observed plan mix, net of the app store's commission (cite the store's current terms with a date), with any rival revenue a filing reports gross restated to the same basis; say when the mix is not disclosed.
- Step 10: app-store availability and payment acceptance by geography are filters.
- Step 11: subscriber cohorts decay at evidenced churn; paid acquisition is capped where its evidenced acquisition cost rises past revenue per subscriber.

## Pre-Revenue and Deep Technology

- Step 4: TAM is addressable potential only, priced at the cost of the solution it would replace (for energy, the levelized cost per unit of output) unless signed contracts prove a premium.
- Step 10: Current SAM is zero until the product exists for sale; the first product's scope goes to Expansion SAM, with the source that states the roadmap.
- Step 11: when the evidenced launch date falls after the horizon year, SOM is zero. Report a separate conditional SOM for the third year after launch that lists its technical, trial, scale-up, and capital conditions. Grants and paid engineering work are their own line, outside SOM.

## Investment Firms and Funds

- The market an investment firm sells into is capital from limited partners and the deals it competes for, not its portfolio companies' markets. Count companies that raised in a window from aVenture's funding records (`aventure entities search --count-only true` with `--fundraise-round`, `--fundraise-date-announced-range-min`, `--fundraise-date-announced-range-max`, and the NAICS filter from SKILL.md Step 6 item 4); a company count is not a round count, and the counts cover only recorded rounds; investor-portfolio-analysis owns the firm's own activity.
