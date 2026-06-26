'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Building, FileCheck, Users } from 'lucide-react';

const domesticServices = [
  {
    id: 'incorporation',
    title: 'Company Incorporation & Compliance (India)',
    icon: Building,
    content:
      'We handle end‑to‑end company incorporation in India — private limited, public limited, LLP, Section 8, and producer companies. Beyond registration, we manage ongoing compliance: board meetings, annual filings, statutory registers, and ROC liaison.',
    highlights: [
      'Private Limited, Public Limited, LLP, OPC incorporation',
      'Section 8 (not‑for‑profit) and producer companies',
      'Annual filings and ROC compliance',
      'Board and shareholder meeting documentation',
      'Strike‑off, revival, and closure of companies',
    ],
  },
  {
    id: 'contracts-domestic',
    title: 'Contract Drafting & Negotiation',
    icon: FileCheck,
    content:
      'From founders\' agreements to complex vendor contracts, we draft, review, and negotiate commercial agreements that protect your interests. Every contract is tailored to the transaction and the governing law.',
    highlights: [
      'Shareholder and investment agreements',
      'Service, supply, and distribution agreements',
      'Franchise and licensing agreements',
      'Terms of service, privacy policies, and SaaS agreements',
      'Employment and independent contractor agreements',
    ],
  },
  {
    id: 'restructuring',
    title: 'Corporate Restructuring & Due Diligence',
    icon: Users,
    content:
      'We advise on mergers, demergers, slump sales, and internal reorganizations. Our due diligence exercises cover legal, financial, and regulatory aspects, giving you a clear picture before any transaction.',
    highlights: [
      'Merger, demerger, and amalgamation schemes',
      'Slump sale and business transfer agreements',
      'Legal due diligence for investments and acquisitions',
      'Regulatory approvals (RBI, SEBI, CCI as applicable)',
      'Post‑merger integration advisory',
    ],
  },
];

const globalDesk = [
  {
    id: 'uk',
    title: 'United Kingdom',
    content:
      'We assist Indian businesses and individuals with UK company formation, secretarial services, cross‑border contracts, and compliance advisory. Our remote engagement model means you never need to travel — we coordinate everything from here.',
    highlights: [
      'UK company incorporation and registered office',
      'Annual compliance and confirmation statements',
      'Cross‑border supplier and service agreements',
      'Advisory on UK‑India double taxation treaty',
    ],
  },
  {
    id: 'canada',
    title: 'Canada',
    content:
      'For clients expanding to or operating in Canada, we provide business setup support, compliance advisory, and contract services. We work with Canadian professionals where local certification is required.',
    highlights: [
      'Federal and provincial incorporation guidance',
      'Extra‑provincial registration and compliance',
      'Shareholder and partnership agreements',
      'Remote advisory across IST‑EST time overlap',
    ],
  },
  {
    id: 'usa',
    title: 'USA',
    content:
      'We support Delaware and other state incorporations, annual filings, and cross‑border commercial contracts. Our team understands the unique requirements of Indian founders entering the US market.',
    highlights: [
      'Delaware / state incorporation and EIN',
      'Annual franchise tax and report filings',
      'Operating agreements and bylaws',
      'Cross‑border SaaS and service agreements',
    ],
  },
  {
    id: 'singapore',
    title: 'Singapore',
    content:
      'Singapore is a preferred hub for Indian businesses expanding into Southeast Asia. We assist with company incorporation, nominee director liaison, and ongoing corporate secretarial work — all handled remotely with local coordination.',
    highlights: [
      'Singapore private limited incorporation',
      'Corporate secretarial and ACRA filings',
      'Nominee director arrangements',
      'Advisory on India‑Singapore DTAA',
    ],
  },
];

function AccordionSection({ section, open, toggle }: { section: any; open: boolean; toggle: () => void }) {
  return (
    <div className="border border-slate-200 rounded-2xl mb-4 overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-amber-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {section.icon && (
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <section.icon className="w-5 h-5 text-amber-600" />
            </div>
          )}
          <span className="text-lg font-semibold text-slate-900">{section.title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              <p className="text-slate-600 leading-relaxed mb-4">{section.content}</p>
              {section.highlights && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.highlights.map((item: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700 bg-slate-100 rounded-lg px-3 py-2"
                    >
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InternationalBusinessPage() {
  const [openDomestic, setOpenDomestic] = useState<string | null>('incorporation');
  const [openGlobal, setOpenGlobal] = useState<string | null>('uk');

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Company Law & International Business Advisory
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          From incorporating your company in India to managing cross‑border operations — we provide
          comprehensive corporate and international advisory services, all available remotely.
        </p>

        {/* Domestic Corporate Services */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Building className="w-6 h-6 text-amber-500" />
          Domestic Corporate Services
        </h2>

        {domesticServices.map((section) => (
          <AccordionSection
            key={section.id}
            section={section}
            open={openDomestic === section.id}
            toggle={() =>
              setOpenDomestic((prev) => (prev === section.id ? null : section.id))
            }
          />
        ))}

        {/* Global Desk */}
        <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-amber-500" />
          Global Desk (Remote)
        </h2>

        <p className="text-slate-600 mb-6">
          We serve international clients remotely across four major jurisdictions.
          No PIN code? No problem. Your time zone is our office hours.
        </p>

        {globalDesk.map((section) => (
          <AccordionSection
            key={section.id}
            section={section}
            open={openGlobal === section.id}
            toggle={() =>
              setOpenGlobal((prev) => (prev === section.id ? null : section.id))
            }
          />
        ))}

        {/* Time zone note */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Working Across Time Zones
          </h3>
          <p className="text-slate-600 leading-relaxed">
            We schedule consultations and deliver work across IST, GMT, EST, and SGT.
            Whether you're in London, Toronto, New York, or Singapore — you'll always have
            a responsive legal partner who operates during your business hours.
          </p>
        </div>

        <p className="mt-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code — and beyond.
        </p>
      </div>
    </section>
  );
}