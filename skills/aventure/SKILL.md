---
name: aventure
description: "Use to read aVenture research data on private companies, founders, investors, funding rounds, and news through its API, CLI, or MCP server."
---

# aVenture

aVenture holds research records on companies (including products, services, and funds), people, and news, plus the funding rounds, investors, relationships, and text attached to them. Every operation exists once and has three projections: a REST call on `https://api.aventure.vc`, an `aventure` CLI command, and an MCP tool call. Documentation: https://docs.aventure.vc (index for agents: https://docs.aventure.vc/llms.txt).

## §0 MCP Quick Path

1. An aventure.vc URL, website, domain, or slug resolves in one call: `aventure_read` with `{"operationId": "getEntityLookup", "query": {"url": "<url>"}}` (or `"query": {"slug": "<slug>"}`); a person uses `getPersonLookup`. It runs through `aventure_read`, which every client exposes; `aventure_lookup` refuses it.
2. The returned EntityDetail already holds names, text, links, `fundingDetail`, `fundraiseRound`, `newsArticle`, `person`, and `research`. Never re-read it with `getEntity`, `listEntities`, or `getEntityResearch`, and never web-search for a fact it holds.
3. Read a sub-resource (§4.1) only for a section the detail omits or truncates, passing the returned id as `pathParams.entityId`. Issue every independent read in the same turn as parallel tool calls.
4. Call `aventure_help` with `"resolve": true` only when this skill names no operation for the task.
5. An unknown-`operationId` error lists suggestions; use one of them, never a second guessed name.
6. Answer a single-entity question after at most 4 aventure calls.

## §1 Surfaces and Setup

1. Every call needs an aVenture account (free or paid). A user without one signs up at https://aventure.vc/sign-up.
2. Use the surface the user named, else the one already connected in this session:
   - CLI: `npm install --global @aventurevc/aventure-cli` (Node.js 24.18.0 or later), then `aventure auth login`. Non-interactive shells take an API key from https://aventure.vc/settings/api-keys in `AUTH_TOKEN`.
   - MCP: `https://mcp.aventure.vc/mcp`, Streamable HTTP, browser OAuth with client ID `KL7mINzGk0le0QiD` (a URL-only client fails with `does not support dynamic client registration`). Claude Code: `claude mcp add --scope user --transport http --client-id KL7mINzGk0le0QiD --callback-port 6276 aventure https://mcp.aventure.vc/mcp`, then sign in through `/mcp`. Other clients: https://docs.aventure.vc/mcp
   - API: `Authorization: Bearer <api-key>`. Quickstart: https://docs.aventure.vc/quickstart
3. Never print, log, or echo a key or token.
4. A `401` means the sign-in is missing or expired; the error `detail` names the fix. CLI: run `aventure auth doctor` and apply its fix, or have the user run `aventure auth login`. MCP: ask the user to reconnect the server (Claude Code: `/mcp`), then retry once. API: the user supplies an API key through `AUTH_TOKEN` or their secret store, never pasted into chat. A `403` is a valid credential without access; signing in again does not change it.

## §2 Find the Operation

1. Represent the task as one operation: its `operationId` (or method and path), path parameters, query, and body.
2. CLI: `aventure command-catalog search "<words>" --format compact`, then `aventure command-catalog show --command "<command>"` for the exact flags, required inputs, and an example. `aventure help <command>` prints full documentation offline; `aventure help ask "<question>"` answers a plain-language question with citations or abstains.
3. MCP: `aventure_help({ "q": "<task>", "resolve": true })` (§0.4) names the tool, the `operationId`, and where each input goes: path values in `pathParams`, URL query values in `query`, body values in `body`. `aventure_help` resolves a catalog row; execute `askHelpQuestion` through `aventure_search` for a plain-language platform-help question.
4. The CLI's root commands are `lookup` and `lookup-from-file` (identity, §4), `<record> search` (many records from a query or filter), `<record> get` (one record by id), and `news list`. `entities lookup` and `people lookup` are deprecated aliases of `lookup-from-file`.

