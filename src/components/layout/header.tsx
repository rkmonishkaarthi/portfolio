"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../theme-toggle';
import { Code2 } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map(l => l.hash));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
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
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-primary" />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex md:items-center md:space-x-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                className={cn(
                  'relative flex items-center gap-2 font-medium transition-colors hover:text-primary',
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
          
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur">
          <nav className="flex flex-col items-center space-y-6 py-6 border-t border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-xl flex items-center gap-2 font-medium transition-colors hover:text-primary',
                  activeSection === link.hash ? 'text-primary' : ''
                )}
              >
                 <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
