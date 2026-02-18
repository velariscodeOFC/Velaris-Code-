
import React, { useState } from 'react';

interface ServiceModel {
  name: string;
  image: string;
  tag: string;
}

interface ServiceItem {
  id: string;
  title: string;
  formValue: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  features: string[];
  priceRange: string;
  models: ServiceModel[];
}

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const services: ServiceItem[] = [
  {
    id: "simple",
    title: "Sites Simples / Landing Pages",
    formValue: "Simples (Landing Page)",
    description: "Landing pages otimizadas para conversão e sites one-page para lançamentos rápidos.",
    details: "Ideal para profissionais liberais, lançamentos de produtos digitais ou validação de ideias de negócio. Focado em velocidade e call-to-action.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
    features: ["Responsividade", "SEO Básico", "Design Exclusivo", "Integração WhatsApp"],
    priceRange: "R$ 600,00 - R$ 1.500,00",
    models: [
      { name: "SaaS Hero", image: "https://picsum.photos/seed/saas/400/300", tag: "Tech" },
      { name: "Portfolio Minimalist", image: "https://picsum.photos/seed/port/400/300", tag: "Clean" },
      { name: "App Launchpad", image: "https://picsum.photos/seed/app/400/300", tag: "Mobile First" }
    ]
  },
  {
    id: "commercial",
    title: "Comercial / E-commerce",
    formValue: "E-commerce",
    description: "Plataformas de vendas essenciais com foco em conversão e facilidade de uso.",
    details: "Soluções de entrada para e-commerce, integrando carrinhos de compras e pagamentos facilitados para pequenos e médios lojistas.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
    ),
    features: ["Checkout Rápido", "Catálogo Simples", "Cálculo de Frete", "Painel de Pedidos"],
    priceRange: "R$ 1.500,00 - R$ 3.000,00",
    models: [
      { name: "Urban Store", image: "https://picsum.photos/seed/store1/400/300", tag: "Retail" },
      { name: "Digital Marketplace", image: "https://picsum.photos/seed/store2/400/300", tag: "Platform" },
      { name: "Boutique Flow", image: "https://picsum.photos/seed/store3/400/300", tag: "Luxury" }
    ]
  },
  {
    id: "institutional",
    title: "Institucional Premium",
    formValue: "Institucional",
    description: "Presença digital de alta autoridade para corporações e grandes marcas.",
    details: "Projetos robustos que comunicam valores e credibilidade em escala global. Inclui arquitetura de informação complexa e design de experiência avançado.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
    ),
    features: ["Blog Estruturado", "SEO Enterprise", "Multi-idioma Native", "UX Research"],
    priceRange: "R$ 3.000,00 - R$ 10.000,00",
    models: [
      { name: "Corporate Global", image: "https://picsum.photos/seed/corp1/400/300", tag: "Enterprise" },
      { name: "Creative Agency", image: "https://picsum.photos/seed/corp2/400/300", tag: "Modern" },
      { name: "Consultancy Pro", image: "https://picsum.photos/seed/corp3/400/300", tag: "Trust" }
    ]
  },
  {
    id: "apps",
    title: "Serviços e Apps",
    formValue: "Sistema Web Sob Medida",
    description: "Aplicações sob medida (SaaS), dashboards e automação de processos complexos.",
    details: "Desenvolvimento Fullstack de aplicações web interativas. Desde MVPs para startups até sistemas internos de automação industrial.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
    ),
    features: ["Arquitetura Escalável", "Cloud Native", "API Restful", "Auth & Segurança"],
    priceRange: "R$ 15.000,00 - R$ 50.000,00",
    models: [
      { name: "Admin Dashboard", image: "https://picsum.photos/seed/app1/400/300", tag: "Management" },
      { name: "Social SaaS", image: "https://picsum.photos/seed/app2/400/300", tag: "Social" },
      { name: "Finance Hub", image: "https://picsum.photos/seed/app3/400/300", tag: "Fintech" }
    ]
  }
];

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const closeModal = () => setSelectedService(null);

  const handleChooseService = () => {
    if (selectedService && onSelectService) {
      onSelectService(selectedService.formValue);
      closeModal();
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sky-500 font-bold tracking-widest uppercase mb-4 mono">// Nosso Arsenal (Forjas)</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white">Soluções Adaptadas</h3>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Explore nossas modalidades de forja digital. Clique para ver detalhes e solicitar o seu.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedService(service)}
            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all group cursor-pointer hover:-translate-y-2"
          >
            <div className="mb-6 text-sky-400 transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
            <div className="text-sky-500 text-xs mono font-bold mb-4 uppercase tracking-tighter">
              A partir de {service.priceRange.split('-')[0]}
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">
              {service.description}
            </p>
            <button className="text-sky-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              Ver Detalhes <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes do Serviço */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            <div className="sticky top-0 bg-slate-900/80 backdrop-blur-md p-6 border-b border-slate-800 flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <div className="text-sky-400">{selectedService.icon}</div>
                <h3 className="text-2xl font-black text-white">{selectedService.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <div className="mb-8">
                    <h4 className="text-sky-500 text-xs font-bold mono uppercase mb-4 tracking-widest">Description.info</h4>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {selectedService.details}
                    </p>
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <p className="text-slate-400 text-xs uppercase mono mb-1">Média de Investimento</p>
                      <p className="text-2xl font-black text-white">{selectedService.priceRange}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sky-500 text-xs font-bold mono uppercase mb-4 tracking-widest">Stack.features</h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                          <span className="w-5 h-5 bg-sky-500/10 text-sky-500 rounded flex items-center justify-center text-[10px]">✔</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="text-sky-500 text-xs font-bold mono uppercase mb-6 tracking-widest">Project.templates</h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {selectedService.models.map((model, i) => (
                      <div key={i} className="group/card relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                        <img 
                          src={model.image} 
                          alt={model.name} 
                          className="w-full aspect-[4/3] object-cover opacity-60 group-hover/card:opacity-90 transition-opacity grayscale group-hover/card:grayscale-0 duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <span className="inline-block px-2 py-0.5 rounded bg-sky-600 text-[10px] font-bold text-white mb-2 mono">
                            {model.tag}
                          </span>
                          <h5 className="text-white font-bold">{model.name}</h5>
                        </div>
                      </div>
                    ))}
                    <div className="border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-slate-600">
                      <p className="text-sm font-bold mono">CUSTOM_DESIGN.ts</p>
                      <p className="text-xs mt-2">Criamos modelos exclusivos sob demanda para sua necessidade.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <button 
                  onClick={handleChooseService}
                  className="px-12 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-sky-500/25 uppercase tracking-widest text-center"
                >
                  Selecionar Este Serviço & Orçar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
