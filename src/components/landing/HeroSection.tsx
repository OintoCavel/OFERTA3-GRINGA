'use client';
import { Crown, UserCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";
import React from 'react';

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black py-20">
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-destructive drop-shadow-lg">
          Você ainda não sabe fazer uma mulher gozar de verdade.
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-2xl font-bold text-white drop-shadow-md">
          Descubra o método que já ajudou mais de 35.000 homens a proporcionarem orgasmos múltiplos e a liberarem jatos de prazer nas suas parceiras.
        </p>
        
        <div className="mt-8 w-full">
            <div id="ifr_68f80698633a52b4eafb6563_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
                <div style={{ position: 'relative', padding: '133.33333333333331% 0 0 0' }} id="ifr_68f80698633a52b4eafb6563_aspect">
                    <iframe
                        frameBorder="0"
                        allowFullScreen
                        src="https://scripts.converteai.net/ab169254-b0b1-49bf-8ab1-a16b0e65ed91/players/68f80698633a52b4eafb6563/v4/embed.html"
                        id="ifr_68f80698633a52b4eafb6563"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        referrerPolicy="origin"
                    ></iframe>
                </div>
            </div>
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
