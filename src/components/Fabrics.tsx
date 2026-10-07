import React from 'react';
import { ASSETS } from '../assets';
import { CATALOG_COLORS } from '../data/catalog';
import { Check, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const Fabrics: React.FC = () => {
  return (
    <section id="tecidos" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Etapa 01 • Especificação Têxtil
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Poliéster e Algodão: qual o ideal para sua equipe?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Preço único por tecido em qualquer cor. Avalie a rotina e o ambiente de trabalho dos seus funcionários.
          </p>
        </div>

        {/* Two Columns Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Poliéster */}
          <div className="bg-slate-50 rounded-2xl border border-slate-300 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={ASSETS.tecidoPoliester}
                  alt="Tecido Poliéster para uniformes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Alta Durabilidade Operacional
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-950">
                    Poliéster
                  </h3>
                  <p className="text-xs font-bold text-[#0B132B] uppercase tracking-wider mt-1">
                    Praticidade, secagem rápida e alta resistência
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Para que serve:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Ideal para operações que exigem lavagens frequentes e alta rotatividade. Excelente para equipes de limpeza, conservação, portaria, vigilância e logística pesada. Não amassa com facilidade, seca rápido e mantém a cor viva por muito tempo.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Principais vantagens:
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                      <span>Secagem ultrarrápida pós-lavagem</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                      <span>Resistente a desbotamento com o uso diário</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                      <span>Excelente custo-benefício para equipes grandes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colors list snippet */}
            <div className="p-5 bg-white border-t border-slate-200">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                Disponível nas 20 cores oficiais:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CATALOG_COLORS.slice(0, 10).map((c) => (
                  <span
                    key={`poly-${c.id}`}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[10px] font-medium text-slate-700"
                  >
                    <span
                      className="w-2 h-2 rounded-full border border-slate-300"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                    {c.name}
                  </span>
                ))}
                <span className="text-[10px] text-slate-500 font-bold self-center ml-1">+10 cores</span>
              </div>
            </div>
          </div>

          {/* Column 2: Algodão */}
          <div className="bg-slate-50 rounded-2xl border border-slate-300 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={ASSETS.tecidoAlgodao}
                  alt="Tecido Algodão Penteado para uniformes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Máximo Conforto Térmico
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-950">
                    Algodão
                  </h3>
                  <p className="text-xs font-bold text-[#0B132B] uppercase tracking-wider mt-1">
                    Fibra natural macia, fresca e respirável
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Para que serve:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Ideal para ambientes corporativos climatizados, recepção, supervisão, motoristas, liderança de equipe e atendimento ao cliente. Proporciona toque nobre, excelente respirabilidade e sensação suave durante toda a jornada.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Principais vantagens:
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                      <span>Conforto térmico em qualquer clima</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                      <span>Toque suave e caimento elegante</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                      <span>Apresentação premium para atendimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colors list snippet */}
            <div className="p-5 bg-white border-t border-slate-200">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                Disponível nas 20 cores oficiais:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CATALOG_COLORS.slice(0, 10).map((c) => (
                  <span
                    key={`alg-${c.id}`}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[10px] font-medium text-slate-700"
                  >
                    <span
                      className="w-2 h-2 rounded-full border border-slate-300"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                    {c.name}
                  </span>
                ))}
                <span className="text-[10px] text-slate-500 font-bold self-center ml-1">+10 cores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
