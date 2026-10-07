import React from 'react';
import { FileUp, FileCheck, CheckSquare2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Envie a logo e a quantidade',
      desc: 'Mande sua logo (PDF, CDR, AI ou PNG) e a quantidade estimada diretamente no WhatsApp.',
      icon: FileUp,
    },
    {
      step: '02',
      title: 'Receba o mockup para aprovar',
      desc: 'Montamos a simulação digital exata das camisetas com sua estampa aplicada para você conferir e validar.',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'Pague a entrada e a produção começa',
      desc: 'Após a aprovação do mockup, entrada via PIX ou transferência e o saldo restante em 15 a 20 dias.',
      icon: CheckSquare2,
    },
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            Processo Simples e Rápido
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">
            Como funciona em 3 passos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Sem burocracia para sua empresa. Do primeiro contato até a entrega dos uniformes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-black text-amber-500">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <span>Passo {index + 1} de 3</span>
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
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-md"
          >
            Enviar minha logo no WhatsApp
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
