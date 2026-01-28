import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // Added variant prop to detect theme
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light' }) => {
  // Determine which image to show based on the current theme variant
  const logoSrc = variant === 'dark' ? '/darklogo.png' : '/logo.png';

  return (
    <div className={`flex items-center ${className}`}>
      {/* The image src dynamically switches when the theme is toggled */}
      <img 
        src={logoSrc} 
        alt="Gold Leaf Ghostwriting" 
        className="h-24 max-h-32 w-auto transition-all duration-500" 
      />
    </div>
  );
};

export default Logo;