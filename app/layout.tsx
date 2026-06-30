import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClientLayout } from './client-layout';
import { ThemeProvider } from '@/components/ThemeProvider';

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
    <html lang="en">
      <head>
        <script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en', autoDisplay: false },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider>
          <div id="google_translate_element" style={{ display: 'none' }} />
          <Header />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}