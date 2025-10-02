
'use client';

import { portfolioData } from './portfolio-data';
import { useLanguage } from '@/contexts/language-context';
import { Badge } from '@/components/badge';

export function SkillsSection() {
  const { language } = useLanguage();
  const { title, subtitle, items } = portfolioData[language].skills;

  return (
    <section id="skills" className="w-full py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-card p-6 text-center shadow-lg md:p-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex w-full max-w-5xl flex-wrap justify-center gap-4">
              {items.map(({ name }) => (
                <Badge key={name} variant="gradient" className="px-4 py-2 text-base">
                  {name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
