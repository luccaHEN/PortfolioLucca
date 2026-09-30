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
import ChatbotWidget from './components/ChatbotWidget'

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
      <div className="fixed inset-0 -z-10 bg-background bg-grid pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            x: [0, 50, 0, -50, 0],
            y: [0, 30, 60, 30, 0],
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[15%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-primary/20 opacity-60 blur-[100px]"
        />

      </div>
      
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}

export default App
