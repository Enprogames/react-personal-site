// ThemeContext/index.ts
import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { PaletteMode } from '@mui/material';

export interface ThemeContextType {
  theme: PaletteMode;
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContext.Provider');
  }
  return context;
}
