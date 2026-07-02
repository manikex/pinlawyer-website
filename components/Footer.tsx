import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Footer() {
  // ---------- Custom Social Icons (Official Colours & Shapes) ----------

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="url(#instaGradient)">
      <defs>
        <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529"/>
          <stop offset="30%" stopColor="#DD2A7B"/>
          <stop offset="60%" stopColor="#8134AF"/>
          <stop offset="100%" stopColor="#515BD4"/>
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const ThreadsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
      <path d="M12 6v12M6 12h12"/>
      <circle cx="12" cy="12" r="4"/>
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

          {/* Social Icons – Official colours and shapes */}
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://facebook.com/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://x.com/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://instagram.com/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com/company/pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://youtube.com/@pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://threads.net/@pin_lawyer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300"
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

        {/* Column 4 – Legal (with News) */}
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/news" className="hover:text-[#E5B85C] transition">News</Link></li>
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