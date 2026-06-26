import Link from 'next/link';
import { ArrowLeft, Gavel } from 'lucide-react';

export default function CriminalPage() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice-areas/litigation" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Litigation
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Gavel className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Criminal Lawyer — Bail, Anticipatory Bail, Cyber Fraud | Available at Your PIN Code
          </h1>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Need an <strong>urgent bail lawyer</strong> or <strong>affordable criminal advocate</strong> 
          anywhere in India? Pin Lawyer provides <strong>economical criminal defence services</strong> — 
          from bail applications in Sessions Courts and High Courts to criminal appeals in the Supreme Court. 
          We are available at your PIN code, and for genuine emergencies, you can reach us within 30–40 minutes.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Criminal Law Practice — Economical & Accessible
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-600 mb-6">
          <li>Regular Bail and Anticipatory Bail applications — Sessions Court, High Court, Supreme Court</li>
          <li>Criminal Appeals — from trial court to High Court and Supreme Court</li>
          <li>Quashing of FIRs under Section 482 CrPC / Section 528 BNSS</li>
          <li>Cyber fraud and online financial crimes — defence and complaint filing</li>
          <li>White‑collar offences and economic offences</li>
          <li>Cheque bounce cases under Section 138 of the Negotiable Instruments Act</li>
          <li>Criminal writs and habeas corpus petitions</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Urgent Bail Assistance — Anywhere in India
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          An arrest can happen at any hour. That's why Pin Lawyer offers an <strong>urgent bail 
          assistance service</strong> — pay ₹150 and get connected with a criminal lawyer within 
          30–40 minutes. We file bail applications promptly, argue them at the earliest listing, and 
          keep your family informed throughout. Whether you are in a metro or a small town, our 
          criminal lawyers are available at your PIN code.
        </p>

        <div className="mt-10 p-6 rounded-2xl bg-red-50 border border-red-200">
          <p className="text-sm text-red-700 text-center font-medium">
            Urgent bail required? Use our <Link href="/contact/urgent" className="text-red-800 underline font-bold">Urgent Contact</Link> service — 
            ₹150, connect with a criminal lawyer in 30–40 minutes. Available at your PIN code.
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}