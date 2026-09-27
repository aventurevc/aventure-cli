---
name: aventure-cli
description: Use when a task needs aVenture research data on companies, people, funding, or news from a terminal through the `aventure` command-line tool.
---

# aVenture CLI

Use the `aventure` command to read aVenture research data.

## Set up

The CLI requires an aVenture account (free or paid). If the user has none, point
them to https://aventure.vc/sign-up.

1. Install: `npm install --global @aventurevc/aventure-cli` (requires Node.js 24.18.0 or later).
2. Sign in:
   - Interactive: `aventure auth login`, then have the user approve in the browser.
   - Non-interactive: the user creates a key at https://aventure.vc/settings/api-keys
     and provides it in the `AUTH_TOKEN` environment variable.
   Never print, log, or echo a key or token.
3. Check the setup with `aventure auth doctor`. It reports each failed check with the
   command that fixes it.

## Common tasks

- Company by name: `aventure lookup Stripe`; add `--context` or `--location` to
  tell namesakes apart.
- Company by website: `aventure lookup --name Stripe --url https://stripe.com`.
- Company or person by description: `aventure search --query "<description>"`.
- Person by name or LinkedIn URL: `aventure people lookup "<name>" --context "<employer>"`
  or `--url <linkedin-url>`.
- Full record and funding: `aventure entities get --entity-id <id>`,
  `aventure entities fundraise-rounds list --entity-id <id>`.

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

## Usage limits

Profile views, searches, and web searches count toward the user's monthly plan
allowance. A `429` with code `billing_allowance_exhausted` means the user reached
it; do not retry. Tell the user which limit they reached, then offer to upgrade:

- `aventure billing plans list` shows plans with monthly and annual prices.
- On a paid plan, `aventure billing plan-changes create --plan <plan>` upgrades with
  the card on file; if the answer has a `paymentUrl`, the user must open it to pay.
- On the free plan, `aventure billing checkout-sessions create --plan <plan>` returns
  a checkout link where the user enters a card.
- Or send the user to https://aventure.vc/settings/subscription.

Change a plan only after the user confirms the plan and price.

Documentation: https://docs.aventure.vc/cli
