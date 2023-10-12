import React from 'react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quote Random',
  description: 'Random quotes for you'
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
