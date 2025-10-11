"use client";

import { useState, useEffect } from 'react';

export function useActiveSection(hashes: string[], threshold = 0.5) {
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
      // This creates a "tripwire" in the vertical center of the viewport.
      // A section becomes active when its center crosses the viewport's center.
      { rootMargin: '-50% 0px -50% 0px', threshold }
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
