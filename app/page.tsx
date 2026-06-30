import PinHeroSection from '@/components/PinHeroSection';
import TrustStrip from '@/components/TrustStrip';
import StatsCounter from '@/components/StatsCounter';
import HowItWorks from '@/components/HowItWorks';
import PracticeSnapshot from '@/components/PracticeSnapshot';
import WhyPinLawyer from '@/components/WhyPinLawyer';

export default function Home() {
  return (
    <>
      <PinHeroSection />
      <TrustStrip />
      <StatsCounter />
      <HowItWorks />
      <PracticeSnapshot />
      <WhyPinLawyer />
    </>
  );
}