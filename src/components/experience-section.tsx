
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
            <div className="relative w-full max-w-5xl p-6 pt-8">
              <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
              {jobs.map((job, index) => (
                <div
                  key={job.company}
                  className={`relative mb-8 flex w-full items-center ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <div className="absolute left-4 z-10 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-primary to-accent p-2 text-primary-foreground md:left-1/2">
                    <job.icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`w-full pl-12 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'
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
