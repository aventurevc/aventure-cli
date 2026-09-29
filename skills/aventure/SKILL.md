---
name: aventure
description: "Use to read aVenture research data on private companies, founders, investors, funding rounds, and news through its API, CLI, or MCP server."
---

# aVenture

aVenture holds research records on companies (including products, services, and funds), people, and news, plus the funding rounds, investors, relationships, and text attached to them. Every operation exists once and has three projections: a REST call on `https://api.aventure.vc`, an `aventure` CLI command, and an MCP tool call. Documentation: https://docs.aventure.vc (index for agents: https://docs.aventure.vc/llms.txt).

## §1 Surfaces And Setup

1. Every call needs an aVenture account (free or paid). A user without one signs up at https://aventure.vc/sign-up.
2. Use the surface the user named, else the one already connected in this session:
   - CLI: `npm install --global @aventurevc/aventure-cli` (Node.js 24.18.0 or later), then `aventure auth login`. Non-interactive shells take an API key from https://aventure.vc/settings/api-keys in `AUTH_TOKEN`. `aventure auth doctor` reports each failed setup check with its fix.
   - MCP: the hosted server `https://mcp.aventure.vc/mcp`, Streamable HTTP, browser OAuth sign-in with OAuth client ID `KL7mINzGk0le0QiD` (a URL-only client fails with `does not support dynamic client registration`). Claude Code: `claude mcp add --scope user --transport http --client-id KL7mINzGk0le0QiD --callback-port 6276 aventure https://mcp.aventure.vc/mcp`, then `/mcp`, select `aventure`, and sign in. Other clients: https://docs.aventure.vc/mcp
   - API: `Authorization: Bearer <api-key>`. Quickstart: https://docs.aventure.vc/quickstart
3. Never print, log, or echo a key or token.
4. A `401` means the sign-in is missing or expired; the error `detail` names the fix. CLI: run `aventure auth doctor` and apply its fix, or have the user run `aventure auth login`. MCP: ask the user to reconnect the server in their client (Claude Code: `/mcp`, select `aventure`), then retry once. API: the user supplies an API key through `AUTH_TOKEN` or their secret store, never pasted into chat. A `403` is a valid credential without access; signing in again does not change it.

## §2 Find The Operation

1. Represent the task as one operation: its `operationId` (or method and path), path parameters, query, and body. The CLI command and the MCP call are two spellings of that one row.
2. CLI: `aventure command-catalog search "<words>" --format compact`, then `aventure command-catalog show --command "<command>"` for the exact flags, required inputs, and an example. `aventure help <command>` prints full documentation offline; `aventure help ask "<question>"` answers a plain-language question with citations or abstains.
3. MCP: `aventure_help({ "q": "<task>", "resolve": true })` names the tool (`aventure_read`, `aventure_search`, `aventure_lookup`), the `operationId`, and where each input goes: path values in `pathParams`, URL query values in `query`, body values in `body`.
4. The CLI's root commands are `<record> search` (many records from a query or filter), `<record> lookup` (which record a name or URL refers to), `<record> get` (one record by id), and `news list`.

Prohibited:
- Guessing a flag, `operationId`, input name, or slug; after one rejection, copy the exact name from the catalog.
- Broad `--help` sweeps, or calling a command absent because a sweep did not show it.

## §3 Start Here

1. Pick one operation through §2 and run it. The first call is the task call, never a health, status, or auth probe; an auth failure reports itself.
2. Read §3.1 before calling any record absent.

## §3.1 Visibility And History Filters

1. Default reads return current, visible rows. A `404` or an empty page is filtered until the command's own flags rule out inactive, historical, non-renderable, and hidden rows.
2. `--include-inactive` widens `urls list`, `texts list`, `blog-posts list`, `entities addresses list`, and `entities classifications list`; `--include-non-renderable` adds historic and non-primary rows to `entities relationships list` only. URL, classification, text, and relationship lists return current rows by default, so widen before calling a prior value gone.
3. A ProblemDetail title such as `… Exists but Is Not Public` or `Product Not Public: Missing Provider Relationship`, or help text saying a row returns only when its counterpart is published, means the row exists behind a visibility gate. It is not absence and not a defect.
4. A field missing from a response is a projection choice until the command's `--include-*` flags are tried.

Prohibited:
- Reporting a record absent from a default read while an unused widening flag exists, or a visibility-gated `404` as a bug.

## §4 Identity Lookup

Objective:
- Resolve a name, URL, or id to one record with one call.

Steps:
1. An aVenture id reads its record directly: `aventure entities get --entity-id "<id>"` or `aventure people get --person-id "<id>"`. An aVenture page URL reads `aventure entities lookup-exact get --url "<aventure-url>"` and a bare slug reads `--entity-slug "<slug>"` (`people lookup-exact get` for a person). Every other name-to-record question (a name from an article or email, a website, a LinkedIn profile, an existence check) runs one lookup, whose `--name` is required:

   ```bash
   aventure entities lookup --name "<name>" --url "<website>" --url "<linkedin-url>" --location "<city, country>" --context "<product, industry, employer, or title>" --source-url "<article-url>"
   ```

   `aventure people lookup` takes the same inputs, and `aventure lookup` runs both when the kind is unknown. MCP: `aventure_lookup` with `operationId` `lookupEntity`, `lookupPerson`, or `lookupRecord`. Send every clue beside `name`. `url` holds only pages the subject owns; an article goes in `sourceUrl`.
