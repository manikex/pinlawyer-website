import Link from 'next/link';
import { ArrowLeft, Briefcase } from 'lucide-react';

export default function CareerPage() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#E5B85C] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-[#E5B85C]" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Career</h1>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          We are always looking for passionate advocates, legal researchers, and paralegals who share our vision of making justice accessible at every Pin Code. If you are dedicated, tech‑savvy, and eager to work in a modern, remote‑friendly chamber, we would love to hear from you.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Current openings: <strong>Junior Associate (Delhi), Legal Researcher (Remote), Intern (Law Students)</strong>.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Send your CV and a short cover letter to <strong>career@pinlawyer.com</strong>. We respond to all applications within a week.
        </p>
        <p className="mt-8 text-sm text-slate-500 italic text-center">Available at your Pin Code.</p>
      </div>
    </section>
  );
}