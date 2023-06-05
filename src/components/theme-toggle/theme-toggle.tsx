'use client';

import * as React from 'react';
import { Moon, Sun } from 'react-feather';
import { useTheme } from 'next-themes';
import { useIsMounted } from '@/hooks';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  const handlThemeToggle = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  if (!isMounted()) return null;

  return (
    <>
      <div className="flex">
        <button
          className="flex w-12 h-12 rounded-full items-center justify-center text-slate-900 hover:text-violet-500 dark:text-slate-100 dark:hover:text-violet-500"
          onClick={handlThemeToggle}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>
    </>
  );
}
