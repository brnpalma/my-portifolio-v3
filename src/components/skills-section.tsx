'use client';

import { portfolioData } from './portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '@/contexts/language-context';

export function SkillsSection() {
  const { language } = useLanguage();
  const { title, subtitle, categories } = portfolioData[language].skills;

  return (
    <section id="skills" className="w-full py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-card p-8 text-center shadow-lg md:p-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
              {Object.entries(categories).map(([category, skills]) => (
                <Card key={category} className="shadow-md">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
