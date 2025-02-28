import React from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-charcoal antialiased h-full w-full">
      {children}
    </main>
  );
}