# aVenture CLI

Research private companies, founders, investors, funding rounds, and news from your
terminal. The package installs one command, `aventure`.

The CLI requires an aVenture account. Free and paid plans both work;
[create an account](https://aventure.vc/sign-up) before you start.

## Install

The CLI requires Node.js 24.18 or later in the 24.x series.

```sh
npm install --global @aventurevc/aventure-cli
aventure --version
```

## Sign in

```sh
aventure auth login
```

The command prints a one-time code and a sign-in URL, opens your browser when one
is available, and waits while you approve. You can approve on any device, so it
works the same on a laptop, over SSH, or in a container.

For CI and other non-interactive environments, create a key in
[API key settings](https://aventure.vc/settings/api-keys) and provide it in the
`AUTH_TOKEN` environment variable from your secret manager.

## Find a company

By name:

```sh
aventure lookup Stripe
```

By website:

```sh
aventure lookup --name Stripe --url https://stripe.com
```

By description, when you don't know the name:

```sh
aventure search --query "payments infrastructure for online businesses"
```

Add `--location` or `--context` to `lookup` to tell companies with the same name
apart:

```sh
aventure lookup Mercury --context "banking for startups" --location "San Francisco"
```

## Find a person

By name, with their company for context:

```sh
aventure people lookup "Patrick Collison" --context "Stripe co-founder"
```

By LinkedIn profile:

```sh
aventure people lookup "Patrick Collison" --url https://www.linkedin.com/in/patrickcollison
```

By description:

```sh
aventure search --query "fintech founders in Austin who previously worked at PayPal"
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
allowance. When an allowance runs out, the command stops with a message that says
which limit you reached and how to upgrade.

```sh
aventure billing subscription get     # your plan and what you have used
aventure billing plans list           # plans with monthly and annual prices
aventure billing plan-changes create --plan <plan>   # upgrade with the card on file
aventure billing checkout-sessions create --plan <plan>  # add a card and subscribe
```

You can also manage your plan in
[subscription settings](https://aventure.vc/settings/subscription).

## Find more commands

```sh
aventure --help
aventure entities --help
aventure command-catalog search funding rounds --format compact
```

## Output

- `--text` prints readable lines. It is the default in a terminal.
- `--data` prints the response as JSON. It is the default when output is piped.
- `--json` prints the full result envelope.

The CLI exits with `0` on success and `1` on failure.

## Manage your sign-in

- `aventure auth status` shows which credential is in use.
- `aventure auth doctor` checks your setup and names the fix for each problem.
- `aventure auth logout` signs you out.

## Documentation

- [CLI quickstart](https://docs.aventure.vc/cli)
- [Authentication](https://docs.aventure.vc/authentication)
- [Errors](https://docs.aventure.vc/errors)
- [API reference](https://docs.aventure.vc/api-reference)

## License

Apache License 2.0. See the [LICENSE file](LICENSE).
