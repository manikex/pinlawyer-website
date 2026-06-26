import { MapPin, PhoneCall, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: '1. Enter Your PIN Code',
    desc: 'See instantly that we cover your area – anywhere in India.',
  },
  {
    icon: PhoneCall,
    title: '2. Book a Virtual / Phone Consult',
    desc: 'Speak with us within 77 hours – no travel needed.',
  },
  {
    icon: Briefcase,
    title: '3. We Handle Litigation / Advisory',
    desc: 'Regular updates via WhatsApp and detailed advice by email.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}