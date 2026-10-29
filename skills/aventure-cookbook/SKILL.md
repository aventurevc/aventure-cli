---
name: aventure-cookbook
description: "Use for multi-step aVenture research recipes: company briefs, funding histories, round investors, investor portfolios, founder backgrounds, competitor sets, news monitoring, and resolving a list of names."
metadata:
  title: aVenture Cookbook
---

# aVenture Cookbook

Each recipe chains aVenture reads into one answer. The `aventure` skill owns setup, finding an operation, lookup statuses, visibility filters, and error handling; read it first. Commands are CLI spellings; `aventure` §4.1 names each one's MCP `operationId`, and `aventure help <command>` prints its CLI, MCP, and REST forms. Add `--data` when fields matter.

## §1 Resolve First

Objective:
- Resolve the subject id before following a recipe's related-record reads.

Steps:
1. Every recipe starts from an id. An aventure.vc URL, website, or slug resolves with full detail in one call (`aventure` §0). Turn a name into an id with `aventure lookup-from-file --name "<name>" [--kind ENTITY|PERSON] ...`.
2. Continue only on a returned exact detail or `MATCHED`. On `NEEDS_REVIEW`, follow `aventure` §4's candidate evidence refinement before asking the user about an exclusively user-held separating fact; on `NO_MATCH`, run `aventure` §4's source-stated name check, then record that no visible record in the requested scope matched, offer `aventure` §4.2 research for it, and stop that branch.

Prohibited:
- A status decision that bypasses `aventure` §4's evidence rules.

## §2 Company Brief

1. The §1 exact lookup already returns names, description, headquarters, founding year, logo, links, rounds, people, news, and research (`aventure` §0); from a bare id, read `aventure entities get --entity-id "<id>"` (`getEntity`).
2. For a section the detail omits or truncates, issue its reads together (`aventure` §0): `entities fundraise-rounds list --entity-id "<id>"` (`listEntityFundraiseRounds`) for rounds; `entities people list --entity-id "<id>" --is-current true` (`listEntityPersonAssociations`) for current leaders; `news list --owner-entity-id "<id>" --size 5` (`listNews`) for coverage.
3. Report each fact with the record and its source URL. Omit a section whose read returned nothing, rather than guessing it.
4. The rounds section lists the rounds aVenture records, not every round the company raised, so title it with the latest recorded round's date. When the record's news or research, or any other source in the answer, names a round missing from that list, add the round as a row marked as not in aVenture with its source URL, and offer `aventure` §4.2 research for it.

## §3 Who Invested in a Round

1. `aventure entities fundraise-rounds list --entity-id "<company-id>"` and pick the round's label, such as `Series B`.
2. `aventure entities fundraise-investor-joins list --entity-id "<company-id>" --round "<label>"`: one row per investor; each names `investor.entityId` or `investor.personId`.
3. Read an investor by that id with `entities get` or `people get` when the user needs more than the name.

## §4 Investor Portfolio

1. Resolve the firm (§1).
2. `aventure entities investments list --entity-id "<investor-id>"`: what it backed. Narrow with `--round`, `--date-from`, `--date-to`, `--min-amount`, or `--max-amount`; `--latest-per-entity true` keeps one row per portfolio company.
3. For an angel, resolve the person and run `aventure people investments list --person-id "<id>"`.
4. `aventure entities investors list --entity-id "<company-id>"` answers the reverse question: who backed this company.

## §5 Founder Background

1. Resolve the person (§1), passing the company in `--context` when the name is common.
2. `aventure people get --person-id "<id>"`: profile and links.
3. `aventure people entities list --person-id "<id>"`: every company role, current and past.
4. `aventure people investments list --person-id "<id>"`: angel investments.

## §6 Competitors and Peers

1. Resolve the company (§1), then call `aventure entities similar list --entity-id "<id>"` (`listEntitySimilarEntities` via `aventure_read`, `pathParams.entityId` = the resolved id). For “fintech startups similar to Brex”, resolve Brex and read its ranked peers; keep only those whose returned fields support the requested scope. Add `--relationship-type competitor` only for stored competitors, not general similarity.
2. Cite each returned record and distinguish ranked similarity from a stored competitor relationship; never substitute competitors from memory. Never claim similarity retrieval failed without making that call; report an actual error or empty result as such.
3. `aventure entities relationships list --entity-id "<id>"`: parents, subsidiaries, products, and other stored links.
4. To discover companies rather than peers of a known company, follow `aventure` §7.2's free-first search route; use its paid natural-search step for description matching only with paid access, and read `interpretation` before trusting the scope.

## §7 News Monitoring

1. `aventure news list --owner-entity-id "<id>" --published-after "<YYYY-MM-DD>"`: articles about a company since a date; `--owner-person-id` does the same for a person.
2. `aventure entities trending-news list --entity-id "<id>"`: the most-read coverage.
3. `aventure news get --news-id "<id>"` reads the full article `content`.
4. Choose the article path by outcome: `aventure lookup mentions --source-url "<article-url>"` returns synchronous identifications and may file thin hidden shells, queueing research on them only with `--schedule-enrichment true`; `aventure lookup mentions --max-names "<N>" --source-url "<article-url>"` is lookup-only bounded work with no shells or enrichment, answered as a job. Read a returned job with `aventure lookup jobs get --job-id "<job-id>"`.

## §8 Resolve a List of Names

Objective:
- Return resolved rows after each ambiguous row's source evidence is checked.

Steps:
1. Resolve company ids, slugs, or URLs together with one `aventure entities lookup-matches` call, which answers `MATCHED`, `AMBIGUOUS`, or `MISSING` per input. Resolve each name row with one `aventure lookup-from-file --kind ENTITY` (`--kind PERSON` for a person row), with every clue that identifies the subject: website, location, industry, and source URL.
2. Apply `aventure` §4's evidence refinement once to each `NEEDS_REVIEW` row, then record its resulting `status`, matched id, or remaining candidates with their `probability`.
3. Return the table in input order. Ask only for the remaining separating fact that the user alone can provide; keep externally researchable identity gaps in the evidence workflow.

Prohibited:
- Filling a `NO_MATCH` row with a guessed record or asking for a decision before its evidence refinement.
