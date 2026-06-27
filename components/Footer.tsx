import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#072828] border-t border-[#0A2A2A] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <MapPin className="w-5 h-5 text-[#E5B85C]" />
            <span>Pin <span className="text-[#E5B85C]">Lawyer</span></span>
          </div>
          <p className="mt-2 text-xs">A lawyer at your PIN code. Practicing across Supreme Court, High Courts, NCLT, and more.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-[#E5B85C] transition">About</Link></li>
            <li><Link href="/practice-areas/litigation" className="hover:text-[#E5B85C] transition">Litigation</Link></li>
            <li><Link href="/law-library" className="hover:text-[#E5B85C] transition">Law Library</Link></li>
            <li><Link href="/contact" className="hover:text-[#E5B85C] transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>Delhi, India</p>
          <p>contact@pinlawyer.com</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/faq" className="hover:text-[#E5B85C] transition">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-[#E5B85C] transition">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-[#E5B85C] transition">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#0A2A2A] text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Pin Lawyer. Bar Council of India regulations apply.
      </div>
    </footer>
  );
}