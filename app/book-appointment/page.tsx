'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarPlus,
  Sparkles,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// ---------- Constants ----------
const FREE_DAYS = [2, 6];             // Tuesday, Saturday
const PREMIUM_DAYS = [1, 3, 4, 5];   // Monday, Wednesday, Thursday, Friday
const EXCLUSIVE_DAYS = [0];           // Sunday only
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Cut‑off minutes before slot start
const CUTOFF_FREE = 30;
const CUTOFF_PREMIUM = 15;
const CUTOFF_EXCLUSIVE = 10;

// ---------- 12‑hour time formatter ----------
function format12Hour(h: number, m: number) {
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHour = h > 12 ? h - 12 : (h === 0 ? 12 : h);
  return `${displayHour}:${m.toString().padStart(2, '0')} ${period}`;
}

// Free / Premium slot generator (now returns hour/minute for cutoff)
function generateSlots() {
  const slots: { time: string; value: string; hour: number; minute: number }[] = [];
  let h = 18, m = 30;
  while (h < 20 || (h === 20 && m < 10)) {
    const start = format12Hour(h, m);
    const slotHour = h;
    const slotMinute = m;
    m += 20;
    if (m >= 60) { h++; m -= 60; }
    const end = format12Hour(h, m);
    slots.push({ time: `${start} – ${end}`, value: start, hour: slotHour, minute: slotMinute });
  }
  return slots;
}

