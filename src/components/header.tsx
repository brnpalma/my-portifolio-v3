'use client';

import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { portfolioData } from './portfolio-data';
import { Button } from './ui/button';
import { BrazilFlagIcon } from './icons/brazil-flag-icon';
import { USFlagIcon } from './icons/us-flag-icon';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const data = portfolioData[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">PortfolioPilot</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {data.navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant={language === 'en' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setLanguage('en')}
              className="h-8 w-11 rounded-md"
              aria-label="Switch to English"
            >
              <USFlagIcon className="h-6 w-9" />
            </Button>
            <Button
              variant={language === 'pt-br' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setLanguage('pt-br')}
              className="h-8 w-11 rounded-md"
              aria-label="Mudar para Português"
            >
              <BrazilFlagIcon className="h-6 w-9" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
