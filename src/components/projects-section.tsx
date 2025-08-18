import { portfolioData } from './portfolio-data';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
            <p className="mt-2 text-muted-foreground">A selection of my work.</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
