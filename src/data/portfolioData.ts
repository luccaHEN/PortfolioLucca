export type ProjectType = 'Frontend' | 'Backend' | 'Fullstack' | 'Fullstack & Mobile';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  imageUrl2?: string;
  problemSolved?: string;
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
  "description": "Ecossistema multiplataforma (Web e Mobile) focado em potencializar o engajamento de streamers com suas comunidades através de sessões interativas de filmes. A solução moderniza a interação ao vivo, conectando a API do TMDB a um 'Modo Streamer' exclusivo, que conta com regras gamificadas, agendamentos e métricas dinâmicas para a audiência.",
  "type": "Fullstack",
  "techStack": [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "Flutter",
    "Dart"
  ],
  "githubUrl": "#",
  "liveUrl": "https://sumasflix.com.br/",
  "imageUrl": "./sumasflix.png",
  "imageUrl2": "./sumasflix2.png",
  "problemSolved": "O streamer que eu assistia usava uma planilha completamente manual e frequentemente se perdia na fila do que precisava assistir. Criei essa plataforma para automatizar a gestão e gamificar a experiência da audiência.",
  "features": [
    "Integração completa de catálogo e metadados via API do TMDB",
    "Dashboard analítico com gráficos de desempenho e Pódio de Engajamento para a comunidade",
    "Modo Streamer com Roleta Interativa e animações imersivas para sorteios ao vivo",
    "App Mobile complementar com calendário de sessões e Notificações Push",
    "Geração de listas públicas de filmes com URLs compartilháveis para os espectadores",
    "Interface intuitiva com sistema de Drag-and-Drop para reordenar a fila de agendamentos",
    "Arquitetura segura com controle de acesso e autenticação baseada em JWT"
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
    imageUrl: "./precision.png",
    problemSolved: "O cliente precisava de uma presença digital moderna para promover um produto agro e captar novos leads de forma eficiente.",
    features: ["Modo Escuro", "Gráficos Interativos", "Gerenciamento de Estado Otimizado"]
  },
  {
    id: "3",
    title: "Foodie",
    description: "Aplicativo completo de delivery de comida (estilo iFood / Uber Eats) com arquitetura Fullstack e comunicação em tempo real. Possui dois backends independentes e intercambiáveis (Node.js e Java/Spring Boot) consumindo a mesma base de dados PostgreSQL e o mesmo frontend React. O ecossistema é dividido em 3 módulos (Cliente, Restaurante e Entregador), garantindo uma experiência completa ponta-a-ponta.",
    type: "Fullstack",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "WebSockets"
    ],
    githubUrl: "https://github.com/luccaHEN/Foodie",
    imageUrl: "./Foodie.jpeg",
    problemSolved: "Projeto criado exclusivamente para fins de estudos pessoais e experimentação tecnológica, testando a interoperabilidade entre diferentes ecossistemas de backend (Node vs Java).",
    features: [
      "Módulo do Cliente com exploração de restaurantes, carrinho de compras e acompanhamento de pedidos em tempo real via WebSockets",
      "Módulo do Restaurante com gerenciamento de cardápio (CRUD), fila de pedidos estilo Kanban em tempo real e dashboard com métricas de vendas",
      "Módulo do Entregador com mural de corridas disponíveis, aceite exclusivo e finalização segura via PIN de 4 dígitos",
      "Dois backends independentes e intercambiáveis: Java (Spring Boot 3.x com Spring Security & STOMP) e Node.js (Express com Prisma & Socket.IO)",
      "Chat em tempo real entre cliente, restaurante e entregador",
      "Sistema de avaliação (Reviews) ao finalizar pedidos"
    ]
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
    period: "Concluído em 2025",
    description: "Formação abrangente no desenvolvimento de aplicações web (front-end e back-end) e mobile. O currículo engloba arquiteturas monolíticas e de microsserviços, bancos de dados SQL e NoSQL, Programação Orientada a Objetos (POO), testes automatizados, sistemas distribuídos, segurança e inteligência computacional.",
    type: "Educação"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
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
    title: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "React Native"
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