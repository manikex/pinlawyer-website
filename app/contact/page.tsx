'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  AlertCircle,
  MessageCircle,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitted');
  };

  return (
    <section className="bg-white">
      {/* Hero – deep teal with abstract lines, only bottom corners gently rounded */}
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-20 pb-28 px-4 md:px-12 overflow-hidden rounded-b-[1.5rem]">
        {/* Abstract net lines – delicate SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flowing bezier curves */}
          <path
            d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100"
            stroke="#E5B85C"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150"
            stroke="#E5B85C"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M-100 150 C150 300, 350 50, 550 250 C750 450, 950 200, 1300 250"
            stroke="#E5B85C"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          {/* Subtle net mesh */}
          <path
            d="M200 0 L250 400 M500 0 L520 400 M800 0 L790 400 M1100 0 L1080 400"
            stroke="#E5B85C"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <path
            d="M0 100 L1200 80 M0 200 L1200 220 M0 300 L1200 290"
            stroke="#E5B85C"
            strokeWidth="0.5"
            opacity="0.3"
          />
          {/* Small decorative circles */}
          <circle cx="150" cy="80" r="2" stroke="#E5B85C" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="850" cy="300" r="3" stroke="#E5B85C" strokeWidth="0.8" fill="none" opacity="0.5" />
          <circle cx="1050" cy="120" r="2.5" stroke="#E5B85C" strokeWidth="0.8" fill="none" opacity="0.6" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Contact <span className="text-[#E5B85C]">Pin Lawyer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Reach us however you prefer — call, WhatsApp, email, or fill the form below.
            We&apos;re available at your PIN code.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-12">
        {/* Quick Contact Cards – 3 cards + full-width Urgent below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16"
        >
          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {/* Phone */}
            <a
              href="tel:+917311123555"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#E5B85C]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-500">Call Us</p>
                <p className="font-semibold text-slate-900 break-all">+91 7311123555</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917311123555?text=Hello%20Pin%20Lawyer%2C%20I%20need%20legal%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-500">WhatsApp</p>
                <p className="font-semibold text-slate-900">Chat with us</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@pinlawyer.com"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-[#E5B85C] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#E5B85C]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-semibold text-slate-900 break-all">contact@pinlawyer.com</p>
              </div>
            </a>
          </div>

          {/* Full-width Urgent Contact Card */}
          <Link
            href="/contact/urgent"
            className="block w-full p-5 rounded-2xl border-2 border-red-200 bg-red-50 hover:border-red-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-red-800">Urgent Contact</p>
                  <p className="text-sm text-red-600 break-words">
                    Need immediate help? Pay ₹150 and get connected in 30–40 minutes.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-red-500 shrink-0" />
            </div>
          </Link>
        </motion.div>

        {/* Main Contact Section: Map + Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Left: Office Info + Map */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Office</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E5B85C] mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Delhi Chambers</p>
                  <p className="text-sm text-slate-600">
                    Old Lawyer&apos;s Chamber<br />
                    Supreme Court of India<br />
                    New Delhi – 110001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E5B85C] mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Working Hours</p>
                  <p className="text-sm text-slate-600">
                    Monday – Saturday: 10:00 AM – 7:00 PM IST<br />
                    Sunday: Closed (Urgent matters: WhatsApp)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-2xl bg-slate-200 flex items-center justify-center border border-slate-300">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-500">Google Map Embed</p>
                <p className="text-xs text-slate-400">(Add your location later)</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            {formState === 'submitted' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Message Sent!</h3>
                <p className="text-sm text-emerald-600">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Only letters and spaces allowed"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
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
                    pattern="^\+?\d{10,13}$"
                    title="Enter a valid phone number (10-13 digits, optional + at start)"
                    maxLength={14}
                    inputMode="numeric"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Your PIN Code *
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    pattern="\d{6}"
                    maxLength={6}
                    title="Enter exactly 6 digits"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
                    placeholder="e.g. 400001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Case Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition bg-white"
                  >
                    <option value="">Select case type</option>
                    <option>Litigation (Supreme Court / High Court)</option>
                    <option>NCLT / NCLAT</option>
                    <option>Consumer Forum / NCDRC</option>
                    <option>CAT (Service Matters)</option>
                    <option>Criminal Matters</option>
                    <option>Family & Matrimonial</option>
                    <option>Corporate & Commercial</option>
                    <option>RERA / Real Estate</option>
                    <option>Arbitration</option>
                    <option>International Advisory</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Brief Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5B85C] focus:ring-1 focus:ring-[#E5B85C] transition"
                    placeholder="Tell us about your case in a few sentences..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#072828] font-semibold rounded-lg transition flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/917311123555?text=Hello%20Pin%20Lawyer%2C%20I%20need%20legal%20assistance"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </section>
  );
}