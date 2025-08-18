import Link from 'next/link';
import { portfolioData } from './portfolio-data';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {portfolioData.name}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {portfolioData.title}
          </p>
          <p className="max-w-[700px] text-muted-foreground">
            {portfolioData.bio}
          </p>
          <div className="flex items-center gap-4 pt-4">
            {portfolioData.socials.map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
