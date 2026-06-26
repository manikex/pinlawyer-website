import { MapPin, IndianRupee, Users } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'True Pan‑India Accessibility',
    desc: 'No matter your PIN code, we appear in courts and tribunals across the country.',
  },
  {
    icon: IndianRupee,
    title: 'Clear, Predictable Fees',
    desc: 'Fixed‑fee options and transparent engagement letters – no surprises.',
  },
  {
    icon: Users,
    title: 'A Team That Speaks for Your Rights',
    desc: 'Dedicated advocates who treat your matter as their own.',
  },
];

export default function WhyPinLawyer() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Why Pin Lawyer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <r.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-slate-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}