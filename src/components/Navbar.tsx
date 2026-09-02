import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const THEMES = [
  { id: 'green', name: 'Neon Green', hex: '#39ff8f', oklch: '0.84 0.19 142', foreground: '0.13 0 0' },
  { id: 'purple', name: 'Cyber Purple', hex: '#b026ff', oklch: '0.65 0.3 300', foreground: '0.98 0 0' },
  { id: 'blue', name: 'Electric Blue', hex: '#00d2ff', oklch: '0.75 0.18 240', foreground: '0.13 0 0' },
  { id: 'orange', name: 'Sunset Orange', hex: '#ff5e00', oklch: '0.65 0.25 35', foreground: '0.98 0 0' },
  { id: 'pink', name: 'Hot Pink', hex: '#ff007f', oklch: '0.65 0.28 350', foreground: '0.98 0 0' },
];

function getContrastForeground(hex: string) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? '0.13 0 0' : '0.98 0 0';
}

/** Lightweight: updates CSS vars only, no React state, no re-render */
function previewColor(hex: string) {
  const root = document.documentElement;
  root.style.setProperty('--primary', hex);
  root.style.setProperty('--primary-foreground', `oklch(${getContrastForeground(hex)})`);
  root.style.setProperty('--accent', hex);
  root.style.setProperty('--ring', `color-mix(in srgb, ${hex} 50%, transparent)`);
  root.style.setProperty('--theme-glow', `color-mix(in srgb, ${hex} 35%, transparent)`);
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  const paletteRef = useRef<HTMLDivElement>(null);
  const throttleRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setShowPalette(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /** Called on every pixel drag — zero React re-renders, pure DOM */
  const handleColorInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const hex = e.currentTarget.value;
    previewColor(hex);

    // Throttle 3D scene updates to ~15fps max during drag
    const now = Date.now();
    if (now - throttleRef.current > 66) {
      throttleRef.current = now;
      window.dispatchEvent(new CustomEvent('theme-change', { detail: hex }));
    }
  }, []);

  /** Called once on release — commits to React state + localStorage */
  const handleColorCommit = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    const customTheme = {
      id: 'custom',
      name: 'Personalizado',
      hex,
      oklch: '',
      foreground: getContrastForeground(hex),
    };
    previewColor(hex);
    setActiveTheme(customTheme);
    localStorage.setItem('portfolio-theme', 'custom');
    localStorage.setItem('portfolio-custom-color', hex);
    window.dispatchEvent(new CustomEvent('theme-change', { detail: hex }));
  }, []);

  const applyTheme = useCallback((theme: typeof THEMES[0]) => {
    setActiveTheme(theme);
    localStorage.setItem('portfolio-theme', theme.id);

    const root = document.documentElement;
    root.style.setProperty('--primary', `oklch(${theme.oklch})`);
    root.style.setProperty('--primary-foreground', `oklch(${theme.foreground})`);
    root.style.setProperty('--accent', `oklch(${theme.oklch})`);
    root.style.setProperty('--ring', `oklch(${theme.oklch} / 50%)`);
    root.style.setProperty('--theme-glow', `oklch(${theme.oklch} / 35%)`);

    window.dispatchEvent(new CustomEvent('theme-change', { detail: theme.hex }));
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem('portfolio-theme');
    if (savedThemeId === 'custom') {
      const hex = localStorage.getItem('portfolio-custom-color') || '#39ff8f';
      const customTheme = {
        id: 'custom',
        name: 'Personalizado',
        hex,
        oklch: '',
        foreground: getContrastForeground(hex),
      };
      previewColor(hex);
      setActiveTheme(customTheme);
      window.dispatchEvent(new CustomEvent('theme-change', { detail: hex }));
    } else {
      const theme = THEMES.find(t => t.id === savedThemeId) || THEMES[0];
      applyTheme(theme);
    }
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-border py-4 shadow-lg shadow-black/5' : 'bg-transparent border-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative w-full">
        <a href="#" className="text-2xl font-bold tracking-tighter z-10">
          Lucca<span className="text-primary transition-colors duration-500">.dev</span>
        </a>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center font-medium text-sm">
          <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experiência</a>
          <a href="#skills" className="hover:text-primary transition-colors">Tecnologias</a>
        </nav>

        {/* Desktop Actions - Right */}
        <div className="hidden md:flex gap-6 items-center z-10">
          <div className="relative" ref={paletteRef}>
            <button 
              onClick={() => setShowPalette(!showPalette)} 
              aria-label="Escolher Cor" 
              className="p-2 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
              style={{ color: activeTheme.hex }}
            >
              <Palette size={18} />
            </button>

            <AnimatePresence>
              {showPalette && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 p-3 bg-card border border-border rounded-xl shadow-2xl flex flex-col gap-2 w-52"
                >
                  <p className="text-xs font-semibold text-muted-foreground mb-1 px-1">Selecione o Tema</p>
                  
                  {THEMES.map(theme => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        applyTheme(theme);
                        setShowPalette(false);
                      }}
                      className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-muted transition-colors text-sm text-left"
                    >
                      <div className="w-4 h-4 rounded-full shadow-sm shrink-0" style={{ backgroundColor: theme.hex }} />
                      <span className={activeTheme.id === theme.id ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                        {theme.name}
                      </span>
                    </button>
                  ))}

                  <div className="h-px w-full bg-border my-1" />
                  
                  <label className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-muted transition-colors text-sm text-left cursor-pointer group">
                    <div className="w-4 h-4 rounded-full shadow-sm relative overflow-hidden shrink-0 ring-1 ring-border group-hover:ring-foreground/50 transition-all">
                      <div className="w-full h-full" style={{ background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' }} />
                      <input 
                        type="color" 
                        defaultValue={activeTheme.id === 'custom' ? activeTheme.hex : '#39ff8f'}
                        onInput={handleColorInput}
                        onChange={handleColorCommit}
                        className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer opacity-0"
                      />
                    </div>
                    <span className={activeTheme.id === 'custom' ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                      Personalizado...
                    </span>
                  </label>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg" 
            style={{ boxShadow: `0 10px 15px -3px color-mix(in srgb, ${activeTheme.hex} 30%, transparent)` }}
          >
            Contato
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 z-10" aria-label="Abrir menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.header>
  );
}