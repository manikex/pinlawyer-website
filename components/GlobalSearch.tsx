'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

const staticPages: SearchResult[] = [
  { title: 'Litigation & Mediation (Bharat - India)', description: 'Supreme Court, all State High Courts, NCDRC, Consumer Forums, CAT, Criminal, Family.', url: '/practice-areas/litigation', category: 'Practice Areas' },
  { title: 'Tort, Motor Vehicles and Insurance Cases', description: 'Motor vehicle accidents, tort law, insurance disputes.', url: '/practice-areas/tort-motor-vehicles-insurance', category: 'Practice Areas' },
  { title: 'ADR - Arbitration and Negotiation Matters', description: 'Domestic and international arbitration, mediation, negotiation.', url: '/practice-areas/arbitration-adr', category: 'Practice Areas' },
  { title: 'Corporate Litigation Real Estate (RERA)', description: 'Commercial court litigation, NCLT/NCLAT, contract disputes, RERA.', url: '/practice-areas/corporate-litigation-rera', category: 'Practice Areas' },
  { title: 'Company Services and International Business Advisory', description: 'Incorporation, compliance, cross‑border contracts.', url: '/practice-areas/international-business', category: 'Practice Areas' },
  { title: 'Law Library', description: 'Legal insights, case analyses, guides.', url: '/law-library', category: 'Resources' },
  { title: 'Pro Bono\'s', description: 'Free legal assistance for underprivileged.', url: '/pro-bono', category: 'Resources' },
  { title: 'Help Center', description: 'Search articles, popular questions.', url: '/help-center', category: 'Resources' },
  { title: 'Features – Work Process & Fees', description: 'How we engage, fees, technology.', url: '/work-process', category: 'Resources' },
  { title: 'FAQs', description: 'Frequently asked questions.', url: '/faq', category: 'Resources' },
  { title: 'Party Testimonial', description: 'Real client stories.', url: '/party-testimonial', category: 'Resources' },
  { title: 'About Us', description: 'Our story, lead advocate, team.', url: '/about', category: 'About' },
  { title: 'Contact Us', description: 'Call, WhatsApp, email, urgent contact.', url: '/contact', category: 'Contact' },
  { title: 'Careers', description: 'Join as Advocate, Legal Researcher, Intern.', url: '/careers', category: 'Careers' },
  { title: 'Your PIN Code & You', description: 'Check coverage, how we serve.', url: '/your-pin-code', category: 'Vision' },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim().length === 0) { setResults([]); return; }
    const lower = q.toLowerCase();
    setResults(
      staticPages.filter(
        (item) =>
          item.title.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower) ||
          item.category.toLowerCase().includes(lower)
      )
    );
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 text-slate-400 hover:text-[#E5B85C] transition text-sm border border-slate-600 rounded-lg px-3 py-1.5"
      >
        <Search className="w-4 h-4" />
        <span className="text-xs">Search...</span>
        <kbd className="text-xs bg-slate-700 px-1.5 py-0.5 rounded ml-2">⌘K</kbd>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-700">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search pages, articles, practice areas..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-slate-500 outline-none text-base"
                />
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {results.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.url}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-[#E5B85C] transition">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                        </div>
                        <span className="text-xs text-[#E5B85C] bg-[#E5B85C]/10 px-2 py-0.5 rounded-full shrink-0 ml-3">
                          {item.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {query && results.length === 0 && (
                <div className="p-8 text-center text-slate-500 text-sm">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}