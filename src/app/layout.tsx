import './globals.css';
import localFont from 'next/font/local';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Charae Eh Sin',
  description: 'Web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isVercelProd = process.env.VERCEL_ENV === 'production';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Temporary banner to indicate site is still under development. Only show
        on prod. Eventually this will be removed. */}
        {isVercelProd ? (
          <div className="bg-black p-1 text-center text-sm text-white">
            🚧 Heads Up: We’re still setting things up around here! 🚧
          </div>
        ) : null}
        <div className="mx-auto flex h-screen max-w-4xl flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
