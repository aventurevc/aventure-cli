# aventure-cli

The public aVenture CLI. Its public binary is `aventure`.

```bash
npm install -g @aventurevc/aventure-cli
aventure status
aventure help
```

## Headless authentication

CI, containers, and SSH sessions without writable OS credential storage must
inject an existing `AUTH_TOKEN`, `CLIENT_SECRET`, or `ADMIN_API_KEY` through the
environment, or use a configured Doppler source. `aventure auth status` checks credential sources
without displaying their values. `aventure auth login` requires an interactive
terminal and checks credential storage before starting browser authorization.

The command catalog is generated from the public aVenture OpenAPI spec and must not be hand-edited.
