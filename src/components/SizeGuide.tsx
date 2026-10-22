import React from 'react';
import { SIZE_MEASUREMENTS } from '../data/catalog';
import { ASSETS } from '../assets';
import { Ruler, Info, Check, ShieldCheck } from 'lucide-react';

export const SizeGuide: React.FC = () => {
  return (
    <section id="medidas" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-white px-3 py-1 rounded border border-slate-300">
            Etapa 04 • Caimento & Grade de Medidas
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Tabela de medidas em modelo real (P ao XGG)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Veja como a camiseta veste no corpo e confira as medidas exatas de altura (A) e tórax (B) para acertar na grade da sua equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* FOTO DO MODELO REAL COM LINHAS TÉCNICAS DE MEDIÇÃO */}
          <div className="lg:col-span-5 bg-white border border-slate-300 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs">
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Caimento no Corpo
              </span>
              <span className="text-[11px] font-bold text-slate-500">
                Modelo veste tamanho M
              </span>
            </div>

            {/* Imagem do Modelo com Guia Técnico Sobreposto */}
            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <img
                src={ASSETS.modeloGuiaMedidas}
                alt="Modelo real vestindo camiseta corporativa JOTI para guia de tamanhos"
                className="w-full h-full object-cover object-top"
              />

              {/* Linha Técnica de Altura (A) */}
              <div className="absolute top-[18%] left-[25%] bottom-[54%] w-0.5 border-l-2 border-dashed border-red-600 pointer-events-none flex flex-col justify-between items-center">
                <div className="w-2 h-2 -ml-1 border-t-2 border-l-2 border-red-600 -rotate-45"></div>
                <div className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm -ml-5">
                  A (Altura)
                </div>
                <div className="w-2 h-2 -ml-1 border-b-2 border-r-2 border-red-600 -rotate-45"></div>
              </div>

              {/* Linha Técnica de Largura / Tórax (B) */}
              <div className="absolute top-[32%] left-[25%] right-[25%] h-0.5 border-t-2 border-dashed border-blue-900 pointer-events-none flex justify-between items-center">
                <div className="w-2 h-2 -mt-1 border-t-2 border-l-2 border-blue-900 -rotate-45"></div>
                <div className="bg-[#0B132B] text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm">
                  B (Largura)
                </div>
                <div className="w-2 h-2 -mt-1 border-b-2 border-r-2 border-blue-900 -rotate-45"></div>
              </div>

              {/* Tag Inferior */}
              <div className="absolute bottom-2.5 inset-x-2.5 bg-slate-950/85 backdrop-blur-xs text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg text-center">
                Camiseta Gola Careca • Padrão Corporativo
              </div>
            </div>

            {/* Caixas de Explicação das Linhas A e B */}
            <div className="mt-4 grid grid-cols-2 gap-3 w-full text-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-left">
                <span className="font-extrabold text-red-700 block text-xs">Linha A • Altura</span>
                Do ombro mais alto até a barra inferior (67 a 76 cm)
              </div>
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-left">
                <span className="font-extrabold text-[#0B132B] block text-xs">Linha B • Tórax</span>
                De uma cava à outra, na altura do peito (51 a 61,5 cm)
              </div>
            </div>
          </div>

          {/* TABELA E CARTÕES DE TAMANHOS À DIREITA */}
          <div className="lg:col-span-7 space-y-4">
            {/* Tabela Desktop */}
            <div className="hidden sm:block bg-white rounded-2xl border border-slate-300 shadow-xs overflow-hidden">
              <div className="p-4 bg-[#0B132B] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Grade Adulto Oficial
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium">Medidas em centímetros (cm)</span>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider font-extrabold border-b border-slate-200">
                    <th className="py-4 px-6">Tamanho</th>
                    <th className="py-4 px-6 text-red-700">Altura (A)</th>
                    <th className="py-4 px-6 text-[#0B132B]">Largura (B)</th>
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

            {/* Cartões Mobile */}
            <div className="sm:hidden space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                <span>Tamanho</span>
                <span>Altura (A) × Largura (B)</span>
              </div>
              {SIZE_MEASUREMENTS.map((m) => (
                <div
                  key={`mob-${m.size}`}
                  className="bg-white p-3.5 rounded-xl border border-slate-300 shadow-2xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0B132B] text-white font-display font-black text-sm flex items-center justify-center">
                      {m.size}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Tamanho {m.size}</div>
                      {m.size === 'XGG' ? (
                        <div className="text-[10px] text-slate-900 font-bold">+ R$ 2,00 por peça</div>
                      ) : (
                        <div className="text-[10px] text-slate-500 font-medium">Preço normal</div>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900">
                      <span className="text-red-700">{m.heightCm.toFixed(1).replace('.', ',')}</span> ×{' '}
                      <span className="text-[#0B132B]">{m.widthCm.toFixed(1).replace('.', ',')} cm</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Altura × Tórax</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Orientações Práticas */}
            <div className="p-4 bg-white rounded-xl border border-slate-300 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-950 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#0B132B]" />
                Como orientar a equipe para escolher o tamanho correto:
              </div>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Peça para cada colaborador conferir a largura de uma camiseta que já use confortavelmente.</li>
                <li>Tamanhos P ao GG têm o mesmo valor único por peça.</li>
                <li>O tamanho especial XGG conta com acréscimo de R$ 2,00 por peça devido à maior metragem de tecido.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
