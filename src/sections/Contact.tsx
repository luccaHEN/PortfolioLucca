import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);

    try {
      // Integração real usando o FormSubmit para o e-mail cadastrado em profileData
      await fetch(`https://formsubmit.co/ajax/${profileData.social.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset(); // Limpa os campos do formulário
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24 mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">04.</span> Contato
          <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Vamos trabalhar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">juntos.</span></h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
            Estou sempre aberto a novas oportunidades, projetos desafiadores e parcerias incríveis. 
            Se você tem uma vaga, uma ideia ou apenas quer dar um "oi", adoraria conversar!
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">E-mail</p>
                <a href={`mailto:${profileData.social.email}`} className="text-lg md:text-xl font-semibold hover:text-primary transition-colors">
                  {profileData.social.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Localização</p>
                <p className="text-lg md:text-xl font-semibold">Brasil</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href={profileData.social.github} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Github size={20} />
            </a>
            <a href={profileData.social.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-2xl">
            {/* Tela de Sucesso que aparece por cima do formulário */}
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 z-10 glass flex flex-col items-center justify-center text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl"
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                  <CheckCircle2 size={64} className="text-green-500 mb-6 mx-auto" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-3 text-slate-800 dark:text-white">Mensagem Enviada!</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">Entrarei em contato o mais rápido possível.</p>
              </motion.div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Seu Nome</label>
              <input type="text" id="name" name="name" required className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Como devo te chamar?" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Seu E-mail</label>
              <input type="email" id="email" name="email" required className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="seu@email.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Sua Mensagem</label>
              <textarea id="message" name="message" required rows={4} className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-slate-900 dark:text-white" placeholder="Como posso ajudar você?"></textarea>
            </div>

            <button disabled={isSubmitting} className="group flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4">
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Enviar Mensagem <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}