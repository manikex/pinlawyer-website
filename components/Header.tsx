'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';

const navLinks = [
  {
    label: 'Practice Areas',
    children: [
      { href: '/practice-areas/litigation', label: 'Litigation & Dispute Resolution (India)' },
      { href: '/practice-areas/corporate-litigation-rera', label: 'Corporate Litigation & RERA' },
      { href: '/practice-areas/arbitration-adr', label: 'Arbitration & ADR' },
      { href: '/practice-areas/international-business', label: 'Company Law & International Business Advisory' },
    ],
  },
  { href: '/your-pin-code', label: 'Your PIN Code' },
  { href: '/law-library', label: 'Law Library' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'ml', name: 'മലയാളം (Malayalam)' },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)' },
  { code: 'ur', name: 'اردو (Urdu)' },
];

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    if (code === 'en') {
      document.cookie = 'googtrans=/en/en;path=/';
      window.location.reload();
    } else {
      document.cookie = `googtrans=/en/${code};path=/`;
      window.location.reload();
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition px-2 py-1 rounded-lg text-sm"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {languages.find((l) => l.code === currentLang)?.name.split(' ')[0] || 'EN'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 max-h-64 overflow-y-auto z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition ${
                currentLang === lang.code ? 'text-amber-400 font-semibold' : 'text-white'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        >
          <div
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#000000',
              opacity: 1,
            }}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '16rem',
              backgroundColor: '#0f172a',
              padding: '1.5rem',
              boxShadow: '0 0 15px rgba(0,0,0,0.5)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={onClose} style={{ color: '#ffffff', padding: '0.5rem' }}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav
              style={{
                marginTop: '2rem',
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                fontWeight: 500,
                color: '#ffffff',
                paddingBottom: '1rem',
              }}
            >
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p
                      style={{
                        color: '#94a3b8',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        style={{
                          display: 'block',
                          padding: '0.25rem 0 0.25rem 1rem',
                          borderLeft: '1px solid #334155',
                          color: '#ffffff',
                          textDecoration: 'none',
                        }}
                        className="hover:text-amber-400"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                    className="hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link
                href="/contact/urgent"
                onClick={onClose}
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'center',
                  padding: '0.75rem',
                  backgroundColor: '#f59e0b',
                  color: '#0f172a',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                <Phone style={{ width: '1rem', height: '1rem' }} /> Book a Call
              </Link>
            </nav>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <MapPin className="w-6 h-6 text-amber-400" />
          <span>Pin <span className="text-amber-400">Lawyer</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setPracticeOpen(true)}
                onMouseLeave={() => setPracticeOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-amber-400 transition">
                  {link.label} <ChevronDown className="w-4 h-4" />
                </button>

                {practiceOpen && <div className="absolute top-full left-0 w-full h-3" />}

                {practiceOpen && (
                  <div className="absolute top-[calc(100%+0.75rem)] left-0 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 w-72">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-slate-700 hover:text-amber-400 transition whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-amber-400 transition">
                {link.label}
              </Link>
            )
          )}
          {/* Language Switcher */}
          <LanguageSwitcher />
          <Link
            href="/contact/urgent"
            className="ml-2 px-4 py-2 bg-amber-500 text-slate-900 rounded-lg font-semibold hover:bg-amber-400 transition flex items-center gap-1"
          >
            <Phone className="w-4 h-4" /> Book a Call
          </Link>
        </nav>

        {/* Mobile header actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Link
            href="/contact/urgent"
            className="p-2 text-white hover:text-amber-400 transition"
            aria-label="Book a Call"
          >
            <Phone className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer – portal */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}