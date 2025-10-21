'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this runs only in the browser and the container is ready
    if (typeof window === 'undefined' || !containerRef.current) {
      return;
    }
    
    // Use a unique ID to find the script and prevent duplicates
    const scriptId = 'vturb-player-script';
    if (document.getElementById(scriptId)) {
        return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/c1c20a84-235e-4f45-9214-9016757e36c5/players/68eefe6d94f152eea80d3088/v4/player.js";
    script.async = true;
    
    // Important: Append script to the container's parent or head. Head is better.
    document.head.appendChild(script);

    // This is the crucial cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      
      // Vturb might leave other elements behind, try a generic cleanup
      const vturbElements = document.querySelectorAll('div[id^="vid-"], style[id*="vturb"]');
      vturbElements.forEach(el => el.remove());

      // Clean the container itself to be safe
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        const vturbSmartPlayer = document.createElement('vturb-smartplayer');
        vturbSmartPlayer.id = 'vid-68eefe6d94f152eea80d3088';
        vturbSmartPlayer.style.display = 'block';
        vturbSmartPlayer.style.margin = '0 auto';
        vturbSmartPlayer.style.width = '100%';
        containerRef.current.appendChild(vturbSmartPlayer);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  return (
    <div ref={containerRef}>
        <vturb-smartplayer id="vid-68eefe6d94f152eea80d3088" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
    </div>
  );
};

export default VslPlayer;
