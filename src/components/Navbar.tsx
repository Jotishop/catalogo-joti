import React, { useState } from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';
import { MessageSquare, Menu, X, Calculator, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Calculadora', href: '#calculadora', highlight: true },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Tecidos', href: '#tecidos' },
    { label: 'Modelos', href: '#modelos' },
    { label: 'Cores', href: '#cores' },
    { label: 'Tabela de Preços', href: '#precos' },
    { label: 'Medidas', href: '#medidas' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top corporate notice bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-white">Atendimento Corporativo B2B</span>
            <span className="hidden sm:inline text-slate-400">· Itajaí & Região Portuária/SC</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline">Pedido mínimo: 10 peças</span>
            <span className="hidden md:inline">·</span>
            <span className="text-amber-400 font-semibold">Reposição rápida de novos funcionários</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="JOTI.style Uniformes">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 ${
                link.highlight
                  ? 'text-amber-600 font-bold hover:text-amber-700'
                  : 'hover:text-slate-950'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#calculadora"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Calculator className="w-4 h-4 text-amber-500" />
            Simular Pedido
          </a>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de um orçamento para uniformes da minha empresa pela JOTI.style.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors ${
                  link.highlight ? 'bg-amber-50 text-amber-800 font-bold' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-sm"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              Calcular meu pedido agora
            </a>
            <a
              href={getWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre o catálogo de uniformes da JOTI.style.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-sm"
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
