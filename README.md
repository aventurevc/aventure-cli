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

Complete browser sign-in when prompted. The CLI stores the native OAuth access
token in the operating-system credential store. `aventure auth status` reports
credential metadata without displaying the token.

### Personal API key

Create a key at [aventure.vc](https://aventure.vc) under **Settings → API keys →
Add new key**, then provide it through `AUTH_TOKEN` using your environment or
secret manager. To create and store a personal key through browser approval, run
`aventure auth personal-login` in an interactive terminal. `aventure auth status`
reports metadata without displaying the key. Help and the command catalog work
without signing in.

## Headless authentication

CI, containers, and SSH sessions without writable OS credential storage must
provide an existing personal API key through `AUTH_TOKEN`. Native OAuth
(`aventure auth login`) and personal-key approval (`aventure auth personal-login`)
require an interactive terminal and usable OS credential storage.

The command catalog is generated from the public aVenture OpenAPI spec and must not be hand-edited.

## Diagnostics

The public package writes diagnostics to stderr and does not export telemetry.
