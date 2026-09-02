import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, Terminal, MonitorSmartphone, Server, Layout, X, Lightbulb } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import { projectsData, type ProjectType, type Project } from '../data/portfolioData';

function ProjectVisual({ project, onExpand }: { project: Project, onExpand: (url: string) => void }) {
  if (project.imageUrl) {
    return (
      <div 
        className="w-full h-full min-h-[320px] rounded-2xl bg-card/40 border border-border flex flex-col relative overflow-hidden backdrop-blur-sm group"
      >
        {/* Mac-like header */}
        <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20 z-10 relative">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <div className="ml-4 font-mono text-[10px] text-muted-foreground opacity-50 flex-grow text-center pr-10">
            ~/project/preview
          </div>
        </div>
        
        {/* Image Content */}
        <div className="flex-grow relative overflow-hidden bg-muted/5 p-4 flex items-center justify-center">
          {project.imageUrl2 ? (
            <div className="w-full h-full flex flex-col gap-4 items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 ease-out">
              <div className="w-full h-1/2 relative flex items-center justify-center">
                <img 
                  src={project.imageUrl} 
                  alt={`Preview of ${project.title}`} 
                  onClick={() => onExpand(project.imageUrl!)}
                  className="w-full h-full object-contain rounded-lg shadow-md border border-border/30 cursor-zoom-in hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full h-1/2 relative flex items-center justify-center">
                <img 
                  src={project.imageUrl2} 
                  alt={`Secondary preview of ${project.title}`} 
                  onClick={() => onExpand(project.imageUrl2!)}
                  className="w-full h-full object-contain rounded-lg shadow-md border border-border/30 cursor-zoom-in hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ) : (
            <img 
              src={project.imageUrl} 
              alt={`Preview of ${project.title}`} 
              onClick={() => onExpand(project.imageUrl!)}
              className="w-full h-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-700 ease-out shadow-lg cursor-zoom-in"
            />
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
    <div className="w-full h-full min-h-[320px] rounded-2xl bg-card/40 border border-border flex flex-col relative overflow-hidden backdrop-blur-sm group">
      {/* Mac-like header */}
      <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <div className="w-3 h-3 rounded-full bg-primary/60" />
        <div className="ml-4 font-mono text-[10px] text-muted-foreground opacity-50 flex-grow text-center pr-10">
          ~/project/preview
        </div>
      </div>
      
      {/* Abstract Content */}
      <div className="flex-grow flex items-center justify-center bg-grid relative">
        <div className="absolute inset-0 bg-background/50" />
        <Icon size={120} strokeWidth={0.5} className="text-primary/20 group-hover:text-primary/40 transition-colors duration-700 relative z-10" />
        
        {/* Glow behind icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors duration-700" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType | 'All'>('All');
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

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
              className={`px-5 py-2 rounded-md font-mono text-xs transition-all duration-300 border ${
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
                <div className={`w-full h-full min-h-[300px] ${!isEven ? 'md:order-last' : ''}`}>
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
                        <span className="font-semibold text-primary not-italic block mb-1">Desafio / Propósito</span>
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
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
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
              className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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
              onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}