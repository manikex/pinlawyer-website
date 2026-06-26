'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const highCourts = [
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
    title: 'NCDRC & Consumer Forums',
    detail:
      'We handle consumer disputes at all levels – from District Forums to the National Consumer Disputes Redressal Commission.',
  },
  {
    title: 'CAT (Service Matters)',
    detail:
      'Representation before the Central Administrative Tribunal for central government employees.',
  },
  {
    title: 'Education / Academic Matters',
    detail:
      'Advisory and litigation relating to admissions, exams, university regulations, and UGC/AICTE issues.',
  },
  {
    title: 'Employment & Labour Matters',
    detail:
      'Disputes arising out of employment contracts, wrongful termination, industrial disputes, and labour court proceedings.',
  },
  {
    title: 'Criminal Matters',
    detail:
      'Bail and anticipatory bail appeals, cyber fraud, criminal writs, and representation in sessions and high court.',
  },
  {
    title: 'Family & Matrimonial Disputes',
    detail:
      'Divorce, maintenance, child custody, domestic violence, and related family court matters.',
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
                  <p>
                    We handle Special Leave Petitions (SLPs), Civil Appeals, Criminal Appeals,
                    Transfer Petitions, Writ Petitions under Article 32, and Contempt Petitions
                    before the Supreme Court of India.
                  </p>
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
                    From Jammu & Kashmir to Kerala, Gujarat to Gauhati — we litigate everywhere.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {highCourts.map((court) => (
                      <div
                        key={court}
                        className="flex items-center gap-2 text-sm text-slate-700 px-3 py-2 rounded-lg bg-slate-100"
                      >
                        <MapPin className="w-4 h-4 text-amber-500" />
                        {court}
                      </div>
                    ))}
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
              onClick={() => toggle(area.title)}
              className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-amber-50 transition-colors"
            >
              <span className="text-lg font-semibold text-slate-900">{area.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                  openSection === area.title ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openSection === area.title && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    <p>{area.detail}</p>
                    {/* For Criminal Matters, we could add sub-items, but the detail covers it */}
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