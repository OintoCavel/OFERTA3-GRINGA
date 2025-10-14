import { PlayCircle } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-primary drop-shadow-lg">
          Você ainda não sabe fazer uma mulher gozar de verdade.
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-2xl font-bold text-white drop-shadow-md">
          Descubra o método que já ajudou mais de 35.000 homens a proporcionarem orgasmos múltiplos e a liberarem jatos de prazer nas suas parceiras.
        </p>
        <div className="mt-12 w-full max-w-3xl mx-auto">
          <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-white/70 hover:text-white transition-colors" aria-label="Play Video">
                <PlayCircle className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
