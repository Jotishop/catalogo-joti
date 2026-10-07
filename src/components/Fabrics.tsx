import React from 'react';
import { ASSETS } from '../assets';
import { CATALOG_COLORS } from '../data/catalog';
import { Check, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const Fabrics: React.FC = () => {
  return (
    <section id="tecidos" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Comparativo de Tecidos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
            Poliéster e Algodão: qual escolher?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Preço único por tecido em qualquer cor. Escolha de acordo com a rotina e o ambiente de trabalho da sua equipe.
          </p>
        </div>

        {/* Two Columns Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Poliéster */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={ASSETS.tecidoPoliester}
                  alt="Tecido Poliéster para uniformes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Alta Resistência Operacional
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-600" />
                    <h3 className="font-display text-2xl font-extrabold text-slate-900">
                      Poliéster
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-1">
                    Praticidade, secagem rápida e durabilidade
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Para que serve:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Ideal para operações que exigem lavagens frequentes e alta rotatividade. Excelente para equipes de limpeza, conservação, portaria, vigilância e logística pesada. Não amassa com facilidade, seca rápido e mantém a cor viva por muito tempo.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Principais vantagens:
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Secagem ultrarrápida pós-lavagem</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Resistente a desbotamento com o uso diário</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Excelente custo-benefício para equipes grandes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colors list snippet */}
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                20 Cores disponíveis:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CATALOG_COLORS.map((c) => (
                  <span
                    key={`poly-${c.id}`}
                    className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-slate-200 rounded-md text-[11px] font-medium text-slate-700"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-slate-300"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                    {c.code} {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Algodão */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={ASSETS.tecidoAlgodao}
                  alt="Tecido Algodão Penteado para uniformes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Máximo Conforto Térmico
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-amber-600" />
                    <h3 className="font-display text-2xl font-extrabold text-slate-900">
                      Algodão
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-1">
                    Fibra natural macia, fresca e respirável
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Para que serve:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Ideal para ambientes corporativos climatizados, recepção, supervisão, motoristas, liderança de equipe e atendimento ao cliente. Proporciona toque nobre, excelente respirabilidade e toque suave na pele durante toda a jornada.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Principais vantagens:
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Conforto térmico em dias quentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Toque suave e caimento premium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Apresentação elegante para atendimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colors list snippet */}
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                20 Cores disponíveis:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CATALOG_COLORS.map((c) => (
                  <span
                    key={`alg-${c.id}`}
                    className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-slate-200 rounded-md text-[11px] font-medium text-slate-700"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-slate-300"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                    {c.code} {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
