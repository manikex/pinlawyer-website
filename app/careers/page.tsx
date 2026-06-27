'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap } from 'lucide-react';

export default function CareersPage() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const toggle = (panel: string) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  };

  return (
    <section className="bg-white">
      {/* Hero – deep teal with abstract lines */}
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-20 pb-28 px-4 md:px-12 overflow-hidden rounded-b-[1.5rem]">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100" stroke="#E5B85C" strokeWidth="1.5" />
          <path d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150" stroke="#E5B85C" strokeWidth="1" opacity="0.6" />
          <path d="M-100 150 C150 300, 350 50, 550 250 C750 450, 950 200, 1300 250" stroke="#E5B85C" strokeWidth="1.2" opacity="0.5" />
          <circle cx="150" cy="80" r="2" stroke="#E5B85C" strokeWidth="0.8" opacity="0.7" />
          <circle cx="850" cy="300" r="3" stroke="#E5B85C" strokeWidth="0.8" opacity="0.5" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Careers <span className="text-[#E5B85C]">at Pin Lawyer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Join a team that delivers justice at every PIN code.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12 py-16 md:py-20">
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          We keep Rolling vacancy, and so, we are always looking for passionate advocates, legal researchers, and law students who share our vision.
        </p>

        {/* Panel 1: Advocate & Associates */}
        <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden">
          <button
            onClick={() => toggle('advocate')}
            className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-[#E5B85C]/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#E5B85C]" />
              </div>
              <span className="text-lg font-semibold text-slate-900">Advocate & Associates</span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                openPanel === 'advocate' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openPanel === 'advocate' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <p className="text-slate-600 mb-4 text-sm">
                    We are looking for advocates and associates with 0–5 years of experience to join our litigation and advisory teams.
                  </p>
                  <form className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Full Name *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                      <input type="email" required placeholder="Email Address *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="tel" required placeholder="Phone Number *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                      <input type="text" required placeholder="Current Location *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Cover Note *</label>
                      <textarea rows={3} required placeholder="Tell us why you want to join Pin Lawyer..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Upload CV / Resume (PDF, max 2 MB) *</label>
                      <input type="file" required accept=".pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E5B85C]/20 file:text-[#E5B85C] hover:file:bg-[#E5B85C]/30 transition cursor-pointer" />
                    </div>
                    <button type="submit" className="px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#072828] font-semibold rounded-lg transition">
                      Submit Application
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Panel 2: Legal Researcher & Intern (Law Students) */}
        <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden">
          <button
            onClick={() => toggle('intern')}
            className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-[#E5B85C]/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#E5B85C]" />
              </div>
              <span className="text-lg font-semibold text-slate-900">Legal Researcher & Intern (Law Students)</span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                openPanel === 'intern' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openPanel === 'intern' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <p className="text-slate-600 mb-4 text-sm">
                    We offer internships and research positions for law students and recent graduates. Work on real cases, drafts, and legal research.
                  </p>
                  <form className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Full Name *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                      <input type="email" required placeholder="Email Address *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Law School / University *" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                      <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm bg-white">
                        <option value="">Year of Study *</option>
                        <option>1st year of 3 years LLB</option>
                        <option>2nd year of 3 years LLB</option>
                        <option>3rd year of 3 years LLB</option>
                        <option>1st year of 5 years LLB</option>
                        <option>2nd year of 5 years LLB</option>
                        <option>3rd year of 5 years LLB</option>
                        <option>4th year of 5 years LLB</option>
                        <option>5th year of 5 years LLB</option>
                        <option>LLM</option>
                      </select>
                    </div>
                    <div>
                      <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm bg-white">
                        <option value="">I am applying as *</option>
                        <option>Legal Researcher</option>
                        <option>Law Student (Intern)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Why do you want to intern with us? *</label>
                      <textarea rows={3} required placeholder="Share your motivation..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Upload CV / Resume (PDF, max 2 MB) *</label>
                      <input type="file" required accept=".pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E5B85C]/20 file:text-[#E5B85C] hover:file:bg-[#E5B85C]/30 transition cursor-pointer" />
                    </div>
                    <button type="submit" className="px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#072828] font-semibold rounded-lg transition">
                      Submit Application
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-sm text-slate-500 italic text-center">
          Available at your Pin Code.
        </p>
      </div>
    </section>
  );
}