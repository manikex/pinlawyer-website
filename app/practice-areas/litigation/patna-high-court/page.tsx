import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function PatnaHighCourtPage() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice-areas/litigation" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Litigation
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Patna High Court Lawyer — Affordable Advocate for Bihar, Available at Your PIN Code
          </h1>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Searching for an <strong>economical Patna High Court advocate</strong> who serves clients 
          across Bihar? Pin Lawyer provides <strong>trusted, affordable legal representation</strong> 
          before the Patna High Court. From Muzaffarpur to Gaya, Bhagalpur to Purnia — we appear at 
          the Patna High Court so you can stay in your hometown. Our service is available at every 
          PIN code in Bihar.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Our Patna High Court Practice
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-600 mb-6">
          <li>Writ Petitions under Article 226 — service disputes, land acquisition, education matters</li>
          <li>Civil Revisions, Miscellaneous Appeals, and Second Appeals</li>
          <li>Criminal Appeals, regular bail, and anticipatory bail applications</li>
          <li>Public Interest Litigation (PIL) on behalf of affected communities</li>
          <li>Contempt of court proceedings</li>
          <li>Execution proceedings and recovery matters</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Serving Every District in Bihar — Remotely and Affordably
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          We understand that travelling to Patna from districts like Araria, Buxar, or Jamui can 
          be expensive and time‑consuming. That's why Pin Lawyer offers <strong>remote Patna High 
          Court litigation services</strong>. We handle everything — from drafting and filing to 
          arguing your case — while you receive regular updates on your phone. Our fees are 
          transparent, fixed in advance, and designed to be affordable for families and small 
          businesses across Bihar.
        </p>

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-600 text-center">
            Need a <strong>reliable Patna High Court lawyer</strong>? 
            <Link href="/contact" className="text-amber-600 hover:underline ml-1">Contact Pin Lawyer</Link> — 
            available at your PIN code across Bihar and India.
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}