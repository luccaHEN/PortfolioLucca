import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span> Minha Jornada
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Linha vertical contínua da Timeline */}
        <div className="absolute top-0 bottom-0 left-[19px] md:left-[27px] w-0.5 bg-slate-200 dark:bg-slate-800"></div>

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start gap-6 md:gap-10 group"
            >
              {/* Ponto / Ícone da Timeline */}
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-white ring-4 ring-slate-50 dark:ring-secondary shadow-xl transition-transform duration-300 group-hover:scale-110">
                {item.type === 'Trabalho' ? <Briefcase size={20} /> : <GraduationCap size={24} />}
              </div>

              {/* Card de Conteúdo Glassmorphism */}
              <div className="flex-1 glass rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mt-1">{item.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full w-fit whitespace-nowrap">
                    <Calendar size={16} />
                    {item.period}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}