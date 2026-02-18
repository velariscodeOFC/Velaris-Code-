import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

export type View = 'landing' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('landing');
  const [preSelectedService, setPreSelectedService] = useState<string>('Simples');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelection = (serviceName: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
    }

    setPreSelectedService(serviceName);

    // Pequeno delay para garantir que o componente de landing renderizou antes do scroll
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen text-slate-200">
      <Header
        isScrolled={isScrolled}
        onNavigate={navigateTo}
        currentView={currentView}
      />

      <main>
        {currentView === 'landing' && (
          <>
            <section id="home" className="scroll-mt-20">
              <Hero onNavigate={navigateTo} />
            </section>

            <section id="services" className="py-24 bg-slate-900/10 backdrop-blur-[1px] border-y border-white/5 scroll-mt-20">
              <Services onSelectService={handleServiceSelection} />
            </section>

            <section id="about" className="py-24 scroll-mt-20">
              <TechStack />
            </section>

            <section id="contact" className="py-24 bg-sky-950/5 backdrop-blur-[1px] border-t border-white/5 scroll-mt-20">
              <Contact preSelectedService={preSelectedService} />
            </section>
          </>
        )}
        {currentView === 'terms' && (
          <TermsOfUse onNavigate={navigateTo} />
        )}
        {currentView === 'privacy' && (
          <PrivacyPolicy onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
