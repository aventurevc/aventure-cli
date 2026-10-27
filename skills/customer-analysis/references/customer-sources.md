# Customer Sources

Outside-in pathways for finding a subject's named customers, the roles that buy inside them, and what they buy for, using public evidence only. Each pathway lists what it reveals, the grade its items usually earn (buyer-ranking.md §1), recipes, and the traps that turn a lookalike into a false customer.

Endpoints, limits, and free tiers change; when a recipe fails, read the provider's current documentation instead of guessing a parameter. Search-engine queries below are discovery aids: open every result and cite the page, never the results list.

## 1. Choosing Pathways

Run every subject through §2, §3, §11, and §20. When the subject's brand is a common word, a person's name, or another company's product, add its legal name, company name, or category to every query, and discard results where the subject is the employer or the namesake. Search procurement and filing records under the legal name as well as the brand. Then add pathways by what the subject sells and to whom, running the ones that can yield grade A or B evidence first:

| Subject | Run first | Then |
|---|---|---|
| Public company, or a subject whose customers are public companies | §4 filings, §5 reverse filings | §11 press and calls, §6 procurement |
| Business software or services | §3 seller pages with archives, §9 customer subprocessor lists, §12 marketplace reviews | §10 job posts, §12 review sites, §13 technical traces, §6–§8 procurement |
| Seller to government, education, or utilities | §6 federal, §7 state and local, §8 international | §11 press, §4 filings |
| Physical goods, components, or contract manufacturing | §15 trade records, §5 reverse filings | §16 channel evidence, §6 procurement |
| Consumer brand or app | §4 the subject's disclosed customer data, §16 retailers and channels | §19 consumer measures, §15 trade records |
| Health care, life sciences, or medical devices | §17 purchasing organizations, device and trial registries | §7 public hospital approvals, §6 procurement |
| Developer tools or open-source companies | §14 package dependents, §10 job posts | §13 technical traces, §9 subprocessor lists |
| Any subject, as a last check | §18 bankruptcy and litigation, §20 counter-evidence | |

## 2. aVenture Records

