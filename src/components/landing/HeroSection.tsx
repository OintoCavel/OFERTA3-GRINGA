'use client';
import { Crown, UserCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";
import React from 'react';
import { VslPlayer } from "./VslPlayer";

export function HeroSection() {

  const handleScrollToOffer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black py-20 lg:py-32">
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-destructive drop-shadow-lg">
          Você ainda não sabe fazer uma mulher gozar de verdade.
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-md">
          Descubra o método que já ajudou mais de 35.000 homens a proporcionarem orgasmos múltiplos e a liberarem jatos de prazer nas suas parceiras.
        </p>
        
        <div className="mt-8 w-full">
          <VslPlayer />
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-base lg:text-lg">
            <Crown className="h-5 w-5 lg:h-6 lg:w-6" />
            <span>ACESSO VITALÍCIO</span>
          </div>
          <p className="mt-2 text-white font-semibold text-base lg:text-lg flex items-center justify-center gap-2">
            <UserCheck className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
            <span>+35 mil homens já transformaram a sua vida sexual</span>
          </p>
        </div>
        <div className="mt-12">
          <CtaButton onClick={handleScrollToOffer} className="text-sm md:text-base py-4 px-6 lg:py-6 lg:px-8" />
        </div>
      </div>
    </section>
  );
}
