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
- Exclude refunded or reversed transactions.
- With no measured event volume, the line is not estimable bottom-up (SKILL.md Step 12 item 6); never derive volume from a revenue and a price that share one unknown.

## Take-Rate Marketplace

GMV = Σ segments min( demand-side GMV, supply-side capacity GMV )

demand-side GMV = N buyers × e × orders per buyer per year × average order value; for wholesale, where no source measures orders, buyer receipts (statistics agency) × the purchases-to-sales ratio for that kind of business (an official trade survey) × the share bought from suppliers the marketplace can carry

Revenue = GMV × net take rate + revenue lines the take rate excludes (subscriptions, advertising)

| Term | Unit | Evidence |
|---|---|---|
| N buyers | buyers (or sellers, for a seller-paid side) | Statistics-agency counts of the paying side. |
| Orders per buyer per year, average order value | orders; currency per order | Filings of public marketplaces in the same category; official trade or consumption statistics. |
| Supply-side capacity | currency per year | Licensed or scarce supply (licensed providers, inventory, capacity) × its throughput; use it when supply is licensed or scarce. |
| Net take rate | fraction of GMV | The fee schedule (seller fee plus buyer fee), net of marketplace-funded incentives and pass-through payment or insurance costs; or a disclosed take rate. Divide revenue by GMV only for the same period and after removing lines the take rate excludes (advertising, subscriptions); otherwise the take rate is assumed and bounded by the fee schedule. |

- Buyer and seller fees on one order are one GMV pool, not two.
- Report GMV and revenue on separate rows; compare GMV only with GMV and revenue only with revenue.
- Never subtract operating costs to make a "net revenue" figure.

## Unit Hardware

Annual potential = Σ segments ( annual units × net selling price ) + installed base × attach rate × annual recurring price + installed base × consumables per unit per year × consumable price

annual units = replacement units + net installed-base growth, where net growth is built from new-site units plus units added at existing sites, or taken from a measured change in the installed base; never both

| Term | Unit | Evidence |
|---|---|---|
| Installed base | units in service | Regulator registrations, industry-body counts, filings. |
| Replacement units | units per year | Measured replacement or retirement counts; installed base ÷ useful life only when a source shows the age distribution supports it. Tax or accounting lives are not replacement cycles. |
| New-site units | units per year | Construction, licensing, or establishment statistics × units per site from deployment evidence. |
| Net selling price | currency per unit | Price lists or disclosed average selling price; the wholesale price net of channel margin when sold through a channel. |
| Attach rate, recurring price, consumables | fraction; currency per unit per year | Disclosed attach, recurring price lists, consumption per unit from filings or documentation. |

- Converting today's installed base to a new product is a one-time opportunity: report it on its own row, never as annual TAM.
- Shipments per year and installed base never multiply each other.

## Services or Hours

Potential = Σ segments ( N clients × e × outsourceable share × annual hours per client × blended hourly rate )

| Term | Unit | Evidence |
|---|---|---|
| N clients | organizations | Statistics-agency counts. |
| Outsourceable share | fraction | The measured share of the work that buyers may and do buy from vendors where outsourcing is permitted, from the highest measured share in a comparable segment or jurisdiction (a survey with a published sample, procurement data). The share outsourced today is d for current spend, never this term. |
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
| Net eCPM, fill rate, click-through rate, cost per click | currency per 1,000 impressions; fractions; currency per click | Disclosed rates net of agency rebates and traffic-acquisition cost; industry-body reports. |

- Inventory alone is revenue capacity, not demand; the two sides are joint limits.
- An advertising intermediary's revenue is the gross spend it routes × its own net take.

## Bundles

A bundle splits into its lines, each with its own tree and frequency (one-time, annual, project). The bundle price allocates to lines by the seller's disclosed allocation; without one, size each line at its standalone price and enter the bundle discount for buyers who take several lines as a range term. Never sum standalone prices for a buyer who pays the suite price.
