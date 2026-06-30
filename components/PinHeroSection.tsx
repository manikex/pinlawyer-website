'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MapPin, AlertCircle, CalendarPlus } from 'lucide-react';
import Link from 'next/link';

// ---------- Valid Indian PIN code prefixes ----------
const validPrefixes = new Set([
  '110','111','112','113','114','115','116','117','118','119',
  '120','121','122','123','124','125','126','127','128','129',
  '130','131','132','133','134','135','136','137','138','139',
  '200','201','202','203','204','205','206','207','208','209',
  '210','211','212','213','214','215','216','217','218','219',
  '220','221','222','223','224','225','226','227','228','229',
  '230','231','232','233','234','235','236','237','238','239',
  '240','241','242','243','244','245','246','247','248','249',
  '250','251','252','253','254','255','256','257','258','259',
  '260','261','262','263','264','265','266','267','268','269',
  '270','271','272','273','274','275','276','277','278','279',
  '280','281','282','283','284','285','286','287','288','289',
  '300','301','302','303','304','305','306','307','308','309',
  '310','311','312','313','314','315','316','317','318','319',
  '320','321','322','323','324','325','326','327','328','329',
  '330','331','332','333','334','335','336','337','338','339',
  '340','341','342','343','344','345','346','347','348','349',
  '360','361','362','363','364','365','366','367','368','369',
  '370','371','372','373','374','375','376','377','378','379',
  '380','381','382','383','384','385','386','387','388','389',
  '390','391','392','393','394','395','396','397','398','399',
  '400','401','402','403','404','405','406','407','408','409',
  '410','411','412','413','414','415','416','417','418','419',
  '420','421','422','423','424','425','426','427','428','429',
  '430','431','432','433','434','435','436','437','438','439',
  '440','441','442','443','444','445','446','447','448','449',
  '450','451','452','453','454','455','456','457','458','459',
  '460','461','462','463','464','465','466','467','468','469',
  '470','471','472','473','474','475','476','477','478','479',
  '480','481','482','483','484','485','486','487','488','489',
  '490','491','492','493','494','495','496','497','498','499',
  '500','501','502','503','504','505','506','507','508','509',
  '510','511','512','513','514','515','516','517','518','519',
  '520','521','522','523','524','525','526','527','528','529',
  '530','531','532','533','534','535','536','537','538','539',
  '560','561','562','563','564','565','566','567','568','569',
  '570','571','572','573','574','575','576','577','578','579',
  '580','581','582','583','584','585','586','587','588','589',
  '590','591','592','593','594','595','596','597','598','599',
  '600','601','602','603','604','605','606','607','608','609',
  '610','611','612','613','614','615','616','617','618','619',
  '620','621','622','623','624','625','626','627','628','629',
  '630','631','632','633','634','635','636','637','638','639',
  '640','641','642','643','644','645','646','647','648','649',
  '670','671','672','673','674','675','676','677','678','679',
  '680','681','682','683','684','685','686','687','688','689',
  '690','691','692','693','694','695','696','697','698','699',
  '700','701','702','703','704','705','706','707','708','709',
  '710','711','712','713','714','715','716','717','718','719',
  '720','721','722','723','724','725','726','727','728','729',
  '730','731','732','733','734','735','736','737','738','739',
  '740','741','742','743','744','745','746','747','748','749',
  '750','751','752','753','754','755','756','757','758','759',
  '760','761','762','763','764','765','766','767','768','769',
  '770','771','772','773','774','775','776','777','778','779',
  '780','781','782','783','784','785','786','787','788','789',
  '790','791','792','793','794','795','796','797','798','799',
  '800','801','802','803','804','805','806','807','808','809',
  '810','811','812','813','814','815','816','817','818','819',
  '820','821','822','823','824','825','826','827','828','829',
  '830','831','832','833','834','835','836','837','838','839',
  '840','841','842','843','844','845','846','847','848','849',
  '850','851','852','853','854','855','856','857','858','859',
  '900','901','902','903','904','905','906','907','908','909',
  '910','911','912','913','914','915','916','917','918','919',
  '920','921','922','923','924','925','926','927','928','929',
  '930','931','932','933','934','935','936','937','938','939',
  '940','941','942','943','944','945','946','947','948','949',
  '950','951','952','953','954','955','956','957','958','959',
  '960','961','962','963','964','965','966','967','968','969',
  '970','971','972','973','974','975','976','977','978','979',
  '980','981','982','983','984','985','986','987','988','989',
  '990','991','992','993','994','995','996','997','998','999',
]);

