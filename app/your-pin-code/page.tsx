'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Globe,
  Video,
  FileText,
  MessageCircle,
} from 'lucide-react';

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
    question: 'Is PINlawyer really available across all of India?',
    answer:
      'Yes. We appear in courts and tribunals across the country. Our chambers are in Delhi, but our practice reaches every state, every High Court, and every district. Enter your PIN code above to confirm — you\'ll see.',
  },
  {
    question: 'What about international clients without an Indian PIN code?',
    answer:
      'No PIN code? No problem. We serve clients in the UK, Canada, USA, and Singapore remotely. We schedule calls during your business hours, and all documentation is handled digitally.',
  },
  {
    question: 'How quickly can I speak with a lawyer?',
    answer:
      'We aim to respond within 24 hours for regular consultations. For urgent matters, our Urgent Contact service guarantees a connection within 30–40 minutes (available on the Contact page).',
  },
];

const services = [
  {
    icon: Globe,
    title: 'For Courts',
    description:
      'We easily travel to your State High Court or tribunal. You don\'t have to. We handle appearances, filings, and arguments while you track progress remotely.',
  },
  {
    icon: FileText,
    title: 'For Advisory',
    description:
      'Documents, contracts, compliance — all handled remotely. Drafting, review, and negotiation happen over secure digital channels.',
  },
  {
    icon: Video,
    title: 'For International Clients',
    description:
      'No PIN code? No problem. Your time zone is our office hours. We serve clients in the UK, Canada, USA, and Singapore with the same dedication.',
  },
];

export default function YourPinCodePage() {
  const [pin, setPin] = useState('');
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [showMessage, setShowMessage] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validatePin = (code: string) => /^[1-9][0-9]{5}$/.test(code);

  const handleCheck = () => {
    if (validatePin(pin)) {
      setResult('valid');
      setShowMessage(true);
    } else {
      setResult('invalid');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2500);
    }
  };

  return (
    <section className="bg-white">
      {/* Hero with PIN input */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Your PIN Code <span className="text-amber-400">&amp; You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Type any Indian PIN code — see instantly how PINlawyer serves your area.
            From litigation to advisory, we reach every corner of India.
          </motion.p>

          {/* PIN Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <MapPin className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter your 6-digit PIN code"
                value={pin}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                  setPin(val);
                  if (showMessage) {
                    setShowMessage(false);
                    setResult('idle');
                  }
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
            </div>
            <button
              onClick={handleCheck}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Check Coverage
            </button>
          </motion.div>

          {/* Result message */}
          <div className="relative max-w-md mx-auto mt-2">
            <AnimatePresence>
              {showMessage && result === 'valid' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-emerald-500/90 text-white text-sm px-4 py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Your PIN {pin} is fully covered! We serve your area.
                </motion.div>
              )}
              {showMessage && result === 'invalid' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-red-500/90 text-white text-sm px-4 py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  Please enter a valid 6‑digit Indian PIN code.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-3 text-xs text-slate-400">We cover all of India. Yes, your PIN too.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12">
        {/* How we serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            How We Serve You
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
            No matter where your PIN code places you, our service model adapts to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Journey Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            A Real Client Journey
          </h2>
          <div className="max-w-3xl mx-auto mt-8 p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-amber-600 font-medium mb-4">
              <MapPin className="w-5 h-5" />
              PIN — 803110 (a village in Bihar)
            </div>
            <blockquote className="text-slate-600 leading-relaxed">
              <p className="mb-4">
                &ldquo;Our client from a small village in Bihar needed to file a case in the Supreme Court
                of India, New Delhi — but had never travelled outside the state. We handled everything.
              </p>
              <p className="mb-4">
                We drafted the Special Leave Petition, coordinated all documents remotely, and appeared
                before the Court. The 576 days of delay in filing were condoned. The case was admitted.
              </p>
              <p>
                The client never stepped out of their village. Every update came through WhatsApp.
                Every document was shared over email. Justice was delivered — without travel, without
                disruption, and at a fraction of the expected cost.&rdquo;
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Everything you need to know about remote legal services.
          </p>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl mb-3 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-amber-50 transition-colors"
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
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
                      <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="pb-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}