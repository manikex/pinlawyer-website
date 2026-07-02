'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Newspaper, Award, Calendar, Sparkles } from 'lucide-react';
import { NewsPost } from '@/lib/news-posts';

const categoryCards = [
  {
    id: 'updates',
    title: 'Latest Updates',
    description: 'Firm announcements, expansions, and legal developments from Pin Lawyer.',
    icon: Newspaper,
    color: 'bg-blue-50 border-blue-200 hover:border-[#1E3A5F] dark:bg-blue-950/20 dark:border-blue-800',
    iconBg: 'bg-blue-100',
    iconColor: 'text-[#1E3A5F]',
    dataCategories: ['Pin Update', 'De Jure', 'Lex Loci', 'Per Curiam'],
    filterOptions: ['All', 'Pin Update', 'De Jure', 'Lex Loci', 'Per Curiam'],
  },
  {
    id: 'victories',
    title: 'Use Cases',
    description: 'Notable case outcomes and landmark judgments from across Indian courts.',
    icon: Award,
    color: 'bg-amber-50 border-amber-200 hover:border-amber-400 dark:bg-amber-950/20 dark:border-amber-800',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    dataCategories: ['Bona Fide', 'Interim', 'De Facto', 'Sub Judice'],
    filterOptions: ['All', 'Bona Fide', 'Interim', 'De Facto', 'Sub Judice'],
  },
];

export default function NewsContent({ allNews }: { allNews: NewsPost[] }) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const selectedCard = categoryCards.find((card) => card.id === selectedCardId);

  const handleCategoryClick = (cardId: string) => {
    setSelectedCardId(cardId);
    setActiveFilter('All');
  };

  const handleBack = () => {
    setSelectedCardId(null);
    setActiveFilter('All');
  };

  const filteredItems = useMemo(() => {
    if (!selectedCard) return [];

    const sectionItems = allNews.filter(
      (item) => item.section === selectedCardId
    );

    if (activeFilter === 'All') return sectionItems;

    return sectionItems.filter((item) => item.category === activeFilter);
  }, [selectedCard, activeFilter, allNews]);

  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-14 pb-16 px-4 md:px-12 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
          <path d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100" stroke="#E5B85C" strokeWidth="1.5" />
          <path d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150" stroke="#E5B85C" strokeWidth="1" opacity="0.6" />
          <circle cx="150" cy="80" r="2" stroke="#E5B85C" strokeWidth="0.8" opacity="0.7" />
        </svg>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#E5B85C]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              News <span className="text-[#E5B85C]">&amp; Use Cases</span>
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest legal developments, use cases, and announcements from Pin Lawyer.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12">
        <AnimatePresence mode="wait">
          {!selectedCard ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {categoryCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCategoryClick(card.id)}
                  className={`group relative text-left p-8 rounded-2xl border-2 transition-all duration-500 w-full cursor-pointer ${card.color}`}
                >
                  <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1E3A5F] dark:text-[#E5B85C]">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#1E3A5F] rounded-tr-lg" />
                  </div>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="articles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <button onClick={handleBack} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#E5B85C] mb-6 transition">
                ← Back to categories
              </button>

              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl ${selectedCard.iconBg} flex items-center justify-center`}>
                  <selectedCard.icon className={`w-5 h-5 ${selectedCard.iconColor}`} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{selectedCard.title}</h2>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-8">
                {selectedCard.filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-[#1E3A5F] text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#1E3A5F]/10'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {filteredItems.length === 0 ? (
                <div className="text-center py-20">
                  <Newspaper className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No articles in this category yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/news/${item.slug}`}
                      className="group relative block p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-[#1E3A5F] transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at center, rgba(30,58,95,0.08) 0%, transparent 70%)' }}
                      />
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#1E3A5F] rounded-tr-lg" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-xs mb-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            selectedCardId === 'victories' ? 'bg-amber-100 text-amber-700' : 'bg-[#1E3A5F]/10 text-[#1E3A5F]'
                          }`}>
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <Calendar className="w-3 h-3" /> {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#1E3A5F] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{item.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1E3A5F] group-hover:gap-2 transition-all duration-300">
                          Read Full Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1E3A5F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="pb-12 text-sm text-slate-500 italic text-center">
        Available at your PIN code.
      </p>
    </section>
  );
}