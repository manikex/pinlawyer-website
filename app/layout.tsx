import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClientLayout } from './client-layout';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pin Lawyer – A Lawyer at Your PIN Code',
  description:
    'Your advocate available anywhere in India. Supreme Court, High Courts, NCLT, NCLAT, NCDRC, CAT, and more. Economical, trusted legal services at your postal code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Translate – loaded externally, not inside React */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-900`}>
        {/* Hidden element required by Google Translate */}
        <div id="google_translate_element" style={{ display: 'none' }} />

        {/* Initialise Google Translate safely after the page loads */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          `}
        </Script>

        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}