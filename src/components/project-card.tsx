'use client';

import { useState } from 'react';
import { portfolioData } from './portfolio-data';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefineDescriptionDialog } from './refine-description-dialog';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

type Project = (typeof portfolioData.en.projects.items)[0];

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const [description, setDescription] = useState(project.description);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // This is a bit of a trick to get the translated description for the card
  // without rewriting the whole state management.
  const translatedProject = portfolioData[language].projects.items.find(p => p.id === project.id);
  const currentDescription = language === 'en' ? description : (translatedProject?.description || description);

  const refineButtonText = language === 'en' ? 'Refine with AI' : 'Refinar com IA';


  return (
    <>
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle>{translatedProject?.title || project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between">
          <div>
            <div className="relative mb-4 aspect-video w-full">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="rounded-md object-cover"
                    data-ai-hint={project.imageHint}
                />
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{currentDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={() => setIsDialogOpen(true)}>
            <Sparkles className="mr-2 h-4 w-4 text-accent" />
            {refineButtonText}
          </Button>
        </CardFooter>
      </Card>
      <RefineDescriptionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        currentDescription={description}
        onSave={(newDescription) => {
          setDescription(newDescription);
          setIsDialogOpen(false);
        }}
      />
    </>
  );
}
