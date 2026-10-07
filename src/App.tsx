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
import { Calculator } from './components/Calculator';
import { PricingTable } from './components/PricingTable';
import { ClientsTrust } from './components/ClientsTrust';
import { SegmentsServed } from './components/SegmentsServed';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#0B132B] selection:text-white relative">
      {/* 1. Cabeçalho Oficial */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Topo: Apresentação da Marca e Proposta de Valor */}
        <Hero />

        {/* 3. Visão Geral: O Caminho do Pedido em 5 Passos */}
        <StepOverview />

        {/* 4. Etapa 01: Escolha do Tecido (Poliéster vs Algodão) */}
        <Fabrics />

        {/* 5. Etapa 02: Modelos de Estampa em Pessoas Reais (Modelo 1 e 2) */}
        <PrintModels />

        {/* 6. Etapa 03: Cartela de 20 Cores Oficiais e Contraste de Tinta */}
        <ColorPalette />

        {/* 7. Etapa 04: Grade de Medidas Adulto (P ao XGG) */}
        <SizeGuide />

        {/* 8. Galeria em Uso: Colaboradores Reais Uniformizados */}
        <ShowcaseGallery />

        {/* 9. Diferencial: Reposição Mensal Rápida para Novos Funcionários */}
        <MonthlyReplenishment />

        {/* 10. Etapa 05: Simulador de Pedido (Com aviso de valor regressivo por volume) */}
        <Calculator />

        {/* 11. Tabela Regressiva Oficial por Faixa de Quantidade */}
        <PricingTable />

        {/* 12. Quem já uniformizou com a JOTI (Clientes Parceiros) */}
        <ClientsTrust />

        {/* 13. Segmentos B2B Atendidos em Itajaí/SC */}
        <SegmentsServed />

        {/* 14. Perguntas Frequentes (FAQ) */}
        <Faq />
      </main>

      {/* 15. Rodapé Oficial */}
      <Footer />

      {/* Botão Flutuante Permanente do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
