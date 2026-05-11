import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center items-start pt-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-semibold tracking-wide mb-4 flex items-center gap-2">
            <span className="h-1 w-8 bg-primary rounded-full"></span>
            Olá, meu nome é
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {profileData.name}.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-500 dark:text-slate-400 mb-6">
            {profileData.headline}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
            Sou {profileData.role} formado pelo {profileData.institution}, focado em construir aplicações escaláveis e interfaces premium focadas na experiência do usuário.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href="#projects" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition shadow-lg shadow-primary/25">
            Ver Projetos <ArrowRight size={18} />
          </a>
          
          <div className="flex gap-4 items-center">
            {[
              { icon: Github, url: profileData.social.github },
              { icon: Linkedin, url: profileData.social.linkedin },
              { icon: Mail, url: `mailto:${profileData.social.email}` },
            ].map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-primary hover:border-primary/50 transition">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}