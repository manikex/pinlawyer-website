'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap, X } from 'lucide-react';

export default function CareersPage() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const toggle = (panel: string) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  };

  // ---------- Advocate & Associates form state ----------
  const [advFile, setAdvFile] = useState<File | null>(null);
  const advFileRef = useRef<HTMLInputElement>(null);
  const [advUrl, setAdvUrl] = useState('');

  const handleAdvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAdvFile(e.target.files[0]);
      setAdvUrl(''); // clear URL
    }
  };

  const removeAdvFile = () => {
    setAdvFile(null);
    if (advFileRef.current) advFileRef.current.value = '';
  };

  const handleAdvUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdvUrl(e.target.value);
    if (e.target.value) {
      removeAdvFile(); // clear file
    }
  };

  // ---------- Intern / Researcher form state ----------
  const [internFile, setInternFile] = useState<File | null>(null);
  const internFileRef = useRef<HTMLInputElement>(null);
  const [internUrl, setInternUrl] = useState('');

  const handleInternFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInternFile(e.target.files[0]);
      setInternUrl('');
    }
  };

  const removeInternFile = () => {
    setInternFile(null);
    if (internFileRef.current) internFileRef.current.value = '';
  };

  const handleInternUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternUrl(e.target.value);
    if (e.target.value) {
      removeInternFile();
    }
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
          We are always looking for passionate advocates, legal researchers, and law students who share our vision.
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
                  <form className="space-y-4" noValidate onSubmit={(e) => e.preventDefault()}>
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

                    {/* CV / Resume – single choice */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CV / Resume – Choose one option *
                      </label>

                      {/* PDF Upload */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="file"
                            accept=".pdf"
                            ref={advFileRef}
                            onChange={handleAdvFileChange}
                            disabled={!!advUrl}
                            className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E5B85C]/20 file:text-[#E5B85C] hover:file:bg-[#E5B85C]/30 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          {advFile && (
                            <button
                              type="button"
                              onClick={removeAdvFile}
                              className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1 shrink-0"
                            >
                              <X className="w-4 h-4" /> Remove
                            </button>
                          )}
                        </div>
                        {advFile && (
                          <p className="text-xs text-slate-500 mt-1">Selected: {advFile.name}</p>
                        )}
                      </div>

                      {/* OR divider */}
                      <p className="text-xs text-slate-400 text-center mb-3">— OR —</p>

                      {/* Website Link */}
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={advUrl}
                        onChange={handleAdvUrlChange}
                        disabled={!!advFile}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      />
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
                  <form className="space-y-4" noValidate onSubmit={(e) => e.preventDefault()}>
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
                        <option>Legal Researcher (Hybrid / Remote)</option>
                        <option>Law Student (Intern)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Why do you want to intern with us? *</label>
                      <textarea rows={3} required placeholder="Share your motivation..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm" />
                    </div>

                    {/* CV / Resume – single choice */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CV / Resume – Choose one option *
                      </label>

                      <div className="mb-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="file"
                            accept=".pdf"
                            ref={internFileRef}
                            onChange={handleInternFileChange}
                            disabled={!!internUrl}
                            className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E5B85C]/20 file:text-[#E5B85C] hover:file:bg-[#E5B85C]/30 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          {internFile && (
                            <button
                              type="button"
                              onClick={removeInternFile}
                              className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1 shrink-0"
                            >
                              <X className="w-4 h-4" /> Remove
                            </button>
                          )}
                        </div>
                        {internFile && (
                          <p className="text-xs text-slate-500 mt-1">Selected: {internFile.name}</p>
                        )}
                      </div>

                      <p className="text-xs text-slate-400 text-center mb-3">— OR —</p>

                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={internUrl}
                        onChange={handleInternUrlChange}
                        disabled={!!internFile}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      />
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