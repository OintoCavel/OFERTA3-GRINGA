'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Se o script já foi adicionado, não faz nada.
    if (scriptRef.current) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const fallback = container.querySelector<HTMLParagraphElement>('#vturb-fallback');

    // Cria o script
    const s = document.createElement('script');
    s.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js";
    s.async = true; // Use async em vez de defer para carregamento mais moderno
    scriptRef.current = s;

    // Função para mostrar o fallback
    const showFallback = () => {
      if (fallback) {
        fallback.style.display = 'block';
      }
    };
    
    s.onerror = showFallback;

    // Adiciona o script ao head
    document.head.appendChild(s);

    // Define um timeout para verificar se o vídeo carregou
    const fallbackTimeout = setTimeout(() => {
      if (container && !container.querySelector('iframe')) {
        showFallback();
      }
    }, 8000);

    // Função de limpeza que será executada quando o componente for desmontado
    return () => {
      clearTimeout(fallbackTimeout);
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      // O Vturb pode deixar elementos no body, vamos limpá-los
      const vturbElements = document.querySelectorAll('div[class*="vturb"], style[data-vturb]');
      vturbElements.forEach(el => el.remove());
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez

  return (
    <div ref={containerRef} id="vturb-container" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}>
      <div id="vid-68eefe6d94f152eea80d3088"></div>
      <p id="vturb-fallback" style={{ textAlign: 'center', display: 'none', color: 'white' }}>
        Seu vídeo está demorando a carregar. <a href="https://vturb.com/vid/68eefe6d94f152eea80d3088" target="_blank" style={{ color: '#00bfff' }}>Clique aqui para assistir</a>.
      </p>
    </div>
  );
};

export default VslPlayer;
