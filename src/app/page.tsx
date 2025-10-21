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
import VslPlayer from '@/components/landing/VslPlayer';

export default function Home() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-12 md:py-20 bg-background">
          <VslPlayer />
        </section>
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
