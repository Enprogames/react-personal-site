import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Exclude Playwright E2E tests from Vitest discovery
    exclude: [
      'tests/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
  },
});

