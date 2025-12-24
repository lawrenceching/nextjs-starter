"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type GreenThemeContextValue = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  toggle: () => void;
};

const GreenThemeContext = React.createContext<GreenThemeContextValue | null>(null);

const GREEN_THEME_CLASS = "theme-green";
const STORAGE_KEY = "downkit:green-theme";

function applyGreenThemeClass(enabled: boolean) {
  const root = document.documentElement;
  root.classList.toggle(GREEN_THEME_CLASS, enabled);
}

export function useGreenTheme() {
  const ctx = React.useContext(GreenThemeContext);
  if (!ctx) throw new Error("useGreenTheme must be used within <ThemeProvider />");
  return ctx;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabledState] = React.useState(false);

  React.useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const initial = raw === "true";
    setEnabledState(initial);
    applyGreenThemeClass(initial);
  }, []);

  const setEnabled = React.useCallback((next: boolean) => {
    setEnabledState(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    applyGreenThemeClass(next);
  }, []);

  const toggle = React.useCallback(() => setEnabled(!enabled), [enabled, setEnabled]);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <GreenThemeContext.Provider value={{ enabled, setEnabled, toggle }}>
        {children}
      </GreenThemeContext.Provider>
    </NextThemesProvider>
  );
}



