"use client";

import { useState, useEffect } from 'react';
import type { NavLink } from '@/lib/types';

export function useActiveSection(navLinks: NavLink[], threshold = 0.5) {
  const [activeSection, setActiveSection] = useState<string>(navLinks[0]?.hash || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold }
    );

    const sections = navLinks.map(({ hash }) => document.querySelector(hash));
    
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
  }, [navLinks, threshold]);

  return activeSection;
}
