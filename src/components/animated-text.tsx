"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Front-end Developer",
  "React Developer",
];

export function AnimatedText() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <span className="text-primary">{roles[0]}</span>;
  }

  return (
    <span className="text-primary">
      <Typewriter
        options={{
          strings: roles,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 100,
        }}
      />
    </span>
  );
}
