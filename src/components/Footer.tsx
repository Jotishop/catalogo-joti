import React from 'react';
import { Logo } from './Logo';
import { WHATSAPP_CONFIG, getWhatsAppUrl } from '../config/whatsapp';
import { MessageSquare, Instagram, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-white border-t border-slate-900 pt-14 pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="footer" light />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Especialistas em camisetas personalizadas e uniformes profissionais para empresas em Itajaí/SC e região portuária. Poliéster e algodão com estampa de alta durabilidade e reposição ágil.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-slate-300 shrink-0" />
              <span>Itajaí, Santa Catarina — Brasil</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Etapas do Pedido
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#tecidos" className="hover:text-white transition-colors">
                  1. Tecidos (Poliéster e Algodão)
                </a>
              </li>
              <li>
                <a href="#modelos" className="hover:text-white transition-colors">
                  2. Modelos de Estampa
                </a>
              </li>
              <li>
                <a href="#cores" className="hover:text-white transition-colors">
                  3. Cartela com 20 Cores
                </a>
              </li>
              <li>
                <a href="#medidas" className="hover:text-white transition-colors">
                  4. Grade de Medidas (P ao XGG)
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors font-semibold">
                  5. Simulador & Tabela de Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Atendimento Comercial
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de falar com o atendimento comercial da JOTI.style.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">WhatsApp Direto</div>
                  <div className="font-bold text-white">{WHATSAPP_CONFIG.displayNumber}</div>
                </div>
              </a>

              <a
                href={WHATSAPP_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 border border-slate-700">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Instagram</div>
                  <div className="font-bold text-white">{WHATSAPP_CONFIG.instagram}</div>
                </div>
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{WHATSAPP_CONFIG.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} JOTI.style • Todos os direitos reservados. Itajaí - SC.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
