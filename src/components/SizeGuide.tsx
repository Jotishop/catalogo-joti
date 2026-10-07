import React from 'react';
import { SIZE_MEASUREMENTS } from '../data/catalog';
import { Ruler, Info } from 'lucide-react';

export const SizeGuide: React.FC = () => {
  return (
    <section id="medidas" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-white px-3 py-1 rounded border border-slate-300">
            Etapa 04 • Grade de Medidas
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Tabela de medidas: Linha Adulto (P ao XGG)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Camiseta gola careca profissional. Para tirar as medidas com precisão, compare com uma camiseta da sua equipe esticada sobre uma mesa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Diagram Left */}
          <div className="lg:col-span-5 bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Guia Prático de Medição
            </div>

            {/* Precision SVG Technical Diagram with Measurement Arrows */}
            <div className="relative w-56 h-56 my-2">
              <svg viewBox="0 0 200 200" className="w-full h-full text-slate-300 drop-shadow-sm">
                <path
                  d="M 60,30 C 76,44 124,44 140,30 L 190,62 L 165,94 L 146,80 L 146,180 L 54,180 L 54,80 L 35,94 L 10,62 Z"
                  fill="#F8FAFC"
                  stroke="#334155"
                  strokeWidth="2.5"
                />
                <path
                  d="M 65,33 C 80,48 120,48 135,33"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="2"
                />

                {/* Arrow A: Height (Vertical) */}
                <line x1="100" y1="36" x2="100" y2="180" stroke="#0F172A" strokeWidth="2.5" strokeDasharray="3 3" />
                <polygon points="100,32 96,40 104,40" fill="#0F172A" />
                <polygon points="100,184 96,176 104,176" fill="#0F172A" />

                {/* Arrow B: Width (Horizontal) */}
                <line x1="54" y1="105" x2="146" y2="105" stroke="#1E3A8A" strokeWidth="2.5" strokeDasharray="3 3" />
                <polygon points="50,105 58,101 58,109" fill="#1E3A8A" />
                <polygon points="150,105 142,101 142,109" fill="#1E3A8A" />
              </svg>

              {/* Labels on Diagram */}
              <div className="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-2 bg-slate-950 text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                A
              </div>
              <div className="absolute top-[52%] right-8 bg-[#1E3A8A] text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                B
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 w-full text-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-medium text-left">
                <span className="font-extrabold text-slate-950 block text-xs">Altura (A)</span>
                Do ombro mais alto até a barra inferior
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-medium text-left">
                <span className="font-extrabold text-[#1E3A8A] block text-xs">Largura (B)</span>
                Tórax de costura a costura (cava a cava)
              </div>
            </div>
          </div>

          {/* Table & Cards Right */}
          <div className="lg:col-span-7 space-y-4">
            {/* Desktop Table */}
            <div className="hidden sm:block bg-white rounded-2xl border border-slate-300 shadow-sm overflow-hidden">
              <div className="p-4 bg-[#0B132B] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Grade Adulto Corporativo
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium">Medidas em centímetros</span>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider font-extrabold border-b border-slate-200">
                    <th className="py-4 px-6">Tamanho</th>
                    <th className="py-4 px-6 text-slate-900">Altura (A)</th>
                    <th className="py-4 px-6 text-[#1E3A8A]">Largura (B)</th>
                    <th className="py-4 px-6 text-slate-500 text-right">Observação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm font-semibold text-slate-800">
                  {SIZE_MEASUREMENTS.map((m) => (
                    <tr key={m.size} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-display font-extrabold text-slate-950 text-lg">
                          {m.size}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-900 font-bold">
                        {m.heightCm.toFixed(1).replace('.', ',')} cm
                      </td>
                      <td className="py-4 px-6 text-slate-900 font-bold">
                        {m.widthCm.toFixed(1).replace('.', ',')} cm
                      </td>
                      <td className="py-4 px-6 text-right text-xs text-slate-500 font-normal">
                        {m.size === 'XGG' ? (
                          <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                            + R$ 2,00 / pç
                          </span>
                        ) : (
                          'Preço padrão'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                <span>Tamanho</span>
                <span>Altura (A) × Largura (B)</span>
              </div>
              {SIZE_MEASUREMENTS.map((m) => (
                <div
                  key={`mob-${m.size}`}
                  className="bg-white p-3.5 rounded-xl border border-slate-300 shadow-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 text-white font-display font-black text-sm flex items-center justify-center">
                      {m.size}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-700">Tamanho {m.size}</div>
                      {m.size === 'XGG' ? (
                        <div className="text-[10px] text-slate-900 font-bold">+ R$ 2,00 por peça</div>
                      ) : (
                        <div className="text-[10px] text-slate-500 font-medium">Sem acréscimo</div>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900">
                      <span>{m.heightCm.toFixed(1).replace('.', ',')}</span> ×{' '}
                      <span className="text-[#1E3A8A]">{m.widthCm.toFixed(1).replace('.', ',')} cm</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Altura × Largura</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-slate-300 text-xs text-slate-600 flex items-center gap-2">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Tamanhos P ao GG têm o mesmo preço único. Tamanho XGG adiciona R$ 2,00 por peça.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
