export type ProjectType = 'Frontend' | 'Backend' | 'Fullstack';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'Trabalho' | 'Educação';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const profileData = {
  name: "Lucca Henrique",
  role: "Desenvolvedor de Software",
  age: 22,
  education: "Tecnólogo em Sistemas para Internet",
  institution: "Instituto Federal do Triângulo Mineiro",
  headline: "Construindo experiências digitais modernas e robustas.",
  resumeUrl: "./curriculo.pdf",
  social: {
    github: "https://github.com/luccaHEN",
    linkedin: "https://www.linkedin.com/in/lucca-sousa",
    email: "luccahs03@gmail.com",
  }
};

export const projectsData: Project[] = [
{
  "id": "1",
  "title": "Sumasflix",
  "description": "Plataforma fullstack desenvolvida para streamers organizarem e gerenciarem sessões de filmes com foco em interatividade e engajamento da comunidade. A aplicação integra-se à API do TMDB para busca, avaliação e gerenciamento de títulos, além de oferecer um “Modo Streamer” com agendamento de sessões, registro de indicações do chat e geração de métricas dinâmicas, como rankings dos filmes mais bem avaliados e pódio de resgatadores.",
  "type": "Fullstack",
  "techStack": [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL"
  ],
  "githubUrl": "#",
  "liveUrl": "https://sumasflix.com.br/",
  "features": [
    "Integração com API do TMDB para busca de catálogo de filmes",
    "Dashboard com métricas, gráficos e Pódio de Resgates do chat",
    "Roleta interativa com animações (canvas-confetti) para sorteios ao vivo",
    "Listas públicas com URL compartilhável para os espectadores",
    "Sistema de Drag-and-Drop para reordenar a fila de filmes agendados",
    "Autenticação e controle de acesso seguros com JWT"
  ]
}
,
  {
    id: "2",
    title: "Precision Landing Page",
    description: "Aplicação desenvolvida em parceria com um cliente real durante a graduação, voltada para a divulgação de um dosador utilizado no agronegócio, priorizando apresentação visual, acessibilidade e experiência do usuário.",
    type: "Frontend",
    techStack: ["React", "JavaScript"],
    liveUrl: "https://lukkzhs.github.io/PrecisionV1/",
    githubUrl: "#",
    features: ["Modo Escuro", "Gráficos Interativos", "Gerenciamento de Estado Otimizado"]
  },
  // Adicione novos projetos aqui facilmente!
];

export const experienceData: Experience[] = [
  {
    id: "1",
    title: "Estágio Cloud Data Engineer",
    company: "Compass UOL",
    period: "Fev 2024 - Jun 2024",
    description: "Experiência prática em Cloud Data Engineering, trabalhando com processos de ETL, manipulação e análise de dados utilizando Python, Pandas e NumPy. Utilização de serviços AWS para processamento e visualização de dados, incluindo IAM, EC2, VPC, Lambda, Step Functions, EMR, Glue, Athena e QuickSight, além de integração com Apache Spark e aplicação de metodologias ágeis no desenvolvimento das atividades.",
    type: "Trabalho"
  },
  {
    id: "2",
    title: "Tecnólogo em Sistemas para Internet",
    company: "Instituto Federal do Triângulo Mineiro (IFTM)",
    period: "2023 - 2025",
    description: "Formação abrangente no desenvolvimento de aplicações web (front-end e back-end) e mobile. O currículo engloba arquiteturas monolíticas e de microsserviços, bancos de dados SQL e NoSQL, Programação Orientada a Objetos (POO), testes automatizados, sistemas distribuídos, segurança e inteligência computacional.",
    type: "Educação"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Vite",
      "Framer Motion"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "Python"
    ]
  },
  {
    title: "Cloud & Data Engineering",
    skills: [
      "AWS IAM",
      "AWS EC2",
      "AWS VPC",
      "AWS Lambda",
      "AWS S3",
      "AWS Glue",
      "AWS EMR",
      "AWS Athena",
      "Apache Spark",
      "QuickSight"
    ]
  },
  {
    title: "Banco de Dados & Ferramentas",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Git",
      "GitHub",
      "Pandas",
      "NumPy"
    ]
  }
];