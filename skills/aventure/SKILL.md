---
name: aventure
description: "Use to read aVenture research data on private companies, founders, investors, funding rounds, and news through its API, CLI, or MCP server."
metadata:
  title: aVenture
---

# aVenture

aVenture holds research records on companies (including products, services, and funds), people, and news, plus their funding rounds, investors, relationships, and text. Each operation has three projections: a REST call on `https://api.aventure.vc`, an `aventure` CLI command, and an MCP tool call. Docs: https://docs.aventure.vc (agent index: https://docs.aventure.vc/llms.txt).

## §0 MCP Quick Path

1. An aventure.vc URL, website, domain, or slug resolves in one `aventure_read` call: `{"operationId": "getEntityLookup", "query": {"url": "<url>"}}` (or `"query": {"slug": "<slug>"}`); a person uses `getPersonLookup`. `aventure_lookup` refuses it.
2. The returned EntityDetail already holds names, text, links, `fundingDetail`, `fundraiseRound`, `newsArticle`, `person`, and `research`; never re-read it with `getEntity`, `listEntities`, or `getEntityResearch`, or web-search a fact it holds.
3. Read a sub-resource (§4.1) only for a section the detail omits or truncates, passing the returned id as `pathParams.entityId`. Issue independent reads in one turn as parallel tool calls.
4. Call `aventure_help` with `"resolve": true` only when this skill names no operation for the task.
5. After an unknown-`operationId` error, use one of its suggestions (§2).
6. A question across companies, people, and news uses one `aventure_search` call: `{"operationId":"searchFederated","body":{"query":"<question>"},"query":{"layer":["synthesis"]}}`. Consume its record pages, cited answer, and related searches together; insufficient evidence returns an abstention. CLI: `aventure search '<question>' --layer synthesis`.

## §1 Surfaces and Setup

1. Every call needs a free or paid aVenture account; sign up at https://aventure.vc/sign-up.
2. Use the surface the user named, else the one already connected in this session:
   - CLI: `npm install --global @aventurevc/aventure-cli` (Node.js 24.18.0 or later), then `aventure auth login`. Non-interactive shells take an API key from https://aventure.vc/settings/api-keys in `AUTH_TOKEN`.
   - MCP: the hosted server `https://mcp.aventure.vc/mcp`, Streamable HTTP, browser OAuth sign-in through its advertised authorization server. Clients supporting dynamic registration leave client fields blank; clients requiring pre-registration use OAuth client ID `KL7mINzGk0le0QiD`. Claude Code: `claude mcp add --scope user --transport http --client-id KL7mINzGk0le0QiD --callback-port 6276 aventure https://mcp.aventure.vc/mcp`, then `/mcp`, select `aventure`, and sign in. Other clients: https://docs.aventure.vc/mcp
   - API: `Authorization: Bearer <api-key>`. Quickstart: https://docs.aventure.vc/quickstart
3. Never print, log, or echo a key or token.
4. A `401` means the sign-in is missing or expired; the error `detail` names the fix. CLI: apply the per-check fixes `aventure auth doctor` reports, or have the user run `aventure auth login`. MCP: have the user reconnect the server (step 2), then retry once. API: the user supplies an API key through `AUTH_TOKEN` or their secret store, never pasted into chat. A `403` is a valid credential without access; signing in again does not change it.

## §2 Find the Operation

1. Represent the task as one operation: its `operationId` (or method and path), path parameters, query, and body.
2. CLI: `aventure command-catalog search "<words>" --format compact`, then `aventure command-catalog show --command "<command>"` for exact flags and inputs. `aventure help <command>` prints full documentation offline; `aventure help ask "<question>"` answers a plain-language question with citations or abstains.
3. MCP: `aventure_help({ "q": "<task>", "resolve": true })` names the tool (`aventure_read`, `aventure_search`, `aventure_lookup`, `aventure_write`, or `aventure_delete`), the `operationId`, and each input's slot: `pathParams`, `query`, or `body`. A plain-language platform-help question runs `askHelpQuestion` through `aventure_search`.
4. CLI root commands: `lookup` and `lookup-from-file` (identify a name or URL; §4), `<record> search`, `<record> get`, and `news list`. `lookup-from-file` supersedes the deprecated `entities lookup` and `people lookup` (`POST /v1/entities/lookup`, `POST /v1/people/lookup`).

Prohibited:
- Guessing a flag, `operationId`, input name, or slug; after one rejection, copy the exact name from the error's suggestions or the catalog.
- Broad `--help` sweeps, or calling a command absent because a sweep did not show it.

