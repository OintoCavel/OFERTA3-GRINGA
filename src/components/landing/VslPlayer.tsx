'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window === 'undefined' || !containerRef.current) {
      return;
    }

    // Check if the script is already on the page to avoid duplicates
    const scriptId = 'vturb-player-script';
    if (document.getElementById(scriptId)) {
        return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js";
    script.async = true;
    
    document.head.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component unmounts
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      
      // Also remove player elements that might be left behind
      const playerElements = document.querySelectorAll('div[class*="vturb-"], style[data-vturb]');
      playerElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div id="vid-68eefe6d94f152eea80d3088" style={{ display: 'block', margin: '0 auto', width: '100%' }}></div>
    </div>
  );
};

export default VslPlayer;
