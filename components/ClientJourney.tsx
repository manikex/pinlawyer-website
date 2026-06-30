import { MapPin } from 'lucide-react';

export default function ClientJourney() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Real Client Journey</h2>
        <div className="p-8 rounded-2xl bg-white border border-slate-200 text-left">
          <div className="flex items-center gap-2 text-[#0F1D3A] font-semibold mb-4">
            <MapPin className="w-5 h-5" />
            PIN — 803110 (a village in Bihar)
          </div>
          <a
            href="https://api.sci.gov.in/supremecourt/2025/45011/45011_2025_15_31_64091_Order_08-Sep-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 text-sm text-blue-600 hover:text-blue-800 underline font-medium"
          >
            View Supreme Court Order (PDF)
          </a>
          <blockquote className="text-slate-600 leading-relaxed space-y-4">
            <p className="text-justify">
              &ldquo;Our client from a small village in Bihar needed to file a case in the Supreme Court of India, New Delhi — but had never travelled outside the state. We handled everything.
            </p>
            <p className="text-justify">
              We drafted the Special Leave Petition, coordinated all documents remotely, and appeared before the Court. The 576 days of delay in filing were condoned. The case was admitted.
            </p>
            <p className="text-justify">
              The client never stepped out of their village. Every update came through WhatsApp. Every document was shared over email. Justice was delivered — without travel, without disruption, and at a fraction of the expected cost.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}