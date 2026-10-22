import React from 'react';
import { Building2, Truck, Shield, Sparkles, Factory, PackageCheck } from 'lucide-react';

export const ClientsTrust: React.FC = () => {
  const placeholderPartners = [
    { segment: 'Operadores Portuários', tag: 'Logística & Cargas Itajaí', icon: Truck },
    { segment: 'Empresas de Facilities', tag: 'Limpeza & Portaria B2B', icon: Sparkles },
    { segment: 'Armazéns & Galpões', tag: 'Centros de Distribuição SC', icon: PackageCheck },
    { segment: 'Segurança & Vigilância', tag: 'Controle de Acesso Corporativo', icon: Shield },
    { segment: 'Indústrias & Oficinas', tag: 'Produção & Manutenção', icon: Factory },
    { segment: 'Prestadores de Serviços', tag: 'Equipes Externas & Campo', icon: Building2 },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Confiança & Segmentos Atendidos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Quem já uniformizou com a JOTI em Itajaí e região
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Atendemos empresas terceirizadas, logísticas e industriais com equipes a partir de 10 peças e reposição rápida contínua.
          </p>
        </div>

        {/* Cards dos Segmentos com Ícones Específicos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {placeholderPartners.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-300 rounded-xl p-4 flex flex-col items-center justify-between text-center min-h-[125px] hover:border-slate-500 hover:bg-slate-100/80 transition-all group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-black group-hover:scale-105 transition-all shadow-2xs">
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-950 mt-2 leading-tight">
                    {item.segment}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    {item.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 max-w-xl mx-auto">
          <span>
            Sua empresa também precisa padronizar uniformes com reposição garantida?{' '}
            <a href="#calculadora" className="text-[#0B132B] font-bold underline">
              Simule a quantidade do seu pedido
            </a>.
          </span>
        </div>
      </div>
    </section>
  );
};
