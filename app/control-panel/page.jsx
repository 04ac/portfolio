"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useTheme } from '../../contexts/ThemeContext.jsx';
import { Button } from '@/components/ui/button.jsx';

export default function Home() {
  const [vibe, setVibe] = useState("");
  const { currentThemeText, loading, getNewTheme, setCurrentTheme, setCurrentThemeText } = useTheme();

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
        <Input
          type="text"
          placeholder="Enter a vibe..."
          value={vibe}
          onChange={(e) => {
            setVibe(e.target.value)
          }}
        />
        <button 
          onClick={() => getNewTheme(vibe)}
          className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] px-4 py-2 rounded transition-colors duration-200 text-[var(--color-onAccent)]"
        >
          {!loading ? "Change Theme" : "Loading"}
        </button>
        <h4>Sample Styles</h4>
        <div className='flex flex-row'>
          <Button
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] px-4 py-2 rounded transition-colors duration-200 text-[var(--color-onAccent)]"
            onClick={() => {
              const theme = {
                "--color-primary": "#1c1c22",
                "--color-accent": "#00ff99",
                "--color-accent-hover": "#00e187",
                "--color-text": "#FFFFFF",
                "--color-onAccent": "#000000",
              };
              
              setCurrentTheme(theme);
              setVibe("Verde Areen");
              setCurrentThemeText("Verde Areen");
            }}
          >
            Verde Areen
          </Button>
        </div>
      </div>
    </main>
  );
}