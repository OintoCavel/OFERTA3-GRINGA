'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptId = 'vturb-player-script-68eefe6d94f152eea80d3088';
  const playerId = 'vid-68eefe6d94f152eea80d3088';

  useEffect(() => {
    // Garante que o código só roda no navegador
    if (typeof window === 'undefined') {
      return;
    }

    // Se o script já existe, não faz nada para evitar duplicação.
    if (document.getElementById(scriptId)) {
      return;
    }
    
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js";
    script.async = true;
    
    document.head.appendChild(script);

    // Função de limpeza: remove o script quando o componente é desmontado.
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      // Remove outros elementos que o Vturb pode ter criado
      const vturbElements = document.querySelectorAll('style[data-vturb], div[id^="vturb-"]');
      vturbElements.forEach(el => el.remove());
    };
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez.

  return (
    <div ref={containerRef} style={{ maxWidth: '800px', margin: '0 auto' }}>
      <vturb-smartplayer id={playerId} style={{ display: 'block', width: '100%' }}></vturb-smartplayer>
    </div>
  );
};

export { VslPlayer };
