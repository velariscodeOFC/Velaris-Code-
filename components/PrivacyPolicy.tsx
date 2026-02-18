
import React, { useEffect } from 'react';
import { View } from '../App';

interface PrivacyPolicyProps {
  onNavigate: (view: View) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6 py-32 max-w-4xl relative">
      {/* Botão para retornar */}
      <button 
        onClick={() => onNavigate('landing')}
        className="fixed top-24 right-6 md:right-12 w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all z-40 group shadow-lg"
        title="Voltar para a página inicial"
      >
        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Política de <span className="gradient-text">Privacidade</span></h1>
        <p className="text-slate-500 mono text-sm uppercase tracking-widest">Última atualização: 12 de fevereiro de 2026</p>
      </div>

      <div className="space-y-10 text-slate-300 leading-relaxed">
        <p>A presente Política de Privacidade descreve como a Velaris.code, plataforma digital, coleta, utiliza, armazena e protege as informações dos usuários que acessam o site.</p>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">1. Informações Coletadas</h2>
          <p className="mb-4">Mesmo sem cadastro ou login, podemos coletar algumas informações quando você utiliza o site, incluindo:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Dados fornecidos pelo usuário</h3>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Nome</li>
                <li>• E-mail</li>
                <li>• Informações em formulários</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Dados coletados automaticamente</h3>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Endereço IP e Navegador</li>
                <li>• Dispositivo utilizado</li>
                <li>• Páginas visitadas e Cookies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">2. Uso das Informações</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Melhorar a experiência do usuário</li>
            <li>Analisar desempenho e funcionamento do site</li>
            <li>Responder solicitações ou mensagens enviadas</li>
            <li>Garantir segurança e prevenir fraudes</li>
            <li>Cumprir obrigações legais</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">3. Google Analytics</h2>
          <p>
            Utilizamos o Google Analytics, serviço de análise fornecido pelo Google, que coleta dados de navegação para gerar relatórios estatísticos sobre uso da plataforma. O Google pode utilizar essas informações conforme sua própria política de privacidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">4. Compartilhamento de Dados</h2>
          <p className="mb-4">A Velaris.code não vende dados pessoais dos usuários. Os dados poderão ser compartilhados apenas quando necessário:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Com provedores de serviço que auxiliam na operação;</li>
            <li>Para cumprimento de obrigação legal ou ordem judicial;</li>
            <li>Para proteção de direitos da plataforma.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">5. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar a navegação, analisar tráfego e personalizar conteúdos. O usuário pode configurar o navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">6. Segurança das Informações</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">7. Direitos do Usuário (LGPD)</h2>
          <p className="mb-4">Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o usuário pode solicitar:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-none text-slate-400 text-sm">
            <li><span className="text-sky-500 mr-2">/</span> confirmação de tratamento</li>
            <li><span className="text-sky-500 mr-2">/</span> acesso aos dados</li>
            <li><span className="text-sky-500 mr-2">/</span> correção de dados</li>
            <li><span className="text-sky-500 mr-2">/</span> exclusão de dados</li>
            <li><span className="text-sky-500 mr-2">/</span> revogação de consentimento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">8. Retenção de Dados</h2>
          <p>
            Os dados serão armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">9. Links Externos</h2>
          <p>
            O site pode conter links para páginas externas. Não nos responsabilizamos pelas políticas de privacidade desses sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">10. Alterações desta Política</h2>
          <p>
            Esta Política poderá ser atualizada periodicamente. Recomendamos que o usuário revise esta página regularmente.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">11. Contato</h2>
          <p>
            Para dúvidas, solicitações ou questões relacionadas à privacidade: <a href="mailto:velariscode@gmail.com" className="text-sky-400 hover:underline">velariscode@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
