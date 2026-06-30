'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, MapPin, Users, Building2 } from 'lucide-react';

const stats = [
  { icon: MapPin, label: 'High Courts Covered', value: 25, suffix: '+' },
  { icon: Scale, label: 'Cases Solved', value: 50, suffix: '+' },
  { icon: Building2, label: 'Practice Areas', value: 23, suffix: '+' },
  { icon: Users, label: 'Team Members', value: 15, suffix: '+' },
];

function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * easeOut));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return { count, ref };
}

export default function StatsCounter() {
  return (
    <section className="bg-[#072828] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => {
          const { count, ref } = useCountUp(stat.value, 2500);
          return (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E5B85C]/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[#E5B85C]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                {count}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}