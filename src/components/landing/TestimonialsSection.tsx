"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Carlos M.",
    avatarId: "testimonial-avatar-1",
    text: "Ela nunca tinha gozado assim. Sério, a reação dela foi algo de outro mundo. O curso mudou completamente a nossa intimidade, agora ela me olha diferente.",
  },
  {
    name: "João P.",
    avatarId: "testimonial-avatar-2",
    text: "A cama virou outro nível depois do curso. Antes era bom, agora é insano. Cada noite é uma nova descoberta, parece que a gente tá em lua de mel de novo.",
  },
  {
    name: "Ricardo S.",
    avatarId: "testimonial-avatar-3",
    text: "Ela tremia, molhava tudo e dizia que nunca sentiu aquilo. Ver o prazer dela daquele jeito não tem preço. Eu me sinto muito mais confiante e potente.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black">
                O que eles estão dizendo depois de <span className="text-primary">aplicar o método</span>
            </h2>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gray-100 border-gray-200 h-full flex flex-col shadow-lg">
                        <CardContent className="p-6 flex-grow flex flex-col">
                          <p className="text-gray-700 italic flex-grow">"{testimonial.text}"</p>
                          <div className="mt-6 flex items-center space-x-4">
                            <Avatar>
                              {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-black">{testimonial.name}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="text-black hover:text-primary hover:bg-gray-200" />
            <CarouselNext className="text-black hover:text-primary hover:bg-gray-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
