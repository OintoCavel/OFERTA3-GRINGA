'use client';
import { Crown, UserCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";
import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const playerId = 'vid-68f2379a2e660626af40222d';
  const scriptSrc = "https://scripts.converteai.net/363a1829-2843-4b85-bbad-f7f249265a4a/players/68f2379a2e660626af40222d/v4/player.js";

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) {
      return;
    }

    // A PROVA DE FALHAS: Se o script já existe, não faz nada. Isso evita a duplicação que trava o player.
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
        // Se o script já existe, mas o player não, recria o div.
        if (!document.getElementById(playerId)) {
            const playerDiv = document.createElement('div');
            playerDiv.id = playerId;
            containerRef.current.appendChild(playerDiv);
        }
        return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    scriptRef.current = script;
    
    document.head.appendChild(script);

    return () => {
      // Limpeza completa para evitar conflitos de navegação
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      
      const vturbElements = document.querySelectorAll('div[class*="vturb"], style[data-vturb]');
      vturbElements.forEach(el => el.remove());

      if (containerRef.current) {
        const playerDiv = containerRef.current.querySelector(`#${playerId}`);
        if (playerDiv) {
            playerDiv.innerHTML = '';
        }
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '800px' }}>
      <div id={playerId}></div>
    </div>
  );
};


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
            <VslPlayer />
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
