# aventure-cli

Use the public aVenture CLI.

- Install: `npm install --global @aventurevc/aventure-cli --registry=https://registry.npmjs.org/`
- Sign in: `aventure auth login`, then complete browser authorization.
- Personal key: obtain it from aventure.vc Settings → API keys → Add new key and
  supply it through `AUTH_TOKEN`. Never print the key. Public reads do not require `CLIENT_SECRET`.
- Discover commands: `aventure help` or `aventure command-catalog`
- Read the docs at https://github.com/aventurevc/aventure-cli
- Do not invent CLI flags; use `aventure help <command>` for the current options.
