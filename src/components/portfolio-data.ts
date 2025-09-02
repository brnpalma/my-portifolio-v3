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
          id: 'marvel-app',
          title: 'Marvel App',
          description: 'A web application that consumes the Marvel API to display information about characters, comics, and series. Developed using React and styled-components.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'comic characters',
          tags: ['React', 'API', 'Styled-Components'],
        },
        {
          id: 'my-portfolio-v2',
          title: 'My Portfolio V2',
          description: 'The second version of my personal portfolio, built with React and TypeScript. Features a clean and modern design.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'website design',
          tags: ['React', 'TypeScript', 'Portfolio'],
        },
        {
          id: 'letmeask',
          title: 'LetMeAsk',
          description: 'A real-time Q&A application developed during NLW Together by Rocketseat. Built with React, TypeScript, and Firebase.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'questions answers',
          tags: ['React', 'TypeScript', 'Firebase'],
        },
        {
          id: 'watchme',
          title: 'WatchMe',
          description: 'A movie catalog application that allows users to browse and filter movies by genre. Developed with React and TypeScript.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'movie posters',
          tags: ['React', 'TypeScript', 'Movies'],
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
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Node.js' },
        { name: 'Java' },
        { name: 'Spring' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'Git' },
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
          id: 'marvel-app',
          title: 'Marvel App',
          description: 'Uma aplicação web que consome a API da Marvel para exibir informações sobre personagens, quadrinhos e séries. Desenvolvido com React e styled-components.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'comic characters',
          tags: ['React', 'API', 'Styled-Components'],
        },
        {
          id: 'my-portfolio-v2',
          title: 'Meu Portfólio V2',
          description: 'A segunda versão do meu portfólio pessoal, construído com React e TypeScript. Apresenta um design limpo e moderno.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'website design',
          tags: ['React', 'TypeScript', 'Portfolio'],
        },
        {
          id: 'letmeask',
          title: 'LetMeAsk',
          description: 'Uma aplicação de Q&A em tempo real desenvolvida durante o NLW Together da Rocketseat. Construído com React, TypeScript e Firebase.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'questions answers',
          tags: ['React', 'TypeScript', 'Firebase'],
        },
        {
          id: 'watchme',
          title: 'WatchMe',
          description: 'Uma aplicação de catálogo de filmes que permite aos usuários navegar e filtrar filmes por gênero. Desenvolvido com React e TypeScript.',
          imageUrl: 'https://placehold.co/600x400.png',
          imageHint: 'movie posters',
          tags: ['React', 'TypeScript', 'Movies'],
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
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Node.js' },
        { name: 'Java' },
        { name: 'Spring' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'Git' },
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
