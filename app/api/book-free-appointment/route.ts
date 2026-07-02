import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json');

interface Booking {
  email: string;
  phone?: string;
  date: string;
  slot: string;
  type: 'free' | 'premium' | 'exclusive';
  timestamp: string;
  paymentId?: string;
}

function readBookings(): Booking[] {
  if (!fs.existsSync(BOOKINGS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeBookings(bookings: Booking[]) {
  const dir = path.dirname(BOOKINGS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf8');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, pin, caseType, message, date, slot, type, paymentId, checkOnly } = body;

    // --- DUPLICATE CHECK FOR FREE BOOKINGS (30‑day window) ---
    if (type === 'free' && !checkOnly) {
      const allBookings = readBookings();
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);
      const thirtyDaysAhead = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 30);

      const recentBooking = allBookings.find((b) => {
        if (b.type !== 'free') return false;
        const bookingDate = new Date(b.date);
        const isInRange = bookingDate >= thirtyDaysAgo && bookingDate <= thirtyDaysAhead;
        const matchesEmail = b.email === email;
        const matchesPhone = phone && b.phone === phone;
        return isInRange && (matchesEmail || matchesPhone);
      });

      if (recentBooking) {
        return NextResponse.json(
          { error: 'You already have a free booking within the last or upcoming 30 days.' },
          { status: 409 }
        );
      }
    }

    // --- CAPACITY CHECK ---
    const maxPerSlot = type === 'free' ? 2 : 1;

    if (checkOnly) {
      const allBookings = readBookings();
      const sameSlot = allBookings.filter(
        (b) => b.date === date && b.slot === slot && b.type === type
      );
      if (sameSlot.length >= maxPerSlot) {
        return NextResponse.json(
          { error: `This ${type} slot is fully booked.` },
          { status: 409 }
        );
      }
      return NextResponse.json({ success: true });
    }

    // --- REAL BOOKING ---
    const allBookings = readBookings();
    const sameSlot = allBookings.filter(
      (b) => b.date === date && b.slot === slot && b.type === type
    );

    if (sameSlot.length >= maxPerSlot) {
      return NextResponse.json(
        { error: `This ${type} slot is fully booked.` },
        { status: 409 }
      );
    }

    const newBooking: Booking = {
      email,
      phone,
      date,
      slot,
      type: type || 'free',
      timestamp: new Date().toISOString(),
      paymentId,
    };
    allBookings.push(newBooking);
    writeBookings(allBookings);

    // --- SEND EMAIL via SMTP2GO ---
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'mail.smtp2go.com',
      port: Number(process.env.EMAIL_PORT) || 2525,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const typeLabel =
      type === 'premium' ? '⭐ Premium' : type === 'exclusive' ? '💎 Exclusive' : '📅 Free';

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New ${typeLabel} Appointment from ${name}`,
      html: `
        <h2>${typeLabel} Appointment Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>PIN:</strong> ${pin}</p>
        <p><strong>Case Type:</strong> ${caseType}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Slot:</strong> ${slot}</p>
        ${paymentId ? `<p><strong>Payment ID:</strong> ${paymentId}</p>` : ''}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Booking email sent:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Booking error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}