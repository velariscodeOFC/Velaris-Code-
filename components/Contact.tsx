
import React, { useState, useEffect } from 'react';

interface ContactProps {
  preSelectedService?: string;
}

const Contact: React.FC<ContactProps> = ({ preSelectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Simples (Landing Page)',
    message: ''
  });

  const WHATSAPP_NUMBER = "5581996776328";
  const INSTAGRAM_URL = "https://www.instagram.com/velariscode/";
  const EMAIL_ADDRESS = "velariscode@gmail.com";

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Olá Velaris! 🚀
Me chamo *${formData.name}* (${formData.email}).
Gostaria de solicitar um orçamento para: *${formData.service}*.

*Requisitos:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Highlighted Contact Channels */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Instagram Card */}
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-slate-800 hover:border-pink-500/50 transition-all hover:-translate-y-2 flex flex-col items-center text-center shadow-xl hover:shadow-pink-500/10"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
              <i className="fab fa-instagram"></i>
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Instagram</h4>
            <p className="text-slate-400 text-sm mb-4">Siga @velariscode para novidades e insights técnicos.</p>
            <span className="text-pink-400 text-xs font-bold mono uppercase tracking-widest group-hover:underline">Acessar Perfil</span>
          </a>

          {/* WhatsApp Card */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-slate-800 hover:border-green-500/50 transition-all hover:-translate-y-2 flex flex-col items-center text-center shadow-xl hover:shadow-green-500/10"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-green-600 to-emerald-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h4 className="text-white font-bold text-lg mb-2">WhatsApp</h4>
            <p className="text-slate-400 text-sm mb-4">Atendimento direto com nossos desenvolvedores seniores.</p>
            <span className="text-green-400 text-xs font-bold mono uppercase tracking-widest group-hover:underline">Iniciar Conversa</span>
          </a>

          {/* Email Card */}
          <a 
            href={`mailto:${EMAIL_ADDRESS}`}
            className="group p-8 rounded-3xl bg-gradient-to-br from-sky-600/10 to-blue-600/10 border border-slate-800 hover:border-sky-500/50 transition-all hover:-translate-y-2 flex flex-col items-center text-center shadow-xl hover:shadow-sky-500/10"
          >
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="text-white font-bold text-lg mb-2">E-mail</h4>
            <p className="text-slate-400 text-sm mb-4">Ideal para solicitações formais e documentações de projeto.</p>
            <span className="text-sky-400 text-xs font-bold mono uppercase tracking-widest group-hover:underline">{EMAIL_ADDRESS}</span>
          </a>
        </div>

        {/* Form and Detailed Info Section */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Pronto para <span className="gradient-text">Codar?</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Transformamos sua visão em código de alta performance. Preencha o formulário ao lado e enviaremos um orçamento detalhado diretamente para o seu WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h5 className="text-white font-bold mb-4 mono text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                STATUS: DISPONÍVEL_PARA_PROJETOS
              </h5>
              <p className="text-slate-500 text-sm">
                Atualmente aceitando novos desafios para o próximo sprint. Prazo médio de resposta: <span className="text-white">2 horas</span>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl rounded-full"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Solicitar Orçamento &lt;FORJA/&gt;</h2>
              <p className="text-slate-500 text-sm">Os dados serão formatados e enviados via WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 mono font-bold">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="Ex: Alan Turing"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 mono font-bold">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 mono font-bold">Tipo de Projeto</label>
                <select 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Simples (Landing Page)">Simples (Landing Page)</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Institucional">Institucional</option>
                  <option value="Sistema Web Sob Medida">Sistema Web Sob Medida</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 mono font-bold">Mensagem / Requisitos</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-sky-500/25 uppercase tracking-widest flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  Enviar via WhatsApp &lt;POST /&gt;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
