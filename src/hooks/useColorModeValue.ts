import { useTheme } from '@mui/material/styles';

export function useColorModeValue<T>(light: T, dark: T): T {
  const { palette } = useTheme();
  return palette.mode === 'light' ? light : dark;
}
