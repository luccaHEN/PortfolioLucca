import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/80 dark:bg-secondary/80 backdrop-blur-md border-slate-200 dark:border-slate-800 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Lucca<span className="text-primary">.dev</span>
        </a>

        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experiência</a>
          <a href="#skills" className="hover:text-primary transition-colors">Tecnologias</a>
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a href="#contact" className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition shadow-lg shadow-primary/30">
            Contato
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.header>
  );
}