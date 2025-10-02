
'use client';

import { portfolioData } from './portfolio-data';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { useLanguage } from '@/contexts/language-context';

export function ExperienceSection() {
  const { language } = useLanguage();
  const { title, subtitle, jobs } = portfolioData[language].experience;

  return (
    <section id="experience" className="w-full py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-card p-6 text-center shadow-lg md:p-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            </div>
            <div className="relative w-full max-w-5xl md:p-6 pt-8">
              <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 transform bg-border md:block"></div>
              {jobs.map((job, index) => (
                <div
                  key={job.company}
                  className={`relative mb-8 flex w-full items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-1/2 top-4 z-10 hidden -translate-x-1/2 transform rounded-full bg-gradient-to-r from-primary to-accent p-2 text-primary-foreground md:flex">
                    <job.icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                    }`}
                  >
                    <Card className="text-left shadow-md">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
