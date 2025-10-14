import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const benefits = [
  "Assista em qualquer lugar: celular, tablet ou computador.",
  "Conteúdo direto ao ponto, sem enrolação.",
  "Acesso vitalício para ver e rever quando quiser.",
  "Disponível 24 horas por dia, 7 dias por semana.",
];

export function PromiseSection() {
  const devicesImage = PlaceHolderImages.find(p => p.id === "devices-mockup");

  return (
    <section className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
              Aprenda no seu <span className="text-primary">ritmo</span>, de onde <span className="text-primary">estiver</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nosso curso foi desenhado para se adaptar à sua rotina. Estude de forma discreta e conveniente, com acesso imediato a todas as aulas.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg font-semibold text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {devicesImage && (
                <Image
                  src={devicesImage.imageUrl}
                  alt={devicesImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl shadow-primary/20 object-cover"
                  data-ai-hint={devicesImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
