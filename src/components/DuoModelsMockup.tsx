import React, { useState } from 'react';
import { ColorItem, COLOR_STUDIO_PHOTOS } from '../data/catalog';
import { ASSETS } from '../assets';
import { ShieldCheck, Check } from 'lucide-react';

interface DuoModelsMockupProps {
  color: ColorItem;
  model: 'm1' | 'm2';
  className?: string;
}

export const DuoModelsMockup: React.FC<DuoModelsMockupProps> = ({
  color,
  model,
  className = '',
}) => {
  const [brandingMode, setBrandingMode] = useState<'joti' | 'client'>('joti');
  const [zoomMode, setZoomMode] = useState<'full' | 'front' | 'back'>('full');

  // Verifica se a cor possui fotografia real de estúdio dedicada (ex: Lilás, código 11)
  const dedicatedPhoto = COLOR_STUDIO_PHOTOS[color.code];
  const isDedicatedPhoto = Boolean(dedicatedPhoto);

  const isLightInk = color.textColor === 'light' || color.isDark;
  const inkColor = isLightInk ? '#FFFFFF' : '#0B132B';
  const inkSecondary = isLightInk ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.75)';
  const isWhiteShirt = color.code === '01';

  // Coordenadas da base padrão (quando usando duo_modelos_base_clean.jpg)
  const baseLeftShirtPath =
    'M 350 283 Q 390 322 430 271 L 440 248 L 450 232 L 460 241 L 500 255 L 550 290 L 575 335 L 585 435 L 518 442 Q 545 580 542 706 Q 395 712 252 706 Q 250 580 264 442 L 192 435 L 214 335 L 235 290 L 280 255 L 310 258 L 340 238 Z';
  const baseRightShirtPath =
    'M 838 235 Q 888 240 948 235 L 995 255 L 1045 290 L 1070 335 L 1085 438 L 1015 445 Q 1028 580 1025 729 Q 880 735 735 729 Q 732 580 745 445 L 675 438 L 690 335 L 715 290 L 765 255 Z';

  // Configurações de coordenadas milimétricas conforme a fotografia ativa
  const chestCoords = isDedicatedPhoto
    ? { x: 365, y: 375, width: 65, height: 65 }
    : { x: 452, y: 342, width: 62, height: 62 };

  const backCoords = isDedicatedPhoto
    ? { x: 815, y: 330, width: 220, height: 150 }
    : { x: 784, y: 345, width: 210, height: 142 };

  const activePhotoSrc = dedicatedPhoto || ASSETS.duoModelos;

  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      {/* Barra de Controles Rápidos do Visualizador (Clean, sem excesso de decorações) */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2.5 mb-3 px-1 text-xs">
        {/* Controles de Foco / Zoom */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5 hidden sm:inline">
            Foco:
          </span>
          <button
            type="button"
            onClick={() => setZoomMode('full')}
            className={`px-3 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              zoomMode === 'full'
                ? 'bg-[#0B132B] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 bg-white'
            }`}
          >
            Frente &amp; Costas
          </button>
          <button
            type="button"
            onClick={() => setZoomMode('front')}
            className={`px-3 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              zoomMode === 'front'
                ? 'bg-[#0B132B] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 bg-white'
            }`}
          >
            Foco Frente (10×10)
          </button>
          <button
            type="button"
            onClick={() => setZoomMode('back')}
            className={`px-3 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              zoomMode === 'back'
                ? 'bg-[#0B132B] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 bg-white'
            }`}
          >
            Foco Costas
          </button>
        </div>

        {/* Alternador de Demonstração da Estampa (JOTI vs Marca Neutra do Cliente) */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5 hidden sm:inline">
            Estampa:
          </span>
          <button
            type="button"
            onClick={() => setBrandingMode('joti')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              brandingMode === 'joti'
                ? 'bg-white text-slate-950 shadow-2xs font-extrabold border border-slate-300'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            JOTI (Exemplo)
          </button>
          <button
            type="button"
            onClick={() => setBrandingMode('client')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              brandingMode === 'client'
                ? 'bg-white text-slate-950 shadow-2xs font-extrabold border border-slate-300'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sua Marca Aqui
          </button>
        </div>
      </div>

      {/* QUADRO FOTOGRÁFICO DE ESTÚDIO COM OS DOIS MODELOS */}
      <div className="relative w-full aspect-[1264/848] rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 shadow-md select-none">
        <div
          className="relative w-full h-full transition-transform duration-300 ease-out origin-center"
          style={{
            transform:
              zoomMode === 'front'
                ? 'scale(1.48) translate(18%, -2%)'
                : zoomMode === 'back'
                ? 'scale(1.48) translate(-18%, -2%)'
                : 'scale(1) translate(0%, 0%)',
          }}
        >
          {/* Camada 1: Fotografia Real de Catálogo Comercial */}
          <img
            src={activePhotoSrc}
            alt={`Modelos reais vestindo uniforme corporativo JOTI na cor ${color.name} (Frente e Costas)`}
            className="w-full h-full object-cover block"
            referrerPolicy="no-referrer"
          />

          {/* Camada 2: Tingimento Têxtil Apenas Quando NÃO For Foto Dedicada */}
          {!isDedicatedPhoto && !isWhiteShirt && (
            <svg
              viewBox="0 0 1264 848"
              className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200"
              style={{
                mixBlendMode: 'multiply',
                opacity: color.isDark ? 0.94 : 0.88,
              }}
            >
              <path
                d={baseLeftShirtPath}
                fill={color.hex}
                className="transition-colors duration-200"
              />
              <path
                d={baseRightShirtPath}
                fill={color.hex}
                className="transition-colors duration-200"
              />
            </svg>
          )}

          {/* Camada 3: Realce de Fibras para Cores Escuras em Foto Base */}
          {!isDedicatedPhoto && color.isDark && !isWhiteShirt && (
            <svg
              viewBox="0 0 1264 848"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                mixBlendMode: 'screen',
                opacity: 0.12,
              }}
            >
              <path d={baseLeftShirtPath} fill="#FFFFFF" />
              <path d={baseRightShirtPath} fill="#FFFFFF" />
            </svg>
          )}

          {/* Camada 4: Estampas DTF Digitais de Alta Definição */}
          <svg
            viewBox="0 0 1264 848"
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
          >
            {/* ==============================================================
                PESSOA DA ESQUERDA (VISTA FRONTAL): ESTAMPA DTF NO PEITO 10×10 cm
                ============================================================== */}
            <g transform={`translate(${chestCoords.x}, ${chestCoords.y})`}>
              {/* Gabarito de Proporção DTF 10x10 cm */}
              <rect
                x="0"
                y="0"
                width={chestCoords.width}
                height={chestCoords.height}
                rx="4"
                fill="none"
                stroke={isLightInk ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)'}
                strokeDasharray="2,2"
                strokeWidth="1"
              />

              {brandingMode === 'joti' ? (
                <>
                  <g transform={`translate(${chestCoords.width / 2}, 26)`}>
                    <rect
                      x="-14"
                      y="-12"
                      width="28"
                      height="24"
                      rx="3"
                      fill="none"
                      stroke={inkColor}
                      strokeWidth="1.8"
                    />
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fill={inkColor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="11"
                      fontWeight="900"
                      letterSpacing="0.8"
                    >
                      J
                    </text>
                  </g>
                  <text
                    x={chestCoords.width / 2}
                    y="45"
                    textAnchor="middle"
                    fill={inkColor}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="7"
                    fontWeight="900"
                    letterSpacing="1"
                  >
                    JOTI
                  </text>
                  <text
                    x={chestCoords.width / 2}
                    y="53"
                    textAnchor="middle"
                    fill={inkSecondary}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="4.5"
                    fontWeight="700"
                    letterSpacing="0.5"
                  >
                    UNIFORMES
                  </text>
                </>
              ) : (
                <>
                  <g transform={`translate(${chestCoords.width / 2}, 23)`}>
                    <circle
                      cx="0"
                      cy="0"
                      r="10"
                      fill="none"
                      stroke={inkColor}
                      strokeWidth="1.6"
                    />
                    <path
                      d="M -5,0 L 5,0 M 0,-5 L 0,5"
                      stroke={inkColor}
                      strokeWidth="1.4"
                    />
                  </g>
                  <text
                    x={chestCoords.width / 2}
                    y="43"
                    textAnchor="middle"
                    fill={inkColor}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="5.5"
                    fontWeight="900"
                    letterSpacing="0.5"
                  >
                    SUA MARCA
                  </text>
                  <text
                    x={chestCoords.width / 2}
                    y="51"
                    textAnchor="middle"
                    fill={inkSecondary}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="4.5"
                    fontWeight="700"
                  >
                    10 × 10 cm
                  </text>
                </>
              )}
            </g>

            {/* ==============================================================
                PESSOA DA DIREITA (VISTA TRASEIRA):
                - MODELO 1: COSTAS 100% LISAS (NENHUMA ESTAMPA OU TEXTO)
                - MODELO 2: ESTAMPA DTF CENTRALIZADA DE 25 × 17 cm
                ============================================================== */}
            {model === 'm2' && (
              <g transform={`translate(${backCoords.x}, ${backCoords.y})`}>
                <rect
                  x="0"
                  y="0"
                  width={backCoords.width}
                  height={backCoords.height}
                  rx="6"
                  fill="none"
                  stroke={isLightInk ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)'}
                  strokeDasharray="3,3"
                  strokeWidth="1"
                />

                {brandingMode === 'joti' ? (
                  <>
                    <rect
                      x="16"
                      y="16"
                      width={backCoords.width - 32}
                      height="66"
                      rx="4"
                      fill="none"
                      stroke={inkColor}
                      strokeWidth="2.8"
                    />
                    <text
                      x={backCoords.width / 2}
                      y="56"
                      textAnchor="middle"
                      fill={inkColor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="22"
                      fontWeight="900"
                      letterSpacing="2.5"
                    >
                      JOTI UNIFORMES
                    </text>
                    <text
                      x={backCoords.width / 2}
                      y="102"
                      textAnchor="middle"
                      fill={inkColor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="10"
                      fontWeight="800"
                      letterSpacing="1.2"
                    >
                      ITAJAÍ / SC • POLIÉSTER &amp; ALGODÃO
                    </text>
                    <text
                      x={backCoords.width / 2}
                      y="120"
                      textAnchor="middle"
                      fill={inkSecondary}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="7.5"
                      fontWeight="700"
                      letterSpacing="0.8"
                    >
                      ESTAMPA DTF COSTAS • 25 × 17 cm
                    </text>
                  </>
                ) : (
                  <>
                    <rect
                      x="16"
                      y="16"
                      width={backCoords.width - 32}
                      height="66"
                      rx="4"
                      fill="none"
                      stroke={inkColor}
                      strokeWidth="2.5"
                    />
                    <text
                      x={backCoords.width / 2}
                      y="47"
                      textAnchor="middle"
                      fill={inkColor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="16"
                      fontWeight="900"
                      letterSpacing="1.5"
                    >
                      SUA EMPRESA AQUI
                    </text>
                    <text
                      x={backCoords.width / 2}
                      y="65"
                      textAnchor="middle"
                      fill={inkColor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="9"
                      fontWeight="800"
                      letterSpacing="1.5"
                    >
                      TELEFONE • SITE • LOGÍSTICA
                    </text>
                    <text
                      x={backCoords.width / 2}
                      y="102"
                      textAnchor="middle"
                      fill={inkColor}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="9"
                      fontWeight="800"
                      letterSpacing="0.8"
                    >
                      ESTAMPA DTF VAZADA DIRETO NAS FIBRAS
                    </text>
                    <text
                      x={backCoords.width / 2}
                      y="120"
                      textAnchor="middle"
                      fill={inkSecondary}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontSize="7.5"
                      fontWeight="700"
                    >
                      GABARITO CORPORATIVO PADRÃO (25 × 17 cm)
                    </text>
                  </>
                )}
              </g>
            )}
          </svg>
        </div>

        {/* Identificadores Limpos nos Cantos Inferiores */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="bg-slate-950/85 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
            Pessoa 1: Frente (Peito 10×10 cm)
          </div>

          <div className="bg-slate-950/85 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
            {model === 'm1'
              ? 'Pessoa 2: Costas 100% Lisa (Sem estampa)'
              : 'Pessoa 2: Costas (DTF Centralizado 25×17 cm)'}
          </div>
        </div>
      </div>

      {/* Legenda Técnica de Fidelidade */}
      <div className="mt-3.5 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0B132B] shrink-0" />
          <span>
            {isDedicatedPhoto ? (
              <>
                <strong className="text-slate-950">Fotografia Real de Estúdio:</strong> Imagem produzida especificamente na cor <strong>Lilás (11)</strong>. Textura, caimento, costuras e tons de pele 100% autênticos, sem filtros de contaminação.
              </>
            ) : (
              <>
                <strong className="text-slate-950">Simulação Têxtil Digital:</strong> A cor altera exclusivamente o tecido da camiseta. Pele, gola canelada e costuras reforçadas são 100% preservadas.
              </>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-300">
            {model === 'm1' ? 'Mod. 1 • Só Peito' : 'Mod. 2 • Peito + Costas'}
          </span>
          <span className="text-[10px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-300">
            Cor {color.code} - {color.name}
          </span>
        </div>
      </div>
    </div>
  );
};
