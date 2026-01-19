# Agents: CI/CD Workflows Guide

This document describes the workflows under `.github/workflows/`, how they are structured, and how they interact.

## Overview

- Node.js: 24.7.0 (actions/setup-node@v4)
- Package manager: npm (`npm ci` in CI)
- Build tool: Vite (`vite build`)
- Tests: Vitest + React Testing Library; Playwright lives in `tests/` but is not run in CI by default
- Deploy: GitHub Pages (artifact name `pages` from `./dist`)

Workflows:

- `build.yml` — main pipeline (dependency report, audit, unit tests, build + artifact)
- `deploy.yml` — publishes the `pages` artifact to GitHub Pages after a successful `build` run
- `codeql.yml` — static code analysis via CodeQL
- `update-deps.yml` — scheduled dependency updates with PR automation

## build.yml

Triggers:

- `push` on `main`
- `pull_request` targeting `main`

Permissions:

- `contents: read`, `pull-requests: write`, `issues: write` (for PR comments)

Jobs (runs on `ubuntu-latest`, Node 24.7.0):

- Dependencies Report
  - Checks for outdated dependencies using `npm outdated --json`
  - Writes a summary table to the GitHub Step Summary
  - On PRs, posts/updates a comment with the table (non-blocking; resilient JSON parsing)
  - Uses npm cache and installs with `npm ci --no-audit --no-fund`

- Security Audit (non-blocking)
  - Runs `npm audit`
  - Marked `continue-on-error: true`; informational only

- Unit Tests
  - Installs with `npm ci`
  - Runs `npm test` (Vitest in `jsdom` environment)

- Build & Pages Artifact
  - Needs: `test`
  - Builds with `npm run build` (TypeScript + Vite)
  - Uploads artifact `pages` from `./dist` using `actions/upload-artifact@v4`

Notes:

- Outdated-deps job is defensive with JSON to avoid failing CI due to noisy output.
- Keep artifact name as `pages` for compatibility with `deploy.yml`.

## deploy.yml

Trigger:

- `workflow_run` of the `build` workflow on `completed` and only proceeds on success.

Jobs:

- Deploy
  - Downloads the `pages` artifact from the triggering `build` run
  - Re-uploads as a Pages artifact (`actions/upload-pages-artifact@v3`)
  - Deploys with `actions/deploy-pages@v4`
  - Environment: `github-pages` with URL exposed as `steps.deployment.outputs.page_url`
  - Concurrency group: `pages` (no cancel-in-progress)

## codeql.yml

- Runs CodeQL static analysis.
- Typically triggered on push/PR to `main` and via a weekly schedule.
- No changes needed for Node; independent of the Node runtime used in app CI.

## update-deps.yml

Triggers:

- `schedule`: Mondays 06:00 UTC
- `workflow_dispatch`: on demand

Job: update-deps

- Sets up Node 24.7.0 with npm cache
- `npm ci`
- Runs `npx npm-check-updates -u`, then `npm install`
- Attempts `npm audit fix` (best effort)
- Opens a PR with `peter-evans/create-pull-request@v6`
- PR creation requires enabling "Allow GitHub Actions to create and approve pull requests" or setting `UPDATE_DEPS_TOKEN`

## Local Repro & Maintenance

- Use Node 24.7.0 (see `.nvmrc`).
- Install with `npm ci`, run tests with `npm test`, build with `npm run build`.
- View recent CI runs:

  - `gh run list --branch main --limit 10`
  - `gh run view <run-id> --log`

## Conventions & Tips

- Artifact name: always `pages` (consumed by `deploy.yml`).
- Keep CI changes minimal; prefer non-blocking checks for informational jobs.
- If you alter routes or build output paths, ensure `deploy.yml` still publishes `./dist`.
- Avoid secrets in logs; workflows rely only on `GITHUB_TOKEN`.