## §3 Start Here

1. The first call is the task call: the operation §0, §4, or §4.1 names, else the one §2 finds. Never open with a health, status, auth, or help probe; an auth failure reports itself.
2. Read §3.1 before calling any record absent.

## §3.1 Visibility and History Filters

1. Default reads return current, visible rows. A `404` or empty page may be filtered until the command's flags rule out inactive, historical, non-renderable, and hidden rows.
2. `--include-inactive` widens `urls list`, `texts list`, `blog-posts list`, `entities addresses list`, and `entities classifications list`; `--include-non-renderable` adds historic and non-primary rows to `entities relationships list` only. `entities people list` filters `--is-current true` by default; ended roles need `--is-current false` there or read unfiltered from the person side on `people entities list`.
3. A ProblemDetail title such as `… Exists but Is Not Public` or `Product Not Public: Missing Provider Relationship`, or help text saying a row returns only when its counterpart is published, means the row exists behind a visibility gate: not absence, not a defect.
4. A field missing from a response is a projection choice until the command's `--include-*` flags are tried.

Prohibited:
- Reporting a record absent from a default read while an unused widening flag exists, or a visibility-gated `404` as a bug.

## §4 Identity Lookup

Objective: resolve a name, URL, or id to one record, refining ambiguity with first-party evidence.

1. Choose the narrowest identity surface:

   | Input | CLI | MCP operation / tool |
   |---|---|---|
   | Query clues; read-only, schedules no enrichment | `aventure lookup --name "<name>" --url "<owned-url>" ...` | `getIdentification` / `aventure_read` |
   | Body-based universal lookup, or a known kind | `aventure lookup-from-file --kind ENTITY|PERSON --name "<name>" ...` | `lookupRecord` / `aventure_lookup` |
   | aventure.vc URL, slug, website, domain, or person URL; full detail on every plan (§0) | `aventure entities lookup-exact get --url "<url>"` (or `--entity-slug`), `aventure people lookup-exact get ...` | `getEntityLookup` / `getPersonLookup` via `aventure_read` |
   | One outcome per supplied entity id, slug, or URL | `aventure entities lookup-matches --entity-id|--slug|--url ...` | `lookupEntityMatches` / `aventure_lookup` |
   | Detail pages for a batch of known identifiers | `aventure entities lookup-batch ...` or `aventure people lookup-batch ...` | `lookupEntityBatch` / `lookupPersonBatch` via `aventure_lookup` |

   `lookup-matches` is lossless: every input returns `MATCHED`, `AMBIGUOUS`, or `MISSING`. Batch detail reads may silently omit unresolved identifiers. A website or domain tries the third row first; after its `404` without a §3.1 visibility title, the next call, like every other name-to-record question, is a first-two-row lookup. Send `--name`, at least one subject `--url`, or both: a company URL alone (website or social profile) resolves without a name, and a URL sent as `--name` is read as a URL.

   ```bash
   aventure lookup-from-file --kind ENTITY --name "<company-name>" --type-record "Company" --url "<website>" --url "<linkedin-url>" --location "<city, country>" --context "<industry>" --source-url "<article-url>"
   ```

   Select the subject's evidenced `typeRecord`: an operating company (bank or insurer included) uses `Company`; an investor `Investment Firm`, or `Fund` for a named vehicle; a named division `Business Line`; an offering `Product` or `Service`. A typed lookup also finds a same-family neighbor type (a `Business Line` lookup finds AWS stored as `Company`); an offering lookup returns only offerings. An offering sends `--type-record "<Product|Service>"`, its official offering URL, `--context` with its description and provider name, and `--provider-id "<evidenced-provider-uuid>"` only when that id is known. `context` adds at most 512 characters of facts and never scopes the lookup; only `typeRecord` and `providerId` do, in the `lookupRecord` body too. `aventure lookup` takes the same `--kind`. Send every clue beside `name`. `url` holds only subject-owned pages, a LinkedIn profile included; an article page goes in `sourceUrl`; a LinkedIn or X post goes in neither.
