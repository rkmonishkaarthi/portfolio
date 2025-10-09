"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const defaultRoles = [
  "Full Stack Developer 💻",
  "Cloud Computing Enthusiast ☁️",
  "DevOps Practitioner 🚀",
  "Network and Security Explorer 🔐",
];

type AnimatedTextProps = {
  roles?: string[];
};

export function AnimatedText({ roles = defaultRoles }: AnimatedTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <span className="purple-text-gradient">{roles[0]}</span>;
  }

  return (
    <span className="purple-text-gradient">
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
