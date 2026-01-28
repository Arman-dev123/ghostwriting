
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to={Page.Home} className="inline-block mb-8 hover:opacity-90 transition-opacity">
            <Logo variant="dark" className="!items-start" />
          </Link>
          <p className="text-neutral-400 max-w-sm leading-relaxed mb-6">
            Crafting legacies through elite storytelling and world-class publishing services. 
            Excellence, confidentiality, and literary mastery in every leaf.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            {['𝕏', 'ƒ', 'in', '📸'].map(icon => (
              <div key={icon} className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer font-bold text-xs">
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to={Page.Home} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li><Link to={Page.Services} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Services</Link></li>
            <li><Link to={Page.Process} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Our Process</Link></li>
            <li><Link to={Page.Quotation} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Get Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-[#D4AF37]">Contact Us</h4>
          <ul className="space-y-4 text-neutral-400">
            <li className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Email</span>
              <a href="mailto:hello@goldleaf.luxury" className="text-[#D4AF37] hover:underline">hello@goldleaf.luxury</a>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Phone</span>
              <span className="text-white">+1 (800) GOLD-LEAF</span>
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Global Presence</span>
              <span className="text-white">Mayfair, London • 5th Ave, NY</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-neutral-800 text-center text-neutral-500 text-[10px] uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Gold Leaf Ghostwriters. All Rights Reserved. Luxury Ghostwriting & Publishing.</p>
      </div>
    </footer>
  );
};

export default Footer;
