---
name: aventure-cli
description: Use when a task needs aVenture research data on companies, people, funding, or news from a terminal through the `aventure` command-line tool.
---

# aVenture CLI

Use the `aventure` command to read aVenture research data.

## Set up

1. Install: `npm install --global @aventurevc/aventure-cli --@aventurevc:registry=https://registry.npmjs.org/`
   (requires Node.js 24.18 or later in the 24.x series).
2. Check the setup with `aventure auth doctor`. It reports each failed check with the
   command that fixes it.
3. Sign in only when a command needs it:
   - Interactive: `aventure auth login`, then have the user approve in the browser.
   - Non-interactive: the user creates a key at https://aventure.vc/settings/api-keys
     and provides it in the `AUTH_TOKEN` environment variable.
   Never print, log, or echo a key or token.

Public reads, such as `aventure entities lookup get --url-domain stripe.com`, work
without signing in. Name lookups and searches need a credential.

## Find the right command

- `aventure command-catalog search <words> --format compact` lists matching
  commands and their required flags without calling the API.
- `aventure <command> --help` lists a command's current flags;
  `aventure help <command>` prints its full documentation.
- Use only flags that help lists. Never guess a flag or a record slug; resolve a
  name first with `aventure lookup <name>`.

## Read results

- Add `--json` for the full result envelope, and check `ok` before reading `data`.
- Exit code `0` means success and `1` means failure.
- Output is capped at 50 KB. When a result is truncated, request a smaller page or
  a narrower sub-command instead of treating missing fields as absent data.

## Usage

Calls made with the user's credential count toward their plan's usage. A `402`
response means the operation needs a plan that includes it; point the user to
https://aventure.vc/pricing and https://aventure.vc/settings/subscription instead of
retrying.

Documentation: https://docs.aventure.vc/cli
