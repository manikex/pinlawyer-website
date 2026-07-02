import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#E5B85C] transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none text-justify space-y-4">
          <p>
            Welcome to Pin Lawyer. By accessing and using this website, you accept and agree to be bound
            by the following terms and conditions. If you do not agree with any part of these terms,
            please do not use our website.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-6">1. Use of the Website</h2>
          <p>
            The content on this website is for general information and use only. It is subject to change
            without notice. You acknowledge that any information or materials on this website may contain
            inaccuracies or errors, and we expressly exclude liability for any such inaccuracies to the
            fullest extent permitted by law.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-6">2. Intellectual Property</h2>
          <p>
            All content, design, graphics, and materials on this website are owned by or licensed to Pin Lawyer.
            Reproduction is prohibited unless in accordance with the copyright notice, which forms part of
            these terms and conditions.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-6">3. Appointments and Payments</h2>
          <p>
            Appointments booked through this website are subject to availability. Payment for premium and
            exclusive appointments must be made in advance. Refund and cancellation policies are governed
            by the terms agreed at the time of booking.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-6">4. Limitation of Liability</h2>
          <p>
            Pin Lawyer shall not be liable for any indirect, incidental, special, or consequential damages
            arising out of the use of or inability to use this website or its services.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-6">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India.
            Any disputes arising out of or in connection with these terms shall be subject to the exclusive
            jurisdiction of the courts in New Delhi, India only.
          </p>
        </div>
      </div>
    </section>
  );
}