'use client';
import React, { useEffect, useRef } from 'react';

const VSL_PLAYER_ID = 'vid-68f2379a2e660626af40222d';
const VSL_SCRIPT_SRC = 'https://scripts.converteai.net/363a1829-2843-4b85-bbad-f7f249265a4a/players/68f2379a2e660626af40222d/v4/player.js';

export function VslPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Se o container não estiver pronto, não faz nada
    if (!containerRef.current) {
      return;
    }

    // Se o script já foi adicionado, não adiciona de novo
    if (document.querySelector(`script[src="${VSL_SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = VSL_SCRIPT_SRC;
    script.async = true;
    
    scriptRef.current = script;
    
    document.body.appendChild(script);

    // Função de limpeza
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      // Limpeza de qualquer outro resíduo que o script Vturb possa deixar
      const vturbElements = document.querySelectorAll('[id^="vpl-"], [id^="vturb-"]');
      vturbElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div ref={containerRef} id={VSL_PLAYER_ID} style={{ display: 'block', margin: '0 auto', width: '100%' }}></div>
  );
}
