import React from 'react';
import { RefreshCw, Check, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const MonthlyReplenishment: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#0B132B] text-white border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-slate-300 rounded text-[11px] font-bold uppercase tracking-widest border border-slate-700">
              <RefreshCw className="w-3.5 h-3.5" />
              Reposição Rápida Para Novos Contratados
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Entrou gente nova? Mande só a quantidade. Sua logo e seu modelo ficam salvos.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Sabemos que empresas terceirizadoras de serviços e armazéns logísticos têm contratações frequentes. Na JOTI, você não precisa reenviar arquivos nem refazer todo o processo: basta mandar uma mensagem rápida no WhatsApp com os tamanhos necessários a partir de 10 peças.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                <span>Gabarito e cor arquivados</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                <span>Mesmo padrão de costura e estampa</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                <span>Agilidade para novos colaboradores</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl w-full max-w-sm space-y-4">
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-300">
                Canal Direto de Reposição
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Comprador cadastrado só envia: <em>"Olá, preciso repor 15 peças: 5 M, 7 G e 3 GG da mesma cor e modelo."</em> E nós já iniciamos o pedido.
              </p>
              <a
                href={getWhatsAppUrl('Olá! Quero cadastrar minha empresa para ter reposição rápida de uniformes na JOTI.style.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98"
              >
                Cadastrar empresa para reposição
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
