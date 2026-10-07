export interface ColorItem {
  id: string;
  code: string;
  name: string;
  hex: string;
  textColor: 'light' | 'dark'; // for t-shirt ink print
  isDark: boolean;
}

export const CATALOG_COLORS: ColorItem[] = [
  { id: '01', code: '01', name: 'Branco', hex: '#FFFFFF', textColor: 'dark', isDark: false },
  { id: '02', code: '02', name: 'Preto', hex: '#18181B', textColor: 'light', isDark: true },
  { id: '03', code: '03', name: 'Vermelho', hex: '#DC2626', textColor: 'light', isDark: true },
  { id: '04', code: '04', name: 'Cinza', hex: '#CBD5E1', textColor: 'dark', isDark: false },
  { id: '05', code: '05', name: 'Rosa Pink', hex: '#DB2777', textColor: 'light', isDark: true },
  { id: '06', code: '06', name: 'Rosa Bebê', hex: '#FBCFE8', textColor: 'dark', isDark: false },
  { id: '08', code: '08', name: 'Amarelo Canário', hex: '#FACC15', textColor: 'dark', isDark: false },
  { id: '09', code: '09', name: 'Amarelo Bebê', hex: '#FEF08A', textColor: 'dark', isDark: false },
  { id: '10', code: '10', name: 'Bege', hex: '#D6C7A9', textColor: 'dark', isDark: false },
  { id: '11', code: '11', name: 'Lilás', hex: '#C084FC', textColor: 'light', isDark: true },
  { id: '12', code: '12', name: 'Laranja', hex: '#EA580C', textColor: 'light', isDark: true },
  { id: '13', code: '13', name: 'Marrom', hex: '#5C3826', textColor: 'light', isDark: true },
  { id: '14', code: '14', name: 'Areia', hex: '#EAE5D5', textColor: 'dark', isDark: false },
  { id: '15', code: '15', name: 'Azul Marinho', hex: '#0F172A', textColor: 'light', isDark: true },
  { id: '16', code: '16', name: 'Azul Royal', hex: '#1D4ED8', textColor: 'light', isDark: true },
  { id: '17', code: '17', name: 'Azul Celeste', hex: '#93C5FD', textColor: 'dark', isDark: false },
  { id: '18', code: '18', name: 'Azul Turquesa', hex: '#38BDF8', textColor: 'dark', isDark: false },
  { id: '19', code: '19', name: 'Verde Bandeira', hex: '#15803D', textColor: 'light', isDark: true },
  { id: '20', code: '20', name: 'Verde Limão', hex: '#84CC16', textColor: 'dark', isDark: false },
  { id: '21', code: '21', name: 'Verde Água', hex: '#86EFAC', textColor: 'dark', isDark: false },
  { id: '23', code: '23', name: 'Cinza Mescla', hex: '#9CA3AF', textColor: 'dark', isDark: false },
  { id: '24', code: '24', name: 'Uva', hex: '#7E22CE', textColor: 'light', isDark: true },
];

export interface PriceTier {
  min: number;
  max: number | null;
  label: string;
  isPopular?: boolean;
}

export const PRICE_TIERS: PriceTier[] = [
  { min: 10, max: 29, label: '10 a 29' },
  { min: 30, max: 49, label: '30 a 49' },
  { min: 50, max: 99, label: '50 a 99' },
  { min: 100, max: 299, label: '100 a 299', isPopular: true },
  { min: 300, max: 499, label: '300 a 499' },
  { min: 500, max: null, label: '500 ou mais' },
];

export const PRICING_TABLE = {
  faixas: [10, 30, 50, 100, 300, 500],
  xgg_adicional: 2.0,
  poliester_m1: [37.9, 34.9, 33.9, 31.9, 30.9, 29.9],
  poliester_m2: [45.9, 42.9, 40.9, 36.9, 35.9, 34.9],
  algodao_m1: [39.9, 36.9, 35.9, 33.9, 32.9, 31.9],
  algodao_m2: [47.9, 44.9, 42.9, 38.9, 37.9, 36.9],
};

export type FabricType = 'poliester' | 'algodao';
export type PrintModelType = 'm1' | 'm2';

