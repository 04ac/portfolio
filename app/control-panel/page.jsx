"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useTheme } from '../../contexts/ThemeContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { sampleThemes } from '@/lib/theme-utils.js';

const Divider = () => {
  return (
    <div className='w-full max-w-3xl mx-auto my-2 h-[0.5] bg-[var(--color-accent)]/60'></div>
  )
}

export default function ControlPanel() {
  const [vibe, setVibe] = useState("");
  const { currentThemeText, loading, getNewTheme, setCurrentTheme, setCurrentThemeText } = useTheme();

  return (
    <main className='h-full w-full mx-auto max-w-3xl'>
      <div className="text-[var(--color-text)] bg-[var(--color-primary)] min-h-screen flex flex-col gap-4 p-4 items-center">
        <div className="text-center font-bold text-3xl text-[var(--color-accent)]">
          Control Panel
        </div>
        <p className='text-center'>Customise my portfolio the way you like it! Try creating your own color scheme by typing out a vibe in the textbox.</p>
        <Divider />
        <div className="@container h-full w-full">
          <div className='flex flex-col @xl:flex-row gap-4'>
            <div className="bg-[var(--color-accent)] text-2xl flex items-center justify-center 
            p-4 text-[var(--color-onAccent)] @xl:order-2 w-full rounded-xl @xl:rounded-2xl">
              Accent Color
            </div>
            <div className='mt-4 @xl:mt-0 flex flex-col gap-4 @xl:order-1 w-full text-center'>
              <p className="">
                Current Vibe: <span className="font-bold capitalize">{currentThemeText}</span>
              </p>
              <Input
                type="text"
                placeholder="Enter a vibe..."
                value={vibe}
                onChange={(e) => {
                  setVibe(e.target.value)
                }}
              />
              <Button
                onClick={() => getNewTheme(vibe)}
                className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]
                px-4 py-2 rounded transition-colors duration-200 text-[var(--color-onAccent)]
                shadow-md border-2 border-[var(--color-accent)]"
              >
                {!loading ? "Change Theme" : "Loading"}
              </Button>
            </div>
          </div>
        </div>
        <Divider />
        <h4 className="mb-2">Sample Styles</h4>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {
            sampleThemes.map((item, index) => {
              return <Button
                key={index}
                className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]
                px-4 py-2 rounded transition-colors duration-200 text-[var(--color-onAccent)]
                border-2 border-[var(--color-accent)]"
                onClick={() => {
                  setCurrentTheme(item.theme);
                  // setVibe(item.name);
                  setCurrentThemeText(item.name);
                }}
              >
                {item.name}
              </Button>
            })
          }
        </div>
      </div>
    </main>
  );
}