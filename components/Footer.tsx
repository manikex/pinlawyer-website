import Link from 'next/link';
import { MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  // Custom SVG for X (Twitter) and Threads
  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const ThreadsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M6 12h12" />
      <circle cx="12" cy="12" r="4" fill="none" />
    </svg>
  );

  return (
    <footer className="bg-[#072828] border-t border-[#0A2A2A] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 – Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <MapPin className="w-5 h-5 text-[#E5B85C]" />
            <span>Pin <span className="text-[#E5B85C]">Lawyer</span></span>
          </div>
          <p className="mt-2 text-xs">
            Lawyer at your specific PIN Code. Practicing across Supreme Court, High Courts, NCDRC, NCLT, and more.
          </p>
          {/* Social Icons */}
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://facebook.com/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#E5B85C] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#E5B85C] transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://instagram.com/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#E5B85C] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#E5B85C] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://threads.net/@pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#E5B85C] transition-colors"
              aria-label="Threads"
            >
              <ThreadsIcon />
            </a>
          </div>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/practice-areas/litigation" className="hover:text-[#E5B85C] transition">Litigation</Link></li>
            <li><Link href="/practice-areas/tort-motor-vehicles-insurance" className="hover:text-[#E5B85C] transition">Insurance</Link></li>
            <li><Link href="/practice-areas/tort-motor-vehicles-insurance" className="hover:text-[#E5B85C] transition">Motor vehicle</Link></li>
            <li><Link href="/practice-areas/international-business" className="hover:text-[#E5B85C] transition">Company advisory</Link></li>
            <li><Link href="/law-library" className="hover:text-[#E5B85C] transition">Law Library</Link></li>
          </ul>
        </div>

        {/* Column 3 – Happy to Assist You */}
        <div>
          <h4 className="text-white font-semibold mb-2">Happy to Assist You</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-[#E5B85C] transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#E5B85C] transition">Contact</Link></li>
            <li><Link href="/book-appointment" className="hover:text-[#E5B85C] transition">Book appointment</Link></li>
            <div className="mt-3 space-y-0.5">
              <p>New Delhi, India</p>
              <p>support@pinlawyer.com</p>
            </div>
          </ul>
        </div>

        {/* Column 4 – Legal */}
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/faq" className="hover:text-[#E5B85C] transition">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-[#E5B85C] transition">Privacy policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-[#E5B85C] transition">Disclaimer</Link></li>
            <li><Link href="/terms" className="hover:text-[#E5B85C] transition">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#0A2A2A] text-center py-4 text-xs text-slate-500">
        © 2021 Pin Lawyer. Bar Council of India Regulations apply.
      </div>
    </footer>
  );
}