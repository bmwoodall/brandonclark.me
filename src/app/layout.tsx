import '@/styles/globals.css';
import * as React from 'react';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brandon Clark - Frontend Engineer',
  description:
    'A frontend engineer focused on building accessible, performant, and delightful user experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const className = clsx(
    'antialiased font-text font-regular leading-base bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100',
    font.className,
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
