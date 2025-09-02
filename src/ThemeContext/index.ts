// ThemeContext/index.ts
import React from 'react';
import type { PaletteMode } from '@mui/material';

export interface ThemeContextType {
  theme: PaletteMode;
  setTheme: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
