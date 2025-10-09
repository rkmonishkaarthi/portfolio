"use client";

import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks);

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
    <header className={cn("sticky top-0 z-50 w-full transition-colors duration-300", isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent")}>
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold font-headline">Portfolio</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex md:items-center md:space-x-8 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                className={cn(
                  'font-medium transition-colors hover:text-primary',
                  activeSection === link.hash ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2"
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
                  'text-xl font-medium transition-colors hover:text-primary',
                  activeSection === link.hash ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