2. Act on `status`; `stage` (`DETERMINISTIC`, `JUDGMENT`, `WEB_EVIDENCE`) records which step decided:

   | `status` | Next action |
   |---|---|
   | `MATCHED` | `match` is the record; use its id. Read the full record by id only for sections the match omits. |
   | `NO_MATCH` | No record the credential can see is the subject. `officialUrl`, when present, is its website. |
   | `NEEDS_REVIEW` | Show each `candidate` with its `probability` and ask the user which record it is, or whether it is new. |

3. `aventure lookup --name "<exact id, ticker, LEI, EIN, CIK, handle, or slug>" --legacy true` resolves without a model call and answers `404` on no match. `aventure entities lookup-exact get --url <website>` reads full detail by exact website, domain, or slug on every plan. A page whose subject is unknown goes to `aventure search link --url "<url>"`. Details: https://docs.aventure.vc/lookup
4. Exploration by meaning runs `aventure search natural entities --query "<text>"` (or `search natural people`). `--mode exact` and `keyword` skip the planner and its rate limit; `natural` returns `interpretation`, `confidence`, and `unsupported` to read before trusting scope; `semantic` returns `semanticMatch.sourceText` and `cosineScore`. A typed filter flag is a hard constraint the planner cannot override. `aventure entities similar list --entity-id "<id>"` ranks neighbours of a known record.

Prohibited:
- Choosing past `NEEDS_REVIEW` candidates without the user's answer, or treating `NO_MATCH` as proof outside the credential's view.
- Standing in for the lookup with name searches, casing variants, guessed domains or slugs, or web searches, or repeating those after a `MATCHED` or `NO_MATCH`.

## §4.1 Related Records

1. Relationship lists default to current, primary rows; `entities relationships get` reads one by `relationshipId`, an integer row id, never a record id. `entities relationships types list` is the relationship catalog. A `parent` row stores source as parent and target as child; an `affinity` row stores source as member and target as provider.
2. Funding reads key on `--entity-id` = the company that raised the round, never the investor. `entities fundraise-rounds list` lists its rounds; `entities fundraise-investor-joins list` lists who invested, naming each investor as `investor.entityId` or `investor.personId`. Both take `--round "<label>"` (such as `Series B`) to narrow to one round.
3. `entities investors list` and `entities investments list` answer who backed a company and what an investor backed; `people investments list` does the same for a person.
4. Company-to-person roles read from either side: `entities people list` (company side) and `people entities list` (person side). `--association-id` is the integer role row id; both lists page 40 rows by default.
5. A company logo is `core.image.logoSquare` with `isMonogram=false` on `entities get`; a Product or Service shows its provider's logo there when it has none, so its own logo is `entity.logo` on `entities coverage get`. A photo is `image.picture` with `isMonogram=false` on `people get`. A monogram means no real image is stored.
6. A company's news is `news list --owner-entity-id "<entity-uuid>"` (`--owner-person-id` for a person). It includes articles reached through the company's products and services; `entityMentionResolved` on `news get` marks a direct link.

## §5 Results And Errors

1. Output modes: `--text` compact lines (terminal default), `--data` response data as JSON (default when piped; use it when exact fields matter), `--json` the full envelope. Exit code `0` means `ok: true`.
2. The envelope carries `ok`, `summary`, `data`, `warnings`, `counts`, and on failure RFC 9457 ProblemDetail fields `type`, `title`, `status`, `detail`, and `traceId`. An `ok: false` envelope still holds the fix.
3. Output past 50 KB is truncated with ids and references kept. Read the needed section through its sub-resource command or a narrower page or filter; a field missing from truncated or compact output is not absent from the record.
4. Treat a ProblemDetail as correction: change exactly the input it names and retry once. The same detail twice ends the attempt; report it verbatim with its `traceId`.
5. TypeScript consumers import `@aventurevc/api-schemas`; when it and the live API disagree, trust the API.

Prohibited:
- Retrying an unchanged request after a `4xx`, or parsing compact text as JSON.

## §6 Reading Record Fields

1. `nameBrand` is the customer-facing name, `nameLegal` the legal or securities name, `nameAlias` the other spellings.
2. A Delaware or registered-agent address is legal incorporation, not where a company operates. An incorporation or funding date is not a founding date.
3. A news `excerpt` is null when the source feed supplied no description; the full text is `content` on `news get`.
4. Stored facts carry sources; cite the record and its source URL when reporting them.

## §7 Usage Limits And Changes

1. Name lookups and description search need a paid plan; on the free plan they answer `402` with code `subscription_required`. Free-plan users find a company with `entities lookup-exact get --url <website>` or `entities search --text-search <keyword>`.
2. Metered reads count toward the plan's monthly allowance. A `429` with code `billing_allowance_exhausted` means it is spent: do not retry. Tell the user which limit they reached and offer the upgrade: `aventure billing plans list` shows prices; a paid plan changes with `billing plan-changes create --plan <plan>`, a free plan gets a checkout link from `billing checkout-sessions create --plan <plan>`, or the user visits https://aventure.vc/settings/subscription. Change a plan only after the user confirms plan and price.
3. Commands and MCP tools that change data appear only for credentials allowed to use them and take effect immediately. Run one only when the user asked for that change.
