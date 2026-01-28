// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Page } from '../types';
// import Logo from './Logo';
// import { useTheme } from '../lib/themeContext'; // Import the hook

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { isDark, toggleTheme } = useTheme(); // Use the theme hook
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   const navLinks = [
//     { name: 'Home', path: Page.Home },
//     { name: 'Services', path: Page.Services },
//     { name: 'About', path: Page.About },
//     { name: 'Blog', path: Page.Blog },
//     { name: 'FAQ', path: Page.FAQ },
//     { name: 'Get Quote', path: Page.Quotation, special: true },
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled || isMobileMenuOpen 
//         ? 'bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md py-2 shadow-sm border-b border-[#D4AF37]/10' 
//         : 'bg-transparent py-4'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         <Link to={Page.Home} className="transform scale-75 md:scale-90 origin-left hover:opacity-90 transition-opacity">
//           {/* Logo variant changes based on theme */}
//           <Logo variant={isDark ? 'dark' : 'light'} />
//         </Link>

//         {/* Desktop Links & Toggle */}
//         <div className="hidden lg:flex items-center space-x-6">
//           {/* Dark Mode Toggle - Desktop */}
//           <button 
//             onClick={toggleTheme}
//             className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center w-9 h-9 text-sm"
//             aria-label="Toggle Dark Mode"
//           >
//             {isDark ? '☀️' : '🌙'}
//           </button>

//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
//                 link.special 
//                 ? 'px-6 py-2 gold-gradient text-white rounded-full hover:shadow-lg hover:scale-105' 
//                 : location.pathname === link.path 
//                   ? 'text-[#D4AF37] border-b border-[#D4AF37]' 
//                   : 'text-neutral-600 dark:text-neutral-400 hover:text-[#D4AF37]'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Controls */}
//         <div className="flex items-center space-x-4 lg:hidden">
//           {/* Dark Mode Toggle - Mobile */}
//           <button 
//             onClick={toggleTheme}
//             className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center w-8 h-8 text-xs"
//           >
//             {isDark ? '☀️' : '🌙'}
//           </button>

//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2 text-[#D4AF37]"
//             aria-label="Toggle Menu"
//           >
//             <div className="w-6 h-5 flex flex-col justify-between">
//               <span className={`h-0.5 w-full bg-[#D4AF37] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//               <span className={`h-0.5 w-full bg-[#D4AF37] ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
//               <span className={`h-0.5 w-full bg-[#D4AF37] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 flex flex-col items-center py-8 space-y-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`text-[12px] font-bold tracking-[0.2em] uppercase ${
//                 link.special 
//                 ? 'px-10 py-3 gold-gradient text-white rounded-full' 
//                 : 'text-neutral-600 dark:text-neutral-300'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Page } from '../types';
import Logo from './Logo';
import { useTheme } from '../lib/themeContext'; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme(); 
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: Page.Home },
    { name: 'Services', path: Page.Services },
    { name: 'About', path: Page.About },
    { name: 'Blog', path: Page.Blog },
    { name: 'FAQ', path: Page.FAQ },
    { name: 'Get Quote', path: Page.Quotation, special: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md py-2 shadow-sm border-b border-[#D4AF37]/10' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to={Page.Home} className="transform scale-75 md:scale-90 origin-left hover:opacity-90 transition-opacity">
          <Logo variant={isDark ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Links & Toggle */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  link.special 
                  ? 'px-6 py-2 gold-gradient text-white rounded-full hover:shadow-lg hover:scale-105 ml-2' 
                  : location.pathname === link.path 
                    ? 'text-[#D4AF37] border-b border-[#D4AF37]' 
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Luxury Dark Mode Toggle - Desktop */}
          <button 
            onClick={toggleTheme}
            className="group flex items-center space-x-3 pl-6 border-l border-[#D4AF37]/20"
            aria-label="Toggle Dark Mode"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 group-hover:text-[#D4AF37] transition-colors">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center text-sm shadow-sm bg-white/50 dark:bg-neutral-900/50">
              {isDark ? '☀️' : '🌙'}
            </div>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Dark Mode Toggle with Label - Mobile */}
          <button 
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-white/50 dark:bg-neutral-900/50"
          >
            <span className="text-[9px] font-black uppercase tracking-tighter text-[#D4AF37]">
              {isDark ? 'Light' : 'Dark'}
            </span>
            <span className="text-xs">{isDark ? '☀️' : '🌙'}</span>
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#D4AF37]"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-[#D4AF37] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-[#D4AF37] ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-[#D4AF37] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 flex flex-col items-center py-10 space-y-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-bold tracking-[0.25em] uppercase ${
                link.special 
                ? 'px-12 py-4 gold-gradient text-white rounded-full shadow-lg' 
                : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;