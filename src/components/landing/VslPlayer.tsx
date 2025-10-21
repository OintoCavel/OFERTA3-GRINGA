'use client';

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

export default VslPlayer;
