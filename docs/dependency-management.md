# Dependency Management

This repo uses pnpm 11 via Corepack. The exact pnpm version is pinned in `package.json` through the `packageManager` field, and the lockfile is `pnpm-lock.yaml`.

## Install Policy

Use:

```bash
corepack enable
pnpm install --frozen-lockfile
```

If Corepack cannot create a global `pnpm` shim locally, use `corepack pnpm ...` for the same commands.

CI uses the same install mode. Do not commit `package-lock.json` or use npm to update the dependency tree.

## Direct Dependency Policy

If source code imports a package directly, that package must be listed directly in `dependencies` or `devDependencies`. Do not rely on packages that happen to be present only as transitive dependencies.

This matters with pnpm because its strict dependency model does not make transitive packages part of this project's public import surface. A dependency may appear in a local `node_modules` tree and still fail in CI if it is not declared by this project.

## Release-Age Policy

`pnpm-workspace.yaml` enforces a seven-day minimum release age:

```yaml
minimumReleaseAge: 10080
minimumReleaseAgeStrict: true
minimumReleaseAgeIgnoreMissingTime: false
minimumReleaseAgeExclude: []
```

The value is in minutes. This delay applies to direct and transitive dependencies, which gives compromised or broken releases time to be discovered before this project can resolve them.

## Exceptions

Keep `minimumReleaseAgeExclude` empty by default.

Only add an exception when all of the following are true:

- The dependency update is necessary now.
- Waiting seven days creates a concrete risk or blocks an important fix.
- The package/version has been manually reviewed.
- The exception is as narrow as pnpm supports, preferably version-scoped.
- The exception is removed after the next dependency audit.

Example of a narrow temporary exception:

```yaml
minimumReleaseAgeExclude:
  - vite@8.0.13
```

Broad package exceptions should be rare because they bypass the policy for future releases too.

## Routine Updates

Routine automated updates should stay within the current semver ranges:

```bash
pnpm dlx npm-check-updates
pnpm dlx npm-check-updates -u --target semver
pnpm install
pnpm run verify
```

The scheduled dependency workflow follows this shape and opens a PR only when `package.json` changes.

## Major Updates

Major updates are manual work. Run the update intentionally, inspect fallout, and keep the resulting PR focused on the migration.

Before merging a major dependency update, verify:

```bash
pnpm install --frozen-lockfile
pnpm run verify
pnpm run test:e2e
pnpm audit
pnpm outdated
```
