"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(hashes: string[], threshold = 0.2) {
  const [activeSection, setActiveSection] = useState<string>(hashes[0] || '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect any previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create a new observer with the correct options
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    const observer = observerRef.current;
    
    // Observe all sections that have a corresponding hash
    hashes.forEach((hash) => {
      const element = document.querySelector(hash);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hashes, threshold]); // Rerun effect if hashes or threshold change

  return activeSection;
}
