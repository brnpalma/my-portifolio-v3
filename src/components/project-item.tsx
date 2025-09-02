'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { portfolioData } from './portfolio-data';

type Project = (typeof portfolioData.en.projects.items)[0];

export function ProjectItem({ project }: { project: Project }) {
  const { language } = useLanguage();
  const [description, setDescription] = useState(project.description);

  const translatedProject = portfolioData[language].projects.items.find(p => p.id === project.id);
  const currentDescription = language === 'en' ? description : (translatedProject?.description || description);

  const viewProjectText = language === 'en' ? 'View Project' : 'Ver Projeto';
  const repositoryText = language === 'en' ? 'Repository' : 'Repositório';

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="relative h-60 w-full flex-shrink-0 md:w-1/2">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="rounded-lg object-cover"
          data-ai-hint={project.imageHint}
        />
      </div>
      <div className="flex flex-col justify-center text-left md:w-1/2">
        <h3 className="font-headline text-2xl font-bold">{translatedProject?.title || project.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-muted-foreground">{currentDescription}</p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" asChild className="hover:bg-foreground hover:text-background">
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
              {viewProjectText} <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> {repositoryText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
