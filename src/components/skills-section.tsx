
'use client';

import { portfolioData } from './portfolio-data';
import { useLanguage } from '@/contexts/language-context';

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
            <div className="grid w-full max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
              {items.map(({ name, icon: Icon }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="h-16 w-16" />
                  <p className="text-sm font-medium text-muted-foreground">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
