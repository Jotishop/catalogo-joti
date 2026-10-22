import React from 'react';
import { ColorItem } from '../data/catalog';

interface TShirtMockupProps {
  color: ColorItem;
  view: 'front' | 'back';
  model: 'm1' | 'm2';
  className?: string;
  showDimensions?: boolean;
}

export const TShirtMockup: React.FC<TShirtMockupProps> = ({
  color,
  view,
  model,
  className = '',
  showDimensions = true,
}) => {
  const isLightInk = color.textColor === 'light';
  const inkColor = isLightInk ? '#FFFFFF' : '#0B132B';
  const inkSecondary = isLightInk ? '#E2E8F0' : '#334155';

  return (
    <div className={`relative w-full aspect-[400/440] flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 400 440"
        className="w-full h-full filter drop-shadow-lg transition-colors duration-200"
      >
        <defs>
          {/* Sombra de chão do estúdio */}
          <radialGradient id={`studioFloorShadow-${view}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Gradiente de volume e iluminação de estúdio (Luz suave vindo do topo) */}
          <linearGradient id={`studioLightGrad-${view}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.24" />
          </linearGradient>

          {/* Sombra lateral cilíndrica do corpo */}
          <linearGradient id={`flankShadowLeft-${view}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`flankShadowRight-${view}`} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Sombra das mangas e cavas */}
          <linearGradient id={`sleeveShadowLeft-${view}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`sleeveShadowRight-${view}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Trama têxtil micro-canelada do tecido */}
          <pattern id={`fabricWeave-${view}`} width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 0,2 L 4,2 M 2,0 L 2,4" stroke="#000000" strokeWidth="0.4" strokeOpacity="0.05" />
          </pattern>
        </defs>

        {/* 1. Sombra projetada no piso do estúdio fotográfico */}
        <ellipse cx="200" cy="422" rx="145" ry="14" fill={`url(#studioFloorShadow-${view})`} />

        {view === 'front' ? (
          /* ==========================================================
             VISTA FRONTAL DA CAMISETA (MOCKUP ESTÚDIO HD)
             ========================================================== */
          <g>
            {/* Interior visível da gola (fundo da nuca) com profundidade e etiqueta JOTI */}
            <path
              d="M 148,52 Q 200,32 252,52 Q 200,98 148,52 Z"
              fill={color.hex}
            />
            {/* Sombra interna da nuca */}
            <path
              d="M 148,52 Q 200,32 252,52 Q 200,98 148,52 Z"
              fill="#000000"
              fillOpacity="0.32"
            />
            {/* Etiqueta interna de cetim JOTI */}
            <g transform="translate(184, 40)">
              <rect
                x="0"
                y="0"
                width="32"
                height="18"
                rx="2"
                fill={isLightInk ? '#0B132B' : '#F1F5F9'}
                stroke="#000000"
                strokeOpacity="0.2"
                strokeWidth="0.5"
              />
              <text
                x="16"
                y="9"
                textAnchor="middle"
                fill={isLightInk ? '#FFFFFF' : '#0B132B'}
                fontSize="6"
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="0.5"
              >
                JOTI
              </text>
              <text
                x="16"
                y="15"
                textAnchor="middle"
                fill={isLightInk ? '#94A3B8' : '#64748B'}
                fontSize="4.5"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                TAM. M
              </text>
            </g>

            {/* Corpo Principal da Camiseta Frontal */}
            <path
              d="M 148,52 Q 200,98 252,52 Q 296,68 344,96 C 358,128 372,162 384,195 Q 356,215 328,222 L 302,176 C 304,248 302,328 296,404 Q 200,418 104,404 C 98,328 96,248 98,176 L 72,222 Q 44,215 16,195 C 28,162 42,128 56,96 Q 104,68 148,52 Z"
              fill={color.hex}
              stroke="#000000"
              strokeOpacity="0.16"
              strokeWidth="1.2"
            />

            {/* Camada de Trama Têxtil */}
            <path
              d="M 148,52 Q 200,98 252,52 Q 296,68 344,96 C 358,128 372,162 384,195 Q 356,215 328,222 L 302,176 C 304,248 302,328 296,404 Q 200,418 104,404 C 98,328 96,248 98,176 L 72,222 Q 44,215 16,195 C 28,162 42,128 56,96 Q 104,68 148,52 Z"
              fill={`url(#fabricWeave-${view})`}
            />

            {/* Camada de Iluminação Global de Estúdio (Highlights & Shadows) */}
            <path
              d="M 148,52 Q 200,98 252,52 Q 296,68 344,96 C 358,128 372,162 384,195 Q 356,215 328,222 L 302,176 C 304,248 302,328 296,404 Q 200,418 104,404 C 98,328 96,248 98,176 L 72,222 Q 44,215 16,195 C 28,162 42,128 56,96 Q 104,68 148,52 Z"
              fill={`url(#studioLightGrad-${view})`}
            />

            {/* Sombras nas laterais e cavas (profundidade cilíndrica) */}
            <path
              d="M 100,176 L 98,404 Q 140,412 160,408 L 160,176 Z"
              fill={`url(#flankShadowLeft-${view})`}
              opacity="0.65"
            />
            <path
              d="M 300,176 L 302,404 Q 260,412 240,408 L 240,176 Z"
              fill={`url(#flankShadowRight-${view})`}
              opacity="0.65"
            />
            <path
              d="M 56,96 Q 72,136 72,222 L 98,176 Z"
              fill={`url(#sleeveShadowLeft-${view})`}
              opacity="0.75"
            />
            <path
              d="M 344,96 Q 328,136 328,222 L 302,176 Z"
              fill={`url(#sleeveShadowRight-${view})`}
              opacity="0.75"
            />

            {/* Rugas naturais de caimento no tronco */}
            <path
              d="M 104,280 C 130,292 160,296 190,290"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.08"
              strokeWidth="2.5"
            />
            <path
              d="M 104,330 C 140,344 170,346 200,340"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.07"
              strokeWidth="2"
            />
            <path
              d="M 296,310 C 265,322 235,324 210,318"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.07"
              strokeWidth="2"
            />

            {/* Gola Redonda Canelada (Ribbed Crew Neck) com relevo */}
            <path
              d="M 148,52 Q 200,102 252,52"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.25"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M 148,52 Q 200,102 252,52"
              fill="none"
              stroke={color.hex}
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Pesponto duplo da gola */}
            <path
              d="M 146,55 Q 200,106 254,55"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="2 1"
            />
            {/* Sombra projetada pela gola no peito */}
            <path
              d="M 152,65 Q 200,110 248,65"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.14"
              strokeWidth="3.5"
            />

            {/* Costuras dos ombros e mangas (Pesponto técnico ombro-a-ombro) */}
            <path
              d="M 148,52 L 56,96"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.14"
              strokeWidth="1"
              strokeDasharray="3 1.5"
            />
            <path
              d="M 252,52 L 344,96"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.14"
              strokeWidth="1"
              strokeDasharray="3 1.5"
            />

            {/* Costuras de bainha das mangas */}
            <path
              d="M 22,192 Q 46,211 70,218"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="2.5 1"
            />
            <path
              d="M 378,192 Q 354,211 330,218"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="2.5 1"
            />

            {/* Bainha inferior com pesponto duplo industrial */}
            <path
              d="M 104,396 Q 200,410 296,396"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.14"
              strokeWidth="1"
              strokeDasharray="2.5 1"
            />

            {/* ========================================================
                ESTAMPA DTF NO PEITO ESQUERDO (10×10 cm)
                Fidelidade vetorial, sem fundo branco, toque suave
               ======================================================== */}
            <g transform="translate(136, 142)">
              {/* Borda técnica sutil indicando a área exata 10x10 cm */}
              <rect
                x="-26"
                y="-26"
                width="52"
                height="52"
                rx="4"
                fill="none"
                stroke={isLightInk ? '#FFFFFF' : '#0B132B'}
                strokeOpacity="0.18"
                strokeDasharray="2 2"
                strokeWidth="0.8"
              />

              {/* Logo DTF JOTI no Peito com acabamento nítido */}
              <g filter="drop-shadow(0 1px 1px rgba(0,0,0,0.15))">
                <text
                  x="0"
                  y="2"
                  textAnchor="middle"
                  fill={inkColor}
                  fontSize="17"
                  fontWeight="900"
                  fontFamily="'Space Grotesk', system-ui, sans-serif"
                  letterSpacing="-0.5"
                >
                  JOTI
                </text>
                <circle cx="21" cy="-6" r="2.2" fill={inkColor} />
                <text
                  x="0"
                  y="12"
                  textAnchor="middle"
                  fill={inkSecondary}
                  fontSize="5"
                  fontWeight="800"
                  fontFamily="'Space Grotesk', system-ui, sans-serif"
                  letterSpacing="1.2"
                >
                  UNIFORMES
                </text>
              </g>

              {/* Indicador de cota técnica 10x10 cm */}
              {showDimensions && (
                <g transform="translate(0, 32)">
                  <rect
                    x="-24"
                    y="-6"
                    width="48"
                    height="12"
                    rx="3"
                    fill="#0B132B"
                    fillOpacity="0.85"
                  />
                  <text
                    x="0"
                    y="2"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="5.5"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    PEITO 10×10 cm
                  </text>
                </g>
              )}
            </g>
          </g>
        ) : (
          /* ==========================================================
             VISTA TRASEIRA DA CAMISETA (MOCKUP ESTÚDIO HD)
             ========================================================== */
          <g>
            {/* Corpo Traseiro da Camiseta */}
            <path
              d="M 148,46 Q 200,56 252,46 Q 296,68 344,96 C 358,128 372,162 384,195 Q 356,215 328,222 L 302,176 C 304,248 302,328 296,404 Q 200,418 104,404 C 98,328 96,248 98,176 L 72,222 Q 44,215 16,195 C 28,162 42,128 56,96 Q 104,68 148,46 Z"
              fill={color.hex}
              stroke="#000000"
              strokeOpacity="0.16"
              strokeWidth="1.2"
            />

            {/* Camada de Trama Têxtil */}
            <path
              d="M 148,46 Q 200,56 252,46 Q 296,68 344,96 C 358,128 372,162 384,195 Q 356,215 328,222 L 302,176 C 304,248 302,328 296,404 Q 200,418 104,404 C 98,328 96,248 98,176 L 72,222 Q 44,215 16,195 C 28,162 42,128 56,96 Q 104,68 148,46 Z"
              fill={`url(#fabricWeave-${view})`}
            />

            {/* Iluminação de Estúdio Traseira */}
            <path
              d="M 148,46 Q 200,56 252,46 Q 296,68 344,96 C 358,128 372,162 384,195 Q 356,215 328,222 L 302,176 C 304,248 302,328 296,404 Q 200,418 104,404 C 98,328 96,248 98,176 L 72,222 Q 44,215 16,195 C 28,162 42,128 56,96 Q 104,68 148,46 Z"
              fill={`url(#studioLightGrad-${view})`}
            />

            {/* Sombras nas laterais das costas */}
            <path
              d="M 100,176 L 98,404 Q 140,412 160,408 L 160,176 Z"
              fill={`url(#flankShadowLeft-${view})`}
              opacity="0.65"
            />
            <path
              d="M 300,176 L 302,404 Q 260,412 240,408 L 240,176 Z"
              fill={`url(#flankShadowRight-${view})`}
              opacity="0.65"
            />

            {/* Gola Traseira Alta Canelada */}
            <path
              d="M 148,46 Q 200,56 252,46"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.25"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 148,46 Q 200,56 252,46"
              fill="none"
              stroke={color.hex}
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Pesponto reforçado na gola traseira */}
            <path
              d="M 146,51 Q 200,61 254,51"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.16"
              strokeWidth="1"
              strokeDasharray="2.5 1"
            />

            {/* Bainha inferior com pesponto duplo industrial */}
            <path
              d="M 104,396 Q 200,410 296,396"
              fill="none"
              stroke="#000000"
              strokeOpacity="0.14"
              strokeWidth="1"
              strokeDasharray="2.5 1"
            />

            {/* ========================================================
                ESTAMPA DTF COSTAS (25×17 cm) — SOMENTE PARA MODELO 2
               ======================================================== */}
            {model === 'm2' ? (
              <g transform="translate(200, 150)">
                {/* Delimitação técnica da estampa 25x17 cm */}
                <rect
                  x="-72"
                  y="-44"
                  width="144"
                  height="88"
                  rx="6"
                  fill="none"
                  stroke={isLightInk ? '#FFFFFF' : '#0B132B'}
                  strokeOpacity="0.2"
                  strokeDasharray="3 2"
                  strokeWidth="0.8"
                />

                {/* Arte DTF Costas: Nítida, sem fundo branco, toque macio */}
                <g filter="drop-shadow(0 1px 2px rgba(0,0,0,0.2))">
                  <text
                    x="0"
                    y="-14"
                    textAnchor="middle"
                    fill={inkColor}
                    fontSize="18"
                    fontWeight="900"
                    fontFamily="'Space Grotesk', system-ui, sans-serif"
                    letterSpacing="1"
                  >
                    JOTI.style
                  </text>
                  <line
                    x1="-55"
                    y1="-3"
                    x2="55"
                    y2="-3"
                    stroke={inkColor}
                    strokeWidth="1.2"
                    strokeOpacity="0.8"
                  />
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    fill={inkColor}
                    fontSize="8.5"
                    fontWeight="800"
                    fontFamily="'Space Grotesk', system-ui, sans-serif"
                    letterSpacing="1.8"
                  >
                    UNIFORMES PROFISSIONAIS
                  </text>
                  <text
                    x="0"
                    y="24"
                    textAnchor="middle"
                    fill={inkSecondary}
                    fontSize="6.5"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    letterSpacing="1.2"
                  >
                    ITAJAÍ • SANTA CATARINA
                  </text>
                </g>

                {/* Badge técnico 25×17 cm */}
                {showDimensions && (
                  <g transform="translate(0, 52)">
                    <rect
                      x="-34"
                      y="-7"
                      width="68"
                      height="14"
                      rx="3"
                      fill="#0B132B"
                      fillOpacity="0.9"
                    />
                    <text
                      x="0"
                      y="3"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="6"
                      fontWeight="800"
                      fontFamily="sans-serif"
                    >
                      COSTAS 25×17 cm
                    </text>
                  </g>
                )}
              </g>
            ) : (
              /* Modelo 1: Costas totalmente lisas */
              <g transform="translate(200, 200)">
                <rect
                  x="-55"
                  y="-14"
                  width="110"
                  height="28"
                  rx="6"
                  fill="#000000"
                  fillOpacity="0.08"
                />
                <text
                  x="0"
                  y="3"
                  textAnchor="middle"
                  fill={isLightInk ? '#FFFFFF' : '#0B132B'}
                  fillOpacity="0.65"
                  fontSize="9"
                  fontWeight="700"
                  fontStyle="italic"
                  fontFamily="sans-serif"
                >
                  Costas Totalmente Lisas
                </text>
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
