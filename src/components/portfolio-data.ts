import { Github, Linkedin, Briefcase, Code, Star } from 'lucide-react';

export const portfolioData = {
  name: 'Bruno Palma',
  title: 'Fullstack Developer',
  bio: "I am a fullstack software developer with expertise in a range of technologies including React, NodeJS, TypeScript, AWS, Java, Spring, and database management. My skills in both frontend and backend development enable me to create robust and efficient solutions. I am committed to continuous learning and staying updated with the latest industry trends. Let's build something amazing together!",
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
  experience: [
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
  projects: [
    {
      id: 'marvel-app',
      title: 'Marvel App',
      description:
        'A web application that consumes the Marvel API to display information about characters, comics, and series. Developed using React and styled-components.',
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
  skills: {
    Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'Styled Components'],
    Backend: ['Node.js', 'Java', 'Spring Boot', 'Express'],
    Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Git', 'CI/CD'],
  },
};
