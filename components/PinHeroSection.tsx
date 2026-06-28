'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MapPin, AlertCircle } from 'lucide-react';

export default function PinHeroSection() {
  const [pin, setPin] = useState('');
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#031a1a] via-[#041f1f] to-[#031a1a] text-white py-20 px-4 md:px-12">
      {/* Abstract lines – left half on desktop, top half on mobile */}
      <svg
        className="absolute left-0 top-0 w-1/2 h-full opacity-10 pointer-events-none
                   max-lg:w-full max-lg:h-1/2"
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-50 200 C100 50, 200 350, 350 150 C500 -50, 600 300, 650 100" stroke="#E5B85C" strokeWidth="1.5" />
        <path d="M-50 250 C150 100, 250 400, 400 200 C550 0, 600 350, 650 150" stroke="#E5B85C" strokeWidth="1" opacity="0.6" />
        <path d="M-50 100 C100 300, 300 50, 400 250 C500 450, 550 150, 650 200" stroke="#E5B85C" strokeWidth="1.2" opacity="0.5" />
        <circle cx="80" cy="60" r="2" stroke="#E5B85C" strokeWidth="0.8" opacity="0.7" />
        <circle cx="350" cy="300" r="3" stroke="#E5B85C" strokeWidth="0.8" opacity="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative z-10">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Your Advocate.<br />
            <span className="text-[#E5B85C]">Available at Your Pin Code.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-gray-200 max-w-xl mx-auto lg:mx-0"
          >
            Supreme Court, High Courts, NCLT, NCLAT, Consumer Forums — now just a click away from anywhere in India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto lg:mx-0"
          >
            <div className="relative w-full">
              <MapPin className="absolute left-3 top-3.5 text-gray-300 w-5 h-5" />
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
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
              />
              <AnimatePresence>
                {showMessage && result === 'valid' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 left-0 right-0 bg-emerald-500/90 text-white text-sm px-3 py-2 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" /> Your PIN {pin} is fully covered! Book a free call.
                  </motion.div>
                )}
                {showMessage && result === 'invalid' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full mt-2 left-0 right-0 bg-red-500/90 text-white text-sm px-3 py-2 rounded-lg flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" /> Please enter a valid 6‑digit Indian PIN code.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={handleCheck}
              className="w-full sm:w-auto px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#041f1f] font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
            >
              Check Availability
            </button>
          </motion.div>
          <p className="mt-3 text-xs text-gray-300">We cover all of India. Yes, your PIN too.</p>
        </div>

        {/* Right visual: Circular pin */}
        <div className="flex-1 flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-64 h-64 md:w-80 md:h-80 bg-[#E5B85C]/10 rounded-full flex items-center justify-center"
          >
            <MapPin className="w-16 h-16 text-[#E5B85C]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}