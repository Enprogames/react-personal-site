import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Ensure DOM APIs are available for React Testing Library
    environment: 'jsdom',
    // Load custom matchers like toBeInTheDocument
    setupFiles: ['./src/setupTests.ts'],
    // Provide global expect/describe/it for setup files like jest-dom
    globals: true,
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
