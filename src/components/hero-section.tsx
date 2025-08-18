'use client';

import Link from 'next/link';
import { portfolioData } from './portfolio-data';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export function HeroSection() {
  const { language } = useLanguage();
  const data = portfolioData[language];
  const socials = portfolioData.socials;

  
  return (
    <section id="about" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/avatar.png"
              alt={data.name}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {data.name}
          </h1>
          <p className="max-w-[700px] bg-gradient-to-r from-primary to-accent bg-clip-text text-lg text-transparent md:text-xl">
            {data.title}
          </p>
          <p className="max-w-[700px] text-muted-foreground">
            {data.bio}
          </p>
          <div className="flex items-center gap-4 pt-4">
            {socials.map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
