import React from 'react';
import { ASSETS } from '../assets';
import { getWhatsAppUrl } from '../config/whatsapp';
import { Calculator, ArrowRight, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-14 sm:pt-16 sm:pb-20">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              JOTI.style • Itajaí / SC
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Uniforme padronizado para sua equipe, com reposição rápida quando entra gente nova.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Camisetas personalizadas com estampa profissional para empresas terceirizadoras, logística, vigilância e serviços. Preço claro por faixa de quantidade, pedido mínimo de apenas 10 peças e agilidade no fechamento.
            </p>

            {/* Main Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:items-center">
              <a
                href="#calculadora"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calculator className="w-5 h-5 text-amber-400" />
                Calcular meu pedido
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={getWhatsAppUrl('Olá! Quero tirar dúvidas e orçar uniformes para minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
              >
                Chamar no WhatsApp
              </a>
            </div>

            {/* Essential Buyer Guarantees */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pedido mínimo: <strong>10 peças</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Estampa inclusa no preço</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <RefreshCw className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Logo salva para reposição</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200">
              <img
                src={ASSETS.equipe}
                alt="Equipe uniformizada profissional da JOTI.style"
                className="w-full h-auto object-cover aspect-[4/3] block"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5 text-white">
                <div className="text-xs uppercase tracking-wider font-bold text-amber-400">Padronização Corporativa</div>
                <div className="text-sm font-semibold text-white/95 mt-0.5">
                  Visual alinhado e identidade forte para sua equipe em campo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
