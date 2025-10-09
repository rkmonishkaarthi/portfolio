"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function AnimatedGradientBackground() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 -z-10 h-screen w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent" />
      <div
        className={`absolute inset-0 -z-20 h-full w-full transition-opacity duration-1000 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="light-gradient-bg" />
      </div>
      <div
        className={`absolute inset-0 -z-20 h-full w-full transition-opacity duration-1000 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="dark-gradient-bg" />
      </div>
    </div>
  );
}
