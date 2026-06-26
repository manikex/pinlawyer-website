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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Your Advocate.<br />
            <span className="text-amber-400">Available at Your PIN Code.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
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
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition transform hover:scale-105 active:scale-95"
            >
              Check Availability
            </button>
          </motion.div>
          <p className="mt-3 text-xs text-slate-400">We cover all of India. Yes, your PIN too.</p>
        </div>

        <div className="flex-1 flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-64 h-64 md:w-80 md:h-80 bg-amber-400/10 rounded-full flex items-center justify-center"
          >
            <MapPin className="w-16 h-16 text-amber-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}