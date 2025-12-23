"use client";

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(hashes: string[], threshold = 0.5) {
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
        // This threshold means the callback will trigger when 50% of the section is visible
        threshold: threshold,
        // The rootMargin is adjusted to define the "active" area as the middle of the viewport
        rootMargin: '-40% 0px -40% 0px'
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
