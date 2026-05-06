"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  isNight: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsNight(prefersDark);
  }, []);

  useEffect(() => {
    if (isNight) {
      document.body.classList.add("theme-night");
    } else {
      document.body.classList.remove("theme-night");
    }
  }, [isNight]);

  const toggleTheme = () => {
    setIsNight((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isNight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
