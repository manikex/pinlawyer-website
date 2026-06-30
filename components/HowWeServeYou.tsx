import { Globe, FileText, Video } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'For Courts',
    description:
      'We easily travel to your State High Court or tribunal. You don\'t have to. We handle appearances, filings, and arguments while you track progress remotely.',
  },
  {
    icon: FileText,
    title: 'For Advisory',
    description:
      'Documents, contracts, compliance — all handled remotely. Drafting, review, and negotiation happen over secure digital channels.',
  },
  {
    icon: Video,
    title: 'For International Clients',
    description:
      'No PIN code? No problem. Your time zone is our office hours. We serve clients in the UK, Canada, USA, and Singapore with the same dedication.',
  },
];

export default function HowWeServeYou() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Serve You</h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto">
          No matter where your PIN code places you, our service model adapts to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-[#E5B85C]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}