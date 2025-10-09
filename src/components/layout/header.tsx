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
        <div className="flex items-center gap-4">
          <nav className="flex items-center space-x-8 text-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                className={cn(
                  'relative font-medium transition-colors hover:text-primary',
                  activeSection === link.hash ? 'text-primary' : 'text-foreground/80'
                )}
              >
                <span>{link.name}</span>
                {activeSection === link.hash && (
                  <motion.div
                    layoutId="active-nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
