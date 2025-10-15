'use client';
import { useEffect } from 'react';
import { Crown, UserCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function HeroSection() {
    useEffect(() => {
        if (document.querySelector('script[src*="v4/player.js"]')) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            const scriptTag = document.querySelector(`script[src='${script.src}']`);
            if (scriptTag) {
                document.head.removeChild(scriptTag);
            }
        }
    }, []);

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
          <div id="vid-68eefe6d94f152eea80d3088" style={{display: 'block', margin: '0 auto', width: '100%'}}></div>
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
