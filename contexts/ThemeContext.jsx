"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { sampleThemes } from '@/lib/theme-utils';

const ThemeContext = createContext();

const defaultTheme = sampleThemes[1];

export function ThemeProvider({ children }) {
  const [currentThemeText, setCurrentThemeText] = useState(defaultTheme.name);
  const [currentTheme, setCurrentTheme] = useState(defaultTheme.theme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const themeCookie = Cookies.get('portfolio-theme');
    const themeTextCookie = Cookies.get('portfolio-theme-text');

    if (themeCookie) {
      try {
        setCurrentTheme(JSON.parse(themeCookie));
      } catch (e) {
        console.error("Error parsing theme cookie:", e);
      }
    }

    if (themeTextCookie) {
      setCurrentThemeText(themeTextCookie);
    }
  }, []);

  const updateTheme = (theme, text) => {
    setCurrentTheme(theme);
    if (text) setCurrentThemeText(text);

    // Update cookies (30 day expiration)
    Cookies.set('portfolio-theme', JSON.stringify(theme), { expires: 30 });
    if (text) Cookies.set('portfolio-theme-text', text, { expires: 30 });

    // For immediate effect on the client side
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  async function getNewTheme(vibe) {
    setLoading(true);

    try {
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ vibe })
      });

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const themeObject = await res.json();

      if (themeObject.error) {
        throw new Error(themeObject.error);
      }

      updateTheme(themeObject, vibe);
    } catch (error) {
      console.error("Error fetching new theme:", error);
      alert(`Error generating theme: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      currentThemeText,
      loading,
      getNewTheme,
      setCurrentTheme: (theme) => updateTheme(theme),
      setCurrentThemeText: (text) => {
        setCurrentThemeText(text);
        Cookies.set('portfolio-theme-text', text, { expires: 30 });
      },
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}