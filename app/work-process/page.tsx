'use client';

import { motion } from 'framer-motion';
import {
  PhoneCall,
  FileText,
  Scale,
  MessageCircle,
  Shield,
  Video,
  Lock,
  PenTool,
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Initial Consultation',
    description:
      'You reach out via call, WhatsApp, or our contact form. We listen to your matter, assess the legal scope, and give you an honest preliminary opinion — usually within 24 hours.',
    detail:
      'This consultation can be in‑person (if you\'re in Delhi), over a video call, or on a simple phone call. We\'ll tell you candidly whether your case has merit and what the likely timelines and costs will look like.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Strategy & Engagement',
    description:
      'Once you decide to proceed, we agree on a fee structure — per hearing, fixed stage‑wise, or retainer. You receive a clear engagement letter with no hidden terms.',
    detail:
      'We explain every cost component upfront: court fees, travel, documentation, and professional fees. You\'ll know exactly what you\'re paying, for what stage, before any work begins.',
  },
  {
    number: '03',
    icon: Scale,
    title: 'We Handle Your Matter',
    description:
      'Our team takes over — drafting, filing, appearances, and follow‑ups. You receive regular updates via WhatsApp and email. We appear in courts; you stay informed from home.',
    detail:
      'Whether it\'s a Supreme Court SLP, an NCLT petition, or a consumer complaint — we manage the entire lifecycle. For international clients, all coordination happens during your business hours.',
  },
];

const feeModels = [
  {
    title: 'Per Hearing / Appearance',
    description:
      'Suitable for matters where you need representation on specific dates — hearings, mentions, or arguments. You pay only for the appearances we make.',
    icon: Clock,
  },
  {
    title: 'Fixed Fee (Stage‑wise)',
    description:
      'For defined stages — filing a petition, arguing a bail application, completing a corporate incorporation. One fixed price agreed before work begins. No surprises.',
    icon: CheckCircle,
  },
  {
    title: 'Monthly / Quarterly Retainer',
    description:
      'Ideal for businesses and regular clients. A fixed monthly or quarterly fee covers ongoing advisory, contract reviews, compliance, and litigation as needed.',
    icon: Shield,
  },
  {
    title: 'International Advisory Retainer',
    description:
      'For clients in the UK, Canada, USA, and Singapore. Remote advisory, contract work, and compliance — billed on a predictable retainer or per‑task basis.',
    icon: Globe,
  },
];

const technologies = [
  {
    icon: Video,
    title: 'Video Consultations',
    desc: 'Secure, encrypted video calls via platforms you already use. No complicated software.',
  },
  {
    icon: Lock,
    title: 'Encrypted Document Sharing',
    desc: 'All case documents shared via end‑to‑end encrypted cloud storage. Accessible only to you and our team.',
  },
  {
    icon: PenTool,
    title: 'E‑Signatures',
    desc: 'Vakalatnama, affidavits, and agreements signed digitally — no printing, no courier delays.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Email Updates',
    desc: 'Case progress, hearing dates, orders — all communicated through WhatsApp and email, in real time.',
  },
];

export default function WorkProcessPage() {
  return (
    <section className="bg-white">
      {/* Hero – navy background with abstract spiral lines, reduced height */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-16 px-4 md:px-12 overflow-hidden">
        {/* Abstract net lines – delicate SVG overlay (same as Contact page) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
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
            Work Process <span className="text-[#E5B85C]">&amp; Fees</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Transparent, predictable, and economical. Here&apos;s exactly how we engage, what we charge,
            and the technology we use to serve you — wherever your PIN code may be.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12">
        {/* The Engagement Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            The Pin Lawyer Engagement Model
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
            Three simple steps from your first call to a resolved matter.
          </p>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 md:w-1/3">
                  <div className="w-14 h-14 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-[#E5B85C]" />
                  </div>
                  <div>
                    <span className="text-[#E5B85C] font-bold text-sm">{step.number}</span>
                    <h3 className="text-xl font-semibold text-slate-900 mt-1">{step.title}</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-600 leading-relaxed mb-3 text-justify">{step.description}</p>
                  <p className="text-sm text-slate-500 leading-relaxed text-justify">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fee Structures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            Fee Structures
          </h2>
          <p className="text-slate-600 text-center mb-6 max-w-2xl mx-auto">
            We believe legal fees should be discussed openly. Every engagement begins with a clear
            conversation about costs — so you always know what to expect.
          </p>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-[#E5B85C]/20 text-[#E5B85C] rounded-full text-sm font-medium">
              All fee arrangements comply with Bar Council of India regulations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feeModels.map((model, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-[#E5B85C] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center mb-4">
                  <model.icon className="w-6 h-6 text-[#E5B85C]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{model.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">{model.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-slate-600 text-justify">
              <strong>Note:</strong> We offer an initial consultation where we listen to your matter
              and provide an honest preliminary opinion. Contact us to discuss fee arrangements
              tailored to your specific case.
            </p>
          </div>
        </motion.div>

        {/* Technology We Use – centred description text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            Technology We Use
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
            Modern tools that make remote legal service seamless, secure, and fast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-[#E5B85C] text-center transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-[#E5B85C]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{tech.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-center">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Confidentiality & Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            Confidentiality &amp; Retainer Terms
          </h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Shield className="w-6 h-6 text-[#E5B85C] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Attorney‑Client Confidentiality</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Every communication — verbal or written — is protected by attorney‑client privilege.
                  Your documents, your case details, and your identity remain strictly confidential.
                  We never share information without your express consent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <FileText className="w-6 h-6 text-[#E5B85C] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Engagement & Retainer Letter</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Every client receives a formal engagement letter that spells out: scope of work,
                  fee arrangement, timelines, and responsibilities of both sides. For retainer clients,
                  the letter also defines the services covered and any exclusions. Nothing is left to
                  verbal understanding alone.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Lock className="w-6 h-6 text-[#E5B85C] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Data Protection</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  We store all client data on encrypted servers with access limited to the handling
                  team. Digital communication channels are secured. Physical files, where maintained,
                  are kept in access‑controlled storage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to discuss your matter?
          </h2>
          <p className="text-slate-600 mb-6">
            Let&apos;s talk about your case and the best fee arrangement for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#072828] font-semibold rounded-lg transition"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}