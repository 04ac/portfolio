"use client";
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Home() {
  const { currentThemeText } = useTheme();

  return (
    <main>
      <div className="text-[var(--color-text)] bg-[var(--color-primary)] min-h-screen flex flex-col gap-4 p-4">
        <div className="text-center font-bold underline text-3xl text-[var(--color-accent)]">
          Homepage
        </div>
        <div className="bg-[var(--color-accent)] p-4 text-[var(--color-onAccent)]">
          Primary Background
        </div>
        <p className="mt-4">
          Current Theme: <span className="font-bold capitalize">{currentThemeText}</span>
        </p>
      </div>
    </main>
  );
}