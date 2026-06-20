import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  // Ativa o dark mode por padrão baseado na preferência do sistema
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <main className="min-h-screen relative flex flex-col items-center w-full selection:bg-primary/30">
      {/* Background animado com "Orbes" flutuantes */}
      <div className="fixed inset-0 -z-10 bg-slate-50 dark:bg-secondary overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0, -50, 0],
            y: [0, 30, 60, 30, 0],
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[15%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-primary/20 opacity-60 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0, 50, 0],
            y: [0, -40, -80, -40, 0],
            scale: [1, 1.2, 1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-orange-500/15 opacity-60 blur-[100px]"
        />
      </div>
      
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
