import { profileData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 py-8 mt-12 bg-transparent backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {profileData.name}. Todos os direitos reservados.
        </p>
        <p className="text-sm font-mono text-slate-400 dark:text-slate-500">
          Desenvolvido com <span className="text-primary animate-pulse inline-block">♥</span> e React.
        </p>
      </div>
    </footer>
  );
}