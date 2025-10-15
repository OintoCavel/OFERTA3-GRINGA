'use client';

import { useEffect } from 'react';

export function VslPlayer() {
  useEffect(() => {
    const scriptId = 'vsl-script-68eefe6d94f152eea80d3088';
    const playerId = 'vid-68eefe6d94f152eea80d3088';

    // Evita adicionar o script se ele já existir
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Função de limpeza robusta
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }

      // Remove elementos do player que a Vturb pode ter criado
      const playerElements = document.querySelectorAll(`[data-player-id*="${playerId}"], [id^="vturb-"]`);
      playerElements.forEach(el => el.remove());
      
      // Limpa variáveis globais se soubermos os nomes (exemplo)
      // if (window.Vturb) {
      //   delete window.Vturb;
      // }
    };
  }, []);

  return <div id="vid-68eefe6d94f152eea80d3088" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></div>;
}
