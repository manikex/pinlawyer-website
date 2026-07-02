'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
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

// ---------- Animated Geometric Grid ----------
function GeometricGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0005;
      const spacing = 60;

      ctx.strokeStyle = 'rgba(229, 184, 92, 0.08)';
      ctx.lineWidth = 0.5;

      // Vertical lines with subtle wave
      for (let x = -spacing; x < canvas.width + spacing; x += spacing) {
        const wave = Math.sin(x * 0.01 + time) * 3;
        ctx.beginPath();
        ctx.moveTo(x + wave, 0);
        ctx.lineTo(x + wave, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with subtle wave
      for (let y = -spacing; y < canvas.height + spacing; y += spacing) {
        const wave = Math.cos(y * 0.01 + time) * 3;
        ctx.beginPath();
        ctx.moveTo(0, y + wave);
        ctx.lineTo(canvas.width, y + wave);
        ctx.stroke();
      }

      // Subtle glowing nodes at intersections
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const waveX = Math.sin(x * 0.01 + time) * 3;
          const waveY = Math.cos(y * 0.01 + time) * 3;
          ctx.beginPath();
          ctx.arc(x + waveX, y + waveY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(229, 184, 92, 0.15)';
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ---------- Floating Orbs (brighter) ----------
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#1E3A5F]/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#E5B85C]/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-white/5 blur-3xl"
      />
    </div>
  );
}

// ---------- News Content ----------
export default function NewsContent({ allNews }: { allNews: NewsPost[] }) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [bgTheme, setBgTheme] = useState<'dark' | 'brighter'>('dark');

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
    const sectionItems = allNews.filter((item) => item.section === selectedCardId);
    if (activeFilter === 'All') return sectionItems;
    return sectionItems.filter((item) => item.category === activeFilter);
  }, [selectedCard, activeFilter, allNews]);

  // ---------- Auto-changing background theme ----------
  useEffect(() => {
    const interval = setInterval(() => {
      setBgTheme((prev) => (prev === 'dark' ? 'brighter' : 'dark'));
    }, 2800); // Change every 2.8 seconds

    return () => clearInterval(interval);
  }, []);

  // Background classes based on theme
  const bgClasses = {
    dark: 'from-slate-950 via-[#0a0f1a] to-slate-900',
    brighter: 'from-[#0a1628] via-[#0f1f3a] to-[#0a1628]',
  };

  // Text colors based on theme
  const textClasses = {
    dark: 'text-slate-400',
    brighter: 'text-slate-300',
  };

  // Badge styles based on theme
  const badgeClasses = {
    dark: 'bg-white/5 border-white/10',
    brighter: 'bg-white/10 border-white/15',
  };

  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* ========== HERO – Auto-changing background ========== */}
      <motion.div
        initial={false}
        animate={{
          background: bgTheme === 'dark' 
            ? 'linear-gradient(to bottom right, #0f172a, #0a0f1a, #0f172a)'
            : 'linear-gradient(to bottom right, #0a1628, #0f1f3a, #0a1628)',
        }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
        className="relative text-white pt-14 pb-16 px-4 md:px-12 overflow-hidden"
      >
        {/* Animated geometric grid */}
        <GeometricGrid />

        {/* Floating orbs for depth */}
        <FloatingOrbs />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-4"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium text-[#E5B85C] uppercase tracking-widest transition-all duration-1000 ${badgeClasses[bgTheme]}`}>
              <Sparkles className="w-3.5 h-3.5" />
              Pin Lawyer Insights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4"
          >
            News{' '}
            <span className="bg-gradient-to-r from-[#E5B85C] via-amber-300 to-[#E5B85C] bg-clip-text text-transparent">
              &amp; Use Cases
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${textClasses[bgTheme]}`}
          >
            Explore firm updates, landmark judgments, and practical legal applications — 
            all in one place.
          </motion.p>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="mt-6 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#E5B85C] to-transparent mx-auto"
          />
        </div>
      </motion.div>

      {/* ========== Content Area ========== */}
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
      <p className="pb-12 text-sm text-slate-500 italic text-center">Available at your PIN code.</p>
    </section>
  );
}