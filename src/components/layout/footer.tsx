import { socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Soumyajit Behera. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
