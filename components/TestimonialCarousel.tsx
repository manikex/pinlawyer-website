'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Even from a small village in Bihar, Pin Lawyer fought my case in the Supreme Court and got the delay condoned. I never had to leave my village.',
    name: 'Suman Kumar',
    location: 'PIN 803110, Bihar',
    case: 'Supreme Court SLP',
  },
  {
    quote: 'Transparent fees and regular WhatsApp updates. I always knew exactly where my case stood. Highly recommended for anyone needing affordable legal help.',
    name: 'Anita Sharma',
    location: 'PIN 110001, Delhi',
    case: 'Consumer Complaint',
  },
  {
    quote: 'They filed my consumer complaint remotely. I didn\'t step out of my house, and I got my refund within months. The entire process was smooth.',
    name: 'Vikram Patel',
    location: 'PIN 452001, Indore',
    case: 'NCDRC Matter',
  },
  {
    quote: 'As an international client in the UK, I needed Indian legal advice. Pin Lawyer handled everything remotely. Professional and prompt.',
    name: 'Dr. Meera Nair',
    location: 'London, UK (PIN 682001)',
    case: 'International Advisory',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % testimonials.length); };

  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="relative overflow-hidden min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              <Quote className="w-10 h-10 text-[#E5B85C]/30 mb-6" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl italic mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5B85C]/20 flex items-center justify-center">
                  <span className="text-[#E5B85C] font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">{testimonials[current].name}</p>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {testimonials[current].location}
                  </p>
                  <p className="text-xs text-[#E5B85C] font-medium">{testimonials[current].case}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#E5B85C] hover:text-[#E5B85C] transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-[#E5B85C] w-6' : 'bg-slate-300'}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-[#E5B85C] hover:text-[#E5B85C] transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}