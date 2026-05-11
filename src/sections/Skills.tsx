import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span> Tecnologias
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
          >
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:text-primary dark:hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}