Prohibited:
- Guessing a flag, `operationId`, input name, or slug; after one rejection, copy the exact name from the error's suggestions or the catalog.
- Broad `--help` sweeps, or calling a command absent because a sweep did not show it.

## §3 Start Here

1. The first call is the task call: the operation §0, §4, or §4.1 names, else the one §2 finds. Never open with a health, status, auth, or help probe; an auth failure reports itself.
2. Read §3.1 before calling any record absent.

## §3.1 Visibility and History Filters

1. Default reads return current, visible rows. A `404` or an empty page is filtered until the command's own flags rule out inactive, historical, non-renderable, and hidden rows.
2. `--include-inactive` widens `urls list`, `texts list`, `blog-posts list`, `entities addresses list`, and `entities classifications list`; `--include-non-renderable` adds historic and non-primary rows to `entities relationships list` only.
3. A ProblemDetail title such as `… Exists but Is Not Public` or `Product Not Public: Missing Provider Relationship`, or help text saying a row returns only when its counterpart is published, means the row exists behind a visibility gate. It is not absence and not a defect.

## §4 Identity Lookup

Objective:
- Resolve a name, URL, or id through lookup, refining ambiguous candidates with first-party evidence.

Steps:
1. Choose the narrowest identity surface:

   | Input and purpose | CLI | MCP operation/tool |
   |---|---|---|
   | Query clues, with no body file; read-only identity and no enrichment scheduling | `aventure lookup --name "<name>" --url "<owned-url>" --location "<city, country>" --context "<specific facts>"` | `getIdentification` / `aventure_read` |
   | One body-based universal lookup, or a known kind | `aventure lookup-from-file --kind ENTITY|PERSON --name "<name>" ...` | `lookupRecord` / `aventure_lookup` |
   | aventure.vc URL, slug, website, domain, or person URL; full detail on every plan (§0.1) | `aventure entities lookup-exact get --url "<url>"` (or `--entity-slug`), `aventure people lookup-exact get ...` | `getEntityLookup` / `getPersonLookup` via `aventure_read` |
   | One outcome for every supplied entity id, slug, or URL | `aventure entities lookup-matches --entity-id|--slug|--url ...` | `lookupEntityMatches` / `aventure_lookup` |
   | Detail pages for a batch of known entity or person identifiers | `aventure entities lookup-batch ...` or `aventure people lookup-batch ...` | `lookupEntityBatch` / `lookupPersonBatch` via `aventure_lookup` |

   `lookup-matches` is lossless: every input returns `MATCHED`, `AMBIGUOUS`, or `MISSING`. The batch detail reads may omit unresolved public identifiers, so use them only when that omission is acceptable. A website or domain tries the third row first; a miss there, and every other name-to-record question (a name from an article or email, a LinkedIn profile, an existence check), uses one of the first two rows. Send `--name`, at least one subject `--url`, or both: a company URL alone (website or social profile) resolves without a name, and a URL sent as `--name` is read as a URL.

   ```bash
   aventure lookup-from-file --kind ENTITY --name "<company-name>" --type-record "Company" --url "<website>" --url "<linkedin-url>" --location "<city, country>" --context "<industry>" --source-url "<article-url>"
   ```

   Select the subject's evidenced `typeRecord`: an operating company (a bank or insurer included) uses `Company`; an investor uses `Investment Firm`, or `Fund` for a named vehicle; a named division uses `Business Line`; an offering uses `Product` or `Service`. A typed lookup also finds a record stored under a neighboring type of the same family (a `Business Line` lookup finds AWS stored as `Company`; a `Fund` lookup finds its `Investment Firm`), and an offering lookup returns only offerings. For an offering with a known provider id:

   ```bash
   aventure lookup-from-file --kind ENTITY --name "<offering-name>" --type-record "<Product|Service>" --provider-id "<evidenced-provider-uuid>" --url "<official-offering-url>" --context "<offering description and provider name>"
   ```

   With an unknown provider id, omit `--provider-id` and retain the offering type and official offering URL. `context` adds at most 512 characters of facts and never scopes the lookup; only `typeRecord` and `providerId` do. The `lookupRecord` body carries `typeRecord` and evidenced `providerId` under the same rules. Send every clue beside `name`. `url` holds only subject-owned pages, a LinkedIn profile included; an article page goes in `sourceUrl`, and a LinkedIn or X post goes in neither.
