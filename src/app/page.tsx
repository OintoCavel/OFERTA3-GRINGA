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
import { StickyCta } from '@/components/landing/StickyCta';
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
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Image
                src="https://www.guiaviagensbrasil.com/imagens/praia-costa-itacare-ba-9599.jpg"
                alt="Imagem de uma praia"
                width={1024}
                height={576}
                className="rounded-lg shadow-2xl shadow-primary/20 object-cover"
                data-ai-hint="beach landscape"
              />
            </div>
          </div>
        </section>
        <CourseSection />
        <ExpertSection />
        <TestimonialsSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
