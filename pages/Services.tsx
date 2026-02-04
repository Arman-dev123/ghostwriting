
// import React from 'react';
// import ServiceCard from '../components/ServiceCard';
// import { SERVICES } from '../constants';

// const Services: React.FC = () => {
//   return (
//     <div className="pt-32 pb-24 min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="mb-20 text-center max-w-3xl mx-auto">
//           <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Elevated Solutions</span>
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Our Elite Services</h1>
//           <p className="text-lg text-neutral-600 leading-relaxed">
//             From the first stroke of the pen to the global digital launch, 
//             Goldleaf provides a comprehensive suite of luxury literary services.
//           </p>
//         </header>

//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {SERVICES.map((service) => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </div>

//         {/* Feature Grid */}
//         <div className="bg-neutral-950 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">The Goldleaf Standard</h2>
//               <ul className="space-y-6">
//                 {[
//                   'Award-winning editorial team',
//                   'Cross-platform distribution (Apple, Amazon, B&N)',
//                   'Lifetime consultation support',
//                   'Proprietary project management portal'
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center space-x-4">
//                     <div className="w-6 h-6 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] text-xs">
//                       ✓
//                     </div>
//                     <span className="text-lg opacity-80">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="relative">
//               <img 
//                 src="https://picsum.photos/600/400?luxury-book" 
//                 alt="Luxury book" 
//                 className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
//               />
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-full opacity-20 blur-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* 1. Page-Level SEO - Targeting the 'Services' Keyword group */}
      <SEO 
        title="Author Services | Professional Ghostwriting & Amazon KDP Experts" 
        description="Explore our elite literary solutions, including professional ghostwriting, Amazon book publishing, KDP optimization, and custom author website design."
        url="https://goldleaf-ghostwriting-one.vercel.app/services"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* 2. REFINED HEADER - Using high-value industry terms */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">
            Elevated Literary Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-neutral-900 dark:text-white">
            Our Professional <span className="gold-text-gradient">Publishing Services</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            From **Professional Ghostwriting** to **Amazon KDP Optimization** and custom **Author Website** design, 
            Gold Leaf provides a comprehensive suite of luxury literary services tailored for visionaries.
          </p>
        </header>

        {/* 3. SERVICE GRID - Each card links to a keyword-optimized detail page */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div key={service.id} className="group">
               <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* 4. FEATURE GRID - Optimized for 'The Gold Leaf Standard' SEO */}
        <div className="bg-neutral-950 dark:bg-neutral-900/50 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden border border-[#D4AF37]/10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-[#D4AF37]">
                The Gold Leaf Publishing Standard
              </h2>
              <ul className="space-y-6">
                {[
                  { t: 'Elite Editorial Team', d: 'Expert ghostwriters for memoirs and business books.' },
                  { t: 'Global KDP Distribution', d: 'Seamless Amazon, Apple Books, and B&N launch.' },
                  { t: 'Strategic Author Branding', d: 'Custom websites designed for published authors.' },
                  { t: 'Full IP Ownership', d: 'You retain 100% of royalties and copyrights.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1 border border-[#D4AF37] rounded-full flex-shrink-0 flex items-center justify-center text-[#D4AF37] text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="text-lg font-bold block text-white">{item.t}</span>
                      <span className="text-neutral-400 text-sm">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* 5. TARGETED IMAGE ALT TEXT - Essential for Image Search SEO */}
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Amazon Book Publishing and Ghostwriting Workflow" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10" 
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;