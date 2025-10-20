'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Se o script já foi adicionado por este componente, não faz nada.
    if (scriptRef.current) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const fallback = container.querySelector<HTMLParagraphElement>('#vturb-fallback');

    // Cria o script
    const s = document.createElement('script');
    s.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68ef97f9413b036059a1ff6d/v4/player.js";
    s.async = true; // Usar async para carregamento não bloqueante
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
      // Se depois de 8 segundos o iframe do player não existir, mostra o fallback.
      if (container && !container.querySelector('iframe')) {
        showFallback();
      }
    }, 8000);

    // Função de limpeza robusta que será executada quando o componente for desmontado
    return () => {
      clearTimeout(fallbackTimeout);
      // Remove o script do head
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null; // Limpa a referência
      }
      // O Vturb pode deixar elementos no body, vamos limpá-los para evitar conflitos
      const vturbElements = document.querySelectorAll('div[class*="vturb"], style[data-vturb]');
      vturbElements.forEach(el => el.remove());

      // Garante que o div do player esteja vazio para a próxima montagem
      if (container) {
        const playerDiv = container.querySelector('#vid-68ef97f9413b036059a1ff6d');
        if (playerDiv) {
            playerDiv.innerHTML = '';
        }
      }
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez (na montagem do componente)

  return (
    <div ref={containerRef} id="vturb-wrapper" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}>
      {/* O elemento do player precisa estar aqui para o script encontrá-lo */}
      <div id="vid-68ef97f9413b036059a1ff6d"></div>
      
      {/* Fallback caso o vídeo não carregue */}
      <p id="vturb-fallback" style={{ textAlign: 'center', display: 'none', color: 'white', marginTop: '1rem' }}>
        Seu vídeo está demorando a carregar. <a href="https://vturb.com/vid/68ef97f9413b036059a1ff6d" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', textDecoration: 'underline' }}>Clique aqui para assistir</a>.
      </p>
    </div>
  );
};

export default VslPlayer;
