'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Car, Dog, Shield } from 'lucide-react';

const sections = [
  {
    id: 'motor-vehicle-insurance',
    title: 'Motor Vehicles and Insurance Cases',
    icon: Car,
    content:
      'We handle all types of motor vehicle accident claims — from car crashes to pedestrian injuries. Our team works with accident reconstruction experts and medical professionals to build strong cases for compensation.',
    highlights: [
      'Car accidents – damages, injury claims, third‑party liability',
      'Ride‑share accidents (Uber, Ola) – driver and platform liability',
      'Drunk driving accidents – criminal and civil remedies',
      'Trucking accidents – overloaded vehicles, driver fatigue, fleet owner liability',
      'Motorcycle accidents – helmet laws, contributory negligence',
      'Pedestrian accidents – hit‑and‑run, zebra‑crossing incidents',
    ],
  },
  {
    id: 'tort-law',
    title: 'Tort Law (Civil Wrongs)',
    icon: Dog,
    content:
      'Tort law covers civil wrongs that cause harm or loss. We represent clients in a wide range of tort claims, from personal injury to property damage, and help them recover fair compensation.',
    highlights: [
      'Dog bites & animal‑related injuries – strict liability and negligence claims',
      'Nuisance – noise, pollution, encroachment disputes between neighbours',
      'Defamation – libel and slander, both online and offline',
      'Trespass – unauthorised entry onto property',
      'Negligence – professional negligence, medical negligence, general duty of care',
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance',
    icon: Shield,
    content:
      'Insurance disputes can be complex and frustrating. We assist policyholders in claims against insurance companies for life, health, general, and motor insurance policies.',
    highlights: [
      'Life Insurance – claim rejection, nominee disputes, policy revival',
      'Health Insurance – cashless claim denials, pre‑existing disease exclusions',
      'General Insurance – fire, burglary, marine, travel, property',
      'Motor Insurance – third‑party claims, own‑damage claims, policy‑holder rights',
    ],
  },
];

export default function TortMVAInsurancePage() {
  const [openSection, setOpenSection] = useState<string | null>('motor-vehicle-insurance');

  const toggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Tort, Motor Vehicles and Insurance
        </h1>
        <p className="text-lg text-slate-600 mb-12 text-justify">
          Comprehensive legal assistance in tort law, motor vehicle accident claims, and insurance disputes. From dog bites to car accidents, we have you covered — at your PIN code.
        </p>

        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-slate-200 rounded-2xl mb-4 overflow-hidden"
          >
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-[#E5B85C]/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-[#E5B85C]" />
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
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                      {section.content}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-700 bg-slate-100 rounded-lg px-3 py-2"
                        >
                          <span className="text-[#E5B85C] font-bold mt-0.5">•</span>
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

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-600 text-center text-justify">
            If you have been injured, lost a loved one, or are facing an insurance claim rejection, we are here to help. <a href="/contact" className="text-[#E5B85C] hover:underline">Contact Pin Lawyer</a> for an initial consultation.
          </p>
        </div>

        <p className="mt-12 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}