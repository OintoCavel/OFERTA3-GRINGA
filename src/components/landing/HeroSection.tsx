import Image from "next/image";
import { Crown, PlayCircle, UserCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
    const devicesImage = PlaceHolderImages.find(p => p.id === "devices-mockup");
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-destructive drop-shadow-lg">
          Você ainda não sabe fazer uma mulher gozar de verdade.
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-2xl font-bold text-white drop-shadow-md">
          Descubra o método que já ajudou mais de 35.000 homens a proporcionarem orgasmos múltiplos e a liberarem jatos de prazer nas suas parceiras.
        </p>
        <div className="mt-12 w-full max-w-3xl mx-auto">
          <Image
            src="https://i.ibb.co/LhsBDvS9/Design-sem-nome-15.png"
            alt="Product mockup"
            width={800}
            height={450}
            className="rounded-lg shadow-2xl shadow-primary/20 object-cover"
            data-ai-hint="course mockup"
          />
        </div>
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
            <Crown className="h-6 w-6" />
            <span>ACESSO VITALÍCIO</span>
          </div>
          <p className="mt-2 text-white font-semibold text-lg flex items-center justify-center gap-2">
            <UserCheck className="h-6 w-6 text-primary" />
            <span>+35 mil homens já transformaram a sua vida sexual</span>
          </p>
        </div>
        <div className="mt-12">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
