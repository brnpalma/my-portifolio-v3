import { Github, Linkedin, Briefcase, Phone, Mail, MapPin } from 'lucide-react';
import { HtmlIcon } from './icons/tech/html-icon';
import { CssIcon } from './icons/tech/css-icon';
import { JavascriptIcon } from './icons/tech/javascript-icon';
import { TypescriptIcon } from './icons/tech/typescript-icon';
import { ReactIcon } from './icons/tech/react-icon';
import { NextjsIcon } from './icons/tech/nextjs-icon';
import { NodejsIcon } from './icons/tech/nodejs-icon';
import { JavaIcon } from './icons/tech/java-icon';
import { SpringIcon } from './icons/tech/spring-icon';
import { MongodbIcon } from './icons/tech/mongodb-icon';
import { MysqlIcon } from './icons/tech/mysql-icon';
import { PostgresqlIcon } from './icons/tech/postgresql-icon';
import { AwsIcon } from './icons/tech/aws-icon';
import { DockerIcon } from './icons/tech/docker-icon';
import { GitIcon } from './icons/tech/git-icon';

export const portfolioData = {
  en: {
    name: 'Bruno Palma',
    title: 'Fullstack Developer',
    headerTitle: 'Portfolio',
    bio: "I am a fullstack software developer with expertise in a range of technologies including React, NodeJS, TypeScript, AWS, Java, Spring, and database management. My skills in both frontend and backend development enable me to create robust and efficient solutions. I am committed to continuous learning and staying updated with the latest industry trends. Let's build something amazing together!",
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
        { name: 'HTML', icon: HtmlIcon },
        { name: 'CSS', icon: CssIcon },
        { name: 'JavaScript', icon: JavascriptIcon },
        { name: 'TypeScript', icon: TypescriptIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'Node.js', icon: NodejsIcon },
        { name: 'Java', icon: JavaIcon },
        { name: 'Spring', icon: SpringIcon },
        { name: 'MongoDB', icon: MongodbIcon },
        { name: 'MySQL', icon: MysqlIcon },
        { name: 'PostgreSQL', icon: PostgresqlIcon },
        { name: 'AWS', icon: AwsIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Git', icon: GitIcon },
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
        icon: Phone,
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
    bio: "Sou um desenvolvedor de software fullstack com experiência em uma variedade de tecnologias, incluindo React, NodeJS, TypeScript, AWS, Java, Spring e gerenciamento de banco de dados. Minhas habilidades em desenvolvimento frontend e backend me permitem criar soluções robustas e eficientes. Estou comprometido com o aprendizado contínuo e em me manter atualizado com as últimas tendências do setor. Vamos construir algo incrível juntos!",
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
        { name: 'HTML', icon: HtmlIcon },
        { name: 'CSS', icon: CssIcon },
        { name: 'JavaScript', icon: JavascriptIcon },
        { name: 'TypeScript', icon: TypescriptIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'Node.js', icon: NodejsIcon },
        { name: 'Java', icon: JavaIcon },
        { name: 'Spring', icon: SpringIcon },
        { name: 'MongoDB', icon: MongodbIcon },
        { name: 'MySQL', icon: MysqlIcon },
        { name: 'PostgreSQL', icon: PostgresqlIcon },
        { name: 'AWS', icon: AwsIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Git', icon: GitIcon },
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
        icon: Phone,
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
  ],
};
