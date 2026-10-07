import React, { useState } from 'react';
import { PRICING_TABLE, PRICE_TIERS } from '../data/catalog';
import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const PricingTable: React.FC = () => {
  const [mobileFabricTab, setMobileFabricTab] = useState<'poliester' | 'algodao'>('poliester');

  return (
    <section id="precos" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Tabela Regressiva Oficial
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Tabela de valores por faixa de quantidade
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tamanhos do P ao GG com estampa já inclusa. Preço único por tecido, igual para camiseta branca e colorida.
          </p>
        </div>

        {/* ---------------- MOBILE-OPTIMIZED CARD VIEW ---------------- */}
        <div className="md:hidden space-y-4">
          {/* Mobile Fabric Selector Tabs */}
          <div className="p-1 bg-slate-100 rounded-xl flex items-center border border-slate-200">
            <button
              type="button"
              onClick={() => setMobileFabricTab('poliester')}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-lg transition-all text-center ${
                mobileFabricTab === 'poliester'
                  ? 'bg-[#0B132B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Poliéster
            </button>
            <button
              type="button"
              onClick={() => setMobileFabricTab('algodao')}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-lg transition-all text-center ${
                mobileFabricTab === 'algodao'
                  ? 'bg-[#0B132B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Algodão
            </button>
          </div>

          <div className="text-xs font-bold text-slate-600 px-1 flex items-center justify-between">
            <span>Preço por peça no {mobileFabricTab === 'poliester' ? 'Poliéster' : 'Algodão'}:</span>
            <span className="text-[11px] text-slate-500">P ao GG inclusos</span>
          </div>

          {/* Cards for each Tier on Mobile */}
          <div className="space-y-3">
            {PRICE_TIERS.map((tier, idx) => {
              const isPopular = tier.isPopular;
              const m1Price =
                mobileFabricTab === 'poliester'
                  ? PRICING_TABLE.poliester_m1[idx]
                  : PRICING_TABLE.algodao_m1[idx];
              const m2Price =
                mobileFabricTab === 'poliester'
                  ? PRICING_TABLE.poliester_m2[idx]
                  : PRICING_TABLE.algodao_m2[idx];

              return (
                <div
                  key={`mobile-tier-${tier.label}`}
                  className={`p-4 rounded-2xl border transition-all ${
                    isPopular
                      ? 'bg-slate-50 border-slate-900 shadow-xs ring-1 ring-slate-900'
                      : 'bg-white border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-black text-slate-950 text-base">
                        {tier.label} peças
                      </span>
                      {isPopular && (
                        <span className="inline-flex items-center text-[10px] uppercase font-bold bg-[#0B132B] text-white px-2 py-0.5 rounded">
                          Mais Escolhida
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Mín. {tier.min} pçs
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3">
                    {/* Modelo 1 */}
                    <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                      <div className="text-[10px] font-bold text-slate-500 uppercase">
                        Mod. 1 (só frente)
                      </div>
                      <div className="text-xl font-display font-black text-slate-950 mt-0.5">
                        R$ {m1Price.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-[10px] text-slate-400">10x10cm peito</div>
                    </div>

                    {/* Modelo 2 */}
                    <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                      <div className="text-[10px] font-bold text-slate-500 uppercase">
                        Mod. 2 (frente+costas)
                      </div>
                      <div className="text-xl font-display font-black text-slate-950 mt-0.5">
                        R$ {m2Price.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-[10px] text-slate-400">costas 25x17cm</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- DESKTOP TABLE VIEW ---------------- */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-300 shadow-xs bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0B132B] text-white text-xs uppercase tracking-wider font-extrabold">
                <th className="py-4 px-5">Faixa (peças)</th>
                <th className="py-4 px-4 bg-slate-900 text-slate-200 border-l border-slate-800">
                  Poliéster <span className="block text-[10px] text-slate-400 font-normal">Mod. 1 (só frente)</span>
                </th>
                <th className="py-4 px-4 bg-slate-900 text-slate-200">
                  Poliéster <span className="block text-[10px] text-slate-400 font-normal">Mod. 2 (frente+costas)</span>
                </th>
                <th className="py-4 px-4 bg-[#0B132B] text-white border-l border-slate-800">
                  Algodão <span className="block text-[10px] text-slate-400 font-normal">Mod. 1 (só frente)</span>
                </th>
                <th className="py-4 px-4 bg-[#0B132B] text-white">
                  Algodão <span className="block text-[10px] text-slate-400 font-normal">Mod. 2 (frente+costas)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-800">
              {PRICE_TIERS.map((tier, idx) => {
                const isPopular = tier.isPopular;
                const polyM1 = PRICING_TABLE.poliester_m1[idx].toFixed(2).replace('.', ',');
                const polyM2 = PRICING_TABLE.poliester_m2[idx].toFixed(2).replace('.', ',');
                const algM1 = PRICING_TABLE.algodao_m1[idx].toFixed(2).replace('.', ',');
                const algM2 = PRICING_TABLE.algodao_m2[idx].toFixed(2).replace('.', ',');

                return (
                  <tr
                    key={tier.label}
                    className={`transition-colors ${
                      isPopular
                        ? 'bg-slate-100 font-semibold text-slate-950 border-l-4 border-l-[#0B132B]'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-base text-slate-900">
                          {tier.label} peças
                        </span>
                        {isPopular && (
                          <span className="text-[10px] uppercase font-bold bg-[#0B132B] text-white px-2 py-0.5 rounded">
                            Mais Escolhida
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-4 font-display font-bold text-slate-950 border-l border-slate-100">
                      R$ {polyM1}
                    </td>

                    <td className="py-4 px-4 font-display font-bold text-slate-950">
                      R$ {polyM2}
                    </td>

                    <td className="py-4 px-4 font-display font-bold text-slate-950 border-l border-slate-100">
                      R$ {algM1}
                    </td>

                    <td className="py-4 px-4 font-display font-bold text-slate-950">
                      R$ {algM2}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Commercial Conditions Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-slate-900 block">Condições de Pagamento:</span>
            <p className="text-slate-600 leading-relaxed">
              Entrada na aprovação do mockup digital (via PIX ou transferência) e o saldo restante facilitado em 15 a 20 dias.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-slate-900 block">Tamanho XGG & Pedido Mínimo:</span>
            <p className="text-slate-600 leading-relaxed">
              Tamanhos P ao GG sem taxa extra. Tamanho XGG: + R$ 2,00 por peça. Pedido mínimo: 10 peças.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-bold text-slate-900 block">Frete, Prazo e Nota Fiscal:</span>
            <p className="text-slate-600 leading-relaxed">
              Frete sob consulta por CEP. Prazo ágil informado no atendimento. Nota Fiscal emitida para PJ.
            </p>
          </div>
        </div>

        {/* Direct CTA */}
        <div className="mt-8 text-center">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de confirmar um orçamento baseado na tabela de preços da JOTI.style.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B132B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            Tirar dúvidas sobre a tabela no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
