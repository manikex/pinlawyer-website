'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { BlogPost } from '@/lib/posts';
import Link from 'next/link';
import { BookOpen, Calendar, Tag, MapPin, Search, Clock, ArrowRight, X } from 'lucide-react';

// ---------- Subject Cards Definition ----------
const subjectCards = [
  {
    id: 'consumer-rights',
    title: 'Consumer Rights',
    description: 'Know your rights as a consumer. Guides on filing complaints, NCDRC procedures, and more.',
    icon: '🛡️',
    color: 'bg-amber-50 border-amber-200 hover:border-amber-400 dark:bg-amber-950/20 dark:border-amber-800',
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Bail, anticipatory bail, cyber fraud, and criminal appeals explained simply.',
    icon: '⚖️',
    color: 'bg-red-50 border-red-200 hover:border-red-400 dark:bg-red-950/20 dark:border-red-800',
  },
  {
    id: 'corporate-law',
    title: 'Corporate & Commercial',
    description: 'Company incorporation, contracts, NCLT matters, and cross-border advisory.',
    icon: '🏢',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400 dark:bg-blue-950/20 dark:border-blue-800',
  },
  {
    id: 'family-law',
    title: 'Family & Matrimonial',
    description: 'Divorce, maintenance, child custody, and domestic violence matters.',
    icon: '👨‍👩‍👧',
    color: 'bg-purple-50 border-purple-200 hover:border-purple-400 dark:bg-purple-950/20 dark:border-purple-800',
  },
  {
    id: 'arbitration',
    title: 'Arbitration & ADR',
    description: 'Domestic and international arbitration, mediation, and enforcement of awards.',
    icon: '🤝',
    color: 'bg-green-50 border-green-200 hover:border-green-400 dark:bg-green-950/20 dark:border-green-800',
  },
  {
    id: 'property-rera',
    title: 'Property & RERA',
    description: 'Real estate disputes, homebuyer rights, and RERA compliance.',
    icon: '🏠',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400 dark:bg-orange-950/20 dark:border-orange-800',
  },
  {
    id: 'employment',
    title: 'Employment & Labour',
    description: 'Employment contracts, wrongful termination, and service matters.',
    icon: '💼',
    color: 'bg-teal-50 border-teal-200 hover:border-teal-400 dark:bg-teal-950/20 dark:border-teal-800',
  },
  {
    id: 'general',
    title: 'General Legal',
    description: 'Legal awareness, updates, and miscellaneous topics.',
    icon: '📚',
    color: 'bg-slate-50 border-slate-200 hover:border-slate-400 dark:bg-slate-800 dark:border-slate-700',
  },
];

// ---------- Rhombus Falling Card Animation ----------
function RhombusCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 15, y: 40 }}
      animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

// ---------- Particle Canvas ----------
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229,184,92,${p.opacity})`; ctx.fill();
        particles.forEach((p2) => {
          const dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.strokeStyle = `rgba(229,184,92,${0.04 * (1 - dist / 80)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// ---------- Reading time calculator ----------
function getReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ---------- Skeleton Card ----------
function SkeletonCard() {
  return (
    <div className="animate-pulse p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-3" />
      <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-4" />
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
    </div>
  );
}

// ---------- Main Content ----------
export default function LawLibraryContent({ posts }: { posts: BlogPost[] }) {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, [posts]);

  // Filter posts by subject + search
  const filteredPosts = useMemo(() => {
    let result = posts;
    if (selectedSubject) {
      result = result.filter(
        (post) => post.category.toLowerCase().replace(/\s+/g, '-') === selectedSubject
      );
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, selectedSubject, searchQuery]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  const selectedCard = subjectCards.find((card) => card.id === selectedSubject);

  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-14 pb-16 px-4 md:px-12 overflow-hidden">
        <ParticleCanvas />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <BookOpen className="w-10 h-10 text-[#E5B85C]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Law <span className="text-[#E5B85C]">Library</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Browse legal insights by subject. Select a category to explore articles.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 max-w-md mx-auto relative"
          >
            <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles… (e.g., consumer rights, bail)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 py-10">
        {/* Subject Cards – only when no subject is selected */}
        {!selectedSubject && !loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjectCards.map((card, idx) => {
              const count = posts.filter(
                (p) => p.category.toLowerCase().replace(/\s+/g, '-') === card.id
              ).length;
              return (
                <RhombusCard key={card.id} delay={idx * 0.07}>
                  <button
                    onClick={() => {
                      setSelectedSubject(card.id);
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 w-full cursor-pointer group ${card.color}`}
                  >
                    <span className="text-3xl block mb-3">{card.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-[#E5B85C] dark:group-hover:text-[#E5B85C]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">
                        {count} article{count !== 1 ? 's' : ''}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E5B85C] transition" />
                    </div>
                  </button>
                </RhombusCard>
              );
            })}
          </div>
        )}

        {/* When a subject is selected */}
        {selectedSubject && (
          <>
            {/* Back button + subject header */}
            <button
              onClick={() => { setSelectedSubject(null); setSearchQuery(''); }}
              className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#E5B85C] mb-6 transition"
            >
              ← Back to all subjects
            </button>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{selectedCard?.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {selectedCard?.title}
              </h2>
            </div>

            {/* Category Filter Pills */}
            {categories.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-[#E5B85C] text-[#072828] shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            )}

            {!loading && filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  No articles in this category yet
                </h3>
                <p className="text-slate-500 dark:text-slate-500">
                  {searchQuery ? 'Try a different search term.' : 'Check back soon for new content.'}
                </p>
              </div>
            )}

            {/* Featured Article */}
            {!loading && featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <Link
                  href={`/law-library/${featuredPost.slug}`}
                  className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-[#072828] border border-slate-700 hover:border-[#E5B85C] transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#E5B85C] blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#E5B85C] blur-3xl" />
                  </div>
                  <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-[#E5B85C] bg-[#E5B85C]/10 px-3 py-1 rounded-full">
                          Featured
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {featuredPost.date}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {getReadingTime(featuredPost.content || '')} min read
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E5B85C] transition-colors mb-3">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed mb-4">{featuredPost.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-[#E5B85C] text-sm font-medium group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-[#E5B85C]/10 flex items-center justify-center shrink-0">
                      <BookOpen className="w-10 h-10 text-[#E5B85C]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Remaining Articles Grid */}
            {!loading && remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={`/law-library/${post.slug}`}
                      className="group block p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-[#E5B85C] hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                        <span className="mx-1">·</span>
                        <Clock className="w-3 h-3" />
                        {getReadingTime(post.content || '')} min read
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-[#E5B85C] transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs mt-auto">
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Tag className="w-3 h-3" /> {post.category}
                        </span>
                        {post.pinRegion && (
                          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                            <MapPin className="w-3 h-3" /> {post.pinRegion}
                          </span>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <p className="pb-12 text-sm text-slate-500 dark:text-slate-500 italic text-center">
        Available at your PIN code.
      </p>
    </section>
  );
}