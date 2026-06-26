import Link from 'next/link';
import { Scale, Building2, Gavel } from 'lucide-react';

const practiceCards = [
  {
    title: 'Litigation (India)',
    desc: 'Wherever you are, we argue for you.',
    icon: Scale,
    href: '/practice-areas/litigation',
  },
  {
    title: 'Corporate & International',
    desc: 'Cross‑border, remote, reliable.',
    icon: Building2,
    href: '/practice-areas/corporate-litigation-rera',
  },
  {
    title: 'Arbitration',
    desc: 'Efficient dispute resolution, globally.',
    icon: Gavel,
    href: '/practice-areas/arbitration-adr',
  },
];

export default function PracticeSnapshot() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practiceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block p-6 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-400 transition-colors">
                <card.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600">{card.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/practice-areas" className="text-amber-600 hover:underline text-sm font-medium">
            View all practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
}