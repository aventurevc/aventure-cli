#!/usr/bin/env node
import { A as logDebug, F as setStderrLogging, H as readEnv, L as AUTH_SECRET_NAME, N as logWarn, T as materializeAuth, x as CommanderError } from "../chunks/cli-help-policy-B_93jELZ.js";
import { c as canonicalPersonalCredentialHost, i as cliMachineOutputSelected, s as commandNeedsMaterializedAuth, t as GENERATED_OPENAPI_COMMAND_SPECS, u as loadPersonalCredential } from "../chunks/openapi-commands-ZEY7SAEH.js";
//#region aventure-cli/auth/personal-bearer-credential.ts
/**
* Materialize an active CLI-owned credential only after normal auth materialization left AUTH_TOKEN unset.
* A local keyring fault remains diagnostic-only so read/admin environment credentials can still run.
*
* An absent OS credential store is the steady state wherever the CLI runs non-interactively — the
* harness sandbox, CI, any container — so that lookup outcome logs at debug. `auth status`
* (`keyringFailure`) and `auth doctor` (a failing `auth` check carrying the same reason) own the
* operator-facing report, and neither depends on this startup path.
*/
async function materializeCliPersonalBearerCredential() {
	if (hasAuthToken()) return;
	const host = canonicalPersonalCredentialHost(readEnv().host);
	try {
		const lookup = await loadPersonalCredential(host);
		if (lookup.state === "unavailable") {
			logDebug(unavailablePersonalCredential("keyring", new Error(lookup.summary)));
			return;
		}
		if (lookup.state === "found" && lookup.stored.activation === "active" && !hasAuthToken()) process.env[AUTH_SECRET_NAME.authToken] = lookup.stored.credential.secret;
	} catch (error) {
		logWarn(unavailablePersonalCredential("parse", error));
	}
}
function hasAuthToken() {
	return (process.env[AUTH_SECRET_NAME.authToken]?.trim().length ?? 0) > 0;
}
function unavailablePersonalCredential(source, error) {
	return {
		component: "aventure-cli",
		event: "personal_credential_materialization_unavailable",
		message: "saved personal CLI credential could not be loaded; continuing with environment auth",
		fields: { source },
		error
	};
}
//#endregion
//#region aventure-cli/bootstrap.ts
/**
* CLI-only startup boundary: reserve stderr when stdout carries machine output, then materialize
* normal auth and the local personal credential only for protected commands. The MCP server never
* imports this module, so it remains keyring-free and keeps full stderr diagnostics.
*/
if (cliMachineOutputSelected(process.argv.slice(2))) setStderrLogging(false);
try {
	if (commandNeedsMaterializedAuth(process.argv.slice(2), GENERATED_OPENAPI_COMMAND_SPECS)) {
		await materializeAuth();
		await materializeCliPersonalBearerCredential();
	}
	await import("../chunks/aventure-cli-BMVnX-y7.js");
} catch (failure) {
	if (!(failure instanceof CommanderError)) throw failure;
	process.stderr.write(`${failure.message}\n`);
	process.exitCode = failure.exitCode;
}
//#endregion
export {};

//# sourceMappingURL=index.js.map