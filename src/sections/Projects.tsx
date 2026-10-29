import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  MonitorSmartphone, 
  Server, 
  Layout, 
  X, 
  Lightbulb,
  BookOpen,
  ShieldCheck,
  Cpu,
  Layers,
  KeyRound
} from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import { projectsData, type ProjectType, type Project } from '../data/portfolioData';

function ProjectVisual({ project, onExpand }: { project: Project, onExpand: (url: string) => void }) {
  if (project.imageUrl) {
    return (
      <div 
        className="w-full rounded-2xl bg-card border border-border flex flex-col relative overflow-hidden backdrop-blur-sm group shadow-xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
        onClick={() => onExpand(project.imageUrl!)}
      >
        {/* Mac-like header */}
        <div className="h-9 border-b border-border/60 flex items-center px-4 gap-2 bg-muted/40 z-10 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          <div className="ml-4 font-mono text-[10px] text-muted-foreground/70 flex-grow text-center pr-10 truncate">
            ~/preview/{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}
          </div>
        </div>
        
        {/* Image Content */}
        <div className="relative overflow-hidden bg-muted/10">
          {project.imageUrl2 ? (
            <div className="w-full aspect-[16/10] flex flex-col gap-2 p-2">
              <div 
                className="w-full h-1/2 relative overflow-hidden rounded-lg border border-border/40"
                onClick={(e) => { e.stopPropagation(); onExpand(project.imageUrl!); }}
              >
                <img 
                  src={project.imageUrl} 
                  alt={`Preview 1 of ${project.title}`} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div 
                className="w-full h-1/2 relative overflow-hidden rounded-lg border border-border/40"
                onClick={(e) => { e.stopPropagation(); onExpand(project.imageUrl2!); }}
              >
                <img 
                  src={project.imageUrl2} 
                  alt={`Preview 2 of ${project.title}`} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ) : (
            <div className="w-full aspect-[16/10] relative overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={`Preview of ${project.title}`} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Overlay with zoom hint */}
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-3.5 py-1.5 rounded-full bg-card/90 border border-border text-xs font-medium text-foreground shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <ExternalLink size={13} className="text-primary" />
                  Clique para ampliar
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  let Icon = Terminal;
  if (project.type === 'Frontend') Icon = Layout;
  else if (project.type === 'Backend') Icon = Server;
  else if (project.type === 'Fullstack') Icon = MonitorSmartphone;
  else if (project.type === 'Fullstack & Mobile') Icon = MonitorSmartphone;

  return (
    <div className="w-full rounded-2xl bg-card border border-border flex flex-col relative overflow-hidden backdrop-blur-sm group shadow-xl aspect-[16/10]">
      {/* Mac-like header */}
      <div className="h-9 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        <div className="ml-4 font-mono text-[10px] text-muted-foreground opacity-50 flex-grow text-center pr-10">
          ~/project/preview
        </div>
      </div>
      
      {/* Abstract Content */}
      <div className="flex-grow flex items-center justify-center bg-grid relative">
        <div className="absolute inset-0 bg-background/50" />
        <Icon size={100} strokeWidth={0.5} className="text-primary/20 group-hover:text-primary/40 transition-colors duration-700 relative z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors duration-700" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType | 'All'>('All');
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.type === filter);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-foreground">
          Projetos em <span className="text-primary">Destaque</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-8">
          Uma seleção dos meus melhores trabalhos, mostrando arquitetura robusta, 
          experiência do usuário e código de qualidade.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {['All', 'Frontend', 'Fullstack'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-md font-mono text-xs transition-all duration-300 border cursor-pointer ${
                filter === cat 
                  ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--color-primary),0.3)]' 
                  : 'bg-card/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat === 'All' ? 'Todos os projetos' : cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-32">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Visual Column */}
                <div className={`w-full ${!isEven ? 'md:order-last' : ''}`}>
                  <ProjectVisual project={project} onExpand={setExpandedImage} />
                </div>
                
                {/* Content Column */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-primary">{project.type}</span>
                    <h3 className="text-3xl font-bold text-foreground tracking-tight">{project.title}</h3>
                  </div>
                  
                  {project.problemSolved && (
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90 leading-relaxed italic">
                        <span className="font-semibold text-primary not-italic block mb-1">Propósito do Projeto</span>
                        {project.problemSolved}
                      </p>
                    </div>
                  )}

                  <div className="p-6 rounded-xl bg-card border border-border shadow-lg relative">
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="font-mono text-[11px] px-2.5 py-1 bg-muted rounded-md text-foreground/80 border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div className="mt-2 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Principais Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-border/50">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                        <span>Ver Código</span>
                      </a>
                    )}
                    
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                        <span>Acessar Projeto</span>
                      </a>
                    )}

                    {project.technicalDetails && (
                      <button
                        type="button"
                        onClick={() => setSelectedProjectDetails(project)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer group"
                      >
                        <BookOpen size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Documentação Completa</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setExpandedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={expandedImage}
              alt="Expanded project view"
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technical Details Modal */}
      <AnimatePresence>
        {selectedProjectDetails && selectedProjectDetails.technicalDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectDetails(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[88vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border/70 flex items-center justify-between bg-muted/20 backdrop-blur-sm sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 font-semibold">
                        {selectedProjectDetails.type}
                      </span>
                      {selectedProjectDetails.technicalDetails.license && (
                        <span className="font-mono text-[11px] text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border/50">
                          License: {selectedProjectDetails.technicalDetails.license}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 tracking-tight">
                      {selectedProjectDetails.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedProjectDetails.githubUrl && selectedProjectDetails.githubUrl !== '#' && (
                    <a
                      href={selectedProjectDetails.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium text-foreground transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProjectDetails(null)}
                    className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Fechar"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content (Scrollable) */}
              <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 text-sm leading-relaxed">
                {/* Visão Geral */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                    <Layers size={14} /> Visão Geral & Proposta
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProjectDetails.description}
                  </p>
                </div>

                {/* 1. Destaques Arquiteturais & Engenharia */}
                {selectedProjectDetails.technicalDetails.architectureHighlights && (
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                      <ShieldCheck className="text-primary w-5 h-5" />
                      1. Destaques Arquiteturais & Engenharia
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProjectDetails.technicalDetails.architectureHighlights.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-muted/30 border border-border/60 hover:border-primary/40 transition-colors">
                          <h5 className="font-semibold text-foreground text-sm mb-1.5 text-primary">
                            {item.title}
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Tecnologias Utilizadas */}
                <div>
                  <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                    <Cpu className="text-primary w-5 h-5" />
                    2. Tecnologias Utilizadas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProjectDetails.technicalDetails.backendStack && (
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <h5 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3 text-primary flex items-center gap-2">
                          <Server size={14} /> Backend
                        </h5>
                        <ul className="space-y-1.5">
                          {selectedProjectDetails.technicalDetails.backendStack.map((tech, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                              <span>{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedProjectDetails.technicalDetails.frontendStack && (
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <h5 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3 text-primary flex items-center gap-2">
                          <Layout size={14} /> Frontend
                        </h5>
                        <ul className="space-y-1.5">
                          {selectedProjectDetails.technicalDetails.frontendStack.map((tech, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                              <span>{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Estrutura do Projeto */}
                {selectedProjectDetails.technicalDetails.projectStructure && (
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                      <Terminal className="text-primary w-5 h-5" />
                      3. Estrutura do Projeto
                    </h4>
                    <pre className="p-4 rounded-xl bg-muted/40 border border-border/80 font-mono text-[11px] leading-snug overflow-x-auto text-muted-foreground">
                      {selectedProjectDetails.technicalDetails.projectStructure}
                    </pre>
                  </div>
                )}

                {/* 4. Guia de Execução */}
                {selectedProjectDetails.technicalDetails.executionGuide && (
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                      <Terminal className="text-primary w-5 h-5" />
                      4. Guia de Execução (Direto no Windows)
                    </h4>
                    {selectedProjectDetails.technicalDetails.executionGuide.note && (
                      <p className="text-xs text-muted-foreground italic mb-4">
                        {selectedProjectDetails.technicalDetails.executionGuide.note}
                      </p>
                    )}
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <span className="text-xs font-semibold text-foreground block mb-2">Pré-requisitos:</span>
                      <ul className="space-y-1">
                        {selectedProjectDetails.technicalDetails.executionGuide.prerequisites.map((req, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      {selectedProjectDetails.technicalDetails.executionGuide.steps.map((st, i) => (
                        <div key={i} className="p-4 rounded-xl bg-card border border-border space-y-2">
                          <h5 className="font-semibold text-xs text-foreground">{st.title}</h5>
                          {st.description && <p className="text-xs text-muted-foreground">{st.description}</p>}
                          {st.command && (
                            <pre className="p-2.5 rounded-lg bg-muted/60 border border-border font-mono text-xs text-primary overflow-x-auto">
                              <code>{st.command}</code>
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Credenciais Demo */}
                {selectedProjectDetails.technicalDetails.demoCredentials && (
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                      <KeyRound className="text-primary w-5 h-5" />
                      5. Credenciais de Acesso Demo
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-muted/50 text-foreground font-semibold border-b border-border">
                          <tr>
                            <th className="p-3">Perfil</th>
                            <th className="p-3">E-mail</th>
                            <th className="p-3">Senha</th>
                            <th className="p-3">Permissões</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50 text-muted-foreground">
                          {selectedProjectDetails.technicalDetails.demoCredentials.map((c, i) => (
                            <tr key={i} className="hover:bg-muted/20">
                              <td className="p-3 font-medium text-foreground">{c.profile}</td>
                              <td className="p-3 font-mono text-primary">{c.email}</td>
                              <td className="p-3 font-mono">{c.pass}</td>
                              <td className="p-3">{c.permissions}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 6. Módulos e Funcionalidades */}
                {selectedProjectDetails.technicalDetails.modules && (
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                      <Layers className="text-primary w-5 h-5" />
                      6. Módulos e Funcionalidades
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProjectDetails.technicalDetails.modules.map((m, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-card border border-border space-y-2">
                          <h5 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                            <span className="text-primary font-bold">●</span> {m.title}
                          </h5>
                          <p className="text-xs text-muted-foreground">{m.description}</p>
                          {m.points && (
                            <ul className="space-y-1 pt-1 border-t border-border/40">
                              {m.points.map((pt, pIdx) => (
                                <li key={pIdx} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                                  <span className="text-primary mt-0.5">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Testes Automatizados */}
                {selectedProjectDetails.technicalDetails.testCoverage && (
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                      <ShieldCheck className="text-primary w-5 h-5" />
                      7. Suíte de Testes Automatizados
                    </h4>
                    <pre className="p-2.5 rounded-lg bg-muted/60 border border-border font-mono text-xs text-primary mb-3">
                      <code>{selectedProjectDetails.technicalDetails.testCoverage.command}</code>
                    </pre>
                    <div className="space-y-2">
                      {selectedProjectDetails.technicalDetails.testCoverage.suites.map((s, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-card border border-border/80">
                          <div className="font-mono text-xs font-semibold text-primary">{s.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{s.details}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
