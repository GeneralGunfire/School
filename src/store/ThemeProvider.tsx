import * as React from 'react';
import { KEYS, readStore, writeStore } from '@/lib/storage';

export type Theme = 'light' | 'dark';

interface ThemeCtx {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const Ctx = React.createContext<ThemeCtx | null>(null);

interface Settings {
  theme: Theme;
}

/**
 * Light is the default, per the brief — the OS preference is deliberately
 * *not* consulted, so the app opens light for everyone and dark is an
 * explicit choice made in Settings.
 */
function readTheme(): Theme {
  const s = readStore<Settings>(KEYS.settings, { theme: 'light' });
  return s.theme === 'dark' ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(readTheme);

  // The attribute on <html> is what every token block keys off.
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }, [theme]);

  const setTheme = React.useCallback((t: Theme) => {
    setThemeState(t);
    writeStore<Settings>(KEYS.settings, { theme: t });
  }, []);

  const value = React.useMemo<ThemeCtx>(
    () => ({ theme, setTheme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }),
    [theme, setTheme],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme(): ThemeCtx {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
