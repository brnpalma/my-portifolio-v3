
'use client';

import { useLanguage } from '@/contexts/language-context';
import { portfolioData } from './portfolio-data';
import { Button } from './ui/button';
import Link from 'next/link';

export function ContactSection() {
  const { language } = useLanguage();
  const contactData = portfolioData[language].contact;
  const socials = portfolioData.socials;

  const contactItems = [
    {
      Icon: contactData.phone.icon,
      value: contactData.phone.value,
      href: `tel:${contactData.phone.value.replace(/\s/g, '')}`,
    },
    {
      Icon: contactData.email.icon,
      value: contactData.email.value,
      href: `mailto:${contactData.email.value}`,
    },
    {
      Icon: contactData.location.icon,
      value: contactData.location.value,
    },
  ];

  return (
    <section id="contact" className="w-full py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-card p-8 shadow-lg md:p-12">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{contactData.title}</h2>
              <p className="mt-2 text-muted-foreground">{contactData.subtitle}</p>
            </div>
            
            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
              <div className="flex flex-col gap-6">
                {contactItems.map(({ Icon, value, href }, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    {href ? (
                      <a href={href} className="text-muted-foreground hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 md:self-end">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
