import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-5 right-5 z-50 flex items-center group">
      <a
        href={getWhatsAppUrl('Olá! Quero tirar dúvidas sobre o catálogo de uniformes da JOTI.style.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chamar no WhatsApp ${WHATSAPP_CONFIG.displayNumber}`}
        className="flex items-center gap-2.5 bg-[#0B132B] hover:bg-slate-900 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl border border-slate-700 transition-all transform hover:-translate-y-1 active:translate-y-0"
      >
        {/* Pulsing Dot */}
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
          <div className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 leading-none">
            Orçamento Rápido
          </span>
          <span className="text-xs font-bold text-white leading-tight">
            WhatsApp {WHATSAPP_CONFIG.displayNumber}
          </span>
        </div>
      </a>
    </aside>
  );
};
