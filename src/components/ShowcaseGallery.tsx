import React from 'react';
import { ASSETS } from '../assets';
import { Camera, Check } from 'lucide-react';

export const ShowcaseGallery: React.FC = () => {
  const photos = [
    {
      img: ASSETS.fotoUso1,
      title: 'Coordenação e Logística',
      desc: 'Uniforme com caimento sóbrio para conferência e supervisão em armazém.',
      badge: 'Poliéster / Azul Marinho',
    },
    {
      img: ASSETS.fotoUso2,
      title: 'Supervisão & Facilities',
      desc: 'Apresentação alinhada para portaria, recepção e controle de acesso.',
      badge: 'Algodão Penteado / Preto',
    },
    {
      img: ASSETS.fotoUso3,
      title: 'Equipes Operacionais',
      desc: 'Padronização visual e conforto para toda a equipe em campo.',
      badge: 'Azul Royal / Modelo 1 (Peito)',
    },
    {
      img: ASSETS.fotoUso4,
      title: 'Visibilidade em Movimento',
      desc: 'Estampa traseira destacada (25x17 cm) para identificação à distância.',
      badge: 'Cinza / Modelo 2 (Costas)',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Apresentação Profissional
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Pessoas reais usando os uniformes JOTI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Veja como as camisetas vestem no corpo e valorizam a identidade da sua empresa em Itajaí e região.
          </p>
        </div>

        {/* 4 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-300 overflow-hidden shadow-xs hover:border-slate-400 transition-colors flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-slate-950 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                  {item.badge}
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-bold text-slate-950 text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#0B132B] font-semibold">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Estampa 100% integrada ao tecido</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
