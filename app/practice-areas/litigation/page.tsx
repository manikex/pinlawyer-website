'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const allHighCourts = [
  'Delhi High Court',
  'Calcutta High Court',
  'Bombay High Court',
  'Madras High Court',
  'Allahabad High Court',
  'Karnataka High Court',
  'Patna High Court',
  'J&K and Ladakh High Court',
  'Madhya Pradesh High Court',
  'Punjab and Haryana High Court',
  'Gauhati High Court',
  'Orissa High Court',
  'Rajasthan High Court',
  'Kerala High Court',
  'Gujarat High Court',
  'Himachal Pradesh High Court',
  'Sikkim High Court',
  'Chhattisgarh High Court',
  'Uttarakhand High Court',
  'Jharkhand High Court',
  'Meghalaya High Court',
  'Manipur High Court',
  'Tripura High Court',
  'Andhra Pradesh High Court',
  'Telangana High Court',
];

const otherAreas = [
  {
    name: 'NCDRC & Consumer Forums',
    detail:
      'We handle consumer disputes at all levels – from District Forums to the National Consumer Disputes Redressal Commission.',
    href: '/practice-areas/litigation/ncdrc-consumer-forums',
  },
  {
    name: 'CAT (Service Matters)',
    detail:
      'Representation before the Central Administrative Tribunal for central government employees.',
    href: '/practice-areas/litigation/cat',
  },
  {
    name: 'Education / Academic Matters',
    detail:
      'Advisory and litigation relating to admissions, exams, university regulations, and UGC/AICTE issues.',
    href: '/practice-areas/litigation/education',
  },
  {
    name: 'Employment & Labour Matters',
    detail:
      'Disputes arising out of employment contracts, wrongful termination, industrial disputes, and labour court proceedings.',
    href: '/practice-areas/litigation/employment-labour',
  },
  {
    name: 'Criminal Matters',
    detail:
      'Bail and anticipatory bail appeals, cyber fraud, criminal writs, and representation in sessions and high court.',
    href: '/practice-areas/litigation/criminal',
  },
  {
    name: 'Family & Matrimonial Disputes',
    detail:
      'Divorce, maintenance, child custody, domestic violence, and related family court matters.',
    href: '/practice-areas/litigation/family-matrimonial',
  },
];

export default function LitigationPage() {
  const [openSection, setOpenSection] = useState<string | null>('supreme-court');

  const toggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Litigation & Dispute Resolution (India)
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          We appear before the Supreme Court of India, every State High Court, and specialised tribunals.
          No matter your PIN code, we are your voice in the courtroom.
        </p>

        {/* Supreme Court */}
        <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden">
          <button
            onClick={() => toggle('supreme-court')}
            className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-amber-50 transition-colors"
          >
            <span className="text-xl font-semibold text-slate-900">
              Supreme Court of India
            </span>
            <ChevronDown
              className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                openSection === 'supreme-court' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openSection === 'supreme-court' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  <p className="mb-4">
                    We handle Special Leave Petitions (SLPs), Civil Appeals, Criminal Appeals,
                    Transfer Petitions, Writ Petitions under Article 32, and Contempt Petitions
                    before the Supreme Court of India.
                  </p>
                  <Link
                    href="/practice-areas/litigation/supreme-court"
                    className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium text-sm transition"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* State High Courts */}
        <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden">
          <button
            onClick={() => toggle('high-courts')}
            className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-amber-50 transition-colors"
          >
            <span className="text-xl font-semibold text-slate-900">
              State High Courts
            </span>
            <ChevronDown
              className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                openSection === 'high-courts' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openSection === 'high-courts' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <p className="text-slate-600 mb-4">
                    We regularly travel to and appear in all 25 State High Courts across India.
                    Click any High Court below to learn more about our practice there.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {allHighCourts.map((court) => {
                      const slug = court
                        .toLowerCase()
                        .replace(/&/g, 'and')
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9-]/g, '');
                      return (
                        <Link
                          key={court}
                          href={`/practice-areas/litigation/${slug}`}
                          className="flex items-center gap-2 text-sm text-slate-700 px-3 py-2 rounded-lg bg-slate-100 hover:bg-amber-50 hover:text-amber-700 transition"
                        >
                          <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                          {court}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Other areas */}
        {otherAreas.map((area, idx) => (
          <div key={idx} className="border border-slate-200 rounded-2xl mb-4 overflow-hidden">
            <button
              onClick={() => toggle(area.name)}
              className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-amber-50 transition-colors"
            >
              <span className="text-lg font-semibold text-slate-900">{area.name}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                  openSection === area.name ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openSection === area.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    <p className="mb-4">{area.detail}</p>
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium text-sm transition"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <p className="mt-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}