2. Act on `status`; a match with `languageModelSettled=true` schedules no enrichment, so confirm the record before writing to it:

   | `status` | Next action |
   |---|---|
   | `MATCHED` | Validate `match.record.typeRecord` against the requested type's family before using its id; a family neighbor is the subject, and its stored type goes to a type correction. For an offering, check its current `productService` provider relationship (`entities relationships list` on the offering id) against the evidenced provider; a provider learned from the match needs independent first-party binding evidence. Read full detail by id for omitted identity fields. A type or provider mismatch leaves the offering unresolved for the owning conflict workflow. |
   | `NO_MATCH` | `officialUrl`, when present, is the subject's website. A URL-only miss reads the subject's name from its own site. With `--file-on-miss true` (signed-in user or admin key), a `created` field means the subject is now stored as that hidden record under its site's brand, with `enrichmentRunId` as its research run. Use `created.owner`; never create it again. A platform or profile URL (`github.com/<x>`, `linkedin.com/in/<x>`) never names a subject, and an archived page never files. Without `created`, `detail` says why nothing was filed; if it says a record may still be filed, look it up again before any create. |
   | `NEEDS_REVIEW` | Compare every plausible candidate, including lower-ranked ones with distinguishing facts, on URLs, identity fields, roles, investments, and provider relationships against independent sources that bind those facts to the subject; a candidate URL is subject-owned only when such evidence binds it. Refine the lookup with every evidenced clue. A remaining `NEEDS_REVIEW` is abstention, not an identity ruling: an authorized write settles it only from independent evidence that binds one candidate to the subject; read-only work reports the unresolved candidates and missing evidence. |

3. `aventure lookup-from-file --name "<exact id, ticker, LEI, EIN, CIK, handle, or slug>" --legacy true` resolves without a model call and answers `404` on no match. `aventure entities brand get --url <url>` is the thin brand/logo/link read. A page with an unknown subject goes to `aventure search link --url "<url>"`. Details: https://docs.aventure.vc/lookup
4. Search by meaning: `aventure search natural entities --query "<text>"` (or `search natural people`). `--mode exact` and `keyword` skip the planner and its rate limit; read `natural`'s `interpretation`, `confidence`, and `unsupported` before trusting scope. A typed filter flag is a hard constraint the planner cannot override. `aventure entities similar list --entity-id "<id>"` ranks neighbours of a known record.

Prohibited:
- Replacing `typeRecord` or `providerId` with provider prose, inventing a provider id, or treating a provider Company match or shared domain as the offering identity or proof of an offering duplicate.
- Passing a candidate-owned URL as subject without independent binding evidence, choosing a candidate without evidence settling its identity, or treating `NO_MATCH` as proof outside the credential's view.
- Standing in for the lookup with name searches, casing variants, guessed domains or slugs, or web searches, or repeating those after a `MATCHED` or `NO_MATCH`.
- Repeating a `lookup-exact` read on the same identifier after its `404`.
- Reading an entity lookup's `NO_MATCH` on a person's name, or on a type outside the subject's family, as absence.

## §4.1 Related Records

Parenthesized names are MCP `operationId`s for `aventure_read` (`personId` replaces `entityId` for people).

1. Relationship lists (`listEntityRelationships`) default to current, primary rows; `--type "<catalog type>"` narrows to one type. `entities relationships get` (`getEntityRelationship`) reads one by `relationshipId`, an integer row id, never a record id. `entities relationships types list` (`listEntityRelationshipTypes`) is the relationship catalog. A `parent` row stores source as parent, target as child; an `affinity` row stores source as member, target as provider.
2. Funding reads key on `--entity-id` = the company that raised the round, never the investor. `entities fundraise-rounds list` (`listEntityFundraiseRounds`) lists its rounds; `entities fundraise-investor-joins list` (`listEntityFundraiseInvestorJoins`) lists who invested, as `investor.entityId` or `investor.personId`. Both take `--round "<label>"` (such as `Series B`).
3. `entities investors list` (`listEntityInvestors`) lists a company's backers; `entities investments list` (`listEntityInvestments`) and `people investments list` (`listPersonInvestments`) list what an investor or person backed. For a curation caller, every company an investor backed is `entities investments list --entity-id "<investor-id>" --latest-per-entity true --include-private true`, filtered client-side by HQ or other fields; search never returns hidden records, so an investor-filtered search undercounts a portfolio.
4. Company-to-person roles read from either side: `entities people list` (`listEntityPersonAssociations`) and `people entities list` (`listPersonEntityAssociations`). `--association-id` is the integer role row id.
5. A company logo is `core.image.logoSquare` with `isMonogram=false` on `entities get` (`getEntity`); a Product or Service without its own shows its provider's logo there, so its own logo is `entities logo get` (`getEntityLogo`), which answers `404` when it has none. A photo is `image.picture` with `isMonogram=false` on `people get` (`getPerson`). A monogram means no real image is stored.
6. A company's news is `news list --owner-entity-id "<entity-uuid>"` (`listNews` with `query["owner.entityId"]`; `owner.personId` for a person), including articles reached through its products and services; `entityMentionResolved` on `news get` marks a direct link.

