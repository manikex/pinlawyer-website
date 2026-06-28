'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const popularQuestions = [
  { id: 1, question: 'How can I find a lawyer for my specific PIN code?' },
  { id: 2, question: 'What types of cases does Pin Lawyer handle?' },
  { id: 3, question: 'Can I consult a lawyer remotely without visiting the office?' },
  { id: 4, question: 'How do I file a consumer complaint from my hometown?' },
  { id: 5, question: 'What is the fee structure for legal services?' },
  { id: 6, question: 'Is there an urgent contact option for emergencies?' },
];

const smallCards = [
  { title: 'Our Services', icon: '⚖️' },
  { title: 'Legal Consultancies', icon: '📋' },
  { title: 'Feedback', icon: '💬' },
  { title: 'Request a Callback', icon: '📞' },
  { title: 'Terms & Concepts', icon: '📖' },
  { title: 'Case Status', icon: '📊' },
  { title: 'Document Upload', icon: '📁' },
  { title: 'Pricing Plans', icon: '💰' },
  { title: 'Ask a Question', icon: '❓' },
];

export default function HelpCenterPage() {
  const [popularOpen, setPopularOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/help-center/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="bg-white">
      {/* Hero – navy background with abstract spiral lines */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-16 px-4 md:px-12 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100" stroke="#E5B85C" strokeWidth="1.5" />
          <path d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150" stroke="#E5B85C" strokeWidth="1" opacity="0.6" />
          <path d="M-100 150 C150 300, 350 50, 550 250 C750 450, 950 200, 1300 250" stroke="#E5B85C" strokeWidth="1.2" opacity="0.5" />
          <circle cx="150" cy="80" r="2" stroke="#E5B85C" strokeWidth="0.8" opacity="0.7" />
          <circle cx="850" cy="300" r="3" stroke="#E5B85C" strokeWidth="0.8" opacity="0.5" />
        </svg>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Help Center
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg text-slate-300 mb-8">
            Search for articles, guides, or legal queries across our entire website.
          </motion.p>

          {/* Search box – no dropdown, just clean submission */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="relative max-w-xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for anything… (e.g., consumer rights, bail, arbitration)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12 py-16 md:py-20">
        {/* Popular Questions – single expandable panel */}
        <div className="border border-slate-200 rounded-2xl mb-12 overflow-hidden">
          <button
            onClick={() => setPopularOpen(!popularOpen)}
            className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-[#E5B85C]/5 transition-colors"
          >
            <span className="text-xl font-semibold text-slate-900">Popular Questions</span>
            <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${popularOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {popularOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="p-6 pt-0">
                  <ul className="space-y-2">
                    {popularQuestions.map((q) => (
                      <li key={q.id}>
                        <Link href={`/help-center/question/${q.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition group">
                          <span className="text-slate-700 group-hover:text-[#E5B85C] transition">{q.question}</span>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#E5B85C] transition" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small Cards Grid */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">Explore Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {smallCards.map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-md transition-all duration-300 text-center cursor-pointer">
              <span className="text-3xl block mb-3">{card.icon}</span>
              <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-500 italic text-center">Available at your Pin Code.</p>
      </div>
    </section>
  );
}