export function getPricePerUnit(fabric: FabricType, model: PrintModelType, qty: number): number | null {
  if (qty < 10) return null;
  
  let tierIndex = 0;
  if (qty >= 500) tierIndex = 5;
  else if (qty >= 300) tierIndex = 4;
  else if (qty >= 100) tierIndex = 3;
  else if (qty >= 50) tierIndex = 2;
  else if (qty >= 30) tierIndex = 1;
  else tierIndex = 0;

  const key = `${fabric}_${model}` as keyof typeof PRICING_TABLE;
  const list = PRICING_TABLE[key] as number[];
  return list ? list[tierIndex] : null;
}

export function getNextTierIncentive(fabric: FabricType, model: PrintModelType, qty: number) {
  if (qty < 10) {
    return {
      piecesNeeded: 10 - qty,
      targetPrice: getPricePerUnit(fabric, model, 10) || 0,
      targetTierLabel: '10 a 29 peças',
    };
  }
  if (qty < 30) {
    return {
      piecesNeeded: 30 - qty,
      targetPrice: getPricePerUnit(fabric, model, 30) || 0,
      targetTierLabel: '30 a 49 peças',
    };
  }
  if (qty < 50) {
    return {
      piecesNeeded: 50 - qty,
      targetPrice: getPricePerUnit(fabric, model, 50) || 0,
      targetTierLabel: '50 a 99 peças',
    };
  }
  if (qty < 100) {
    return {
      piecesNeeded: 100 - qty,
      targetPrice: getPricePerUnit(fabric, model, 100) || 0,
      targetTierLabel: '100 a 299 peças (Mais escolhida)',
    };
  }
  if (qty < 300) {
    return {
      piecesNeeded: 300 - qty,
      targetPrice: getPricePerUnit(fabric, model, 300) || 0,
      targetTierLabel: '300 a 499 peças',
    };
  }
  if (qty < 500) {
    return {
      piecesNeeded: 500 - qty,
      targetPrice: getPricePerUnit(fabric, model, 500) || 0,
      targetTierLabel: '500 ou mais peças',
    };
  }
  return null;
}

export interface SizeMeasurement {
  size: string;
  category: 'adulto';
  heightCm: number;
  widthCm: number;
}

export const SIZE_MEASUREMENTS: SizeMeasurement[] = [
  // Linha Adulto Corporativo
  { size: 'P', category: 'adulto', heightCm: 67.0, widthCm: 51.0 },
  { size: 'M', category: 'adulto', heightCm: 68.0, widthCm: 53.0 },
  { size: 'G', category: 'adulto', heightCm: 71.5, widthCm: 56.0 },
  { size: 'GG', category: 'adulto', heightCm: 74.0, widthCm: 58.0 },
  { size: 'XGG', category: 'adulto', heightCm: 76.0, widthCm: 61.5 },
];

export const FAQS = [
  {
    q: 'A JOTI emite Nota Fiscal para empresas?',
    a: 'Sim, emitimos Nota Fiscal eletrônica com discriminação de serviço e produtos para todas as pessoas jurídicas e órgãos corporativos.',
  },
  {
    q: 'Qual é o pedido mínimo?',
    a: 'O pedido mínimo é de 10 peças por pedido. Você pode mesclar tamanhos (P ao XGG) dentro do mesmo pedido.',
  },
  {
    q: 'Como funciona a forma de pagamento?',
    a: 'Entrada na aprovação do mockup digital (via PIX ou transferência) e o saldo restante com prazo de 15 a 20 dias, facilitando o fluxo de caixa da sua empresa.',
  },
  {
    q: 'Qual é o prazo de produção?',
    a: 'O prazo de produção é ágil e informado no orçamento conforme a quantidade de peças e a fila da estamparia no momento da aprovação do mockup.',
  },
  {
    q: 'Como funciona o frete e entrega?',
    a: 'Frete sob consulta conforme o CEP da sua empresa. Atendemos com entrega rápida em Itajaí, Navegantes, Balneário Camboriú e região, além de envio para todo o Brasil.',
  },
  {
    q: 'Como devo enviar a logo da minha empresa?',
    a: 'Você pode enviar diretamente no WhatsApp em formato vetor (PDF, EPS, CDR ou AI) ou em imagem de alta resolução (PNG com fundo transparente). Montamos o mockup digital exato para sua conferência e aprovação.',
  },
];