## §4.2 Request Research

1. `aventure harness runs create --url "<official site or profile URL>" --name "<name>"` (`createHarnessRun`; MCP `aventure_write`) queues aVenture's own research run, owned by the caller. A URL a record owns enriches that record; any other URL researches and adds a new one. A new run reserves one `company` or `person` research unit, spent only once the run saves a research write and returned when it ends without one; a run already queued for that subject returns uncharged. `--user-prompt` says what to check first.
2. Offer it after a `NO_MATCH`, or when the user picks among namesakes found on the web; file only on the user's request or confirmation, one run per chosen subject, each with that subject's own URL. A `409` means the URL matches several records: settle identity through §4 first.
3. `aventure harness runs get --run-id "<id>"` reports progress; the caller is notified on completion. Then read the record through §4.
4. A known record id enriches through `entities enrichments enrich --entity-id` or `people enrichments enrich --person-id`, at the same cost.
5. Research you already did files as one run: `createHarnessRun` with `taskPresetKey: ["apply-cited-findings"]` and `finding`, one entry per fact, each with `statement` (the fact, in plain words), `sourceUrl` (the page that states it, never an aVenture page), and `quote` (the page's own sentence or clause that states it, copied verbatim; a short fragment is refused); add `gateId` only when known. The CLI takes this body through `harness runs create --from-file`. The run reads each page, writes only the facts whose quote it finds there, cites that page, and lists every rejected fact with its reason; it costs one research unit like any run. Keep each statement to what its quote says.

## §5 Results and Errors

1. Output: `--text` compact lines (terminal default), `--data` JSON (piped default; use it for exact fields), or `--json` envelope. Exit `0` means `ok: true`.
2. The envelope holds `ok`, `summary`, `data`, `warnings`, `counts`, and on failure an RFC 9457 ProblemDetail with `detail` and `traceId`; an `ok: false` envelope still holds the fix.
3. Output past 50 KB is truncated, keeping ids and references; read the needed section through its sub-resource or a narrower page or filter. A field missing from truncated or compact output is not absent from the record.
4. Treat a ProblemDetail as correction: change exactly the input it names and retry once. The same detail twice ends the attempt; report it verbatim with its `traceId`.
5. The CLI and MCP wait on a `202` job (a timed-out lookup's included) up to the request deadline (110 s default), reporting a failed or canceled job as a failure. A job still running at the deadline returns a summary naming its `GET` status route; read it with `aventure lookup-jobs get --job-id "<id>"` instead of resending the lookup. A `web search` that outlives the ~5s live wait answers `503 + Retry-After` (or `202` under `Prefer: respond-async`) while a durable collect run finishes it server-side; poll `web searches jobs get --job-id "<id>"` on its `Retry-After` instead of resending the search; the stored document lands even if the caller drops the job.
6. TypeScript consumers import `@aventurevc/api-schemas`; when it and the live API disagree, trust the API.

Prohibited:
- Retrying an unchanged request after a `4xx`, or parsing compact text as JSON.

## §6 Reading Record Fields

1. `nameBrand` is the customer-facing name, `nameLegal` the legal or securities name, `nameAlias` the other spellings.
2. A Delaware or registered-agent address is legal incorporation, not where a company operates. An incorporation or funding date is not a founding date.
3. A news `excerpt` is null when the source feed supplied no description; the full text is `content` on `news get`.
4. Stored facts carry sources; cite the record and its source URL when reporting them.

## §7 Usage Limits and Changes

1. Name lookups and description search need a paid plan; the free plan answers `402` with code `subscription_required`. Free-plan users find a company with `entities lookup-exact get --url <website>` or `entities search --text-search <keyword>`.
2. A `429` with code `billing_allowance_exhausted` means the plan's monthly metered-read allowance is spent: do not retry. Tell the user which limit they reached and offer an upgrade: `aventure billing plans list` shows prices; a paid plan changes with `billing plan-changes create --plan <plan>`; a free plan gets a checkout link from `billing checkout-sessions create --plan <plan>`; or the user visits https://aventure.vc/settings/subscription. Change a plan only after the user confirms plan and price.
3. Commands and MCP tools that change data appear only for allowed credentials and take effect immediately; run one only when the user asked for that change.
