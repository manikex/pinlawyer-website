import PinHeroSection from '@/components/PinHeroSection';
import TrustStrip from '@/components/TrustStrip';
import HowItWorks from '@/components/HowItWorks';
import PracticeSnapshot from '@/components/PracticeSnapshot';
import WhyPinLawyer from '@/components/WhyPinLawyer';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <PinHeroSection />
      <TrustStrip />
      <HowItWorks />
      <PracticeSnapshot />
      <WhyPinLawyer />
      <Testimonials />
    </>
  );
}