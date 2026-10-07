import React from 'react';
import { Truck, Sparkles, Shield, Building2, HardHat, Factory } from 'lucide-react';

export const SegmentsServed: React.FC = () => {
  const segments = [
    {
      title: 'Terceirização & Facilities',
      subtitle: 'Limpeza, conservação e portaria',
      desc: 'Alta rotatividade atendida com reposição rápida a partir de 10 peças.',
      icon: Sparkles,
    },
    {
      title: 'Logística & Armazéns',
      subtitle: 'Complexos portuários e centros de distribuição',
      desc: 'Uniformes com estampa de alta visibilidade nas costas para segurança na operação.',
      icon: Truck,
    },
    {
      title: 'Vigilância & Portaria',
      subtitle: 'Segurança privada e controle de acesso',
      desc: 'Padronização visual e seriedade na apresentação da equipe nos postos de serviço.',
      icon: Shield,
    },
    {
      title: 'Indústria & Manutenção',
      subtitle: 'Operações fabris e oficinas',
      desc: 'Tecido poliéster de alta resistência a lavagens constantes e esforço físico.',
      icon: Factory,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200">
            Foco Corporativo B2B
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
            Segmentos que atendemos em Itajaí e região
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Estruturado especificamente para compradores que precisam de fornecimento contínuo e sem dor de cabeça.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-950 text-base leading-snug">
                    {seg.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-800 mt-0.5">
                    {seg.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
