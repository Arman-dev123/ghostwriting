
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Page } from '../types';
// import Logo from './Logo';

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: Page.Home },
//     { name: 'Services', path: Page.Services },
//     { name: 'About', path: Page.About },
//     { name: 'Blog', path: Page.Blog },
//     { name: 'FAQ', path: Page.FAQ },
//     { name: 'Get Quote', path: Page.Quotation, special: true },
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm border-b border-[#D4AF37]/10' : 'bg-transparent py-4'}`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         <Link to={Page.Home} className="transform scale-75 md:scale-90 origin-left hover:opacity-90 transition-opacity">
//           <Logo variant="light" />
//         </Link>

//         <div className="hidden lg:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
//                 link.special 
//                 ? 'px-6 py-2 gold-gradient text-white rounded-full hover:shadow-lg hover:scale-105 active:scale-95' 
//                 : location.pathname === link.path 
//                   ? 'text-[#D4AF37] border-b border-[#D4AF37]' 
//                   : 'text-neutral-600 hover:text-[#D4AF37]'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Page } from '../types';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm border-b border-[#D4AF37]/10' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to={Page.Home} className="transform scale-75 md:scale-90 origin-left hover:opacity-90 transition-opacity">
          <Logo variant="light" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                link.special 
                ? 'px-6 py-2 gold-gradient text-white rounded-full hover:shadow-lg hover:scale-105 active:scale-95' 
                : location.pathname === link.path 
                  ? 'text-[#D4AF37] border-b border-[#D4AF37]' 
                  : 'text-neutral-600 hover:text-[#D4AF37]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-800"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-[#D4AF37] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-[#D4AF37] ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-[#D4AF37] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 flex flex-col items-center py-8 space-y-6 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[12px] font-bold tracking-[0.2em] uppercase ${
                link.special 
                ? 'px-10 py-3 gold-gradient text-white rounded-full' 
                : 'text-neutral-600'
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