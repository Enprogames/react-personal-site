import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { Socialicons } from './index';

// Mock socialprofiles to exercise all filter branches:
// - github/linkedin/facebook/youtube/twitch: URL + icon → rendered
// - twitter: empty URL but has icon → skipped by !url check
// - nonexistent: has URL but no icon → skipped by !IconComponent check
vi.mock('../../assets/social_accounts', () => ({
  socialprofiles: {
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/in/test',
    twitter: '', // empty URL, has icon in map — should be skipped
    facebook: 'https://facebook.com/test',
    youtube: 'https://youtube.com/test',
    twitch: 'https://twitch.tv/test',
    nonexistent: 'https://example.com', // has URL, no icon in map — should be skipped
  },
}));

const theme = createTheme({ palette: { mode: 'light' } });
function wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

describe('Socialicons', () => {
  it('renders links for platforms with URLs and matching icons', () => {
    render(<Socialicons />, { wrapper });
    const links = screen.getAllByRole('link');
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/test');
    expect(hrefs).toContain('https://linkedin.com/in/test');
    expect(hrefs).toContain('https://facebook.com/test');
    expect(hrefs).toContain('https://youtube.com/test');
    expect(hrefs).toContain('https://twitch.tv/test');
  });

  it('skips platforms with empty URLs', () => {
    render(<Socialicons />, { wrapper });
    const links = screen.getAllByRole('link');
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).not.toContain('https://twitter.com/test');
  });

  it('skips platforms without a matching icon', () => {
    render(<Socialicons />, { wrapper });
    const links = screen.getAllByRole('link');
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).not.toContain('https://example.com');
  });

  it('renders Follow Me text', () => {
    render(<Socialicons />, { wrapper });
    expect(screen.getByText('Follow Me')).toBeInTheDocument();
  });
});