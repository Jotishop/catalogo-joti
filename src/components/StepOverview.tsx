import React from 'react';
import { Layers, Shirt, Palette, Ruler, Calculator, ArrowRight } from 'lucide-react';

export const StepOverview: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Escolha o Tecido',
      desc: 'Poliéster para operações intensas ou Algodão para conforto térmico.',
      href: '#tecidos',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Modelo da Estampa',
      desc: 'Modelo 1 (só no peito) ou Modelo 2 (peito + costas destacadas).',
      href: '#modelos',
      icon: Shirt,
    },
    {
      num: '03',
      title: 'Cor da Equipe',
      desc: 'Cartela com 20 cores oficiais com contraste correto de tinta.',
      href: '#cores',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Grade de Medidas',
      desc: 'Tamanhos do P ao XGG com guia prático de altura e largura.',
      href: '#medidas',
      icon: Ruler,
    },
    {
      num: '05',
      title: 'Preço & Quantidade',
      desc: 'Quanto maior a quantidade, menor o valor por peça. Simule na hora.',
      href: '#calculadora',
      icon: Calculator,
    },
  ];

  return (
    <section id="passo-a-passo" className="py-12 sm:py-16 bg-[#0B132B] text-white border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300 border border-slate-700 bg-slate-900/80 px-3 py-1 rounded">
            Jornada do Comprador
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
            Como montar o uniforme da sua empresa em 5 passos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Entenda cada etapa antes de fechar o pedido. Sem complicação e com total transparência técnica e comercial.
          </p>
        </div>

        {/* 5 Steps Interactive Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={s.num}
                href={s.href}
                className="bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs font-black text-slate-400 group-hover:text-white transition-colors">
                      ETAPA {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-[#1E293B] flex items-center justify-center text-slate-300 border border-slate-700 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-white leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-white">
                  <span>Conferir</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
