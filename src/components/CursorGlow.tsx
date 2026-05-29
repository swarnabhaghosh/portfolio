'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-3 h-3 rounded-full bg-cyan-400/15" />

  <div className="absolute inset-0 w-8 h-8 -translate-x-2.5 -translate-y-2.5 rounded-full border border-cyan-400/10" />
    </div>
  );
}

