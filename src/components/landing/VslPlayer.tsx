'use client';

import React, { useEffect, useRef } from 'react';

const VslPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/363a1829-2843-4b85-bbad-f7f249265a4a/players/68f2379a2e660626af40222d/v4/player.js';
      script.async = true;
      script.id = 'vsl-script-68f2379a';
      scriptRef.current = script;
      
      document.body.appendChild(script);
    }

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      if(containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} id="vid-68f2379a2e660626af40222d" style={{ display: 'block', margin: '0 auto', width: '100%' }}></div>;
};

export default VslPlayer;
