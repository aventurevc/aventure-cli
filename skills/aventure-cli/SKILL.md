# aventure-cli

Use the public aVenture CLI.

- Install: `npm install --global @aventurevc/aventure-cli --@aventurevc:registry=https://registry.npmjs.org/`
- Sign in: `aventure auth login`, then complete browser authorization.
- Personal key: create one at https://aventure.vc/settings/api-keys and supply it
  through `AUTH_TOKEN`. Never print the key. Public reads need no credential.
- Discover commands: `aventure help` or `aventure command-catalog`
- Read the docs at https://docs.aventure.vc/cli
- Do not invent CLI flags; use `aventure help <command>` for the current options.
