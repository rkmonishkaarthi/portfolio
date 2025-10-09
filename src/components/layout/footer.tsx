import { socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full py-8 bg-secondary text-secondary-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Soumyajit Behera. All rights reserved.
        </p>
        <p className="text-sm">
          Built with Next.js and ❤️
        </p>
      </div>
    </footer>
  );
}
