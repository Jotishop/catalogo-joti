import React from 'react';
import { FileUp, FileCheck, CheckSquare2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Envie a logo e a quantidade',
      desc: 'Mande sua logo (PDF, CDR, AI ou PNG) e a quantidade aproximada de peças no WhatsApp.',
      icon: FileUp,
    },
    {
      step: '02',
      title: 'Receba o mockup para aprovar',
      desc: 'Montamos a simulação digital exata das camisetas com sua estampa aplicada antes de iniciar.',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'Pague a entrada e a produção começa',
      desc: 'Após aprovado, entrada via PIX ou transferência e o saldo restante facilitado em 15 a 20 dias.',
      icon: CheckSquare2,
    },
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-white px-3 py-1 rounded border border-slate-300">
            Processo Comercial Sem Burocracia
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3">
            Como funciona em 3 passos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Do envio da logo até a entrega das peças prontas na sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white border border-slate-300 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-400 shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xl font-black text-[#0B132B]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center justify-between">
                  <span>Passo {index + 1} de 3</span>
                  <span className="text-slate-400 font-normal">Garantia JOTI</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de enviar a logo da minha empresa para fazer um mockup.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98"
          >
            Enviar minha logo no WhatsApp
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
