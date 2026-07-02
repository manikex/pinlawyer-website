import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClientLayout } from './client-layout';
import { ThemeProvider } from '@/components/ThemeProvider';
import GoogleTranslate from '@/components/GoogleTranslate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pin Lawyer – A Lawyer at Your PIN Code',
  description: 'Your advocate available anywhere in India. Supreme Court, High Courts, NCLT, NCLAT, NCDRC, CAT, and more. Economical, trusted legal services at your postal code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200`}
      >
        <ThemeProvider>
          <GoogleTranslate />
          <Header />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}