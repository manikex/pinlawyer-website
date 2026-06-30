import Link from 'next/link';
import { Scale, Building2, Gavel, Globe, Car } from 'lucide-react';

const areas = [
  {
    title: 'Litigation & Mediation (Bharat - India)',
    description:
      'Representation before the Supreme Court, all State High Courts, NCDRC, Consumer Forums, CAT, and more.',
    icon: Scale,
    href: '/practice-areas/litigation',
  },
  {
    title: 'Tort, Motor Vehicles and Insurance',
    description:
      'Motor vehicle accidents, tort law (dog bites, nuisance, negligence), and insurance disputes.',
    icon: Car,
    href: '/practice-areas/tort-motor-vehicles-insurance',
  },
  {
    title: 'ADR - Arbitration and Negotiation',
    description:
      'Domestic and international commercial arbitration, mediation, and enforcement of foreign awards.',
    icon: Gavel,
    href: '/practice-areas/arbitration-adr',
  },
  {
    title: 'Corporate Litigation and Real Estate (RERA)',
    description:
      'Commercial court litigation, NCLT/NCLAT, contract disputes, real estate RERA matters.',
    icon: Building2,
    href: '/practice-areas/corporate-litigation-rera',
  },
  {
    title: 'Company Services and International Business Advisory',
    description:
      'Incorporation, compliance, cross‑border contracts – serving UK, Canada, USA, Singapore remotely.',
    icon: Globe,
    href: '/practice-areas/international-business',
  },
];

export default function PracticeAreasPage() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Practice Areas
        </h1>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl">
          Wherever you are in India – or beyond – our expertise reaches you.
          Every case, every advisory, fully accessible at your PIN code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group block p-8 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors duration-300">
                  <area.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 mb-2">
                    {area.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500 italic">
          Available at your PIN code.
        </p>
      </div>
    </section>
  );
}