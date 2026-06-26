export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Even from a small town in Bihar, Pin Lawyer fought my case in the Supreme Court and got the delay condoned. I never had to leave my village.',
      name: '– Client from PIN 803110',
    },
    {
      quote:
        'Transparent fees and regular WhatsApp updates. I always knew exactly where my case stood.',
      name: '– Client from PIN 110001',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left"
            >
              <p className="text-slate-600 italic mb-4">“{t.quote}”</p>
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}