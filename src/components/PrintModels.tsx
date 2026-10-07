import React from 'react';
import { ASSETS } from '../assets';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const PrintModels: React.FC = () => {
  return (
    <section id="modelos" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Modelos de Estampa em Uso Real
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
            Modelos de estampa vestidos por pessoas reais
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Estampa em serigrafia de alta resistência direto nas fibras do tecido. Sem adesivo, sem borda plástica e sem fundo branco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Modelo 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="relative aspect-square sm:aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={ASSETS.modelo1}
                  alt="Modelo 1 - Só frente 10x10cm no peito esquerdo usado por trabalhador"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Modelo 1 • Só Frente (10×10 cm)
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                    Modelo 1 — Só Frente
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-200 text-slate-700 rounded-md">
                    10 x 10 cm
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Estampa aplicada no peito esquerdo direto no tecido da camiseta. Costas completamente lisas. Discreto, elegante e ideal para portaria, recepção e escritório.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Frente:</strong> Estampa no peito esquerdo (10 x 10 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Costas:</strong> Totalmente lisa (sem estampa)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tinta com toque suave, não racha e não descola</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">A partir de R$ 29,90/peça</span>
              <a
                href="#calculadora"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                Simular Modelo 1 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Modelo 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="relative aspect-square sm:aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={ASSETS.modelo2}
                  alt="Modelo 2 - Frente 10x10cm e Costas 25x17cm usado por trabalhador"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Modelo 2 • Frente + Costas (25×17 cm)
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                    Modelo 2 — Frente + Costas
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md">
                    25 x 17 cm nas costas
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Estampa no peito esquerdo (10 x 10 cm) e estampa ampla nas costas (25 x 17 cm). Impressão serigráfica limpa, sem remendo branco ou bordas plásticas indesejadas.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Frente:</strong> Estampa no peito esquerdo (10 x 10 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Costas:</strong> Estampa horizontal nítida (25 x 17 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Alta visibilidade para armazéns, vigilância e logística</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">A partir de R$ 34,90/peça</span>
              <a
                href="#calculadora"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                Simular Modelo 2 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
