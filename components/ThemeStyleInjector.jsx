'use server';

import { cookies } from 'next/headers';

export default async function ThemeStyleInjector() {
  // Get theme from cookies
  const cookieStore =  await cookies();
  const themeCookie = cookieStore.get('portfolio-theme');
  
  let themeStyles = {
    "--color-primary": "#1c1c22",
    "--color-accent": "#00ff99", 
    "--color-accent-hover": "#00e187",
    "--color-text": "#FFFFFF",
    "--color-onAccent": "#000000",
  };

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