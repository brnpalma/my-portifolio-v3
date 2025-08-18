'use client';

import { portfolioData } from './portfolio-data';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { useLanguage } from '@/contexts/language-context';

export function ExperienceSection() {
  const { language } = useLanguage();
  const { title, subtitle, jobs } = portfolioData[language].experience;

  return (
    <section id="experience" className="w-full bg-secondary py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </div>
          <div className="relative w-full max-w-3xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
            {jobs.map((job, index) => (
              <div
                key={job.company}
                className={`relative mb-8 flex w-full items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription>
                        {job.company} | {job.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-primary p-2 text-primary-foreground">
                  <job.icon className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
