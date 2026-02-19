
import React from 'react';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const WHATSAPP_NUMBER = "5581996776328";

  const scrollToTop = () => {
    onNavigate('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    onNavigate('landing');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button onClick={scrollToTop} className="flex items-center gap-2 mb-6 group focus:outline-none">
              <img src="/logo.png" alt="Velaris Code Logo" className="w-8 h-8 rounded object-cover group-hover:rotate-6 transition-transform" />
              <span className="text-2xl font-extrabold text-white mono">VELARIS.CODE</span>
            </button>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm">
              Engenharia de software moderna para empresas que buscam o próximo nível de eficiência digital. Do Brasil para o mundo.
            </p>
            <div className="flex gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:text-sky-400 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/velariscode/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:text-sky-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 mono uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><button onClick={scrollToTop} className="hover:text-white transition-colors focus:outline-none">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors focus:outline-none text-left">Serviços</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors focus:outline-none text-left">Sobre Nós</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors focus:outline-none text-left">Contato</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 mono uppercase tracking-widest text-sm">Suporte</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors focus:outline-none text-left">Privacidade</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors focus:outline-none text-left">Termos de Uso</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs mono">
            © {new Date().getFullYear()} VELARIS.CODE WEB DEV. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-slate-600 mono">
            <span>Lat: -8.0476 | Long: -34.8770</span>
            <span className="text-sky-900">v2.1.0-stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
