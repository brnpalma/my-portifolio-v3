import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
