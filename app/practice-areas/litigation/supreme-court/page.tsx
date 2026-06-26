import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export default function SupremeCourtPage() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice-areas/litigation" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Litigation
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Scale className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Supreme Court of India Lawyer — Affordable, Trusted, Always Available
          </h1>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Looking for an <strong>economical and trusted advocate for the Supreme Court of India</strong>? 
          Pin Lawyer provides <strong>affordable Supreme Court litigation services</strong> to clients 
          across every state and every PIN code in India. Whether you need to file a Special Leave 
          Petition, argue a civil or criminal appeal, or seek urgent interim relief — our team is 
          available at your PIN code, ready to represent you in New Delhi without requiring you to travel.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Supreme Court Litigation — Economical & Accessible
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-600 mb-6">
          <li>Special Leave Petitions (SLPs) under Article 136 of the Constitution</li>
          <li>Civil Appeals and Criminal Appeals from High Courts across India</li>
          <li>Writ Petitions under Article 32 for enforcement of fundamental rights</li>
          <li>Transfer Petitions — moving cases between High Courts or to the Supreme Court</li>
          <li>Contempt Petitions for wilful disobedience of court orders</li>
          <li>Curative Petitions, Review Petitions, and clarification applications</li>
          <li>Election Petitions and constitutional matters</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Why Choose Pin Lawyer for Supreme Court Matters
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Our chambers are located near the Supreme Court of India in New Delhi. This proximity 
          allows us to file petitions promptly, attend hearings at short notice, and manage the 
          procedural demands of the apex court efficiently. But what truly sets us apart is our 
          commitment to <strong>making Supreme Court litigation affordable and accessible</strong>. 
          We offer transparent, fixed‑fee arrangements — no hidden charges, no surprises.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          For clients in Bihar, Uttar Pradesh, Maharashtra, West Bengal, or anywhere else in India, 
          we provide <strong>remote Supreme Court representation</strong>. Documents are shared securely 
          online. Consultations happen over video calls. Case updates reach you through WhatsApp. 
          Your PIN code does not determine your access to justice — we bring the Supreme Court to you.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Proven Results — Condonation of Delay, SLPs, and More
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          We have successfully argued before the Supreme Court in matters involving condonation 
          of delay — including condoning over 576 days of delay in a case from a village in Bihar. 
          Our clients trust us because we combine rigorous legal research with practical, 
          cost‑conscious litigation strategy.
        </p>

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-600 text-center">
            Need an <strong>affordable Supreme Court advocate</strong>? 
            <Link href="/contact" className="text-amber-600 hover:underline ml-1">Contact Pin Lawyer</Link> — 
            available at your PIN code, anywhere in India.
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}