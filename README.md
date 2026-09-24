# aVenture CLI

Query aVenture's research data on companies, people, funding, and news from your
terminal. The package installs one command, `aventure`.

For a guided walkthrough, read the
[aVenture CLI quickstart](https://docs.aventure.vc/cli).

## Install

The CLI requires Node.js 24.18 or later in the 24.x series. Installation fails on
any other major version.

```sh
npm install --global @aventurevc/aventure-cli --@aventurevc:registry=https://registry.npmjs.org/
aventure --version
```

The `--@aventurevc:registry` flag makes npm install from the public npm registry
even when your npm configuration maps the `@aventurevc` scope somewhere else.

## Get a first result

Public reads need no account. This command finds a company by its website
domain:

```sh
aventure entities lookup get --url-domain stripe.com
```

## Sign in

Name lookups and searches need a signed-in account. Choose one credential.

### Browser sign-in

```sh
aventure auth login
aventure lookup Stripe
```

`aventure auth login` prints a one-time code and a sign-in URL, opens your browser
when one is available, and waits until you approve. You can approve on any device,
so the same command works on a laptop, over SSH, and in a container. Add
`--no-browser` to print the URL without opening a browser. The approval page uses
the aVenture account already signed in to that browser; to use another account,
open the URL in a private window.

The CLI saves the credential in your operating system's credential store. When no
credential store is available, such as on a server without a desktop session, it
saves the credential to `~/.config/aventure/credentials.json` with file mode
`0600`. Expired access is renewed automatically.

Review or revoke CLI sign-ins in
[aVenture developer access settings](https://aventure.vc/settings/developer).

### Personal API key

Create a key in
[aVenture API key settings](https://aventure.vc/settings/api-keys), then provide it
in the `AUTH_TOKEN` environment variable from your shell or secret manager. Use
this path for CI and other non-interactive environments.

To create and save a key through browser approval instead, run
`aventure auth login --key`.

### Check or remove a credential

- `aventure auth status` shows which credential is in use and where it is stored,
  without printing the secret.
- `aventure auth doctor` checks the CLI version, API connection, credential, and
  command catalog in one call, and names the command that fixes each failure.
- `aventure auth logout` revokes the saved API key and removes the saved sign-in.

## Plans and usage

Calls made with your credential count toward your aVenture plan's usage. Some
operations, such as plain-English search, need a plan that includes them; without
one, the API responds with status `402`.

- Compare plans on the [aVenture pricing page](https://aventure.vc/pricing).
- Check your plan and current usage in
  [aVenture subscription settings](https://aventure.vc/settings/subscription).

## Find commands

```sh
aventure --help
aventure entities --help
aventure help entities lookup get
aventure command-catalog search company lookup --format compact
```

`aventure <command> --help` lists a command's options, and `aventure help <command>`
prints its full documentation. `aventure command-catalog search` finds the command
for a task without calling the API. Help and the catalog work without signing in.

## Output and exit codes

Every command accepts one output mode:

- `--text` prints readable lines. It is the default in a terminal.
- `--data` prints the response data as JSON. It is the default when output is
  piped.
- `--json` prints the full result envelope, capped at 50 KB.
- `--data-full` prints uncapped JSON.

The CLI exits with `0` when the call succeeded and `1` when it failed.

## Shell completion and updates

- `aventure completion zsh`, `aventure completion bash`, and
  `aventure completion fish` print completion scripts, and
  `aventure completion install` installs them.
- `aventure update` checks for a newer release and installs it.

## Diagnostics

The CLI writes diagnostics to standard error and sends no telemetry.

## Documentation

- [CLI quickstart](https://docs.aventure.vc/cli)
- [Authentication guide](https://docs.aventure.vc/authentication)
- [Error reference](https://docs.aventure.vc/errors)
- [API reference](https://docs.aventure.vc/api-reference)

The command set is generated from the public aVenture OpenAPI specification.

## License

Apache License 2.0. See the [LICENSE file](LICENSE).
