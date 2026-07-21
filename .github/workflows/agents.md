# Agents: CI/CD Workflows Guide

This document describes the workflows under `.github/workflows/`, how they are structured, and how they interact.

## Overview

- Node.js: from `.nvmrc` (actions/setup-node@v5)
- Package manager: pnpm 11 via Corepack (enabled automatically by `actions/setup-node@v5` through the `packageManager` field in `package.json`)
- Build tool: Vite (`vite build`)
- Tests: Vitest + React Testing Library; Playwright lives in `tests/` but is not run in CI by default
- Deploy: GitHub Pages (artifact name `pages` from `./dist`)

Workflows:

- `build.yml` - main pipeline (audit, lint, typecheck, unit tests, build + artifact)
- `deploy.yml` - publishes the `pages` artifact to GitHub Pages after a successful `build` run
- `codeql.yml` - static code analysis via CodeQL
- `update-deps.yml` - scheduled dependency updates with PR automation

## build.yml

Triggers:

- `push` on `main`
- `pull_request` targeting `main`

Permissions:

- `contents: read` at workflow level

Jobs (runs on `ubuntu-latest`, Node from `.nvmrc`, pnpm via Corepack from `packageManager`):

- Security Audit (non-blocking)
  - Runs `pnpm audit`
  - Marked `continue-on-error: true`; informational only

- Lint
  - Installs with `pnpm install --frozen-lockfile`
  - Runs `pnpm run lint` (ESLint 9 flat config)

- Typecheck
  - Installs with `pnpm install --frozen-lockfile`
  - Runs `pnpm run typecheck`

- Unit Tests
  - Installs with `pnpm install --frozen-lockfile`
  - Runs `pnpm test` (Vitest in `jsdom` environment)

- Build & Pages Artifact
  - Needs: `lint`, `typecheck`, `test`
  - Builds with `pnpm run build` (TypeScript + Vite)
  - Uploads artifact `pages` from `./dist` using `actions/upload-artifact@v4`

Notes:

- Each job runs `corepack enable` before `actions/setup-node@v5` to make pnpm available on PATH for the `cache: pnpm` feature. pnpm is then managed by Corepack from the `packageManager` field (no separate `pnpm/action-setup` step needed).
- Keep artifact name as `pages` for compatibility with `deploy.yml`.

## deploy.yml

Trigger:

- `workflow_run` of the `build` workflow on `completed` and only proceeds on success for `push` events on `main`.

Jobs:

- Deploy
  - Downloads the `pages` artifact from the triggering `build` run
  - Re-uploads as a Pages artifact (`actions/upload-pages-artifact@v3`)
  - Deploys with `actions/deploy-pages@v4`
  - Environment: `github-pages` with URL exposed as `steps.deployment.outputs.page_url`
  - Concurrency group: `pages` (no cancel-in-progress)

## codeql.yml

- Runs CodeQL static analysis.
- Triggered on push/PR to `main` and via a weekly schedule.
- Uses Node from `.nvmrc`, pnpm via Corepack from `packageManager` (enabled via `corepack enable` before `setup-node`), and installs with `pnpm install --frozen-lockfile`.

## update-deps.yml

Triggers:

- `schedule`: Mondays 06:00 UTC
- `workflow_dispatch`: on demand

Job: update-deps

- Enables Corepack and sets up Node from `.nvmrc` with pnpm cache (`setup-node@v5` with `cache: pnpm`)
- Installs with `pnpm install --frozen-lockfile`
- Summarizes any `minimumReleaseAgeExclude` entries for regular audit
- Reports latest available dependency updates without changing files
- Runs `pnpm dlx npm-check-updates -u --target semver`, then `pnpm install`
- Runs `pnpm audit` as a non-blocking report
- Verifies the final lockfile with `pnpm install --frozen-lockfile`
- Runs `pnpm run verify` before opening a PR
- Opens a PR with `peter-evans/create-pull-request@v8` only when `package.json` changes
- PR creation requires enabling "Allow GitHub Actions to create and approve pull requests" or setting `UPDATE_DEPS_TOKEN`

## Local Repro & Maintenance

- Use the version in `.nvmrc`.
- Use pnpm through Corepack.
- Install with `pnpm install --frozen-lockfile` and verify with `pnpm run verify`.
- View recent CI runs:

  - `gh run list --branch main --limit 10`
  - `gh run view <run-id> --log`

## Conventions & Tips

- Artifact name: always `pages` (consumed by `deploy.yml`).
- Keep CI changes minimal; prefer non-blocking checks for informational jobs.
- If you alter routes or build output paths, ensure `deploy.yml` still publishes `./dist`.
- Avoid secrets in logs; workflows rely only on `GITHUB_TOKEN`.