2. Act on `status`; `stage` (`DETERMINISTIC`, `JUDGMENT`, `WEB_EVIDENCE`) records which step decided; a match with `languageModelSettled=true` schedules no enrichment, so confirm the record before writing to it:

   | `status` | Next action |
   |---|---|
   | `MATCHED` | Validate `match.record.typeRecord` against the requested type's family before using its id; a family neighbor is the subject, and its stored type goes to a type correction. For an offering, validate its current `productService` provider relationship against the evidenced provider through `entities relationships list` on the offering id; a provider learned from the match needs independent first-party binding evidence. Read full detail by id for omitted identity fields. A type or provider mismatch leaves the offering identity unresolved and routes to the owning conflict workflow. |
   | `NO_MATCH` | No record the credential can see is the subject. `officialUrl`, when present, is its website. A URL-only miss reads the subject's name from its own site. With `--file-on-miss true` (signed-in user or admin key), a `NO_MATCH` carrying `created` means the subject is now stored as that hidden record under its site's brand, with `enrichmentRunId` as its research run: Use `created.owner` and never create it again. A platform or profile URL (`github.com/<x>`, `linkedin.com/in/<x>`) never names a subject, and an archived page never files. Without `created`, `detail` says why nothing was filed; a detail saying a record may still be filed means look it up again before any create. |
   | `NEEDS_REVIEW` | Compare every plausible candidate's URLs, identity fields, roles, investments, and provider relationships with independent source evidence; inspect lower-ranked candidates carrying distinguishing facts. Fetch official biographies, linked-employer pages, registries, or historical sources that bind those facts to the requested subject. Refine lookup with the evidenced name, URLs, location, context, source URL, type, and provider. A remaining `NEEDS_REVIEW` is lookup abstention, not an identity ruling: an authorized write settles it only from independent evidence that binds one candidate to the subject. Read-only work reports the unresolved candidates and missing evidence. |

3. `aventure lookup-from-file --name "<exact id, ticker, LEI, EIN, CIK, handle, or slug>" --legacy true` resolves without a model call and answers `404` on no match. `aventure entities brand get --url <url>` is the thin brand/logo/link read when full research is unnecessary. A page whose subject is unknown goes to `aventure search link --url "<url>"`. Details: https://docs.aventure.vc/lookup
4. Exploration by meaning runs `aventure search natural entities --query "<text>"` (or `search natural people`). `--mode exact` and `keyword` skip the planner and its rate limit; `natural` returns `interpretation`, `confidence`, and `unsupported` to read before trusting scope; A typed filter flag is a hard constraint the planner cannot override. `aventure entities similar list --entity-id "<id>"` ranks neighbours of a known record.

Prohibited:
- Replacing `typeRecord` or `providerId` with provider prose, inventing a provider id, or treating a provider Company match or shared domain as the offering identity or proof of an offering duplicate.
- Passing a candidate-owned URL as subject without independent binding evidence, choosing a candidate without evidence settling its identity, or treating `NO_MATCH` as proof outside the credential's view.
- Standing in for the lookup with name searches, casing variants, guessed domains or slugs, or web searches, or repeating those after a `MATCHED` or `NO_MATCH`.
- Reading an entity lookup's `NO_MATCH` on a person's name, or on a type outside the subject's family, as absence.

## §4.1 Related Records

Parenthesized names are MCP `operationId`s for `aventure_read` (`personId` replaces `entityId` for people); §0.3 governs when to call them.

