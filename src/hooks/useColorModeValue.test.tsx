import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { useColorModeValue } from './useColorModeValue';

function wrapper(mode: 'light' | 'dark') {
  const theme = createTheme({ palette: { mode } });
  return ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}

describe('useColorModeValue', () => {
  it('returns the light value when theme mode is light', () => {
    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'), {
      wrapper: wrapper('light'),
    });
    expect(result.current).toBe('light-value');
  });

  it('returns the dark value when theme mode is dark', () => {
    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'), {
      wrapper: wrapper('dark'),
    });
    expect(result.current).toBe('dark-value');
  });
});