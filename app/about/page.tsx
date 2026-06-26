'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            About <span className="text-amber-400">Pin Lawyer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Justice shouldn&apos;t depend on your postcode. That belief became Pin Lawyer — 
            a legal practice built to make top‑tier advocacy accessible at every Indian PIN code.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Story — Why Pin Lawyer?
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed space-y-4">
            <p>
              The idea for Pin Lawyer was born from a simple observation: quality legal representation
              in India is too often concentrated in a few metropolitan cities. Someone in a small town
              in Bihar, a village in Odisha, or a remote district in Madhya Pradesh should not have to
              travel hundreds of kilometres just to get competent legal advice or representation.
            </p>
            <p>
              We built Pin Lawyer to bridge that gap. Our chambers are in Delhi, but our practice
              reaches every corner of India — from the Supreme Court to every State High Court,
              from NCLT benches to district consumer forums. And for clients abroad, we extend
              that same philosophy: your time zone becomes our office hours.
            </p>
            <p>
              The PIN in Pin Lawyer stands for the Postal Index Number — the 6‑digit code that
              identifies your locality. Type it into our website, and you&apos;ll see instantly: we serve
              your area. Because we believe the law should be available wherever you are, not
              wherever lawyers choose to sit.
            </p>
          </div>
        </motion.div>

        {/* Lead Advocate Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Lead Advocate
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Placeholder photo */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
              <Users className="w-16 h-16 text-slate-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pushp Manikes</h3>
              <p className="text-amber-600 font-medium mb-4">
                Advocate, Supreme Court of India
              </p>
              <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed space-y-3">
                <p>
                  Enrolled with the Bar Council of India, Pushp Manikes has been practicing before
                  the Supreme Court, the Delhi High Court, the Patna High Court, NCLT, NCLAT,
                  NCDRC, CAT, and multiple other forums across the country.
                </p>
                <p>
                  With a deep commitment to making legal services affordable and accessible,
                  Pushp Manikes founded Pin Lawyer to bring experienced advocacy to clients
                  regardless of their location. The practice blends rigorous courtroom experience
                  with modern, tech‑enabled client communication.
                </p>
                <p>
                  <strong>Memberships:</strong> Supreme Court Bar Association (SCBA) and Bar Coucnil of India (BCI).
                </p>
                <p>
                  <strong>Enrolment No:</strong> SCBA - M-00474, BCI - D / 6822 / 20
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Team
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            When you engage Pin Lawyer, you get more than one lawyer — you get a dedicated team
            of associates, researchers, and support professionals working together on your matter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: 'Associate Advocates',
                desc: 'Experienced lawyers who handle drafting, appearances, and client coordination across multiple courts and tribunals.',
                icon: Users,
              },
              {
                role: 'Research & Drafting',
                desc: 'A dedicated team that prepares case briefs, legal research, and written submissions — ensuring no detail is missed.',
                icon: Award,
              },
              {
                role: 'Remote Support Associates',
                desc: 'Professionals across time zones who manage international client coordination, document processing, and compliance.',
                icon: Globe,
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-amber-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <member.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{member.role}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Virtual Chambers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20 border-t border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Virtual Chambers
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed space-y-4">
            <p>
              We operate as a paperless, tech‑enabled chamber. Client meetings happen over
              secure video calls. Documents are shared via encrypted cloud storage. Case updates
              reach you through WhatsApp and email — in real time.
            </p>
            <p>
              This isn&apos;t just convenient; it&apos;s intentional. By eliminating the need for physical
              presence, we make sure that a client in Patna, a startup founder in Bengaluru,
              and a business owner in London all receive the same quality of service — without
              anyone needing to step into our Delhi office.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {['Secure Video Consultations', 'Encrypted Document Sharing', 'Real‑Time WhatsApp Updates', 'E‑Signatures & Digital Filing'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-700 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-amber-500" />
                  {tech}
                </span>
              )
            )}
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
            Ready to work with us?
          </h2>
          <p className="text-slate-600 mb-6">
            Whether you need litigation, corporate advisory, or arbitration — we&apos;re available at your PIN code.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}