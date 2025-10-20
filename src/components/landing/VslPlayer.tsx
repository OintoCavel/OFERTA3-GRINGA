'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Se o container não existe, não faz nada.
    if (!containerRef.current) {
      return;
    }
    
    // Se o script já foi adicionado por este componente, não faz nada para evitar duplicação.
    if (scriptRef.current) {
      return;
    }

    const container = containerRef.current;
    
    // Cria o script do player
    const s = document.createElement('script');
    s.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68ef97f9413b036059a1ff6d/v4/player.js";
    s.async = true;
    scriptRef.current = s;

    // Adiciona o script ao head
    document.head.appendChild(s);

    // Função de limpeza robusta que será executada quando o componente for desmontado
    return () => {
      // Remove o script do head
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null; // Limpa a referência
      }
      
      // O Vturb pode deixar elementos no body, vamos limpá-los para evitar conflitos
      const vturbElements = document.querySelectorAll('div[class*="vturb"], style[data-vturb]');
      vturbElements.forEach(el => el.remove());

      // Garante que a div do player esteja vazia para a próxima montagem
      if (container) {
        const playerDiv = container.querySelector('#vid-68ef97f9413b036059a1ff6d');
        if (playerDiv) {
            playerDiv.innerHTML = '';
        }
      }
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez

  return (
    <div ref={containerRef} style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}>
      {/* O elemento do player precisa estar aqui para o script encontrá-lo */}
      <div id="vid-68ef97f9413b036059a1ff6d"></div>
    </div>
  );
};

export default VslPlayer;
