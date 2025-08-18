import { Github, Linkedin, Briefcase } from 'lucide-react';

export const portfolioData = {
  en: {
    name: 'Bruno Palma',
    title: 'Fullstack Developer',
    bio: "I am a fullstack software developer with expertise in a range of technologies including React, NodeJS, TypeScript, AWS, Java, Spring, and database management. My skills in both frontend and backend development enable me to create robust and efficient solutions. I am committed to continuous learning and staying updated with the latest industry trends. Let's build something amazing together!",
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
    ],
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional journey so far.',
      jobs: [
        {
          role: 'Fullstack Developer',
          company: 'Globant',
          period: 'Aug 2022 - Present',
          description: 'Responsible for developing and maintaining web applications using modern technologies such as React, Node.js, and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions.',
          icon: Briefcase,
        },
        {
          role: 'Java Developer',
          company: 'Indra',
          period: 'Feb 2022 - Aug 2022',
          description: 'Worked on enterprise-level applications using Java and Spring Framework. Gained experience in backend development and database management.',
          icon: Briefcase,
        },
        {
          role: 'Software Engineer Intern',
          company: 'B2W Digital',
          period: 'Oct 2021 - Feb 2022',
          description: 'Assisted in the development of e-commerce platforms. Gained hands-on experience with agile methodologies and software development lifecycle.',
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
      title: 'Skills & Competencies',
      subtitle: 'The technologies I work with.',
      categories: {
        Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'Styled Components'],
        Backend: ['Node.js', 'Java', 'Spring Boot', 'Express'],
        Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
        'Cloud & DevOps': ['AWS', 'Docker', 'Git', 'CI/CD'],
      },
    },
  },
  'pt-br': {
    name: 'Bruno Palma',
    title: 'Desenvolvedor Fullstack',
    bio: "Sou um desenvolvedor de software fullstack com experiência em uma variedade de tecnologias, incluindo React, NodeJS, TypeScript, AWS, Java, Spring e gerenciamento de banco de dados. Minhas habilidades em desenvolvimento frontend e backend me permitem criar soluções robustas e eficientes. Estou comprometido com o aprendizado contínuo e em me manter atualizado com as últimas tendências do setor. Vamos construir algo incrível juntos!",
    navLinks: [
      { href: '#about', label: 'Sobre' },
      { href: '#experience', label: 'Experiência' },
      { href: '#projects', label: 'Projetos' },
      { href: '#skills', label: 'Habilidades' },
    ],
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha jornada profissional até agora.',
      jobs: [
        {
          role: 'Desenvolvedor Fullstack',
          company: 'Globant',
          period: 'Ago 2022 - Atualmente',
          description: 'Responsável pelo desenvolvimento e manutenção de aplicações web utilizando tecnologias modernas como React, Node.js e TypeScript. Colaborei com equipes multifuncionais para entregar soluções de software de alta qualidade.',
          icon: Briefcase,
        },
        {
          role: 'Desenvolvedor Java',
          company: 'Indra',
          period: 'Fev 2022 - Ago 2022',
          description: 'Trabalhei em aplicações de nível empresarial usando Java e Spring Framework. Adquiri experiência em desenvolvimento backend e gerenciamento de banco de dados.',
          icon: Briefcase,
        },
        {
          role: 'Estagiário de Engenharia de Software',
          company: 'B2W Digital',
          period: 'Out 2021 - Fev 2022',
          description: 'Auxiliei no desenvolvimento de plataformas de e-commerce. Adquiri experiência prática com metodologias ágeis e ciclo de vida de desenvolvimento de software.',
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
      title: 'Habilidades e Competências',
      subtitle: 'As tecnologias com as quais trabalho.',
      categories: {
        Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'Styled Components'],
        Backend: ['Node.js', 'Java', 'Spring Boot', 'Express'],
        Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
        'Cloud & DevOps': ['AWS', 'Docker', 'Git', 'CI/CD'],
      },
    },
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/brnpalma',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bruno-palma-a93232159/',
      icon: Linkedin,
    },
  ],
};
