"use client";

import { useState, useEffect } from 'react';

export function useActiveSection(hashes: string[], threshold = 0.3) {
  const [activeSection, setActiveSection] = useState<string>(hashes[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold }
    );

    const sections = hashes.map((hash) => document.querySelector(hash));
    
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [hashes, threshold]);

  return activeSection;
}
