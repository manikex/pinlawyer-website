import { MapPin } from 'lucide-react';

const testimonials = [
  {
    quote: 'Even from a small village in Bihar, Pin Lawyer fought my case in the Supreme Court and got the delay condoned. I never had to leave my village.',
    name: 'Client from PIN 803110',
  },
  {
    quote: 'Transparent fees and regular WhatsApp updates. I always knew exactly where my case stood.',
    name: 'Client from PIN 110001',
  },
  {
    quote: 'They filed my consumer complaint remotely. I didn’t step out of my house, and I got my refund within months.',
    name: 'Client from PIN 452001',
  },
];

export default function PartyTestimonialPage() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Party Testimonials</h1>
        <p className="text-slate-600 mb-12">Hear from the clients we’ve served across India.</p>
        <div className="grid gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <p className="text-slate-600 italic mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-[#E5B85C]" />
                {t.name}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500 italic">Available at your Pin Code.</p>
      </div>
    </section>
  );
}