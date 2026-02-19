
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [codeLine, setCodeLine] = useState(0);
  const codeSnippets = [
    "const project = new VelarisProject('DreamSite');",
    "project.setScalability(true);",
    "project.setSecurity('Level-10');",
    "await project.deploy();",
    "// Success! Your business is online."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeLine(prev => (prev + 1) % (codeSnippets.length + 5));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Luzes de fundo para profundidade */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-900/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-center text-center md:block md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-800 text-sky-400 text-xs font-bold mb-6 mono uppercase tracking-widest">
            &lt; Ready to Code /&gt;
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Construindo o <span className="gradient-text">Futuro Digital</span> do seu Negócio.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-lg">
            Da concepção à implantação. Transformamos ideias complexas em experiências web fluidas, seguras e de alta performance no código mais puro.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-sky-500/20 uppercase tracking-widest"
          >
            Ver Arsenal
          </button>
        </div>

        <div className="relative w-full max-w-lg mx-auto md:max-w-none md:mx-0">
          <div className="bg-[#020617]/90 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-sky-900/20">
            <div className="bg-slate-900/50 px-4 py-2 flex gap-2 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 text-xs text-slate-500 mono">VelarisEngine.ts</div>
            </div>
            <div className="p-8 mono text-sm md:text-base min-h-[300px]">
              <div className="flex gap-4 mb-2">
                <span className="text-slate-700 select-none">1</span>
                <span className="text-sky-400">import</span> <span className="text-white">{`{ Development }`}</span> <span className="text-sky-400">from</span> <span className="text-sky-500">'@velaris/core'</span>;
              </div>
              <div className="flex gap-4 mb-2">
                <span className="text-slate-700 select-none">2</span>
                <span>&nbsp;</span>
              </div>
              {codeSnippets.map((line, idx) => (
                <div key={idx} className={`flex gap-4 mb-2 transition-all duration-500 ${idx > codeLine ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                  <span className="text-slate-700 select-none">{idx + 3}</span>
                  <span className={line.startsWith('//') ? 'text-slate-500 italic' : 'text-sky-300'}>
                    {line}
                    {idx === codeLine && <span className="inline-block w-2 h-5 bg-sky-500 ml-1 cursor-blink"></span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute -top-6 -right-6 p-4 bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-lg shadow-xl hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center border border-sky-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">System Uptime</p>
                <p className="font-bold text-sky-400 uppercase tracking-tight">99.9% STABLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
