import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'wp-dos' | 'dark' | 'light';

type WPThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const WPThemeContext = createContext<WPThemeContextType | undefined>(undefined);

export const WPThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('wp-dos');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const validThemes: Theme[] = ['wp-dos', 'dark', 'light'];
    const initialTheme = validThemes.includes(saved as Theme) ? (saved as Theme) : 'wp-dos';
    setThemeState(initialTheme);
  }, []);

  useEffect(() => {
    document.body.classList.remove('wp-dos', 'dark', 'light');
    document.body.classList.add(theme);
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.classList.remove('wp-dos', 'dark', 'light');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <WPThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </WPThemeContext.Provider>
  );
};

export const useWPTheme = () => {
  const context = useContext(WPThemeContext);
  if (!context) {
    throw new Error('useWPTheme must be used within a WPThemeProvider');
  }
  return context;
};
