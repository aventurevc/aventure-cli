import { B as normalizeEnvironmentName, D as resolveAuthStatus, Dt as JsonValueSchema, E as readAuthConfig, G as failure, H as readEnv, J as success, N as logWarn, O as writeAuthConfig, R as AUTH_SECRET_NAMES, S as InvalidArgumentError, T as materializeAuth, V as prepareCallEnv, W as capEnvelope, _ as redactCredentialText, a as generatedOptionGroupRank, b as Option, c as CLI_SHELL_INPUT_GUIDANCE, f as mcpToolForIntent, h as aventureRequest, i as cliOptionDescription, j as logError, m as aventureMethod, n as CLI_NAMESPACE_SECTION, o as generatedOptionHelpGroup, s as withTerminalPunctuation, t as CLI_COMMAND_SECTION, u as cliShellSensitiveSchema, w as configPath, y as Command, z as environmentNames } from "./cli-help-policy-DjLY08wr.js";
import { A as datetime, O as uuid, S as record, o as _enum, v as number, w as string, y as object } from "./data-source-type-DD0mQARk.js";
import { _ as PersonalApiKeySchema, a as outputModeJsonAccept, c as canonicalPersonalCredentialHost, d as savePersonalCredential, f as credentialSafeMessage, g as normalizeCliApiEnvironment, h as isLoopbackHostname, l as forgetPersonalCredential, m as browserOriginForApiHost, n as GENERATED_OPERATION_FINGERPRINT, o as resolveOutputMode, p as credentialSafeProblemSummary, r as addOutputModeOptions, s as commandNeedsMaterializedAuth, t as GENERATED_OPENAPI_COMMAND_SPECS, u as loadPersonalCredential } from "./openapi-commands-BgjBSy9x.js";
import { S as mcpServerUrlFromApiHost, _ as runOpenApiCall, a as addWithInflections, b as OPENAPI_METHODS, d as queryTermForms, g as resolveOpenApiOperationSelector, h as buildRequiredOpenApiHeader, i as visibleOpenApiCommandSpecsForCurrentAuth, l as normalize, m as buildOpenApiPath, n as asCliResponseText, o as coversEveryQueryTerm, s as expandedTokens, t as MCP_GENERATION_CONTRACT, x as buildOpenApiTemplatePath } from "./mcp-generation-contract-BZuETs4O.js";
import { execFile, spawnSync } from "node:child_process";
import { createHash, webcrypto } from "node:crypto";
import { readFile } from "node:fs/promises";
import { homedir, hostname, platform } from "node:os";
import { basename, dirname, join, resolve, sep } from "node:path";
import process$1, { stderr, stdin } from "node:process";
import { appendFileSync, copyFileSync, existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { TextDecoder, inspect } from "node:util";
import { fileURLToPath } from "node:url";
import { setTimeout } from "node:timers/promises";
import { createInterface } from "node:readline/promises";
var package_default = {
	name: "@aventurevc/mcp-server",
	version: "0.7.263",
	"private": true,
	description: "Source workspace for the @aventurevc/aventure-cli and @aventurevc/mcp-server published packages. NOT an install target — see scripts/release/publish-npm-train.mjs for the staged manifests that get published.",
	license: "UNLICENSED",
	repository: {
		"type": "git",
		"url": "git+https://github.com/aventurevc/back-end.git",
		"directory": "mcp"
	},
	files: [
		"dist/aventure-cli",
		"dist/mcp-server",
		"dist/chunks",
		"scripts/install-zsh-completion-loader.mjs",
		"mcp-server/docs",
		"README.md"
	],
	type: "module",
	scripts: {
		"build": "vite build --config config/vite.config.ts",
		"cli": "../scripts/dev/aventure-doppler-run.sh tsx aventure-cli/bootstrap.ts",
		"dev:cli": "../scripts/dev/aventure-doppler-run.sh tsx aventure-cli/bootstrap.ts",
		"dev:server": "../scripts/dev/aventure-doppler-run.sh tsx mcp-server/index.ts",
		"generate:contracts": "tsx scripts/build-mcp.ts",
		"start": "node dist/mcp-server/index.js",
		"test": "node ../scripts/node/vitest-typecheck.mjs run --config config/vite.config.ts",
		"test:smoke": "../scripts/dev/aventure-doppler-run.sh node ../scripts/node/vitest-typecheck.mjs run --config config/vite.config.ts __tests__/client",
		"typecheck": "tsgo --noEmit -p config/tsconfig.json",
		"lint": "pnpm run lint:ox && pnpm run lint:ast",
		"lint:ast": "cd .. && python3 scripts/lint/ast-grep-report.py --mode core --severity-mode strict --artifact-prefix ast-grep-mcp --title 'mcp ast-grep' mcp",
		"lint:ox": "oxlint -c config/oxlintrc.json --tsconfig config/tsconfig.json --threads=1 --ignore-pattern 'aventure-cli/generated/**' --ignore-pattern 'mcp-server/generated/**' .",
		"validate": "pnpm run lint && pnpm run typecheck && pnpm run build",
		"postinstall": "node scripts/install-zsh-completion-loader.mjs",
		"prepack": "pnpm run build && node ../scripts/release/materialize-dist.mjs ."
	},
	dependencies: {
		"@aventurevc/api-schemas": "*",
		"@modelcontextprotocol/sdk": "^1.30.0",
		"@napi-rs/keyring": "1.3.0",
		"@opentelemetry/api": "^1.9.1",
		"@opentelemetry/api-logs": "^0.221.0",
		"@opentelemetry/exporter-logs-otlp-http": "^0.221.0",
		"@opentelemetry/exporter-prometheus": "^0.221.0",
		"@opentelemetry/host-metrics": "^0.39.0",
		"@opentelemetry/resources": "^2.10.0",
		"@opentelemetry/sdk-logs": "^0.221.0",
		"@opentelemetry/sdk-metrics": "^2.8.0",
		"commander": "^15.0.0",
		"cors": "^2.8.6",
		"execa": "^10.0.1",
		"express": "^5.2.1",
		"express-rate-limit": "^8.6.1",
		"undici": "^8.9.0",
		"zod": "^4.3.6"
	},
	devDependencies: {
		"@types/cors": "^2.8.19",
		"@types/express": "^5.0.6",
		"tsx": "^4.23.1",
		"vitest": "4.1.10",
		"yaml": "^2.9.0"
	},
	engines: { "node": ">=24.18.0 <25" },
	aventurePublish: { "variants": {
		"cli": {
			"name": "@aventurevc/aventure-cli",
			"directory": "aventure-cli",
			"description": "aVenture command-line client.",
			"bin": {
				"aventure": "dist/aventure-cli/index.js",
				"aventure-cli": "dist/aventure-cli/index.js"
			}
		},
		"server": {
			"name": "@aventurevc/mcp-server",
			"directory": "mcp-server",
			"description": "aVenture Streamable HTTP MCP server.",
			"bin": {
				"aventure-mcp": "dist/mcp-server/index.js",
				"aventure-mcp-server": "dist/mcp-server/index.js"
			}
		}
	} }
};
//#endregion
//#region aventure-cli/commands/generated-body-path.ts
function requiredBodyFilePath(spec) {
	const directPath = new Set((spec.bodyParameters ?? []).map(({ name }) => name));
	if (spec.bodyKind === "multipart") return spec.bodyRequiredPath;
	return spec.bodyRequiredPath.filter((path) => !directPath.has(path));
}
function assignBodyParameter(body, parameterName, value) {
	if (!isArrayItemPath(parameterName) || !Array.isArray(value)) return assignBodyPath(body, parameterName, value);
	for (const [index, entry] of value.entries()) {
		const assigned = assignBodyPath(body, parameterName, entry, index);
		if (!assigned.ok) return assigned;
	}
	return success("Body value assigned", null);
}
function hasBodyPath(body, parameterName) {
	return hasJsonPath(body, parameterName.split("."));
}
function hasJsonPath(current, rawPath) {
	const [rawPart, ...remaining] = rawPath;
	if (rawPart === void 0) return true;
	const segment = parsePathSegment(rawPart);
	if (!isJsonBody(current) || !Object.hasOwn(current, segment.key)) return false;
	const next = current[segment.key] ?? null;
	if (!segment.isArray) return hasJsonPath(next, remaining);
	return Array.isArray(next) && next.every((entry) => hasJsonPath(entry, remaining));
}
function isArrayItemPath(parameterName) {
	return parameterName.split(".").some((part) => parsePathSegment(part).isArray);
}
function firstArrayItemPath(bodyParameters) {
	return bodyParameters.find((parameter) => isArrayItemPath(parameter.name))?.name;
}
function unknownBodyFilePath(spec, body) {
	if ((spec.bodyParameters?.length ?? 0) === 0 || !isJsonBody(body)) return null;
	return findUnknownBodyFilePath(body, [], bodyPathIndex(spec.bodyParameters));
}
function isJsonBody(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function assignBodyPath(body, parameterName, value, arrayIndex = 0) {
	const path = parameterName.split(".");
	let target = body;
	for (const [index, rawPart] of path.entries()) {
		const segment = parsePathSegment(rawPart);
		const isLeaf = index === path.length - 1;
		const next = stepIntoPathSegment(target, segment, parameterName, isLeaf, value, arrayIndex);
		if (!next.ok || next.data === null) return failure(next.summary, next.warnings);
		if (isLeaf) return success("Body value assigned", null);
		target = next.data;
	}
	return failure(`${parameterName} is not a valid body option path.`);
}
function stepIntoPathSegment(target, segment, parameterName, isLeaf, value, arrayIndex) {
	const collision = () => failure(`${parameterName} cannot be combined with another body option at ${segment.key}.`);
	const existing = target[segment.key];
	if (segment.isArray) {
		if (existing !== void 0 && !Array.isArray(existing)) return collision();
		const array = existing ?? [];
		if (existing === void 0) target[segment.key] = array;
		if (isLeaf) {
			if (array[arrayIndex] !== void 0) return collision();
			array[arrayIndex] = value;
			return success("Body value assigned", target);
		}
		const entry = array[arrayIndex];
		if (entry === void 0) {
			const created = {};
			array[arrayIndex] = created;
			return success("Body path created", created);
		}
		if (isJsonBody(entry)) return success("Body path stepped", entry);
		return collision();
	}
	if (isLeaf) {
		if (existing !== void 0) return collision();
		target[segment.key] = value;
		return success("Body value assigned", target);
	}
	if (existing === void 0) {
		const created = {};
		target[segment.key] = created;
		return success("Body path created", created);
	}
	if (isJsonBody(existing)) return success("Body path stepped", existing);
	return collision();
}
function parsePathSegment(rawPart) {
	const isArray = rawPart.endsWith("[]");
	return {
		key: isArray ? rawPart.slice(0, -2) : rawPart,
		isArray
	};
}
function bodyPathIndex(parameters) {
	const leaf = /* @__PURE__ */ new Set();
	const prefix = /* @__PURE__ */ new Set();
	const flagByLeaf = /* @__PURE__ */ new Map();
	for (const parameter of parameters) {
		const path = `${parameter.name}${parameter.schemaType === "array" ? "[]" : ""}`;
		leaf.add(path);
		flagByLeaf.set(path, parameter.flag.split(" ")[0] ?? parameter.name);
		const segments = path.split(".");
		for (let index = 1; index < segments.length; index += 1) prefix.add(segments.slice(0, index).join("."));
	}
	return {
		leaf,
		prefix,
		flagByLeaf
	};
}
function findUnknownBodyFilePath(value, path, index) {
	if (Array.isArray(value)) {
		if (value.length === 0) return null;
		for (const entry of value) {
			const unknown = findUnknownBodyFilePath(entry, path, index);
			if (unknown !== null) return unknown;
		}
		return null;
	}
	if (!isJsonBody(value)) return null;
	for (const [key, child] of Object.entries(value)) {
		const next = [...path, Array.isArray(child) ? `${key}[]` : key];
		const nextPath = next.join(".");
		if (!knownBodyPath(nextPath, index)) {
			if (!insideGeneratedArrayObject(next)) continue;
			return {
				path: nextPath,
				suggestion: closestBodyPath(next, index)
			};
		}
		const unknown = findUnknownBodyFilePath(child, next, index);
		if (unknown !== null) return unknown;
	}
	return null;
}
function knownBodyPath(path, index) {
	return index.prefix.has(path) || index.leaf.has(path);
}
function insideGeneratedArrayObject(path) {
	return path.slice(0, -1).some((segment) => segment.endsWith("[]"));
}
function closestBodyPath(path, index) {
	const parent = path.slice(0, -1).join(".");
	const leaf = path.at(-1)?.replace(/\[\]$/u, "").toLowerCase() ?? "";
	const [best] = [...index.leaf].filter((candidate) => {
		return candidate.split(".").slice(0, -1).join(".") === parent;
	}).map((candidate) => ({
		path: candidate,
		score: leafSimilarity(leaf, candidate.split(".").at(-1) ?? "")
	})).filter(({ score }) => score < Number.POSITIVE_INFINITY).toSorted((left, right) => left.score - right.score || left.path.localeCompare(right.path));
	if (best === void 0) return void 0;
	return {
		path: best.path,
		flag: index.flagByLeaf.get(best.path) ?? best.path
	};
}
function leafSimilarity(leaf, candidateLeaf) {
	const candidate = candidateLeaf.replace(/\[\]$/u, "").toLowerCase();
	if (candidate === leaf) return 0;
	if (candidate.endsWith(leaf) || leaf.endsWith(candidate)) return 1;
	if (candidate.includes(leaf) || leaf.includes(candidate)) return 2;
	return Number.POSITIVE_INFINITY;
}
//#endregion
//#region aventure-cli/commands/generated-option-order.ts
function orderedGeneratedOptions(items) {
	return [...items].toSorted(compareGeneratedOption);
}
function applyGeneratedOptionHelpLayout(options, entries) {
	const entriesByLongFlag = /* @__PURE__ */ new Map();
	for (const entry of entries) {
		const flag = entry.flag?.split(" ")[0];
		if (flag !== void 0) entriesByLongFlag.set(flag, flag === "--from-file" ? {
			...entry,
			inputType: "file"
		} : entry);
	}
	for (const option of options) {
		const entry = option.long === void 0 ? void 0 : entriesByLongFlag.get(option.long);
		if (entry !== void 0) option.helpGroup(generatedOptionHelpGroup(entry));
	}
	options.sort((left, right) => {
		const leftEntry = left.long === void 0 ? void 0 : entriesByLongFlag.get(left.long);
		const rightEntry = right.long === void 0 ? void 0 : entriesByLongFlag.get(right.long);
		if (leftEntry !== void 0 && rightEntry !== void 0) return compareGeneratedOption(leftEntry, rightEntry);
		if (leftEntry !== void 0) return -1;
		if (rightEntry !== void 0) return 1;
		return 0;
	});
}
function generatedBodyFileDescription(spec, requiredBodyPath) {
	const description = spec.bodyKind === "multipart" ? "Read a JSON object keyed by multipart part name from a file, or use - for stdin" : "Read the JSON request body from a file, or use - for stdin";
	const requiredFilePath = requiredBodyPath.filter((path) => !requiredBodyPath.some((candidate) => candidate.startsWith(`${path}.`) || candidate.startsWith(`${path}[].`)));
	return requiredFilePath.length === 0 ? withTerminalPunctuation(description) : `${withTerminalPunctuation(description)} Required JSON paths: ${requiredFilePath.join(", ")}.`;
}
function generatedBodyOptionDescription(spec, parameter, bodyParameters) {
	return `${cliOptionDescription(parameter.description, void 0)}${spec.bodyKind !== "multipart" && parameter.name === firstArrayItemPath(bodyParameters) ? " Repeat to add another value." : ""}`;
}
function compareGeneratedOption(left, right) {
	return generatedOptionGroupRank(left) - generatedOptionGroupRank(right) || Number(left.required !== true) - Number(right.required !== true);
}
//#endregion
//#region aventure-cli/commands/json-input.ts
/**
* LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES.
*
* All MCP/CLI/API-schema contract, schema, annotation, option-help, or tool-shape edits
* must be made at the canonical Kotlin `.kt` source owner and its direct
* annotations, then regenerated through the approved OpenAPI/api-schemas/MCP pipeline.
*
* Canonical law: `AGENTS.md` [MCP1b.1], [AS1m], [PG1e/f], [PG1g], [SS1a/b/i],
* and [RC1]. Supporting docs: `docs/code-change.md` OpenAPI Auto-Generation Procedure,
* `docs/api-contracts/openapi.md`, and `docs/kotlin-endpoint-structure.md`.
* Supporting skills: `aventure`, `openapi`, `springdoc`, `zod`, and `mcp-builder`.
*/
/** Shared CLI input helpers for commands that accept generated schema payloads. */
async function readJsonBody(path) {
	let raw;
	try {
		raw = path === "-" ? await readStdinToString() : await readFile(path, "utf8");
	} catch (error) {
		return failure(`Could not read input: ${error.message}`, [`path=${path}`]);
	}
	try {
		if (raw.trim().length === 0) return success("No input provided", null);
		const parsedInput = JSON.parse(raw);
		return success("Input parsed", parsedInput);
	} catch (error) {
		return failure(`Input is not valid JSON: ${error.message}`);
	}
}
async function readStdinToString() {
	if (process.stdin.isTTY) throw new Error("--from-file - requires JSON on stdin, but stdin is a TTY");
	process.stdin.setEncoding("utf8");
	let stdinText = "";
	for await (const chunk of process.stdin) stdinText += chunk;
	return stdinText;
}
//#endregion
//#region aventure-cli/commands/generated-body.ts
function addBodyOptions(command, spec) {
	if (supportsBodyFile(spec)) command.addOption(new Option("--from-file <path>", generatedBodyFileDescription(spec, spec.bodyRequiredPath)).argParser(rejectRepeatedBodyOption("--from-file")));
	const bodyParameters = orderedGeneratedOptions(spec.bodyParameters ?? []);
	for (const parameter of bodyParameters) {
		const option = new Option(parameter.flag, generatedBodyOptionDescription(spec, parameter, bodyParameters));
		const conflicts = bodyOptionConflicts(spec, parameter.optionKey);
		if (conflicts.length > 0) option.conflicts(conflicts);
		if (isArrayItemPath(parameter.name) || parameter.schemaType === "array") option.argParser(collectRepeatedBodyOption);
		else option.argParser(rejectRepeatedBodyOption(parameter.flag));
		command.addOption(option);
	}
	organizeGeneratedOptions(command, spec);
}
/** Expands conflict groups into the peer Commander attribute names for one generated option. */
function bodyOptionConflicts(spec, optionKey) {
	return [...new Set((spec.cliConflicts ?? []).filter((group) => group.includes(optionKey)).flatMap((group) => group.filter((candidate) => candidate !== optionKey)))];
}
function collectRepeatedBodyOption(value, previous) {
	return [...previous ?? [], value];
}
/**
* Non-variadic generated options take exactly one value; a silent last-wins overwrite hides the
* caller's mistake, so a repeated flag is a usage error instead.
*/
function rejectRepeatedBodyOption(flag) {
	const optionName = flag.split(/\s+/u)[0] ?? flag;
	return (value, previous) => {
		if (previous !== void 0) throw new InvalidArgumentError(`${optionName} was already given; pass it once.`);
		return value;
	};
}
/** Reads generated body inputs and rejects a root shape that contradicts OpenAPI metadata. */
async function readGeneratedBody(spec, opts) {
	if (!spec.hasBody) return success("No body", void 0);
	if (spec.bodyKind === "multipart") return await readMultipartBody(spec, opts);
	const fromFile = await readBodyFile(opts);
	if (!fromFile.ok) return fromFile;
	const filePath = validateBodyFilePath(spec, fromFile.data);
	if (!filePath.ok) return filePath;
	const direct = readDirectBody(spec, opts);
	if (!direct.ok) return direct;
	if (fromFile.data === void 0 && direct.data === void 0) return spec.bodyRequired ? failure(jsonBodyRequiredMessage(spec)) : success("No body", void 0);
	const merged = mergeJsonBodies(spec, fromFile.data, direct.data);
	if (!merged.ok || merged.data === void 0) return merged;
	if (spec.bodySchemaType === "array" && !Array.isArray(merged.data)) return failure(`${spec.operationId} requires a JSON array body.`);
	if ((spec.bodyParameters?.length ?? 0) > 0 && !isJsonBody(merged.data)) return failure(`${spec.operationId} requires a JSON object body.`);
	const missing = missingRequiredBodyOption(spec, merged.data);
	if (missing.length > 0) return failure(`${spec.operationId} requires body option(s): ${missing.join(", ")}`);
	const body = merged.data;
	const missingPath = isJsonBody(body) ? requiredBodyFilePath(spec).filter((path) => !hasBodyPath(body, path)) : [];
	if (missingPath.length > 0) return failure(requiredJsonBodyPathMessage(spec, missingPath));
	return merged;
}
async function readMultipartBody(spec, opts) {
	const fromFile = await readBodyFile(opts);
	if (!fromFile.ok) return fromFile;
	const filePath = validateBodyFilePath(spec, fromFile.data);
	if (!filePath.ok) return filePath;
	const direct = readDirectBody(spec, opts);
	if (!direct.ok) return direct;
	if (fromFile.data === void 0 && direct.data === void 0) return spec.bodyRequired ? failure(jsonBodyRequiredMessage(spec)) : success("No body", void 0);
	const merged = mergeJsonBodies(spec, fromFile.data, direct.data);
	if (!merged.ok || merged.data === void 0) return merged;
	const body = merged.data;
	if (!isJsonBody(body)) return failure(`${spec.operationId} requires a JSON object keyed by multipart part name.`);
	const missingPath = requiredBodyFilePath(spec).filter((path) => !hasBodyPath(body, path));
	return missingPath.length === 0 ? merged : failure(requiredJsonBodyPathMessage(spec, missingPath));
}
function requiredJsonBodyPathMessage(spec, missingPath) {
	const message = `${spec.operationId} requires JSON body path(s): ${missingPath.join(", ")}`;
	if (spec.bodyKind !== "multipart") return message;
	return `${message}. ${missingPath.includes("body") ? "For multipart --from-file, wrap the endpoint JSON under top-level \"body\"." : "For multipart --from-file, put the missing nested path(s) inside top-level \"body\"."}`;
}
function missingRequiredBodyOption(spec, directBody) {
	if (!isJsonBody(directBody)) return [];
	return (spec.bodyParameters ?? []).filter((parameter) => parameter.required && !hasBodyPath(directBody, parameter.name)).map((parameter) => parameter.flag.split(" ")[0] ?? parameter.name);
}
function validateBodyFilePath(spec, body) {
	const unknown = unknownBodyFilePath(spec, body);
	if (unknown === null) return success("Body file paths validated", null);
	const hint = unknown.suggestion === void 0 ? "" : ` Use ${unknown.suggestion.path} (${unknown.suggestion.flag}).`;
	return failure(`${spec.operationId} --from-file contains unknown JSON path ${unknown.path}.${hint}`);
}
async function readBodyFile(opts) {
	const file = typeof opts.fromFile === "string" ? opts.fromFile : void 0;
	if (file === void 0) return success("No body file", void 0);
	const raw = await readJsonBody(file);
	if (!raw.ok) return failure(raw.summary, raw.warnings);
	const parsed = JsonValueSchema.safeParse(raw.data);
	return parsed.success ? success("Input parsed", parsed.data) : failure(`Input is not valid JSON value: ${parsed.error.message}`);
}
function readDirectBody(spec, opts) {
	const body = {};
	let hasOptions = false;
	for (const parameter of spec.bodyParameters ?? []) {
		const value = opts[parameter.optionKey];
		if (value === void 0) continue;
		const coerced = coerceBodyValue(parameter, value);
		if (!coerced.ok) return failure(coerced.summary, coerced.warnings);
		const assigned = assignBodyParameter(body, parameter.name, coerced.data);
		if (!assigned.ok) return assigned;
		hasOptions = true;
	}
	if (!hasOptions) return success("No direct body options", void 0);
	return success("Direct body options parsed", body);
}
function mergeJsonBodies(spec, fileBody, directBody) {
	if (fileBody === void 0) return success("Direct body parsed", directBody);
	if (directBody === void 0) return success("Input parsed", fileBody);
	if (isJsonBody(fileBody) && isJsonBody(directBody)) try {
		return success("Input parsed", mergeJsonBody(fileBody, directBody));
	} catch (cause) {
		return failure(`${spec.operationId} ${cause.message}`);
	}
	return failure(`${spec.operationId} cannot combine --from-file with direct body options unless the file body is an object.`);
}
function mergeJsonBody(fileBody, directBody) {
	const merged = { ...fileBody };
	for (const [key, value] of Object.entries(directBody)) {
		const current = merged[key];
		if (Array.isArray(current) && Array.isArray(value)) throw new Error(`cannot combine --from-file array '${key}' with array body options at the same key — move the per-item fields inside the matching '${key}[]' object(s) in the file body.`);
		if (current !== void 0 && jsonBodyShape(current) !== jsonBodyShape(value)) throw new Error(`cannot combine --from-file ${jsonBodyShape(current)} '${key}' with ${jsonBodyShape(value)} body option(s) at the same key — align the file body shape with the schema.`);
		merged[key] = isJsonBody(current) && isJsonBody(value) ? mergeJsonBody(current, value) : value;
	}
	return merged;
}
function jsonBodyShape(value) {
	if (Array.isArray(value)) return "array";
	return isJsonBody(value) ? "object" : "scalar";
}
function coerceBodyValue(parameter, value) {
	if (typeof value === "boolean") return success("Body value parsed", value);
	if (value === void 0 || typeof value === "string") return coerceScalar(parameter.name, parameter.schemaType, value ?? "");
	const entries = [];
	const schemaType = isArrayItemPath(parameter.name) ? parameter.schemaType : parameter.itemSchemaType;
	for (const entry of value) {
		const coerced = coerceScalar(parameter.name, schemaType, entry);
		if (!coerced.ok) return coerced;
		entries.push(coerced.data);
	}
	return success("Body value parsed", entries);
}
function coerceScalar(parameterName, schemaType, value) {
	if (schemaType === "boolean") {
		if (value === "true") return success("Body value parsed", true);
		if (value === "false") return success("Body value parsed", false);
		return failure(`${parameterName} must be true or false.`);
	}
	if (schemaType === "number" || schemaType === "integer") {
		const trimmed = value.trim();
		const parsed = Number(trimmed);
		if (trimmed === "" || !Number.isFinite(parsed)) return failure(`${parameterName} must be a finite ${schemaType}.`);
		if (schemaType === "integer" && !Number.isInteger(parsed)) return failure(`${parameterName} must be an integer.`);
		return success("Body value parsed", parsed);
	}
	return success("Body value parsed", value);
}
function jsonBodyRequiredMessage(spec) {
	const filePath = requiredBodyFilePath(spec);
	if (filePath.length > 0) return `${spec.operationId} requires --from-file with JSON body path(s): ${filePath.join(", ")}`;
	const direct = (spec.bodyParameters ?? []).map((parameter) => parameter.flag.split(" ")[0]).join(", ");
	return direct.length === 0 ? `${spec.operationId} requires --from-file` : `${spec.operationId} requires --from-file or body option(s): ${direct}`;
}
function organizeGeneratedOptions(command, spec) {
	const entries = [...spec.parameters, ...spec.bodyParameters ?? []];
	if (supportsBodyFile(spec)) entries.push({
		optionKey: "fromFile",
		flag: "--from-file",
		location: "body"
	});
	applyGeneratedOptionHelpLayout(command.options, entries);
}
function supportsBodyFile(spec) {
	if (!spec.hasBody) return false;
	if (spec.bodyKind !== "multipart") return true;
	return (spec.bodyParameters ?? []).some((parameter) => parameter.schemaFormat !== "binary");
}
//#endregion
//#region aventure-cli/output.ts
function emitJson(envelope) {
	const emittedEnvelope = capEnvelope(envelope);
	logEnvelopeWarnings(emittedEnvelope);
	process.stdout.write(`${JSON.stringify(emittedEnvelope)}\n`);
	return emittedEnvelope;
}
function emitHuman(envelope) {
	logEnvelopeWarnings(envelope);
	const text = asCliResponseText(envelope.data, envelope.summary);
	if (envelope.ok && text !== null) {
		process.stdout.write(text.endsWith("\n") ? text : `${text}\n`);
		emitEnvelopeMetadata(envelope);
		return;
	}
	const status = envelope.ok ? "OK" : "FAIL";
	process.stdout.write(`[${status}] ${envelope.summary}\n`);
	if (!envelope.ok && envelope.problem !== void 0) emitProblemDetail(envelope.problem);
	emitEnvelopeMetadata(envelope);
}
function emitEnvelopeMetadata(envelope) {
	if (envelope.ids.length > 0) process.stdout.write(`  ids: ${envelope.ids.join(", ")}\n`);
	for (const [key, value] of Object.entries(envelope.counts)) process.stdout.write(`  ${key}: ${value}\n`);
	for (const ref of envelope.references) process.stdout.write(`  ref: ${ref}\n`);
	if (envelope.truncation !== void 0) {
		const omitted = envelope.truncation.omitted.join(", ");
		process.stdout.write(`  truncated: byteLength=${envelope.truncation.byteLength} maxBytes=${envelope.truncation.maxBytes} omitted=${omitted}\n`);
		process.stdout.write(`  recovery: ${envelope.truncation.recovery}\n`);
	}
	for (const warn of envelope.warnings) process.stdout.write(`  warn: ${warn}\n`);
}
/**
* Single CLI emit point: routes envelope to JSON, data, or text form,
* sets process.exitCode=1 when the envelope is a failure. Replaces four
* identical inline `emit()` helpers across the commander wirings.
*/
function emit(opts, envelope) {
	if (opts.mode === "data" || opts.mode === "data-full") {
		const emittedEnvelope = opts.mode === "data" ? capEnvelope(envelope) : envelope;
		logEnvelopeWarnings(emittedEnvelope);
		process.stdout.write(`${JSON.stringify(emittedEnvelope.ok && emittedEnvelope.truncated !== true ? dataPayload(emittedEnvelope.data) : emittedEnvelope)}\n`);
		if (!emittedEnvelope.ok) process.exitCode = 1;
		return;
	}
	const emittedEnvelope = opts.mode === "json" ? emitJson(envelope) : envelope;
	if (opts.mode === "text") emitHuman(emittedEnvelope);
	if (!emittedEnvelope.ok) process.exitCode = 1;
}
function dataPayload(payload) {
	if (typeof payload !== "object" || payload === null || Array.isArray(payload)) return payload;
	if (!Reflect.has(payload, "method") || !Reflect.has(payload, "endpoint")) return payload;
	if (!("response" in payload)) return payload;
	return payload.response === void 0 ? payload : payload.response;
}
/**
* Render the RFC 9457 ProblemDetail fields that carry the actionable failure cause and recovery
* path. The summary line only shows `<label>: <status> <title>`, so without this the human/MCP-text
* surface drops the server's `detail`, `code`, `hint`, `suggestion`(s), parameter inventories, and
* `resolution` — leaving callers a bare HTTP status with no guidance.
*/
function emitProblemDetail(problem) {
	if (typeof problem.code === "string") process.stdout.write(`  code: ${problem.code}\n`);
	if (typeof problem.detail === "string") process.stdout.write(`  detail: ${problem.detail}\n`);
	if (typeof problem.hint === "string") process.stdout.write(`  hint: ${problem.hint}\n`);
	if (typeof problem.suggestion === "string") process.stdout.write(`  suggestion: ${problem.suggestion}\n`);
	const suggestionPairs = Object.entries(problem.suggestions ?? {});
	if (suggestionPairs.length > 0) {
		const rendered = suggestionPairs.map(([field, fix]) => `${field}=${fix}`).join("; ");
		process.stdout.write(`  suggestions: ${rendered}\n`);
	}
	emitProblemNameList("unknownParameters", problem.unknownParameters);
	emitProblemNameList("validParameters", problem.validParameters);
	emitProblemResolution(problem.resolution);
}
function emitProblemNameList(label, names) {
	if (names !== null && names !== void 0 && names.length > 0) process.stdout.write(`  ${label}: ${names.join(", ")}\n`);
}
function emitProblemResolution(resolution) {
	if (resolution === null || resolution === void 0) return;
	const parts = [`action=${resolution.action}`];
	if (typeof resolution.parameter === "string") parts.push(`parameter=${resolution.parameter}`);
	if (typeof resolution.fieldPath === "string") parts.push(`fieldPath=${resolution.fieldPath}`);
	if (typeof resolution.endpoint === "string") parts.push(`endpoint=${resolution.endpoint}`);
	if (resolution.acceptedValue !== null && resolution.acceptedValue !== void 0) {
		if (resolution.acceptedValue.length > 0) parts.push(`acceptedValue=${resolution.acceptedValue.join(", ")}`);
	}
	if (typeof resolution.retryable === "boolean") parts.push(`retryable=${resolution.retryable}`);
	process.stdout.write(`  resolution: ${parts.join(" ")}\n`);
}
function logEnvelopeWarnings(envelope) {
	if (envelope.ok && envelope.warnings.length === 0) return;
	logWarn({
		component: "aventure-cli",
		event: envelope.ok ? "command_warning" : "command_failed",
		message: envelope.warnings.length > 0 ? envelope.warnings.join(" | ") : envelope.summary,
		fields: {
			warningCount: envelope.warnings.length,
			summary: envelope.summary
		}
	});
}
//#endregion
//#region aventure-cli/commands/operations-metadata.ts
function searchOperations(opts, specs) {
	const totalOperations = specs.length;
	const query = queryText(opts);
	const tokens = expandedTokens(query);
	const termForm = queryTermForms(query);
	const filtered = operationMetadata(specs).filter((operation) => matchesFilters(operation, opts)).map((operation) => ({
		operation,
		score: scoreOperation(query, tokens, termForm, operation)
	})).filter(({ score }) => query === "" || score > 0).toSorted((left, right) => right.score - left.score || left.operation.cli.command.localeCompare(right.operation.cli.command) || left.operation.operationId.localeCompare(right.operation.operationId)).map(({ operation }) => operation);
	const limit = resolveLimit(opts.limit, filtered.length);
	const operation = filtered.slice(0, limit);
	return success("Operation catalog matches", {
		operation,
		count: {
			totalOperations,
			matched: filtered.length,
			returned: operation.length
		}
	});
}
function showOperation(opts, specs) {
	const metadata = operationMetadata(specs);
	const selected = opts.operationId === void 0 ? operationByCommand(metadata, opts.command) : metadata.find((operation) => operation.operationId === opts.operationId);
	if (selected === void 0) return failure("Generated operation not found", ["List candidates with `aventure-cli command-catalog search \"<text>\"`."]);
	return success("Generated operation detail", {
		operation: selected,
		usage: usageFor(selected)
	});
}
function operationByCommand(operations, command) {
	if (command === void 0) return void 0;
	const normalized = normalizeCommand(command);
	return operations.find((operation) => normalizeCommand(operation.cli.command) === normalized || operation.cli.alias !== null && normalizeCommand(operation.cli.alias) === normalized);
}
function operationMetadata(specs) {
	return specs.map((spec) => {
		const flags = [...spec.parameters, ...spec.bodyParameters].map(operationFlag);
		const command = `aventure-cli ${spec.cliPath.join(" ")}`;
		const alias = spec.cliAliasPath === void 0 ? null : `aventure-cli ${spec.cliAliasPath.join(" ")}`;
		const mutates = operationMutates(spec);
		const destructive = spec.method === "DELETE" || spec.intent === "delete";
		const bodyKind = spec.bodyKind ?? null;
		return {
			operationId: spec.operationId,
			method: spec.method,
			path: spec.path,
			resource: spec.resource,
			intent: spec.intent,
			scope: spec.scope,
			mutates,
			destructive,
			dryRunSupported: spec.dryRun,
			auth: spec.auth,
			cli: {
				command,
				path: spec.cliPath,
				alias,
				aliasPath: spec.cliAliasPath ?? null
			},
			mcpTool: mcpToolForIntent(spec.intent),
			body: {
				hasBody: spec.hasBody,
				kind: bodyKind,
				required: spec.bodyRequired,
				description: spec.bodyDescription,
				requiredPath: spec.bodyRequiredPath
			},
			flags,
			errorResponse: spec.errorResponse,
			summary: spec.summary,
			description: spec.description
		};
	});
}
function operationFlag(parameter) {
	const parts = parameter.flag.split(/\s+/u);
	return {
		name: parts[0] ?? parameter.flag,
		optionKey: parameter.optionKey,
		wireName: parameter.name,
		location: parameter.location,
		required: parameter.required,
		placeholder: parts.length <= 1 ? null : parts.slice(1).join(" "),
		description: parameter.description,
		choices: parameter.choices ?? []
	};
}
function operationMutates(spec) {
	return spec.intent === "write" || spec.intent === "delete";
}
function matchesFilters(operation, opts) {
	if (opts.root !== void 0 && !matchesRoot(operation, opts.root)) return false;
	if (opts.scope !== void 0 && opts.scope !== "all" && opts.scope !== operation.scope) return false;
	if (opts.mutates !== void 0 && opts.mutates !== "any" && opts.mutates === "true" !== operation.mutates) return false;
	if (opts.destructive !== void 0 && opts.destructive !== "any" && opts.destructive === "true" !== operation.destructive) return false;
	if (opts.intent !== void 0 && opts.intent !== "all" && opts.intent !== operation.intent) return false;
	if (opts.method !== void 0 && opts.method !== "all" && opts.method !== operation.method) return false;
	return true;
}
function matchesRoot(operation, root) {
	const normalizedRoot = normalize(root);
	if (normalizedRoot.length === 0) return true;
	return normalize(operation.cli.path.at(0) ?? "") === normalizedRoot || normalize(operation.cli.aliasPath?.at(0) ?? "") === normalizedRoot;
}
function scoreOperation(normalizedQuery, tokens, termForm, operation) {
	if (normalizedQuery.length === 0) return 1;
	const identityCorpus = operationIdentitySearchCorpus(operation);
	let score = scoreSearchCorpus(normalizedQuery, tokens, identityCorpus, {
		exactQuery: 120,
		partialQuery: 60,
		exactToken: 18,
		partialToken: 6
	}) + scoreSearchCorpus(normalizedQuery, tokens, operationContextSearchCorpus(operation), {
		exactQuery: 12,
		partialQuery: 6,
		exactToken: 2,
		partialToken: 1
	});
	if (coversEveryQueryTerm(termForm, identityCorpus)) score += 200;
	for (const segment of operation.cli.path) {
		const segmentForms = /* @__PURE__ */ new Set();
		addWithInflections(segmentForms, segment);
		if ([...segmentForms].some((form) => tokens.has(form))) score += 15;
	}
	if (normalize(operation.cli.command).endsWith(normalizedQuery)) score += 40;
	return score;
}
function scoreSearchCorpus(normalizedQuery, tokens, corpus, weights) {
	let score = 0;
	if (corpus.includes(normalizedQuery)) score += weights.exactQuery;
	if (corpus.some((value) => value.includes(normalizedQuery))) score += weights.partialQuery;
	for (const token of tokens) if (corpus.includes(token)) score += weights.exactToken;
	else if (corpus.some((value) => value.includes(token))) score += weights.partialToken;
	return score;
}
function operationIdentitySearchCorpus(operation) {
	return normalizedSearchCorpus([
		operation.operationId,
		operation.cli.command,
		operation.cli.alias ?? "",
		operation.summary
	]);
}
function operationContextSearchCorpus(operation) {
	return normalizedSearchCorpus([
		operation.method,
		operation.path,
		operation.resource,
		operation.intent,
		operation.scope,
		operation.mutates ? "mutates mutation write" : "read only no mutation",
		operation.destructive ? "destructive delete" : "non destructive",
		operation.mcpTool,
		operation.body.kind ?? "",
		operation.body.description,
		operation.body.requiredPath.join(" "),
		operation.description,
		...operation.flags.flatMap((flag) => [
			flag.name,
			flag.optionKey,
			flag.wireName,
			flag.description,
			flag.choices.join(" ")
		])
	]);
}
function normalizedSearchCorpus(values) {
	return values.map(normalize).filter((value) => value.length > 0);
}
function queryText(opts) {
	return normalize(opts.q?.trim() ?? "");
}
function resolveLimit(value, fallback) {
	if (value === void 0) return fallback;
	const parsed = Number(value);
	return Number.isFinite(parsed) ? Math.max(0, Math.trunc(parsed)) : fallback;
}
function usageFor(operation) {
	const required = operation.flags.filter((flag) => flag.required);
	const optional = operation.flags.filter((flag) => !flag.required);
	return [
		`cli: ${operation.cli.command}`,
		operation.cli.alias === null ? "" : `alias: ${operation.cli.alias}`,
		`${operation.method} ${operation.path}`,
		`operationId: ${operation.operationId}`,
		`resource: ${operation.resource}`,
		`intent: ${operation.intent}`,
		`scope: ${operation.scope}`,
		`mutates: ${operation.mutates}`,
		`destructive: ${operation.destructive}`,
		`mcpTool: ${operation.mcpTool}`,
		operation.body.hasBody ? `body: kind=${operation.body.kind ?? "unknown"} required=${operation.body.required} requiredPath=${operation.body.requiredPath.join(",")}` : "body: none",
		flagUsage("required path flags", required, "path"),
		flagUsage("required query flags", required, "query"),
		flagUsage("required body flags", required, "body"),
		flagUsage("optional path flags", optional, "path"),
		flagUsage("optional query flags", optional, "query"),
		flagUsage("optional body flags", optional, "body"),
		...exampleUsage(operation),
		...errorBlock(operation.errorResponse),
		"",
		operation.summary,
		operation.description
	].filter((line) => line.length > 0).join("\n");
}
/**
* Renders the generated failure contract as `Errors:` plus one `<status> <description>` line, the
* sole rendering of it: `command-catalog show`, `docs api`, and every generated `--help` share it.
*/
function errorBlock(errorResponse) {
	if (errorResponse.length === 0) return [];
	return ["Errors:", ...errorResponse.map(({ status, description }) => `  ${status} ${description}`)];
}
/** Identity-flag suffixes in preference order, matched against the operation's own resource name. */
var EXAMPLE_IDENTITY_SUFFIX = [
	"-id",
	"-slug",
	"-url"
];
/** Identity flags that carry no resource prefix, in the same preference order. */
var EXAMPLE_BARE_IDENTITY_FLAG = [
	"--id",
	"--slug",
	"--url"
];
/** Body file flag registered by `addBodyOptions` when a required body graph has no required flag. */
var EXAMPLE_BODY_FILE_ARGUMENT = "--from-file \"<path>\"";
function exampleUsage(operation) {
	const invocation = [
		operation.cli.command,
		...exampleArgument(operation),
		"--data"
	].join(" ");
	return operation.dryRunSupported ? [`example: ${invocation}`, `example (commit): ${invocation} --execute`] : [`example: ${invocation}`];
}
function exampleArgument(operation) {
	const required = operation.flags.filter((flag) => flag.required);
	const argument = (required.length > 0 ? required : exampleIdentityFlag(operation)).map(exampleFlagArgument);
	return (operation.body.required || operation.body.requiredPath.length > 0) && !required.some((flag) => flag.location === "body") ? [...argument, EXAMPLE_BODY_FILE_ARGUMENT] : argument;
}
/**
* Picks the one selector an operation with no required flag needs. Anchoring the match to the
* operation's own resource keeps filter, exclusion, and cursor flags that merely end in `-id`
* (`--exclude-id`, `--after-entity-id`, `--correlation-id`) out of generated examples.
*/
function exampleIdentityFlag(operation) {
	const resourceForm = /* @__PURE__ */ new Set();
	addWithInflections(resourceForm, operation.resource);
	for (const suffix of EXAMPLE_IDENTITY_SUFFIX) for (const form of resourceForm) {
		const flag = operation.flags.find((candidate) => candidate.name === `--${form}${suffix}`);
		if (flag !== void 0) return [flag];
	}
	for (const name of EXAMPLE_BARE_IDENTITY_FLAG) {
		const flag = operation.flags.find((candidate) => candidate.name === name);
		if (flag !== void 0) return [flag];
	}
	return [];
}
function exampleFlagArgument(flag) {
	return flag.placeholder === null ? flag.name : `${flag.name} "${flag.placeholder}"`;
}
function flagUsage(label, flags, location) {
	const locationFlags = flags.filter((flag) => flag.location === location);
	return `${label}: ${locationFlags.length === 0 ? "none" : locationFlags.map((flag) => flag.name).join(" ")}`;
}
function normalizeCommand(command) {
	return command.trim().replace(/^aventure(?:-cli)?\s+/u, "").replaceAll(/\s+/gu, " ");
}
//#endregion
//#region aventure-cli/commands/curated-help.ts
function registerCuratedHelpCommand(program, specs) {
	program.helpCommand(false);
	const help = program.commands.find((command) => command.name() === "help") ?? program.command("help");
	help.summary("Show command help, or ask the platform a grounded question").description([
		"Show local --help output for a command path (deterministic, offline),",
		"or answer a natural-language platform question with --ask via the grounded",
		"help operation (the same generated operation as `help ask`)."
	].join("\n")).argument("[command...]", "command path to show help for, e.g. `help search entities`");
	const grounded = groundedHelpSpec(specs);
	if (grounded !== void 0) help.option("--ask <question>", grounded.summary);
	addOutputModeOptions(help);
	help.action(async function(commandPath) {
		const opts = this.optsWithGlobals();
		if (grounded !== void 0 && opts.ask !== void 0) {
			const mode = resolveOutputMode(opts);
			if (commandPath.length > 0) {
				emit({ mode }, failure("Use either a command path or --ask, not both."));
				return;
			}
			emit({ mode }, await runGroundedHelp(grounded, opts.ask, opts.environment, mode));
			return;
		}
		const target = commandAtPath(program, commandPath);
		if (target === void 0) this.error(`unknown command '${commandPath.join(" ")}' (run \`aventure-cli --help\` for the command tree)`);
		target.outputHelp();
	});
	installGeneratedErrorHelp(program, specs);
}
/**
* Attaches the generated failure contract to every generated leaf's `--help`, so an agent that
* reads help never has to also run `command-catalog show` to learn what the operation can return.
*/
function installGeneratedErrorHelp(program, specs) {
	const documented = /* @__PURE__ */ new Set();
	for (const spec of specs) {
		const block = errorBlock(spec.errorResponse);
		if (block.length === 0) continue;
		for (const path of [spec.cliPath, spec.cliAliasPath]) {
			const leaf = path === void 0 ? void 0 : commandAtPath(program, path);
			if (leaf === void 0 || documented.has(leaf)) continue;
			documented.add(leaf);
			leaf.addHelpText("after", `\n${block.join("\n")}\n`);
		}
	}
}
/**
* The sole generated single-question leaf under the curated help parent, when one exists. Derived
* structurally (a two-segment `help` path taking one required text body) so no operation id, cli
* path, or description is authored here; without such a leaf, `--ask` is not registered at all.
*/
function groundedHelpSpec(specs) {
	const [sole, ...rest] = specs.filter((spec) => {
		const [root, leaf, extra] = spec.cliPath;
		return root === "help" && leaf !== void 0 && extra === void 0 && singleRequiredStringBodyParameter(spec) !== void 0;
	});
	return rest.length === 0 ? sole : void 0;
}
function commandAtPath(program, path) {
	let current = program;
	for (const segment of path) {
		const next = current.commands.find((command) => command.name() === segment || command.aliases().includes(segment));
		if (next === void 0) return void 0;
		current = next;
	}
	return current;
}
async function runGroundedHelp(spec, question, environment, mode) {
	const questionParameter = singleRequiredStringBodyParameter(spec);
	if (questionParameter === void 0) return failure(`The \`${spec.cliPath.join(" ")}\` operation no longer takes a single required text body; run it directly instead of \`help --ask\`.`);
	if (environment !== void 0) process.env.API_ENV = environment;
	const body = await readGeneratedBody(spec, { [questionParameter.optionKey]: question });
	if (!body.ok) return body;
	return await runOpenApiCall({
		method: spec.method,
		path: buildOpenApiPath(spec.operationId, {}),
		searchParams: {},
		body: body.data,
		auth: spec.auth,
		execute: false,
		responseFormat: outputModeJsonAccept(mode) ? "json" : "auto"
	});
}
/** Mirrors the generated positional-text rule: one required string body field, no required params. */
function singleRequiredStringBodyParameter(spec) {
	if (spec.parameters.some((parameter) => parameter.required)) return void 0;
	const requiredBody = spec.bodyParameters.filter((parameter) => parameter.required);
	return requiredBody.length === 1 && requiredBody[0]?.schemaType === "string" ? requiredBody[0] : void 0;
}
//#endregion
//#region aventure-cli/commands/search-parent-mode.ts
/**
* Parent-level `--mode` ergonomics for the verb-first `search` namespace.
*
* The generated `search <scope>` leaves own the real `mode` body or query option (projected from
* the Kotlin owner). This shim only lets that flag also appear before the scope
* (`aventure-cli search --mode semantic entities "…"`): it registers one parent option whose
* choices are read from the generated leaf specs and forwards the value to the dispatched leaf.
* No mode vocabulary or contract facts are authored here; when no generated `search` leaf
* carries a `mode` option there is nothing to forward and nothing is registered.
*/
var SEARCH_ROOT = "search";
var MODE_OPTION_KEY = "mode";
var MODE_FLAG = "--mode";
function registerSearchParentModeOption(program, specs) {
	const search = program.commands.find((command) => command.name() === SEARCH_ROOT);
	if (search === void 0) return;
	const scopeChoices = /* @__PURE__ */ new Map();
	for (const spec of specs) {
		const [root, scope, extra] = spec.cliPath;
		if (root !== SEARCH_ROOT || scope === void 0 || extra !== void 0) continue;
		const mode = [...spec.parameters, ...spec.bodyParameters].find((parameter) => parameter.optionKey === MODE_OPTION_KEY);
		if (mode?.choices !== void 0) scopeChoices.set(scope, mode.choices);
	}
	if (scopeChoices.size === 0) return;
	const choices = [...new Set([...scopeChoices.values()].flat())];
	search.addOption(new Option(`${MODE_FLAG} <mode>`, "search strategy, forwarded to the scope command's generated --mode option").choices(choices).argParser((value, previous) => {
		if (previous !== void 0) throw new InvalidArgumentError(`${MODE_FLAG} was already given; pass it once.`);
		if (!choices.includes(value)) throw new InvalidArgumentError(`${MODE_FLAG} must be one of: ${choices.join(", ")}.`);
		return value;
	}));
	search.hook("preSubcommand", (thisCommand, actionCommand) => {
		const mode = thisCommand.opts()[MODE_OPTION_KEY];
		if (typeof mode !== "string") return;
		if (!scopeChoices.has(actionCommand.name())) thisCommand.error(`${MODE_FLAG} is not supported by 'search ${actionCommand.name()}'`);
		actionCommand.setOptionValueWithSource(MODE_OPTION_KEY, mode, "cli");
	});
}
//#endregion
//#region aventure-cli/generated/cli-namespaces.ts
var GENERATED_CLI_NAMESPACES = {
	addresses: { summary: "Validate and geocode postal addresses for entity and person records" },
	"addresses validation": { summary: "Address validation and geocoding API" },
	agents: { summary: "Install the aVenture agent skill bundle, read versioned agent instructions, and ask grounded platform questions" },
	"agents chassis": { summary: "Accepted automated-agent runtime chassis tokens" },
	"agents help": { summary: "Grounded natural-language platform help with citations" },
	"agents help reindex": { summary: "Grounded natural-language platform help with citations" },
	"agents instructions": { summary: "Versioned agent prompt and skill documents" },
	"agents instructions versions": { summary: "Versioned agent prompt and skill documents" },
	app: { summary: "Manage the signed-in account's saved lists and saved views" },
	"app saved-lists": { summary: "User-owned saved collections of entities and people" },
	"app saved-lists entities": { summary: "User-owned saved collections of entities and people" },
	"app saved-lists people": { summary: "User-owned saved collections of entities and people" },
	"app saved-views": { summary: "User-owned saved filters and presentation state" },
	auth: { summary: "Account lifecycle management endpoints" },
	"auth users": { summary: "Create auto-confirmed platform user accounts" },
	billing: { summary: "Authenticated hosted billing operations" },
	"billing checkout-sessions": { summary: "Start or recover a hosted checkout session" },
	"billing portal-sessions": { summary: "Open a hosted billing-portal session" },
	"billing subscription": { summary: "Read the signed-in account's current subscription" },
	classifications: { summary: "Browse and search the entity classification tag catalog" },
	"classifications catalog": { summary: "Fetch the full entity classification taxonomy" },
	"classifications search": { summary: "Search the classification taxonomy by keyword" },
	"classifications tags": { summary: "Search assignable entity classification tags" },
	contacts: { summary: "Contact records, contact-form submissions, and waitlist status" },
	"contacts forms": { summary: "Read and manage submitted contact-form messages" },
	"contacts waitlist-status": { summary: "Read a contact's waitlist status" },
	content: { summary: "Public content cards: news, blog posts, social posts, repositories, websites, and papers" },
	"content embedding": { summary: "Unified embedding write/read endpoints" },
	"content embedding activity": { summary: "Unified embedding write/read endpoints" },
	"content embedding backlog": { summary: "Unified embedding write/read endpoints" },
	"content embedding backlog mode": { summary: "Unified embedding write/read endpoints" },
	"content embedding neighbors": { summary: "Unified embedding write/read endpoints" },
	"content embedding refresh": { summary: "Unified embedding write/read endpoints" },
	"content embedding refresh reconcile": { summary: "Unified embedding write/read endpoints" },
	"content embedding refresh sweep": { summary: "Unified embedding write/read endpoints" },
	"content embedding stale": { summary: "Unified embedding write/read endpoints" },
	"content similarity": { summary: "Related companies, trending news, and batch ingestion" },
	"content similarity batch": { summary: "Related companies, trending news, and batch ingestion" },
	"content similarity stale": { summary: "Related companies, trending news, and batch ingestion" },
	entities: { summary: "Companies, funds, investors, accelerators, and other organizations" },
	"entities acquisitions": { summary: "Canonical acquisition event CRUD" },
	"entities addresses": { summary: "Canonical nested address CRUD for entities" },
	"entities batch": { summary: "Batch reads: many entity records or details in one request" },
	"entities batch detail": { summary: "Companies, funds, investors, accelerators, and other organizations" },
	"entities blog-posts": { summary: "External blog and article links for entities and people" },
	"entities bootstrap": { summary: "Create minimal bootstrap entities for enrichment runs" },
	"entities classifications": { summary: "Read, audit, and reconcile one entity's classification tags" },
	"entities classifications fleet": { summary: "Read-only standardized classification audit across the entity fleet" },
	"entities content": { summary: "Public content cards: news, blog posts, social posts, repositories, websites, and papers" },
	"entities counts": { summary: "Count entities by type" },
	"entities crawl-runs": { summary: "Website crawl runs for companies and people, including manual job kicks" },
	"entities detail": { summary: "Enrichment completion-gate catalog and per-entity floor coverage" },
	"entities detail coverage": { summary: "Enrichment completion-gate catalog and per-entity floor coverage" },
	"entities duplicate-check": { summary: "Check whether a would-be entity already exists, with scored candidates" },
	"entities duplicate-check candidates": { summary: "Canonical v1 endpoints for Entity domain (Company, Investment Firm)" },
	"entities filters": { summary: "Entity filter options: list, count, refine, and search" },
	"entities filters counts": { summary: "Entity filter discovery: tag counts, type counts, refinement metadata, and option set search used to drive entity-listing UIs" },
	"entities filters refine": { summary: "Entity filter discovery: tag counts, type counts, refinement metadata, and option set search used to drive entity-listing UIs" },
	"entities filters search": { summary: "Entity filter discovery: tag counts, type counts, refinement metadata, and option set search used to drive entity-listing UIs" },
	"entities fundraise": { summary: "Funding rounds and their participating investors for an entity" },
	"entities fundraise investments": { summary: "Funding rounds and their participating investors for an entity" },
	"entities fundraise investor-activity": { summary: "Funding rounds and their participating investors for an entity" },
	"entities fundraise investor-joins": { summary: "Funding rounds and their participating investors for an entity" },
	"entities fundraise investors": { summary: "Funding rounds and their participating investors for an entity" },
	"entities fundraise person-investors": { summary: "Funding rounds and their participating investors for an entity" },
	"entities fundraise rounds": { summary: "Funding rounds and their participating investors for an entity" },
	"entities identifiers": { summary: "Resolve batches of external identifiers to entity records" },
	"entities news": { summary: "News linked to one entity, including semantic-similarity matches" },
	"entities news trending": { summary: "Related companies, trending news, and batch ingestion" },
	"entities operating-status": { summary: "Read and write an entity's operating-status record and signal" },
	"entities operating-status signal": { summary: "Administrative tools for entity data maintenance" },
	"entities people": { summary: "Person associations and employee-count records for one entity" },
	"entities people employee-counts": { summary: "Entity employee-count sub-resource: time series for an entity" },
	"entities products": { summary: "Suggest products and services for an entity" },
	"entities relationships": { summary: "Entity-to-entity relationships and suggested relationship candidates" },
	"entities relationships row": { summary: "Entity relationship endpoints" },
	"entities relationships types": { summary: "Entity relationship endpoints" },
	"entities repositories": { summary: "GitHub repositories synced per entity or person owner" },
	"entities research": { summary: "Entity research texts, snippets, and completion gates" },
	"entities research completion": { summary: "Enrichment completion-gate catalog and per-entity floor coverage" },
	"entities research completion gates": { summary: "Enrichment completion-gate catalog and per-entity floor coverage" },
	"entities research details": { summary: "Typed research details and snippets for entities, with snippet provenance" },
	"entities research details types": { summary: "Typed research details and snippets for entities, with snippet provenance" },
	"entities research snippets": { summary: "Typed research details and snippets for entities, with snippet provenance" },
	"entities research snippets types": { summary: "Typed research details and snippets for entities, with snippet provenance" },
	"entities similar": { summary: "Find entities similar to one entity" },
	"entities slug": { summary: "Per-domain slug changes and redirect rows" },
	"entities slug redirects": { summary: "Per-domain slug changes and redirect rows" },
	"entities status": { summary: "Read or set an entity's record status" },
	"entities summary": { summary: "List compact entity summaries" },
	"entities texts": { summary: "Create, read, update, and delete entity text rows" },
	"entities texts types": { summary: "Entity and person text endpoints" },
	"entities type-record": { summary: "Read or set an entity's type record" },
	"entities type-record types": { summary: "Administrative tools for entity data maintenance" },
	"entities unique-ids": { summary: "External identifier mappings (EIN, SEC CIK, ticker, LEI, DUNS, ...) for entities and people, plus reverse lookup from an identifier to its owner" },
	"entities urls": { summary: "Create, read, update, and delete entity URL links" },
	"entities urls all": { summary: "Entity and person URL link endpoints" },
	"entities urls surface-misclassifications": { summary: "Entity and person URL link endpoints" },
	"entities urls types": { summary: "Entity and person URL link endpoints" },
	"entities valuations": { summary: "Entity valuation time-series reads and writes" },
	"entities valuations month": { summary: "Entity valuation time-series reads and writes" },
	harness: { summary: "Enrichment agent runs and their session transcripts" },
	"harness control-plane": { summary: "Engine-facing run lifecycle: create, claim, checkpoint, and complete runs" },
	"harness control-plane runs": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs checkpoint": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs claim": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs complete": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs events": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs events batch": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs fail": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs heartbeat": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs overview": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs queue-position": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs release": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs requeue": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs resolve-subagent-model": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs restart": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs resume": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs resume-accept": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs stop": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs usage": { summary: "Harness enrichment run control plane" },
	"harness control-plane runs usage-recovery-candidates": { summary: "Harness enrichment run control plane" },
	"harness models": { summary: "Configured harness model eligibility" },
	"harness runs": { summary: "Principal-owned runs: list, inspect, stop, resume, and restart" },
	"harness runs queue-position": { summary: "Harness enrichment run control plane" },
	"harness runs restart": { summary: "Harness enrichment run control plane" },
	"harness runs resume": { summary: "Harness enrichment run control plane" },
	"harness runs stop": { summary: "Harness enrichment run control plane" },
	"harness runs submissions": { summary: "Harness enrichment run control plane" },
	"harness runs usage": { summary: "Harness enrichment run control plane" },
	"harness sessions": { summary: "Durable harness session mirror" },
	"harness sessions entries": { summary: "Durable harness session mirror" },
	"harness sessions prune": { summary: "Durable harness session mirror" },
	"harness sessions subpaths": { summary: "Durable harness session mirror" },
	help: { summary: "Grounded natural-language platform help with citations" },
	inference: { summary: "OpenAI-compatible embeddings and chat/completions" },
	"inference chat": { summary: "Chat completions on a configured OpenAI-compatible profile" },
	"inference chat completions": { summary: "OpenAI-compatible embeddings and chat/completions" },
	"inference dispatch": { summary: "Dispatch one raw OpenAI-compatible inference request" },
	"inference embeddings": { summary: "Create embeddings on a configured OpenAI-compatible profile" },
	"inference jobs": { summary: "Async OpenAI-compatible chat/completions jobs" },
	"inference models": { summary: "List chat models available per inference profile" },
	jobs: { summary: "Background job control: list, run, requeue, and inspect app jobs and their runs" },
	"jobs agent-tasks": { summary: "Manual agent-task loop runs" },
	"jobs agent-tasks task-presets": { summary: "Manual agent-task loop runs" },
	"jobs blog-post-ingest": { summary: "Manual blog-post-ingest app-job runs" },
	"jobs blog-post-ingest runs": { summary: "Manual blog-post-ingest app-job runs" },
	"jobs blog-post-mention-sweep": { summary: "Manual blog-post-mention-sweep app-job runs" },
	"jobs blog-post-mention-sweep runs": { summary: "Manual blog-post-mention-sweep app-job runs" },
	"jobs crawl-runs": { summary: "Website crawl runs for companies and people, including manual job kicks" },
	"jobs entities": { summary: "Async entity duplicate-check jobs for batch workflows" },
	"jobs entities duplicate-check": { summary: "Async entity duplicate-check jobs for batch workflows" },
	"jobs entities duplicate-check by-job-id": { summary: "Async entity duplicate-check jobs for batch workflows" },
	"jobs entity-stage-reconciliation": { summary: "Funding rounds and their participating investors for an entity" },
	"jobs entity-stage-reconciliation runs": { summary: "Funding rounds and their participating investors for an entity" },
	"jobs entity-text-refresh-sweep": { summary: "Manual entity-text-refresh-sweep app-job runs" },
	"jobs entity-text-refresh-sweep runs": { summary: "Manual entity-text-refresh-sweep app-job runs" },
	"jobs fundraise-reconciliation": { summary: "Admin-authorized durable fundraise duplicate plans and explicit reconciliation runs" },
	"jobs fundraise-reconciliation entities": { summary: "Admin-authorized durable fundraise duplicate plans and explicit reconciliation runs" },
	"jobs fundraise-reconciliation entities runs": { summary: "Admin-authorized durable fundraise duplicate plans and explicit reconciliation runs" },
	"jobs fundraise-reconciliation runs": { summary: "Admin-authorized durable fundraise duplicate plans and explicit reconciliation runs" },
	"jobs fundraise-reconciliation runs status": { summary: "Admin-authorized durable fundraise duplicate plans and explicit reconciliation runs" },
	"jobs instances": { summary: "List live app-job instances" },
	"jobs news": { summary: "Rate-limited news duplicate detection for batch workflows" },
	"jobs news duplicate-check": { summary: "Rate-limited news duplicate detection for batch workflows" },
	"jobs news duplicate-check by-job-id": { summary: "Rate-limited news duplicate detection for batch workflows" },
	"jobs overview": { summary: "Job system overview and processing-state switch" },
	"jobs people": { summary: "Async person duplicate-check jobs for batch workflows" },
	"jobs people duplicate-check": { summary: "Async person duplicate-check jobs for batch workflows" },
	"jobs people duplicate-check by-job-id": { summary: "Async person duplicate-check jobs for batch workflows" },
	"jobs rss-news-ingest": { summary: "Manual RSS news-ingest app-job runs" },
	"jobs rss-news-ingest runs": { summary: "Manual RSS news-ingest app-job runs" },
	"jobs run": { summary: "Run one app job immediately" },
	"jobs runs": { summary: "Run records across background job families" },
	"jobs runs by-job-key": { summary: "App-owned background jobs" },
	"jobs runs requeue": { summary: "Background job system statistics and health" },
	"jobs runs transcript": { summary: "Background job system statistics and health" },
	media: { summary: "Logos, photos, and thumbnails for companies, people, and news" },
	"media entity-logo": { summary: "Import an entity's logo from its website" },
	"media logo-accuracy": { summary: "Audit whether stored logos and photos depict the right brand" },
	"media logo-audit": { summary: "Async logo moderation audit jobs" },
	"media logo-audit jobs": { summary: "Async logo moderation audit jobs" },
	"media news-thumbnail": { summary: "Import a news article's thumbnail image" },
	"media retrofit": { summary: "Async media variant backfill plus entity/person/news reference repair jobs" },
	"media retrofit jobs": { summary: "Async media variant backfill plus entity/person/news reference repair jobs" },
	"media screenshots": { summary: "Crawl screenshot metadata endpoints — S3 key is the binary asset source of truth" },
	news: { summary: "Venture news articles linked to companies and people" },
	"news duplicate-check": { summary: "Canonical v1 endpoints for News domain" },
	"news duplicate-check candidates": { summary: "Canonical v1 endpoints for News domain" },
	"news feedback": { summary: "Submit reader feedback on a news article" },
	"news linker": { summary: "Linker candidate feed for entity/person matching" },
	"news linker candidates": { summary: "Linker candidate feed for entity/person matching" },
	"news recent": { summary: "List the most recent news articles" },
	"news related-companies": { summary: "Related companies, trending news, and batch ingestion" },
	"news similar": { summary: "Find news articles similar to one article" },
	"news slug": { summary: "Per-domain slug changes and redirect rows" },
	"news slug redirects": { summary: "Per-domain slug changes and redirect rows" },
	operations: { summary: "Deploy targets, global metrics, and system health for platform operators" },
	"operations database": { summary: "Postgres diagnostics for platform operators" },
	"operations database diagnostics": { summary: "System health and status endpoints" },
	"operations deploy": { summary: "Internal deploy target and image tag controls" },
	"operations deploy events": { summary: "Internal deploy target and image tag controls" },
	"operations deploy guard": { summary: "Internal deploy target and image tag controls" },
	"operations deploy pairs": { summary: "Internal deploy target and image tag controls" },
	"operations deploy pairs promotions": { summary: "Internal deploy target and image tag controls" },
	"operations deploy pairs promotions exact": { summary: "Internal deploy target and image tag controls" },
	"operations deploy pairs reverts": { summary: "Internal deploy target and image tag controls" },
	"operations deploy targets": { summary: "Internal deploy target and image tag controls" },
	"operations deploy targets deployments": { summary: "Internal deploy target and image tag controls" },
	"operations deploy targets promotions": { summary: "Internal deploy target and image tag controls" },
	"operations deploy targets reverts": { summary: "Internal deploy target and image tag controls" },
	"operations deploy targets tags": { summary: "Internal deploy target and image tag controls" },
	"operations metrics": { summary: "Global metrics (cached, refreshed frequently) for homepage/overview use" },
	"operations sentry": { summary: "Sentry issue lists, counts, and latest events" },
	"operations sentry issues": { summary: "System health and status endpoints" },
	"operations sentry issues counts": { summary: "System health and status endpoints" },
	"operations sentry issues event": { summary: "System health and status endpoints" },
	"operations status": { summary: "System uptime, served under /v1/operations" },
	"operations supabase": { summary: "Supabase database metrics per instance" },
	"operations supabase metrics": { summary: "System health and status endpoints" },
	"operations supabase metrics instances": { summary: "System health and status endpoints" },
	people: { summary: "Founders, executives, and investors in the venture ecosystem" },
	"people addresses": { summary: "Canonical nested physical-address groups for people" },
	"people batch": { summary: "Batch person list and detail endpoints" },
	"people batch detail": { summary: "Batch person list and detail endpoints" },
	"people blog-posts": { summary: "Create, read, update, and delete a person's blog-post links" },
	"people by-slug": { summary: "Person reads addressed by slug instead of id" },
	"people by-slug blog-posts": { summary: "External blog and article links for entities and people" },
	"people content": { summary: "Public content cards: news, blog posts, social posts, repositories, websites, and papers" },
	"people crawl-runs": { summary: "Website crawl runs for companies and people, including manual job kicks" },
	"people duplicate-check": { summary: "Canonical v1 endpoints for People domain" },
	"people duplicate-check candidates": { summary: "Canonical v1 endpoints for People domain" },
	"people entities": { summary: "Person-entity association routes" },
	"people entities corporate-title": { summary: "Person-entity association routes" },
	"people filters": { summary: "Person filter, letter-count, and search metadata endpoints used to drive people-listing UI affordances" },
	"people filters search": { summary: "Person filter, letter-count, and search metadata endpoints used to drive people-listing UI affordances" },
	"people graph": { summary: "Read a person's relationship graph" },
	"people investments": { summary: "List a person's investments" },
	"people investor-activity": { summary: "Read a person's investor-activity rollup" },
	"people news": { summary: "CRUD endpoints for news articles joined to people" },
	"people repositories": { summary: "GitHub repositories synced per entity or person owner" },
	"people similar": { summary: "Similar person discovery" },
	"people slug": { summary: "Per-domain slug changes and redirect rows" },
	"people slug redirects": { summary: "Per-domain slug changes and redirect rows" },
	"people texts": { summary: "Entity and person text endpoints" },
	"people texts types": { summary: "Entity and person text endpoints" },
	"people unique-ids": { summary: "External identifier mappings (EIN, SEC CIK, ticker, LEI, DUNS, ...) for entities and people, plus reverse lookup from an identifier to its owner" },
	"people urls": { summary: "Entity and person URL link endpoints" },
	"people urls all": { summary: "Entity and person URL link endpoints" },
	"people urls types": { summary: "Entity and person URL link endpoints" },
	provenance: { summary: "Where any stored field value came from: its source, method, and time" },
	"provenance history": { summary: "Full provenance history for one stored record" },
	"provenance latest": { summary: "Latest data source recorded for one stored record" },
	"provenance status": { summary: "Update a provenance record's review status" },
	research: { summary: "Internal research sources: blog posts, external social posts, and captured source documents" },
	"research blog-posts": { summary: "External blog and article links for entities and people" },
	"research external-social-posts": { summary: "Incoming posts published by external authors on social platforms" },
	"research external-social-posts scrape": { summary: "Incoming posts published by external authors on social platforms" },
	"research source-documents": { summary: "Versioned source capture and retrieval" },
	"research source-documents client-captured-source": { summary: "Versioned source capture and retrieval" },
	"research source-documents client-captured-source dispatch": { summary: "Versioned source capture and retrieval" },
	"research source-documents latest": { summary: "Versioned source capture and retrieval" },
	resolve: { summary: "Universal identifier resolver: map any handle — stable public id, UUID, external registry id (ticker, LEI, EIN, ...), or slug — to its canonical entity or person" },
	search: { summary: "Search companies, people, and news together, or search the live web" },
	"search link": { summary: "Search a public page URL for related entities, people, and news" },
	"search web": { summary: "Run a live web search, or fetch one stored web-search result" },
	sec: { summary: "SEC EDGAR filings, tickers, and CIKs for public companies" },
	"sec company": { summary: "Preview one public company from SEC EDGAR" },
	"sec entities": { summary: "Attach SEC EDGAR addresses, aliases, identifiers, and listing URLs to an entity" },
	"sec entities address": { summary: "SEC EDGAR filings, tickers, and CIKs for public companies" },
	"sec entities aliases": { summary: "SEC EDGAR filings, tickers, and CIKs for public companies" },
	"sec entities exchange-urls": { summary: "SEC EDGAR filings, tickers, and CIKs for public companies" },
	"sec entities identifiers": { summary: "SEC EDGAR filings, tickers, and CIKs for public companies" },
	sitemap: { summary: "Sitemap boundary metadata for index generation" },
	"sitemap entity-boundaries": { summary: "Entity sitemap page boundaries" },
	"sitemap entity-letter-counts": { summary: "Entity filter discovery: tag counts, type counts, refinement metadata, and option set search used to drive entity-listing UIs" },
	"sitemap entity-routes": { summary: "Paginated sitemap routes for one entity type" },
	"sitemap entity-url-boundaries": { summary: "Entity URL sitemap page boundaries" },
	"sitemap entity-urls": { summary: "Paginated sitemap URL slots for entity types" },
	"sitemap index-manifest": { summary: "Manifest of every sitemap index file" },
	"sitemap news-boundaries": { summary: "News sitemap page boundaries" },
	"sitemap news-letter-counts": { summary: "Venture news articles linked to companies and people" },
	"sitemap person-boundaries": { summary: "Person sitemap page boundaries" },
	"sitemap person-letter-counts": { summary: "Person filter, letter-count, and search metadata endpoints used to drive people-listing UI affordances" },
	"sitemap url-slot-boundaries": { summary: "Sitemap URL-slot page boundaries" },
	"sitemap url-slots": { summary: "Paginated sitemap URL slots across types" },
	slug: { summary: "Per-domain slug changes and redirect rows" },
	"slug redirects": { summary: "Resolve one slug redirect to its current path" },
	"unique-ids": { summary: "External identifier mappings (EIN, SEC CIK, ticker, LEI, DUNS, ...) for entities and people, plus reverse lookup from an identifier to its owner" },
	"unique-ids lookup": { summary: "Resolve one external identifier to its owning entity or person" },
	"unique-ids types": { summary: "List supported external identifier types" },
	web: { summary: "Fetch or crawl public web pages, keeping the raw responses" },
	"web crawl": { summary: "Start, fetch, and track ephemeral crawls of public URLs" },
	"web page": { summary: "Fetch one public web page as markdown" },
	"web pages": { summary: "Fetch several public web pages as markdown in one request" },
	"web profile": { summary: "Fetch structured company or person profiles from LinkedIn URLs" },
	"web profile company": { summary: "Fetch or crawl public web pages, keeping the raw responses" },
	"web profile person": { summary: "Fetch or crawl public web pages, keeping the raw responses" },
	"web profile scrape": { summary: "Fetch or crawl public web pages, keeping the raw responses" }
};
/**
* Application build metadata
*
* @openapiSchema SystemBuildDetail
* @endpoint GET /info
* @usedBySchema SystemBuildSchema
* @contractShape system.system-build-detail
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/metrics/controller/InfoAliasController.kt
*/
var SystemBuildDetailSchema = object({
	/** Artifact identifier */
	artifact: string().nullish(),
	/** Group identifier */
	group: string().nullish(),
	/** Project name */
	name: string().nullish(),
	/** Deployed Git commit revision */
	revision: string().nullish(),
	/** Build timestamp */
	time: datetime({ offset: true }).nullish(),
	/** Project version */
	version: string().nullish()
});
/**
* Build metadata exposed by the public info alias
*
* @openapiSchema SystemBuild
* @endpoint GET /info
* @contractShape system.system-build
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/metrics/controller/InfoAliasController.kt
*/
var SystemBuildSchema = object({ 
/** Application build metadata */
build: SystemBuildDetailSchema });
//#endregion
//#region mcp-server/contract.ts
/** Resolves generated runtime request metadata and rechecks the generator's closed-role invariant. */
function openApiCompositeSpec(composite, role) {
	const [match, duplicate] = composite.filter((entry) => entry.role === role);
	if (match === void 0 || duplicate !== void 0) throw new Error(`Generated composite CLI role '${role}' is incomplete`);
	return match;
}
//#endregion
//#region ../api-schemas/dist/cli/authorization-client-platform.js
/**
* Coarse operating-system family reported by the CLI
*
* @openapiSchema CliAuthorizationClientPlatform
* @endpoint GET /v1/app/cli-authorizations
* @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
* @endpoint POST /v1/auth/cli-authorizations
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
* @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
* @usedBySchema CliAuthorizationMutationSchema
* @usedBySchema CliAuthorizationSchema
* @contractShape cli.authorization-client-platform
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationClientPlatformSchema = _enum([
	"MACOS",
	"LINUX",
	"WINDOWS",
	"OTHER"
]);
//#endregion
//#region ../api-schemas/dist/cli/authorization-encryption-algorithm.js
/**
* Versioned hybrid encryption suite for one-time CLI credential delivery
*
* @openapiSchema CliAuthorizationEncryptionAlgorithm
* @endpoint POST /v1/auth/cli-authorizations
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
* @usedBySchema CliAuthorizationDeliverySchema
* @usedBySchema CliAuthorizationMutationSchema
* @contractShape cli.authorization-encryption-algorithm
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationEncryptionAlgorithmSchema = _enum(["RSA_OAEP_256_A256_GCM_V1"]);
/**
* Creates a short-lived CLI authorization request bound to an ephemeral key
*
* @openapiSchema CliAuthorizationMutation
* @endpoint POST /v1/auth/cli-authorizations
* @contractShape cli.authorization-mutation
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationMutationSchema = object({
	/** Label for this CLI installation */
	clientLabel: string().regex(/.*\S.*/).min(1).max(120).nullish(),
	/** Coarse operating-system family */
	clientPlatform: CliAuthorizationClientPlatformSchema.nullish(),
	/** Requested hybrid encryption suite */
	encryptionAlgorithm: CliAuthorizationEncryptionAlgorithmSchema.nullish(),
	/** Base64-encoded DER SubjectPublicKeyInfo for an ephemeral RSA public key */
	encryptionPublicKey: string().min(344).max(12e3).nullish()
});
//#endregion
//#region aventure-cli/auth/authorization-crypto.ts
var AES_256_KEY_BYTE_LENGTH = 32;
/** Create the ephemeral keypair that binds one browser-authorization request to this process. */
async function createCliAuthorizationKeyPair() {
	const keyPair = await webcrypto.subtle.generateKey({
		name: "RSA-OAEP",
		modulusLength: 2048,
		publicExponent: new Uint8Array([
			1,
			0,
			1
		]),
		hash: "SHA-256"
	}, true, ["encrypt", "decrypt"]);
	const publicKey = await webcrypto.subtle.exportKey("spki", keyPair.publicKey);
	return {
		publicKey: Buffer.from(publicKey).toString("base64"),
		privateKey: keyPair.privateKey
	};
}
/** Open the broker's RSA-OAEP-256 wrapped AES-256-GCM one-time credential. */
async function decryptCliAuthorizationCredential(privateKey, delivery) {
	const { wrappedKey, nonce, ciphertext, authenticationTag } = delivery;
	const wrappedKeyBytes = decodeBase64(wrappedKey, "wrapped key", 128, 1024);
	const nonceBytes = decodeBase64(nonce, "nonce", 12, 12);
	const ciphertextBytes = decodeBase64(ciphertext, "ciphertext", 1, 65536);
	const authenticationTagBytes = decodeBase64(authenticationTag, "authentication tag", 16, 16);
	let unwrappedKey;
	try {
		unwrappedKey = await webcrypto.subtle.decrypt({ name: "RSA-OAEP" }, privateKey, wrappedKeyBytes);
	} catch {
		throw new Error("broker credential key could not be decrypted");
	}
	const unwrappedKeyBytes = new Uint8Array(unwrappedKey);
	try {
		if (unwrappedKeyBytes.byteLength !== AES_256_KEY_BYTE_LENGTH) throw new Error("broker credential used an invalid AES-256 key");
		const aesKey = await webcrypto.subtle.importKey("raw", unwrappedKeyBytes, { name: "AES-GCM" }, false, ["decrypt"]);
		const encryptedPayload = new Uint8Array(ciphertextBytes.byteLength + authenticationTagBytes.byteLength);
		encryptedPayload.set(ciphertextBytes);
		encryptedPayload.set(authenticationTagBytes, ciphertextBytes.byteLength);
		let plaintext;
		try {
			plaintext = await webcrypto.subtle.decrypt({
				name: "AES-GCM",
				iv: nonceBytes,
				tagLength: 128
			}, aesKey, encryptedPayload);
		} catch {
			throw new Error("broker credential payload failed authentication");
		}
		const secret = new TextDecoder("utf-8", { fatal: true }).decode(plaintext);
		if (secret.trim().length === 0) throw new Error("broker returned a blank credential");
		return secret;
	} finally {
		unwrappedKeyBytes.fill(0);
	}
}
function decodeBase64(encoded, field, minimumBytes, maximumBytes) {
	const normalized = encoded.replace(/=+$/u, "");
	const decoded = Uint8Array.from(Buffer.from(encoded, "base64"));
	const canonical = Buffer.from(decoded).toString("base64").replace(/=+$/u, "");
	if (normalized.length === 0 || canonical !== normalized || decoded.byteLength < minimumBytes || decoded.byteLength > maximumBytes) throw new Error(`broker returned an invalid ${field}`);
	return decoded;
}
//#endregion
//#region aventure-cli/auth/browser-opening.ts
var CLI_AUTHORIZATION_FRAGMENT_FIELD_COUNT = 2;
/** Return a display-safe reference after validating the possession-bound browser fragment. */
function redactedVerificationUrl(started, expectedOrigin) {
	return validatedBrowserAuthorization(started, expectedOrigin).redactedUrl;
}
/**
* Open the exact secret-bearing URL without reflecting it through diagnostics or result values.
* The fragment keeps browser possession material out of HTTP requests and server access logs.
*/
async function openVerificationUrl(started, expectedOrigin, options) {
	const authorization = validatedBrowserAuthorization(started, expectedOrigin);
	const environment = options.environment ?? process.env;
	const operatingSystem = options.operatingSystem ?? platform();
	const skipReason = browserSkipReason(options.noBrowser, environment, operatingSystem);
	if (skipReason !== null) return {
		state: "skipped",
		reason: skipReason
	};
	const invocation = openerInvocation(operatingSystem, authorization.openerUrl);
	if (invocation === null) return {
		state: "failed",
		reason: `unsupported browser-opening platform: ${operatingSystem}`
	};
	try {
		await runOpener(invocation.command, invocation.arguments);
		return {
			state: "opened",
			reason: null
		};
	} catch {
		return {
			state: "failed",
			reason: "browser opener failed"
		};
	}
}
/** Bind the broker URL to the expected origin, request, and independent browser possession secret. */
function validatedBrowserAuthorization(started, expectedOrigin) {
	const { id: authorizationId, verificationUrl, pollSecret } = started;
	let candidate;
	let expected;
	try {
		candidate = new URL(verificationUrl);
		expected = new URL(expectedOrigin);
	} catch {
		throw new Error("broker returned an invalid browser verification URL");
	}
	if (expected.username.length > 0 || expected.password.length > 0 || expected.pathname !== "/" || expected.search.length > 0 || expected.hash.length > 0) throw new Error("configured browser origin must contain only an origin");
	const loopback = isLoopbackHostname(expected.hostname);
	if (expected.protocol !== "https:" && !(expected.protocol === "http:" && loopback)) throw new Error("configured browser origin must use HTTPS except for loopback development");
	const fragment = new URLSearchParams(candidate.hash.slice(1));
	const fragmentName = [...fragment.keys()];
	const authorizationIdValue = fragment.getAll("cliAuthorizationId");
	const browserSecretValue = fragment.getAll("browserSecret");
	const browserSecret = browserSecretValue[0] ?? "";
	if (candidate.origin !== expected.origin || candidate.protocol !== expected.protocol || candidate.username.length > 0 || candidate.password.length > 0 || candidate.pathname !== "/settings/developer" || candidate.search.length > 0 || fragmentName.length !== CLI_AUTHORIZATION_FRAGMENT_FIELD_COUNT || authorizationIdValue.length !== 1 || authorizationIdValue[0] !== authorizationId || browserSecretValue.length !== 1 || browserSecret.length === 0 || pollSecret.length === 0 || browserSecret === pollSecret) throw new Error("broker returned a browser verification URL outside the configured first-party approval flow");
	let decodedUrl;
	try {
		decodedUrl = decodeURIComponent(verificationUrl);
	} catch {
		throw new Error("broker returned a browser verification URL outside the configured first-party approval flow");
	}
	if (verificationUrl.includes(pollSecret) || decodedUrl.includes(pollSecret)) throw new Error("broker returned a browser verification URL outside the configured first-party approval flow");
	const redacted = new URL(candidate);
	redacted.hash = new URLSearchParams({
		cliAuthorizationId: authorizationId,
		browserSecret: "<redacted>"
	}).toString();
	return {
		openerUrl: verificationUrl,
		redactedUrl: redacted.toString()
	};
}
function browserSkipReason(noBrowser, environment, operatingSystem) {
	if (noBrowser) return "--no-browser was set";
	if (operatingSystem === "darwin" && environment.CODEX_SESSION_ID) return "macOS Codex browser process boundary";
	if (environment.SSH_CONNECTION || environment.SSH_CLIENT || environment.SSH_TTY) return "SSH/headless session detected";
	if ((operatingSystem === "linux" || operatingSystem === "freebsd") && !environment.DISPLAY && !environment.WAYLAND_DISPLAY) return "no graphical display detected";
	return null;
}
function openerInvocation(operatingSystem, verificationUrl) {
	if (operatingSystem === "darwin") return {
		command: "open",
		arguments: [verificationUrl]
	};
	if (operatingSystem === "win32") return {
		command: "rundll32.exe",
		arguments: ["url.dll,FileProtocolHandler", verificationUrl]
	};
	if (operatingSystem === "linux" || operatingSystem === "freebsd") return {
		command: "xdg-open",
		arguments: [verificationUrl]
	};
	return null;
}
function runOpener(command, openerArguments) {
	return new Promise((resolve, reject) => {
		execFile(command, [...openerArguments], {
			timeout: 5e3,
			windowsHide: true
		}, (error) => error ? reject(error) : resolve());
	});
}
//#endregion
//#region ../api-schemas/dist/cli/authorization-status.js
/**
* CLI authorization broker lifecycle state
*
* @openapiSchema CliAuthorizationStatus
* @endpoint GET /v1/app/cli-authorizations
* @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
* @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
* @usedBySchema CliAuthorizationPollSchema
* @usedBySchema CliAuthorizationSchema
* @contractShape cli.authorization-status
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationStatusSchema = _enum([
	"PENDING",
	"ISSUING",
	"KEY_READY",
	"REVOKING",
	"CONSUMED",
	"REVOKED",
	"DENIED",
	"EXPIRED",
	"FAILED"
]);
//#endregion
//#region ../api-schemas/dist/cli/authorization-terminal-reason.js
/**
* CLI authorization terminal explanation
*
* @openapiSchema CliAuthorizationTerminalReason
* @endpoint GET /v1/app/cli-authorizations
* @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
* @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
* @usedBySchema CliAuthorizationPollSchema
* @usedBySchema CliAuthorizationSchema
* @contractShape cli.authorization-terminal-reason
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationTerminalReasonSchema = _enum([
	"Denied by user",
	"Authorization request expired",
	"CLI authorization expired before acknowledgement",
	"Credential issuance recovery revoked an unrecoverable key",
	"Revoked by user",
	"Clerk create response validation failed",
	"Credential issuance failed",
	"Credential issuance could not be recovered",
	"Personal API-key quota reached",
	"Credential issuance lost its database claim",
	"Credential delivery encryption failed",
	"Credential issuance finalization was lost"
]);
/**
* Browser-approved CLI authorization metadata. Secret poll and encrypted-delivery material are exposed only by their dedicated one-time response contracts.
*
* @openapiSchema CliAuthorization
* @endpoint GET /v1/app/cli-authorizations
* @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
* @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
* @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
* @usedBySchema PageCliAuthorizationSchema
* @contractShape cli.authorization
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationSchema = object({
	/** Time the authenticated user approved this request */
	approvedAt: datetime({ offset: true }).nullish(),
	/** User-supplied label for the requesting CLI installation */
	clientLabel: string(),
	/** Coarse client operating-system family */
	clientPlatform: CliAuthorizationClientPlatformSchema,
	/** Human comparison code shown by both the CLI and browser */
	comparisonCode: string(),
	/** Time the CLI acknowledged durable local storage */
	consumedAt: datetime({ offset: true }).nullish(),
	/** Authorization request creation timestamp */
	createdAt: datetime({ offset: true }),
	/** Time after which an unfinished request cannot be approved */
	expiresAt: datetime({ offset: true }),
	/** Public authorization request identifier */
	id: uuid(),
	/** Minimum server-directed poll interval in seconds */
	intervalSeconds: number().int().min(1),
	/** Time encrypted key delivery became available */
	keyReadyAt: datetime({ offset: true }).nullish(),
	/** Current broker lifecycle state */
	status: CliAuthorizationStatusSchema,
	/** Time this request entered its terminal state */
	terminalAt: datetime({ offset: true }).nullish(),
	/** Non-secret terminal-state explanation */
	terminalReason: CliAuthorizationTerminalReasonSchema.nullish(),
	/** Most recent lifecycle update timestamp */
	updatedAt: datetime({ offset: true })
});
//#endregion
//#region ../api-schemas/dist/cli/authorization-delivery.js
/**
* RSA-wrapped AES-256-GCM delivery of one personal API-key secret
*
* @openapiSchema CliAuthorizationDelivery
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
* @usedBySchema CliAuthorizationPollSchema
* @contractShape cli.authorization-delivery
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationDeliverySchema = object({
	/** Hybrid encryption suite used for this delivery */
	algorithm: CliAuthorizationEncryptionAlgorithmSchema,
	/** Base64-encoded 16-byte AES-GCM authentication tag */
	authenticationTag: string(),
	/** Base64-encoded encrypted UTF-8 personal API-key secret bytes */
	ciphertext: string(),
	/** Base64-encoded 12-byte AES-GCM nonce */
	nonce: string(),
	/** Base64-encoded RSA-OAEP-wrapped AES key */
	wrappedKey: string()
});
/**
* Current broker state and encrypted delivery when the key is ready
*
* @openapiSchema CliAuthorizationPoll
* @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
* @contractShape cli.authorization-poll
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationPollSchema = object({
	/** Encrypted one-time delivery, present only for KEY_READY */
	delivery: CliAuthorizationDeliverySchema.nullish(),
	/** Authorization request expiry timestamp */
	expiresAt: datetime({ offset: true }),
	/** Current broker lifecycle state */
	status: CliAuthorizationStatusSchema,
	/** Non-secret terminal-state explanation */
	terminalReason: CliAuthorizationTerminalReasonSchema.nullish()
});
/**
* New CLI authorization handle and one-time poll credential
*
* @openapiSchema CliAuthorizationStart
* @endpoint POST /v1/auth/cli-authorizations
* @contractShape cli.authorization-start
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
*/
var CliAuthorizationStartSchema = object({
	/** Human comparison code shown by both the CLI and browser */
	comparisonCode: string(),
	/** Authorization request expiry timestamp */
	expiresAt: datetime({ offset: true }),
	/** Public authorization request identifier */
	id: uuid(),
	/** Minimum poll interval in seconds */
	intervalSeconds: number().int().min(1),
	/** One-time high-entropy credential required to poll and acknowledge delivery */
	pollSecret: string(),
	/** Browser verification URL */
	verificationUrl: string()
});
//#endregion
//#region aventure-cli/generated/openapi-composites.ts
var GENERATED_OPENAPI_COMPOSITE_SPECS = [
	{
		command: "auth login",
		role: "start",
		summary: "Start CLI authorization",
		description: "Creates a short-lived browser approval request and returns its poll credential once.",
		operationId: "createCliAuthorization",
		method: "POST",
		path: "/v1/auth/cli-authorizations",
		bodyOption: [{
			name: "clientLabel",
			optionKey: "clientLabel",
			flag: "--client-label <client-label>",
			required: false,
			description: "Label for this CLI installation."
		}],
		localOption: [{
			optionKey: "browser",
			flag: "--no-browser",
			description: "Print the approval URL without launching a browser."
		}]
	},
	{
		command: "auth login",
		role: "poll",
		summary: "Poll CLI authorization",
		description: "Returns pending state, a terminal state, or an encrypted one-time credential delivery.",
		operationId: "pollCliAuthorization",
		method: "POST",
		path: "/v1/auth/cli-authorizations/{cliAuthorizationId}/poll",
		bodyOption: [],
		localOption: []
	},
	{
		command: "auth login",
		role: "acknowledge",
		summary: "Acknowledge CLI credential delivery",
		description: "Confirms the CLI stored the delivered personal key in its OS credential store and clears transient delivery material.",
		operationId: "acknowledgeCliAuthorization",
		method: "POST",
		path: "/v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge",
		bodyOption: [],
		localOption: []
	},
	{
		command: "auth logout",
		role: "revoke",
		summary: "Revoke current personal API key",
		description: "Revokes the stored personal key and returns provider metadata so the CLI can confirm remote revocation before removing local bytes.",
		operationId: "revokeCurrentPersonalApiKey",
		method: "DELETE",
		path: "/v1/auth/personal-api-key",
		bodyOption: [],
		localOption: [{
			optionKey: "forgetLocal",
			flag: "--forget-local",
			description: "Remove local bytes even when remote revocation cannot be confirmed."
		}]
	}
];
//#endregion
//#region aventure-cli/auth/cli-authorization-client.ts
var START_AUTHORIZATION = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "start");
var POLL_AUTHORIZATION = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "poll");
var ACKNOWLEDGE_AUTHORIZATION = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "acknowledge");
var CliAuthorizationRequestError = class extends Error {
	httpStatus;
	retryAfterSeconds;
	/** Whether the failure is a transient broker condition (5xx or 429) worth retrying. */
	retryable;
	constructor(operation, problem, credentialValue = []) {
		super(`CLI authorization ${operation} failed: ${credentialSafeProblemSummary(problem, credentialValue)}`);
		this.name = "CliAuthorizationRequestError";
		this.httpStatus = problem.status;
		this.retryAfterSeconds = validatedRetryAfterSeconds(problem.retryAfterSeconds);
		this.retryable = problem.status >= 500 || problem.status === 429;
	}
};
/** Marks an acknowledgment whose server-side result is unknown because transport never returned. */
var CliAuthorizationTransportError = class extends Error {
	constructor(operation, error, credentialValue = []) {
		super(`CLI authorization ${operation} transport failed: ${credentialSafeMessage(error, credentialValue)}`, { cause: error });
		this.name = "CliAuthorizationTransportError";
	}
};
/** Keep one-time start credentials usable while making ordinary object stringification safe. */
async function startCliAuthorization(mutation) {
	const response = await aventureRequest(normalizeCliApiEnvironment(readEnv()), {
		method: START_AUTHORIZATION.method,
		path: buildOpenApiTemplatePath(START_AUTHORIZATION.path, {}, START_AUTHORIZATION.operationId),
		headers: {},
		contentType: "application/json",
		body: mutation
	}, CliAuthorizationStartSchema);
	if (!response.ok) throw new CliAuthorizationRequestError("start", response.problem);
	return protectedCliAuthorizationStart(response.data);
}
async function pollCliAuthorization(authorizationId, pollSecret) {
	const pollSecretHeader = buildRequiredOpenApiHeader(POLL_AUTHORIZATION.operationId);
	const response = await aventureRequest(normalizeCliApiEnvironment(readEnv()), {
		method: POLL_AUTHORIZATION.method,
		path: buildOpenApiTemplatePath(POLL_AUTHORIZATION.path, { cliAuthorizationId: authorizationId }, POLL_AUTHORIZATION.operationId),
		headers: { [pollSecretHeader]: pollSecret }
	}, CliAuthorizationPollSchema);
	if (!response.ok) throw new CliAuthorizationRequestError("poll", response.problem, [pollSecret]);
	return {
		authorization: response.data,
		retryAfterSeconds: headerRetryAfterSeconds(response.headers["retry-after"])
	};
}
async function acknowledgeCliAuthorization(authorizationId, pollSecret) {
	const pollSecretHeader = buildRequiredOpenApiHeader(ACKNOWLEDGE_AUTHORIZATION.operationId);
	let response;
	try {
		response = await aventureRequest(normalizeCliApiEnvironment(readEnv()), {
			method: ACKNOWLEDGE_AUTHORIZATION.method,
			path: buildOpenApiTemplatePath(ACKNOWLEDGE_AUTHORIZATION.path, { cliAuthorizationId: authorizationId }, ACKNOWLEDGE_AUTHORIZATION.operationId),
			headers: { [pollSecretHeader]: pollSecret }
		}, CliAuthorizationSchema);
	} catch (error) {
		throw new CliAuthorizationTransportError("acknowledge", error, [pollSecret]);
	}
	if (!response.ok) throw new CliAuthorizationRequestError("acknowledge", response.problem, [pollSecret]);
	return response.data;
}
function headerRetryAfterSeconds(value) {
	if (value === void 0) return null;
	const parsed = Number(value);
	return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}
