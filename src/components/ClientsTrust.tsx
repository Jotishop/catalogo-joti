import React from 'react';
import { Building2 } from 'lucide-react';

export const ClientsTrust: React.FC = () => {
  const placeholderPartners = [
    { segment: 'Operador Logístico Itajaí', tag: 'Logística Portuária' },
    { segment: 'Empresa de Facilities & Portaria', tag: 'Terceirização' },
    { segment: 'Distribuidora Regional SC', tag: 'Armazenagem' },
    { segment: 'Conservação e Limpeza B2B', tag: 'Serviços' },
    { segment: 'Transportes & Cargas', tag: 'Logística' },
    { segment: 'Segurança & Vigilância Privada', tag: 'Controle de Acesso' },
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Confiança Corporativa
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Quem já uniformizou com a JOTI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Atendemos empresas com equipes de 10 a mais de 500 colaboradores em Itajaí, Navegantes e todo o litoral catarinense.
          </p>
        </div>

        {/* Logo Cards / Placeholders Grid in Black & White */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {placeholderPartners.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[110px] hover:border-slate-500 hover:bg-slate-100 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-black shadow-2xs">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900 mt-2 leading-tight">
                {item.segment}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 max-w-xl mx-auto">
          <span>
            Sua empresa também precisa padronizar uniformes com reposição garantida?{' '}
            <a href="#calculadora" className="text-[#0B132B] font-bold underline">
              Calcule seu pedido agora
            </a>.
          </span>
        </div>
      </div>
    </section>
  );
};
