# Buyer Ranking

Evidence grades, customer status, and the ordinal tiers the customer-analysis skill ranks with. The tiers are definitions, not scores: never add, weight, or multiply them. A context that needs different windows or bands may change them; the report then states the values it used.

The evidence grades, status rules, tier boundaries, and confidence levels below are this guide's definitions, not universal empirical measures.

## 1. Evidence Grades

Grade every evidence item once, by what it records:

| Grade | What the item records | Examples |
|---|---|---|
| A | A transaction or contract naming both parties, read in the record itself | Public award, contract notice, council or board approval, order form, invoice, payment ledger line, filed material contract, filing naming the customer with its revenue share, ocean bill of lading, bankruptcy contract schedule, court filing over the contract |
| B | A first-party or reported statement naming the other party | The customer's own filing, subprocessor list, release, engineering post, or conference talk; a joint release; a case study by the subject or a third party (auditor, partner) quoting a named customer employee; a marketplace review posted under the customer's business name; independent reporting that quotes or reproduces a grade A record you could not open |
| C | A technical trace of use | DNS verification token, a trust-center, status, or support subdomain pointing at the subject, a mail record, a detected script, an organization-owned repository depending on the subject's package |
| D | A use, skill, or seller-claimed signal | Job post at the customer naming the product, review whose profile shows the company, employee profile or certification listing the product, the subject's bare logo or unattributed testimonial, reporting that names a customer without a record behind it |
| E | A model or estimate | Data-provider install-base estimate or award listing, algorithmic supply-chain link, panel extrapolation |

Customer-authored means written or published by the customer: its own filing, page, post, talk, or record. A customer employee quoted on someone else's page is not customer-authored.

Two items are independent only when each could have been wrong without the other. A release and its syndicated copies are one origin; the subject's logo, case study, and blog post about the same account are one origin; two articles reporting the same invoice are one origin.

## 2. Customer Status

| Status | Required evidence |
|---|---|
| Verified | One grade A item, or one customer-authored or joint grade B item, inside the currency window and not contradicted |
| Probable | Any other grade B item, or two independent grade C or D items from different origins, inside the currency window |
| Possible | One grade C, D, or E item |
| Contracted | A partial cancellation, reduced scope, or reduced volume dated after the latest positive evidence |
| Former | Evidence of removal, migration, cancellation, or a replacement award dated after the latest positive evidence |
| Status unknown | No dated positive evidence inside the currency window and no contract term shown to cover the as-of date, including when the positive evidence is undated |

Only verified, probable, and contracted accounts can hold urgency tiers U1 or U2. A possible account is listed with its evidence and ranked below every verified, probable, and contracted account.

## 3. Currency Windows

Defaults, measured back from the report's as-of date:

- A customer is current when positive evidence is dated within the last 24 months, or a contract term on record covers the as-of date.
- Keep an undated item's source date as "undated" and record the date read separately, whether the item is live, archived, or copied. It does not establish current customer status; use status unknown unless dated positive evidence inside the currency window or a contract term establishes currency.
- A retention signal (§5) counts when dated within the last 12 months or scheduled within the next 12.
- A named person is called current in a role only when a source dated within the last 12 months places them there; otherwise write "as of" the source's date.

## 4. Purchase Urgency

