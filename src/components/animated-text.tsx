"use client";

import Typewriter from 'react-typewriter-effect';

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Front-end Developer",
  "React Developer",
];

export function AnimatedText() {
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
