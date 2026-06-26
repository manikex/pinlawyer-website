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
  ];

  return (
    <section className="bg-slate-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-400 text-sm font-medium">
        {courts.map((court) => (
          <span key={court} className="whitespace-nowrap">
            {court}
          </span>
        ))}
      </div>
    </section>
  );
}