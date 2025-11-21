"use client";
import React, { useEffect } from 'react';

export function VslPlayer() {
  useEffect(() => {
    const scriptSrc = "https://scripts.converteai.net/ab169254-b0b1-49bf-8ab1-a16b0e65ed91/players/691fc47b813dc92a81d50346/v4/player.js";
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    React.createElement('vturb-smartplayer', {
      id: 'vid-691fc47b813dc92a81d50346',
      style: { display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }
    })
  );
}
