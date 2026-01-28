import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* PNG logo from public folder */}
      <img src="/logo.png" alt="Gold Leaf Ghostwriting" className="h-24 max-h-32 w-auto" />
    </div>
  );
};

export default Logo;
