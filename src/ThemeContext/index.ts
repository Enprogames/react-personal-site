// ThemeContext/index.ts
import React from 'react';

export interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
