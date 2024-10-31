import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto flex h-screen max-w-4xl flex-col justify-between overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
