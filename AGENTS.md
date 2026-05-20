# AGENTS: Working Effectively in This Repo

This document helps human and AI coding agents contribute safely and productively to this project.

## Overview

- Framework: React + TypeScript (Vite)
- UI: MUI 7 + TailwindCSS 4
- Routing: `react-router-dom` (HashRouter)
- Package manager: pnpm 11 via Corepack
- Tests: Vitest + React Testing Library (unit/integration), Playwright (E2E)
- Build: `vite build`
- Deploy: GitHub Pages (artifact name `pages`)

## Repo Structure

- `src/` - application code (components, pages, styles)
- `src/content/` - structured site content and content-specific helpers
- `public/` - static assets copied to the build as-is
- `tests/` - Playwright E2E tests (excluded from Vitest)
- `docs/` - project maintenance notes and policies
- `.github/workflows/` - CI/CD pipelines (build, deploy, CodeQL, dependency update)

## Quickstart Commands

- Enable package manager: `corepack enable`
- Install: `pnpm install --frozen-lockfile`
- Dev server: `pnpm run dev`
- Build: `pnpm run build`
- Lint: `pnpm run lint`
- Typecheck: `pnpm run typecheck`
- Unit tests: `pnpm test` (Vitest)
- Standard verification: `pnpm run verify`
- E2E tests: `pnpm run test:e2e` (requires Playwright browsers; run `pnpm exec playwright install` once)

Node version from `.nvmrc` is expected in CI. Use `pnpm install --frozen-lockfile` to reproduce CI behavior.
If Corepack cannot create a global `pnpm` shim locally, use `corepack pnpm ...`.

## Testing Guidance (Vitest + RTL)

- Environment: `jsdom` with globals enabled (see `vitest.config.ts`).
- Setup: `src/setupTests.ts` loads `@testing-library/jest-dom` and polyfills `requestAnimationFrame`.
- E2E tests live under `tests/` and are excluded from Vitest discovery.
- Prefer queries by role/label over text where possible. Avoid brittle assertions on decorative content.
- Network: mock `fetch` in tests using `vi.fn()`; return minimal JSON/text needed.
- Heavy libs: mock where appropriate (e.g., `react-pdf` wrapper components are mocked in tests).
- Router: wrap components with `HashRouter` inside tests that render routed pages.

Example snippet:

```tsx
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from '../App';

it('shows About heading', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
});
```

## CI/CD Pipelines

Workflows (see `.github/workflows`):

- See the CI workflows guide for detailed structure and interactions: [CI Workflows Guide](.github/workflows/agents.md)
- `build.yml`
  - Jobs: `audit`, `lint`, `typecheck`, `test`, `build`
  - `build` depends on `lint`, `typecheck`, and `test` and uploads artifact `pages` from `dist/`
  - Installs with `pnpm install --frozen-lockfile`
- `deploy.yml`
  - Triggers on `workflow_run` completion of `build` and only deploys on successful `push` runs from `main`
  - Downloads `pages` artifact and publishes via `actions/deploy-pages@v4`
- `codeql.yml` - static analysis
- `update-deps.yml` - automated dependency update utility

View recent runs with GitHub CLI:

```bash
gh run list --branch main --limit 10
gh run view <run-id> --log
```

## Dependency Management

- Package manager: pnpm 11 pinned in `package.json`
- Lockfile: `pnpm-lock.yaml`
- Install: `pnpm install --frozen-lockfile` for reproducible installs
- Minimum release age: 7 days via `pnpm-workspace.yaml`
- Exceptions: `minimumReleaseAgeExclude` should stay empty unless a specific exception is justified and audited
- Policy details: [Dependency Management](docs/dependency-management.md)

## Coding Conventions

- Use TypeScript and functional React components.
- Keep changes minimal and focused; avoid unrelated refactors.
- Prefer descriptive names; avoid one-letter variables.
- Co-locate component-specific styles; use MUI theme and Tailwind utility classes thoughtfully.
- For assets, import via ESM; Vite handles bundling.
- Router paths are capitalized (e.g., `/Resume`, `/Projects`, `/About`).

## Browser/DOM Considerations

- Side effects that touch `document` or `window` should be inside `useEffect`.
- If a component/library needs DOM APIs not present in jsdom (e.g., `ResizeObserver`, `IntersectionObserver`), polyfill them in `src/setupTests.ts` for tests only.
- `react-type-animation` requires `requestAnimationFrame` (already polyfilled in tests).

## PDF Rendering

- We use `react-pdf` for resume rendering. In tests, mock `react-pdf` to simple components to avoid worker issues.
- In production, `vite` bundles the worker. Keep large assets out of tests.

## E2E Tests (Playwright)

- Tests live in `tests/` and use `playwright.config.ts`.
- Run locally with `pnpm run test:e2e`. First time, install browsers via `pnpm exec playwright install`.
- Keep E2E fast and resilient; prefer data-testid or roles.

## Deployment

- Build artifact name: `pages` (uploaded from `./dist`).
- Deploy workflow publishes to GitHub Pages and exposes URL via environment `github-pages`.
- Site `homepage` is set in `package.json`; update if domain changes.

## Common Pitfalls (and Fixes)

- Vitest failing with `document is not defined`: ensure `environment: 'jsdom'` and tests import renderers that need DOM only inside tests.
- Missing browser APIs (e.g., `requestAnimationFrame`): add polyfills in `src/setupTests.ts`.
- Brittle text assertions: prefer roles/labels or stable headings over decorative content.
- Large/async effects causing unhandled rejections: cancel timers and await promises in tests.
- Fresh package releases blocked by pnpm: check `minimumReleaseAge` in `pnpm-workspace.yaml` before adding an exception.

## Agent Checklist for Changes

- Run `pnpm run verify` and ensure it passes.
- Run `pnpm run test:e2e` when routes, assets, or browser behavior changed.
- Consider CI impact: artifact name remains `pages`; `build` depends on `lint`, `typecheck`, and `test`.
- Update docs when changing behaviors, routes, or environment assumptions.
- Keep PRs small and focused; explain rationale and trade-offs.

## Security & Secrets

- Do not add or expose secrets in code or logs.
- Workflows use `GITHUB_TOKEN` only; no external secrets required.

## When in Doubt

- Open an issue or a draft PR describing the approach.
- Include reproduction steps, test plan, and CI expectations.
