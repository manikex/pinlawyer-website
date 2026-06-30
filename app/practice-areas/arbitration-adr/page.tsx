'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Gavel, Globe, Shield } from 'lucide-react';

const sections = [
  {
    id: 'domestic-arbitration',
    title: 'Domestic Arbitration',
    icon: Gavel,
    content:
      'We represent clients in ad‑hoc and institutional domestic arbitrations across India, seated in all major cities. Our team handles the entire lifecycle — from drafting arbitration clauses and notices of invocation, through the hearing stages, to enforcement and challenge of awards under the Arbitration and Conciliation Act, 1996.',
    highlights: [
      'Drafting and invoking arbitration agreements',
      'Interim measures under Section 9 and Section 17',
      'Conducting arbitral proceedings (ad‑hoc & institutional)',
      'Challenge of awards under Section 34',
      'Enforcement and execution of domestic awards',
    ],
  },
  {
    id: 'international-arbitration',
    title: 'International Commercial Arbitration',
    icon: Globe,
    content:
      'We advise and represent parties in cross‑border commercial disputes before leading international arbitral institutions including SIAC, LCIA, ICC, and the Permanent Court of Arbitration. Our lawyers work with foreign counsel to coordinate strategy and ensure seamless representation across time zones.',
    highlights: [
      'SIAC, LCIA, ICC, and PCA administered arbitrations',
      'Seat selection and governing law advisory',
      'Interim relief and emergency arbitrator proceedings',
      'Coordinated representation with overseas law firms',
      'Post‑award settlement and enforcement strategy',
    ],
  },
  {
    id: 'enforcement',
    title: 'Enforcement of Foreign Awards',
    icon: Shield,
    content:
      'We enforce foreign arbitral awards in India under the New York Convention and the Geneva Convention. Our team handles the procedural complexities of obtaining recognition, resisting challenges from award‑debtors, and executing the award against assets in India. We also assist Indian parties in enforcing awards abroad through our network of international counsel.',
    highlights: [
      'Recognition of foreign awards under Part II of the Arbitration Act',
      'Resisting challenges to enforcement by award‑debtors',
      'Asset tracing and attachment for recovery',
      'Execution proceedings in Indian courts',
      'Coordination with foreign counsel for cross‑border enforcement',
    ],
  },
];

export default function ArbitrationAdrPage() {
  const [openSection, setOpenSection] = useState<string | null>('domestic-arbitration');

  const toggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          ADR - Arbitration and Negotiation
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Efficient, binding dispute resolution — domestic and international.
          We represent clients at every stage, from drafting the arbitration clause to enforcing the final award.
        </p>

        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-slate-200 rounded-2xl mb-4 overflow-hidden"
          >
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-amber-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  {section.title}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                  openSection === section.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {section.content}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-700 bg-slate-100 rounded-lg px-3 py-2"
                        >
                          <span className="text-amber-500 font-bold mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* ADR note */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Mediation & Negotiation
          </h3>
          <p className="text-slate-600 leading-relaxed">
            We also represent clients in mediation and structured negotiation, both court‑referred and private.
            Where a consensual resolution is possible, we pursue it actively — saving our clients time, cost,
            and the uncertainty of litigation or arbitration.
          </p>
        </div>

        <p className="mt-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}