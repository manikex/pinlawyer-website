import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

export default function ProBonoPage() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#E5B85C] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-[#E5B85C]" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Pro Bono&apos;s</h1>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          At Pin Lawyer, we believe that access to justice should not depend on your financial situation. Our Pro Bono&apos;s programme offers free legal assistance to those who cannot afford it, particularly in matters involving fundamental rights, women’s safety, child custody, and environmental protection.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          We dedicate a portion of our practice to serving underprivileged communities. Every lawyer in our team is encouraged to take on pro bono cases, and we partner with legal aid organisations to maximise our reach.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          If you or someone you know needs free legal help, please write to us at <strong>probono@pinlawyer.com</strong> with a brief description of the case. We assess each request carefully and respond within two weeks.
        </p>
        <p className="mt-8 text-sm text-slate-500 italic text-center">Available at your Pin Code.</p>
      </div>
    </section>
  );
}