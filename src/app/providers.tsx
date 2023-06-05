'use client';

import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