function validatedRetryAfterSeconds(value) {
	return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : null;
}
/** Hide both the browser URL and poll credential from JSON, inspection, snapshots, and spreads. */
function protectedCliAuthorizationStart(started) {
	const { verificationUrl, pollSecret, ...nonSecretField } = started;
	const protectedStart = { ...started };
	const redacted = () => ({
		...nonSecretField,
		verificationUrl: "<redacted>",
		pollSecret: "<redacted>"
	});
	return Object.defineProperties(protectedStart, {
		verificationUrl: {
			enumerable: false,
			get: () => verificationUrl
		},
		pollSecret: {
			enumerable: false,
			get: () => pollSecret
		},
		toJSON: {
			enumerable: false,
			value: redacted
		},
		toString: {
			enumerable: false,
			value: () => `CliAuthorizationStart(${JSON.stringify(redacted())})`
		},
		[inspect.custom]: {
			enumerable: false,
			value: redacted
		}
	});
}
//#endregion
//#region aventure-cli/auth/personal-credential-verification.ts
/** Verify the broker-delivered key before it is persisted or acknowledged. */
async function verifyPersonalCredentialAccess(secret) {
	const environment = normalizeCliApiEnvironment(readEnv());
	let response;
	try {
		response = await aventureRequest(environment, {
			method: "GET",
			path: buildOpenApiPath("getCurrentPersonalApiKey", {}),
			headers: { Authorization: `Bearer ${secret}` }
		}, PersonalApiKeySchema);
	} catch (error) {
		return {
			state: "unavailable",
			summary: `identity verification failed before an HTTP response — ${credentialSafeMessage(error, [secret])}`
		};
	}
	if (!response.ok) return {
		state: response.problem.status === 401 || response.problem.status === 403 ? "invalid" : "unavailable",
		summary: `identity verification: ${credentialSafeProblemSummary(response.problem, [secret])}`
	};
	if (response.data.status !== "ACTIVE") return {
		state: "invalid",
		summary: "personal API-key self metadata is not active"
	};
	return {
		state: "verified",
		summary: "personal API-key metadata verified",
		apiKey: response.data
	};
}
//#endregion
//#region aventure-cli/auth/personal-logout.ts
var REVOKE_PERSONAL_CREDENTIAL = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "revoke");
/** Revoke the exact stored key remotely before removing its local keyring entry. */
async function logoutPersonalCredential(options) {
	let host;
	try {
		host = canonicalPersonalCredentialHost(readEnv().host);
	} catch (error) {
		return failure(`auth logout: invalid API host — ${credentialSafeMessage(error)}`);
	}
	let lookup;
	try {
		lookup = await loadPersonalCredential(host);
	} catch (error) {
		return failure(`auth logout: stored credential could not be read — ${credentialSafeMessage(error)}`);
	}
	if (lookup.state === "unavailable") return failure(`auth logout: ${lookup.summary}`);
	if (lookup.state === "missing") return success("No personal CLI credential is stored for this API host.", {
		host,
		revoked: false,
		forgotten: false
	});
	const stored = lookup.stored;
	const revocation = await revokeStoredCredential(stored);
	const revoked = revocation.outcome === "revoked";
	const pendingKeyInert = stored.activation === "pending" && revocation.outcome === "rejected";
	if (!revoked && !pendingKeyInert && !options.forgetLocal) return {
		...failure(`auth logout: remote revocation was not confirmed; local credential preserved — ${revocation.summary}`, ["Retry when the API is available. If an earlier response was lost after revocation, the retry can be unauthorized because revoked keys cannot authenticate.", "Use `--forget-local` only to remove local bytes while accepting that the remote key may remain active."]),
		data: logoutDiagnostics(stored, false, false)
	};
	try {
		await forgetPersonalCredential(stored.host);
	} catch (error) {
		return {
			...failure(`auth logout: local credential removal failed — ${credentialSafeMessage(error, [stored.credential.secret])}`, [revoked ? "The remote key is revoked. Re-run with `--forget-local` to retry local cleanup." : "Remote revocation was not confirmed; inspect auth status before retrying."]),
			data: logoutDiagnostics(stored, revoked, false)
		};
	}
	return success(revoked ? "Personal CLI credential revoked remotely and removed locally." : pendingKeyInert ? "Stale pending CLI credential removed; its remote key can no longer authenticate and unacknowledged keys expire at the authorization deadline." : "Personal CLI credential removed locally without confirmed remote revocation.", logoutDiagnostics(stored, revoked, true), {
		ids: [stored.credential.apiKey.id],
		warnings: revoked || pendingKeyInert ? [] : ["Remote revocation was not confirmed; the personal key may remain active."]
	});
}
async function revokeStoredCredential(stored) {
	const environment = normalizeCliApiEnvironment(readEnv());
	try {
		const response = await aventureRequest(environment, {
			method: REVOKE_PERSONAL_CREDENTIAL.method,
			path: buildOpenApiTemplatePath(REVOKE_PERSONAL_CREDENTIAL.path, {}, REVOKE_PERSONAL_CREDENTIAL.operationId),
			headers: { Authorization: `Bearer ${stored.credential.secret}` }
		}, PersonalApiKeySchema);
		if (!response.ok) return {
			outcome: response.problem.status === 401 && response.problem.type !== "about:blank" ? "rejected" : "unconfirmed",
			summary: credentialSafeProblemSummary(response.problem, [stored.credential.secret])
		};
		if (response.data.id !== stored.credential.apiKey.id || response.data.subject !== stored.credential.apiKey.subject) return {
			outcome: "unconfirmed",
			summary: "remote response did not match the stored personal key identity"
		};
		return response.data.status === "REVOKED" ? {
			outcome: "revoked",
			summary: "remote key revocation confirmed"
		} : {
			outcome: "unconfirmed",
			summary: "remote response did not confirm REVOKED status"
		};
	} catch (error) {
		return {
			outcome: "unconfirmed",
			summary: credentialSafeMessage(error, [stored.credential.secret])
		};
	}
}
function logoutDiagnostics(stored, revoked, forgotten) {
	return {
		host: stored.host,
		personalApiKeyId: stored.credential.apiKey.id,
		activation: stored.activation,
		revoked,
		forgotten
	};
}
//#endregion
//#region aventure-cli/auth/personal-login.ts
var ENCRYPTION_ALGORITHM = "RSA_OAEP_256_A256_GCM_V1";
var MINIMUM_POLL_INTERVAL_SECONDS = 1;
var MAXIMUM_POLL_INTERVAL_SECONDS = 30;
/**
* Acknowledgment is the only thing that lifts a delivered key from the authorization deadline
* (`app.clerk-auth.cli-authorization.request-ttl`, 10m) to the granted lifetime
* (`app.clerk-auth.personal-api-key.acknowledged-key-lifetime`, 365d), and
* `AppClerkAuthProperties.kt:57` requires the latter to exceed the former. One day sits inside
* that gap, so the server-issued `expiresAt - createdAt` span separates the two lifetimes without
* consulting the client clock.
*/
var ACKNOWLEDGED_KEY_MINIMUM_LIFETIME_MILLISECONDS = 864e5;
/** Run one browser-approved login without persisting the poll secret or private key. */
async function loginPersonalCredential(options) {
	if (!stdin.isTTY) return failure("aventure-cli auth login requires an interactive TTY on stdin", ["For non-interactive automation, inject CLIENT_SECRET, ADMIN_API_KEY, or AUTH_TOKEN through the environment or configured Doppler source."]);
	let host;
	let browserOrigin;
	try {
		const apiHost = readEnv().host;
		host = canonicalPersonalCredentialHost(apiHost);
		browserOrigin = browserOriginForApiHost(apiHost);
	} catch (error) {
		return failure(`auth login: invalid environment configuration — ${credentialSafeMessage(error)}`);
	}
	let existing;
	try {
		existing = await loadPersonalCredential(host);
	} catch (error) {
		return failure(`auth login: stored credential could not be read — ${credentialSafeMessage(error)}`);
	}
	if (existing.state === "unavailable") return failure(`auth login: ${existing.summary}`);
	if (existing.state === "found") {
		const resolved = await existingCredential(existing.stored);
		if (resolved !== null) return resolved;
	}
	let keyPair;
	try {
		keyPair = await createCliAuthorizationKeyPair();
	} catch (error) {
		return failure(`auth login: ephemeral encryption key could not be created — ${credentialSafeMessage(error)}`);
	}
	const mutation = CliAuthorizationMutationSchema.safeParse({
		clientLabel: options.clientLabel?.trim() || (hostname().trim() || "aventure-cli").slice(0, 120),
		clientPlatform: clientPlatform(),
		encryptionAlgorithm: ENCRYPTION_ALGORITHM,
		encryptionPublicKey: keyPair.publicKey
	});
	if (!mutation.success) return failure("auth login: local authorization input is invalid");
	let started;
	try {
		started = await startCliAuthorization(mutation.data);
	} catch (error) {
		return failure(`auth login: could not start browser authorization — ${credentialSafeMessage(error)}`);
	}
	let verificationReference;
	try {
		verificationReference = redactedVerificationUrl(started, browserOrigin);
	} catch (error) {
		return failure(`auth login: unsafe browser authorization URL rejected — ${credentialSafeMessage(error)}`);
	}
	if (!printVerificationInstructions(await openVerificationUrl(started, browserOrigin, { noBrowser: options.noBrowser }), started, verificationReference)) return failure("auth login: browser authorization requires an interactive terminal for manual handoff", ["Automatic browser opening did not complete, and the approval URL was withheld because stderr is not an interactive terminal. Retry from an interactive terminal."], { references: [verificationReference] });
	let delivery;
	try {
		delivery = await waitForCredential(started);
	} catch (error) {
		return failure(`auth login: authorization did not complete — ${credentialSafeMessage(error)}`, [], { references: [verificationReference] });
	}
	if (delivery.algorithm !== ENCRYPTION_ALGORITHM) return failure("auth login: broker selected an unsupported encryption algorithm");
	let oneTimeSecret;
	try {
		oneTimeSecret = await decryptCliAuthorizationCredential(keyPair.privateKey, delivery);
	} catch (error) {
		return failure(`auth login: encrypted credential could not be opened — ${credentialSafeMessage(error)}`);
	}
	const verification = await verifyPersonalCredentialAccess(oneTimeSecret);
	if (verification.state !== "verified") return failure(`auth login: decrypted credential was neither stored nor acknowledged — ${verification.summary}`);
	let stored;
	try {
		stored = await savePersonalCredential(host, {
			apiKey: verification.apiKey,
			secret: oneTimeSecret
		}, "pending");
	} catch (error) {
		return failure(`auth login: credential could not be durably stored — ${credentialSafeMessage(error)}`);
	}
	let acknowledged;
	try {
		acknowledged = await acknowledgeUntilAuthorizationDeadline(started);
	} catch (error) {
		return pendingAcknowledgementFailure(stored, `auth login: credential was stored and verified, but broker acknowledgment was not confirmed — ${credentialSafeMessage(error, [started.pollSecret])}`);
	}
	if (acknowledged.status !== "CONSUMED") return pendingAcknowledgementFailure(stored, `auth login: broker returned ${acknowledged.status} after acknowledgment`);
	let active;
	try {
		active = await savePersonalCredential(host, stored.credential, "active");
	} catch (error) {
		return pendingAcknowledgementFailure(stored, `auth login: remote acknowledgment succeeded, but local activation could not be confirmed — ${credentialSafeMessage(error)}`);
	}
	return success("Personal CLI credential stored; authenticated identity and broker acknowledgment verified.", diagnostics(active, true), { ids: [active.credential.apiKey.id] });
}
function pendingAcknowledgementFailure(stored, summary) {
	return {
		...failure(summary, ["The local record remains pending and unavailable to ordinary commands. Re-run `aventure-cli auth login`; it recovers the credential when the broker acknowledged it, and otherwise clears the stale record."]),
		data: diagnostics(stored, true)
	};
}
/** Resolves a stored credential to a terminal envelope, or null once a stale pending record is cleared. */
async function existingCredential(stored) {
	const verification = await verifyPersonalCredentialAccess(stored.credential.secret);
	if (stored.activation !== "pending") {
		if (verification.state !== "verified") return {
			...failure(`auth login: stored credential ${verification.state} — ${verification.summary}`, ["Run `aventure-cli auth logout` to revoke/remove it before authorizing a replacement."]),
			data: diagnostics(stored, false)
		};
		return success("Personal CLI credential is already stored and its authenticated identity was verified.", diagnostics(stored, true), { ids: [stored.credential.apiKey.id] });
	}
	if (verification.state === "verified" && isAcknowledgedLifetime(verification.apiKey)) try {
		const active = await savePersonalCredential(stored.host, {
			apiKey: verification.apiKey,
			secret: stored.credential.secret
		}, "active");
		return success("Recovered pending CLI credential: broker acknowledgment had succeeded.", diagnostics(active, true), { ids: [active.credential.apiKey.id] });
	} catch (error) {
		return {
			...failure(`auth login: credential is valid but could not be promoted locally — ${credentialSafeMessage(error, [stored.credential.secret])}`, ["The remote key remains valid. Re-run `aventure-cli auth login` to retry local activation; it will recover the pending credential automatically."]),
			data: diagnostics(stored, true)
		};
	}
	if (verification.state === "unavailable") return {
		...failure(`auth login: the stored pending credential could not be verified — ${verification.summary}`, ["The stored record and the remote key were both preserved. Re-run `aventure-cli auth login` when the API is reachable; it recovers an acknowledged credential and clears an unacknowledged one."]),
		data: diagnostics(stored, false)
	};
	const revocation = await revokeStoredCredential(stored);
	if (revocation.outcome === "unconfirmed") return {
		...failure("auth login: a prior credential is durably stored but broker acknowledgment was not confirmed", [`Remote revocation of the stale pending key was not confirmed — ${revocation.summary}. Retry when the API is reachable.`]),
		data: diagnostics(stored, false)
	};
	try {
		await forgetPersonalCredential(stored.host);
	} catch (error) {
		return {
			...failure(`auth login: stale pending credential could not be removed — ${credentialSafeMessage(error, [stored.credential.secret])}`),
			data: diagnostics(stored, false)
		};
	}
	stderr.write(revocation.outcome === "revoked" ? "Revoked and cleared a stale pending CLI credential; starting a fresh browser authorization.\n" : "Cleared a stale pending CLI credential whose remote key can no longer authenticate; starting a fresh browser authorization.\n");
	return null;
}
/**
* Retry retryable acknowledgment failures (transport-unknown outcomes, 5xx, 429) at the poll
* cadence until the authorization deadline; the broker's replay proof keeps replays idempotent.
*/
async function acknowledgeUntilAuthorizationDeadline(started) {
	const expiresAt = new Date(started.expiresAt).getTime();
	let intervalSeconds = boundedPollInterval(started.intervalSeconds);
	for (;;) try {
		return await acknowledgeCliAuthorization(started.id, started.pollSecret);
	} catch (error) {
		if (error instanceof CliAuthorizationRequestError) {
			if (!error.retryable) throw error;
			intervalSeconds = boundedPollInterval(error.retryAfterSeconds ?? intervalSeconds);
		} else if (!(error instanceof CliAuthorizationTransportError)) throw error;
		if (Date.now() >= expiresAt) throw error;
		stderr.write("Broker acknowledgment was interrupted; retrying.\n");
		await waitForNextPoll(intervalSeconds, expiresAt);
	}
}
async function waitForCredential(started) {
	const expiresAt = new Date(started.expiresAt).getTime();
	let intervalSeconds = boundedPollInterval(started.intervalSeconds);
	let lastRetryableFailure;
	stderr.write("Waiting for browser approval...\n");
	while (Date.now() < expiresAt) {
		let result;
		try {
			result = await pollCliAuthorization(started.id, started.pollSecret);
		} catch (error) {
			if (error instanceof CliAuthorizationRequestError) {
				if (!error.retryable) throw error;
				intervalSeconds = boundedPollInterval(error.retryAfterSeconds ?? intervalSeconds);
			}
			lastRetryableFailure = error;
			stderr.write("Authorization poll was interrupted; retrying.\n");
			await waitForNextPoll(intervalSeconds, expiresAt);
			continue;
		}
		lastRetryableFailure = void 0;
		const authorization = result.authorization;
		switch (authorization.status) {
			case "PENDING":
			case "ISSUING":
			case "REVOKING":
				intervalSeconds = boundedPollInterval(result.retryAfterSeconds ?? intervalSeconds);
				await waitForNextPoll(intervalSeconds, expiresAt);
				break;
			case "KEY_READY":
				if (authorization.delivery === null || authorization.delivery === void 0) throw new Error("broker returned KEY_READY without an encrypted delivery");
				return authorization.delivery;
			case "DENIED":
			case "EXPIRED":
			case "FAILED": throw new Error(redactCredentialText(authorization.terminalReason?.trim() ?? "", [started.pollSecret]) || `broker entered terminal state ${authorization.status}`);
			case "CONSUMED": throw new Error("broker credential was already consumed; restart login");
		}
	}
	if (lastRetryableFailure !== void 0) throw new Error(`browser authorization expired after a retryable broker failure: ${credentialSafeMessage(lastRetryableFailure, [started.pollSecret])}`);
	throw new Error("browser authorization expired before approval completed");
}
/**
* Keep successful automatic opening free of the raw URL, exposing it only for an interactive
* manual handoff when the browser opener cannot carry the possession secret itself.
*/
function printVerificationInstructions(browser, started, verificationReference) {
	const opened = browser.state === "opened";
	if (!opened && !stderr.isTTY) return false;
	stderr.write([
		...opened ? ["Browser approval opened for this request.", `Approval reference: ${verificationReference}`] : [
			`Browser not opened automatically (${browser.reason}).`,
			"Open this one-time approval URL in your browser:",
			started.verificationUrl
		],
		`Comparison code: ${started.comparisonCode}`,
		"Confirm that the browser shows the same code before approving.",
		""
	].join("\n"));
	return true;
}
function clientPlatform() {
	switch (platform()) {
		case "darwin": return "MACOS";
		case "linux": return "LINUX";
		case "win32": return "WINDOWS";
		default: return "OTHER";
	}
}
function boundedPollInterval(seconds) {
	return Math.min(MAXIMUM_POLL_INTERVAL_SECONDS, Math.max(MINIMUM_POLL_INTERVAL_SECONDS, seconds));
}
async function waitForNextPoll(intervalSeconds, expiresAt) {
	const remainingMilliseconds = expiresAt - Date.now();
	if (remainingMilliseconds > 0) await setTimeout(Math.min(intervalSeconds * 1e3, remainingMilliseconds));
}
function diagnostics(stored, verified) {
	return {
		host: stored.host,
		provider: "keyring",
		personalApiKeyId: stored.credential.apiKey.id,
		name: redactCredentialText(stored.credential.apiKey.name, [stored.credential.secret]),
		activation: stored.activation,
		verified
	};
}
/**
* True only when the server-issued lifetime span proves the broker acknowledged the key. Both
* timestamps come from the provider, so no client clock is consulted. A nullish expiry is treated
* as unacknowledged, never as a permanent key.
*/
function isAcknowledgedLifetime(apiKey) {
	if (apiKey.expiresAt === null || apiKey.expiresAt === void 0) return false;
	return new Date(apiKey.expiresAt).getTime() - new Date(apiKey.createdAt).getTime() > ACKNOWLEDGED_KEY_MINIMUM_LIFETIME_MILLISECONDS;
}
//#endregion
//#region ../api-schemas/dist/agent/instruction-kind.js
/**
* Kinds of agent instruction documents stored under the agents/ prefix.
*
* @openapiSchema AgentInstructionKind
* @endpoint GET /v1/agents/instructions/{kind}/{name}
* @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
* @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
* @endpoint GET /v1/harness/runs/{runId}/usage
* @usedBySchema AgentInstructionSchema
* @contractShape agent.instruction-kind
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentInstruction.kt
*/
var AgentInstructionKindSchema = _enum([
	"PROMPT",
	"SKILL",
	"AGENT"
]);
/**
* Addressable identity of a versioned agent instruction document.
*
* @openapiSchema AgentInstruction
* @endpoint GET /v1/agents/instructions/{kind}/{name}
* @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
* @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
* @endpoint GET /v1/harness/runs/{runId}/usage
* @usedBySchema AgentInstructionDetailSchema
* @usedBySchema HarnessRunUsageSchema
* @contractShape agent.instruction
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentInstruction.kt
*/
var AgentInstructionSchema = object({
	/** Document kind */
	kind: AgentInstructionKindSchema,
	/** Manifest name of the instruction document */
	name: string(),
	/** Immutable content version (first 12 hex chars of the content sha256) */
	version: string()
});
/**
* A resolved agent instruction document: its identity plus the markdown content.
*
* @openapiSchema AgentInstructionDetail
* @endpoint GET /v1/agents/instructions/{kind}/{name}
* @endpoint GET /v1/agents/instructions/{kind}/{name}/versions/{version}
* @contractShape agent.instruction-detail
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentInstruction.kt
*/
var AgentInstructionDetailSchema = object({
	/** Markdown document content */
	content: string(),
	/** Addressable identity of the document */
	core: AgentInstructionSchema
});
/**
* One manifest entry: immutable version id and the full object key it resolves to.
*
* @openapiSchema AgentInstructionPointer
* @endpoint GET /v1/agents/instructions
* @usedBySchema AgentInstructionManifestSchema
* @contractShape agent.instruction-pointer
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentInstruction.kt
*/
var AgentInstructionPointerSchema = object({
	/** Object key under the agents/ prefix */
	key: string(),
	/** Immutable content version (sha256-12) */
	version: string()
});
/**
* Latest-pointer manifest at agents/manifest.json; written last by the sync pipeline.
*
* @openapiSchema AgentInstructionManifest
* @endpoint GET /v1/agents/instructions
* @contractShape agent.instruction-manifest
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentInstruction.kt
*/
var AgentInstructionManifestSchema = object({
	/** Sub-agent name to current version pointer */
	agent: record(string(), AgentInstructionPointerSchema),
	/** Prompt name to current version pointer */
	prompt: record(string(), AgentInstructionPointerSchema),
	/** Skill name to current version pointer */
	skill: record(string(), AgentInstructionPointerSchema)
});
//#endregion
//#region aventure-cli/agent-runtime.ts
/**
* Where each coding-agent runtime keeps the files `aventure-cli agents setup` touches, and how to
* read and write them. Sole owner of those locations and file shapes; the setup command decides
* what to install, never where a runtime stores it.
*
* Skill directories come from the `copy-to-other-agents` skill's base-directory table and discovery
* notes; MCP config files and their entry shapes come from the `add-new-mcp` skill's per-agent
* registration sections.
*/
/** Registered MCP server name — the opaque key every runtime config below already stores it under. */
var MCP_SERVER_NAME = "aventure";
/** Entry file every listed runtime discovers a skill by (`<skillDir>/<name>/SKILL.md`). */
var SKILL_ENTRY_FILE = "SKILL.md";
/** Installed-version sidecar, written beside each runtime's skill directory. */
var SKILL_STATE_FILE = ".aventure-skills.json";
var CLAUDE_MCP_BIN = "claude";
var CLAUDE_MCP_TIMEOUT_MS = 2e4;
var JSON_INDENT = 2;
/**
* Codex discovers user skills at `~/.agents/skills`, never `~/.codex/skills`. Cursor has no user
* skill directory and so receives the MCP registration only. `~/.claude.json` writes are reserved
* for `claude mcp add` because a live Claude Code session rewrites that file from memory.
*/
var AGENT_RUNTIME = [
	{
		name: "claude-code",
		base: "home",
		detect: [".claude"],
		skill: [".claude", "skills"],
		mcp: {
			shape: "claude-cli",
			file: [".claude.json"],
			key: "mcpServers"
		}
	},
	{
		name: "codex",
		base: "home",
		detect: [".codex"],
		skill: [".agents", "skills"],
		mcp: {
			shape: "toml",
			file: [".codex", "config.toml"]
		}
	},
	{
		name: "cursor",
		base: "home",
		detect: [".cursor"],
		skill: null,
		mcp: {
			shape: "json",
			file: [".cursor", "mcp.json"],
			key: "mcpServers",
			entry: (url) => ({
				type: "http",
				url
			})
		}
	},
	{
		name: "opencode",
		base: "config",
		detect: ["opencode"],
		skill: ["opencode", "skills"],
		mcp: {
			shape: "json",
			file: ["opencode", "opencode.json"],
			key: "mcp",
			entry: (url) => ({
				type: "remote",
				url,
				enabled: true
			})
		}
	}
];
function runtimeDetected(runtime) {
	return existsSync(runtimeDetectPath(runtime));
}
function runtimeDetectPath(runtime) {
	return join(runtimeRoot(runtime), ...runtime.detect);
}
function runtimeSkillDir(runtime) {
	return runtime.skill === null ? null : join(runtimeRoot(runtime), ...runtime.skill);
}
function runtimeMcpConfig(runtime) {
	return join(runtimeRoot(runtime), ...runtime.mcp.file);
}
/**
* Resolved at call time, and from `$HOME`/`$XDG_CONFIG_HOME` explicitly, so redirecting this
* command at a scratch directory is this module's own contract rather than a `homedir()`
* implementation detail. Everything below writes only under the root this returns.
*/
function runtimeRoot(runtime) {
	return runtime.base === "home" ? nonBlankEnv("HOME") ?? homedir() : configRoot();
}
function configRoot() {
	return nonBlankEnv("XDG_CONFIG_HOME") ?? join(nonBlankEnv("HOME") ?? homedir(), ".config");
}
function nonBlankEnv(name) {
	const value = process.env[name]?.trim();
	return value === void 0 || value.length === 0 ? void 0 : value;
}
function skillStateFile(skillDir) {
	return join(dirname(skillDir), SKILL_STATE_FILE);
}
/**
* The sidecar is a projection of the canonical manifest, so it round-trips through
* `AgentInstructionManifestSchema` instead of a second MCP-authored shape. A missing file means
* nothing is installed yet; an unreadable one reports as nothing installed and therefore replans
* every skill, which the next `--execute` repairs by rewriting it.
*/
function readSkillState(file) {
	if (!existsSync(file)) return {};
	try {
		const parsed = AgentInstructionManifestSchema.safeParse(JSON.parse(readFileSync(file, "utf8")));
		return parsed.success ? parsed.data.skill : {};
	} catch {
		return {};
	}
}
/** Records the manifest pointers of the skills just written; returns the problem text, or null. */
function writeSkillState(skillDir, manifest, written) {
	const file = skillStateFile(skillDir);
	const skill = { ...readSkillState(file) };
	for (const name of written) {
		const pointer = manifest.skill[name];
		if (pointer !== void 0) skill[name] = pointer;
	}
	return writeFile$1(file, `${JSON.stringify({
		prompt: {},
		skill,
		agent: {}
	}, null, JSON_INDENT)}\n`);
}
/**
* Writes one skill document into a runtime's skill directory; returns the problem text, or null.
* The skill name arrives from the published manifest, so containment is enforced here rather than
* assumed: a name that resolves anywhere but one directory directly under `skillDir` is refused.
*/
function writeSkillDocument(skillDir, name, content) {
	const target = join(skillDir, name, SKILL_ENTRY_FILE);
	if (dirname(dirname(target)) !== skillDir) return `refusing to install ${name}: it does not name one directory inside ${skillDir}`;
	return writeFile$1(target, content);
}
function writeFile$1(target, content) {
	try {
		writeFileAtomically$1(target, content);
	} catch (error) {
		return `cannot write ${target}: ${credentialSafeMessage(error)}`;
	}
	return null;
}
/**
* These are the user's live agent configs, several of which this command did not author. A plain
* truncating write that dies mid-flight (ENOSPC, EIO, a kill) leaves a half file; staging in the
* same directory and renaming leaves either the old file or the new one, never a shredded one.
*/
function writeFileAtomically$1(target, content) {
	mkdirSync(dirname(target), { recursive: true });
	const staged = `${target}.aventure-tmp`;
	try {
		writeFileSync(staged, content, "utf8");
		renameSync(staged, target);
	} finally {
		rmSync(staged, { force: true });
	}
}
/** A TOML `[mcp_servers.aventure]` table header, with the whitespace and quoting TOML allows. */
var TOML_MCP_TABLE = new RegExp(`^[ \\t]*\\[[ \\t]*mcp_servers[ \\t]*\\.[ \\t]*"?${MCP_SERVER_NAME}"?[ \\t]*\\]`);
/** `mcp_servers` declared as an inline table, which a later `[mcp_servers.x]` header cannot extend. */
var TOML_MCP_INLINE = /^[ \t]*mcp_servers[ \t]*=/m;
/**
* The URL this runtime currently has registered for the server, or `null` when it has none. The
* registration is keyed by server name, so a caller that routes through a local MCP proxy stays
* registered; the stored URL is reported so a caller can see which endpoint it points at.
*/
function registeredMcpUrl(runtime) {
	const mcpConfig = runtimeMcpConfig(runtime);
	if (!existsSync(mcpConfig)) return null;
	try {
		const text = readFileSync(mcpConfig, "utf8");
		if (runtime.mcp.shape === "toml") return tomlRegisteredUrl(text);
		const section = readJsonConfig(text)?.[runtime.mcp.key];
		const registered = (section !== void 0 && isAgentConfigJson(section) ? section : void 0)?.[MCP_SERVER_NAME];
		if (registered === void 0 || !isAgentConfigJson(registered)) return null;
		return typeof registered.url === "string" ? registered.url : UNKNOWN_REGISTERED_URL;
	} catch {
		return null;
	}
}
/** Stands in for a registration whose config records no readable URL. */
var UNKNOWN_REGISTERED_URL = "unknown";
function tomlRegisteredUrl(text) {
	const line = text.split("\n");
	const start = line.findIndex((entry) => TOML_MCP_TABLE.test(entry));
	if (start < 0) return null;
	for (const entry of line.slice(start + 1)) {
		if (entry.trimStart().startsWith("[")) break;
		const url = /^[ \t]*url[ \t]*=[ \t]*"([^"]*)"/.exec(entry);
		if (url?.[1] !== void 0) return url[1];
	}
	return UNKNOWN_REGISTERED_URL;
}
/** Registers the MCP server in this runtime's own config; returns the problem text, or null. */
function registerMcp(runtime, url) {
	const mcp = runtime.mcp;
	const mcpConfig = runtimeMcpConfig(runtime);
	if (mcp.shape === "claude-cli") return registerClaudeMcp(url);
	try {
		if (mcp.shape === "toml") return appendTomlMcp(mcpConfig, url);
		writeJsonMcp(mcpConfig, mcp.key, mcp.entry(url));
	} catch (error) {
		return `cannot write ${mcpConfig}: ${credentialSafeMessage(error)}`;
	}
	return null;
}
/**
* Appending a table header at end of file is a valid TOML addition only while `mcp_servers` is not
* already defined in a form the header cannot extend — an inline table, above all. Rather than
* shred a config this command did not author, refuse and hand the block to the user.
*/
function appendTomlMcp(mcpConfig, url) {
	const existing = existsSync(mcpConfig) ? readFileSync(mcpConfig, "utf8") : "";
	const block = `[mcp_servers.${MCP_SERVER_NAME}]\nurl = "${url}"\n`;
	if (TOML_MCP_INLINE.test(existing)) return `${mcpConfig} declares mcp_servers as an inline table, which this command cannot extend; add by hand:\n${block}`;
	return writeFile$1(mcpConfig, `${existing}${existing.length === 0 || existing.endsWith("\n") ? "" : "\n"}\n${block}`);
}
/** Merge into the runtime's own object so unrelated servers and settings survive. */
function writeJsonMcp(mcpConfig, key, entry) {
	const parsed = readJsonConfig(existsSync(mcpConfig) ? readFileSync(mcpConfig, "utf8") : "{}");
	if (parsed === null) throw new Error(`${mcpConfig} is not a JSON object`);
	const document = { ...parsed };
	const existing = document[key];
	document[key] = {
		...existing !== void 0 && isAgentConfigJson(existing) ? existing : {},
		[MCP_SERVER_NAME]: entry
	};
	writeFileAtomically$1(mcpConfig, `${JSON.stringify(document, null, JSON_INDENT)}\n`);
}
/** Delegated so a live Claude Code session, which rewrites `~/.claude.json`, cannot lose this. */
function registerClaudeMcp(url) {
	const argv = [
		"mcp",
		"add",
		"--transport",
		"http",
		"-s",
		"user",
		MCP_SERVER_NAME,
		url
	];
	const result = spawnSync(CLAUDE_MCP_BIN, argv, {
		encoding: "utf8",
		timeout: CLAUDE_MCP_TIMEOUT_MS
	});
	const command = `${CLAUDE_MCP_BIN} ${argv.join(" ")}`;
	if (result.error !== void 0) return `run \`${command}\`: ${result.error.message}`;
	if (result.status !== 0) {
		const tail = (result.stderr ?? "").trim().split("\n").slice(-2).join(" | ");
		return `\`${command}\` exited ${result.status}: ${tail || "no stderr"}`;
	}
	return null;
}
/**
* Parses one agent config file body through the canonical JSON contract. Throws on invalid JSON and
* returns `null` for valid JSON that is not an object, so a caller never mistakes either for "empty".
*/
function readJsonConfig(text) {
	const parsed = JsonValueSchema.safeParse(JSON.parse(text));
	return parsed.success && isAgentConfigJson(parsed.data) ? parsed.data : null;
}
function isAgentConfigJson(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
//#endregion
//#region aventure-cli/commands/builtin-agent-setup.ts
/**
* Built-in (non-generated) zero-touch onboarding: `aventure-cli agents setup`.
*
* Sibling of `builtin-doctor.ts` — a local environment command with no API contract of its own, so
* nothing to generate from a Kotlin `@Schema` owner. It reads the published instruction manifest
* through the generated agent-instruction operations, then materializes the `aventure*` skill
* bundle and the MCP server registration into whichever agent runtimes this user actually has on
* disk. `agent-runtime.ts` owns those locations, so nothing outside a detected runtime's own
* configuration directory is written.
*
* Dry-run by default per [MCP1e]: without `--execute` it reports the planned actions and writes
* nothing. `--status` re-reads what is installed and exits 1 while any drift remains.
*/
/** Manifest skill names belonging to this bundle all carry this prefix. */
var SKILL_NAME_PREFIX = "aventure";
function registerBuiltinAgentSetupCommand(parent) {
	addOutputModeOptions(agentsCommand(parent).command("setup").summary("Install the aventure skill bundle and MCP server into your agent runtimes").description([
		`Detect the agent runtimes installed for this user (${AGENT_RUNTIME.map((runtime) => runtime.name).join(", ")}),`,
		`install or refresh the published ${SKILL_NAME_PREFIX}* skill bundle into each runtime's own`,
		`skill directory, and register the ${MCP_SERVER_NAME} MCP server in each runtime's own config.`,
		"",
		"Dry-run by default, like every other mutation in this CLI:",
		"  aventure-cli agents setup             # report the planned actions; writes nothing",
		"  aventure-cli agents setup --execute   # write the skills and the MCP registration",
		"  aventure-cli agents setup --status    # compare what is installed; exit 1 on drift"
	].join("\n")).addOption(new Option("--execute", "write the planned actions; default is dry-run").default(false).conflicts(["status"])).addOption(new Option("--status", "report installed skill versions against the manifest and exit 1 on drift; compares recorded versions, not file content, and writes nothing").default(false).conflicts(["execute"]))).action(async function(opts) {
		const globals = this.optsWithGlobals();
		if (globals.environment !== void 0) process.env.API_ENV = globals.environment;
		emit({ mode: resolveOutputMode(opts) }, await agentSetupEnvelope(opts));
	});
}
/** Reuse the generated `agents` namespace so this sits beside `agents instructions`. */
function agentsCommand(parent) {
	const namespace = "agents";
	const existing = parent.commands.find((command) => command.name() === namespace);
	if (existing !== void 0) return existing;
	const summary = GENERATED_CLI_NAMESPACES[namespace]?.summary ?? namespace;
	return parent.command(namespace).summary(summary).description(summary);
}
async function agentSetupEnvelope(opts) {
	const mcpUrl = mcpServerUrl();
	if (!mcpUrl.ok || mcpUrl.data === null) return {
		...mcpUrl,
		data: null
	};
	const manifest = await readInstruction("getAgentInstructionManifest", AgentInstructionManifestSchema);
	if (!manifest.ok || manifest.data === null) return {
		...manifest,
		data: null
	};
	const published = manifest.data;
	const mcpEndpoint = mcpUrl.data;
	const bundle = Object.keys(published.skill).filter((name) => name.startsWith(SKILL_NAME_PREFIX)).toSorted();
	if (bundle.length === 0) return failure(`The agent instruction manifest carries no ${SKILL_NAME_PREFIX}* skill; nothing to install.`);
	const planned = AGENT_RUNTIME.map((runtime) => planRuntime(runtime, published, bundle, mcpEndpoint));
	return reportEnvelope({ runtime: opts.execute === true ? await applyPlan(planned, published, mcpEndpoint) : planned }, opts, mcpEndpoint);
}
function reportEnvelope(report, opts, mcpEndpoint) {
	const detected = report.runtime.filter((entry) => entry.detected);
	const pending = detected.flatMap((entry) => entry.action.filter((action) => action.state !== "current"));
	const failed = pending.filter((action) => action.state === "failed");
	const counts = {
		runtimeDetected: detected.length,
		actionPending: pending.length,
		actionFailed: failed.length
	};
	const summary = [`agents setup: ${detected.length} runtime detected, ${pending.length} action pending, mcp ${mcpEndpoint}`, ...report.runtime.map(runtimeLine)].join("\n");
	if (detected.length === 0) {
		const expected = AGENT_RUNTIME.map((entry) => `${entry.name}: no ${runtimeDetectPath(entry)}`);
		return {
			...failure(summary, expected, { counts }),
			data: report
		};
	}
	const blocking = failed.length > 0 ? failed : opts.status === true ? pending : [];
	return blocking.length === 0 ? success(summary, report, { counts }) : {
		...failure(summary, blocking.map(actionLine), { counts }),
		data: report
	};
}
function runtimeLine(plan) {
	if (!plan.detected) return `  ${plan.name} not installed`;
	const pending = plan.action.filter((action) => action.state !== "current");
	return pending.length === 0 ? `  ${plan.name} current (${plan.action.length} item)` : `  ${plan.name} ${pending.length} pending — ${pending.map(actionLine).join("; ")}`;
}
function actionLine(action) {
	return `${action.kind} ${action.name} ${action.state}: ${action.detail}`;
}
function setupAction(kind, name, state, detail) {
	return {
		kind,
		name,
		state,
		detail
	};
}
function planRuntime(runtime, manifest, bundle, mcpUrl) {
	const skillDir = runtimeSkillDir(runtime);
	const mcpConfig = runtimeMcpConfig(runtime);
	const plan = {
		name: runtime.name,
		skillDir,
		mcpConfig
	};
	if (!runtimeDetected(runtime)) return {
		...plan,
		detected: false,
		action: []
	};
	const registered = registeredMcpUrl(runtime);
	const mcp = registered === null ? setupAction("mcp", MCP_SERVER_NAME, "install", `register ${mcpUrl} in ${mcpConfig}`) : setupAction("mcp", MCP_SERVER_NAME, "current", `${registered} in ${mcpConfig}`);
	return {
		...plan,
		detected: true,
		action: [...skillDir === null ? [] : planSkill(skillDir, manifest, bundle), mcp]
	};
}
function planSkill(skillDir, manifest, bundle) {
	const installed = readSkillState(skillStateFile(skillDir));
	return bundle.map((name) => {
		const published = manifest.skill[name]?.version ?? "";
		const local = installed[name]?.version;
		const target = join(skillDir, name, SKILL_ENTRY_FILE);
		if (local === void 0 || !existsSync(target)) return setupAction("skill", name, "install", `write ${target} at version ${published}`);
		return local === published ? setupAction("skill", name, "current", `${target} at version ${published}`) : setupAction("skill", name, "update", `${target} ${local} -> ${published}`);
	});
}
/** Fetch each outstanding skill document once, then write it into every runtime that wants it. */
async function applyPlan(planned, manifest, mcpUrl) {
	const outstanding = planned.flatMap((plan) => plan.action.filter((entry) => entry.kind === "skill" && entry.state !== "current").map((entry) => entry.name));
	const document = /* @__PURE__ */ new Map();
	for (const name of [...new Set(outstanding)].toSorted()) document.set(name, await readSkill(name));
	return planned.map((plan) => {
		const runtime = AGENT_RUNTIME.find((entry) => entry.name === plan.name);
		if (!plan.detected || runtime === void 0) return plan;
		const written = [];
		const applied = plan.action.map((entry) => {
			if (entry.state === "current") return entry;
			if (entry.kind === "mcp") return applyMcp(runtime, plan.mcpConfig, mcpUrl);
			const result = applySkill(plan.skillDir, entry.name, document.get(entry.name));
			if (result.state === "current") written.push(entry.name);
			return result;
		});
		const problem = plan.skillDir === null || written.length === 0 ? null : writeSkillState(plan.skillDir, manifest, written);
		const state = problem === null ? [] : [setupAction("skill", SKILL_STATE_FILE, "failed", problem)];
		return {
			...plan,
			action: [...applied, ...state]
		};
	});
}
function applyMcp(runtime, mcpConfig, url) {
	const problem = registerMcp(runtime, url);
	return problem === null ? setupAction("mcp", MCP_SERVER_NAME, "current", `registered ${url} in ${mcpConfig}`) : setupAction("mcp", MCP_SERVER_NAME, "failed", problem);
}
function applySkill(skillDir, name, document) {
	if (skillDir === null || document === void 0 || !document.ok || document.data === null) return setupAction("skill", name, "failed", document?.summary ?? `no document fetched for ${name}`);
	const problem = writeSkillDocument(skillDir, name, document.data.content);
	return problem === null ? setupAction("skill", name, "current", `${join(skillDir, name, SKILL_ENTRY_FILE)} at version ${document.data.core.version}`) : setupAction("skill", name, "failed", problem);
}
async function readSkill(name) {
	return await readInstruction("getAgentInstruction", AgentInstructionDetailSchema, {
		kind: AgentInstructionKindSchema.enum.SKILL,
		name
	});
}
/**
* Call one generated agent-instruction operation and validate its body against the canonical
* api-schemas contract, so neither the route nor the response shape is restated here.
*/
async function readInstruction(operationId, schema, pathParams = {}) {
	const spec = generatedSpec(operationId);
	if (spec === void 0) return failure(`The generated command catalog carries no ${operationId} operation; regenerate it with \`make mcp-generate-contracts\` and reinstall.`);
	let path;
	try {
		path = buildOpenApiPath(spec.operationId, pathParams);
	} catch (error) {
		return failure(`Cannot address ${operationId}: ${credentialSafeMessage(error)}`);
	}
	const envelope = await runOpenApiCall({
		method: spec.method,
		path,
		auth: spec.auth,
		execute: true,
		responseFormat: "json"
	}).catch((error) => failure(credentialSafeMessage(error)));
	if (!envelope.ok) return {
		...envelope,
		summary: `${spec.method} ${path} failed: ${envelope.summary}`,
		data: null
	};
	const body = envelope.data;
	const parsed = schema.safeParse(typeof body === "object" && body !== null && "response" in body ? body.response : void 0);
	return parsed.success ? success(`${spec.method} ${path} answered`, parsed.data) : failure(`${path} returned an unexpected body: ${parsed.error.message}`);
}
function generatedSpec(operationId) {
	return GENERATED_OPENAPI_COMMAND_SPECS.find((spec) => spec.operationId === operationId);
}
/**
* The deployed MCP server sits on the `mcp` sibling of the resolved API host
* (`api.staging.aventure.vc` and `mcp.staging.aventure.vc` are the same deployment pair), so the
* URL derives from `api/env.ts` instead of restating a second host inventory here.
*/
function mcpServerUrl() {
	try {
		return success("MCP host derived", mcpServerUrlFromApiHost(readEnv().host, "/mcp").href);
	} catch (error) {
		return failure(`Correct API_ENV or pass \`--environment <name>\` — ${credentialSafeMessage(error)}.`);
	}
}
//#endregion
//#region aventure-cli/commands/completion-setup.ts
var BEGIN_MARKER = "# >>> aventure-cli completion setup (managed by aventure-cli) >>>";
var END_MARKER = "# <<< aventure-cli completion setup (managed by aventure-cli) <<<";
var BACKUP_SUFFIX = ".aventure-cli-completion.bak";
function registerCompletionInstallCommands(parent) {
	parent.command("install").summary("install shell completion loaders").description("Install managed shell completion loaders for supported shells.").action(() => runCompletionInstaller([]));
	parent.command("uninstall").summary("remove shell completion loaders").description("Remove managed shell completion loaders installed by aventure-cli.").action(() => runCompletionInstaller(["--uninstall"]));
}
function registerCompletionSetupCommand(parent) {
	parent.command("setup").summary("configure zsh completion startup").description("Configure ~/.zshrc so zsh loads aventure-cli completion loaders.").option("--dry-run", "print the managed zshrc block without writing").option("--yes", "apply without prompting").option("--uninstall", "remove the managed zshrc block").action(async (options) => {
		const installerPath = completionInstallerPath();
		const result = await applyManagedBlock({
			rcFile: resolve(homedir(), ".zshrc"),
			installerPath,
			mode: options.uninstall ? "uninstall" : "install",
			dryRun: options.dryRun,
			prompter: options.yes || options.dryRun ? void 0 : promptYesNo
		});
		process$1.stdout.write(`${result.message}\n`);
		if (!result.cancelled && !options.dryRun) runCompletionInstaller(options.uninstall ? ["--uninstall"] : []);
	});
}
function renderManagedBlock(installerPath, kind = "fpath-only") {
	return [
		BEGIN_MARKER,
		...[
			`# installer: ${installerPath}`,
			"fpath=(\"${XDG_DATA_HOME:-$HOME/.local/share}/zsh/site-functions\" $fpath)",
			...kind === "fpath-and-compinit" ? ["autoload -Uz compinit", "compinit"] : []
		],
		END_MARKER
	].join("\n");
}
function refreshShellCompletionsIfManaged() {
	const status = runCompletionInstaller(["--status"], "pipe");
	if (status.status !== 0) return {
		refreshed: false,
		message: `completion status exited ${status.status ?? 1}`
	};
	if (!hasManagedCompletion(status.stdout ?? "")) return {
		refreshed: false,
		message: "no managed shell completions found"
	};
	const install = runCompletionInstaller([], "pipe");
	if (install.status !== 0) return {
		refreshed: false,
		message: `completion refresh exited ${install.status ?? 1}`
	};
	return {
		refreshed: true,
		message: (install.stdout ?? "").trim() || "shell completions refreshed"
	};
}
async function applyManagedBlock({ rcFile, installerPath, mode, dryRun = false, prompter }) {
	const existing = readRegularFile(rcFile);
	const lines = existing.length === 0 ? [] : existing.split("\n");
	const bounds = managedBlockBounds(lines, rcFile);
	if (mode === "uninstall" && bounds === null) return {
		changed: false,
		cancelled: false,
		message: `${rcFile}: already up-to-date`,
		content: existing
	};
	const next = mode === "install" ? installContent(lines, bounds, installerPath, rcFile) : uninstallContent(lines, bounds);
	if (next === existing) return {
		changed: false,
		cancelled: false,
		message: `${rcFile}: already up-to-date`,
		content: next
	};
	if (dryRun) return {
		changed: true,
		cancelled: false,
		message: next,
		content: next
	};
	if (prompter !== void 0 && !await prompter(`Update ${rcFile}?`)) return {
		changed: true,
		cancelled: true,
		message: `${rcFile}: cancelled`,
		content: existing
	};
	writeFileAtomically(rcFile, next);
	return {
		changed: true,
		cancelled: false,
		message: `${rcFile}: updated`,
		content: next
	};
}
function completionInstallerPath(entryPath = process$1.argv[1]) {
	const entry = entryPath === void 0 ? "" : physicalEntryPath(entryPath);
	const builtPackagePath = resolve(dirname(entry), "..", "..", "scripts", "install-zsh-completion-loader.mjs");
	if (existsSync(builtPackagePath)) return builtPackagePath;
	return resolve(dirname(entry), "..", "scripts", "install-zsh-completion-loader.mjs");
}
function physicalEntryPath(entryPath) {
	try {
		return realpathSync(entryPath);
	} catch {
		return resolve(entryPath);
	}
}
function runCompletionInstaller(args, stdio = "inherit") {
	const result = spawnSync(process$1.execPath, [completionInstallerPath(), ...args], {
		encoding: stdio === "pipe" ? "utf8" : void 0,
		stdio
	});
	if (result.error !== void 0) throw result.error;
	if (stdio === "inherit") {
		if (result.status !== 0) process$1.exitCode = result.status ?? 1;
		return;
	}
	return {
		stdout: result.stdout?.toString(),
		stderr: result.stderr?.toString(),
		status: result.status
	};
}
function hasManagedCompletion(statusOutput) {
	return statusOutput.split(/\r?\n/u).some((line) => line.trim().endsWith(": managed"));
}
function readRegularFile(file) {
	if (!existsSync(file)) return "";
	refuseSymlink(file);
	return readFileSync(file, "utf8");
}
function managedBlockBounds(lines, file) {
	const begin = lineIndexes(lines, BEGIN_MARKER);
	const end = lineIndexes(lines, END_MARKER);
	if (begin.length === 0 && end.length === 0) return null;
	if (begin.length !== 1 || end.length !== 1 || begin[0] >= end[0]) throw new Error(`${file} has malformed aventure-cli completion setup markers; fix manually before retrying.`);
	return [begin[0], end[0]];
}
function installContent(lines, bounds, installerPath, file) {
	const withoutBlock = bounds === null ? [...lines] : [...lines.slice(0, bounds[0]), ...lines.slice(bounds[1] + 1)];
	const existingCompinit = firstCompinitLine(withoutBlock);
	const block = renderManagedBlock(installerPath, existingCompinit === -1 ? "fpath-and-compinit" : "fpath-only").split("\n");
	const insertion = bounds === null ? existingCompinit : bounds[0];
	const target = insertion === -1 ? withoutBlock.length : insertion;
	if (bounds !== null && existingCompinit !== -1 && existingCompinit < target) throw new Error(`${file} runs compinit before the managed block; move the block above compinit manually.`);
	return finish([
		...withoutBlock.slice(0, target),
		...block,
		...withoutBlock.slice(target)
	]);
}
function uninstallContent(lines, bounds) {
	if (bounds === null) return finish(lines);
	return finish([...lines.slice(0, bounds[0]), ...lines.slice(bounds[1] + 1)]);
}
function lineIndexes(lines, marker) {
	return lines.flatMap((line, index) => line === marker ? [index] : []);
}
function firstCompinitLine(lines) {
	return lines.findIndex((line) => /^\s*(autoload\s+.*\bcompinit\b|compinit(?:\s|$))/.test(line));
}
function writeFileAtomically(file, content) {
	mkdirSync(dirname(file), { recursive: true });
	if (existsSync(file)) {
		refuseSymlink(file);
		refuseSymlink(`${file}${BACKUP_SUFFIX}`);
		copyFileSync(file, `${file}${BACKUP_SUFFIX}`);
	}
	const temporary = resolve(dirname(file), `.${basename(file)}.${process$1.pid}.tmp`);
	refuseSymlink(temporary);
	writeFileSync(temporary, content, { mode: 420 });
	renameSync(temporary, file);
}
function refuseSymlink(file) {
	if (existsSync(file) && lstatSync(file).isSymbolicLink()) throw new Error(`refusing to write symlink: ${file}`);
}
function finish(lines) {
	const text = lines.join("\n");
	return text.length === 0 || text.endsWith("\n") ? text : `${text}\n`;
}
async function promptYesNo(message) {
	const readline = createInterface({
		input: process$1.stdin,
		output: process$1.stdout
	});
	try {
		const answer = await readline.question(`${message} [y/N] `);
		return /^(y|yes)$/i.test(answer.trim());
	} finally {
		readline.close();
	}
}
//#endregion
//#region aventure-cli/commands/builtin-update.ts
/**
* Built-in (non-generated) CLI subcommand: `aventure-cli update`.
*
* Sibling of `builtin-auth.ts` — a local environment command with no API
* contract, so nothing to generate from a Kotlin `@Schema` owner.
*
* Behavior matches the generated-mutation convention from `index.ts`:
*   - default       : dry-run report (`currentVersion`, `latestVersion`,
*                     `upgradeAvailable`); no network mutation.
*   - `--execute`   : runs `npm install -g` against the prefix that owns the
*                     running published bin. Refuses when the running CLI is
*                     the npm-linked working-tree build (rebuild that via
*                     `make` so dev tree stays SSOT).
*/
var REGISTRY_URL = "https://npm.pkg.github.com/";
var VERSION_COLLATOR = new Intl.Collator(void 0, { numeric: true });
var NPM_VIEW_TIMEOUT_MS = 2e4;
/**
* The published consumer package. The train (`scripts/release/publish-npm-train.mjs`)
* ships `@aventurevc/api-schemas`, `@aventurevc/aventure-cli`, and
* `@aventurevc/mcp-server` atomically at the same `X`, so the running version
* always equals the CLI variant at `X` regardless of which package provided
* the bin in PATH (standalone vs linked-mcp-server). Reading that variant from
* package metadata keeps `--execute` from ever upgrading mcp-server (which, on
* dev boxes, is intentionally npm-linked to the working tree).
*/
var CLI_PACKAGE = package_default.aventurePublish.variants.cli.name;
var WORKING_TREE_WALK_MAX_DEPTH = 8;
var NODE_GLOBAL_PACKAGE_MARKER = `${sep}lib${sep}node_modules${sep}${CLI_PACKAGE.replace("/", sep)}`;
function registerBuiltinUpdateCommand(parent) {
	addOutputModeOptions(parent.command("update").summary("Check for or install the latest aventure-cli release").description([
		"Compare the running CLI version against the latest published",
		"release and (with --execute) install it.",
		"",
		"Default is dry-run (matches every other mutation in this CLI):",
		"  aventure-cli update                # report currentVersion vs latestVersion",
		"  aventure-cli update --execute      # update the active published bin prefix",
		"",
		"Refuses to install when the running binary is the working-tree build",
		"(use `make` to rebuild that). Requires npm authentication for",
		"@aventurevc packages when --execute is set."
	].join("\n")).option("--execute", "perform the upgrade; default is dry-run", false)).action((options) => emit({ mode: resolveOutputMode(options) }, runUpdate(options)));
}
function runUpdate(options) {
	const runningPackage = CLI_PACKAGE;
	const currentVersion = package_default.version;
	const view = runNpm([
		"view",
		CLI_PACKAGE,
		"version",
		"--silent"
	], { timeout: NPM_VIEW_TIMEOUT_MS });
	if (!view.ok) return {
		...view,
		data: null
	};
	const latestVersion = (view.data ?? "").trim();
	if (latestVersion === "") return failure(`npm view ${CLI_PACKAGE} returned empty version`, ["empty_stdout"]);
	const upgradeAvailable = VERSION_COLLATOR.compare(currentVersion, latestVersion) < 0;
	const baseData = {
		targetPackage: CLI_PACKAGE,
		runningPackage,
		currentVersion,
		latestVersion,
		upgradeAvailable,
		upgradeInstalled: false
	};
	if (!options.execute) return success(`${runningPackage}@${currentVersion} → ${CLI_PACKAGE}@${latestVersion} (${upgradeAvailable ? "available" : "up to date"})`, baseData);
	if (!upgradeAvailable) return success(`${runningPackage}@${currentVersion} already matches ${CLI_PACKAGE}@${latestVersion}`, baseData);
	const dev = detectWorkingTreeBuild();
	if (dev !== null) return failure(`Refusing to install over the working-tree build at ${dev}; rebuild via make instead`, ["running CLI is npm-linked from the back-end checkout — `update` is for published bins"]);
	const publishedInstall = safeDetectPublishedInstall();
	const installArgs = ["install", "-g"];
	if (publishedInstall !== null) installArgs.push("--prefix", publishedInstall.installPrefix);
	installArgs.push(`${CLI_PACKAGE}@${latestVersion}`);
	const install = runNpm(installArgs, { stdio: [
		"ignore",
		"inherit",
		"inherit"
	] });
	if (!install.ok) return {
		...install,
		data: null
	};
	const verifiedVersion = publishedInstall === null ? void 0 : verifyInstalledCliVersion(publishedInstall.entryPath, latestVersion);
	if (verifiedVersion?.ok === false) return {
		...verifiedVersion,
		data: null
	};
	const completionRefresh = refreshShellCompletions();
	return success(`${CLI_PACKAGE} upgraded to ${latestVersion}`, {
		...baseData,
		upgradeInstalled: true,
		installPrefix: publishedInstall?.installPrefix,
		verifiedVersion: verifiedVersion?.data ?? void 0,
		completionRefreshed: completionRefresh.refreshed,
		completionRefreshMessage: completionRefresh.message
	});
}
/**
* One spawn point for every npm call this command makes. The aVenture scope stays pinned to GitHub
* Packages, while npm configuration owns cache and authentication and the default registry remains
* available for public transitive dependencies.
*
* Stdout-capturing callers (`npm view`) get a `success` envelope carrying
* stdout; pass-through callers (`npm install`) inherit stdio and the `data`
* payload is the empty string.
*/
function runNpm(args, options = {}) {
	const env = { ...process.env };
	env.NODE_AUTH_TOKEN ??= env.GH_PACKAGES_TOKEN;
	const fullArgs = [...args, `--@aventurevc:registry=${REGISTRY_URL}`];
	const result = spawnSync("npm", fullArgs, {
		env,
		encoding: "utf8",
		...options
	});
	if (result.error) return result.signal === "SIGTERM" && options.timeout !== void 0 ? failure(`npm ${args[0] ?? ""} did not answer within ${options.timeout}ms`, ["timeout"]) : failure(`npm ${args[0] ?? ""} failed to start: ${result.error.message}`, ["spawn_error"]);
	if (result.status !== 0) {
		const tail = (result.stderr ?? "").trim().split("\n").slice(-3).join(" | ");
		return failure(`npm ${args.join(" ")} exited ${result.status}`, [tail || "no stderr"]);
	}
	return success("npm ok", result.stdout ?? "");
}
function verifyInstalledCliVersion(entryPath, expectedVersion) {
	const result = spawnSync(process.execPath, [entryPath, "--version"], { encoding: "utf8" });
	if (result.error) return failure(`updated ${CLI_PACKAGE} verification failed: ${result.error.message}`, ["spawn_error"]);
	const actualVersion = (result.stdout ?? "").trim();
	if (result.status !== 0 || actualVersion !== expectedVersion) {
		const tail = (result.stderr ?? "").trim().split("\n").slice(-3).join(" | ");
		return failure(`updated ${CLI_PACKAGE} verification expected ${expectedVersion} but active bin reported ${actualVersion || "empty output"}`, [tail || `active bin: ${entryPath}`]);
	}
	return success("active CLI version verified", actualVersion);
}
/**
* Returns the working-tree root when this process is running from an npm-linked
* dev build (e.g. `~/.nvm/.../node_modules/@aventurevc/mcp-server` is a symlink
* back into the back-end checkout), otherwise `null`. We walk from
* `process.argv[1]` up to the package root and check for the TypeScript
* sources that are excluded from the published tarball.
*/
function detectWorkingTreeBuild() {
	const entry = process.argv[1];
	if (!entry) return null;
	let cursor;
	try {
		cursor = realpathSync(entry);
	} catch {
		return null;
	}
	for (let i = 0; i < WORKING_TREE_WALK_MAX_DEPTH; i += 1) {
		const parent = dirname(cursor);
		if (parent === cursor) return null;
		if (existsSync(resolve(parent, "aventure-cli", "index.ts"))) return parent;
		cursor = parent;
	}
	return null;
}
function safeDetectPublishedInstall() {
	const entry = process.argv[1];
	if (!entry) return null;
	let entryPath;
	try {
		entryPath = realpathSync(entry);
	} catch {
		return null;
	}
	let cursor = entryPath;
	for (let i = 0; i < WORKING_TREE_WALK_MAX_DEPTH; i += 1) {
		const parent = dirname(cursor);
		if (parent === cursor) return null;
		if (existsSync(resolve(parent, "package.json"))) {
			const markerIndex = parent.lastIndexOf(NODE_GLOBAL_PACKAGE_MARKER);
			if (markerIndex < 0) return null;
			return {
				entryPath,
				installPrefix: parent.slice(0, markerIndex)
			};
		}
		cursor = parent;
	}
	return null;
}
function refreshShellCompletions() {
	try {
		return refreshShellCompletionsIfManaged();
	} catch (error) {
		return {
			refreshed: false,
			message: error instanceof Error ? error.message : String(error)
		};
	}
}
//#endregion
//#region aventure-cli/commands/builtin-doctor.ts
/**
* The selftest inventory, in report order. Check names and the `--help` list read from here, and
* `DoctorCheckName` types every result against it, so a renamed check stops compiling. The emitted
* order is asserted against this list in `__tests__/cli/doctor.test.ts`.
*/
var DOCTOR_CHECK = [
	{
		name: "cli-version",
		purpose: "running CLI against the latest published release"
	},
	{
		name: "api-schemas",
		purpose: "the installed @aventurevc/api-schemas contracts resolve"
	},
	{
		name: "api-host",
		purpose: "the selected API host answers its generated status operation"
	},
	{
		name: "auth",
		purpose: "which credential scope materialized locally, never the secret"
	},
	{
		name: "catalog",
		purpose: "this catalog was generated from the operation set the API serves"
	}
];
/** Read from the canonical status contract, so a rename there stops compiling here. */
var SERVED_FINGERPRINT_FIELD = "operationFingerprint";
function registerBuiltinDoctorCommand(parent) {
	addOutputModeOptions(parent.command("doctor").summary("One-call selftest: CLI version, schemas, API host, auth scope, command catalog").description([
		"Run every environment check in one call and report `{ ok, check: [...] }`:",
		...DOCTOR_CHECK.map((entry) => `  - ${entry.name}: ${entry.purpose}`),
		"",
		"Exit code is 0 only when no check failed; a skipped check (no registry reachable)",
		"does not fail the run. Each failing message names the command that fixes it.",
		"--json always carries the report at `.data`; --data prints the report directly when",
		"every check passes and the result envelope when one fails, like every other command."
	].join("\n"))).action(async function(opts) {
		const globals = this.optsWithGlobals();
		if (globals.environment !== void 0) process.env.API_ENV = globals.environment;
		emit({ mode: resolveOutputMode(opts) }, await doctorEnvelope());
	});
}
async function doctorEnvelope() {
	const statusSpec = generatedStatusSpec();
	const cliVersion = cliVersionCheck();
	const [apiSchemas, apiHost] = await Promise.all([apiSchemasCheck(), apiHostCheck(statusSpec)]);
	const check = [
		cliVersion.check,
		apiSchemas,
		apiHost.check,
		await authCheck(),
		catalogCheck(statusSpec, apiHost.servedFingerprint, cliVersion.upgradeAvailable)
	];
	const counts = {
		pass: countStatus(check, "pass"),
		fail: countStatus(check, "fail"),
		skip: countStatus(check, "skip")
	};
	const failureMessage = check.filter((entry) => entry.status === "fail").map((entry) => entry.message);
	const report = {
		ok: failureMessage.length === 0,
		check
	};
	const summary = [`doctor: ${counts.pass} pass, ${counts.fail} fail, ${counts.skip} skip`, ...check.map((entry) => `  ${entry.name} ${entry.status} — ${entry.message}`)].join("\n");
	return report.ok ? success(summary, report, { counts }) : {
		...failure(summary, failureMessage, { counts }),
		data: report
	};
}
function countStatus(check, status) {
	return check.filter((entry) => entry.status === status).length;
}
function checkResult(name, status, message) {
	return {
		name,
		status,
		message
	};
}
/**
* The status operation resolved from the generated catalog the same way the MCP server resolves it
* from its own contract (`mcp/scripts/build-mcp.ts` callStatus): intent and resource both `status`,
* never a hand-coded route. `undefined` means this catalog lost it, which the catalog check reports.
*/
function generatedStatusSpec() {
	return GENERATED_OPENAPI_COMMAND_SPECS.find((spec) => spec.intent === "status" && spec.resource === "status");
}
/**
* `upgradeAvailable` is null when the registry could not answer, so a caller cannot mistake
* "no newer release" for "unknown".
*/
function cliVersionCheck() {
	const update = runUpdate({});
	if (!update.ok || update.data === null) return {
		check: checkResult("cli-version", "skip", `Could not compare ${package_default.version} against the registry (${update.summary}); rerun \`aventure-cli update\` with registry access.`),
		upgradeAvailable: null
	};
	const { targetPackage, currentVersion, latestVersion, upgradeAvailable } = update.data;
	return {
		check: upgradeAvailable ? checkResult("cli-version", "fail", `Upgrade ${targetPackage} from ${currentVersion} to ${latestVersion}: run \`aventure-cli update --execute\`.`) : checkResult("cli-version", "pass", `${targetPackage} ${currentVersion} matches the latest published release.`),
		upgradeAvailable
	};
}
/**
* Probe a schema module that nothing on the CLI's startup path imports, so a partially built or
* partially installed `@aventurevc/api-schemas` is detectable here. Probing a module the CLI itself
* loads at startup would prove nothing: that failure kills the process before Commander dispatches,
* so no check could ever report it.
*/
async function apiSchemasCheck() {
	try {
		const { EntityDetailSchema } = await import("./detail-B4s7YC6h.js");
		if (typeof EntityDetailSchema.safeParse !== "function") throw new Error("EntityDetailSchema does not expose a Zod parser");
		return checkResult("api-schemas", "pass", "Installed @aventurevc/api-schemas contracts resolve beyond the CLI startup path.");
	} catch (error) {
		return checkResult("api-schemas", "fail", `Reinstall the CLI: run \`aventure-cli update --execute\` — ${credentialSafeMessage(error)}.`);
	}
}
/**
* The status operation answers two questions in one call: is the host reachable, and which
* operation set does it serve. The catalog check reads the served fingerprint from the same
* response rather than calling again.
*/
async function apiHostCheck(statusSpec) {
	if (statusSpec === void 0) return {
		check: checkResult("api-host", "skip", "No status operation resolved from the generated catalog; fix the catalog check first."),
		servedFingerprint: null
	};
	let host;
	try {
		host = readEnv().host;
	} catch (error) {
		return {
			check: checkResult("api-host", "fail", `Correct API_ENV or pass \`--environment <name>\` — ${credentialSafeMessage(error)}.`),
			servedFingerprint: null
		};
	}
	const envelope = await runOpenApiCall({
		method: statusSpec.method,
		path: statusSpec.path,
		auth: statusSpec.auth,
		execute: true,
		responseFormat: "json"
	}).catch((error) => failure(credentialSafeMessage(error)));
	return envelope.ok ? {
		check: checkResult("api-host", "pass", `${statusSpec.method} ${statusSpec.path} answered at ${host}.`),
		servedFingerprint: servedOperationFingerprint(envelope.data)
	} : {
		check: checkResult("api-host", "fail", `Point the CLI at a reachable API host with \`--environment <name>\` or API_URL, then rerun \`aventure-cli auth doctor\` — ${statusSpec.method} ${statusSpec.path} at ${host} returned ${envelope.summary}.`),
		servedFingerprint: null
	};
}
/**
* `operationFingerprint` off the status response, and only that field. Validating the whole
* `SystemStatus` shape as a precondition would disable the drift check exactly when it matters: a
* client stale enough to disagree about the operation set is the client most likely to disagree
* about the rest of the payload, and the read would silently degrade to "unproven".
*/
function servedOperationFingerprint(content) {
	if (typeof content !== "object" || content === null) return null;
	const { response } = content;
	if (typeof response !== "object" || response === null || Array.isArray(response)) return null;
	const fingerprint = response[SERVED_FINGERPRINT_FIELD];
	return typeof fingerprint === "string" && fingerprint.length > 0 ? fingerprint : null;
}
/**
* Report which credential scope a real call would use, never the credential. Saved auth is
* materialized first (idempotent, non-fatal) so the answer never depends on whether an earlier
* check happened to trigger it.
*/
async function authCheck() {
	await materializeAuth();
	let resolved;
	try {
		resolved = resolveAuthStatus(await readAuthConfig());
	} catch (error) {
		return checkResult("auth", "fail", `Repair or remove ${configPath()} and run \`aventure-cli auth init\` — ${credentialSafeMessage(error)}.`);
	}
	const personal = await inspectPersonalCredential$1();
	if (AUTH_SECRET_NAMES.some((name) => resolved[name].present) || personal.state === "found") return checkResult("auth", "pass", `Credential scope materialized: ${scopeText(resolved, personal)}.`);
	if (personal.state === "unavailable") {
		if (personal.cause === "environment") return checkResult("auth", "fail", `Fix the environment configuration first — ${personal.summary}.`);
		return checkResult("auth", "fail", `Unlock OS credential storage before \`aventure-cli auth login\`, or inject ${AUTH_SECRET_NAMES.join("/")} through the environment — ${personal.summary}.`);
	}
	return AUTH_SECRET_NAMES.some((name) => resolved[name].source === "config") ? checkResult("auth", "fail", `The Doppler source in ${configPath()} resolved no credential: confirm your access to that project and config, or inject ${AUTH_SECRET_NAMES.join("/")} through the environment.`) : checkResult("auth", "fail", "Run `aventure-cli auth login` for a personal credential, or `aventure-cli auth init` to select a Doppler source.");
}
async function inspectPersonalCredential$1() {
	let canonicalHost;
	try {
		canonicalHost = canonicalPersonalCredentialHost(readEnv().host);
	} catch (error) {
		return {
			state: "unavailable",
			summary: credentialSafeMessage(error),
			cause: "environment"
		};
	}
	try {
		return await loadPersonalCredential(canonicalHost);
	} catch (error) {
		return {
			state: "unavailable",
			summary: credentialSafeMessage(error),
			cause: "keyring"
		};
	}
}
/** The three-way provenance `auth status` renders: resolved source, configured-but-unresolved, unset. */
function scopeText(resolved, personal) {
	return [...AUTH_SECRET_NAMES.map((name) => `${name}=${credentialText(resolved, name)}`), `personal=${personalText(personal)}`].join(" ");
}
function credentialText(resolved, name) {
	const resolution = resolved[name];
	if (resolution.present) return resolution.source ?? "resolved";
	return resolution.source === "config" ? "config (unresolved)" : "unset";
}
function personalText(personal) {
	if (personal.state === "found") return personal.stored.activation;
	return personal.state === "missing" ? "unset" : "unavailable";
}
/**
* Catalog-vs-API drift. Both sides reduce the served operation set to the same short hash — the API
* from its registered handlers, this catalog from the OpenAPI document it was generated from — so an
* unequal pair means this CLI describes operations the deployment no longer serves, or misses ones
* it does.
*
* A mismatch only *fails* when a newer CLI is published, because only then can the caller fix it.
* Deploys and CLI releases are independent here: the API ships on every merge, the packages ship on
* an explicit release lane, so "the newest published CLI predates the current deployment" is an
* ordinary steady state. Failing there would exit non-zero on every machine until someone published,
* and `aventure-cli update` would answer "already at latest" — a verdict no caller could clear.
*/
function catalogCheck(statusSpec, servedFingerprint, upgradeAvailable) {
	const total = GENERATED_OPENAPI_COMMAND_SPECS.length;
	if (statusSpec === void 0) return checkResult("catalog", "fail", `Regenerate the command catalog with \`make mcp-generate-contracts\` and reinstall: none of its ${total} operations is the status operation.`);
	if (servedFingerprint === null) return checkResult("catalog", "skip", `Could not read the served operation fingerprint, so drift is unproven; this catalog holds ${total} operations at ${GENERATED_OPERATION_FINGERPRINT}.`);
	if (servedFingerprint === "4fce659a0b6cb459") return checkResult("catalog", "pass", `${total} generated operations match the set the API serves (${GENERATED_OPERATION_FINGERPRINT}).`);
	const drift = `This catalog describes a different operation set than the API serves (${GENERATED_OPERATION_FINGERPRINT} vs ${servedFingerprint})`;
	if (upgradeAvailable === true) return checkResult("catalog", "fail", `${drift}: run \`aventure-cli update --execute\`.`);
	return checkResult("catalog", "skip", upgradeAvailable === false ? `${drift}, and no published release describes it yet: the CLI needs publishing (\`make npm-publish-train\`) before any caller can match this deployment.` : `${drift}, and the registry did not answer, so it is unknown whether a newer release describes it: rerun \`aventure-cli update\` with registry access.`);
}
//#endregion
//#region aventure-cli/commands/builtin-auth.ts
/** Local, non-generated credential setup and diagnostic commands. */
var AUTH_LOGIN_START = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "start");
var AUTH_LOGIN_POLL = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "poll");
var AUTH_LOGIN_ACKNOWLEDGE = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "acknowledge");
var AUTH_LOGOUT_REVOKE = openApiCompositeSpec(GENERATED_OPENAPI_COMPOSITE_SPECS, "revoke");
function registerBuiltinAuthCommands(parent) {
	const auth = authCommand(parent);
	registerBuiltinDoctorCommand(auth);
	registerBuiltinAgentSetupCommand(parent);
	addOutputModeOptions(compositeCommand(auth, AUTH_LOGIN_START, [
		AUTH_LOGIN_START,
		AUTH_LOGIN_POLL,
		AUTH_LOGIN_ACKNOWLEDGE
	].map(({ description }) => description).join("\n"))).action(async function(opts) {
		forwardEnvironment(this);
		emit({ mode: resolveOutputMode(opts) }, await loginPersonalCredential({
			noBrowser: !opts.browser,
			clientLabel: opts.clientLabel
		}));
	});
	addOutputModeOptions(compositeCommand(auth, AUTH_LOGOUT_REVOKE, AUTH_LOGOUT_REVOKE.description)).action(async function(opts) {
		forwardEnvironment(this);
		emit({ mode: resolveOutputMode(opts) }, await logoutPersonalCredential({ forgetLocal: opts.forgetLocal === true }));
	});
	addOutputModeOptions(auth.command("init").summary("Interactive credential setup").description([
		"Interactively record the Doppler project/config used by aventure-cli + the MCP server.",
		"Credentials resolve from the injected environment first, then Doppler; auth init never writes credentials to disk.",
		"",
		"Prompts go to stderr so stdout stays reserved for the result envelope."
	].join("\n"))).action(async function(opts) {
		forwardEnvironment(this);
		emit({ mode: resolveOutputMode(opts) }, await initEnvelope());
	});
	addOutputModeOptions(auth.command("status").summary("Local credential provenance, API build, and server uptime").description([
		"Reports local credentials plus two independent remote health signals:",
		"  - auth: per-credential local provenance (env vs ~/.config/aventure/config.json vs unset)",
		"  - personal: OS-keyring metadata for the selected API host, without the secret",
		"  - api: running CLI package version plus GET /info build metadata",
		"  - system: GET /v1/status response (Better Stack uptime SLA)",
		"",
		"No headers are sent to the server. Credential provenance is computed locally; this",
		"answers whether service credentials or a personal CLI credential are wired without exposing them.",
		"To prove a credential survives transit, call any real endpoint that requires it."
	].join("\n"))).action(async function(opts) {
		forwardEnvironment(this);
		emit({ mode: resolveOutputMode(opts) }, await statusEnvelope());
	});
}
function compositeCommand(parent, composite, description) {
	const command = parent.command(composite.command.slice(composite.command.indexOf(" ") + 1)).summary(composite.summary).description(description);
	for (const option of composite.bodyOption) if (option.required) command.requiredOption(option.flag, option.description);
	else command.option(option.flag, option.description);
	for (const option of composite.localOption) command.option(option.flag, option.description);
	return command;
}
function authCommand(parent) {
	return (parent.commands.find((command) => command.name() === "auth") ?? parent.command("auth")).summary("Authentication, credential setup, API build, and uptime").description([
		`\`${AUTH_LOGIN_START.command}\`: ${AUTH_LOGIN_START.summary}.`,
		`\`${AUTH_LOGOUT_REVOKE.command}\`: ${AUTH_LOGOUT_REVOKE.summary}.`,
		"`auth status` reports local credential provenance plus CLI/API build and uptime.",
		"`auth doctor` runs the one-call selftest and prints `{ ok, check: [...] }`.",
		"`auth init` configures the local Doppler source used by generated API commands."
	].join("\n"));
}
function forwardEnvironment(command) {
	const globals = command.optsWithGlobals();
	if (globals.environment !== void 0) process.env.API_ENV = globals.environment;
}
async function statusEnvelope() {
	let config;
	try {
		config = await readAuthConfig();
	} catch (error) {
		return failure(`auth status: cannot read ${configPath()} — ${error instanceof Error ? error.message : String(error)}`, [
			`configPath=${configPath()}`,
			`errorName=${error instanceof Error ? error.name : "Error"}`,
			...CONFIG_TEMPLATE_HINT
		]);
	}
	let personalHost;
	try {
		personalHost = canonicalPersonalCredentialHost(readEnv().host);
	} catch (error) {
		return failure(`auth status: invalid API host — ${credentialSafeMessage(error)}`);
	}
	const [system, apiInfo, personal] = await Promise.all([
		callPublicJsonEndpoint("/v1/status", "GET /v1/status"),
		callPublicJsonEndpoint("/info", "GET /info"),
		inspectPersonalCredential(personalHost)
	]);
	const resolved = resolveAuthStatus(config);
	const summary = `cli=${package_default.version} ${summarizeApiInfo(apiInfo)} ${summarizeAuthOnly(resolved)} personal=${summarizePersonalCredential(personal)} | ${summarizeSystem(system)}`;
	const diagnostics = {
		cli: { version: package_default.version },
		api: apiInfo.ok ? apiInfo.data ?? null : null,
		auth: authDiagnostics(config, resolved),
		personal: personalCredentialDiagnostics(personalHost, personal),
		system: system.ok ? system.data ?? null : null,
		...apiInfo.ok ? {} : { apiError: apiInfo.summary },
		...system.ok ? {} : { systemError: system.summary }
	};
	return hasResolvedCredential(resolved) || personal.state === "found" ? success(summary, diagnostics) : noCredentialsFailure(`auth status: no credentials resolved | ${summary}`, diagnostics);
}
async function inspectPersonalCredential(host) {
	try {
		return await loadPersonalCredential(host);
	} catch (error) {
		return {
			state: "invalid",
			summary: credentialSafeMessage(error)
		};
	}
}
function summarizePersonalCredential(personal) {
	return personal.state === "found" ? personal.stored.activation : personal.state === "missing" ? "unset" : "unavailable";
}
function personalCredentialDiagnostics(host, personal) {
	const stored = personal.state === "found" ? personal.stored : void 0;
	return {
		host,
		present: stored !== void 0,
		provider: stored === void 0 ? null : "keyring",
		activation: stored?.activation ?? null,
		apiKeyId: stored?.credential.apiKey.id ?? null,
		name: stored === void 0 ? null : redactCredentialText(stored.credential.apiKey.name, [stored.credential.secret]),
		status: stored?.credential.apiKey.status ?? null,
		expiresAt: stored?.credential.apiKey.expiresAt ?? null,
		keyringFailure: personal.state === "unavailable" ? personal.summary : null,
		error: personal.state === "invalid" ? personal.summary : null
	};
}
function summarizeAuthOnly(resolved) {
	return AUTH_SECRET_NAMES.map((name) => summarizeCredential(name, resolved)).join(" ");
}
function summarizeCredential(name, resolved) {
	const resolution = resolved[name];
	if (resolution.present) return `${name}=${resolution.source ?? "resolved"}`;
	return `${name}=${resolution.source === "config" ? "config (unresolved)" : "unset"}`;
}
function summarizeSystem(envelope) {
	if (!envelope.ok) return `system=error: ${envelope.summary}`;
	return `system=ok`;
}
function summarizeApiInfo(envelope) {
	if (!envelope.ok) return `api=error: ${envelope.summary}`;
	return `api=${apiBuildVersion(envelope.data) ?? "unknown"}`;
}
function apiBuildVersion(data) {
	if (!isRecord(data)) return null;
	const parsed = SystemBuildSchema.safeParse(Reflect.get(data, "response"));
	if (!parsed.success) return null;
	const version = parsed.data.build.version?.trim();
	return version && version.length > 0 ? version : null;
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
async function callPublicJsonEndpoint(path, label) {
	return await runOpenApiCall({
		method: "GET",
		path,
		auth: "none",
		execute: true,
		responseFormat: "json"
	}).catch((error) => failure(`${label} failed: ${error instanceof Error ? error.message : String(error)}`));
}
async function initEnvelope() {
	if (!stdin.isTTY) return failure("aventure-cli auth init requires an interactive TTY on stdin", ["non-interactive caller: hand-write `~/.config/aventure/config.json` directly", ...CONFIG_TEMPLATE_HINT]);
	const rl = createInterface({
		input: stdin,
		output: stderr
	});
	try {
		stderr.write("aventure-cli auth init\n\n");
		const config = await askDopplerSource(rl);
		try {
			await writeAuthConfig(config);
		} catch (error) {
			return failure(`auth init: cannot write ${configPath()} — ${error instanceof Error ? error.message : String(error)}`, [
				`configPath=${configPath()}`,
				`errorName=${error instanceof Error ? error.name : "Error"}`,
				...CONFIG_TEMPLATE_HINT
			]);
		}
		await materializeAuth();
		return buildStatusResponse("saved", config);
	} finally {
		rl.close();
	}
}
async function askDopplerSource(rl) {
	return {
		source: "doppler",
		project: await readRequired(rl, "Doppler project: "),
		config: await readRequired(rl, "Doppler config (e.g. staging): ")
	};
}
async function readRequired(rl, prompt) {
	while (true) {
		const answer = (await rl.question(prompt)).trim();
		if (answer.length > 0) return answer;
		stderr.write("  required\n");
	}
}
function buildStatusResponse(verb, config) {
	const resolved = resolveAuthStatus(config);
	const summary = `${summarizeStatus(verb, config, resolved)} | ${summarizeScopeAvailability()}`;
	const diagnostics = authDiagnostics(config, resolved);
	return hasResolvedCredential(resolved) ? success(summary, diagnostics) : noCredentialsFailure(`no credentials resolved | ${summary}`, diagnostics);
}
function authDiagnostics(config, resolved) {
	return {
		configPath: configPath(),
		configSource: config?.source ?? null,
		...config?.source === "doppler" ? {
			configProject: config.project,
			configConfig: config.config
		} : {},
		resolved
	};
}
function hasResolvedCredential(resolved) {
	return AUTH_SECRET_NAMES.some((name) => resolved[name].present);
}
function noCredentialsFailure(summary, data) {
	return {
		...failure(summary, ["Run `aventure-cli auth init` to select Doppler, or inject credentials through the environment.", "For a personal credential, run `aventure-cli auth login` in an interactive terminal."]),
		data
	};
}
function summarizeScopeAvailability() {
	return `read=${prepareCallEnv("read").ok ? "available" : "unavailable"} write=${prepareCallEnv("write").ok ? "available" : "unavailable"}`;
}
function summarizeStatus(verb, config, resolved) {
	return `${verb}: ${summarizeAuthOnly(resolved)} | ${config === null ? "no config" : `doppler ${config.project}/${config.config}`}`;
}
/** JSON template surfaced when the config is missing or unreadable. */
var CONFIG_TEMPLATE_HINT = [
	"no config at the path above — run `aventure-cli auth init` in an interactive terminal, or write a non-secret Doppler source config:",
	"  {\"auth\":{\"source\":\"doppler\",\"project\":\"<project>\",\"config\":\"<config>\"}}",
	"legacy inline configs are rejected; move credentials to Doppler or the environment before replacing the config."
];
//#endregion
//#region aventure-cli/commands/batch-io.ts
/**
* NDJSON, checkpoint, and option-parsing primitives for `aventure-cli batch`.
*
* Pure infrastructure for `builtin-batch.ts` — no endpoint knowledge and no
* network calls ([MCP1b.1]); the generated OpenAPI command specs remain the
* only contract source. Checkpoints bind to the exact input file bytes and
* chunk size so a resume can never replay against reordered or edited rows.
*/
function resolveSpec(specs, commandText) {
	const normalized = normalizeCommand(commandText);
	const match = specs.find((spec) => spec.cliPath.join(" ") === normalized || spec.cliAliasPath?.join(" ") === normalized || spec.operationId === normalized);
	if (match === void 0) return failure(`No generated operation matches "${commandText}"`, ["Resolve the exact command with `aventure-cli command-catalog search \"<query>\"`."]);
	return success(`Resolved ${match.operationId}`, match);
}
function guardPathParameterFree(spec) {
	if (spec.parameters.some((parameter) => parameter.location === "path")) return failure(`${spec.operationId} has path parameters and cannot be batch-driven`, [spec.path]);
	return success("no path parameters", null);
}
function parseQueryOptions(values) {
	const query = {};
	for (const value of values) {
		const separator = value.indexOf("=");
		if (separator <= 0) return failure(`--query expects key=value, got "${value}"`);
		query[value.slice(0, separator)] = value.slice(separator + 1);
	}
	return success("query parsed", query);
}
function parseBoundedInt(name, raw, min, max) {
	const value = Number(raw);
	if (!Number.isInteger(value) || value < min || value > max) return failure(`${name} must be an integer between ${min} and ${max}, got "${raw}"`);
	return success(`${name} parsed`, value);
}
/** Parse once at the trust boundary; everything downstream walks typed JsonValue. */
function toJsonValue(value) {
	const parsed = JsonValueSchema.safeParse(value);
	return parsed.success ? parsed.data : void 0;
}
function pathValue(value, path) {
	let cursor = toJsonValue(value);
	for (const segment of path.split(".")) {
		if (typeof cursor !== "object" || cursor === null || Array.isArray(cursor)) return void 0;
		cursor = cursor[segment];
	}
	return cursor;
}
function asJsonRecord(value) {
	const parsed = toJsonValue(value);
	if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return null;
	return parsed;
}
/**
* Unwrap the OpenAPI runner's call-result wrapper down to the response payload.
* The wrapper itself may carry `undefined`-valued fields, so narrow to
* `response` BEFORE parsing; only the response body is guaranteed pure JSON.
*/
function responsePayload(content) {
	if (typeof content === "object" && content !== null && "response" in content) return toJsonValue(content.response);
	return toJsonValue(content);
}
function chunkRows(row, chunkSize) {
	const chunkList = [];
	for (let start = 0; start < row.length; start += chunkSize) chunkList.push(row.slice(start, start + chunkSize));
	return chunkList;
}
function readNdjsonRows(path) {
	if (!existsSync(path)) return failure(`--input file not found: ${path}`);
	const content = readFileSync(path, "utf8");
	const row = [];
	const lineList = content.split("\n");
	for (const [index, line] of lineList.entries()) {
		if (line.trim() === "") continue;
		const parsed = JsonValueSchema.safeParse(safeJsonParse(line));
		if (!parsed.success) return failure(`--input line ${index + 1} is not valid JSON`, [line.slice(0, 120)]);
		row.push(parsed.data);
	}
	if (row.length === 0) return failure(`--input has no NDJSON rows: ${path}`);
	return success("input parsed", {
		row,
		digest: sha256(content)
	});
}
function readCheckpoint(path, inputDigest, chunkSize) {
	const empty = {
		inputDigest,
		chunkSize,
		completedChunk: []
	};
	if (path === void 0 || !existsSync(path)) return success("no checkpoint", empty);
	const parsed = safeJsonParse(readFileSync(path, "utf8"));
	if (parsed === void 0) return failure(`--checkpoint file is not valid JSON: ${path}`);
	const digest = pathValue(parsed, "inputDigest");
	const storedChunkSize = pathValue(parsed, "chunkSize");
	const completedChunk = pathValue(parsed, "completedChunk");
	if (digest !== inputDigest || storedChunkSize !== chunkSize) return failure(`--checkpoint ${path} was written for different input or chunk size`, ["Delete the checkpoint to start over, or restore the original input file."]);
	if (!Array.isArray(completedChunk)) return failure(`--checkpoint ${path} has an invalid completedChunk list`);
	const completedList = completedChunk.filter((value) => Number.isInteger(value));
	if (completedList.length !== completedChunk.length) return failure(`--checkpoint ${path} has an invalid completedChunk list`);
	return success("checkpoint loaded", {
		inputDigest,
		chunkSize,
		completedChunk: completedList
	});
}
function writeCheckpoint(path, inputDigest, chunkSize, completed) {
	if (path === void 0) return;
	const checkpoint = {
		inputDigest,
		chunkSize,
		completedChunk: [...completed].toSorted((left, right) => left - right)
	};
	writeFileSync(path, `${JSON.stringify(checkpoint)}\n`);
}
function collectRepeatable(value, previous) {
	return [...previous, value];
}
function safeJsonParse(content) {
	try {
		return JSON.parse(content);
	} catch {
		return;
	}
}
function sha256(content) {
	return createHash("sha256").update(content).digest("hex");
}
//#endregion
//#region aventure-cli/commands/builtin-batch.ts
/** Generic NDJSON export/run drivers resolved from generated OpenAPI command specs. */
function registerBuiltinBatchCommand(parent, specs) {
	const batch = parent.command("batch").summary("Export reads to NDJSON files and run bulk NDJSON writes").description("batch export pages a cursor read into an NDJSON file; batch run sends chunked NDJSON writes with bounded concurrency and checkpoint/resume. Dry-run by default; --execute commits. Resolve targets with command-catalog search|show first.");
	addExportCommand(batch, specs);
	addRunCommand(batch, specs);
}
function addExportCommand(parent, specs) {
	const command = parent.command("export").summary("Page a cursor read operation into an NDJSON row file").description([
		"Repeatedly call one generated cursor-paginated read operation and append",
		"every returned row to --out as NDJSON while stdout stays a compact summary.",
		"  aventure-cli batch export --command \"<resource> <area> <operation>\" \\",
		"    --from-file filter.json --query size=200 --out rows.ndjson"
	].join("\n")).requiredOption("--command <command>", "Generated CLI command path or operationId").option("--from-file <path>", "JSON request body sent on every page").option("--query <key=value>", "Query parameter, repeatable", collectRepeatable, []).requiredOption("--out <path>", "NDJSON output file; overwritten at start").option("--cursor <cursor>", "Starting cursor value").option("--cursor-param <name>", "Cursor query parameter name", "cursor").option("--rows-path <path>", "Dot path to the row array in the response", "row").option("--next-cursor-path <path>", "Dot path to the next cursor in the response", "nextCursor").option("--max-pages <count>", "Safety cap on pages fetched", "1000");
	addOutputModeOptions(command);
	command.action(async function() {
		const opts = this.optsWithGlobals();
		emit({ mode: resolveOutputMode(opts) }, await runExport(specs, opts));
	});
}
function addRunCommand(parent, specs) {
	const command = parent.command("run").summary("Send NDJSON rows through a batched write operation").description([
		"Chunk NDJSON rows into batched request bodies for one generated write",
		"operation and send them with bounded concurrency. Every chunk response is",
		"appended to --out as NDJSON; --checkpoint records completed chunks so an",
		"interrupted run resumes without resending them.",
		"",
		"Default is dry-run: it reports the chunk plan and sends nothing.",
		"  aventure-cli batch run --command \"<resource> <area> <operation>\" \\",
		"    --input rows.ndjson --array-field <bodyArrayField> --base base.json \\",
		"    --query sourceType=llm --query \"sourceDetail=...\" \\",
		"    --checkpoint state.json --out responses.ndjson --execute"
	].join("\n")).requiredOption("--command <command>", "Generated CLI command path or operationId").requiredOption("--input <path>", "NDJSON file; each line is one batch row").requiredOption("--array-field <name>", "Body field receiving each chunk of rows").option("--base <path>", "JSON file with fixed body fields merged into every chunk").option("--query <key=value>", "Query parameter, repeatable", collectRepeatable, []).requiredOption("--out <path>", "NDJSON file receiving one response line per chunk").option("--chunk-size <count>", "Rows per request body", "25").option("--concurrency <count>", `Concurrent requests, 1-8`, "2").option("--checkpoint <path>", "JSON checkpoint file for resume").option("--execute", "send the requests; default is a dry-run chunk plan", false).addOption(new Option("--no-halt-on-failure", "keep sending remaining chunks after a failed chunk"));
	addOutputModeOptions(command);
	command.action(async function() {
		const opts = this.optsWithGlobals();
		emit({ mode: resolveOutputMode(opts) }, await runBatch(specs, opts));
	});
}
async function runExport(specs, opts) {
	const spec = resolveSpec(specs, opts.command);
	if (!spec.ok || spec.data === null) return spec;
	if (spec.data.dryRun) return failure(`${opts.command} is a write operation; use \`batch run\``, [spec.data.path]);
	const guard = guardPathParameterFree(spec.data);
	if (!guard.ok) return guard;
	const query = parseQueryOptions(opts.query ?? []);
	if (!query.ok || query.data === null) return query;
	const maxPages = parseBoundedInt("--max-pages", opts.maxPages, 1, 1e6);
	if (!maxPages.ok || maxPages.data === null) return maxPages;
	const body = opts.fromFile === void 0 ? void 0 : await readJsonBody(opts.fromFile);
	if (body !== void 0 && !body.ok) return body;
	const requestBody = body === void 0 ? void 0 : asJsonRecord(body.data);
	if (body !== void 0 && requestBody === null) return failure("--from-file must contain a JSON object", [opts.fromFile ?? ""]);
	writeFileSync(opts.out, "");
	let cursor = opts.cursor;
	let pageCount = 0;
	let rowCount = 0;
	let exhausted = false;
	while (pageCount < maxPages.data) {
		const searchParams = {
			...query.data,
			...cursor === void 0 ? {} : { [opts.cursorParam]: cursor }
		};
		const envelope = await runOpenApiCall({
			method: spec.data.method,
			path: spec.data.path,
			searchParams,
			body: requestBody ?? void 0,
			auth: spec.data.auth,
			execute: false,
			responseFormat: "json"
		});
		if (!envelope.ok) return failure(`page ${pageCount + 1} failed: ${envelope.summary}`, [`rows already written to ${opts.out}: ${rowCount}`, ...cursor === void 0 ? [] : [`resume with --cursor "${cursor}"`]]);
		const response = responsePayload(envelope.data);
		const rowValue = pathValue(response, opts.rowsPath);
		if (!Array.isArray(rowValue)) return failure(`response has no array at --rows-path "${opts.rowsPath}"`, [`page ${pageCount + 1}`]);
		appendFileSync(opts.out, rowValue.map((row) => `${JSON.stringify(row)}\n`).join(""));
		pageCount += 1;
		rowCount += rowValue.length;
		const nextCursor = pathValue(response, opts.nextCursorPath);
		if (typeof nextCursor !== "string" || nextCursor === "" || nextCursor === cursor) {
			exhausted = true;
			break;
		}
		cursor = nextCursor;
	}
	return success(`${rowCount} rows across ${pageCount} pages written to ${opts.out}${exhausted ? "" : `; PARTIAL export — hit --max-pages ${maxPages.data}, resume with --cursor "${cursor}"`}`, {
		outPath: opts.out,
		exhausted,
		lastCursor: cursor
	}, { counts: {
		pageCount,
		rowCount
	} });
}
async function runBatch(specs, opts) {
	const spec = resolveSpec(specs, opts.command);
	if (!spec.ok || spec.data === null) return spec;
	if (!spec.data.dryRun) return failure(`${opts.command} is not a write operation; use \`batch export\``, [spec.data.path]);
	const guard = guardPathParameterFree(spec.data);
	if (!guard.ok) return guard;
	const query = parseQueryOptions(opts.query ?? []);
	if (!query.ok || query.data === null) return query;
	const chunkSize = parseBoundedInt("--chunk-size", opts.chunkSize, 1, 1e4);
	if (!chunkSize.ok || chunkSize.data === null) return chunkSize;
	const concurrency = parseBoundedInt("--concurrency", opts.concurrency, 1, 8);
	if (!concurrency.ok || concurrency.data === null) return concurrency;
	const base = opts.base === void 0 ? void 0 : await readJsonBody(opts.base);
	if (base !== void 0 && !base.ok) return base;
	const baseBody = asJsonRecord(base?.data ?? {});
	if (baseBody === null) return failure("--base must contain a JSON object", [opts.base ?? ""]);
	const input = readNdjsonRows(opts.input);
	if (!input.ok || input.data === null) return input;
	const chunkList = chunkRows(input.data.row, chunkSize.data);
	const checkpoint = readCheckpoint(opts.checkpoint, input.data.digest, chunkSize.data);
	if (!checkpoint.ok || checkpoint.data === null) return checkpoint;
	const completed = new Set(checkpoint.data.completedChunk);
	const pending = [...chunkList.keys()].filter((index) => !completed.has(index));
	if (opts.execute !== true) return success(`PREVIEW ONLY — nothing sent. ${pending.length} of ${chunkList.length} chunks (${input.data.row.length} rows) would ${spec.data.method} ${spec.data.path}. Re-run with --execute to send.`, {
		dryRun: true,
		method: spec.data.method,
		endpoint: spec.data.path,
		arrayField: opts.arrayField,
		outPath: opts.out
	}, { counts: {
		rowCount: input.data.row.length,
		chunkCount: chunkList.length,
		pendingChunkCount: pending.length,
		skippedChunkCount: completed.size
	} });
	writeFileSync(opts.out, "", { flag: completed.size > 0 ? "a" : "w" });
	const operation = spec.data;
	const searchParams = query.data;
	const inputDigest = input.data.digest;
	const rowsPerChunk = chunkSize.data;
	const failedChunk = [];
	let halted = false;
	let nextSlot = 0;
	const sendChunk = async (index) => {
		const chunk = chunkList[index] ?? [];
		const body = {
			...baseBody,
			[opts.arrayField]: chunk
		};
		const envelope = await runOpenApiCall({
			method: operation.method,
			path: operation.path,
			searchParams,
			body,
			auth: operation.auth,
			execute: true,
			responseFormat: "json"
		});
		const response = envelope.ok ? responsePayload(envelope.data) : null;
		appendFileSync(opts.out, `${JSON.stringify({
			chunk: index,
			rowCount: chunk.length,
			ok: envelope.ok,
			summary: envelope.summary,
			response: response ?? envelope.data ?? null
		})}\n`);
		if (envelope.ok) {
			completed.add(index);
			writeCheckpoint(opts.checkpoint, inputDigest, rowsPerChunk, completed);
			return true;
		}
		failedChunk.push(index);
		return false;
	};
	const worker = async () => {
		while (!halted) {
			const index = pending[nextSlot];
			nextSlot += 1;
			if (index === void 0) return;
			if (!await sendChunk(index) && opts.haltOnFailure) halted = true;
		}
	};
	await Promise.all(Array.from({ length: concurrency.data }, worker));
	const summaryCounts = {
		rowCount: input.data.row.length,
		chunkCount: chunkList.length,
		completedChunkCount: completed.size,
		failedChunkCount: failedChunk.length,
		remainingChunkCount: chunkList.length - completed.size - failedChunk.length
	};
	const context = {
		outPath: opts.out,
		checkpointPath: opts.checkpoint,
		failedChunk,
		halted
	};
	if (failedChunk.length > 0) return failure(`${failedChunk.length} chunk(s) failed; responses in ${opts.out}${opts.checkpoint === void 0 ? "" : `, resume via --checkpoint ${opts.checkpoint}`}`, [JSON.stringify({
		...context,
		...summaryCounts
	})]);
	return success(`${completed.size}/${chunkList.length} chunks sent; responses in ${opts.out}`, context, { counts: summaryCounts });
}
//#endregion
//#region aventure-cli/commands/completion.ts
function registerCompletionCommand(parent, specs = GENERATED_OPENAPI_COMMAND_SPECS) {
	const completion = parent.command("completion").summary("Generate shell completion scripts").description("Generate shell completion scripts for the aVenture CLI.");
	for (const shell of [
		"bash",
		"fish",
		"zsh"
	]) completion.command(shell).summary(`Print ${shell} shell completions`).description(`Print ${shell} completion definitions for aventure-cli and aventure.`).action(() => {
		process$1.stdout.write(renderCompletion(parent, shell, specs));
	});
	registerCompletionInstallCommands(completion);
	registerCompletionSetupCommand(completion);
}
function completionBins() {
	return Object.keys(package_default.aventurePublish.variants.cli.bin);
}
function renderCompletion(root, shell, specs = GENERATED_OPENAPI_COMMAND_SPECS, bins = completionBins()) {
	const generated = generatedParameterIndex(specs);
	if (shell !== "fish") return renderTableCompletion(root, shell, generated, bins);
	return [
		`# fish completions for ${bins.join(", ")}`,
		...fishFunctions(root),
		...bins.map((bin) => `complete -c ${fishQuote(bin)} -e`),
		`${fishComplete(bins)} -f`,
		...fishCommandLines(root, bins),
		...optionCompletionLines(root, generated, bins),
		""
	].join("\n");
}
function renderTableCompletion(root, shell, generated, bins) {
	const declaration = shell === "zsh" ? "typeset -ga " : "";
	const bashComplete = `complete -F _aventure_cli ${bins.map((bin) => bin.replaceAll("'", "'\\''")).join(" ")}`;
	const [commandRows, optionRows, valueRows] = tableRows(root, generated);
	return [
		...shell === "zsh" ? [`#compdef ${bins.join(" ")}`] : [],
		`# ${shell} completions for ${bins.join(", ")}`,
		`${declaration}_aventure_cli_commands=(`,
		...commandRows.map((row) => `  ${row}`),
		")",
		`${declaration}_aventure_cli_options=(`,
		...optionRows.map((row) => `  ${row}`),
		")",
		`${declaration}_aventure_cli_values=(`,
		...valueRows.map((row) => `  ${row}`),
		")",
		"",
		...shellCompletionFunctionLines(shell),
		...shell === "bash" ? [bashComplete, ""] : [""]
	].join("\n");
}
function fishFunctions(root) {
	return [`function __aventure_cli_command_path\n    set -l global_value_options ${commandOptions(root).filter((option) => option.required || option.optional).flatMap((option) => optionLongName(option) ?? []).map(fishQuote).join(" ")}\n    set -l tokens (commandline -xpc)\n    if test (count $tokens) -gt 0\n        set -e tokens[1]\n    end\n    set -l path\n    set -l skip_next 0\n    for token in $tokens\n        if test $skip_next -eq 1\n            set skip_next 0\n            continue\n        end\n        if string match -q -- '--*=*' $token\n            set -l name (string replace -r '^--([^=]+)=.*$' '$1' -- $token)\n            contains -- $name $global_value_options; and continue\n        end\n        if string match -q -- '--*' $token\n            set -l name (string replace -r '^--' '' -- $token)\n            if contains -- $name $global_value_options\n                set skip_next 1\n                continue\n            end\n            break\n        end\n        if string match -q -- '-*' $token\n            break\n        end\n        set -a path $token\n    end\n    printf '%s\\n' $path\nend\n`, "function __aventure_cli_path_is\n    set -l expected $argv\n    set -l actual (__aventure_cli_command_path)\n    if test (count $actual) -ne (count $expected)\n        return 1\n    end\n    if test (count $expected) -eq 0\n        return 0\n    end\n    for index in (seq (count $expected))\n        if test $actual[$index] != $expected[$index]\n            return 1\n        end\n    end\n    return 0\nend\n"].flatMap((block) => block.split("\n"));
}
function fishCommandLines(root, bins) {
	return commandEntries(root).map((entry) => `${fishComplete(bins)} -f -n ${fishQuote(pathCondition(entry.parentPath))} -a ${fishQuote(entry.name)} -d ${fishQuote(entry.description)}`).toSorted((left, right) => left.localeCompare(right));
}
function optionCompletionLines(root, generated, bins) {
	return allCommands(root).flatMap((command) => {
		const path = commandPath$1(command);
		const condition = path.length === 0 ? void 0 : pathCondition(path);
		return commandOptions(command).flatMap((option) => {
			const generatedParameter = generated.get(generatedParameterKey(path, option));
			return completionParameterVisible(generatedParameter) ? fishOptionLines(option, condition, generatedParameter, bins) : [];
		});
	}).toSorted((left, right) => left.localeCompare(right));
}
function commandOptions(command) {
	return command.parent === null ? command.createHelp().visibleOptions(command) : command.options;
}
function fishOptionLines(option, condition, generated, bins) {
	const longName = optionLongName(option);
	if (longName === void 0) return [];
	const choices = option.argChoices ?? generated?.choices;
	const optionFlags = [`-l ${fishQuote(longName)}`, option.short === void 0 ? "" : `-s ${fishQuote(option.short.replace(/^-/, ""))}`].filter(Boolean);
	const conditionFlag = condition === void 0 ? "" : ` -n ${fishQuote(condition)}`;
	const valueFlags = option.required || option.optional ? valueCompletionFlags(choices, forceFileCompletion(longName, generated)) : "-f";
	const base = `${fishComplete(bins)}${conditionFlag} ${optionFlags.join(" ")} ${valueFlags}`;
	if (choices === void 0 || choices.length === 0) return [`${base} -d ${fishQuote(oneLine(option.description))}`];
	return choices.map((choice) => `${base} -a ${fishQuote(choice)} -d ${fishQuote(oneLine(option.description))}`);
}
function valueCompletionFlags(choices, forceFiles) {
	if (choices !== void 0 && choices.length > 0) return "-x";
	return forceFiles ? "-r -F" : "-r -f";
}
function forceFileCompletion(longName, generated) {
	if (longName === "from-file") return true;
	if (generated?.location !== "body") return false;
	if (generated.schemaFormat === "binary") return true;
	return ["file", "path"].includes(longName.split("-").at(-1) ?? "");
}
function generatedParameterIndex(specs) {
	return new Map(specs.flatMap((spec) => [...spec.parameters, ...spec.bodyParameters].map((parameter) => [generatedParameterKey(spec.cliPath, parameter), parameter])));
}
function generatedParameterKey(path, value) {
	const option = "flag" in value ? value.flag.split(/\s+/)[0]?.replace(/^--/, "") : optionLongName(value);
	if ("flag" in value && (option === void 0 || option.length === 0 || option === value.flag)) throw new Error(`Cannot render completion for option flag: ${value.flag}`);
	return `${path.join("\0")}\u0000${option ?? ""}`;
}
function commandEntries(root) {
	return allCommands(root).flatMap((parent) => parent.commands.map((child) => ({
		parentPath: commandPath$1(parent),
		name: child.name(),
		description: oneLine(child.summary() || child.description() || child.name())
	})));
}
function tableRows(root, generated) {
	const options = [];
	const values = [];
	for (const command of allCommands(root)) {
		const path = commandPath$1(command);
		for (const option of commandOptions(command)) {
			const longName = optionLongName(option);
			if (longName === void 0) continue;
			const generatedParameter = generated.get(generatedParameterKey(path, option));
			if (!completionParameterVisible(generatedParameter)) continue;
			const choices = option.argChoices ?? generatedParameter?.choices;
			let mode = "none";
			if (option.required || option.optional) {
				mode = choices !== void 0 && choices.length > 0 ? "choice" : "scalar";
				if (mode === "scalar" && forceFileCompletion(longName, generatedParameter)) mode = "file";
			}
			options.push(completionRow([
				path.join(" "),
				`--${longName}`,
				option.short ?? "",
				option.description,
				mode
			]));
			for (const choice of choices ?? []) values.push(completionRow([
				path.join(" "),
				`--${longName}`,
				choice,
				option.description
			]));
		}
	}
	return [
		commandEntries(root).map((entry) => completionRow([
			entry.parentPath.join(" "),
			entry.name,
			entry.description
		])).toSorted((left, right) => left.localeCompare(right)),
		options.toSorted((left, right) => left.localeCompare(right)),
		values.toSorted((left, right) => left.localeCompare(right))
	];
}
function completionParameterVisible(generated) {
	return generated?.visibility !== "private";
}
function shellCompletionFunctionLines(shell) {
	const bash = shell === "bash";
	const word = bash ? "COMP_WORDS" : "words";
	const cursor = bash ? "COMP_CWORD" : "CURRENT";
	const keyExpression = bash ? "${path[*]}" : "${(j: :)path}";
	const optionRowsExpression = bash ? "\"${_aventure_cli_options[@]}\"" : "$_aventure_cli_options";
	const valueRowsExpression = bash ? "\"${_aventure_cli_values[@]}\"" : "$_aventure_cli_values";
	const commandRowsExpression = bash ? "\"${_aventure_cli_commands[@]}\"" : "$_aventure_cli_commands";
	return [
		"function _aventure_cli {",
		`  local current="\${${word}[${cursor}]}" previous="\${${word}[${cursor}-1]}" row row_path long short description mode name value option token key prefix candidate file_current`,
		...bash ? ["  COMPREPLY=()"] : [],
		`  local index=${bash ? 1 : 2} skip_next=0; local -a path names descriptions`,
		`  while (( index < ${cursor} )); do`,
		`    token="\${${word}[index]}"; (( skip_next )) && { skip_next=0; (( index++ )); continue; }`,
		"    if [[ \"$token\" == -* && \"$token\" != \"-\" && \"$token\" != \"--\" ]]; then",
		`      option="\${token%%=*}"; key="${keyExpression}"; mode=''`,
		`      for row in ${optionRowsExpression}; do IFS='|' read -r row_path long short description mode <<< "$row"; [[ "$row_path" == "$key" && ( "$long" == "$option" || "$short" == "$option" ) ]] && break; mode=''; done`,
		"      [[ -n \"$mode\" && \"$mode\" != none && \"$token\" != *=* ]] && skip_next=1",
		"    elif [[ \"$token\" != -* ]]; then path+=(\"$token\"); fi",
		"    (( index++ ))",
		"  done",
		`  key="${keyExpression}"`,
		"  if [[ \"$current\" == --*=* || ( \"$previous\" == -* && \"$current\" != -* ) ]]; then",
		`    option="$previous"; prefix=''; file_current="$current"; [[ "$current" == --*=* ]] && { option="\${current%%=*}"; prefix="$option="; file_current="\${current#*=}"; }`,
		`    for row in ${optionRowsExpression}; do IFS='|' read -r row_path long short description mode <<< "$row"; [[ "$row_path" == "$key" && ( "$long" == "$option" || "$short" == "$option" ) ]] && { option="$long"; break; }; mode=''; done`,
		bash ? "    [[ \"$mode\" == file ]] && { while IFS= read -r candidate; do COMPREPLY+=(\"$prefix$candidate\"); done < <(compgen -f -- \"$file_current\"); return 0; }" : "    [[ \"$mode\" == file ]] && { _files; return 0; }",
		bash ? `    [[ "$mode" == choice ]] && for row in ${valueRowsExpression}; do IFS='|' read -r row_path long value description <<< "$row"; [[ "$row_path" == "$key" && "$long" == "$option" ]] && { candidate="$prefix$value"; [[ "$candidate" == "$current"* ]] && COMPREPLY+=("$candidate"); }; done` : `    [[ "$mode" == choice ]] && for row in ${valueRowsExpression}; do IFS='|' read -r row_path long value description <<< "$row"; [[ "$row_path" == "$key" && "$long" == "$option" ]] && { names+=("$prefix$value"); descriptions+=("$description"); }; done`,
		"  elif [[ \"$current\" == -* ]]; then",
		`    for row in ${optionRowsExpression}; do`,
		"      IFS='|' read -r row_path long short description mode <<< \"$row\"",
		bash ? "      [[ \"$row_path\" == \"$key\" ]] && { [[ \"$long\" == \"$current\"* ]] && COMPREPLY+=(\"$long\"); [[ -n \"$short\" && \"$short\" == \"$current\"* ]] && COMPREPLY+=(\"$short\"); }" : "      [[ \"$row_path\" == \"$key\" ]] && { names+=(\"$long\"); descriptions+=(\"$description\"); [[ -n \"$short\" ]] && { names+=(\"$short\"); descriptions+=(\"$description\"); }; }",
		"    done",
		"  elif [[ \"$previous\" != -* ]]; then",
		`    for row in ${commandRowsExpression}; do`,
		"      IFS='|' read -r row_path name description <<< \"$row\"",
		bash ? "      [[ \"$row_path\" == \"$key\" ]] && { [[ \"$name\" == \"$current\"* ]] && COMPREPLY+=(\"$name\"); }" : "      [[ \"$row_path\" == \"$key\" ]] && { names+=(\"$name\"); descriptions+=(\"$description\"); }",
		"    done",
		"  fi",
		...bash ? [] : ["  (( ${#names} )) && compadd -d descriptions -a names"],
		"  return 0",
		"}",
		...bash ? [] : ["_aventure_cli \"$@\""]
	];
}
function completionRow(parts) {
	return `$'${parts.map(shellEscape).join("|")}'`;
}
function shellEscape(value) {
	return oneLine(value).replaceAll("\\", "\\\\").replaceAll("'", "\\'").replaceAll("|", " ");
}
function optionLongName(option) {
	return option.long?.replace(/^--/, "");
}
function allCommands(root) {
	return [root, ...root.commands.flatMap((command) => allCommands(command))];
}
function commandPath$1(command) {
	const path = [];
	for (let current = command; current?.parent !== null; current = current.parent) path.unshift(current.name());
	return path;
}
function fishComplete(bins) {
	return `complete ${bins.map((bin) => `-c ${fishQuote(bin)}`).join(" ")}`;
}
function pathCondition(path) {
	return ["__aventure_cli_path_is", ...path.map(fishQuote)].join(" ");
}
function oneLine(value) {
	return value.replace(/\s+/g, " ").trim();
}
function fishQuote(value) {
	return `'${value.replace(/[\r\n\t]/g, " ").replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
//#endregion
//#region aventure-cli/commands/payload-operand-guard.ts
/**
* A JSON request body is never a positional CLI input.
*
* Callers who read an output-mode flag as a request-body flag pass a payload next to it. On a leaf
* declaring a variadic positional, Commander raises nothing: the payload is accepted as the search
* term and matched verbatim, so the call returns zero rows under a success exit code and reads as
* "no such record". Reject it where Commander resolves operands, so the mistake surfaces as a
* usage error rather than a successful empty result.
*/
function rejectPayloadOperand(hookCommand, actionCommand) {
	if (hookCommand !== actionCommand) return;
	const hint = payloadOperandHint(actionCommand);
	if (hint === void 0) return;
	actionCommand.error(`error: ${commandName(actionCommand)} takes text input, not a JSON object.\n${hint}`, { code: "aventure.payloadOperand" });
}
/**
* Return the corrective text for a JSON object that Commander parsed as an operand. This covers
* parse-time errors too, where Commander rejects the operand before it reaches the action hook.
*/
function payloadOperandHint(command) {
	if (process.argv.includes("--")) return void 0;
	if (!command.args.some(isJsonObjectLiteral)) return void 0;
	return "hint: use the command's named options instead of a JSON payload; run --help to list them.";
}
function isJsonObjectLiteral(value) {
	if (!value.startsWith("{")) return false;
	try {
		return typeof JSON.parse(value) === "object";
	} catch {
		return false;
	}
}
function commandName(command) {
	const path = [];
	for (let node = command; node?.parent; node = node.parent) path.unshift(node.name());
	return path.join(" ");
}
//#endregion
//#region aventure-cli/commands/missing-option-hint.ts
/**
* Generated command-tree recovery for Commander parse errors.
*
* Commander owns same-command spelling suggestions. These handlers add only
* recovery that requires the completed generated tree or command catalog, and
* keep every hint on stderr so the stdout envelope channel stays clean.
*/
function missingRequiredFlag(error) {
	return error.message.match(/required option '([^']+)' not specified/iu)?.[1]?.split(/\s+/u)[0];
}
function unknownFlag(error) {
	return error.message.match(/unknown option '([^']+)'/iu)?.[1];
}
function unknownCommand(error) {
	return error.message.match(/unknown command '([^']+)'/iu)?.[1];
}
function flagName(option) {
	return option.flags.split(" ")[0] ?? option.flags;
}
function missingParentSelectorHint(failed, error) {
	const missing = missingRequiredFlag(error);
	if (missing === void 0) return void 0;
	const missingIndex = failed.options.findIndex((option) => flagName(option) === missing);
	if (missingIndex < 0) return void 0;
	const suppliedChildSelector = failed.options.slice(missingIndex + 1).filter((option) => option.mandatory).map((option) => [flagName(option), failed.getOptionValue(option.attributeName())]).find(([, value]) => typeof value === "string" && value.length > 0)?.[0];
	if (suppliedChildSelector === void 0) return void 0;
	return `hint: ${missing} is still required for this nested command; supplied child selector ${suppliedChildSelector} does not replace the parent selector.`;
}
function commandPath(command) {
	const path = [];
	for (let node = command; node !== null && node.parent !== null; node = node.parent) path.unshift(node.name());
	return path;
}
function leafCommands(command) {
	if (command.commands.length === 0) return [command];
	return command.commands.flatMap(leafCommands);
}
function relativePath(parent, descendant) {
	return commandPath(descendant).slice(commandPath(parent).length);
}
function rootCommand(command) {
	let root = command;
	while (root.parent !== null) root = root.parent;
	return root;
}
function preferredLeaf(parent, candidates) {
	return candidates.toSorted((left, right) => {
		const leftPath = relativePath(parent, left);
		const rightPath = relativePath(parent, right);
		const leftDefault = leftPath.at(-1) === "get" ? 0 : 1;
		const rightDefault = rightPath.at(-1) === "get" ? 0 : 1;
		return leftPath.length - rightPath.length || leftDefault - rightDefault;
	})[0];
}
function shellArgument(argument) {
	return /^[A-Za-z0-9_./:=@+-]+$/u.test(argument) ? argument : `'${argument.replaceAll("'", `'"'"'`)}'`;
}
function invocationWithLeaf(failed, leaf) {
	const failedPath = commandPath(failed);
	const supplied = process.argv.slice(2 + failedPath.length);
	return [
		rootCommand(failed).name(),
		...failedPath,
		...relativePath(failed, leaf),
		...supplied
	].map(shellArgument).join(" ");
}
function descendantFlagHint(failed, error) {
	const unknown = unknownFlag(error);
	if (unknown === void 0 || failed.commands.length === 0) return void 0;
	const leaf = preferredLeaf(failed, leafCommands(failed).filter((leaf) => leaf.options.some((option) => flagName(option) === unknown)));
	if (leaf === void 0) return void 0;
	return `hint: run: ${invocationWithLeaf(failed, leaf)}`;
}
function generatedNamespace(segment) {
	return segment !== void 0 && Object.hasOwn(GENERATED_CLI_NAMESPACES, segment);
}
function commandAt(root, path) {
	let current = root;
	for (const segment of path) {
		const child = current.commands.find((command) => command.name() === segment);
		if (child === void 0) return void 0;
		current = child;
	}
	return current;
}
function rootEquivalentGeneratedPath(failed, unknown) {
	const failedPath = commandPath(failed);
	const candidatePath = [...failedPath.slice(1), unknown];
	if (!generatedNamespace(failedPath.at(0)) || !generatedNamespace(candidatePath.at(0))) return;
	const rootCandidate = commandAt(rootCommand(failed), candidatePath);
	if (rootCandidate === void 0) return void 0;
	let candidate = rootCandidate;
	for (const argument of process.argv.slice(2 + failedPath.length + 1)) {
		if (argument.startsWith("-")) break;
		const child = candidate.commands.find((command) => command.name() === argument);
		if (child === void 0) break;
		candidatePath.push(argument);
		candidate = child;
	}
	return candidatePath;
}
function rootLeafGeneratedPath(failed, unknown) {
	const [activeRoot] = commandPath(failed);
	if (!generatedNamespace(activeRoot)) return void 0;
	const candidatePath = [activeRoot, unknown];
	return commandAt(rootCommand(failed), candidatePath)?.commands.length === 0 ? candidatePath : void 0;
}
function suppliedCommandWords(command) {
	const [unknown, ...supplied] = command.args;
	if (unknown === void 0) return [];
	const commandPaths = leafCommands(rootCommand(command)).map(commandPath);
	const wordEnd = supplied.findIndex((word, index) => {
		const candidate = [...supplied.slice(0, index), word];
		return !commandPaths.some((path) => path.some((segment, start) => segment === candidate[0] && candidate.every((candidateWord, offset) => path[start + offset] === candidateWord)));
	});
	return [unknown, ...wordEnd < 0 ? supplied : supplied.slice(0, wordEnd)];
}
/**
* Wrong-namespace leaf recovery: when the invocation fails at a wrong root/group but the remaining
* words name a generated leaf elsewhere (`entities media get` → `media get`), hint the runnable
* command instead of a catalog search. An exact full-path match wins (a valid path typed under a
* wrong parent, e.g. `media jobs get` → `jobs get`); otherwise a single unique cross-namespace
* suffix match; ambiguity (two or more matches) falls through to the catalog-search hint.
*/
function crossNamespaceLeafHint(failed, words) {
	const failedPath = commandPath(failed);
	const supplied = process.argv.slice(2 + failedPath.length);
	if (words.length === 0 || words.some((word, index) => supplied[index] !== word)) return void 0;
	const matches = visibleOpenApiCommandSpecsForCurrentAuth(GENERATED_OPENAPI_COMMAND_SPECS).map((spec) => spec.cliPath).filter((cliPath) => cliPath[0] !== failedPath[0] && cliPath.length >= words.length && words.every((word, index) => cliPath[cliPath.length - words.length + index] === word));
	const resolved = matches.find((cliPath) => cliPath.length === words.length && cliPath.every((word, i) => word === words[i])) ?? (matches.length === 1 ? matches[0] : void 0);
	if (resolved === void 0) return void 0;
	return `hint: run: ${[rootCommand(failed).name(), ...resolved].map(shellArgument).join(" ")}`;
}
/**
* Spurious-group recovery: `entities detail get` names a real generated leaf once the intermediate
* group is dropped, so hand back the runnable command with the caller's flags rather than a catalog
* search they still have to translate. Operands typed before the first flag are prose, not input.
*/
function droppedGroupLeafHint(failed, leafPath, words) {
	if (!generatedCommandPath(leafPath)) return void 0;
	const tail = failed.args.slice(words.length);
	const firstFlag = tail.findIndex((argument) => argument.startsWith("-"));
	return `hint: Did you mean: ${[
		rootCommand(failed).name(),
		...leafPath,
		...firstFlag < 0 ? [] : tail.slice(firstFlag)
	].map(shellArgument).join(" ")}`;
}
function generatedGroupHelpHint(failed) {
	const path = commandPath(failed);
	if (path.at(1) === void 0 || !generatedNamespace(path.at(0))) return void 0;
	return `hint: inspect generated command group: ${[
		rootCommand(failed).name(),
		...path,
		"--help"
	].map(shellArgument).join(" ")}`;
}
/**
* Does a generated spec own this exact command path, by canonical or alias path? `writeLane`
* narrows the match to write (dry-run) or read specs; omit it to accept either.
*/
function generatedCommandPath(path, writeLane) {
	const pathKey = path.join(" ");
	return GENERATED_OPENAPI_COMMAND_SPECS.some((spec) => {
		const aliasPath = "cliAliasPath" in spec ? spec.cliAliasPath : void 0;
		if (spec.cliPath.join(" ") !== pathKey && aliasPath?.join(" ") !== pathKey) return false;
		return writeLane === void 0 || spec.dryRun === writeLane;
	});
}
function generatedCommandHelpHint(failed) {
	const path = commandPath(failed);
	if (!generatedNamespace(path.at(0)) || !generatedCommandPath(path)) return void 0;
	return `hint: inspect generated command: ${[
		rootCommand(failed).name(),
		...path,
		"--help"
	].map(shellArgument).join(" ")}`;
}
/**
* Flags the CLI registers on a generated leaf solely because its spec is dry-run: carried by every
* write leaf and by no read leaf, which today means `--execute`. Deriving the set from the built
* tree keeps the hint correct when the write-lane flag is renamed at its registration owner.
*/
function dryRunOnlyFlag(root) {
	const readFlag = /* @__PURE__ */ new Set();
	const writeLeafFlag = [];
	for (const spec of GENERATED_OPENAPI_COMMAND_SPECS) {
		const leaf = commandAt(root, spec.cliPath);
		if (leaf === void 0) continue;
		const flag = leaf.options.map(flagName);
		if (spec.dryRun) writeLeafFlag.push(flag);
		else for (const name of flag) readFlag.add(name);
	}
	const [firstWriteLeafFlag = [], ...remainingWriteLeafFlag] = writeLeafFlag;
	return new Set(firstWriteLeafFlag.filter((name) => !readFlag.has(name) && remainingWriteLeafFlag.every((other) => other.includes(name))));
}
/**
* `--execute` exists only on write leaves, so a catalog search for it from a read command can only
* come back empty. Name the read/write rule that made the flag unavailable instead.
*/
function writeLaneFlagHint(failed, unknown) {
	const path = commandPath(failed);
	if (!generatedCommandPath(path, false)) return void 0;
	if (!dryRunOnlyFlag(rootCommand(failed)).has(unknown)) return void 0;
	return `hint: ${path.join(" ")} is a read operation; ${unknown} applies only to write operations (catalog dryRunSupported=true)`;
}
function commandCatalogSearchHint(failed, query, filterActiveRoot = true) {
	const root = rootCommand(failed);
	const catalog = root.commands.find((command) => command.name() === "command-catalog");
	const search = catalog?.commands.find((command) => command.name() === "search");
	if (catalog === void 0 || search === void 0) return void 0;
	const invocation = [
		root.name(),
		catalog.name(),
		search.name(),
		query
	];
	const activeRoot = commandPath(failed).at(0);
	const rootFilter = search.options.find((option) => flagName(option) === "--root");
	if (filterActiveRoot && activeRoot !== void 0 && rootFilter !== void 0 && generatedNamespace(activeRoot)) invocation.push(flagName(rootFilter), activeRoot);
	return `hint: search generated commands: ${invocation.map(shellArgument).join(" ")}`;
}
function unknownCommandHint(failed, error) {
	const unknown = unknownCommand(error);
	if (unknown === void 0) return void 0;
	if (error.message.includes("\n(Did you mean ")) return void 0;
	const commandWords = suppliedCommandWords(failed);
	const leafHint = crossNamespaceLeafHint(failed, commandWords);
	if (leafHint !== void 0) return leafHint;
	const rootEquivalentPath = rootEquivalentGeneratedPath(failed, unknown);
	if (rootEquivalentPath !== void 0) return commandCatalogSearchHint(failed, rootEquivalentPath.join(" "), false);
	const rootLeafPath = rootLeafGeneratedPath(failed, unknown);
	if (rootLeafPath !== void 0) return droppedGroupLeafHint(failed, rootLeafPath, commandWords) ?? commandCatalogSearchHint(failed, rootLeafPath.join(" "), false);
	const query = commandWords.join(" ") || unknown;
	return generatedGroupHelpHint(failed) ?? commandCatalogSearchHint(failed, query);
}
/**
* Build a Commander `exitOverride` callback bound to one command. For a missing
* required option it names the full missing-required set in one line (Commander
* itself reports only the first), then exits with the code Commander chose.
* Unknown commands, descendant flags, and excess operands receive only exact
* generated-tree or catalog guidance.
*/
function commandExitHandler(command) {
	return (error) => {
		if (error.code === "commander.missingMandatoryOptionValue") {
			const missing = command.options.filter((option) => option.mandatory && command.getOptionValue(option.attributeName()) === void 0);
			if (missing.length > 1) {
				const flags = missing.map((option) => option.flags.split(", ").at(-1) ?? option.flags);
				process.stderr.write(`error: missing required options: ${flags.join(", ")}\n`);
			}
			for (const hint of [payloadOperandHint(command), missingParentSelectorHint(command, error)]) if (hint !== void 0) process.stderr.write(`${hint}\n`);
		} else if (error.code === "commander.excessArguments") {
			const hint = payloadOperandHint(command) ?? generatedCommandHelpHint(command);
			if (hint !== void 0) process.stderr.write(`${hint}\n`);
		} else if (error.code === "commander.unknownOption") {
			const unknown = unknownFlag(error);
			const hint = descendantFlagHint(command, error) ?? (unknown !== void 0 && !error.message.includes("\n(Did you mean ") ? writeLaneFlagHint(command, unknown) ?? commandCatalogSearchHint(command, unknown.replace(/^--/u, "")) : void 0);
			if (hint !== void 0) process.stderr.write(`${hint}\n`);
		} else if (error.code === "commander.unknownCommand") {
			const hint = unknownCommandHint(command, error);
			if (hint !== void 0) process.stderr.write(`${hint}\n`);
		}
		process.exit(error.exitCode);
	};
}
/**
* Help option for a command that only dispatches to children. Commander resolves `--help` before it
* reports an unknown subcommand (`_parseCommand` runs `_outputHelpIfRequested` ahead of
* `unknownCommand`), so `aventure-cli entity get --help` printed the root usage and exited 0. This
* option stands down once the first operand names no child, which lets the unknown-command error —
* carrying Commander's own spelling suggestion — run instead of a usage dump.
*/
var GroupHelpOption = class extends Option {
	group;
	constructor(group) {
		super("-h, --help", "display help for command");
		this.group = group;
	}
	is(argument) {
		if (argument !== this.short && argument !== this.long) return false;
		const operand = this.group.args.at(0);
		if (operand === void 0 || operand.startsWith("-")) return true;
		return this.group.commands.some((child) => child.name() === operand || child.aliases().includes(operand));
	}
};
/**
* Install error handlers only after the full command tree exists. Commander copies exit settings
* when a child is added, so a late root override does not reach existing children. Binding every
* node also catches root and group errors before they can reach a generated leaf.
*/
function installMissingOptionExitHandlers(command) {
	command.showHelpAfterError(false).exitOverride(commandExitHandler(command));
	if (command.commands.length === 0) command.hook("preAction", rejectPayloadOperand);
	else command.addHelpOption(new GroupHelpOption(command));
	for (const child of command.commands) installMissingOptionExitHandlers(child);
}
/** Package-relative location of that shipped compact catalog. */
var COMPACT_CATALOG_PACKAGE_PATH = `dist/aventure-cli/command-catalog.compact.txt`;
/** Field separator for compact rows; one middle dot keeps a row narrow and still splittable. */
var COMPACT_FIELD_SEPARATOR = " · ";
/** Required-flag field for an operation that requires no flag. */
var COMPACT_NO_REQUIRED_FLAG = "-";
/** Absolute path of the compact catalog shipped with this install, for offline `grep`. */
function compactCatalogPath() {
	return resolve(packageRoot(dirname(fileURLToPath(import.meta.url))), COMPACT_CATALOG_PACKAGE_PATH);
}
function packageRoot(from) {
	let directory = from;
	for (;;) {
		if (existsSync(resolve(directory, "package.json"))) return directory;
		const parent = dirname(directory);
		if (parent === directory) throw new Error(`No package.json above ${from}; aventure-cli is not in a package layout.`);
		directory = parent;
	}
}
function withQuery(opts, query) {
	const positional = query.join(" ").trim();
	if (positional.length === 0) return opts;
	return {
		...opts,
		q: opts.q === void 0 ? positional : `${opts.q} ${positional}`
	};
}
function writeSearchResult(opts, specs, mode) {
	const result = searchOperations(opts, specs);
	if (!result.ok) {
		emit({ mode }, result);
		return;
	}
	writeOperationResult({
		opts,
		mode,
		data: result.data,
		defaultFormat: "lines",
		rendered: renderCatalog(result.data, resolveFormat(opts.format, "lines")),
		summary: "Generated operation matches"
	});
}
function writeShowResult(opts, specs, mode) {
	const result = showOperation(opts, specs);
	if (!result.ok || result.data === null) {
		emit({ mode }, result);
		return;
	}
	writeOperationResult({
		opts,
		mode,
		data: result.data,
		defaultFormat: "usage",
		rendered: renderDetail(result.data, resolveFormat(opts.format, "usage")),
		summary: "Generated operation detail"
	});
}
function writeOperationResult(input) {
	const mode = input.mode;
	const withTerminator = input.rendered.endsWith("\n") ? input.rendered : `${input.rendered}\n`;
	if (input.opts.output !== void 0) {
		writeFileSync(input.opts.output, withTerminator);
		emit({ mode }, success(input.summary, {
			outputPath: input.opts.output,
			byteLength: Buffer.byteLength(withTerminator, "utf8"),
			format: resolveFormat(input.opts.format, input.defaultFormat)
		}, { counts: resultCounts(input.data) }));
		return;
	}
	if (mode === "text") {
		process.stdout.write(withTerminator);
		return;
	}
	emit({ mode }, success(input.summary, input.data, { counts: resultCounts(input.data) }));
}
function resolveFormat(value, fallback) {
	return value ?? fallback;
}
function renderCatalog(data, format) {
	if (format === "json") return JSON.stringify(data, null, 2);
	if (format === "ndjson") return data.operation.map((operation) => JSON.stringify(operation)).join("\n");
	if (format === "text") return renderTextRows(data.operation);
	if (format === "compact") return data.operation.map(compactLineForOperation).join("\n");
	return data.operation.map(lineForOperation).join("\n");
}
function renderDetail(data, format) {
	if (format === "json") return JSON.stringify(data, null, 2);
	if (format === "ndjson") return JSON.stringify(data.operation);
	if (format === "lines") return lineForOperation(data.operation);
	if (format === "compact") return compactLineForOperation(data.operation);
	return data.usage;
}
function compactLineForOperation(operation) {
	const requiredFlags = requiredFlagNames(operation);
	return [
		operation.cli.command,
		operation.summary,
		requiredFlags.length === 0 ? COMPACT_NO_REQUIRED_FLAG : requiredFlags.join(" ")
	].join(COMPACT_FIELD_SEPARATOR);
}
function requiredFlagNames(operation) {
	return operation.flags.filter((flag) => flag.required).map((flag) => flag.name);
}
function renderTextRows(operations) {
	return operations.map((operation) => `${operation.cli.command}\n  ${lineForOperation(operation)}`).join("\n");
}
function lineForOperation(operation) {
	const requiredFlags = requiredFlagNames(operation);
	return [
		lineField("operationId", operation.operationId),
		lineField("scope", operation.scope),
		lineField("mutates", String(operation.mutates)),
		lineField("destructive", String(operation.destructive)),
		lineField("intent", operation.intent),
		lineField("resource", operation.resource),
		lineField("cli", operation.cli.command),
		operation.cli.alias === null ? "" : lineField("alias", operation.cli.alias),
		lineField("mcpTool", operation.mcpTool),
		lineField("method", operation.method),
		lineField("path", operation.path),
		lineField("auth", operation.auth),
		lineField("dryRunSupported", String(operation.dryRunSupported)),
		lineField("flags", operation.flags.map((flag) => flag.name).join(" ")),
		lineField("requiredFlags", requiredFlags.join(" ")),
		lineField("bodyKind", operation.body.kind ?? ""),
		lineField("bodyRequired", String(operation.body.required)),
		lineField("summary", operation.summary)
	].filter((part) => part.length > 0).join(" ");
}
function lineField(name, value) {
	return value.length === 0 ? "" : `${name}=${JSON.stringify(value)}`;
}
function resultCounts(data) {
	if ("count" in data) return data.count;
	return { returned: 1 };
}
//#endregion
//#region aventure-cli/commands/unified-operations.ts
function buildUnifiedOperations(generatedAt = /* @__PURE__ */ new Date(), contracts = MCP_GENERATION_CONTRACT) {
	const operations = projectUnifiedOperations(contracts);
	return {
		schemaVersion: 1,
		generatedFrom: "mcp/mcp-server/generated/mcp-generation-contract.ts",
		generatedAt: generatedAt.toISOString(),
		totalOperations: operations.length,
		note: "Projection of MCP_GENERATION_CONTRACT - see mcp/scripts/build-unified-operations.ts header for SSOT rules.",
		operations
	};
}
function unifiedOperationsJson(payload) {
	return `${JSON.stringify(payload, null, 2)}\n`;
}
function writeUnifiedOperationsJson(out, payload = buildUnifiedOperations()) {
	const target = resolve(out);
	const body = unifiedOperationsJson(payload);
	mkdirSync(dirname(target), { recursive: true });
	writeFileSync(target, body);
	return {
		target,
		byteLength: Buffer.byteLength(body, "utf8"),
		totalOperations: payload.totalOperations
	};
}
function projectUnifiedOperations(contracts) {
	return contracts.map((contract) => ({
		operationId: contract.operationId,
		method: contract.method,
		path: contract.path,
		resource: contract.resource,
		intent: contract.intent,
		cliCommand: contract.projection.cliPath.join(" "),
		cliPath: contract.projection.cliPath,
		cliAliasCommand: contract.projection.cliAliasPath?.join(" ") ?? null,
		cliAliasPath: contract.projection.cliAliasPath ?? null,
		mcpTool: mcpToolForIntent(contract.intent),
		bodySchemaName: contract.requestBody?.schemaName ?? null,
		bodySchemaImport: contract.requestBody?.schemaImport ?? null,
		auth: contract.projection.auth,
		scope: contract.projection.scope,
		dryRunSupported: contract.projection.dryRun,
		destructive: contract.projection.destructive
	})).toSorted((left, right) => left.path.localeCompare(right.path) || left.method.localeCompare(right.method) || left.operationId.localeCompare(right.operationId));
}
//#endregion
//#region aventure-cli/commands/operations.ts
var ROOT_FILTER_HELP = "Match only the first canonical or CLI-alias command segment";
function registerOperationsCommand(parent, specs) {
	registerDocsCommand(parent, specs);
	const catalog = parent.command("command-catalog").summary("LLM agent only: search generated CLI metadata").description([
		"LLM agent only: search and dump generated aventure-cli command metadata.",
		"This is read-only command metadata derived from the generated OpenAPI command specs.",
		"Use --format lines for rg/grep/ag/ack and --format ndjson|json for ast-grep/sg/parsers.",
		"Use --format compact for one `cli · summary · requiredFlags` row per operation."
	].join("\n"));
	catalog.addHelpText("after", () => `\nShipped compact catalog, greppable without running this CLI:\n  ${compactCatalogPath()}\n`);
	addSearchCommand(catalog, specs);
	addShowCommand(catalog, specs);
	addDumpCommand(catalog, specs);
	addUnifiedCommand(catalog);
}
function addSearchCommand(parent, specs) {
	const command = parent.command("search").summary("Search generated operations").description("Search generated operation metadata without calling the API.").argument("[query...]", "Search query; same as --q.").option("--q <query>", "Search generated command metadata").option("--root <root>", ROOT_FILTER_HELP).addOption(new Option("--scope <scope>", "Filter by required auth scope").choices([
		"read",
		"write",
		"all"
	]).default("all")).addOption(new Option("--mutates <mutates>", "Filter mutating operations").choices([
		"true",
		"false",
		"any"
	]).default("any")).addOption(new Option("--destructive <destructive>", "Filter destructive operations").choices([
		"true",
		"false",
		"any"
	]).default("any")).addOption(new Option("--intent <intent>", "Filter by operation intent").choices([
		"read",
		"lookup",
		"search",
		"write",
		"delete",
		"status",
		"all"
	]).default("all")).addOption(new Option("--method <method>", "Filter by HTTP method").choices([
		"GET",
		"POST",
		"PUT",
		"PATCH",
		"DELETE",
		"all"
	]).default("all")).option("--limit <count>", "Maximum rows to return", "20").addOption(new Option("--format <format>", "Text/file render format").choices([
		"text",
		"lines",
		"compact",
		"json",
		"ndjson"
	]).default("lines")).option("--output <path>", "Write rendered output to a file");
	addOutputModeOptions(command);
	command.action(function(query) {
		const opts = this.optsWithGlobals();
		writeSearchResult(withQuery(opts, query), specs, resolveOutputMode(opts, "text"));
	});
}
/**
* `docs api <selector>` — the terminal-native docs lookup. A third selector onto the same
* `show` rendering, so no second renderer exists; only the selector grammar is new.
*/
function registerDocsCommand(parent, specs) {
	const api = parent.command("docs").summary("Look up generated API documentation offline").description("Print generated operation documentation without calling the API.").command("api").summary("Show documentation for one operation").description([
		"Print one operation's summary, description, flags, example, and error contract.",
		"Select it by `<METHOD> <path>` (route template or concrete path), by operationId,",
		"or by CLI command path, e.g. \"entities get\"."
	].join("\n")).argument("<selector...>", "METHOD and path, an operationId, or a CLI command path");
	addOutputModeOptions(api);
	api.action(function(selector) {
		const opts = this.optsWithGlobals();
		const mode = resolveOutputMode(opts);
		const resolved = docsSelector(selector, specs);
		if (!resolved.ok || resolved.data === null) {
			emit({ mode }, resolved);
			return;
		}
		writeShowResult({
			...opts,
			...resolved.data
		}, specs, mode);
	});
}
/** The one statement of what `docs api` accepts; every rejection repeats it verbatim. */
var DOCS_SELECTOR_FORM = "Accepted selectors: `<METHOD> <route template or concrete path>`, an operationId, or a CLI command path such as \"entities get\".";
/** Maps the accepted `docs api` selector forms onto the `command-catalog show` options. */
function docsSelector(selector, specs) {
	const [head, ...rest] = selector;
	const openApiMethod = OPENAPI_METHODS.find((candidate) => candidate === head?.toLowerCase());
	if (openApiMethod === void 0 || rest.length === 0) {
		const name = selector.join(" ").trim();
		return success("Resolved by name", specs.some((spec) => spec.operationId === name) ? { operationId: name } : { command: name });
	}
	const method = aventureMethod(openApiMethod);
	const path = rest.join("");
	const template = specs.find((spec) => spec.method === method && spec.path === path);
	if (template !== void 0) return success("Resolved by route template", { operationId: template.operationId });
	const resolved = resolveOpenApiOperationSelector({
		method,
		path
	});
	if (!resolved.ok || resolved.data === null) return failure(resolved.summary, [...resolved.warnings, DOCS_SELECTOR_FORM]);
	return success("Resolved by method and path", { operationId: resolved.data.operation.operationId });
}
function addShowCommand(parent, specs) {
	const command = parent.command("show").summary("Show one generated operation").description("Show one generated operation by command path or operationId.").option("--command <command>", "CLI command path, with or without aventure-cli prefix").option("--operation-id <operationId>", "Generated OpenAPI operationId").addOption(new Option("--format <format>", "Text/file render format").choices([
		"usage",
		"lines",
		"compact",
		"json",
		"ndjson"
	]).default("usage")).option("--output <path>", "Write rendered output to a file");
	addOutputModeOptions(command);
	command.action(function() {
		const opts = this.optsWithGlobals();
		writeShowResult(opts, specs, resolveOutputMode(opts, "text"));
	});
}
function addDumpCommand(parent, specs) {
	const command = parent.command("dump").summary("Dump generated operations").description("Dump generated operations for rg/grep/ag/ack or JSON/NDJSON tooling.").option("--root <root>", ROOT_FILTER_HELP).addOption(new Option("--scope <scope>", "Filter by required auth scope").choices([
		"read",
		"write",
		"all"
	]).default("all")).addOption(new Option("--mutates <mutates>", "Filter mutating operations").choices([
		"true",
		"false",
		"any"
	]).default("any")).addOption(new Option("--destructive <destructive>", "Filter destructive operations").choices([
		"true",
		"false",
		"any"
	]).default("any")).addOption(new Option("--intent <intent>", "Filter by operation intent").choices([
		"read",
		"lookup",
		"search",
		"write",
		"delete",
		"status",
		"all"
	]).default("all")).addOption(new Option("--method <method>", "Filter by HTTP method").choices([
		"GET",
		"POST",
		"PUT",
		"PATCH",
		"DELETE",
		"all"
	]).default("all")).option("--limit <count>", "Maximum rows to return").addOption(new Option("--format <format>", "Text/file render format").choices([
		"text",
		"lines",
		"compact",
		"json",
		"ndjson"
	]).default("lines")).option("--output <path>", "Write rendered output to a file");
	addOutputModeOptions(command);
	command.action(function() {
		const opts = this.optsWithGlobals();
		writeSearchResult(opts, specs, resolveOutputMode(opts, "text"));
	});
}
function addUnifiedCommand(parent) {
	const command = parent.command("unified").summary("Dump unified CLI/API/MCP operation JSON").description("Dump the flat unified operations JSON projected from MCP_GENERATION_CONTRACT.").option("--output <path>", "Write unified operations JSON to a file");
	addOutputModeOptions(command);
	command.action(function() {
		const opts = this.optsWithGlobals();
		const mode = resolveOutputMode(opts, "text");
		const payload = buildUnifiedOperations();
		if (opts.output !== void 0) {
			const result = writeUnifiedOperationsJson(opts.output, payload);
			emit({ mode }, success("Unified operations JSON written", {
				outputPath: result.target,
				byteLength: result.byteLength,
				schemaVersion: payload.schemaVersion
			}, { counts: { totalOperations: result.totalOperations } }));
			return;
		}
		if (mode === "text") {
			process.stdout.write(unifiedOperationsJson(payload));
			return;
		}
		emit({ mode }, success("Unified operations JSON", payload, { counts: { totalOperations: payload.totalOperations } }));
	});
}
//#endregion
//#region aventure-cli/index.ts
/**
* LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES.
*
* All MCP/CLI/API-schema contract, schema, annotation, option-help, or tool-shape edits
* must be made at the canonical Kotlin `.kt` source owner and its direct
* annotations, then regenerated through the approved OpenAPI/api-schemas/MCP pipeline.
*
* Canonical law: `AGENTS.md` [MCP1b.1], [AS1m], [PG1e/f], [PG1g], [SS1a/b/i],
* and [RC1]. Supporting docs: `docs/code-change.md` OpenAPI Auto-Generation Procedure,
* `docs/api-contracts/openapi.md`, and `docs/kotlin-endpoint-structure.md`.
* Supporting skills: `aventure`, `openapi`, `springdoc`, `zod`, and `mcp-builder`.
*/
/**
* aventure-cli entrypoint.
*  - Commander program + subcommands; each command registers via register*(parent).
*  - Help text is first-class per AGENTS.md [MCP1c]: summary + description on every
*    command/option, environment block on root --help, showHelpAfterError().
*  - Stdout contract: clean text on a terminal, the --data payload when stdout is piped or
*    redirected (`output-mode.ts` owns that default); --json emits the stable envelope.
*    Fatal crashes still emit an envelope so MCP/server-side callers do not lose the root cause.
*/
/**
* Emit a structured failure envelope on stdout AND a full stack on stderr,
* then exit 1. Replaces the prior stderr-only fatal handler so MCP callers
* always parse valid JSON from stdout regardless of crash kind.
*/
function writeFatalEnvelope(error, kind) {
	logError({
		component: "aventure-cli",
		event: "fatal",
		message: error.message,
		error
	});
	process.stderr.write(`aventure-cli fatal (${kind}): ${error.stack ?? error.message}\n`);
	emitJson({
		...failure(`aventure-cli ${kind}: ${error.message}`, [error.name || "Error"]),
		counts: { exitCode: 1 }
	});
	process.exit(1);
}
/** Root-help section heading for one top-level command; built-ins default to the CLI section. */
function commandSection(topLevelName) {
	return CLI_COMMAND_SECTION[CLI_NAMESPACE_SECTION[topLevelName] ?? "cli"];
}
function registerGeneratedOpenApiCommands(parent, specs) {
	const ordered = specs.map((spec) => {
		const top = spec.cliPath[0] ?? "";
		return {
			spec,
			top,
			rank: commandSection(top).rank
		};
	}).toSorted((left, right) => left.rank - right.rank || left.top.localeCompare(right.top)).map((entry) => entry.spec);
	for (const spec of ordered) {
		registerLeaf(parent, spec, spec.cliPath);
		if (spec.cliAliasPath !== void 0 && spec.cliAliasPath.join(" ") !== spec.cliPath.join(" ")) registerLeaf(parent, spec, spec.cliAliasPath);
	}
}
function registerLeaf(parent, spec, cliPath) {
	let current = parent;
	let namespacePath = "";
	for (const segment of cliPath.slice(0, -1)) {
		namespacePath = namespacePath === "" ? segment : `${namespacePath} ${segment}`;
		current = childCommand(current, segment, namespacePath);
	}
	const leafName = cliPath.at(-1) ?? spec.operationId;
	const leaf = current.commands.find((command) => command.name() === leafName) ?? current.command(leafName);
	leaf.summary(spec.summary || spec.operationId).description([
		`${spec.method} ${spec.path}.`,
		spec.description,
		spec.bodyKind === "json" || [...spec.parameters, ...spec.bodyParameters].some((parameter) => cliShellSensitiveSchema(parameter.schemaType, parameter.itemSchemaType)) ? CLI_SHELL_INPUT_GUIDANCE : ""
	].filter(Boolean).join("\n"));
	for (const parameter of spec.parameters) addParameterOption(leaf, parameter);
	addBodyOptions(leaf, spec);
	if (spec.dryRun) leaf.option("--execute", "send the request; default is dry-run", false);
	addOutputModeOptions(leaf);
	const positionalText = positionalTextParameter(spec);
	if (positionalText !== void 0) {
		leaf.argument("[text...]", positionalText.description || `Same as ${longFlag(positionalText.flag)}.`);
		leaf.action(async function(text) {
			const opts = this.optsWithGlobals();
			const mode = resolveOutputMode(opts);
			const merged = withSearchText(positionalText, text, opts);
			return emit({ mode }, merged.ok && merged.data !== null ? await runGeneratedCommand(spec, merged.data, mode) : merged);
		});
		return;
	}
	leaf.action(async function() {
		const opts = this.optsWithGlobals();
		const mode = resolveOutputMode(opts);
		emit({ mode }, await runGeneratedCommand(spec, opts, mode));
	});
}
function positionalTextParameter(spec) {
	if (spec.parameters.some((parameter) => parameter.required)) return void 0;
	const requiredBody = spec.bodyParameters.filter((parameter) => parameter.required);
	if (requiredBody.length === 1 && requiredBody[0]?.schemaType === "string") return requiredBody[0];
	if (requiredBody.length !== 0 || spec.cliPath[0] !== "search") return void 0;
	const canonicalSearchText = spec.bodyParameters.filter((parameter) => {
		const leaf = parameter.name.split(".").at(-1);
		return parameter.schemaType === "string" && (leaf === "query" || leaf === "search");
	});
	return canonicalSearchText.length === 1 ? canonicalSearchText[0] : void 0;
}
function withSearchText(parameter, text, opts) {
	const value = text.join(" ").trim();
	if (value.length === 0) return success("No positional text", opts);
	if (opts[parameter.optionKey] !== void 0) return failure(`Use either the positional argument or ${longFlag(parameter.flag)}, not both.`);
	return success("Positional text parsed", {
		...opts,
		[parameter.optionKey]: value
	});
}
function longFlag(flag) {
	return flag.split(" ")[0] ?? flag;
}
function childCommand(parent, segment, namespacePath) {
	const existing = parent.commands.find((command) => command.name() === segment);
	if (existing !== void 0) return existing;
	const entry = GENERATED_CLI_NAMESPACES[namespacePath];
	const cmd = parent.command(segment);
	if (entry !== void 0) cmd.summary(entry.summary).description(entry.summary);
	return cmd;
}
function addParameterOption(command, parameter) {
	const description = parameter.description || `${parameter.name} ${parameter.location} parameter`;
	if (parameter.defaultValue !== void 0) {
		const defaultValue = typeof parameter.defaultValue === "string" || typeof parameter.defaultValue === "boolean" ? parameter.defaultValue : [...parameter.defaultValue];
		command.option(parameter.flag, description, defaultValue);
		return;
	}
	if (parameter.required) {
		command.requiredOption(parameter.flag, description);
		return;
	}
	command.option(parameter.flag, description);
}
async function runGeneratedCommand(spec, opts, mode) {
	if (opts.environment !== void 0) {
		const normalized = normalizeEnvironmentName(opts.environment);
		if (normalized === null) return failure(`Unknown aVenture environment '${opts.environment}'`, [`Use one of: ${environmentNames().join(", ")}`]);
		process.env.API_ENV = normalized;
	}
	const body = await readGeneratedBody(spec, opts);
	if (!body.ok) return body;
	const pathParams = Object.fromEntries(spec.parameters.filter((parameter) => parameter.location === "path").map((parameter) => {
		const optionValue = opts[parameter.optionKey];
		if (Array.isArray(optionValue)) return [parameter.name, optionValue.at(0) ?? ""];
		if (optionValue === void 0) throw new Error(`Missing required option ${parameter.optionKey}`);
		return [parameter.name, String(optionValue)];
	}));
	const searchParams = Object.fromEntries(spec.parameters.filter((parameter) => parameter.location === "query").flatMap((parameter) => {
		const value = opts[parameter.optionKey];
		if (value === void 0 || Array.isArray(value) && value.length === 0) return [];
		const searchValue = Array.isArray(value) || typeof value === "boolean" ? value : String(value);
		return [[parameter.name, searchValue]];
	}));
	return await runOpenApiCall({
		method: spec.method,
		path: buildOpenApiPath(spec.operationId, pathParams),
		searchParams,
		body: body.data,
		auth: spec.auth,
		execute: spec.dryRun ? Boolean(opts.execute) : false,
		responseFormat: outputModeJsonAccept(mode) ? "json" : "auto"
	});
}
process.on("uncaughtException", (error) => writeFatalEnvelope(error, "uncaughtException"));
process.on("unhandledRejection", (reason) => writeFatalEnvelope(reason instanceof Error ? reason : new Error(String(reason)), "unhandledRejection"));
if (commandNeedsMaterializedAuth(process.argv.slice(2), GENERATED_OPENAPI_COMMAND_SPECS)) await materializeAuth();
var generatedSpecs = visibleOpenApiCommandSpecsForCurrentAuth(GENERATED_OPENAPI_COMMAND_SPECS);
var program = new Command();
program.name("aventure-cli").version(package_default.version).summary("CLI for the aVenture API: read and maintain venture-research data — entities, people, funding, news, media, and search").description([
	"CLI for the aVenture API: read and maintain venture-research data —",
	"entities, people, funding, news, media, and search.",
	"",
	"Runs generated aVenture API commands and prints clean text by default,",
	"or machine-readable --data / --json output when requested.",
	"Write-scope operations are dry-run by default; pass --execute to send the request.",
	"The aventure-mcp-server tools execute through this same CLI."
].join("\n")).addOption(new Option("--environment <environment>", "route all API calls to a mapped API environment (default: API_URL host, else API_ENV, else staging)").choices([...environmentNames()])).showHelpAfterError("(run `aventure-cli --help` for usage)");
registerGeneratedOpenApiCommands(program, generatedSpecs);
registerBuiltinAuthCommands(program);
registerBuiltinUpdateCommand(program);
registerBuiltinBatchCommand(program, generatedSpecs);
registerCompletionCommand(program, generatedSpecs);
registerOperationsCommand(program, generatedSpecs);
registerCuratedHelpCommand(program, generatedSpecs);
registerSearchParentModeOption(program, generatedSpecs);
for (const command of program.commands) if (!command.helpGroup()) command.helpGroup(commandSection(command.name()).heading);
installMissingOptionExitHandlers(program);
program.addHelpText("after", [
	"",
	"Environment (credentials by command group):",
	"  CLIENT_SECRET   read commands (public data reads, search, lookups)",
	"  ADMIN_API_KEY   admin and write commands (mutations, media, jobs, harness)",
	"  AUTH_TOKEN      user/RBAC commands (Supabase bearer; never the client secret)",
	"  Check what this shell holds with: aventure-cli auth status",
	"",
	"Output modes (per command):",
	"  --text (compact; default on a terminal), --data (response data JSON; default when piped/non-TTY), --json (full envelope);",
	"  --data-full is uncapped, for bounded programmatic consumers only — never LLM agents.",
	"",
	"Exit codes:",
	"  0   envelope.ok === true",
	"  1   envelope.ok === false",
	"",
	"Examples:",
	"  $ aventure-cli auth status",
	"  $ aventure-cli entities get --entity-slug acme",
	"  $ bash -lc 'aventure-cli entities get --entity-slug acme'"
].join("\n"));
try {
	await program.parseAsync();
} catch (error) {
	writeFatalEnvelope(error instanceof Error ? error : new Error(String(error)), "parseAsync");
}
//#endregion
export {};

//# sourceMappingURL=aventure-cli-BoL_vBc0.js.map