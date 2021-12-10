import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { DefaultTheme } from 'styled-components/native';
import light from '../global/styles/themes/light';
import dark from '../global/styles/themes/dark';

interface ThemeContext {
  toggleTheme(): void;
  theme: DefaultTheme;
}
const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    async function loadTheme(): Promise<void> {  
    const storagedTheme =  await AsyncStorage.getItem('@gofinances:theme');
      if (storagedTheme) {
        setTheme(JSON.parse(storagedTheme) as DefaultTheme);
      }
    }

    loadTheme();
  }, []);

  const toggleTheme = useCallback( async () => {
    const themeUsed = theme.title === 'light' ? dark : light;
    setTheme(themeUsed);

    AsyncStorage.setItem('@gofinances:theme', JSON.stringify(themeUsed));
  }, [theme.title]);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [
    theme,
    toggleTheme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }

  return context;
}