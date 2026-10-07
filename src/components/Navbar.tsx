import React, { useState } from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';
import { MessageSquare, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: '1. Tecidos', href: '#tecidos' },
    { label: '2. Modelos', href: '#modelos' },
    { label: '3. Cores', href: '#cores' },
    { label: '4. Medidas', href: '#medidas' },
    { label: '5. Preços & Pedido', href: '#calculadora', highlight: true },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top minimal bar in deep dark navy */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 border-b border-slate-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="font-semibold text-white">JOTI.style • Estamparia Corporativa em Itajaí/SC</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span className="hidden sm:inline">Pedido mínimo: 10 peças</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-white font-semibold">Reposição rápida para novos colaboradores</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="JOTI.style Início">
          <Logo />
        </a>

        {/* Desktop Nav: Clean Typography */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide uppercase text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 ${
                link.highlight
                  ? 'text-[#0B132B] font-extrabold hover:text-blue-900 border-b-2 border-[#0B132B]'
                  : 'hover:text-black'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons in Black & Deep Navy */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#calculadora"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            Simular Pedido
          </a>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de um orçamento para uniformes da minha empresa pela JOTI.style.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B132B] hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-black focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-1 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg transition-colors ${
                  link.highlight
                    ? 'bg-[#0B132B] text-white font-bold'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de falar sobre os uniformes da JOTI.style.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#0B132B] text-white rounded-xl text-xs font-bold shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Chamar no WhatsApp ({WHATSAPP_CONFIG.displayNumber})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
