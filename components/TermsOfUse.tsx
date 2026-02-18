
import React, { useEffect } from 'react';

interface TermsOfUseProps {
  onNavigate: (view: 'landing' | 'terms') => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onNavigate }) => {
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
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Termos de <span className="gradient-text">Uso</span></h1>
        <p className="text-slate-500 mono text-sm uppercase tracking-widest">Última atualização: 12 de fevereiro de 2026</p>
      </div>

      <div className="space-y-10 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou utilizar a plataforma Velaris.code, o usuário declara ter lido, compreendido e concordado com estes Termos de Uso e com nossa Política de Privacidade. Caso não concorde, não deverá utilizar o serviço.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">2. Descrição do Serviço</h2>
          <p>
            A plataforma Velaris.code oferece recursos relacionados à codificação, incluindo editor de código, armazenamento de projetos, colaboração, execução de scripts e conteúdos educacionais. Os serviços podem ser alterados, suspensos ou descontinuados a qualquer momento, sem aviso prévio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">3. Cadastro do Usuário</h2>
          <p className="mb-4">Para acessar determinadas funcionalidades, poderá ser necessário criar uma conta. O usuário concorda em:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Fornecer informações verdadeiras e atualizadas;</li>
            <li>Manter a confidencialidade de suas credenciais;</li>
            <li>Ser responsável por todas as atividades realizadas em sua conta.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">4. Uso Permitido</h2>
          <p className="mb-4">O usuário compromete-se a utilizar a plataforma apenas para fins legais e de acordo com estes Termos, sendo proibido:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Inserir códigos maliciosos, vírus ou scripts prejudiciais;</li>
            <li>Violar direitos autorais ou de propriedade intelectual;</li>
            <li>Tentar acessar áreas restritas do sistema;</li>
            <li>Utilizar a plataforma para atividades ilícitas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">5. Conteúdo do Usuário</h2>
          <p>
            Todo código, texto, arquivo ou material enviado pelo usuário permanece de sua propriedade. Entretanto, ao publicá-lo na plataforma Velaris.code, o usuário concede licença não exclusiva para hospedagem, exibição e compartilhamento dentro do sistema.
          </p>
          <p className="mt-2 font-bold text-white italic">O usuário é integralmente responsável pelo conteúdo que publica.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">6. Propriedade Intelectual da Plataforma</h2>
          <p>
            Todos os elementos da plataforma, incluindo design, logotipos, funcionalidades e código-fonte proprietário, são de titularidade de Velaris.code ou licenciados a ela, sendo protegidos por leis de propriedade intelectual.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">7. Suspensão ou Encerramento de Conta</h2>
          <p>
            A Velaris.code poderá suspender ou encerrar contas que violem estes Termos, sem aviso prévio, especialmente em casos de uso abusivo, ilegal ou que comprometa a segurança do sistema.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">8. Limitação de Responsabilidade</h2>
          <p className="mb-4">A plataforma é fornecida “como está”, sem garantias de disponibilidade contínua ou ausência de erros. A Velaris.code não se responsabiliza por:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Perda de dados;</li>
            <li>Danos indiretos decorrentes do uso;</li>
            <li>Conteúdos inseridos por terceiros.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">9. Links de Terceiros</h2>
          <p>
            O site pode conter links para serviços externos. A Velaris.code não se responsabiliza pelo conteúdo, políticas ou práticas desses sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">10. Natureza Digital da Empresa</h2>
          <p>
            A Velaris.code é uma empresa digital e opera exclusivamente online, não possuindo sede física para atendimento presencial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">11. Privacidade e Dados</h2>
          <p>
            O tratamento de dados pessoais segue nossa Política de Privacidade e a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">12. Legislação Aplicável</h2>
          <p>
            Estes Termos serão regidos pelas leis da República Federativa do Brasil.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-sky-400 mono mb-4 uppercase tracking-tight">13. Contato</h2>
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:velariscode@gmail.com" className="text-sky-400 hover:underline">velariscode@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
