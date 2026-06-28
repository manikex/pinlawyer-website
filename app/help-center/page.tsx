import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export default function HelpCenterPage() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#E5B85C] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-8 h-8 text-[#E5B85C]" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Help Center</h1>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          Welcome to the Pin Lawyer Help Center. Here you will find guides, tutorials, and answers to common questions about our services, how to use the website, and what to expect during the legal process.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
          We are currently building out this section with detailed articles. In the meantime, if you need immediate assistance, please visit our <Link href="/faq" className="text-[#E5B85C] hover:underline">FAQs</Link> or <Link href="/contact" className="text-[#E5B85C] hover:underline">Contact us</Link> directly.
        </p>
        <p className="mt-8 text-sm text-slate-500 italic text-center">Available at your Pin Code.</p>
      </div>
    </section>
  );
}