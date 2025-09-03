import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import App from './App';

vi.mock('react-pdf', () => ({
  Document: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Page: () => <div>Page</div>,
  pdfjs: { GlobalWorkerOptions: { workerSrc: '' } },
}));

describe('App navigation', () => {
  const originalFetch = global.fetch;

  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve('# Test'),
      }) as any,
    );
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('renders all pages without console errors', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <HashRouter>
        <App />
      </HashRouter>,
    );

    // Home page
    expect(
      screen.getByText(/welcome to my portfolio/i),
    ).toBeInTheDocument();

    const user = userEvent.setup();

    // Projects page
    await user.click(screen.getByRole('link', { name: /projects/i }));
    expect(
      await screen.findByText(/Bitcoin Research Project/i),
    ).toBeInTheDocument();

    // Resume page
    await user.click(screen.getByRole('link', { name: /resume/i }));
    expect(
      await screen.findByText(/Download Resume/i),
    ).toBeInTheDocument();

    // About page
    await user.click(screen.getByRole('link', { name: /about/i }));
    expect(
      await screen.findByRole('heading', { level: 4, name: /About Me/i }),
    ).toBeInTheDocument();

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });
});
