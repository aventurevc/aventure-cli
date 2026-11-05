# Formula Trees

Each tree sizes one revenue line for one segment at the boundary card's period, currency, and revenue basis. Sum segments only after SKILL.md Step 6 item 8 removes overlap. Every term is a ledger row (SKILL.md Step 5) with an id and a unit; a term whose evidence is missing stays unknown, never a placeholder value.

Labels: N = eligible buyer units (count), e = eligible share (fraction of N that has the job and can buy), p = realized annual spend per buyer unit (counted units per buyer × realized price per counted unit, as each tree spells out). Current spend replaces full eligibility with the measured paying share d (SKILL.md Step 6 item 9).

## Seat or Subscription

Potential = Σ segments ( seat holders in the role × e × annual price per paid seat )

Use the organization form, Σ segments ( N organizations × e × paid seats per organization × annual price per paid seat ), only when seats per organization are evidenced and the buyer count matters (plan minimums, flat tiers).

| Term | Unit | Evidence |
|---|---|---|
| Seat holders in the role | workers | An official occupational employment series for the role that needs a paid seat, in the boundary's geography. |
| N organizations | firms or establishments (one, never both) | Statistics-agency business counts by industry code, size band, and geography. |
| e | fraction | A measured attribute (regulated status, technology in use, survey with a published sample) or customer-analysis segment evidence. |
| Paid seats per organization | seats per firm | Workers in the role per firm, excluding viewers and free users; deployment scope in case studies; the subject's documentation of who needs a seat. |
| Annual price per paid seat | currency per seat per year | The pricing page with its date read: the plan the segment buys, paid months per year, included seats and minimums applied through the actual tariff. A disclosed average contract value ÷ seats. The plan price in a competitor-analysis Total cost row, never its switching or implementation cost. |

- A plan priced per organization (flat tier) replaces seats × price per seat with the tier price, and the tier each segment buys comes from customer-analysis spend bands or the observed plan mix.
- A family or team plan is one paid account, not one per member.

## Usage or Transaction

