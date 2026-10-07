import React from 'react';
import { ASSETS } from '../assets';
import { getWhatsAppUrl } from '../config/whatsapp';
import { ArrowDown, Check, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-16 sm:pt-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1.5 rounded border border-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0B132B]"></span>
              Itajaí • Santa Catarina
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Uniforme padronizado para sua equipe, com reposição rápida quando entra gente nova.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Camisetas personalizadas com estampa profissional para terceirizadoras de limpeza, vigilância, logística e indústrias. Preço justo por quantidade, pedido mínimo de apenas 10 peças e agilidade no fechamento.
            </p>

            {/* CTAs in Black and Navy */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:items-center">
              <a
                href="#passo-a-passo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-xl transition-all shadow-md active:scale-98"
              >
                Como montar seu pedido
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl('Olá! Quero tirar dúvidas e orçar uniformes para minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-[#0B132B] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-colors"
              >
                Falar com consultor no WhatsApp
              </a>
            </div>

            {/* Buyer Benefits */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                <span>Pedido mínimo: <strong>10 peças</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                <span>Estampa inclusa no preço</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0B132B] shrink-0 stroke-[2.5]" />
                <span>Logo salva para reposição</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 shadow-lg">
              <img
                src={ASSETS.equipe}
                alt="Equipe uniformizada profissional da JOTI.style"
                className="w-full h-auto object-cover aspect-[4/3] block"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
                <div className="text-[11px] uppercase tracking-wider font-bold text-slate-300">
                  JOTI.style • Estamparia Corporativa
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Identidade visual e seriedade para sua equipe em Itajaí
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
