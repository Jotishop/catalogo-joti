/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StepOverview } from './components/StepOverview';
import { Fabrics } from './components/Fabrics';
import { PrintModels } from './components/PrintModels';
import { ColorPalette } from './components/ColorPalette';
import { SizeGuide } from './components/SizeGuide';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { MonthlyReplenishment } from './components/MonthlyReplenishment';
import { ClientsTrust } from './components/ClientsTrust';
import { OrderPricingSection } from './components/OrderPricingSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#0B132B] selection:text-white relative">
      {/* 1. Cabeçalho Oficial */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Topo: Apresentação da Marca e Proposta de Valor B2B */}
        <Hero />

        {/* 3. Visão Geral: O Caminho do Uniforme em 5 Passos */}
        <StepOverview />

        {/* 4. Etapa 01: Especificação do Tecido (Poliéster vs Algodão) */}
        <Fabrics />

        {/* 5. Etapa 02: Modelos de Estampa em Pessoas Reais (Mod. 1 e 2) */}
        <PrintModels />

        {/* 6. Etapa 03: Cartela Oficial com 20 Cores e Contraste de Tinta */}
        <ColorPalette />

        {/* 7. Etapa 04: Grade de Medidas Adulto (P ao XGG) */}
        <SizeGuide />

        {/* 8. Prova Visual: Colaboradores Reais Uniformizados em Ação */}
        <ShowcaseGallery />

        {/* 9. Diferencial Chave: Reposição Mensal Rápida (Logo Arquivada) */}
        <MonthlyReplenishment />

        {/* 10. Credibilidade: Empresas Parceiras e Segmentos Atendidos */}
        <ClientsTrust />

        {/* 11. Etapa 05: Simulador & Tabela Oficial (Lado a lado no desktop, empilhado no celular) */}
        <OrderPricingSection />

        {/* 12. Dúvidas Frequentes (FAQ PJ) */}
        <Faq />
      </main>

      {/* 13. Rodapé Oficial */}
      <Footer />

      {/* Botão Flutuante Permanente do WhatsApp (+55 47 9706-5134) */}
      <FloatingWhatsApp />
    </div>
  );
}
