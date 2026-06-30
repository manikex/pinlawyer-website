'use client';

import { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  CheckCircle,
  AlertCircle,
  Globe,
  FileText,
  Video,
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';

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

function YourPinCodeContent() {
  const searchParams = useSearchParams();
  const initialPin = searchParams.get('pin') || '';

  const [pin, setPin] = useState(initialPin);
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [showMessage, setShowMessage] = useState(false);

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

  useEffect(() => {
    if (initialPin && initialPin.length === 6) {
      handleCheck();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white">
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-14 pb-20 px-4 md:px-12 overflow-hidden rounded-b-[1.5rem]">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-50 300 C100 200, 200 80, 400 60 C600 40, 800 80, 1250 50" stroke="#E5B85C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M-50 350 C150 250, 250 120, 450 90 C650 60, 850 90, 1250 70" stroke="#E5B85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M-50 250 C50 150, 150 40, 350 30 C550 20, 750 60, 1250 40" stroke="#E5B85C" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <path d="M100 400 L150 0 M300 400 L320 0 M500 400 L490 0 M700 400 L680 0 M900 400 L870 0 M1100 400 L1080 0" stroke="#E5B85C" strokeWidth="0.6" opacity="0.3" />
          <circle cx="200" cy="70" r="2.5" stroke="#E5B85C" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="600" cy="50" r="3" stroke="#E5B85C" strokeWidth="0.8" fill="none" opacity="0.6" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Your PIN Code <span className="text-[#E5B85C]">&amp; You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Type any Indian PIN code — see instantly how Pin Lawyer serves your area.
            From litigation to advisory, we reach every corner of India.
          </motion.p>

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
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
              />
            </div>
            <button
              onClick={handleCheck}
              className="w-full sm:w-auto px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#072828] font-semibold rounded-lg transition transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Check Coverage
            </button>
          </motion.div>

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
                className="p-6 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-[#E5B85C]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

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
            <div className="flex items-center gap-2 text-[#0F1D3A] font-semibold mb-4">
              <MapPin className="w-5 h-5" />
              PIN — 803110 (a village in Bihar)
            </div>
            <a
              href="https://api.sci.gov.in/supremecourt/2025/45011/45011_2025_15_31_64091_Order_08-Sep-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 text-sm text-blue-600 hover:text-blue-800 underline font-medium"
            >
              View Supreme Court Order (PDF)
            </a>
            <blockquote className="text-slate-600 leading-relaxed">
              <p className="mb-4 text-justify">
                &ldquo;Our client from a small village in Bihar needed to file a case in the Supreme Court
                of India, New Delhi — but had never travelled outside the state. We handled everything.
              </p>
              <p className="mb-4 text-justify">
                We drafted the Special Leave Petition, coordinated all documents remotely, and appeared
                before the Court. The 576 days of delay in filing were condoned. The case was admitted.
              </p>
              <p className="text-justify">
                The client never stepped out of their village. Every update came through WhatsApp.
                Every document was shared over email. Justice was delivered — without travel, without
                disruption, and at a fraction of the expected cost.&rdquo;
              </p>
            </blockquote>
          </div>
        </motion.div>

        <p className="pb-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}