- The subject: its news (`listNews` keyed on the subject's id) surfaces customer-win, contract, and deployment articles; its research and customer-type classifications are leads to verify.
- Each candidate customer: resolve it (`lookupEntityMatches` or `lookupRecord`, per the aventure skill §4) so the report links its record. On a matched customer, its funding rounds (`listEntityFundraiseRounds`) and news (`listNews`) are compelling-event and budget evidence for urgency; its people (`listEntityPersonAssociations`) are leads for buyer roles, confirmed elsewhere.
- For a reader selling into a ranked segment, the similar records of its top verified accounts (`listEntitySimilarEntities`) are prospects. Label them prospects, never customers.

## 3. The Subject's Own Pages, With Archives

- Reveals: named logos, case studies with the customer's industry, size, use case, prior tool, and outcome; often a quoted employee's name and title, which gives the role.
- Grade: B for a case study or release quoting a named customer employee; D for a bare logo or unattributed testimonial.
- Recipe: read `/customers`, `/case-studies`, `/stories`, industry and solution pages, pricing tier names, partner and integration pages, investor presentations, webinar and event pages. Date each logo with the Wayback Machine capture index, which lists only changed captures with `collapse=digest`:
  `https://web.archive.org/cdx/search/cdx?url=<subject-domain>/customers*&output=json&fl=timestamp,original,digest&filter=statuscode:200&collapse=digest&from=2022`
  Open the corresponding Wayback capture and compare logo image names and alt text between captures. The first capture with a logo dates adoption no later than that day; a logo gone from later captures is a former-customer lead.
  If the archive cannot be reached, record that as a gap and do not retry it; undated case studies then follow buyer-ranking.md §3.
- Traps: logo walls include pilots, free-tier teams, single departments, and accounts that churned years ago; account-targeted landing pages (usually unindexed, under paths like `/<industry>/<company>`, with a prospect's name in an otherwise templated page) address prospects and are not customer evidence; "trusted by teams at" can mean one employee signed up; a partner or investor logo is not a customer; a case study's outcome figures are the vendor's claim.

## 4. Securities Filings: the Subject's Own

- Reveals: dependence on named customers, revenue concentration, contract terms and counterparties, customer counts by spend band, and how customers buy (term length, billing, renewal).
- Grade: A for a filed contract or a customer named with its revenue share; B for a name in the business description, risk factors, or management's discussion.
- Disclosure context: Deloitte's ASC 280-10-50-42 discussion says a public entity discloses the revenue amount and segment for a customer at 10% or more of revenue, not the customer's identity; entities under common control and each government count as one customer (https://dart.deloitte.com/USDART/home/codification/presentation/asc280-10/roadmap-segment-reporting/chapter-5-entity-wide-disclosures/5-7-information-about-major-customers).
- Recipe: search the regulator's EDGAR interface and the issuer's filings using the subject's legal and brand names and plain terms such as largest customer, accounted for, significant customer, customer concentration, master services agreement, and supply agreement. Inspect annual and quarterly reports (10-K, 10-Q, 20-F), registration and offering documents (S-1, F-1, 424B4), and material-agreement announcements in 8-K filings.
  Follow the filing-document and exhibit links actually returned by the regulator; do not reconstruct document URLs from search identifiers. Follow the SEC's current automated-access policy. In a long filing, read the business section, risk factors, concentration note, and material-contract exhibits that hold the claim.
- Financial detail: inspect concentration disclosures in the filing's financial-report pages and any available tagged financial data, including Financial Statement and Notes data sets; use only the customer, amount, and period the opened record states.
- Traps: "Customer A" is often unnamed or a group of affiliates; a "customer" may be a distributor or a government counted as one; a named customer may have churned since the filing date.

## 5. Securities Filings: Customers Naming the Subject

- Reveals: a customer's own statement that it relies on the subject, often with the function (hosting, payments, payroll, a component) and sometimes a contract.
- Grade: B, customer-authored; A when the customer files the contract.
- Recipe: EDGAR full-text search for the subject's exact legal or brand name with phrases such as `"we rely on"`, `"third-party" "hosted"`, `"single source"`, `"sole supplier"`, `"agreement with"`, `"critical vendor"`, on forms 10-K, 20-F, 10-Q, and 8-K. Read the result's risk factors and exhibits.
- Non-US filings: Blakes' legal commentary describes Canadian material-contract filing rules and exceptions on SEDAR+ (https://www.blakes.com/insights/a-canadian-securities-law-primer-on-the-filing-of-material-contracts/); treat it as commentary, not current regulator proof. Inspect actual Canadian filings, UK strategic reports at Companies House or the issuer, and European ESEF annual reports discovered at https://filings.xbrl.org/ for any named customer or supplier facts; cite the regulator or issuer report for those facts.
- Traps: a name match may be a different company; the mention may be a competitor named in a risk factor, not a vendor.

## 6. Government Procurement: US Federal

- Reveals: the named agency and buying office, amount, period of performance (frequency), and description (use case). Free and the strongest evidence for a government buyer.
- Grade: A.
- Recipe: USAspending award search, no key (https://api.usaspending.gov/docs/endpoints; request contract: https://github.com/fedspendingtransparency/usaspending-api/blob/master/usaspending_api/api_contracts/contracts/v2/search/spending_by_award.md):
  ```
  POST https://api.usaspending.gov/api/v2/search/spending_by_award/
  {"filters":{"recipient_search_text":["<subject name or UEI>"],
    "award_type_codes":["A","B","C","D"],
    "time_period":[{"start_date":"2024-10-01","end_date":"2026-09-30"}]},
   "fields":["Award ID","Recipient Name","Awarding Agency","Awarding Sub Agency","Award Amount","Start Date","End Date","Description"],
   "limit":100,"sort":"Award Amount","order":"desc"}
  ```
  Use a keywords filter with the subject's product name to find awards made to resellers, and `"spending_level":"subawards"` to find the subject as a subcontractor, which names the prime contractor as its customer. This endpoint accepts POST only, and the award pages on www.usaspending.gov render in the browser, so a fetch tool that can only GET will read neither. Then record federal awards as not reachable rather than citing a data-provider listing in their place. Search under the recipient's legal name from its SAM.gov registration.
  SAM.gov: SAM announced FPDS.gov's ezSearch decommissioning for 24 February 2026 (https://sam.gov/announcements/fpdsgov-decommissions-february-24-2026-0); contract award data now comes from the SAM.gov Contract Awards API (https://open.gsa.gov/api/contract-awards/), and the Entity API resolves public recipient identity and registration data (https://open.gsa.gov/api/entity-api/). Its parent-hierarchy data is restricted FOUO/CUI, not an unrestricted public lookup. A personal SAM.gov key without a role is limited to a few requests a day.
- Traps: much software is bought through resellers such as Carahsoft, SHI, and CDW-G, so the recipient is the reseller and the buying agency is the subject's end customer; the awarding office may not be the using office (read the funding office); an indefinite-delivery vehicle or blanket purchase agreement is a ceiling, not spend.

## 7. Government Procurement: State, Local, and Education

- Reveals: council or board approval of a named vendor contract, its amount and term, the requesting department (the buying role), and the staff report (the use case); payment ledgers give frequency.
- Grade: A once approved or paid.
- Recipes:
  - Legistar's documented Matters collection (https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters) is at `https://webapi.legistar.com/v1/<client>/Matters`. Search under the brand and the legal name, and cite each matter at `https://webapi.legistar.com/v1/<client>/Matters/<MatterId>`, using the council's actual client code and returned matter ID. Attachments hold the staff report and contract and may be blocked to automated fetches; record what the matter text states. Many county and small-city agendas are plain web pages or PDFs, found by searching `"<subject>" agenda OR minutes "<county or city>"`.
  - School and other boards on BoardDocs or BoardBook: search `site:go.boarddocs.com "<subject>"` and `site:meetings.boardbook.org "<subject>"`, then open the agenda item.
  - Search local checkbooks and transparency portals for payments to named vendors by agency and date.
  - E-Rate, for school and library connectivity and network equipment (https://opendata.usac.org/resource/avi8-svp9.json): filter on the provider name to list named schools and libraries, service types, and costs.
- Traps: a cooperative purchasing contract lets many agencies buy but proves no purchase by any one; an approval may precede a contract that was never signed.

## 8. Government Procurement: Outside the US

- UK: award notices under the Procurement Act 2023 are on Find a Tender, whose open release API filters by date and stage only, with no supplier search (https://www.find-tender.service.gov.uk/apidocumentation/1.0/GET-ocdsReleasePackages), so search supplier names on the website; the duty to publish public contracts over £5 million has authority- and contract-specific exceptions (https://www.gov.uk/government/publications/procurement-act-2023-guidance-documents-procure-phase/guidance-contract-details-notices-html); earlier awards remain on Contracts Finder. Search local authorities' supplier payment ledgers for dates and amounts to establish payment frequency by buyer.
- EU: TED notices search API, no key (https://docs.ted.europa.eu/api/latest/search.html).
- Canada: search federal contract disclosures and CanadaBuys award notices; open the actual record to establish the vendor, buying body, value, and dates it discloses.
- Grade: A. Traps as in §6 and §7.

## 9. Customer Subprocessor Lists

- Reveals: a company's own statement that the subject processes its data, with the purpose column stating the use case. One of the strongest free signals for business software.
- Grade: B, customer-authored.
- Recipe: search `"subprocessors" "<subject>"`, `intitle:"sub-processors" "<subject>"`, `inurl:subprocessors "<subject>"`, and `"sub-processor" "<subject>" privacy`. Example of the shape: https://chartmogul.com/privacy/subprocessors/
- Traps: lists go stale; a vendor may serve one optional feature; the list may name the subject's regional affiliate; the subject's own subprocessor list names its vendors, not its customers.

## 10. Job Posts

- Reveals: which team and title at a named company operate the product and what for, and whether the company is building, migrating to, or replacing it. The best evidence for roles; weak evidence of a paid contract.
- Grade: D.
- Recipes: public job-board APIs need no key: Greenhouse `https://boards-api.greenhouse.io/v1/boards/<company>/jobs?content=true`, Lever `https://api.lever.co/v0/postings/<company>?mode=json`, Ashby `https://api.ashbyhq.com/posting-api/job-board/<company>` (https://docs.greenhouse.io/job-board.html, https://github.com/lever/postings-api, https://developers.ashbyhq.com/docs/public-job-posting-api). To find companies, search `site:job-boards.greenhouse.io "<product>"`, `site:boards.greenhouse.io "<product>"`, `site:jobs.lever.co "<product>"`, `site:jobs.ashbyhq.com "<product>"`. Match the product name exactly; short or common names need the subject's company name too.
- Government buyers rarely name products in postings; use §6–§8 for them instead.
- Traps: the subject's own openings; "or similar" and "nice to have" mentions; recruiter and agency posts; posts for migrating away from the product; consultancies listing every client tool.

## 11. Press, Calls, Talks, and Engineering Posts

- Reveals: customer wins with dates, the customer executive quoted (role), the use case, and sometimes scope or value.
- Grade: B for a joint release or a customer-authored post or talk; D for a vendor-only release naming no customer person.
- Recipes: `site:businesswire.com OR site:prnewswire.com OR site:globenewswire.com "<subject>" (selects OR chooses OR deploys OR "standardizes on" OR expands)`; EDGAR full-text search also returns releases filed as 8-K exhibits. Read the subject's and the customer's earnings call transcripts for named wins and vendor choices. Search the subject's conference and user-group agendas for customer speakers, and `"migrated to <subject>"` or `"how we use <subject>"` for engineering posts.
- Local and investigative reporting built on public records (council votes, invoices, records requests) often carries the contract value, term, and cancellations; grade it B when it quotes or reproduces the record, and open the record itself when it links one.
- Traps: "partnership", "collaboration", "memorandum of understanding", "pilot", and "proof of concept" are not purchases; "a Fortune 100 bank" names no one; a reseller's announcement is not the end customer's.

## 12. Reviews and Marketplaces

- Reveals: the reviewer's title, function, company size, industry, how long they have used the product, what problem it solves, the tool it replaced, and what fails. Role and use-case evidence for personas; company names where the platform shows them.
- Grade: B for a marketplace review posted under a named business; D otherwise.
- Platforms: G2 segments reviewers as Small Business (50 or fewer employees), Mid-Market (51 to 1,000), and Enterprise (more than 1,000), and lets reviewers choose whether to show their name and company (https://documentation.g2.com/docs/research-scoring-methodologies). Use Gartner Peer Insights and TrustRadius reviews for whatever reviewer and account fields the actual review makes available; record undisclosed fields as gaps. Shopify App Store reviews show the store name, country, time using the app, and date (https://apps.shopify.com/klaviyo-email-marketing/reviews is an example). Salesforce AppExchange, Atlassian Marketplace, and AWS Marketplace reviews vary in what they show.
- Recipe: read low, middle, and high ratings, record each reviewer's title, size, industry, and the problem-solved text, and tally titles by segment to support personas.
- Traps: vendor-solicited and incentivized reviews; reviewers who are consultants or partners, or who used the product at a past employer; a size bucket is not a named account.

## 13. Technical Traces

- Reveals: that a named company has claimed or configured an account with the subject at some date. No proof of payment or seats.
- Grade: C.
- Recipes: DNS records through `https://dns.google/resolve?name=<customer-domain>&type=TXT` (also MX, CNAME, and the `_dmarc` subdomain): verification tokens, mail-sending includes, and support or status subdomains pointing at the subject. For trust-center, status-page, and help-desk vendors, resolve the `trust.`, `security.`, `status.`, and `help.` subdomains of each candidate's domain (type CNAME): the target names the vendor in use, and a competitor's target is counter-evidence. Each lookup is one request, so run it on ranked candidates, not on a whole list. Certificate transparency at https://crt.sh shows subdomains named for the subject. Web technology detection (BuiltWith, Wappalyzer, and similar) shows front-end tags only; their install-base lists are estimates, grade E.
- Traps: tokens outlive cancellations and can come from one employee's trial; back-office software leaves no front-end trace.

## 14. Package Dependents

- Reveals: developer adoption by named organizations of the subject's SDK or library.
- Grade: C.
- Recipe: the repository's dependents page at `https://github.com/<owner>/<repo>/network/dependents`. The deps.dev v3 reference (https://docs.deps.dev/api/v3/) documents package metadata and forward dependency graphs; do not treat those as a reverse-dependent list. Keep only repositories owned by an organization whose domain maps to a company.
- Traps: personal forks, tutorials, and archived repositories; free open-source use is not a purchase.

## 15. Trade Records

- Reveals: named consignees and shippers in US ocean imports, shipment counts and cadence (frequency), and product descriptions. The strongest free evidence for physical-goods relationships.
- Grade: A.
- Recipe: ImportYeti company and supplier pages built from US customs manifests, for example https://www.importyeti.com/company/peloton-interactive; paid services (Panjiva, ImportGenius) add countries and fields.
- Traps: the consignee may be a freight forwarder, logistics provider, or customs broker; importers can request manifest confidentiality; air and land freight and non-US imports are absent; a subsidiary or distribution center may be named instead of the buyer.

## 16. Channel and Distribution

- Reveals: the retailers, distributors, and resellers that buy the subject's goods for resale, and where end buyers find it.
- Grade: A when a filing names the retailer with its revenue share (§4); D for a store locator or distributor line card.
- Recipe: the subject's "where to buy" and partner directories, distributor line cards, retailer product pages, and marketplace storefronts; confirm the largest with §4 and §15.
- Traps: a distributor is not the end customer; a locator listing is not current shelf presence; marketplace sellers may be unauthorized resellers.

## 17. Health Care and Life Sciences

- Group purchasing organizations announce supplier agreements (for example https://premierinc.com/newsroom/premier-announces-new-supplier-agreements-july-august-september); an agreement grants access to member hospitals, not a purchase by any one, so confirm hospital buyers through §7 approvals and payments.
- FDA device registration and listing (https://api.fda.gov/device/registrationlisting.json) and 510(k) data name owners, operators, and contract manufacturers.
- ClinicalTrials.gov's study API names sponsors and collaborators, which shows contract research and manufacturing relationships.
- CMS Open Payments' program overview (https://www.cms.gov/priorities/key-initiatives/open-payments) and covered-recipient documentation (https://www.cms.gov/priorities/key-initiatives/open-payments/program-participants/covered-recipients) describe reported manufacturer payments to physicians, advanced-practice providers, and teaching hospitals. Use those records as evidence of the personas a manufacturer targets, grade D, not of customer purchases.

## 18. Bankruptcy and Litigation

- Reveals: executory contract schedules and creditor lists name customers and vendors with contract types; contract disputes name the parties, value, and use.
- Grade: A.
- Recipe: claims-agent sites (Kroll, Stretto, Epiq, Omni) for a bankrupt subject or customer; CourtListener search for the subject's name in court records (https://wiki.free.law/c/courtlistener/help/api/rest/v4/search). State attorney general and HHS breach notices that name a vendor incident list the vendor's affected customers.

## 19. Consumer Measures

- A consumer business has few nameable customers; its rows are measured segments plus its named channel customers (§16).
- Sources, strongest first: the subject's own disclosed customer data (members, orders, cohorts, demographics) in filings and reports; statistics agencies for the category; named panel providers (Bloomberg Second Measure, Consumer Edge, YipitData) for spend and cohorts, labeled by provider and graded E; web audience estimates (Similarweb) labeled as estimates.
- Reviews, app-store text, and forum posts supply use cases and triggers in buyers' words, not demographics; app-store reviews carry no reliable age, gender, or income data.
- Traps: panels skew by age, income, and bank mix; never present a panel estimate as the subject's reported figure.

## 20. Counter-Evidence and Churn

Run against every account that will rank in the top urgency tiers and against the largest by spend:

- A logo or case study missing from later archive captures (§3).
- `"migrated from <subject>"`, `"replaced <subject>"`, `"moved off <subject>"`, and `"<subject> alternative"` posts by the account's employees.
- A competitor's case study, release, or award naming the same account.
- A re-competed public contract awarded to someone else (§6–§8).
- A verification token, subprocessor entry, or dependency removed since an earlier read, or a trust-center subdomain pointing at a competitor (§13).
- A governing-body vote against renewal, a funding pause, a partial cancellation, or a request for proposal seeking alternatives, from §7 records and local reporting.
- Published trackers or reporting that list buyers who cancelled; open each buyer's own record where one exists.

Record each finding with its date beside the account. A full switch or cancellation dated after the latest positive evidence makes the account former; a partial one makes it contracted; a pending re-compete, vote, or funding pause sets its retention signal to at risk (buyer-ranking.md §2 and §5).

## 21. Data Providers

- Bloomberg: the Bloomberg SPLC manual hosted by Emory (https://prod.libraries.emory.edu/sites/default/files/migrated-documents/db-pages/bloomberg-splc.pdf), updated 23 September 2011, describes filings, call transcripts, presentations, releases, company websites, and proprietary mathematically or algorithmically derived links. Treat that as the manual's description, not proof of current coverage.
- FactSet: HBS Baker Library's description of Revere Supply Chain Relationships (https://www.library.hbs.edu/databases-cases-and-more/datasets/factset-revere-supply-chain-relationships) describes primary-source relationships, reverse-linked to non-disclosing parties, and customer, supplier, partner, and competitor categories.
- Compustat is another possible provider pathway; inspect the current product definitions and the actual record's sources before claiming a customer link, field, or coverage.

Cite each by publisher. A link traced to a disclosure takes that disclosure's grade only after you open it; label provider-derived values separately, and grade estimated links E.
