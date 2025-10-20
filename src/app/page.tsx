import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { PromiseSection } from '@/components/landing/PromiseSection';
import { CourseSection } from '@/components/landing/CourseSection';
import { ExpertSection } from '@/components/landing/ExpertSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <PromiseSection />
        <CourseSection />
        <ExpertSection />
        <TestimonialsSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