How urgently the account needed what it bought, judged at the purchase the evidence describes, whatever its date. When the context names a different purchase (for example, a reader selling an adjacent product into the subject's customers), judge urgency for that purchase at each account instead, and say so.

Four components, each with the evidence that counts:

- **Pain:** a consequence stated by the buyer or by a named buyer employee (lost revenue, outage, fine, audit finding, backlog, missed deadline, a deal blocked by a missing requirement); a risk factor or earnings-call statement naming the problem; a low review of the prior tool naming a failure the buyer could not work around; a workaround documented by the buyer or a named buyer employee (spreadsheets, scripts, staff hired to do the job by hand); the customer's own filing or subprocessor list placing the product in the service it sells. Feature wishes, future-tense intent, and the vendor's narration of the buyer's pain do not count.
- **Compelling event:** dated, owned by the buyer, with a consequence if missed, before or at the purchase: a regulation or certification deadline that applied to the account, a prior contract expiring or being re-competed, a prior product reaching end of life, an acquisition integration, a new executive owner of the job, a disclosed breach, outage, or crime spike, a customer requirement the buyer had to meet, or a financing or budget that named the initiative. The seller's quarter end never counts.
- **Active search:** a request for proposal or information, tender, or sources-sought notice; a statement that the buyer evaluated named alternatives; job posts to evaluate, select, or implement the category; employees publicly asking for alternatives; several roles at the account engaging the topic at once.
- **Budget and authority:** an approval, budget line, grant, or appropriation; capital or operating guidance naming the initiative; a tender's estimated value; a funded owner at director level or above; prior spend in the category.

| Tier | Required components |
|---|---|
| U1 Acute | Pain and all three other components, with at least two of the four from independent sources |
| U2 Active | Pain and any two of compelling event, active search, and budget |
| U3 Latent | Pain or workaround evidence, with at most one other component |
| U4 Unproven | No pain evidence: fit, firmographics, or analyst inference only |

## 5. Retention Signal

For an account already buying, record its next decision beside urgency. Urgency says how badly it needed the purchase; the retention signal says which way the next renewal points.

| Signal | Evidence dated inside the window (§3) |
|---|---|
| Expanding | A later award, amendment, or order adding scope, seats, sites, volume, or a second product line |
| Stable | A renewal, extension, or new term covering the as-of date, with no at-risk evidence |
| At risk | A re-compete or request for proposal seeking alternatives, a funding pause or withdrawal, a governing-body vote or motion against renewal, a partial cancellation, a competitor's product found in the same role, or the buyer's public complaint naming the subject |
| No signal | None of the above found |

An at-risk signal is not active search for the subject: never let it raise urgency.

## 6. Frequency Tiers

The cadence of the decision that pays the subject. Take it from the account's own evidence first. Otherwise use the product's purchase unit from the skill's Step 2, or the cadence of the job itself (an annual audit, a monthly payroll), and label the tier product-level at no higher than Low confidence, applying §8.

| Tier | Cadence and evidence |
|---|---|
| F1 Continuous | Purchases or consumption billed at intervals of a quarter or less: usage, transaction, or consumption pricing; replenished consumables; repeated shipments in trade records; monthly payments in a ledger |
| F2 Annual | Renewal or re-purchase at intervals longer than a quarter and up to about 18 months: annual subscriptions, one-year or six-month terms, annual appropriations or award modifications |
| F3 Multi-year | Terms of two to five years, framework agreements, or re-competes; the period of performance on an award |
| F4 Episodic | Capital or project purchases replaced over longer than five years, or one-time purchases |

Add "+" when the retention signal is expanding. A vendor-wide retention or expansion metric describes a segment, never an account.

## 7. Spend Bands

Annualized spend by the account with the subject, in the subject's reporting currency:

| Band | Annual spend |
|---|---|
| S1 | 1,000,000 or more |
| S2 | 100,000 to 999,999 |
| S3 | 10,000 to 99,999 |
| S4 | under 10,000 |

Each band carries its basis:

- Direct: an award obligation, invoice, payment record, order form, filing, or a figure the buyer states.
- Authorized: a not-to-exceed amount approved for one named buyer's fixed-term contract, annualized over its term. Low confidence at most, and labeled "authorized" wherever it appears.
- Derived: a unit price from a published price list or from another buyer's public record, multiplied by a unit count observed at this account (cameras, seats, sites, shipments), with the inputs shown. A price from another buyer's record caps the cell at Low confidence.
- Analog: a comparable buyer's disclosed spend, or the subject's count of customers above a spend threshold. It can band a segment but never places a named account in a band by itself.

Annualize a multi-year amount over its term. A shared ceiling, a cooperative or framework vehicle open to many buyers, or a data-provider total is not spend for any one account. Where a filing states the account's share of the subject's revenue, report the share beside the band. A row with unknown spend is marked unknown, never estimated.

## 8. Confidence

Set confidence for each tier cell, apart from the tier itself:

1. Start from the strongest item that decides the cell: High for grade A or a customer-authored grade B item; Moderate for any other grade B item; Low for grades C and D; Very low for grade E and the subject's unattributed claims.
2. Lower it one level for each of: evidence about the segment applied to the account; a single source; an undated item or one older than its window; a conflict of interest (vendor-authored, sponsored, or incentivized); an unresolved contradiction.
3. Raise it one level when two independent items of different grades or types agree and share no bias.
4. Record contradicting evidence beside the cell instead of dropping it.

## 9. Sort Order

Default, for a reader choosing whom to sell to, compete for, or study:

1. Customer status: verified, probable, and contracted before status unknown, then possible.
2. Urgency tier, U1 first; within a tier, Moderate or High confidence before Low or Very low, which are flagged "needs verification".
3. Frequency tier, F1 first, "+" ahead of the same tier without it, unknown last.
4. Spend band, S1 first, unknown last.
5. Number of independent origins, more first.
6. Latest evidence date, newer first.

Revenue-dependence order, for a reader assessing concentration or churn risk: customer status, then spend band, then frequency, then retention signal (at risk before no signal, stable, and expanding, so exposure leads), then steps 5 and 6. Former accounts are listed separately with their dates and destinations.

Segments rank by the tiers most of their verified and probable accounts share, then by verified and probable count, then by disclosed revenue share. Within an account, list roles as economic buyer, champion, technical evaluator, user, and procurement or security reviewer; list blocker evidence as a risk.

## 10. Likelihood Terms

A forward-looking statement (a renewal, a re-competition, a switch) uses one qualitative term below, not a percentage inferred from the term. Keep likelihood separate from evidence confidence; never put both in the same sentence. Include a numeric forecast only when a cited calibration applies to it, and name that calibration.

| Term |
|---|
| almost no chance |
| very unlikely |
| unlikely |
| roughly even chance |
| likely |
| very likely |
| almost certain |