// Exclusive slot definitions (with hour/minute for cutoff)
const EXCLUSIVE_SLOTS = [
  { time: '10:05 AM – 11:05 AM', value: '10:05 AM', hour: 10, minute: 5 },
  { time: '11:10 AM – 12:10 PM', value: '11:10 AM', hour: 11, minute: 10 },
  { time: '2:30 PM – 3:30 PM',   value: '2:30 PM', hour: 14, minute: 30 },
  { time: '3:35 PM – 4:35 PM',   value: '3:35 PM', hour: 15, minute: 35 },
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(year: number, month: number, day: number) {
  return `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

function toDisplayDate(isoDate: string) {
  const [y, m, d] = isoDate.split('-');
  return `${d}-${m}-${y}`;
}

function Banner({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl overflow-hidden border border-slate-200 hover:border-[#E5B85C] hover:shadow-lg transition-all duration-300 h-full"
    >
      <div className="bg-slate-100 h-full min-h-[200px] flex items-center justify-center text-center p-4">
        <div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Partner</p>
          <p className="text-sm text-slate-700 mt-1 font-semibold">Your Banner Here</p>
          <p className="text-xs text-slate-400 mt-2">Clickable Image</p>
        </div>
      </div>
    </Link>
  );
}

// ---------- Colour helpers for each type ----------
function getTypeColors(type: 'free' | 'premium' | 'exclusive') {
  switch (type) {
    case 'free':
      return {
        toggle: 'bg-[#E5B85C] text-[#072828] shadow-lg',
        toggleInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        daySelected: 'bg-[#E5B85C] text-[#072828] rounded-lg',
        dayHover: 'hover:bg-[#E5B85C]/10 dark:hover:bg-[#E5B85C]/20',
        slotHover: 'hover:border-[#E5B85C] hover:bg-[#E5B85C]/5',
        submit: 'bg-[#E5B85C] hover:bg-[#d4a843] text-[#072828]',
        submitText: 'Confirm Free Appointment',
        razorpayColor: '#E5B85C',
        cutoff: CUTOFF_FREE,
      };
    case 'premium':
      return {
        toggle: 'bg-[#1E3A5F] text-white shadow-lg',
        toggleInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        daySelected: 'bg-[#1E3A5F] text-white rounded-lg',
        dayHover: 'hover:bg-[#1E3A5F]/10 dark:hover:bg-[#1E3A5F]/20',
        slotHover: 'hover:border-[#1E3A5F] hover:bg-[#1E3A5F]/10',
        submit: 'bg-[#1E3A5F] hover:bg-[#162d47] text-white',
        submitText: 'Confirm Premium Appointment by paying ₹320',
        razorpayColor: '#1E3A5F',
        cutoff: CUTOFF_PREMIUM,
      };
    case 'exclusive':
      return {
        toggle: 'bg-[#0A3A3A] text-white shadow-lg',
        toggleInactive: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        daySelected: 'bg-[#0F4C4C] text-white rounded-lg',
        dayHover: 'hover:bg-[#0F4C4C]/10 dark:hover:bg-[#0F4C4C]/20',
        slotHover: 'hover:border-[#0F4C4C] hover:bg-[#0F4C4C]/10',
        submit: 'bg-[#0A3A3A] hover:bg-[#0d4d4d] text-white',
        submitText: 'Confirm Exclusive Appointment by paying ₹915',
        razorpayColor: '#0F4C4C',
        cutoff: CUTOFF_EXCLUSIVE,
      };
  }
}

// ---------- Main Page Component ----------
export default function BookAppointmentPage() {
  const searchParams = useSearchParams();
  const initialPin = searchParams.get('pin') || '';
  const typeParam = searchParams.get('type');

  const [appointmentType, setAppointmentType] = useState<'free' | 'premium' | 'exclusive'>('free');
  const now = new Date();
  const baseMonth = now.getMonth();
  const baseYear = now.getFullYear();

  const [leftYear, setLeftYear] = useState(baseYear);
  const [leftMonth, setLeftMonth] = useState(baseMonth);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'form' | 'success'>('select');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pin: initialPin, caseType: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [existingBookings, setExistingBookings] = useState<any[]>([]);

  const colors = getTypeColors(appointmentType);
  const cutoffMinutes = colors.cutoff;

  useEffect(() => {
    if (initialPin) {
      setFormData(prev => ({ ...prev, pin: initialPin }));
    }
  }, [initialPin]);

  useEffect(() => {
    fetch('/api/slot-availability')
      .then(res => res.json())
      .then(data => setExistingBookings(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (typeParam === 'premium') setAppointmentType('premium');
    else if (typeParam === 'exclusive') setAppointmentType('exclusive');
    else setAppointmentType('free');
  }, [typeParam]);

  const rightMonth = leftMonth === 11 ? 0 : leftMonth + 1;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  const monthsAhead = (leftYear - baseYear) * 12 + (leftMonth - baseMonth);

  const validDays = appointmentType === 'free'
    ? FREE_DAYS
    : appointmentType === 'premium'
    ? PREMIUM_DAYS
    : EXCLUSIVE_DAYS;

  const maxPerSlot = appointmentType === 'free' ? 2 : 1;
  const allSlots = useMemo(() => {
    return appointmentType === 'exclusive' ? EXCLUSIVE_SLOTS : generateSlots();
  }, [appointmentType]);

  const slotCount = (dateStr: string, slot: string) => {
    return existingBookings.filter(
      (b: any) => b.date === dateStr && b.slot === slot && b.type === appointmentType
    ).length;
  };

  // Check if a slot is past the cutoff time for today
  const isSlotCutoff = (dateStr: string, slotHour: number, slotMinute: number) => {
    const today = new Date();
    const todayStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());
    if (dateStr !== todayStr) return false;

    const slotTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), slotHour, slotMinute);
    const cutoffTime = new Date(today.getTime() + cutoffMinutes * 60 * 1000);
    return slotTime < cutoffTime;
  };

  const buildCalendar = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();
    const cells: { day: number | null; date: string | null; isDisabled: boolean }[] = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push({ day: null, date: null, isDisabled: true });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = formatDate(year, month, d);
      const dateObj = new Date(year, month, d);
      const dayOfWeek = dateObj.getDay();
      const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isValidDay = validDays.includes(dayOfWeek);
      cells.push({
        day: d,
        date: dateStr,
        isDisabled: isPast || !isValidDay,
      });
    }

    while (cells.length < 42) {
      cells.push({ day: null, date: null, isDisabled: true });
    }

    return cells;
  };

  const leftCalendar = useMemo(() => buildCalendar(leftYear, leftMonth), [leftYear, leftMonth, validDays]);
  const rightCalendar = useMemo(() => buildCalendar(rightYear, rightMonth), [rightYear, rightMonth, validDays]);

  const canGoBack = monthsAhead > 0;
  const canGoForward = monthsAhead < 1;

  const handlePrev = () => {
    if (!canGoBack) return;
    const newLeftMonth = leftMonth === 0 ? 11 : leftMonth - 1;
    const newLeftYear = leftMonth === 0 ? leftYear - 1 : leftYear;
    setLeftMonth(newLeftMonth);
    setLeftYear(newLeftYear);
    setSelectedDate(null);
    setSelectedSlot(null);
    setStep('select');
  };

  const handleNext = () => {
    if (!canGoForward) return;
    const newLeftMonth = rightMonth;
    const newLeftYear = rightYear;
    setLeftMonth(newLeftMonth);
    setLeftYear(newLeftYear);
    setSelectedDate(null);
    setSelectedSlot(null);
    setStep('select');
  };

  const handleDayClick = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedSlot(null);
    setStep('select');
  };

  const handleSlotSelect = (slot: string) => {
    if (!selectedDate) return;
    setSelectedSlot(slot);
    setStep('form');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFreeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/book-free-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          slot: selectedSlot,
          type: appointmentType,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setExistingBookings(prev => [...prev, { email: formData.email, date: selectedDate, slot: selectedSlot, type: appointmentType }]);
        setStep('success');
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch { alert('Network error.'); }
    finally { setLoading(false); }
  };

  const handlePaidSubmit = async () => {
    setLoading(true);
    try {
      const checkRes = await fetch('/api/book-free-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          slot: selectedSlot,
          type: appointmentType,
          checkOnly: true,
        }),
      });
      const checkData = await checkRes.json();
      if (!checkRes.ok) { alert(checkData.error || 'Slot not available.'); setLoading(false); return; }

      const amount = appointmentType === 'premium' ? 320 : 915;
      const orderRes = await fetch('/api/create-booking-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      const orderData = await orderRes.json();
      if (!orderData.orderId) { alert('Payment service unavailable.'); setLoading(false); return; }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Pin Lawyer',
        description: appointmentType === 'premium' ? 'Premium Appointment Booking' : 'Exclusive Appointment Booking',
        order_id: orderData.orderId,
        handler: async function (response: any) {
          const bookingRes = await fetch('/api/book-free-appointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              date: selectedDate,
              slot: selectedSlot,
              type: appointmentType,
              paymentId: response.razorpay_payment_id,
            }),
          });
          if (bookingRes.ok) {
            setExistingBookings(prev => [...prev, { email: formData.email, date: selectedDate, slot: selectedSlot, type: appointmentType }]);
            setStep('success');
          } else {
            alert('Booking saved but confirmation email failed. We will contact you.');
          }
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: colors.razorpayColor },
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch { alert('Network error.'); }
    finally { setLoading(false); }
  };

  useEffect(() => {
    if (appointmentType === 'premium' || appointmentType === 'exclusive') {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      return () => { document.body.removeChild(script); };
    }
  }, [appointmentType]);

  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#072828] via-[#0A2A2A] to-[#072828] text-white pt-14 pb-16 px-4 md:px-12 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
          <path d="M-100 200 C100 50, 300 350, 500 150 C700 -50, 900 300, 1300 100" stroke="#E5B85C" strokeWidth="1.5" />
          <path d="M-100 250 C200 100, 400 400, 600 200 C800 0, 1000 350, 1300 150" stroke="#E5B85C" strokeWidth="1" opacity="0.6" />
          <circle cx="150" cy="80" r="2" stroke="#E5B85C" strokeWidth="0.8" opacity="0.7" />
        </svg>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Book Your Appointment
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg text-slate-300">
            Select a Date and Time – Free, Premium, or Exclusive.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-4 py-10">
        {/* Type Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => { setAppointmentType('free'); setStep('select'); setSelectedDate(null); setSelectedSlot(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              appointmentType === 'free' ? getTypeColors('free').toggle : getTypeColors('free').toggleInactive
            }`}
          >
            <CalendarPlus className="w-5 h-5" /> Free
          </button>
          <button
            onClick={() => { setAppointmentType('premium'); setStep('select'); setSelectedDate(null); setSelectedSlot(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              appointmentType === 'premium' ? getTypeColors('premium').toggle : getTypeColors('premium').toggleInactive
            }`}
          >
            <Sparkles className="w-5 h-5" /> Premium (₹320)
          </button>
          <button
            onClick={() => { setAppointmentType('exclusive'); setStep('select'); setSelectedDate(null); setSelectedSlot(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              appointmentType === 'exclusive' ? getTypeColors('exclusive').toggle : getTypeColors('exclusive').toggleInactive
            }`}
          >
            <Star className="w-5 h-5" /> Exclusive (₹915)
          </button>
        </div>

        {/* Main Calendar Area */}
        <div className="flex gap-0 md:gap-0 items-stretch">
          <aside className="hidden lg:block w-44 shrink-0">
            <Banner href="https://example.com/partner-left" />
          </aside>

          <div className="flex-1 min-w-0 flex gap-0 md:gap-0 items-stretch">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3 px-2">
                <button
                  onClick={handlePrev}
                  disabled={!canGoBack}
                  className={`text-sm flex items-center gap-1 ${canGoBack ? 'text-[#E5B85C] hover:underline' : 'text-slate-300 cursor-not-allowed'}`}
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {MONTH_NAMES[leftMonth]} {leftYear}
                </h3>
                <div />
              </div>
              <SquareCalendarGrid
                cells={leftCalendar}
                selectedDate={selectedDate}
                onDayClick={handleDayClick}
                colors={colors}
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-3 px-2">
                <div />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {MONTH_NAMES[rightMonth]} {rightYear}
                </h3>
                <button
                  onClick={handleNext}
                  disabled={!canGoForward}
                  className={`text-sm flex items-center gap-1 ${canGoForward ? 'text-[#E5B85C] hover:underline' : 'text-slate-300 cursor-not-allowed'}`}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <SquareCalendarGrid
                cells={rightCalendar}
                selectedDate={selectedDate}
                onDayClick={handleDayClick}
                colors={colors}
              />
            </div>
          </div>

          <aside className="hidden lg:block w-44 shrink-0">
            <Banner href="https://example.com/partner-right" />
          </aside>
        </div>

        <div className="lg:hidden mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Banner href="https://example.com/partner-left" />
          <Banner href="https://example.com/partner-right" />
        </div>

        {/* Time Slots – now with cutoff logic */}
        {selectedDate && step === 'select' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
          >
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E5B85C]" />
              Available times for {toDisplayDate(selectedDate)}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {allSlots.map(slot => {
                const count = slotCount(selectedDate, slot.value);
                const isFull = count >= maxPerSlot;
                const isCutoff = isSlotCutoff(selectedDate, slot.hour, slot.minute);
                const disabled = isFull || isCutoff;
                return (
                  <button
                    key={slot.value}
                    onClick={() => handleSlotSelect(slot.value)}
                    disabled={disabled}
                    className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      disabled
                        ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600'
                        : `border-slate-200 bg-white text-slate-700 ${colors.slotHover} dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300`
                    }`}
                  >
                    {isFull ? `${slot.time} (full)` : isCutoff ? `${slot.time} (past)` : slot.time}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Booking Form */}
        <AnimatePresence>
          {step === 'form' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-xl mx-auto mt-8">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 mb-4 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>{selectedDate ? toDisplayDate(selectedDate) : ''}</strong> at <strong>{selectedSlot}</strong>
                  {appointmentType === 'free' ? ' (Free)' : appointmentType === 'premium' ? ' (Premium ₹320)' : ' (Exclusive ₹915)'}
                </p>
              </div>
              <form onSubmit={appointmentType === 'free' ? handleFreeSubmit : (e) => { e.preventDefault(); handlePaidSubmit(); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" type="text" required placeholder="Full Name *" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#E5B85C] transition" />
                  <input name="email" type="email" required placeholder="Email Address *" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#E5B85C] transition" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="phone" type="tel" required placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#E5B85C] transition" />
                  <input
                    name="pin"
                    type="text"
                    inputMode="numeric"
                    required
                    maxLength={6}
                    pattern="\d{6}"
                    title="Enter exactly 6 digits"
                    placeholder="PIN Code *"
                    value={formData.pin}
                    onChange={handleInputChange}
                    readOnly={!!initialPin}
                    className={`w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#E5B85C] transition ${
                      initialPin ? 'cursor-not-allowed opacity-75' : ''
                    }`}
                  />
                </div>
                <select name="caseType" required value={formData.caseType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#E5B85C] transition">
                  <option value="">Select Case Type *</option>
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
                <textarea name="message" rows={3} placeholder="Brief description *" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#E5B85C] transition" />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${colors.submit}`}
                >
                  {loading ? (
                    <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                  ) : (
                    colors.submitText
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success */}
        <AnimatePresence>
          {step === 'success' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto mt-8 text-center p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">Appointment Booked!</h2>
              <p className="text-emerald-600 dark:text-emerald-400">
                We’ve received your booking for <strong>{selectedDate ? toDisplayDate(selectedDate) : ''}</strong> at <strong>{selectedSlot}</strong>.
                You will receive a confirmation shortly.
              </p>
              <Link href="/" className="inline-block mt-6 px-6 py-2 bg-[#E5B85C] text-[#072828] font-semibold rounded-lg">Back to Home</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ---------- Square Calendar Grid (colour‑aware) ----------
function SquareCalendarGrid({
  cells,
  selectedDate,
  onDayClick,
  colors,
}: {
  cells: { day: number | null; date: string | null; isDisabled: boolean }[];
  selectedDate: string | null;
  onDayClick: (date: string) => void;
  colors: ReturnType<typeof getTypeColors>;
}) {
  return (
    <div className="w-full">
      <div className="aspect-square w-full border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden flex flex-col">
        <div className="grid grid-cols-7 bg-slate-50 dark:bg-slate-900 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 py-1.5">
          {DAY_NAMES.map(d => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 flex-1">
          {cells.map((cell, idx) => (
            <button
              key={idx}
              disabled={cell.isDisabled || !cell.date}
              onClick={() => cell.date && onDayClick(cell.date)}
              className={`flex items-center justify-center font-bold transition-all text-base ${
                !cell.date
                  ? ''
                  : cell.isDisabled
                  ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
                  : selectedDate === cell.date
                  ? colors.daySelected
                  : `${colors.dayHover} text-slate-700 dark:text-slate-300`
              }`}
            >
              {cell.day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}