Potential = Σ volume cohorts ( N units × e × annual bill per unit at the cohort's volume )

| Term | Unit | Evidence |
|---|---|---|
| N units | accounts, workloads, devices | Statistics-agency or regulator counts of the units that generate events, split into cohorts by volume when a source gives the distribution. |
| Annual events per unit | events per unit per year | A measured volume series: central-bank payment statistics, shipment counts, claims filed, registered vehicles, platform volumes in filings. |
| Annual bill per unit | currency per unit per year | The published rate card applied to the cohort's volume tier: free allowance, then usage price, then overage; a minimum commitment credited against usage enters as the larger of the minimum and the usage bill, never both. A disclosed effective rate (revenue ÷ volume in a filing). |

- Apply the tariff to each cohort's volume and sum the bills; the tariff applied to average usage is not the average bill.
- Compute bills at the tariff's billing period and pooling scope (allowances, minimums, tiers, and overages reset per month or per account) before summing to the year; annual volume alone is enough only when the tariff aggregates annually. Without within-year or per-account usage, give tariff bounds or labeled usage scenarios.
- Count fee-bearing events under the actual tariff: a refund or reversal removes only the fee or volume actually reversed, and nonrefundable processing fees and separate refund fees stay.
- With no measured event volume, the line is not estimable bottom-up (SKILL.md Step 12 item 6); never derive volume from a revenue and a price that share one unknown.

## Take-Rate Marketplace

GMV = Σ segments min( demand-side GMV, supply-side capacity GMV )

demand-side GMV = N buyers × e × orders per buyer per year × average order value; for wholesale, where no source measures orders, buyer receipts (statistics agency) × the purchases-to-sales ratio for that kind of business (an official trade survey) × the share bought from suppliers the marketplace can carry

Revenue = GMV × take rate + revenue lines the take rate excludes (subscriptions, advertising)

| Term | Unit | Evidence |
|---|---|---|
| N buyers | buyers (or sellers, for a seller-paid side) | Statistics-agency counts of the paying side. |
| Orders per buyer per year, average order value | orders; currency per order | Filings of public marketplaces in the same category; official trade or consumption statistics. |
| Supply-side capacity | currency per year | Licensed or scarce supply (licensed providers, inventory, capacity) × its throughput; use it when supply is licensed or scarce. |
| Take rate | fraction of GMV | Fees recognized on the GMV pool (seller fee plus buyer fee) on the boundary card's revenue basis, net of marketplace-funded incentives only where they reduce recognized revenue; payment, insurance, and other operating costs are not subtracted. A disclosed take rate: divide revenue by GMV only for the same period and after removing lines the take rate excludes (advertising, subscriptions); otherwise the take rate is assumed and bounded by the fee schedule. |

- Buyer and seller fees on one order are one GMV pool, not two.
- Report GMV and revenue on separate rows; compare GMV only with GMV and revenue only with revenue.
- Never subtract operating costs to make a "net revenue" figure.

## Unit Hardware

Annual hardware potential = Σ segments ( annual new units sold × recognized selling price ). Recurring software or services and consumables are separate revenue lines, driven by the eligible installed base and its billable consumption; each enters the combined total once.

annual new units sold = replacement purchases + first installations and capacity additions. From stock data, annual new units sold = closing in-service base − opening in-service base + all retirements (with or without replacement); that total already contains replacement purchases, so never add replacement purchases to it or to a net stock change.

| Term | Unit | Evidence |
|---|---|---|
| Installed base | units in service | Regulator registrations, industry-body counts, filings. |
| Replacement purchases | units per year | Measured replacement purchases, kept apart from all retirements; installed base ÷ useful life only when evidence shows that replacement flow. Tax or accounting lives are not replacement cycles. |
| First installations and capacity additions | units per year | Construction, licensing, or establishment statistics × units per site from deployment evidence, plus evidenced capacity added at existing sites. |
| Recognized selling price | currency per unit | Price lists or disclosed average selling price recognized by the supplier for that channel: the wholesale price when the distributor is its customer; a channel commission booked as an expense is not subtracted. |
| Installed base eligible for attachment, recurring price, consumption per unit | units; currency per unit per year | Disclosed attach, recurring price lists, consumption per unit from filings or documentation; these drive the separate recurring and consumables lines, never terms inside hardware revenue. Eligibility for an attachment is not current attachment. |

- Converting today's installed base to a new product is a one-time opportunity: report it on its own row, never as annual TAM.
- Shipments per year and installed base never multiply each other.

## Services or Hours

Potential = Σ segments ( N clients × e × outsourceable share × annual hours per client × blended hourly rate )

| Term | Unit | Evidence |
|---|---|---|
| N clients | organizations | Statistics-agency counts. |
| Outsourceable share | fraction | The share of the work technically and legally transferable to a vendor, independent of how much is outsourced today. A comparable segment's observed outsourcing rate may anchor a labeled demand scenario but does not set this share. Current spend = eligible clients × paying-client share × observed purchased hours per paying client × realized rate; never multiply purchased hours by an outsourcing share already reflected in them. |
| Annual hours per client, blended rate | hours; currency per hour | Statements of work, procurement awards, filings, published rate cards, disclosed revenue ÷ billable hours. |

- Size a project-priced service by project price × projects, or by hours × rate, never both for the same work.
- Staff utilization limits SOM, not TAM.
- Labor that automation would replace follows SKILL.md Step 8 item 2: it is the buyer's potential benefit, never vendor revenue.

## Advertising

Potential = min( advertiser demand, inventory revenue capacity )

advertiser demand = N advertisers × e × annual advertising budget × share of budget to this format

inventory revenue capacity = audience × sessions per person per year × impressions per session × fill rate × net eCPM ÷ 1,000; for search, commercial queries × click-through rate × cost per click

| Term | Unit | Evidence |
|---|---|---|
| Advertisers, budgets, format share | firms; currency per year; fraction | Statistics-agency counts, industry-body advertising spend reports with a published method, filings. |
| Audience, sessions, impressions, queries | people; sessions; impressions; queries | Measured panels, official population statistics, platform disclosures in filings. |
| eCPM, fill rate, click-through rate, cost per click | currency per 1,000 impressions; fractions; currency per click | Disclosed rates with their denominator and revenue presentation stated; industry-body reports. Deduct agency rebates or traffic-acquisition payments only when they are excluded from recognized revenue. |

- Inventory alone is revenue capacity, not demand; the two sides are joint limits.
- An advertising intermediary's revenue follows its principal-or-agent presentation: the gross spend it routes when it is the principal, its own take when it is the agent; report routed spend on its own labeled volume row either way.

## Bundles

Split a bundle into its lines, each with its own tree and frequency (one-time, annual, project), where its components are separately priced or have different recognition periods (SKILL.md Step 4 item 1). An indivisible bundle with one buyer unit and one recognition period is sized at its actual bundle price, without inventing component prices. When components have different recognition periods, allocate the bundle price by the seller's disclosed allocation or a labeled allocation scenario anchored to evidenced standalone prices, bound materially different allocations, and allocate across delivery periods before computing annual revenue; allocations must reconcile to the contract total. Never sum standalone prices for a buyer who pays the suite price.
