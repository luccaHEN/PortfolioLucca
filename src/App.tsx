import { useEffect } from 'react'
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
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center w-full">
      {/* Efeito de background gradiente elegante */}
      <div className="absolute top-0 -z-10 h-full w-full bg-slate-50 dark:bg-secondary">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/20 opacity-50 blur-[80px]"></div>
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
