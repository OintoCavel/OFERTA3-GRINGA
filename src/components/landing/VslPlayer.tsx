'use client';

import React, { useEffect, useRef } from 'react';

export const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptId = 'vturb-player-script';
  const playerId = 'vid-68eefe6d94f152eea80d3088';

  useEffect(() => {
    if (!containerRef.current || document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const playerElement = document.getElementById(playerId);
      if (playerElement) {
        // Vturb might leave styles or other elements behind
        const vturbElements = document.querySelectorAll('style[data-vturb], div[id^="vturb-"]');
        vturbElements.forEach(el => el.remove());
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <vturb-smartplayer id={playerId} style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
    </div>
  );
};