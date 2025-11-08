"use client";
import React, { useEffect } from 'react';

export function VslPlayer() {
  useEffect(() => {
    const scriptSrc = "https://scripts.converteai.net/76aaf581-62f1-483b-bda7-1fd96884a050/players/690e9184a530b0ae7a43d57e/v4/player.js";
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
      id: 'vid-690e9184a530b0ae7a43d57e',
      style: { display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }
    })
  );
}
