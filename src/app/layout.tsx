import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Almarai, Arapey } from 'next/font/google';

const almarai = Almarai({
  weight: ['400', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
});

const arapey = Arapey({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-arapey',
  style: 'italic',
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
      <body className={clsx(almarai.variable, arapey.variable)}>
        {children}
      </body>
    </html>
  );
}