const getPinRegion = (code: string): string => {
  const prefix = code.slice(0, 3);
  if (/^1[1-3]/.test(prefix)) return 'Delhi';
  if (/^2/.test(prefix)) return 'Uttar Pradesh / Uttarakhand';
  if (/^3[0-4]/.test(prefix)) return 'Rajasthan';
  if (/^3[6-9]/.test(prefix)) return 'Gujarat';
  if (/^4/.test(prefix)) return 'Maharashtra';
  if (/^4[5-8]/.test(prefix)) return 'Madhya Pradesh';
  if (/^49/.test(prefix)) return 'Chhattisgarh';
  if (/^5/.test(prefix)) return 'Andhra Pradesh / Telangana';
  if (/^5[6-9]/.test(prefix)) return 'Karnataka';
  if (/^6/.test(prefix)) return 'Tamil Nadu';
  if (/^6[7-9]/.test(prefix)) return 'Kerala';
  if (/^7[0-4]/.test(prefix)) return 'West Bengal';
  if (/^7[5-7]/.test(prefix)) return 'Odisha';
  if (/^7[8-9]/.test(prefix)) return 'Assam / North East';
  if (/^8/.test(prefix)) return 'Bihar / Jharkhand';
  if (/^9/.test(prefix)) return 'Army Postal Service';
  return '';
};

// ---------- Particle System ----------
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229,184,92,${p.opacity})`;
        ctx.fill();
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(229,184,92,${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// ---------- Typing Effect Hook ----------
function useTypingEffect(words: string[], typingSpeed = 60, deletingSpeed = 30, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    setText(currentWord.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// ---------- Magnetic Button ----------
function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <Link
      ref={btnRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}

// ---------- Main Hero Component ----------
export default function PinHeroSection() {
  const [pin, setPin] = useState('');
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [showMessage, setShowMessage] = useState(false);
  const [pinState, setPinState] = useState('');

  const typingText = useTypingEffect([
    'Supreme Court of India',
    'Delhi High Court',
    'NCLT & NCLAT',
    'NCDRC & Consumer Forums',
    'CAT & Service Tribunals',
    '25 State High Courts',
  ]);

  const validatePin = (code: string) => {
    if (!/^[1-9][0-9]{5}$/.test(code)) return false;
    return validPrefixes.has(code.slice(0, 3));
  };

  const handleCheck = () => {
    if (validatePin(pin)) {
      setResult('valid');
      setShowMessage(true);
      setPinState(getPinRegion(pin));
    } else {
      setResult('invalid');
      setShowMessage(true);
      setPinState('');
      setTimeout(() => setShowMessage(false), 2500);
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPin(val);
    if (showMessage) {
      setShowMessage(false);
      setResult('idle');
      setPinState('');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#031a1a] via-[#041f1f] to-[#031a1a] text-white min-h-[70vh] flex items-center py-16 px-4 md:px-12">
      <ParticleCanvas />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative z-10 w-full">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Your Advocate.<br />
            <span className="text-[#E5B85C]">Available at Your Pin Code.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-gray-300 h-8"
          >
            <span className="text-[#E5B85C] font-medium">We appear in: </span>
            <span className="inline-block min-w-[200px] text-left border-r-2 border-[#E5B85C] animate-pulse">
              {typingText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-base text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            Trusted, affordable, and always at your PIN code — anywhere in India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 max-w-md mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full group">
                <MapPin className="absolute left-3 top-3.5 text-gray-300 w-5 h-5 group-hover:text-[#E5B85C] transition-colors" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter your 6-digit PIN code"
                  value={pin}
                  onChange={handlePinChange}
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#E5B85C] focus:ring-2 focus:ring-[#E5B85C]/30 transition-all duration-300"
                />
              </div>
              <button
                onClick={handleCheck}
                className="w-full sm:w-auto px-6 py-3 bg-[#E5B85C] hover:bg-[#d4a843] text-[#041f1f] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Check Availability
              </button>
            </div>

            <AnimatePresence>
              {result === 'valid' && showMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="mt-3"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="bg-emerald-500/90 text-white text-sm px-3 py-2 rounded-lg inline-flex items-center gap-1 whitespace-nowrap shadow-lg">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      Your PIN {pin} is fully covered.
                    </div>
                    <MagneticButton
                      href={`/your-pin-code?pin=${pin}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#E5B85C] hover:bg-[#d4a843] text-[#041f1f] font-semibold rounded-lg shadow-lg whitespace-nowrap flex-shrink-0"
                    >
                      <CalendarPlus className="w-4 h-4 shrink-0" />
                      Book appointment
                    </MagneticButton>
                  </div>
                </motion.div>
              )}
              {result === 'invalid' && showMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0, x: -10 }}
                  animate={{ opacity: 1, height: 'auto', x: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3"
                >
                  <div className="bg-red-500/90 text-white text-sm px-3 py-2 rounded-lg inline-flex items-center gap-2 whitespace-nowrap shadow-lg">
                    <AlertCircle className="w-4 h-4" /> Please enter a valid 6‑digit Indian PIN code.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {result === 'valid' && pinState && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm italic text-gray-300"
              >
                {pinState}, Bharat (India)
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Right visual: Circular pin */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 200 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative w-64 h-64 md:w-80 md:h-80 bg-[#E5B85C]/10 rounded-full flex items-center justify-center"
            >
              <MapPin className="w-16 h-16 text-[#E5B85C]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}