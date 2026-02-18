
import React from 'react';
import { View } from '../App';

interface HeaderProps {
  isScrolled: boolean;
  onNavigate: (view: View) => void;
  currentView: View;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigate, currentView }) => {
  const handleHomeClick = () => {
    if (currentView !== 'landing') {
      onNavigate('landing');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Voltar ao início"
        >
          <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center font-bold text-slate-950 mono group-hover:rotate-12 transition-transform">
            V
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white mono">
            VELARIS.CODE
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
          <button
            onClick={handleHomeClick}
            className={`hover:text-sky-400 transition-colors uppercase tracking-widest text-sm font-medium focus:outline-none ${currentView === 'landing' ? 'text-sky-400' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-sky-400 transition-colors uppercase tracking-widest text-sm font-medium focus:outline-none"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-sky-400 transition-colors uppercase tracking-widest text-sm font-medium focus:outline-none"
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-sky-400 transition-colors uppercase tracking-widest text-sm font-medium focus:outline-none border-b-2 border-transparent hover:border-sky-400 pb-1 transition-all"
          >
            Contato
          </button>
        </nav>

        {/* Botão Principal de Conversão */}
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] focus:outline-none"
        >
          Iniciar Projeto
        </button>
      </div>
    </header>
  );
};

export default Header;
