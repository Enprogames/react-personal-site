# AGENTS: Working Effectively in This Repo

This document helps human and AI coding agents contribute safely and productively to this project.

## Overview

- Framework: React + TypeScript (Vite)
- UI: MUI 7 + TailwindCSS 4
- Routing: `react-router-dom` (HashRouter)
- Tests: Vitest + React Testing Library (unit/integration), Playwright (E2E)
- Build: `vite build`
- Deploy: GitHub Pages (artifact name `pages`)

## Repo Structure

- `src/` — application code (components, pages, styles)
- `public/` — static assets copied to the build as-is
- `tests/` — Playwright E2E tests (excluded from Vitest)
- `.github/workflows/` — CI/CD pipelines (build, deploy, CodeQL, dependency update)

## Quickstart Commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Unit tests: `npm test` (Vitest)
- E2E tests: `npm run test:e2e` (requires Playwright browsers; run `npx playwright install` once)

Node 20 is expected in CI. Use `npm ci` to reproduce CI behavior.

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

- `build.yml`
  - Jobs: `check_outdated_dependencies`, `audit`, `test`, `build`
  - `build` depends on `test` and uploads artifact `pages` from `dist/`
  - Installs with `npm ci --no-audit --no-fund`
- `deploy.yml`
  - Triggers on `workflow_run` completion of `build` and only deploys on success
  - Downloads `pages` artifact and publishes via `actions/deploy-pages@v4`
- `codeql.yml` — static analysis
- `update-deps.yml` — automated dependency update utility

View recent runs with GitHub CLI:

```
gh run list --branch main --limit 10
gh run view <run-id> --log
```

## Dependency Management

- Lockfile: `package-lock.json` (npm)
- Install: `npm ci` for reproducible installs
- Outdated report: Produced during CI and summarized in the job output; PRs get a comment with a table when relevant.

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
- Run locally with `npm run test:e2e`. First time, install browsers via `npx playwright install`.
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

## Agent Checklist for Changes

- Run `npm test` and ensure all tests pass.
- Run `npm run build` to verify production build.
- Consider CI impact: artifact name remains `pages`; `build` depends on `test`.
- Update docs when changing behaviors, routes, or environment assumptions.
- Keep PRs small and focused; explain rationale and trade-offs.

## Security & Secrets

- Do not add or expose secrets in code or logs.
- Workflows use `GITHUB_TOKEN` only; no external secrets required.

## When in Doubt

- Open an issue or a draft PR describing the approach.
- Include reproduction steps, test plan, and CI expectations.

