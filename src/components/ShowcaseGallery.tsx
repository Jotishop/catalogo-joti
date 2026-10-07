import React from 'react';
import { ASSETS } from '../assets';
import { Camera, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ShowcaseGallery: React.FC = () => {
  const photos = [
    {
      img: ASSETS.fotoUso1,
      title: 'Coordenação e Logística',
      desc: 'Uniforme com caimento impecável para liderança e conferência em armazém.',
      badge: 'Camiseta Poliéster / Azul Marinho',
    },
    {
      img: ASSETS.fotoUso2,
      title: 'Supervisão & Facilities',
      desc: 'Apresentação alinhada e sóbria para controle de acesso e portaria.',
      badge: 'Camiseta 100% Algodão / Preto',
    },
    {
      img: ASSETS.fotoUso3,
      title: 'Equipes Operacionais',
      desc: 'Padronização visual e conforto térmico para homens e mulheres da equipe.',
      badge: 'Azul Royal / Modelo 1 (Peito)',
    },
    {
      img: ASSETS.fotoUso4,
      title: 'Visibilidade em Movimento',
      desc: 'Estampa traseira destacada (25x17 cm) para identificação rápida a distância.',
      badge: 'Cinza Mescla / Modelo 2 (Costas)',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            Galeria de Uniformes Reais
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
            Pessoas reais usando os uniformes JOTI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Veja como as camisetas vestem no corpo e valorizam a imagem profissional da sua equipe em Itajaí e região.
          </p>
        </div>

        {/* 4 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-slate-950/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold">
                  {item.badge}
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
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
