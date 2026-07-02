'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const faqs = [
  {
    question: 'Do I need to travel to Delhi for my case?',
    answer:
      'No. We travel to the relevant court — whether it\'s the Supreme Court in Delhi, a High Court in another state, or a tribunal. You can stay in your city and receive regular updates via WhatsApp, email, or video call.',
  },
  {
    question: 'How does remote legal advisory work?',
    answer:
      'We use secure video calls for consultations, encrypted cloud storage for document sharing, and e‑signatures for formalities. You get the same quality of advice as an in‑person meeting — without the commute.',
  },
  {
    question: 'Is Pin Lawyer really available across all of India?',
    answer:
      'Yes. We appear in courts and tribunals across the country. Our chambers are in Delhi, but our practice reaches every state, every High Court, and every district. Enter your Pin Code on the homepage to confirm — you\'ll see.',
  },
  {
    question: 'What about international clients without an Indian PIN code?',
    answer:
      'No PIN code? No problem. We serve clients in the UK, Canada, USA, and Singapore remotely. We schedule calls during your business hours, and all documentation is handled digitally.',
  },
  {
    question: 'How quickly can I speak with a lawyer?',
    answer:
      'We aim to respond within 77 hours for regular consultations. For urgent matters, our Urgent Contact service guarantees a connection within 30–40 minutes (available on the Contact page).',
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<'faq' | 'testimonials'>('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-14 pb-16 px-4 md:px-12 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
          <path d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100" stroke="#E5B85C" strokeWidth="1.5" />
          <path d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150" stroke="#E5B85C" strokeWidth="1" opacity="0.6" />
          <circle cx="150" cy="80" r="2" stroke="#E5B85C" strokeWidth="0.8" opacity="0.7" />
        </svg>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            FAQs <span className="text-[#E5B85C]">&amp; Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300"
          >
            Common questions and what our clients say about us.
          </motion.p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        <div className="w-full flex border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 text-center px-4 py-3 text-sm font-semibold rounded-t-lg transition-colors ${
              activeTab === 'faq'
                ? 'bg-white dark:bg-slate-950 text-[#E5B85C] border-t border-l border-r border-slate-200 dark:border-slate-700'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 bg-slate-50 dark:bg-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 inline mr-1" /> FAQs
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex-1 text-center px-4 py-3 text-sm font-semibold rounded-t-lg transition-colors ${
              activeTab === 'testimonials'
                ? 'bg-white dark:bg-slate-950 text-[#E5B85C] border-t border-l border-r border-slate-200 dark:border-slate-700'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 bg-slate-50 dark:bg-slate-900'
            }`}
          >
            <MessageCircle className="w-4 h-4 inline mr-1" /> Testimonials
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-10">
        <AnimatePresence mode="wait">
          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-slate-900 hover:bg-[#E5B85C]/5 transition-colors"
                    >
                      <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCarousel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="pb-12 text-sm text-slate-500 dark:text-slate-500 italic text-center">
        Available at your PIN code.
      </p>
    </section>
  );
}