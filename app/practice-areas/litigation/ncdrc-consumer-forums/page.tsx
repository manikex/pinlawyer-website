import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function NcdrcPage() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice-areas/litigation" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Litigation
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Consumer Court Lawyer — File Complaint in NCDRC & Consumer Forum | Affordable, PAN‑India
          </h1>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Have you been sold a defective product? Denied a refund? Harassed by a builder for delayed 
          possession? Pin Lawyer provides <strong>affordable consumer court legal services</strong> 
          across India. We file and argue consumer complaints before District Forums, State Commissions, 
          and the National Consumer Disputes Redressal Commission (NCDRC) in New Delhi — all while 
          you stay at your PIN code.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          What Consumer Cases We Handle
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-600 mb-6">
          <li>Defective products and deficient services</li>
          <li>Unfair trade practices and misleading advertisements</li>
          <li>Overcharging, hidden fees, and unfair billing</li>
          <li>Delayed delivery and refusal to honour warranties</li>
          <li>Medical negligence claims against hospitals and doctors</li>
          <li>Insurance claim rejections and delays</li>
          <li>Real estate — delayed possession, refund claims against builders</li>
          <li>Appeals from District Forums to State Commissions and NCDRC</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          No Travel Needed — We File Your Consumer Complaint Remotely
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          You can file a consumer complaint from your hometown. Pin Lawyer drafts the complaint, 
          files it in the appropriate forum, and represents you at hearings — all while you receive 
          updates on WhatsApp. Our fees are transparent and economical. Justice at your PIN code, 
          without the cost and hassle of travel.
        </p>

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-600 text-center">
            Ready to file a consumer complaint? <Link href="/contact" className="text-amber-600 hover:underline">Contact Pin Lawyer</Link> — 
            affordable, trusted, available at your PIN code.
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500 italic text-center">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}