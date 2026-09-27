# aVenture CLI

Research private companies, founders, investors, funding rounds, and news from your
terminal. The package installs one command, `aventure`.

You need an aVenture account; free and paid plans both work.
[Create an account](https://aventure.vc/sign-up).

## Get started in one step

Paste this into Claude Code, Codex, ChatGPT, or any assistant that can run
terminal commands:

```text
Set up the aVenture CLI for me. Install it with
`npm install --global @aventurevc/aventure-cli` (it needs Node.js 24.18.0 or
later), then run `aventure auth login` and show me the sign-in link and code so I
can approve it. When I'm signed in, run `aventure lookup Stripe` to confirm it
works. Use `aventure --help` to find other commands.
Docs: https://docs.aventure.vc/cli
```

## CLI, MCP, or Researchly?

| Where you work | Use |
| --- | --- |
| A terminal, shell scripts, or a coding agent with a shell | This CLI |
| Claude, ChatGPT, or another desktop, web, or cloud AI app | The [aVenture MCP server](https://docs.aventure.vc/mcp) |
| [Researchly](https://researchly.chat) | Nothing to install: open [Profile, then MCP servers](https://researchly.chat/profile/mcp-servers) and choose **Connect aVenture** |

## Set up by hand

Requires Node.js 24.18.0 or later.

```sh
npm install --global @aventurevc/aventure-cli
aventure auth login
```

`aventure auth login` prints a one-time code and a sign-in URL, opens your browser
when one is available, and waits while you approve. It works the same on a laptop,
over SSH, or in a container.

For CI and other non-interactive environments, create a key in
[API key settings](https://aventure.vc/settings/api-keys) and provide it in the
`AUTH_TOKEN` environment variable from your secret manager.

## Find a company

```sh
aventure lookup Stripe                                   # by name
aventure lookup --name Stripe --url https://stripe.com  # by website
aventure search --query "payments infrastructure for online businesses"  # by description
```

Add `--location` or `--context` to tell companies with the same name apart:

```sh
aventure lookup Mercury --context "banking for startups" --location "San Francisco"
```

## Find a person

```sh
aventure people lookup "Patrick Collison" --context "Stripe co-founder"
aventure people lookup "Patrick Collison" --url https://www.linkedin.com/in/patrickcollison
aventure search --query "fintech founders who previously worked at PayPal"
```

## Go deeper on a record

A lookup returns the record's `id`. Use it to read the full profile and what is
attached to it:

```sh
aventure entities get --entity-id <id>
aventure entities fundraise-rounds list --entity-id <id>
aventure people get --person-id <id>
```

## Plans and usage

Profile views, searches, and web searches count toward your plan's monthly
allowance. When one runs out, the command stops with a message that says which
limit you reached and how to upgrade.

```sh
aventure billing subscription get                        # your plan and usage
aventure billing plans list                              # monthly and annual prices
aventure billing plan-changes create --plan <plan>       # upgrade a paid plan with the card on file
aventure billing checkout-sessions create --plan <plan>  # subscribe from the free plan
```

You can also manage your plan in
[subscription settings](https://aventure.vc/settings/subscription).

## More

- `aventure --help` and `aventure <command> --help` list commands and options.
- `aventure command-catalog search funding rounds --format compact` finds a command
  for a task.
- `--text` (terminal default), `--data` (JSON, default when piped), and `--json`
  (full envelope) choose the output. Exit code `0` means success, `1` failure.
- `aventure auth doctor` checks your setup and names the fix for each problem.

## Documentation

- [CLI quickstart](https://docs.aventure.vc/cli)
- [Authentication and plans](https://docs.aventure.vc/authentication)
- [Errors](https://docs.aventure.vc/errors)

## License

Apache License 2.0. See the [LICENSE file](LICENSE).
