import React, { useState } from 'react';
import { FAQS } from '../data/catalog';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-300">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Perguntas frequentes dos compradores
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tudo o que seu setor de compras precisa saber antes de fechar o pedido de uniformes.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="border border-slate-300 rounded-xl overflow-hidden transition-all bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#0B132B] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA box in Black & White */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-100 border border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-950 text-base">
              Ainda tem alguma dúvida específica para sua empresa?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Fale diretamente com nossa equipe comercial pelo WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Olá! Tenho uma dúvida sobre o processo de confecção dos uniformes da JOTI.style.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B132B] hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Tirar Dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
