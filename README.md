# aventure-cli

The public aVenture CLI. Its public binary is `aventure`.

Requires Node.js 24.18 or later in the 24.x series.

```bash
npm install --global @aventurevc/aventure-cli --registry=https://registry.npmjs.org/
aventure status
aventure help
```

## Authenticate

Choose one public user credential.

### Native OAuth

Run these commands in an interactive terminal:

```sh
aventure auth login
aventure entities list --entity-name Stripe
```

Complete browser sign-in when prompted. The CLI stores the OAuth credential in
the operating-system credential store, or in `~/.config/aventure/credentials.json`
(mode `0600`) where the keyring cannot be used without a GUI session. An expired
access token is renewed with its refresh token automatically. `aventure auth
status` reports credential metadata, the store in use, and the sign-in providers
without displaying any secret. `aventure auth logout` revokes the personal key,
revokes the OAuth refresh token, and removes both local records.

### Personal API key

Create a key at [aventure.vc](https://aventure.vc) under **Settings → API keys →
Add new key**, then provide it through `AUTH_TOKEN` using your environment or
secret manager. To create and store a personal key through browser approval, run
`aventure auth login --key` in an interactive terminal. `aventure auth status`
reports metadata without displaying the key. Help and the command catalog work
without signing in.

## Headless authentication

`aventure auth login` uses the OAuth device authorization grant: it prints a one-time
code and a sign-in URL, opens the browser when one is available (`--no-browser` only
skips that), you approve on any device, and the CLI polls until the sign-in completes.
The same command works on a laptop, over SSH, and in a container. The verification
page uses the account already signed in at `accounts.aventure.vc`; to choose another
account, open the URL in a private window or sign out there first. `aventure auth
login --key --no-browser` is the equivalent path for a personal API key, and an
existing key can always be provided through `AUTH_TOKEN`.

The command catalog is generated from the public aVenture OpenAPI spec and must not be hand-edited.

## Diagnostics

The public package writes diagnostics to stderr and does not export telemetry.
