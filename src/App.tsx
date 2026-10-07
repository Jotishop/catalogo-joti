/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Calculator } from './components/Calculator';
import { HowItWorks } from './components/HowItWorks';
import { Fabrics } from './components/Fabrics';
import { PrintModels } from './components/PrintModels';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { ColorPalette } from './components/ColorPalette';
import { PricingTable } from './components/PricingTable';
import { MonthlyReplenishment } from './components/MonthlyReplenishment';
import { SizeGuide } from './components/SizeGuide';
import { ClientsTrust } from './components/ClientsTrust';
import { SegmentsServed } from './components/SegmentsServed';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 relative">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Topo: Hero Section */}
        <Hero />

        {/* 2. Calculadora de Pedido (Peça principal do site) */}
        <Calculator />

        {/* 3. Como funciona, em 3 passos */}
        <HowItWorks />

        {/* 4. Tecidos: Poliéster e Algodão lado a lado */}
        <Fabrics />

        {/* 5. Modelos de Estampa em pessoas reais (Modelo 1 e Modelo 2) */}
        <PrintModels />

        {/* 6. Galeria com 4 fotos de pessoas reais usando */}
        <ShowcaseGallery />

        {/* 7. Cores: Grade interativa com as 20 cores oficiais */}
        <ColorPalette />

        {/* 8. Tabela de Preços por Quantidade (Mobile-first e Desktop) */}
        <PricingTable />

        {/* 9. Reposição mensal para novas contratações */}
        <MonthlyReplenishment />

        {/* 10. Tabela de Medidas (Apenas Linha Adulto P ao XGG) */}
        <SizeGuide />

        {/* 11. Quem já uniformizou com a JOTI (Clientes Parceiros) */}
        <ClientsTrust />

        {/* 12. Segmentos corporativos atendidos */}
        <SegmentsServed />

        {/* 13. Perguntas Frequentes (FAQ) */}
        <Faq />
      </main>

      {/* 14. Rodapé Oficial */}
      <Footer />

      {/* Botão Flutuante de WhatsApp permanente */}
      <FloatingWhatsApp />
    </div>
  );
}
