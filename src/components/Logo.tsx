import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'large';
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header', light = false }) => {
  const [imgError, setImgError] = useState(false);

  const imgHeightClass =
    variant === 'large'
      ? 'h-14 sm:h-16'
      : variant === 'footer'
      ? 'h-10 sm:h-11'
      : 'h-10 sm:h-11';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <div className={`flex items-center ${light ? 'bg-white/95 p-1.5 rounded-lg shadow-sm' : ''}`}>
          <img
            src="/logo-joti.png"
            alt="JOTI.style - Uniformes Corporativos"
            className={`${imgHeightClass} w-auto max-w-[190px] object-contain block`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Fallback if logo file fails */
        <div className="flex items-center gap-2">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-black ${
              light ? 'bg-white text-slate-900' : 'bg-slate-950 text-white'
            }`}
          >
            J
          </div>
          <span className={`font-black text-xl tracking-tight ${light ? 'text-white' : 'text-slate-950'}`}>
            JOTI<span className="text-blue-900">.style</span>
          </span>
        </div>
      )}
    </div>
  );
};
