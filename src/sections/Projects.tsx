import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import { projectsData, type ProjectType } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.type === filter);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span> Meus Projetos
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </h2>

        <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
          {['All', 'Frontend', 'Backend', 'Fullstack'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'glass hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              {cat === 'All' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.id}
              onClick={() => {
                // Pega a liveUrl se existir, senão usa o githubUrl
                const targetUrl = (project.liveUrl && project.liveUrl !== '#') ? project.liveUrl : 
                                  (project.githubUrl && project.githubUrl !== '#') ? project.githubUrl : null;
                
                if (targetUrl) window.open(targetUrl, '_blank', 'noopener,noreferrer');
              }}
              className={`glass rounded-2xl p-6 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 ${
                (project.liveUrl && project.liveUrl !== '#') || (project.githubUrl && project.githubUrl !== '#') ? 'cursor-pointer' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><ExternalLink size={24} /></div>
                <div className="flex gap-3 text-slate-400">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition relative z-10">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => <span key={tech} className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-primary">{tech}</span>)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}