"use client";

import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useActiveSection } from '@/hooks/use-active-section';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navLinks);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">PortfolioFlow</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                className={cn(
                  'transition-colors hover:text-primary',
                  activeSection === link.hash ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg transition-colors hover:text-primary',
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
