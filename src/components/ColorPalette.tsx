import React, { useState } from 'react';
import { CATALOG_COLORS, ColorItem, COLOR_STUDIO_PHOTOS } from '../data/catalog';
import { DuoModelsMockup } from './DuoModelsMockup';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const ColorPalette: React.FC = () => {
  // Inicializa na cor 11 Lilás para destacar o piloto de fotografia real de estúdio
  const [selectedColor, setSelectedColor] = useState<ColorItem>(
    CATALOG_COLORS.find((c) => c.code === '11') || CATALOG_COLORS[0]
  );
  const [activeModelTab, setActiveModelTab] = useState<'m1' | 'm2'>('m1');

  const hasDedicatedPhoto = Boolean(COLOR_STUDIO_PHOTOS[selectedColor.code]);

  const inkText =
    selectedColor.textColor === 'light' || selectedColor.isDark
      ? 'Tinta DTF Branca (Alto Contraste)'
      : 'Tinta DTF Escura (Grafite / Preto)';

  return (
    <section id="cores" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1.5 rounded border border-slate-300">
            Etapa 03 • Cartela Oficial &amp; Simulação Visual
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
            22 Cores Oficiais com Visualização em Pessoas Reais
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Selecione qualquer cor da cartela para visualizar a aplicação nas peças vestidas por modelos adultos (frente e costas lado a lado). Sem distorção de pele, fundo ou proporções do produto.
          </p>
        </div>

        {/* Grade Principal: Seletor de Cores à Esquerda + Palco Fotográfico à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUNA ESQUERDA: CARTELA DAS 22 CORES OFICIAIS */}
          <div className="lg:col-span-5 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Cartela de Cores ({CATALOG_COLORS.length} opções):
              </span>
              <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
                Mesmo valor unitário
              </span>
            </div>

            {/* Grade Responsiva das 22 Cores */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 max-h-[520px] overflow-y-auto pr-1">
              {CATALOG_COLORS.map((color) => {
                const isSelected = selectedColor.code === color.code;
                const isPilot = color.code === '11';

                return (
                  <button
                    key={color.code}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl text-left border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0B132B] bg-white shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {/* Amostra física de cor */}
                    <div
                      className="w-7 h-7 rounded-lg border border-black/15 shadow-inner shrink-0 flex items-center justify-center transition-transform"
                      style={{ backgroundColor: color.hex }}
                    >
                      {isSelected && (
                        <Check
                          className={`w-3.5 h-3.5 stroke-[3] ${
                            color.isDark ? 'text-white' : 'text-slate-950'
                          }`}
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] font-bold text-slate-500 leading-none">
                          {color.code}
                        </span>
                        {isPilot && (
                          <span className="text-[9px] font-extrabold text-[#0B132B] bg-purple-100 px-1 py-0.2 rounded leading-none">
                            Foto Real
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-slate-900 truncate leading-tight mt-0.5">
                        {color.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Especificação da Tecnologia DTF Têxtil Digital */}
            <div className="p-4 rounded-xl bg-white border border-slate-300 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#0B132B]" />
                Estamparia DTF (Direct to Film) Digital
              </div>
              <p className="leading-relaxed text-slate-600 text-[11px]">
                A estampa é transferida digitalmente de forma vazada nas fibras, sem fundo branco em volta da arte. Toque macio, máxima resistência a lavagens industriais e cores fiéis à identidade da sua empresa.
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-800">
                <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Sem fundo branco</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Não racha nem craquela</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Poliéster e Algodão</span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: PALCO FOTOGRÁFICO DE ESTÚDIO (2 MODELOS REAIS) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-300 shadow-md overflow-hidden flex flex-col">
            
            {/* Topo do Palco: Informações da Cor e Alternador dos Modelos 1 e 2 */}
            <div className="p-4 sm:p-5 bg-[#0B132B] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg border-2 border-white/60 shadow-xs shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                ></div>
                <div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Cor em Visualização
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                    {selectedColor.code} - {selectedColor.name.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Seletor Oficial: Modelo 1 (Só Peito) vs Modelo 2 (Peito + Costas) */}
              <div className="flex items-center bg-slate-900 p-1 rounded-xl text-xs font-bold border border-slate-700">
                <button
                  type="button"
                  onClick={() => setActiveModelTab('m1')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeModelTab === 'm1'
                      ? 'bg-white text-slate-950 font-black shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mod. 1 (Só Peito)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModelTab('m2')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeModelTab === 'm2'
                      ? 'bg-white text-slate-950 font-black shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mod. 2 (Peito + Costas)
                </button>
              </div>
            </div>

            {/* Sub-barra de Status da Cor */}
            <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-800 bg-white px-2.5 py-1 rounded border border-slate-200">
                  {inkText}
                </span>
                {hasDedicatedPhoto && (
                  <span className="text-[11px] font-bold text-[#0B132B] bg-purple-50 px-2.5 py-1 rounded border border-purple-200">
                    Fotografia de Estúdio Dedicada
                  </span>
                )}
              </div>

              <span className="text-[11px] text-slate-600 font-medium">
                Gabaritos oficiais: Peito 10×10 cm • Costas 25×17 cm
              </span>
            </div>

            {/* ÁREA CENTRAL DO MOCKUP COM OS DOIS MODELOS REAIS */}
            <div className="p-4 sm:p-6 bg-slate-50 flex-1 flex flex-col justify-center">
              <DuoModelsMockup
                color={selectedColor}
                model={activeModelTab}
              />
            </div>

            {/* Rodapé do Palco com CTA direto para a Calculadora */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B132B] shrink-0" />
                <span>
                  <strong>Garantia JOTI:</strong> Gola careca canelada, reforço ombro a ombro e bainha dupla.
                </span>
              </div>

              <a
                href="#calculadora"
                className="font-bold text-[#0B132B] hover:text-blue-900 flex items-center gap-1 shrink-0 self-end sm:self-auto"
              >
                Simular orçamento com esta cor e modelo
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
