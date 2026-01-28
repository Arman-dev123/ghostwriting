
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-neutral-900';
  const subTextColor = isDark ? 'text-neutral-400' : 'text-neutral-500';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative mb-[-10px]">
        {/* Stylized Gold Quill SVG based on the user's provided logo */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-16 h-16 drop-shadow-md"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          {/* Feather Part */}
          <path 
            d="M75 15C60 15 45 35 40 55C38 65 42 75 45 80L45.5 82" 
            stroke="url(#goldGradient)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
          <path 
            d="M75 15C85 25 80 45 70 60C65 68 55 75 45 80" 
            fill="url(#goldGradient)" 
            fillOpacity="0.2"
          />
          <path 
            d="M75 15C80 20 85 35 70 55M73 25C76 28 80 40 65 58M70 35C72 38 75 45 60 62M65 45C67 48 70 55 55 68" 
            stroke="url(#goldGradient)" 
            strokeWidth="0.8" 
          />
          {/* Nib Part */}
          <path 
            d="M45.5 82L43 88L41 94L39 96L37 94L35 88L32.5 82L45.5 82Z" 
            fill="url(#goldGradient)" 
          />
          <rect x="38.5" y="82" width="1" height="12" fill={isDark ? "#000" : "#fff"} opacity="0.5" />
          {/* Ink Drop */}
          <circle cx="39" cy="98" r="1.5" fill={isDark ? "#94a3b8" : "#475569"} />
        </svg>
      </div>
      <div className="text-center">
        <h1 className={`font-serif text-3xl font-medium tracking-tight ${textColor}`}>
          Gold <span className="gold-text-gradient">Leaf</span>
        </h1>
        <p className={`text-[10px] uppercase tracking-[0.4em] font-light mt-[-4px] ${subTextColor}`}>
          Ghostwriters
        </p>
      </div>
    </div>
  );
};

export default Logo;
