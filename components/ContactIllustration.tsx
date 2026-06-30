'use client';

import { motion } from 'framer-motion';

export default function ContactIllustration() {
  return (
    <div className="mx-auto flex h-56 max-w-sm items-center justify-center">
      <svg viewBox="0 0 320 180" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="26"
          y="44"
          width="92"
          height="96"
          rx="10"
          fill="#E5B85C"
          fillOpacity="0.08"
          stroke="#E5B85C"
          strokeWidth="1.6"
          animate={{ y: [0, -5, 0], rotate: [0, 0.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.rect
          x="42"
          y="60"
          width="60"
          height="10"
          rx="5"
          fill="#E5B85C"
          fillOpacity="0.7"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.rect
          x="42"
          y="78"
          width="46"
          height="8"
          rx="4"
          fill="#E5B85C"
          fillOpacity="0.55"
          animate={{ opacity: [0.6, 0.95, 0.6] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.rect
          x="42"
          y="94"
          width="54"
          height="8"
          rx="4"
          fill="#E5B85C"
          fillOpacity="0.4"
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        <motion.g
          animate={{ rotate: [0, 2.5, 0, -2, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '220px 54px' }}
        >
          <line x1="220" y1="28" x2="220" y2="60" stroke="#E5B85C" strokeWidth="2" strokeLinecap="round" />
          <line x1="186" y1="60" x2="254" y2="60" stroke="#E5B85C" strokeWidth="2" strokeLinecap="round" />
          <line x1="186" y1="60" x2="178" y2="82" stroke="#E5B85C" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="254" y1="60" x2="262" y2="82" stroke="#E5B85C" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="178" cy="90" r="7" stroke="#E5B85C" strokeWidth="1.6" fill="none" />
          <circle cx="262" cy="90" r="7" stroke="#E5B85C" strokeWidth="1.6" fill="none" />
          <circle cx="178" cy="90" r="3.2" fill="#E5B85C" fillOpacity="0.35" />
          <circle cx="262" cy="90" r="3.2" fill="#E5B85C" fillOpacity="0.35" />
        </motion.g>

        <motion.g
          animate={{ y: [0, -4, 0], rotate: [0, 0.8, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '150px 118px' }}
        >
          <rect x="136" y="110" width="98" height="40" rx="10" fill="#FFF8E9" stroke="#D9B06A" strokeWidth="1.4" />
          <rect x="148" y="122" width="42" height="7" rx="3.5" fill="#E5B85C" fillOpacity="0.7" />
          <rect x="148" y="136" width="32" height="6" rx="3" fill="#D9B06A" fillOpacity="0.7" />
          <line x1="206" y1="120" x2="220" y2="120" stroke="#D9B06A" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="206" y1="132" x2="218" y2="132" stroke="#D9B06A" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="206" y1="144" x2="214" y2="144" stroke="#D9B06A" strokeWidth="1.6" strokeLinecap="round" />
        </motion.g>

        <motion.circle cx="54" cy="28" r="2.2" fill="#E5B85C" fillOpacity="0.45" animate={{ y: [0, -5, 0], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle cx="250" cy="24" r="2.6" fill="#E5B85C" fillOpacity="0.35" animate={{ y: [0, 4, 0], opacity: [0.5, 0.95, 0.5] }} transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }} />
        <motion.line x1="96" y1="152" x2="224" y2="152" stroke="#E5B85C" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" animate={{ opacity: [0.25, 0.5, 0.25] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }} />
      </svg>
    </div>
  );
}