import React from 'react';
import { RefreshCw, CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const MonthlyReplenishment: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-lg text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <RefreshCw className="w-3.5 h-3.5" />
              Reposição Mensal Simplificada
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Entrou gente nova? Mande só a quantidade. Sua logo e seu modelo ficam salvos.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Sabemos que empresas terceirizadoras de serviços e armazéns logísticos têm contratações frequentes. Na JOTI, você não precisa reenviar arquivos nem refazer todo o processo: basta mandar uma mensagem rápida com os tamanhos necessários a partir de 10 peças.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gabarito e cor arquivados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mesmo padrão de costura e estampa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agilidade para novos colaboradores</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl w-full max-w-sm space-y-4">
              <div className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Canal Direto de Reposição
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Comprador cadastrado só envia: <em>"Olá, preciso repor 15 peças: 5 M, 7 G e 3 GG da mesma cor e modelo."</em> E nós já iniciamos o pedido.
              </p>
              <a
                href={getWhatsAppUrl('Olá! Quero cadastrar minha empresa para ter reposição rápida de uniformes na JOTI.style.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                Cadastrar empresa para reposição
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
