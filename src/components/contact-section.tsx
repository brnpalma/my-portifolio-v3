
'use client';

import { useLanguage } from '@/contexts/language-context';
import { portfolioData } from './portfolio-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

export function ContactSection() {
  const { language } = useLanguage();
  const contactData = portfolioData[language].contact;
  const socials = portfolioData.socials;

  return (
    <section id="contact" className="w-full py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-card p-8 text-center shadow-lg md:p-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{contactData.title}</h2>
              <p className="mt-2 text-muted-foreground">{contactData.subtitle}</p>
            </div>
            <Card className="w-full max-w-md border-border p-6 shadow-md">
              <CardContent className="flex flex-col items-center space-y-4 pt-6">
                <div className="text-center">
                  <p className="font-semibold">{contactData.email.label}</p>
                  <a href={`mailto:${contactData.email.value}`} className="text-muted-foreground hover:text-primary">
                    {contactData.email.value}
                  </a>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{contactData.phone.label}</p>
                  <p className="text-muted-foreground">{contactData.phone.value}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{contactData.location.label}</p>
                  <p className="text-muted-foreground">{contactData.location.value}</p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  {socials.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      asChild
                      className="hover:bg-foreground hover:text-background"
                    >
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
