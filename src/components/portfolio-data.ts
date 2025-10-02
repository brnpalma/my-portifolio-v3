
import { Github, Linkedin, Briefcase, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './icons/whatsapp-icon';

export const portfolioData = {
  en: {
    name: 'Bruno Palma',
    title: 'Fullstack Developer',
    headerTitle: 'Portfolio',
    bio: "Full Stack Developer passionate about transforming ideas into innovative, high-performance, and efficient digital solutions. Solid experience across the entire software development lifecycle, from requirements analysis to implementation and support. Mastery of C#, Asp.Net, Javascript, HTML, CSS, SQL, Python, Dart, among others, combined with proficiency in Azure tools and platforms (Service Bus, Blob Storage, Functions, Devops) and Docker. A proactive, punctual, committed, and flexible professional with strong teamwork skills and excellent command of programming logic. Always up-to-date with the latest trends in AI and emerging technologies that add value and deliver better results.",
    contactButton: 'Contact',
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#contact', label: 'Contact' },
    ],
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional journey so far.',
      jobs: [
        {
          role: '.NET Full Stack Developer',
          company: 'NOVA VIDA TI (Contractor)',
          period: 'Jun 2021 - Present',
          description: 'BigData company with proprietary solutions for data acquisition, scraping, SMS communication, and information enrichment. Technologies used: C#, ASP.NET, Javascript, HTML, CSS, Service Bus, Blob Storage, Azure Function, Azure Devops, Azure Cloud AZ900, Docker, Redis, SQL Server, MongoDB, MySQL, among others.',
          icon: Briefcase,
        },
        {
          role: '.NET Full Stack Developer',
          company: 'DVJNET SISTEMAS (Intern and Full-time)',
          period: 'Jan 2020 - Jun 2021',
          description: 'Development of proprietary software for the Pet Shop industry, covering financial management, sales, POS, fiscal invoices, inventory, and general commerce. Technologies used: C#, Windows Forms, ASP.NET, Javascript, HTML, CSS, SQL Server, among others.',
          icon: Briefcase,
        },
      ],
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of my work.',
      items: [
        {
          id: 'varzea-champions',
          title: 'Várzea Champions',
          description: 'A complete platform for managing amateur soccer championships, allowing the creation of leagues, teams, and real-time tracking of results.',
          imageUrl: '/varzeaPrint.png',
          imageHint: 'soccer championship management',
          tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Firebase'],
          repoUrl: 'https://github.com/brnpalma/varzea-champions',
          appUrl: 'https://varzea-champions.vercel.app',
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'The technologies I work with.',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Azure' },
        { name: 'N8N' },
        { name: 'Redis' },
        { name: 'API Restful' },
        { name: 'GitHub' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'Micro-serviços' },
        { name: 'DevOps' },
        { name: 'Dart' },
        { name: 'Flutter' },
        { name: 'ASP.net' },
        { name: 'Python' },
        { name: 'C#' },
        { name: 'SQL Server' },
        { name: 'Win Forms' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Feel free to reach out. I'm open to new opportunities and collaborations.",
      email: {
        label: 'Email',
        value: 'br88@outlook.com',
        icon: Mail,
      },
      phone: {
        label: 'Phone',
        value: '+55 11 99100-5698',
        icon: WhatsAppIcon,
      },
      location: {
        label: 'Location',
        value: 'São Paulo, SP, Brazil',
        icon: MapPin,
      }
    }
  },
  'pt-br': {
    name: 'Bruno Palma',
    title: 'Desenvolvedor Fullstack',
    headerTitle: 'Portfólio',
    bio: "Desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais inovadoras, performáticas e eficientes. Experiência sólida em todo o ciclo do desenvolvimento de software, desde a análise de requisitos até implementação e sustentação. Domínio em C#, Asp.Net, Javascript, HTML, CSS, SQL, Python, Dart, entre outras, aliado a proficiência em ferramentas e plataformas Azure (Service Bus, Blob Storage, Functions, Devops) e Docker. Um profissional proativo, pontual, compromissado, flexível, com boas relações de trabalho em equipe e ótimo domínio em lógica de programação. Sempre atualizado com as últimas tendencias em IA e tecnologias emergentes que agreguem valores e melhores resultados.",
    contactButton: 'Contato',
    navLinks: [
      { href: '#about', label: 'Sobre' },
      { href: '#experience', label: 'Experiência' },
      { href: '#projects', label: 'Projetos' },
      { href: '#skills', label: 'Habilidades' },
      { href: '#contact', label: 'Contato' },
    ],
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha jornada profissional até agora.',
      jobs: [
        {
          role: 'Desenvolvedor .NET Full Stack Pleno',
          company: 'NOVA VIDA TI (PJ)',
          period: 'Jun 2021 - Atualmente',
          description: 'Empresa de BigData com soluções próprias para obtenção de dados, Scrapping, comunicação por SMS, enriquecimento de informações, entre outros produtos. Tecnologias utilizadas: C#, ASP.NET, Javascript, HTML, CSS, Service Bus, Blob Storage, Azure Function, Azure Devops, Azure Cloud AZ900, Docker, Redis, SQL Server, MongoDB, MySql, entre outras.',
          icon: Briefcase,
        },
        {
          role: 'Desenvolvedor .NET Full Stack',
          company: 'DVJNET SISTEMAS (Estágio e CLT)',
          period: 'Jan 2020 - Jun 2021',
          description: 'Desenvolvimento de software próprio, no ramo de Pet Shops, para gerenciamento financeiro, vendas, PDV, notas fiscais, estoque e comércio em geral. Tecnologias utilizadas: C#, Windows Forms, ASP.NET, Javascript, HTML, CSS, SQL Server, entre outras.',
          icon: Briefcase,
        },
      ],
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Uma seleção dos meus trabalhos.',
      items: [
        {
          id: 'varzea-champions',
          title: 'Várzea Champions',
          description: 'Uma plataforma completa para gerenciamento de campeonatos de futebol de várzea, permitindo a criação de ligas, times e acompanhamento de resultados em tempo real.',
          imageUrl: '/varzeaPrint.png',
          imageHint: 'gerenciamento campeonato futebol',
          tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Firebase'],
          repoUrl: 'https://github.com/brnpalma/varzea-champions',
          appUrl: 'https://varzea-champions.vercel.app',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'As tecnologias com as quais trabalho.',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Azure' },
        { name: 'N8N' },
        { name: 'Redis' },
        { name: 'API Restful' },
        { name: 'GitHub' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'Micro-serviços' },
        { name: 'DevOps' },
        { name: 'Dart' },
        { name: 'Flutter' },
        { name: 'ASP.net' },
        { name: 'Python' },
        { name: 'C#' },
        { name: 'SQL Server' },
        { name: 'Win Forms' },
      ],
    },
    contact: {
      title: 'Contato',
      subtitle: 'Sinta-se à vontade para me procurar. Estou aberto a novas oportunidades e colaborações.',
      email: {
        label: 'Email',
        value: 'br88@outlook.com',
        icon: Mail,
      },
      phone: {
        label: 'Telefone',
        value: '+55 11 99100-5698',
        icon: WhatsAppIcon,
      },
      location: {
        label: 'Localização',
        value: 'São Paulo, SP, Brasil',
        icon: MapPin,
      }
    }
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/brnpalma',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bruno-palma-oliveira/',
      icon: Linkedin,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511991005698',
      icon: WhatsAppIcon,
    },
  ],
};
