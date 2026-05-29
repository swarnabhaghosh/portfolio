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
      <div className="w-5 h-5 rounded-full bg-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.35)]" />

      <div className="absolute inset-0 w-12 h-12 -translate-x-3.5 -translate-y-3.5 rounded-full border border-cyan-400/20" />
    </div>
  );
}

