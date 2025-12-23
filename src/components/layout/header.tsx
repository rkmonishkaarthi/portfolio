"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../theme-toggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map(l => l.hash));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-shadow duration-300", isScrolled ? "shadow-md bg-background/80 backdrop-blur-sm" : "shadow-none")}>
      <div className="container flex h-20 items-center justify-end">
        {/*
          🛑 FIX 1: Wrap the changing content in a motion.div and apply layoutRoot.
          This resolves the incorrect position calculation for the layoutId 
          when the header is sticky and the page is scrolled.
        */}
        <motion.div className="flex items-center gap-4" layoutRoot>
          <nav className="hidden md:flex items-center space-x-6 text-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                // FIX 2 (Optional, but clean): Add 'group' for easier Tailwind styling
                className={cn(
                  'relative flex items-center gap-2 font-medium transition-colors hover:text-primary group', 
                  activeSection === link.hash ? 'text-primary' : 'text-foreground/60'
                )}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
                {activeSection === link.hash && (
                  <motion.div
                    layoutId="active-nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </motion.div>
      </div>
    </header>
  );
}