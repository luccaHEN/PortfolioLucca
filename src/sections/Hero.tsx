import { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { HeroScene } from '../components/HeroScene';
import { profileData } from '../data/portfolioData';

const STACK = ['TypeScript', 'React', 'Node.js', 'Spring Boot', 'PostgreSQL'];

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="bg-grid relative flex min-h-screen w-full items-center border-b border-border pt-16">
      {/* 3D scene, fixed full screen behind everything so it doesn't clip in the middle of the screen */}
      <div className={`fixed inset-0 -z-10 transition-opacity duration-700 ${isScrolled ? 'pointer-events-none opacity-30' : 'pointer-events-auto opacity-100'}`}>
        <HeroScene />
      </div>

      {/* readability fade so the 3D piece never fights the copy, esp. on mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/70 to-transparent md:from-background md:via-background/40 md:to-transparent"
      />

      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[8%] z-[1] h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-8 md:px-8 pointer-events-none">
        <div className="flex flex-col items-start gap-6 pointer-events-auto">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-sm text-primary">
              <span className="text-muted-foreground">{'>'}</span> oi, meu nome é
            </p>
            <h1 className="text-glow text-balance text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {profileData.name}
            </h1>
            <p className="text-pretty text-2xl font-medium text-muted-foreground sm:text-3xl">
              {profileData.role}
            </p>
          </div>

          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            {profileData.headline} Sou formado pelo {profileData.institution}, focado em construir aplicações escaláveis e interfaces premium focadas na experiência do usuário.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-card/50 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href="#projects" className="flex items-center justify-center h-11 gap-2 px-5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-0.5" />
            </a>
            <a href={profileData.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center h-11 gap-2 px-5 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
              Download CV
            </a>
          </div>

          <div className="mt-2 flex items-center gap-4 text-muted-foreground">
            <a
              href={profileData.social.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1.5 transition-colors hover:bg-card hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profileData.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1.5 transition-colors hover:bg-card hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profileData.social.email}`}
              aria-label="E-mail"
              className="rounded-md p-1.5 transition-colors hover:bg-card hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* spacer column reserved for the 3D scene on desktop */}
        <div className="hidden md:block pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}