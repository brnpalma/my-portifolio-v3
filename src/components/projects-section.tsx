'use client';

import { portfolioData } from './portfolio-data';
import { ProjectCard } from './project-card';
import { useLanguage } from '@/contexts/language-context';

export function ProjectsSection() {
  const { language } = useLanguage();
  const { title, subtitle, items } = portfolioData[language].projects;
  
  return (
    <section id="projects" className="w-full py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-card p-8 text-center shadow-lg md:p-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
