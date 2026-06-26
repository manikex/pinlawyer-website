'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function UrgentContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitted');
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/contact" className="text-sm text-slate-600 hover:text-amber-600 transition mb-6 inline-flex items-center gap-1">
          ← Back to Contact
        </Link>

        <div className="p-8 rounded-2xl bg-red-50 border-2 border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-7 h-7 text-red-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-red-800">Urgent Contact</h1>
          </div>
          <p className="text-red-700 mb-6 leading-relaxed">
            Need immediate legal assistance? Use our urgent contact service. Pay ₹150 and get
            connected with a lawyer within <strong>30–40 minutes</strong>. This is for genuine
            emergencies — arrests, imminent court deadlines, or urgent legal advice.
          </p>

          {formState === 'submitted' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl bg-white text-center"
            >
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Urgent Request Received</h2>
              <p className="text-slate-600">
                We’ll connect with you within 30–40 minutes. Please keep your phone nearby.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Email ID – full width, required */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email ID *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  placeholder="Your 6-digit PIN code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Urgency Details *
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  placeholder="Briefly explain the emergency..."
                ></textarea>
              </div>

              <div className="p-4 rounded-xl bg-white border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Urgent Consultation Fee</span>
                  <span className="text-xl font-bold text-red-600">₹150</span>
                </div>
                <p className="text-xs text-slate-500">
                  Payment will be collected before the call. You’ll receive a payment link after
                  submitting this form.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
              >
                Pay ₹150 & Connect Now <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}