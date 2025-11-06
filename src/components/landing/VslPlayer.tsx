"use client";
import React, { useEffect } from 'react';

export function VslPlayer() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://scripts.converteai.net/4bc12e78-b63c-4a40-af44-410d31d40924/players/690baea26813865f1566162f/v4/player.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/4bc12e78-b63c-4a40-af44-410d31d40924/players/690baea26813865f1566162f/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    React.createElement('vturb-smartplayer', {
      id: 'vid-690baea26813865f1566162f',
      style: { display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }
    })
  );
}
