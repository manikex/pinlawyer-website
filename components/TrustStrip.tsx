'use client';

export default function TrustStrip() {
  const courts = [
    'Supreme Court of India',
    'Delhi High Court',
    'Bombay High Court',
    'Calcutta High Court',
    'Madras High Court',
    'Patna High Court',
    'NCLT / NCLAT',
    'NCDRC',
    'NGT',
    'CAT',
    'Service Matters',
    'Education Matters',
    'Academic Matters',
    'Consumer Matters',
    'Criminal Matters',
    'Civil Matters',
    'Family Matters',
    'Property Matters',
    'Arbitration Matters',
    'Company Matters',
    'Insolvency Matters',
    'Banking Matters',
    'Insurance Matters',
    'Tax / GST Cases',
    'Intellectual Property Matters',
    'Environmental Matters',
    'Human Rights Matters',
    'Labour Matters',
    'Constitutional Matters',
    'Election Matters',
  ];

  return (
    <section className="bg-slate-800 py-4 overflow-hidden">
      <div className="relative flex items-center h-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {courts.map((court, i) => (
            <span
              key={`first-${i}`}
              className="mx-6 text-slate-400 text-sm font-medium whitespace-nowrap"
            >
              {court}
            </span>
          ))}
          {courts.map((court, i) => (
            <span
              key={`second-${i}`}
              className="mx-6 text-slate-400 text-sm font-medium whitespace-nowrap"
            >
              {court}
            </span>
          ))}
          {courts.map((court, i) => (
            <span
              key={`third-${i}`}
              className="mx-6 text-slate-400 text-sm font-medium whitespace-nowrap"
            >
              {court}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 51s linear infinite;
        }
      `}</style>
    </section>
  );
}