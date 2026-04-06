// ThemeContext/index.ts
import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { PaletteMode } from '@mui/material';

export interface ThemeContextType {
  theme: PaletteMode;
  setTheme: Dispatch<SetStateAction<PaletteMode>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
