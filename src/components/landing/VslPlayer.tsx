'use client';

import React, { useEffect, useRef } from 'react';

export const VslPlayer: React.FC = () => {
  const videoId = '68f2379a2e660626af40222d';
  const accountId = '363a1829-2843-4b85-bbad-f7f249265a4a';
  const scriptSrc = `https://scripts.converteai.net/${accountId}/players/${videoId}/v4/player.js`;
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the script is already added
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    
    // Assign an ID to the script so we can remove it
    script.id = `vsl-script-${videoId}`;
    
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component is unmounted
      const existingScript = document.getElementById(`vsl-script-${videoId}`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [scriptSrc, videoId]);

  return (
    <div ref={playerRef} id={`vid-${videoId}`} style={{ display: 'block', margin: '0 auto', width: '100%' }}></div>
  );
};
