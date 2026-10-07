export const WHATSAPP_CONFIG = {
  // Número comercial oficial do cliente JOTI
  number: '554797065134',
  displayNumber: '(47) 9706-5134',
  formattedFull: '+55 47 9706-5134',
  city: 'Itajaí - SC',
  instagram: '@joti.style',
  instagramUrl: 'https://instagram.com/joti.style',
  email: 'jotivendas@gmail.com',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || 'Olá! Gostaria de falar sobre orçamento de uniformes para minha empresa.';
  const cleanNumber = WHATSAPP_CONFIG.number.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