1. Relationship lists (`listEntityRelationships`) default to current, primary rows; `entities relationships get` (`getEntityRelationship`) reads one by `relationshipId`, an integer row id, never a record id. `entities relationships types list` (`listEntityRelationshipTypes`) is the relationship catalog. A `parent` row stores source as parent and target as child; an `affinity` row stores source as member and target as provider.
2. Funding reads key on `--entity-id` = the company that raised the round, never the investor. `entities fundraise-rounds list` (`listEntityFundraiseRounds`) lists its rounds; `entities fundraise-investor-joins list` (`listEntityFundraiseInvestorJoins`) lists who invested, naming each investor as `investor.entityId` or `investor.personId`. Both take `--round "<label>"` (such as `Series B`) to narrow to one round.
3. `entities investors list` (`listEntityInvestors`) and `entities investments list` (`listEntityInvestments`) answer who backed a company and what an investor backed; `people investments list` (`listPersonInvestments`) does the same for a person.
4. Company-to-person roles read from either side: `entities people list` (`listEntityPersonAssociations`) and `people entities list` (`listPersonEntityAssociations`). `--association-id` is the integer role row id; both lists page 40 rows by default.
5. A company logo is `core.image.logoSquare` with `isMonogram=false` on `entities get` (`getEntity`); a Product or Service shows its provider's logo there when it has none, so its own logo is `entity.logo` on `entities coverage get`. A photo is `image.picture` with `isMonogram=false` on `people get` (`getPerson`). A monogram means no real image is stored.
6. A company's news is `news list --owner-entity-id "<entity-uuid>"` (`listNews` with `query["owner.entityId"]`; `owner.personId` for a person). It includes articles reached through the company's products and services; `entityMentionResolved` on `news get` marks a direct link.

## §5 Results and Errors

1. Output modes: `--text` compact lines (terminal default), `--data` response data as JSON (default when piped; use it when exact fields matter), `--json` the full envelope. Exit code `0` means `ok: true`.
2. The envelope carries `ok`, `summary`, `data`, `warnings`, `counts`, and on failure RFC 9457 ProblemDetail fields `type`, `title`, `status`, `detail`, and `traceId`. An `ok: false` envelope still holds the fix.
3. Output past 50 KB is truncated with ids and references kept. Read the needed section through its sub-resource command or a narrower page or filter; a field missing from truncated or compact output is not absent from the record.
4. Treat a ProblemDetail as correction: change exactly the input it names and retry once. The same detail twice ends the attempt; report it verbatim with its `traceId`.
5. The CLI and MCP follow a `202` job, a timed-out lookup's included, to its result inside the request deadline (110 s by default) and report a failed or canceled job as a failure. A job still running at the deadline returns a summary naming the `GET` status route; read it with `aventure lookup-jobs get --job-id "<id>"` instead of sending the lookup again.
6. TypeScript consumers import `@aventurevc/api-schemas`; when it and the live API disagree, trust the API.

Prohibited:
- Retrying an unchanged request after a `4xx`, or parsing compact text as JSON.

## §6 Reading Record Fields

1. `nameBrand` is the customer-facing name, `nameLegal` the legal or securities name, `nameAlias` the other spellings.
2. A Delaware or registered-agent address is legal incorporation, not where a company operates. An incorporation or funding date is not a founding date.
3. A news `excerpt` is null when the source feed supplied no description; the full text is `content` on `news get`.
4. Stored facts carry sources; cite the record and its source URL when reporting them.

## §7 Usage Limits and Changes

1. Name lookups and description search need a paid plan; on the free plan they answer `402` with code `subscription_required`. Free-plan users find a company with `entities lookup-exact get --url <website>` or `entities search --text-search <keyword>`.
2. Metered reads count toward the plan's monthly allowance. A `429` with code `billing_allowance_exhausted` means it is spent: do not retry. Tell the user which limit they reached and offer the upgrade: `aventure billing plans list` shows prices; a paid plan changes with `billing plan-changes create --plan <plan>`, a free plan gets a checkout link from `billing checkout-sessions create --plan <plan>`, or the user visits https://aventure.vc/settings/subscription. Change a plan only after the user confirms plan and price.
3. Commands and MCP tools that change data appear only for credentials allowed to use them and take effect immediately. Run one only when the user asked for that change.
