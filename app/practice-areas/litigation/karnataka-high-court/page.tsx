import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function DelhiHighCourtPage() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice-areas/litigation" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Litigation
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Delhi High Court Lawyer — Economical, Trusted, Available at Your PIN Code
          </h1>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Searching for an <strong>affordable Delhi High Court advocate</strong>? Pin Lawyer offers 
          <strong>economical legal representation</strong> before the Delhi High Court for clients 
          across India. From writ petitions and commercial disputes to criminal bail and arbitration 
          matters — we appear at the Delhi High Court so you don't have to travel. Our service is 
          available at your PIN code, wherever you are in India.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Our Delhi High Court Practice
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-600 mb-6">
          <li>Writ Petitions under Article 226 — service matters, education, property, constitutional challenges</li>
          <li>Civil Original Suits and Civil Miscellaneous Petitions</li>
          <li>Commercial disputes under the Commercial Courts Act, 2015</li>
          <li>Criminal writs, regular bail applications, and anticipatory bail</li>
          <li>Arbitration petitions — appointment of arbitrators, interim measures, challenge to awards</li>
          <li>Contempt petitions and execution proceedings</li>
          <li>Letters Patent Appeals (LPAs) from orders of Single Judges</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          Affordable, Remote Legal Services for Delhi High Court
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Our chambers are near the Delhi High Court, enabling us to file matters on time and attend 
          hearings at short notice. But for our clients — whether in Patna, Mumbai, Chennai, or a 
          small town in Rajasthan — we eliminate the need for travel. We offer <strong>remote 
          litigation services</strong> with fixed, transparent fees. Documents are shared online, 
          updates come via WhatsApp, and you stay informed at every stage.
        </p>

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-600 text-center">
            Need an <strong>affordable Delhi High Court lawyer</strong>? 
            <Link href="/contact" className="text-amber-600 hover:underline ml-1">Reach Pin Lawyer</Link> — 
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