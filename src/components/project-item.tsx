
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { portfolioData } from './portfolio-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
      <div className="relative w-full flex-shrink-0 md:w-1/2">
        <Carousel className="w-full">
          <CarouselContent>
            {project.imageUrls.map((url, index) => (
              <CarouselItem key={index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg">
                      <Image
                        src={url}
                        alt={`${project.title} - Imagem ${index + 1}`}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Search className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                    <Image
                      src={url}
                      alt={`${project.title} - Imagem ${index + 1}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full rounded-lg object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
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
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
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
