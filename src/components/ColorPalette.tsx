import React, { useState } from 'react';
import { CATALOG_COLORS, ColorItem } from '../data/catalog';
import { ASSETS } from '../assets';
import { Check } from 'lucide-react';

export const ColorPalette: React.FC = () => {
  // Default to 15 Azul Marinho (classic corporate uniform color)
  const [selectedColor, setSelectedColor] = useState<ColorItem>(
    CATALOG_COLORS.find((c) => c.code === '15') || CATALOG_COLORS[0]
  );
  const [activeModelTab, setActiveModelTab] = useState<'m1' | 'm2'>('m1');

  const inkText = selectedColor.textColor === 'light' ? 'Tinta Clara (Branca)' : 'Tinta Escura (Preta/Grafite)';

  return (
    <section id="cores" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Etapa 03 • Cartela Oficial
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            20 Cores disponíveis para sua empresa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Todas as 20 cores estão disponíveis tanto em <strong>Poliéster</strong> quanto em <strong>Algodão</strong> pelo mesmo preço único. Clique em uma cor para visualizar a simulação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Swatches Grid */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-300 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Selecione uma cor para simular ({CATALOG_COLORS.length} opções):
              </span>
              <span className="text-xs font-bold text-slate-800 bg-white px-2.5 py-1 rounded border border-slate-300">
                Preço único para qualquer cor
              </span>
            </div>

            {/* 20 Colors Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {CATALOG_COLORS.map((color) => {
                const isSelected = selectedColor.code === color.code;
                return (
                  <button
                    key={color.code}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl text-left border-2 transition-all ${
                      isSelected
                        ? 'border-slate-950 bg-white shadow-sm scale-[1.02]'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {/* Swatch color square */}
                    <div
                      className="w-7 h-7 rounded-md border border-black/15 shadow-inner shrink-0 flex items-center justify-center"
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
                      <div className="text-[10px] font-bold text-slate-400 leading-none">
                        {color.code}
                      </div>
                      <div className="text-xs font-bold text-slate-900 truncate leading-tight mt-0.5">
                        {color.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Rule explanation about ink contrast */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-950">
                Contraste Técnico da Estampa
              </div>
              <p className="leading-relaxed text-slate-600">
                Nossa estamparia ajusta a cor da tinta para garantir 100% de legibilidade da sua marca:
                <strong> tinta branca em tecidos escuros</strong> (ex: Preto, Azul Marinho, Royal, Vermelho) e{' '}
                <strong>tinta preta em tecidos claros</strong> (ex: Branco, Bege, Amarelo Bebê, Areia).
              </p>
            </div>
          </div>

          {/* Right Column: Live Mockup & Selected Color Display */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-300 shadow-md overflow-hidden">
            {/* Header with selected color name and code */}
            <div className="p-4 bg-[#0B132B] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded border border-white/30 shadow-sm shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                ></div>
                <div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Cor Selecionada
                  </div>
                  <div className="font-display text-base font-bold text-white">
                    {selectedColor.code} - {selectedColor.name.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Model toggle tab */}
              <div className="flex items-center bg-slate-900 p-0.5 rounded text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveModelTab('m1')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeModelTab === 'm1' ? 'bg-white text-slate-950 font-black' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mod. 1
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModelTab('m2')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeModelTab === 'm2' ? 'bg-white text-slate-950 font-black' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mod. 2
                </button>
              </div>
            </div>

            {/* Interactive Visual Canvas */}
            <div className="p-6 bg-slate-50 flex flex-col items-center justify-center">
              {/* Split Display: Front and Back */}
              <div className="w-full grid grid-cols-2 gap-4">
                {/* Front View Box */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Frente (10 x 10 cm peito)
                  </div>

                  {/* Dynamic T-Shirt Vector Front */}
                  <div className="relative w-32 h-36 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full filter drop-shadow-md transition-colors duration-300"
                      style={{ color: selectedColor.hex }}
                    >
                      <path
                        d="M 30,12 C 38,20 62,20 70,12 L 95,28 L 82,44 L 73,37 L 73,92 L 27,92 L 27,37 L 18,44 L 5,28 Z"
                        fill="currentColor"
                        stroke="#000000"
                        strokeOpacity="0.2"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 33,14 C 40,22 60,22 67,14"
                        fill="none"
                        stroke="#000000"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Logo print on left chest (clean seamless serigraphy) */}
                    <div className="absolute top-[38%] left-[33%] flex items-center justify-center">
                      <span
                        className="text-[8px] font-black tracking-tight"
                        style={{ color: selectedColor.textColor === 'light' ? '#FFFFFF' : '#0B132B' }}
                      >
                        JOTI
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-slate-700 mt-2">
                    Logo Peito Esquerdo
                  </span>
                </div>

                {/* Back View Box */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {activeModelTab === 'm1' ? 'Costas (Lisa)' : 'Costas (25 x 17 cm)'}
                  </div>

                  {/* Dynamic T-Shirt Vector Back */}
                  <div className="relative w-32 h-36 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full filter drop-shadow-md transition-colors duration-300"
                      style={{ color: selectedColor.hex }}
                    >
                      <path
                        d="M 30,12 C 38,15 62,15 70,12 L 95,28 L 82,44 L 73,37 L 73,92 L 27,92 L 27,37 L 18,44 L 5,28 Z"
                        fill="currentColor"
                        stroke="#000000"
                        strokeOpacity="0.2"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 32,13 C 40,16 60,16 68,13"
                        fill="none"
                        stroke="#000000"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Back Print: only for Model 2 */}
                    {activeModelTab === 'm2' ? (
                      <div className="absolute top-[32%] inset-x-0 mx-auto flex flex-col items-center justify-center px-1">
                        <span
                          className="text-[7px] font-black leading-tight tracking-wider uppercase text-center"
                          style={{ color: selectedColor.textColor === 'light' ? '#FFFFFF' : '#0B132B' }}
                        >
                          SUA EMPRESA
                        </span>
                        <span
                          className="text-[5px] font-semibold text-center mt-0.5 tracking-tight"
                          style={{ color: selectedColor.textColor === 'light' ? 'rgba(255,255,255,0.85)' : 'rgba(11,19,43,0.8)' }}
                        >
                          ESTAMPA 25×17 CM
                        </span>
                      </div>
                    ) : (
                      <div className="absolute top-[40%] text-[8px] font-medium text-slate-400 italic">
                        Costas Lisas
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-slate-700 mt-2">
                    {activeModelTab === 'm1' ? 'Sem estampa' : 'Estampa Costas 25x17'}
                  </span>
                </div>
              </div>

              {/* Reference Strip */}
              <div className="mt-4 w-full bg-white border border-slate-300 rounded-xl p-3 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 h-6 rounded border border-black/20"
                    style={{ backgroundColor: selectedColor.hex }}
                  ></div>
                  <div className="text-xs">
                    <span className="font-extrabold text-slate-900">
                      {selectedColor.code} - {selectedColor.name.toUpperCase()}
                    </span>
                    <span className="text-slate-400 ml-1.5">| {activeModelTab === 'm1' ? 'Modelo 1' : 'Modelo 2'}</span>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {inkText}
                </div>
              </div>
            </div>

            {/* Team photo card */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900">
                  Visual na equipe: {selectedColor.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  Itajaí • Santa Catarina
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-200">
                <img
                  src={ASSETS.equipe}
                  alt={`Equipe com uniformes na cor ${selectedColor.name}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: selectedColor.hex }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
