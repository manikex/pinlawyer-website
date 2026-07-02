import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

export async function GET() {
  const bookings = readBookings();
  return NextResponse.json(bookings);
}