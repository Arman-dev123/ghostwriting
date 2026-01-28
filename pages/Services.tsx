
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Elevated Solutions</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Our Elite Services</h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From the first stroke of the pen to the global digital launch, 
            Goldleaf provides a comprehensive suite of luxury literary services.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Feature Grid */}
        <div className="bg-neutral-950 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">The Goldleaf Standard</h2>
              <ul className="space-y-6">
                {[
                  'Award-winning editorial team',
                  'Cross-platform distribution (Apple, Amazon, B&N)',
                  'Lifetime consultation support',
                  'Proprietary project management portal'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] text-xs">
                      ✓
                    </div>
                    <span className="text-lg opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/600/400?luxury-book" 
                alt="Luxury book" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
