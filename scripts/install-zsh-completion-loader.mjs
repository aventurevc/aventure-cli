#!/usr/bin/env node
// oxlint-disable typescript/no-unsafe-assignment typescript/no-unsafe-member-access typescript/no-unsafe-argument -- standalone postinstall MJS uses Node built-ins without a TS emit step
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir, platform as osPlatform } from "node:os";
import { delimiter, dirname, isAbsolute, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const MARKER_PREFIX = "# aventure-cli completion loader";
const BACKUP_SUFFIX = ".aventure-cli-completion.bak";
const CLI_BIN_TARGET = "dist/aventure-cli/index.js";
const PACKAGE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGE_CLI_BIN = join(PACKAGE_ROOT, CLI_BIN_TARGET);
const PACKAGE_JSON = join(PACKAGE_ROOT, "package.json");

/** @param {string | undefined} value */
function isTruthy(value) {
  return value !== undefined && ["1", "true", "yes"].includes(value.toLowerCase());
}

/** @param {NodeJS.ProcessEnv} env */
function resolveDataHome(env) {
  if (env.XDG_DATA_HOME && isAbsolute(env.XDG_DATA_HOME)) return env.XDG_DATA_HOME;
  const home = env.HOME || homedir();
  return home ? join(home, ".local", "share") : null;
}

/** @param {NodeJS.ProcessEnv} env */
function resolveConfigHome(env) {
  if (env.XDG_CONFIG_HOME && isAbsolute(env.XDG_CONFIG_HOME)) return env.XDG_CONFIG_HOME;
  const home = env.HOME || homedir();
  return home ? join(home, ".config") : null;
}

function readPackageJson() {
  return JSON.parse(readFileSync(PACKAGE_JSON, "utf8"));
}

function cliBins() {
  const packageJson = readPackageJson();
  const cliBinMap = packageJson.aventurePublish?.variants?.cli?.bin ?? packageJson.bin ?? {};
  return Object.entries(cliBinMap).flatMap(([bin, target]) =>
    target === CLI_BIN_TARGET ? [bin] : [],
  );
}

/** @param {string} value */
function shellSingleQuote(value) {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

/** @param {string} value */
function fishSingleQuote(value) {
  return `'${value.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}

const zshQuote = shellSingleQuote;
const bashQuote = shellSingleQuote;

/**
 * @param {readonly string[]} bins
 * @param {string} fallbackBin
 */
function renderZshLoader(bins, fallbackBin) {
  return [
    `#compdef ${bins.join(" ")}`,
    `${MARKER_PREFIX} (zsh; managed by aVenture CLI package)`,
    "emulate -L zsh",
    "",
    `local packaged_bin=${zshQuote(PACKAGE_CLI_BIN)}`,
    `local fallback_bin=${zshQuote(fallbackBin)}`,
    'local bin="${AVENTURE_CLI_COMPLETION_BIN:-$packaged_bin}"',
    '[[ -x "$bin" ]] || bin="${commands[$fallback_bin]:-$fallback_bin}"',
    "local generated",
    "",
    'generated="$("$bin" completion zsh 2>/dev/null)" || return 0',
    '[[ -n "$generated" ]] || return 0',
    'eval "$generated"',
    "",
  ].join("\n");
}

/** @param {string} bin */
function renderBashLoader(bin) {
  return [
    `${MARKER_PREFIX} (bash; managed by aVenture CLI package)`,
    `_aventure_cli_completion_loader() { local packaged_bin=${bashQuote(bin)}; local bin="\${AVENTURE_CLI_COMPLETION_BIN:-$packaged_bin}"; eval "$("$bin" completion bash 2>/dev/null)"; }`,
    "_aventure_cli_completion_loader",
    "unset -f _aventure_cli_completion_loader",
    "",
  ].join("\n");
}

/** @param {string} bin */
function renderFishLoader(bin) {
  const quoted = fishSingleQuote(bin);
  return [
    `${MARKER_PREFIX} (fish; managed by aVenture CLI package)`,
    `if command -q -- ${quoted}`,
    `    ${quoted} completion fish | source`,
    "end",
    "",
  ].join("\n");
}

/** @param {string} text */
function isManagedCompletion(text) {
  return text.split(/\r?\n/).some((line) => line.startsWith(MARKER_PREFIX));
}

/**
 * @param {string} file
 * @param {string} contents
 */
function writeLoader(file, contents) {
  mkdirSync(dirname(file), { recursive: true });
  refuseSymlink(file);
  const existing = existsSync(file) ? readFileSync(file, "utf8") : "";
  if (existing === contents) return false;
  if (existing && !isManagedCompletion(existing)) {
    refuseSymlink(`${file}${BACKUP_SUFFIX}`);
    copyFileSync(file, `${file}${BACKUP_SUFFIX}`);
  }
  const temporary = `${file}.${process.pid}.tmp`;
  refuseSymlink(temporary);
  writeFileSync(temporary, contents, { mode: 0o644 });
  try {
    renameSync(temporary, file);
  } catch (error) {
    try {
      unlinkSync(temporary);
    } catch {
      // best-effort cleanup before surfacing the original failure
    }
    throw error;
  }
  return true;
}

/** @param {string} file */
function removeLoader(file) {
  if (!existsSync(file)) return false;
  refuseSymlink(file);
  if (!isManagedCompletion(readFileSync(file, "utf8"))) return false;
  const removed = `${file}.${process.pid}.removed`;
  refuseSymlink(removed);
  renameSync(file, removed);
  unlinkSync(removed);
  return true;
}

/** @param {string} file */
function refuseSymlink(file) {
  if (existsSync(file) && lstatSync(file).isSymbolicLink()) {
    throw new Error(`refusing to write symlink: ${file}`);
  }
}

/**
 * @param {readonly string[]} bins
 * @param {NodeJS.ProcessEnv} env
 */
function allTargets(bins, env) {
  const dataHome = resolveDataHome(env);
  const configHome = resolveConfigHome(env);
  return [
    ...(dataHome === null
      ? []
      : bins.map((bin) => ({
          shell: "zsh",
          file: join(dataHome, "zsh", "site-functions", `_${bin}`),
          contents: renderZshLoader(bins, bin),
        }))),
    ...(dataHome === null
      ? []
      : bins.map((bin) => ({
          shell: "bash",
          file: join(dataHome, "bash-completion", "completions", bin),
          contents: renderBashLoader(bin),
        }))),
    ...(configHome === null
      ? []
      : bins.map((bin) => ({
          shell: "fish",
          file: join(configHome, "fish", "completions", `${bin}.fish`),
          contents: renderFishLoader(bin),
        }))),
  ];
}

/**
 * @param {string} shell
 * @param {NodeJS.ProcessEnv} env
 */
function commandExists(shell, env) {
  return (env.PATH ?? "").split(delimiter).some((directory) => {
    const file = join(directory, shell);
    return existsSync(file) && !lstatSync(file).isDirectory();
  });
}

/** @param {NodeJS.ProcessEnv} env */
function shouldInstallFish(env) {
  const configHome = resolveConfigHome(env);
  return (
    commandExists("fish", env) || (configHome !== null && existsSync(join(configHome, "fish")))
  );
}

/**
 * @param {readonly string[]} bins
 * @param {NodeJS.ProcessEnv} env
 * @param {string} platformName
 */
function installTargets(bins, env, platformName) {
  let skippedBash = false;
  if (platformName === "darwin") {
    console.log(
      "→ macOS detected: bash completions need 'brew install bash-completion@2' + sourcing; skipping.",
    );
    skippedBash = true;
  }
  return allTargets(bins, env).filter((target) => {
    if (target.shell === "bash") return !skippedBash;
    if (target.shell === "fish") return shouldInstallFish(env);
    return true;
  });
}

/**
 * @param {readonly string[]} args
 * @param {NodeJS.ProcessEnv} env
 * @param {string} platformName
 */
export function main(args = process.argv.slice(2), env = process.env, platformName = osPlatform()) {
  if (isTruthy(env.AVENTURE_CLI_SKIP_COMPLETION_INSTALL) || platformName === "win32") return;
  const bins = cliBins();
  if (bins.length === 0) return;
  if (args.includes("--status")) {
    for (const target of allTargets(bins, env)) {
      const state = !existsSync(target.file)
        ? "missing"
        : isManagedCompletion(readFileSync(target.file, "utf8"))
          ? "managed"
          : "unmanaged";
      console.log(`${target.file}: ${state}`);
    }
    return;
  }
  if (args.includes("--uninstall")) {
    const removed = allTargets(bins, env).filter((target) => removeLoader(target.file));
    console.log(
      `removed completions: ${[...new Set(removed.map((target) => target.shell))].join(", ") || "none"}`,
    );
    return;
  }
  const shells = new Set();
  for (const target of installTargets(bins, env, platformName)) {
    writeLoader(target.file, target.contents);
    shells.add(target.shell);
  }
  console.log(
    `installed completions: ${[...shells].join(", ")} - remove with: ${bins[0]} completion uninstall`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`warning: could not install aventure-cli completion loader: ${message}`);
    if (process.env.npm_lifecycle_event !== "postinstall") process.exitCode = 1;
  }
}
