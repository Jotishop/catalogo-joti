import React, { useState, useMemo } from 'react';
import {
  FabricType,
  PrintModelType,
  PRICING_TABLE,
  getPricePerUnit,
  getNextTierIncentive,
  PRICE_TIERS,
} from '../data/catalog';
import { getWhatsAppUrl } from '../config/whatsapp';
import {
  Calculator as CalcIcon,
  Plus,
  Minus,
  MessageSquare,
  AlertCircle,
  TrendingDown,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';

export const Calculator: React.FC = () => {
  const [fabric, setFabric] = useState<FabricType>('poliester');
  const [model, setModel] = useState<PrintModelType>('m1');
  const [quantity, setQuantity] = useState<number>(100); // Default to most popular tier (100)
  const [xggQuantity, setXggQuantity] = useState<number>(0);

  // Validation
  const isMinimumMet = quantity >= 10;

  // Ensure XGG does not exceed total
  const validXgg = Math.min(xggQuantity, Math.max(0, quantity));

  // Current unit price
  const unitPrice = useMemo(() => {
    return getPricePerUnit(fabric, model, quantity);
  }, [fabric, model, quantity]);

  // Base tier 10-29 unit price for comparison
  const baseUnitPrice = useMemo(() => {
    return getPricePerUnit(fabric, model, 10) || 0;
  }, [fabric, model]);

  // Calculation results
  const total = useMemo(() => {
    if (!isMinimumMet || unitPrice === null) return 0;
    return quantity * unitPrice + validXgg * PRICING_TABLE.xgg_adicional;
  }, [isMinimumMet, quantity, unitPrice, validXgg]);

  // Savings calculation
  const totalAtBasePrice = quantity * baseUnitPrice + validXgg * PRICING_TABLE.xgg_adicional;
  const savings = isMinimumMet ? Math.max(0, totalAtBasePrice - total) : 0;

  // Incentive for next tier
  const nextTier = useMemo(() => {
    return getNextTierIncentive(fabric, model, quantity);
  }, [fabric, model, quantity]);

  // Determine current tier label
  const currentTier = useMemo(() => {
    if (quantity < 10) return null;
    return PRICE_TIERS.find((tier) => {
      if (tier.max === null) return quantity >= tier.min;
      return quantity >= tier.min && quantity <= tier.max;
    });
  }, [quantity]);

  // Build WhatsApp text
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
    <section id="calculadora" className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-bold tracking-wide uppercase mb-3">
            <CalcIcon className="w-3.5 h-3.5 text-amber-700" />
            Simulador Oficial JOTI.style
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Calcule o valor do seu pedido na hora
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Preços transparentes por faixa de quantidade. Escolha o tecido, o modelo de estampa e simule o investimento exato.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              {/* Step 1: Fabric Selection */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                  1. Escolha o Tecido
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFabric('poliester')}
                    className={`p-4 rounded-xl text-left border-2 transition-all relative ${
                      fabric === 'poliester'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-slate-900">Poliéster</span>
                      {fabric === 'poliester' && (
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      Secagem rápida, alta resistência. Ideal para portaria, limpeza e operacional diário.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFabric('algodao')}
                    className={`p-4 rounded-xl text-left border-2 transition-all relative ${
                      fabric === 'algodao'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-slate-900">Algodão</span>
                      {fabric === 'algodao' && (
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      Toque macio e respirável. 100% fibra natural para conforto da equipe e liderança.
                    </p>
                  </button>
                </div>
              </div>

              {/* Step 2: Print Model Selection */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                  2. Modelo da Estampa (Estampa inclusa)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setModel('m1')}
                    className={`p-4 rounded-xl text-left border-2 transition-all relative ${
                      model === 'm1'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-slate-900">Modelo 1</span>
                      {model === 'm1' && (
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-amber-800 mt-0.5">Só frente (10 x 10 cm)</div>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      Logo no peito esquerdo e costas completamente lisas. Discreto e formal.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModel('m2')}
                    className={`p-4 rounded-xl text-left border-2 transition-all relative ${
                      model === 'm2'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-slate-900">Modelo 2</span>
                      {model === 'm2' && (
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-amber-800 mt-0.5">Frente (10x10) + Costas (25x17 cm)</div>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      Logo no peito e identificação visual ampla nas costas. Máxima visibilidade.
                    </p>
                  </button>
                </div>
              </div>

              {/* Step 3: Total Quantity */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="quantity-input" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    3. Quantidade Total de Peças
                  </label>
                  <span className="text-xs font-semibold text-slate-500">
                    Pedido mínimo: <strong className="text-slate-900">10 peças</strong>
                  </span>
                </div>

                {/* Input counter with big buttons */}
                <div className="flex items-stretch gap-2">
                  <button
                    type="button"
                    onClick={() => handleQtyChange(quantity - 10)}
                    disabled={quantity <= 10}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-lg"
                    aria-label="Diminuir 10 peças"
                  >
                    <Minus className="w-6 h-6" />
                  </button>

                  <div className="relative flex-1">
                    <input
                      id="quantity-input"
                      type="number"
                      min="1"
                      step="1"
                      value={quantity}
                      onChange={(e) => handleQtyChange(parseInt(e.target.value) || 0)}
                      className="w-full h-14 text-center text-2xl font-display font-extrabold text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:bg-white focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase pointer-events-none">
                      peças
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleQtyChange(quantity + 10)}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors text-lg"
                    aria-label="Aumentar 10 peças"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>

                {/* Fast Preset Buttons */}
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-slate-400 font-medium">Atalhos rápidos:</span>
                  {[10, 30, 50, 100, 300, 500].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleQtyChange(preset)}
                      className={`text-xs px-2.5 py-1 rounded-md font-bold transition-colors ${
                        quantity === preset
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {preset} pçs
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: XGG option */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <label htmlFor="xgg-input" className="block text-sm font-bold text-slate-900">
                      Quantas dessas peças serão no tamanho XGG?
                    </label>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tamanhos P ao GG têm preço padrão. XGG adiciona + R$ 2,00 por peça.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setXggQuantity(Math.max(0, validXgg - 1))}
                      disabled={validXgg <= 0}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      id="xgg-input"
                      type="number"
                      min="0"
                      max={quantity}
                      value={validXgg}
                      onChange={(e) => setXggQuantity(Math.max(0, Math.min(quantity, parseInt(e.target.value) || 0)))}
                      className="w-16 h-9 text-center font-bold text-slate-900 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => setXggQuantity(Math.min(quantity, validXgg + 1))}
                      disabled={validXgg >= quantity}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output & Summary Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                    Resumo do Pedido
                  </span>
                  {currentTier && (
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                        currentTier.isPopular
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      Faixa: {currentTier.label} {currentTier.isPopular && '★ Mais Escolhida'}
                    </span>
                  )}
                </div>

                {/* Validation Notice if less than 10 */}
                {!isMinimumMet ? (
                  <div className="my-8 p-5 bg-rose-950/80 border border-rose-600 rounded-xl text-rose-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-rose-300 text-base">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      Pedido mínimo: 10 peças
                    </div>
                    <p className="text-xs text-rose-200/90 leading-relaxed">
                      Para manter o preço de fábrica e a estampa de alta qualidade inclusa, atendemos pedidos a partir de 10 unidades. Aumente a quantidade para visualizar o cálculo.
                    </p>
                  </div>
                ) : (
                  <div className="my-6 space-y-5">
                    {/* Price Per Unit */}
                    <div>
                      <div className="text-xs text-slate-400">Preço unitário por peça (P ao GG):</div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl sm:text-4xl font-display font-black text-amber-400">
                          R$ {unitPrice?.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-xs text-slate-400">/ unidade</span>
                      </div>
                    </div>

                    {/* Breakdown Details */}
                    <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tecido selecionado:</span>
                        <span className="font-semibold text-white capitalize">{fabric}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Modelo de estampa:</span>
                        <span className="font-semibold text-white">
                          {model === 'm1' ? 'M1 (só frente 10x10)' : 'M2 (frente 10x10 + costas 25x17)'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Subtotal ({quantity} peças):</span>
                        <span className="font-semibold text-white">
                          R$ {((quantity * (unitPrice || 0))).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      {validXgg > 0 && (
                        <div className="flex justify-between text-amber-300">
                          <span>Adicional {validXgg}x XGG (+ R$ 2,00/peça):</span>
                          <span>+ R$ {(validXgg * PRICING_TABLE.xgg_adicional).toFixed(2).replace('.', ',')}</span>
                        </div>
                      )}
                    </div>

                    {/* Total Estimated Box */}
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                      <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                        Total Estimado do Pedido:
                      </div>
                      <div className="text-3xl sm:text-4xl font-display font-black text-white mt-1">
                        R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>

                    {/* Savings Badge */}
                    {savings > 0 && (
                      <div className="flex items-center gap-2 p-3 bg-emerald-950/70 border border-emerald-600/60 rounded-xl text-emerald-300 text-xs">
                        <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          Você economiza <strong>R$ {savings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> em relação ao preço de 10 a 29 peças!
                        </span>
                      </div>
                    )}

                    {/* Next Tier Incentive */}
                    {nextTier && nextTier.piecesNeeded > 0 && (
                      <div className="flex items-center gap-2 p-3 bg-amber-950/60 border border-amber-600/50 rounded-xl text-amber-200 text-xs">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>
                          Adicione mais <strong>{nextTier.piecesNeeded} peças</strong> para pagar apenas{' '}
                          <strong>R$ {nextTier.targetPrice.toFixed(2).replace('.', ',')}</strong> por peça!
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Button & Disclaimer */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={isMinimumMet ? getWhatsAppUrl(whatsappMessage) : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-base transition-all shadow-lg ${
                    isMinimumMet
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 active:scale-98 shadow-emerald-500/20 cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Pedir orçamento no WhatsApp
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                  <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Valores estimados. Frete e prazo sob consulta.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
