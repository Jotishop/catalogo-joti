import React, { useState, useMemo } from 'react';
import {
  FabricType,
  PrintModelType,
  PRICING_TABLE,
  getPricePerUnit,
  getNextTierIncentive,
  PRICE_TIERS,
} from '../data/catalog';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';
import {
  Plus,
  Minus,
  MessageSquare,
  AlertCircle,
  TrendingDown,
  Info,
  Check,
  TrendingUp,
  Star,
  ShieldCheck,
  Truck,
  FileText,
} from 'lucide-react';

export const OrderPricingSection: React.FC = () => {
  const [fabric, setFabric] = useState<FabricType>('poliester');
  const [model, setModel] = useState<PrintModelType>('m1');
  const [quantity, setQuantity] = useState<number>(100); // Padrão na faixa mais escolhida
  const [xggQuantity, setXggQuantity] = useState<number>(0);
  const [mobileTableTab, setMobileTableTab] = useState<'poliester' | 'algodao'>('poliester');

  const isMinimumMet = quantity >= 10;
  const validXgg = Math.min(xggQuantity, Math.max(0, quantity));

  // Preço unitário atual
  const unitPrice = useMemo(() => {
    return getPricePerUnit(fabric, model, quantity);
  }, [fabric, model, quantity]);

  // Preço base (10 a 29) para cálculo de economia
  const baseUnitPrice = useMemo(() => {
    return getPricePerUnit(fabric, model, 10) || 0;
  }, [fabric, model]);

  // Total
  const total = useMemo(() => {
    if (!isMinimumMet || unitPrice === null) return 0;
    return quantity * unitPrice + validXgg * PRICING_TABLE.xgg_adicional;
  }, [isMinimumMet, quantity, unitPrice, validXgg]);

  // Economia
  const totalAtBasePrice = quantity * baseUnitPrice + validXgg * PRICING_TABLE.xgg_adicional;
  const savings = isMinimumMet ? Math.max(0, totalAtBasePrice - total) : 0;

  // Incentivo para a próxima faixa
  const nextTier = useMemo(() => {
    return getNextTierIncentive(fabric, model, quantity);
  }, [fabric, model, quantity]);

  // Faixa atual ativa
  const currentTierIndex = useMemo(() => {
    if (quantity >= 500) return 5;
    if (quantity >= 300) return 4;
    if (quantity >= 100) return 3;
    if (quantity >= 50) return 2;
    if (quantity >= 30) return 1;
    if (quantity >= 10) return 0;
    return -1;
  }, [quantity]);

  const currentTier = currentTierIndex >= 0 ? PRICE_TIERS[currentTierIndex] : null;

  // Mensagem WhatsApp
  const fabricName = fabric === 'poliester' ? 'Poliéster' : 'Algodão';
  const modelName = model === 'm1' ? 'Modelo 1 (só frente 10x10cm)' : 'Modelo 2 (frente 10x10cm + costas 25x17cm)';
  const formattedTotal = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const xggText = validXgg > 0 ? ` (sendo ${validXgg} em tamanho XGG)` : '';
  const whatsappMessage = `Olá! Quero orçar ${quantity} camisetas de ${fabricName}, ${modelName}${xggText}. Total estimado: R$ ${formattedTotal}. Vou enviar a logo.`;

  const handleQtyChange = (val: number) => {
    const nextVal = Math.max(1, val);
    setQuantity(nextVal);
    if (validXgg > nextVal) {
      setXggQuantity(nextVal);
    }
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 bg-slate-100 border-b border-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Etapa 05 */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-white px-3 py-1 rounded border border-slate-300">
            Etapa 05 • Orçamento & Tabela Regressiva
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
            Simulação de Pedido & Tabela de Valores
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Estampa em DTF Têxtil Digital de alta definição inclusa no valor. O preço unitário diminui proporcionalmente ao aumento da quantidade.
          </p>
        </div>

        {/* Layout Lado a Lado (Desktop) e Empilhado (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUNA ESQUERDA: SIMULADOR INTERATIVO */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-300 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="font-display text-lg font-bold text-slate-950">
                1. Monte sua Simulação
              </h3>
              <span className="text-xs font-semibold text-slate-500">
                Pedido mínimo: <strong className="text-slate-950">10 peças</strong>
              </span>
            </div>

            {/* Tecido */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
                Tecido da Camiseta
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFabric('poliester')}
                  className={`p-3.5 rounded-xl text-left border-2 transition-all ${
                    fabric === 'poliester'
                      ? 'border-[#0B132B] bg-slate-50 text-slate-950 shadow-2xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-950">Poliéster</span>
                    {fabric === 'poliester' && (
                      <span className="w-4 h-4 rounded-full bg-[#0B132B] text-white flex items-center justify-center text-[10px]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Secagem rápida e alta resistência a lavagens.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setFabric('algodao')}
                  className={`p-3.5 rounded-xl text-left border-2 transition-all ${
                    fabric === 'algodao'
                      ? 'border-[#0B132B] bg-slate-50 text-slate-950 shadow-2xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-950">Algodão</span>
                    {fabric === 'algodao' && (
                      <span className="w-4 h-4 rounded-full bg-[#0B132B] text-white flex items-center justify-center text-[10px]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Toque macio e conforto térmico natural.
                  </p>
                </button>
              </div>
            </div>

            {/* Modelo de Estampa */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
                Modelo da Estampa
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModel('m1')}
                  className={`p-3.5 rounded-xl text-left border-2 transition-all ${
                    model === 'm1'
                      ? 'border-[#0B132B] bg-slate-50 text-slate-950 shadow-2xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-950">Modelo 1</span>
                    {model === 'm1' && (
                      <span className="w-4 h-4 rounded-full bg-[#0B132B] text-white flex items-center justify-center text-[10px]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700 mt-0.5">Só frente (10 x 10 cm)</div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    Logo no peito esquerdo e costas lisas.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setModel('m2')}
                  className={`p-3.5 rounded-xl text-left border-2 transition-all ${
                    model === 'm2'
                      ? 'border-[#0B132B] bg-slate-50 text-slate-950 shadow-2xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-950">Modelo 2</span>
                    {model === 'm2' && (
                      <span className="w-4 h-4 rounded-full bg-[#0B132B] text-white flex items-center justify-center text-[10px]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700 mt-0.5">Frente (10x10) + Costas (25x17)</div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    Identificação ampla nas costas para equipes de campo.
                  </p>
                </button>
              </div>
            </div>

            {/* AVISO EXPLICITO OBRIGATÓRIO EM CIMA DA QUANTIDADE */}
            <div className="pt-2 border-t border-slate-100">
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-300 mb-3 flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-[#0B132B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-extrabold text-slate-950">
                    O valor por peça varia de acordo com a quantidade do pedido
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    Quanto maior o pedido, menor o valor unitário. O cálculo ajusta automaticamente o desconto conforme as faixas de quantidade da tabela.
                  </p>
                </div>
              </div>

              {/* Quantidade */}
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="quantity-input" className="block text-xs font-extrabold uppercase tracking-wider text-slate-600">
                  Quantidade Total de Peças
                </label>
                {currentTier && (
                  <span className="text-xs font-bold text-[#0B132B]">
                    Faixa atual: {currentTier.label} peças
                  </span>
                )}
              </div>

              <div className="flex items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => handleQtyChange(quantity - 10)}
                  disabled={quantity <= 10}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-base border border-slate-300"
                  aria-label="Diminuir 10 peças"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <div className="relative flex-1">
                  <input
                    id="quantity-input"
                    type="number"
                    min="1"
                    step="1"
                    value={quantity}
                    onChange={(e) => handleQtyChange(parseInt(e.target.value) || 0)}
                    className="w-full h-12 text-center text-xl font-display font-extrabold text-slate-950 bg-slate-50 border-2 border-slate-300 rounded-xl focus:border-[#0B132B] focus:bg-white focus:outline-none transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 uppercase pointer-events-none">
                    peças
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleQtyChange(quantity + 10)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold transition-colors text-base border border-slate-300"
                  aria-label="Aumentar 10 peças"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Atalhos Rápidos */}
              <div className="mt-2.5 flex flex-wrap gap-1.5 items-center">
                <span className="text-[11px] text-slate-500 font-medium">Atalhos:</span>
                {[10, 30, 50, 100, 300, 500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleQtyChange(preset)}
                    className={`text-[11px] px-2.5 py-1 rounded font-bold transition-colors ${
                      quantity === preset
                        ? 'bg-[#0B132B] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {preset} pçs
                  </button>
                ))}
              </div>
            </div>

            {/* Campo XGG */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <label htmlFor="xgg-input" className="block text-xs font-bold text-slate-950">
                  Quantas peças serão no tamanho XGG?
                </label>
                <p className="text-[11px] text-slate-500">
                  Tamanhos P ao GG são preço padrão. XGG adiciona + R$ 2,00 por peça.
                </p>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setXggQuantity(Math.max(0, validXgg - 1))}
                  disabled={validXgg <= 0}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  id="xgg-input"
                  type="number"
                  min="0"
                  max={quantity}
                  value={validXgg}
                  onChange={(e) => setXggQuantity(Math.max(0, Math.min(quantity, parseInt(e.target.value) || 0)))}
                  className="w-14 h-8 text-center font-bold text-slate-900 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-[#0B132B]"
                />
                <button
                  type="button"
                  onClick={() => setXggQuantity(Math.min(quantity, validXgg + 1))}
                  disabled={validXgg >= quantity}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Box Resumo & Preço */}
            {!isMinimumMet ? (
              <div className="p-4 bg-rose-50 border border-rose-300 rounded-xl text-rose-900 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Pedido mínimo de 10 peças. Adicione mais peças para calcular.</span>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-[#0B132B] text-white space-y-4">
                <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                  <div>
                    <div className="text-[11px] text-slate-400">Preço unitário nesta faixa:</div>
                    <div className="text-2xl sm:text-3xl font-display font-black text-white">
                      R$ {unitPrice?.toFixed(2).replace('.', ',')}
                      <span className="text-xs font-normal text-slate-400 ml-1">/ unidade</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-slate-400">Total estimado:</div>
                    <div className="text-2xl sm:text-3xl font-display font-black text-white">
                      R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="text-xs text-emerald-300 flex items-center gap-1.5 font-medium">
                    <TrendingDown className="w-4 h-4 shrink-0" />
                    <span>
                      Você economiza <strong>R$ {savings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> em relação ao preço inicial de 10 a 29 peças!
                    </span>
                  </div>
                )}

                {nextTier && nextTier.piecesNeeded > 0 && (
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-700 flex items-center gap-2">
                    <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>
                      Faltam <strong>{nextTier.piecesNeeded} peças</strong> para o valor cair para{' '}
                      <strong>R$ {nextTier.targetPrice.toFixed(2).replace('.', ',')}</strong> por peça!
                    </span>
                  </div>
                )}

                {/* Botão Oficial WhatsApp Direto */}
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  Abrir orçamento no WhatsApp ({WHATSAPP_CONFIG.displayNumber})
                </a>

                <div className="text-center text-[10px] text-slate-400">
                  Valores estimados. Frete e prazo sob consulta no atendimento.
                </div>
              </div>
            )}
          </div>

          {/* COLUNA DIREITA: TABELA OFICIAL DE PREÇOS (Lado a Lado no Desktop) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-300 shadow-sm p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-display text-lg font-bold text-slate-950">
                2. Tabela Oficial de Valores
              </h3>
              <span className="text-[11px] font-bold text-[#0B132B] bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                P ao GG inclusos
              </span>
            </div>

            {/* Seletor Mobile de Tecido para a Tabela */}
            <div className="sm:hidden p-1 bg-slate-100 rounded-lg flex items-center border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setMobileTableTab('poliester')}
                className={`flex-1 py-1.5 rounded transition-all ${
                  mobileTableTab === 'poliester' ? 'bg-[#0B132B] text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                Poliéster
              </button>
              <button
                type="button"
                onClick={() => setMobileTableTab('algodao')}
                className={`flex-1 py-1.5 rounded transition-all ${
                  mobileTableTab === 'algodao' ? 'bg-[#0B132B] text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                Algodão
              </button>
            </div>

            {/* Tabela Formatada para Desktop e Tablet */}
            <div className="overflow-hidden rounded-xl border border-slate-300 text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0B132B] text-white font-bold text-[11px] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Faixa</th>
                    <th className="py-2.5 px-2 bg-slate-900 border-l border-slate-800">
                      Poliéster
                      <span className="block text-[9px] font-normal text-slate-400">M1 / M2</span>
                    </th>
                    <th className="py-2.5 px-2 bg-[#0B132B] border-l border-slate-800">
                      Algodão
                      <span className="block text-[9px] font-normal text-slate-400">M1 / M2</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
                  {PRICE_TIERS.map((tier, idx) => {
                    const isSelected = currentTierIndex === idx;
                    const isPopular = tier.isPopular;
                    const p1 = PRICING_TABLE.poliester_m1[idx].toFixed(2).replace('.', ',');
                    const p2 = PRICING_TABLE.poliester_m2[idx].toFixed(2).replace('.', ',');
                    const a1 = PRICING_TABLE.algodao_m1[idx].toFixed(2).replace('.', ',');
                    const a2 = PRICING_TABLE.algodao_m2[idx].toFixed(2).replace('.', ',');

                    return (
                      <tr
                        key={tier.label}
                        className={`transition-colors ${
                          isSelected
                            ? 'bg-slate-200/90 font-bold text-slate-950 border-l-4 border-l-[#0B132B]'
                            : isPopular
                            ? 'bg-slate-50'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-slate-950 text-xs">{tier.label}</span>
                            {isPopular && (
                              <span className="text-[9px] uppercase font-bold bg-[#0B132B] text-white px-1.5 py-0.2 rounded">
                                Mais Escolhida
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-2.5 px-2 border-l border-slate-200">
                          R$ {p1} <span className="text-slate-400 font-normal">/</span> R$ {p2}
                        </td>
                        <td className="py-2.5 px-2 border-l border-slate-200">
                          R$ {a1} <span className="text-slate-400 font-normal">/</span> R$ {a2}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Destaque das Condições Comerciais */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-700">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <FileText className="w-4 h-4 text-[#0B132B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950">Faturamento Facilitado:</strong> Entrada na aprovação do mockup (PIX ou transferência) e saldo com prazo de 15 a 20 dias para empresas.
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#0B132B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950">Nota Fiscal PJ:</strong> Emissão de NF-e completa para todas as compras empresariais.
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <Truck className="w-4 h-4 text-[#0B132B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950">Entrega Ágil:</strong> Atendimento direto em Itajaí, Navegantes, Balneário Camboriú e envio para todo o estado.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
