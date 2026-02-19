
import React from 'react';

const TechStack: React.FC = () => {
  const techs: { name: string; level: number }[] = [];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-sky-500 font-bold tracking-widest uppercase mb-4 mono">&lt; Nosso Código /&gt;</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Especialistas em performance.</h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Não apenas arrastamos blocos. Escrevemos código limpo, testável e escalável. Utilizamos o estado da arte do ecossistema web para garantir que sua aplicação não seja apenas bonita, mas extremamente rápida. Nossa metodologia foca na arquitetura de software sólida e na entrega de valor contínuo.
          </p>

          {techs.length > 0 && (
            <div className="space-y-6">
              {techs.map((tech, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="mono text-white text-sm">{tech.name}</span>
                    <span className="mono text-sky-400 text-xs">{tech.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-1000"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 p-6 rounded-2xl bg-sky-500/5 border border-sky-500/10 backdrop-blur-sm">
            <p className="text-slate-300 text-sm italic mono">
              "Qualidade não é um ato, é um hábito. O código é a nossa poesia."
            </p>
          </div>
        </div>

        <div className="bg-slate-900/50 p-1 rounded-3xl border border-slate-800 shadow-inner overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
            alt="Ambiente de Programação e Código Fonte"
            className="rounded-[22px] opacity-60 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0 scale-105 hover:scale-100 object-cover w-full h-full min-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
