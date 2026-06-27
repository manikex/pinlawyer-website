'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need to travel to Delhi for my case?',
    answer: 'No. We travel to the relevant court — whether it\'s the Supreme Court in Delhi, a High Court in another state, or a tribunal. You can stay in your city and receive regular updates via WhatsApp, email, or video call.',
  },
  {
    question: 'How does remote legal advisory work?',
    answer: 'We use secure video calls for consultations, encrypted cloud storage for document sharing, and e‑signatures for formalities. You get the same quality of advice as an in‑person meeting — without the commute.',
  },
  {
    question: 'Is Pin Lawyer really available across all of India?',
    answer: 'Yes. We appear in courts and tribunals across the country. Our chambers are in Delhi, but our practice reaches every state, every High Court, and every district. Enter your Pin Code on the homepage to confirm — you\'ll see.',
  },
  {
    question: 'What about international clients without an Indian PIN code?',
    answer: 'No PIN code? No problem. We serve clients in the UK, Canada, USA, and Singapore remotely. We schedule calls during your business hours, and all documentation is handled digitally.',
  },
  {
    question: 'How quickly can I speak with a lawyer?',
    answer: 'We aim to respond within 77 hours for regular consultations. For urgent matters, our Urgent Contact service guarantees a connection within 30–40 minutes (available on the Contact page).',
  },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-center mb-10">
          Everything you need to know about remote legal services with Pin Lawyer.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#E5B85C]/5 transition-colors"
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500 italic text-center">Available at your Pin Code.</p>
      </div>
    </section>
  );
}