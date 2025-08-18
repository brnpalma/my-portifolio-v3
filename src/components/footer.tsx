import Link from 'next/link';
import { portfolioData } from './portfolio-data';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <div className="flex items-center gap-2">
            {portfolioData.socials.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
        </div>
      </div>
    </footer>
  );
}
