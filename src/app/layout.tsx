import './globals.css';

import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  weight: ['800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
});

export const metadata: Metadata = {
  title: 'My Bullet Journal',
  description: 'Tu bullet journal personal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={almarai.variable}>{children}</body>
    </html>
  );
}
