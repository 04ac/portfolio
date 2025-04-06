'use server';

import { cookies } from 'next/headers';
import { sampleThemes } from '@/lib/theme-utils.js';

export default async function ThemeStyleInjector() {
  // Get theme from cookies
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('portfolio-theme');

  // DEFAULT THEME
  let themeStyles = sampleThemes[1].theme;

  // Parse the theme cookie if it exists
  if (themeCookie) {
    try {
      themeStyles = JSON.parse(themeCookie.value);
    } catch (e) {
      console.error("Error parsing theme cookie:", e);
    }
  }

  // Generate CSS variables
  const cssVariables = Object.entries(themeStyles)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ');

  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        :root {
          ${cssVariables}
        }
      `
    }} />
  );
}