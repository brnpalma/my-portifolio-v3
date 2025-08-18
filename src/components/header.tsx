'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Code2 as CodeXml, Menu, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { portfolioData } from './portfolio-data';
import { Button } from './ui/button';
import { BrazilFlagIcon } from './icons/brazil-flag-icon';
import { USFlagIcon } from './icons/us-flag-icon';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from './ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { cn } from '@/lib/utils';


export function Header() {
  const { language, setLanguage } = useLanguage();
  const data = portfolioData[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuTitle = language === 'en' ? 'Menu' : 'Menu';

  const languageOptions = [
    {
      code: 'en' as const,
      label: 'English',
      Icon: ({ className }: { className?: string }) => <USFlagIcon className={cn("h-5 w-5", className)} />,
    },
    {
      code: 'pt-br' as const,
      label: 'Português (Brasil)',
      Icon: ({ className }: { className?: string }) => <BrazilFlagIcon className={cn("h-5 w-5", className)} />,
    },
  ];

  const CurrentLanguageIcon = languageOptions.find(opt => opt.code === language)!.Icon;


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">{data.headerTitle}</span>
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 px-3">
                <CurrentLanguageIcon className="h-6 w-6 rounded-full" />
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languageOptions.map((option) => (
                <DropdownMenuItem
                  key={option.code}
                  onClick={() => setLanguage(option.code)}
                  className="flex cursor-pointer items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <option.Icon />
                    <span>{option.label}</span>
                  </div>
                  {language === option.code && <Check className="h-4 w-4 text-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>{mobileMenuTitle}</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CodeXml className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg font-bold">{data.headerTitle}</span>
                </Link>
                {data.navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
