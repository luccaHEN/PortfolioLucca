export type ProjectType = 'Frontend' | 'Backend' | 'Fullstack' | 'Fullstack & Mobile';

export interface TechnicalDetail {
  license?: string;
  architectureHighlights?: { title: string; description: string }[];
  backendStack?: string[];
  frontendStack?: string[];
  projectStructure?: string;
  executionGuide?: {
    note?: string;
    prerequisites: string[];
    steps: { title: string; command?: string; description?: string }[];
  };
  demoCredentials?: { profile: string; email: string; pass: string; permissions: string }[];
  modules?: { title: string; description: string; points?: string[] }[];
  testCoverage?: {
    command: string;
    suites: { name: string; details: string }[];
  };
}

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
  technicalDetails?: TechnicalDetail;
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
    id: "erp-flow",
    title: "ERP Flow — Sistema de Gestão Empresarial",
    description: "ERP Web moderno, robusto e escalável para pequenas e médias empresas, desenvolvido como um Monólito Modular de ponta a ponta com Java 21, Spring Boot 3, PostgreSQL e React + TypeScript + Tailwind CSS. Projeto desenvolvido para fins de estudos e aprofundamento prático em arquitetura de software, explorando isolamento multitenant estrito por empresa, integridade de dados por Flyway, controle concorrente com travas pessimistas para estoque, valores monetários com BigDecimal, autenticação JWT stateless e interface de usuário SaaS moderna.",
    type: "Fullstack",
    techStack: [
      "Java 21",
      "Spring Boot 3.3.5",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Spring Security",
      "JWT",
      "Hibernate / JPA",
      "Flyway",
      "TanStack Query 5",
      "Recharts",
      "Zod"
    ],
    githubUrl: "https://github.com/luccaHEN/erp",
    imageUrl: "./ERP.png",
    problemSolved: "Projeto desenvolvido para fins de estudos práticos e aprofundamento técnico, explorando conceitos de multitenancy estrito (RLS via JWT e TenantContext ThreadLocal), concorrência de estoque com travas pessimistas (@Lock PESSIMISTIC_WRITE), precisão financeira com BigDecimal e proteção contra injeção de fórmulas CSV.",
    features: [
      "Monólito Modular estrito por domínios de negócio independentes (auth, company, inventory, sales, financial, etc.)",
      "Multitenancy Estrito (Row-Level Security) com isolamento total por empresa via TenantContext (ThreadLocal)",
      "Controle Concorrente de Estoque com bloqueio pessimista (@Lock PESSIMISTIC_WRITE) e extrato imutável",
      "Precisão Financeira com cálculos monetários e quantidades fracionárias exclusivamente em BigDecimal (HALF_UP)",
      "PDV e Vendas com baixa atômica no estoque, orçamentos e estorno automático de transações",
      "Gestão Financeira completa com Contas a Pagar/Receber, liquidação e projeção de saldo financeiro",
      "Dashboard analítico com KPIs em tempo real, gráfico diário de vendas e ranking de produtos (Recharts)",
      "Exportação de relatórios em CSV sanitizados contra vulnerabilidades de Formula/CSV Injection",
      "Trilha de Auditoria (AuditLog) de operações sensíveis com acesso restrito a administradores",
      "Suíte de 14 testes de integração com MockMvc cobrindo fluxos essenciais de ponta a ponta"
    ],
    technicalDetails: {
      license: "MIT",
      architectureHighlights: [
        {
          title: "Monólito Modular",
          description: "Organização estrita por domínios de negócio (auth, company, user, customer, supplier, product, inventory, sales, financial, dashboard, report, audit), evitando acoplamentos circulares ou microsserviços desnecessários."
        },
        {
          title: "Multitenancy Estrito (Row-Level Security)",
          description: "O company_id é injetado diretamente no token JWT e propagado via TenantContext (ThreadLocal). O backend nunca confia em IDs enviados pelo cliente: todas as consultas filtram rigorosamente pela empresa do usuário autenticado."
        },
        {
          title: "Controle Concorrente de Estoque",
          description: "Uso de bloqueio pessimista (@Lock(LockModeType.PESSIMISTIC_WRITE)) ao debitar ou creditar estoque, garantindo que compras concorrentes no PDV jamais resultem em saldo negativo. O estoque atual é imutável: só se altera via movimentações rastreáveis (StockMovement)."
        },
        {
          title: "Precisão Financeira",
          description: "Todos os cálculos monetários e quantidades fracionárias utilizam exclusivamente BigDecimal com arredondamento HALF_UP."
        },
        {
          title: "Segurança contra Injeção em Planilhas",
          description: "As exportações em formato CSV sanitizam caracteres de fórmula (=, +, -, @) para prevenir vulnerabilidades de CSV/Formula Injection ao abrir arquivos no Microsoft Excel e LibreOffice Calc."
        },
        {
          title: "Trilha de Auditoria",
          description: "Registro de auditoria (AuditLog) de operações sensíveis (faturamento de pedidos, estornos, ajustes manuais de estoque, cancelamento de títulos)."
        }
      ],
      backendStack: [
        "Java 21 LTS",
        "Spring Boot 3.3.5",
        "Spring Data JPA & Hibernate 6",
        "Spring Security 6 com JWT (io.jsonwebtoken 0.12.6)",
        "Bean Validation (Hibernate Validator)",
        "PostgreSQL 18 (Compatível com PG 16+)",
        "Flyway para migrações e versionamento do esquema relacional",
        "Springdoc OpenAPI / Swagger UI",
        "JUnit 5 & Mockito",
        "Maven Wrapper (mvnw.cmd)"
      ],
      frontendStack: [
        "React 18 + TypeScript",
        "Vite",
        "Tailwind CSS",
        "Lucide React (Ícones modernos)",
        "React Router Dom 6 (Rotas protegidas, layouts aninhados e navegação SPA)",
        "TanStack React Query 5 (Gerenciamento de estado de servidor e cache)",
        "React Hook Form + Zod (Validação de formulários e tipagem estrita)",
        "Axios (Interceptors para token JWT)",
        "Recharts (Visualização analítica de evolução de vendas e rankings)"
      ],
      projectStructure: `erp/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/erpflow/
│   │   │   │   ├── ErpFlowApplication.java
│   │   │   │   ├── shared/                # Infraestrutura transversal
│   │   │   │   │   ├── config/            # OpenAPI e WebMvc CORS
│   │   │   │   │   ├── exception/         # Tratamento global de erros (RFC 7807)
│   │   │   │   │   └── security/          # JWT Filter, TenantContext e SecurityConfig
│   │   │   │   ├── auth/                  # Login, me e geração de tokens JWT
│   │   │   │   ├── company/               # Gestão de Empresas (Multitenancy)
│   │   │   │   ├── user/                  # Controle de Usuários e Perfis (ADMIN/OPERADOR)
│   │   │   │   ├── customer/              # Clientes e validação de documento
│   │   │   │   ├── supplier/              # Fornecedores
│   │   │   │   ├── product/               # Produtos e Categorias
│   │   │   │   ├── inventory/             # Controle de Estoque (com lock pessimista)
│   │   │   │   ├── sales/                 # Vendas, Orçamentos e PDV
│   │   │   │   ├── financial/             # Contas a Pagar e Receber
│   │   │   │   ├── dashboard/             # Indicadores consolidados e gráficos
│   │   │   │   ├── report/                # Relatórios e exportação segura em CSV
│   │   │   │   └── audit/                 # Trilha de Auditoria (Restrita a ADMIN)
│   │   │   └── resources/
│   │   │       ├── db/migration/          # Migrações Flyway (V1 Schema, V2 Seed)
│   │   │       └── application.yml
│   │   └── test/                          # Suíte de 14 testes de integração com MockMvc
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/                    # Sidebar, Header, Modal, Badge, Pagination
│   │   ├── context/                       # AuthContext, ThemeContext
│   │   ├── lib/                           # Utilitários de formatação (moeda BRL, datas)
│   │   ├── pages/                         # Telas funcionais de todos os domínios
│   │   │   ├── auth/                      # Login
│   │   │   ├── dashboard/                 # Dashboard com Recharts e KPIs
│   │   │   ├── company/                   # Gestão de Empresas
│   │   │   ├── users/                     # Usuários e Perfis
│   │   │   ├── customers/                 # Clientes
│   │   │   ├── suppliers/                 # Fornecedores
│   │   │   ├── categories/                # Categorias
│   │   │   ├── products/                  # Produtos e Estoque Mínimo
│   │   │   ├── inventory/                 # Extrato e Movimentações de Estoque
│   │   │   ├── sales/                     # Vendas e Pedidos (PDV)
│   │   │   ├── financial/                 # Gestão Financeira (Receber e Pagar)
│   │   │   ├── reports/                   # Relatórios com download de CSV
│   │   │   └── audit/                     # Trilha de Auditoria
│   │   ├── routes/                        # Definição e proteção de rotas
│   │   ├── services/                      # Cliente Axios com interceptors
│   │   └── types/                         # Interfaces TypeScript alinhadas aos DTOs
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── README.md
└── .gitignore`,
      executionGuide: {
        note: "O projeto foi desenhado para ser executado nativamente no Windows sem nenhuma necessidade de Docker.",
        prerequisites: [
          "Java 21 LTS instalado (java -version)",
          "Node.js 20+ instalado (node -v)",
          "PostgreSQL instalado e em execução na porta 5432"
        ],
        steps: [
          {
            title: "1. Configurar o Banco de Dados PostgreSQL",
            command: "CREATE DATABASE erp_flow;",
            description: "Abra o terminal do PostgreSQL (psql) ou ferramenta como pgAdmin/DBeaver e crie o banco erp_flow. O application.yml está pré-configurado na porta 5432."
          },
          {
            title: "2. Executar o Backend (Spring Boot)",
            command: "cd backend\n.\\mvnw.cmd spring-boot:run",
            description: "O Flyway aplicará automaticamente as migrações (V1 Schema e V2 Seed). A API estará em http://localhost:8080 e o Swagger UI em http://localhost:8080/swagger-ui/index.html."
          },
          {
            title: "3. Executar o Frontend (React + Vite)",
            command: "cd frontend\nnpm.cmd run dev",
            description: "A interface SaaS estará acessível em http://localhost:5173."
          }
        ]
      },
      demoCredentials: [
        {
          profile: "Administrador",
          email: "admin@erpflow.com",
          pass: "admin123",
          permissions: "Acesso irrestrito a todos os módulos, incluindo Empresas, Usuários e Auditoria."
        },
        {
          profile: "Operador",
          email: "operador@erpflow.com",
          pass: "operador123",
          permissions: "Acesso operacional a Clientes, Fornecedores, Produtos, Estoque, Vendas e Financeiro."
        }
      ],
      modules: [
        {
          title: "Vendas & Pedidos (PDV)",
          description: "Emissão de pedidos com status ORCAMENTO, CONFIRMADA e CANCELADA.",
          points: [
            "Carrinho dinâmico de produtos com cálculo automático de subtotal e descontos por item/geral",
            "Preservação do preço unitário histórico do momento da venda",
            "Faturamento com baixa atômica no estoque e geração de títulos em Contas a Receber",
            "Cancelamento com estorno automático de estoque (ESTORNO_VENDA) e cancelamento de duplicatas"
          ]
        },
        {
          title: "Controle de Estoque",
          description: "Extrato imutável de movimentações (ENTRADA, SAIDA, AJUSTE, SAIDA_VENDA, ESTORNO_VENDA).",
          points: [
            "Controle de estoque mínimo com alertas visuais e filtros rápidos",
            "Bloqueio pessimista contra concorrência simultânea",
            "Rastreabilidade completa de todas as operações"
          ]
        },
        {
          title: "Gestão Financeira",
          description: "Controle rigoroso de Contas a Pagar e Contas a Receber.",
          points: [
            "Destaque para títulos vencidos e acompanhamento por status",
            "Liquidação / baixa com data efetiva e meio de pagamento",
            "Cálculo de saldo financeiro projetado"
          ]
        },
        {
          title: "Dashboard & Métricas",
          description: "Indicadores em tempo real consolidados com gráficos modernos.",
          points: [
            "Faturamento do mês, contagem de vendas, contas a receber e pagar",
            "Gráfico de área com evolução diária de vendas (Recharts)",
            "Ranking dos produtos mais vendidos por receita"
          ]
        },
        {
          title: "Relatórios & Exportações Seguras",
          description: "Relatórios analíticos com proteção de segurança corporativa.",
          points: [
            "Relatórios de vendas, estoque e extrato financeiro",
            "Exportação em CSV com UTF-8 BOM para Excel",
            "Sanitização de caracteres para prevenção de CSV/Formula Injection"
          ]
        },
        {
          title: "Trilha de Auditoria",
          description: "Registro de auditoria (AuditLog) para operações de segurança e negócio.",
          points: [
            "Rastreamento de faturamento, estornos, ajustes manuais e cancelamentos",
            "Acesso restrito exclusivamente ao perfil ADMIN"
          ]
        }
      ],
      testCoverage: {
        command: "cd backend\n.\\mvnw.cmd test",
        suites: [
          {
            name: "AuthControllerTest",
            details: "Login bem-sucedido com JWT, rejeição de credenciais incorretas, proteção de rotas privadas sem token."
          },
          {
            name: "CadastrosIntegrationTest",
            details: "Cadastro de cliente com validação de documento duplicado, cadastro de produtos com SKU único por empresa, listagem de categorias."
          },
          {
            name: "OperacoesIntegrationTest",
            details: "Movimentação manual atômica, fluxo completo de venda -> baixa de estoque -> contas a receber, bloqueio por saldo insuficiente e estorno atômico."
          },
          {
            name: "GestaoIntegrationTest",
            details: "Consulta de KPIs em tempo real, geração de gráficos, exportação de CSV sanitizado e validação de permissões de segurança da trilha de auditoria."
          }
        ]
      }
    }
  },
  {
    id: "1",
    title: "Sumasflix",
    description: "Ecossistema multiplataforma (Web e Mobile) focado em potencializar o engajamento de streamers com suas comunidades através de sessões interativas de filmes. A solução moderniza a interação ao vivo, conectando a API do TMDB a um 'Modo Streamer' exclusivo, que conta com regras gamificadas, agendamentos e métricas dinâmicas para a audiência.",
    type: "Fullstack",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Flutter",
      "Dart"
    ],
    githubUrl: "#",
    liveUrl: "https://sumasflix.com.br/",
    imageUrl: "./sumasflix.png",
    imageUrl2: "./sumasflix2.png",
    problemSolved: "O streamer que eu assistia usava uma planilha completamente manual e frequentemente se perdia na fila do que precisava assistir. Criei essa plataforma para automatizar a gestão e gamificar a experiência da audiência.",
    features: [
      "Integração completa de catálogo e metadados via API do TMDB",
      "Dashboard analítico com gráficos de desempenho e Pódio de Engajamento para a comunidade",
      "Modo Streamer com Roleta Interativa e animações imersivas para sorteios ao vivo",
      "App Mobile complementar com calendário de sessões e Notificações Push",
      "Geração de listas públicas de filmes com URLs compartilháveis para os espectadores",
      "Interface intuitiva com sistema de Drag-and-Drop para reordenar a fila de agendamentos",
      "Arquitetura segura com controle de acesso e autenticação baseada em JWT"
    ]
  },
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
  }
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
