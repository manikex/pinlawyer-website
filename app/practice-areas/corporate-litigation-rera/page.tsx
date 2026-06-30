'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, FileText, Home, Landmark } from 'lucide-react';

const sections = [
  {
    id: 'commercial-court',
    title: 'Commercial Court Litigation',
    icon: Landmark,
    content:
      'We represent clients before Commercial Courts across India in disputes arising from commercial contracts, shareholder agreements, joint ventures, supply agreements, and other business transactions. Our approach is strategy-first — we assess the commercial impact of every legal move.',
    highlights: [
      'Summary suits and commercial summary proceedings',
      'Disputes under the Commercial Courts Act, 2015',
      'Interim reliefs — injunctions, attachments, receivers',
      'Enforcement of commercial contracts',
      'Debt recovery and claims for damages',
    ],
  },
  {
    id: 'nclt-nclat',
    title: 'NCLT / NCLAT (IBC, Company Law)',
    icon: Building2,
    content:
      'We handle the full spectrum of corporate litigation before the National Company Law Tribunal and the National Company Law Appellate Tribunal. From insolvency proceedings to oppression and mismanagement petitions, we appear for financial creditors, operational creditors, corporate debtors, and resolution professionals.',
    highlights: [
      'Corporate Insolvency Resolution Process (CIRP) under IBC',
      'Oppression & mismanagement petitions (Sections 241-246)',
      'Scheme of arrangement, amalgamation, merger approvals',
      'Appeals before NCLAT from NCLT orders',
      'Voluntary liquidation and winding-up proceedings',
    ],
  },
  {
    id: 'contracts',
    title: 'Contract Services',
    icon: FileText,
    content:
      'We draft, review, and negotiate commercial contracts for businesses of all sizes — from startups to established enterprises. Our contract services extend to domestic and cross‑border agreements, ensuring every clause is airtight and aligned with your business interests.',
    highlights: [
      'Master Service Agreements (MSA) and SLAs',
      'Shareholder and Share Purchase Agreements',
      'Non‑Disclosure Agreements (NDA) and non‑competes',
      'Franchise, distribution, and licensing agreements',
      'Employment and consultancy contracts',
    ],
  },
  {
    id: 'rera',
    title: 'Real Estate RERA Matters',
    icon: Home,
    content:
      'We represent homebuyers, developers, and real estate agents before RERA authorities across multiple states. Whether it’s delayed possession, refund claims, registration disputes, or penalty proceedings, we bring deep knowledge of the Real Estate (Regulation and Development) Act.',
    highlights: [
      'Complaints against builders for delayed delivery',
      'Refund and compensation claims for homebuyers',
      'Developer compliance and project registration',
      'Appeals before RERA Appellate Tribunals',
      'Litigation arising from RERA orders in High Courts',
    ],
  },
];

export default function CorporateLitigationReraPage() {
  const [openSection, setOpenSection] = useState<string | null>('commercial-court');

  const toggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Corporate Litigation and Real Estate (RERA)
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Resolving corporate disputes and real estate matters with sharp litigation strategy. 
          From commercial courts to NCLT/NCLAT, and RERA authorities — we represent your interests across every forum.
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

        <p className="mt-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}