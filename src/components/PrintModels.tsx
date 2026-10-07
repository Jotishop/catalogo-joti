import React from 'react';
import { ASSETS } from '../assets';
import { Check, ArrowRight } from 'lucide-react';

export const PrintModels: React.FC = () => {
  return (
    <section id="modelos" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-white px-3 py-1 rounded border border-slate-300">
            Etapa 02 • Posicionamento da Estampa
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Escolha o modelo de estampa da sua empresa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Estampa em serigrafia de alta resistência aplicada direto nas fibras do tecido. Sem adesivo, sem borda plástica e sem fundo branco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Modelo 1 */}
          <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-slate-400 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-square sm:aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={ASSETS.modelo1}
                  alt="Modelo 1 - Só frente 10x10cm no peito esquerdo usado por trabalhador"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-slate-950 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Modelo 1 • Só Frente (10×10 cm)
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                    Modelo 1 — Só Frente
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-800 rounded border border-slate-200">
                    10 x 10 cm peito
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Estampa aplicada no peito esquerdo diretamente no tecido da camiseta. Costas completamente lisas. Discreto, elegante e ideal para portaria, recepção e escritório.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                    <span><strong>Frente:</strong> Estampa no peito esquerdo (10 x 10 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                    <span><strong>Costas:</strong> Totalmente lisa (sem estampa)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                    <span>Tinta com toque suave, não racha e não descola</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">A partir de R$ 29,90/peça</span>
              <a
                href="#calculadora"
                className="text-xs font-bold text-[#0B132B] hover:text-blue-900 flex items-center gap-1"
              >
                Simular este modelo <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Modelo 2 */}
          <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-slate-400 transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative aspect-square sm:aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={ASSETS.modelo2}
                  alt="Modelo 2 - Frente 10x10cm e Costas 25x17cm usado por trabalhador"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-slate-950 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Modelo 2 • Frente + Costas (25×17 cm)
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                    Modelo 2 — Frente + Costas
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-900 text-white rounded">
                    25 x 17 cm nas costas
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Estampa no peito esquerdo (10 x 10 cm) somada à identificação ampla nas costas (25 x 17 cm). Impressão serigráfica limpa, sem remendo branco ou bordas plásticas indesejadas.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                    <span><strong>Frente:</strong> Estampa no peito esquerdo (10 x 10 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                    <span><strong>Costas:</strong> Estampa horizontal nítida (25 x 17 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                    <span>Alta visibilidade para armazéns, vigilância e logística</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">A partir de R$ 34,90/peça</span>
              <a
                href="#calculadora"
                className="text-xs font-bold text-[#0B132B] hover:text-blue-900 flex items-center gap-1"
              >
                Simular este modelo <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
