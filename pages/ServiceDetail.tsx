
// import React from 'react';
// import { useLocation, Link, Navigate } from 'react-router-dom';
// import { SERVICES } from '../constants';
// import SEO from '../components/SEO';
// import { Page } from '../types';

// const ServiceDetail: React.FC = () => {
//   const location = useLocation();
//   const service = SERVICES.find(s => s.slug === location.pathname);

//   if (!service) {
//     return <Navigate to={Page.Services} />;
//   }

//   return (
//     <div className="pt-32 pb-24 min-h-screen bg-white">
//       <SEO 
//         title={`${service.title} | Expert Solutions`} 
//         description={service.description}
//       />
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
//               {service.title.split(' ')[0]} <span className="gold-text-gradient">{service.title.split(' ').slice(1).join(' ')}</span>
//             </h1>
//             <p className="text-xl text-neutral-600 leading-relaxed mb-10">
//               {service.fullContent}
//             </p>
//             <Link to={Page.Quotation} state={{ service: service.id }} className="px-12 py-6 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-sm shadow-2xl inline-block hover:scale-105 transition-all">
//               Start Your {service.id === 'memoir' ? 'Legacy' : 'Manuscript'}
//             </Link>
//           </div>
//           <div className="relative">
//             <div className="absolute inset-0 gold-gradient rounded-3xl opacity-10 transform rotate-3 -z-10"></div>
//             <img 
//               src={`https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&w=800&q=80`} 
//               alt={`${service.title} by Gold Leaf Ghostwriting`} 
//               className="rounded-3xl shadow-2xl grayscale"
//             />
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//            {[
//              { t: "Expert Research", d: "We dive deep into your subject matter to ensure absolute accuracy and authoritative tone." },
//              { t: "Unlimited Revisions", d: "At Gold Leaf Ghostwriting, we don't stop until every word is exactly as you envisioned it." },
//              { t: "Full Ownership", d: "You retain 100% of the copyright, royalties, and all intellectual property rights." }
//            ].map((item, i) => (
//              <div key={i} className="p-10 border border-neutral-100 rounded-2xl hover:border-[#D4AF37] transition-all">
//                <h3 className="text-xl font-serif font-bold mb-4">{item.t}</h3>
//                <p className="text-neutral-600 text-sm leading-relaxed">{item.d}</p>
//              </div>
//            ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;
import React, { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';
import { Page } from '../types';

const ServiceDetail: React.FC = () => {
  const location = useLocation();
  const service = SERVICES.find(s => s.slug === location.pathname);

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!service) {
    return <Navigate to={Page.Services} />;
  }

  // SEO Keyword Mapping for unique metadata
  const seoData: Record<string, { title: string; desc: string }> = {
    'ghostwriting': {
      title: 'Professional Ghostwriting Services | Hire Expert Book Writers',
      desc: 'Work with elite professional ghostwriters to craft your book. Premium book writing services for memoirs, fiction, and business strategy.'
    },
    'amazon-kdp': {
      title: 'Amazon KDP & Book Publishing Services | Self-Publishing Experts',
      desc: 'Expert Amazon book publishing and KDP optimization. We handle formatting, keyword research, and global distribution to launch your book.'
    },
    'author-website': {
      title: 'Custom Author Website Design | Websites for Writers & Published Authors',
      desc: 'Professional author website development. Build your brand with a luxury, mobile-responsive site designed specifically for writers.'
    }
  };

  const metadata = seoData[service.id] || {
    title: `${service.title} | Premium Literary Solutions`,
    desc: service.description
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <SEO 
        title={metadata.title} 
        description={metadata.desc}
        url={`https://goldleaf-ghostwriting.vercel.app${service.slug}`}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            {/* H1 Tag Optimized for Search Bots */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight text-neutral-900 dark:text-white">
              {service.title.split(' ')[0]} <span className="gold-text-gradient">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
              {service.fullContent}
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to={Page.Quotation} state={{ service: service.id }} className="px-12 py-6 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-sm shadow-2xl hover:scale-105 transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 gold-gradient rounded-3xl opacity-10 transform rotate-3 -z-10"></div>
            <img 
              src={`https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&w=800&q=80`} 
              alt={`${service.title} - Professional Book Publishing and Author Services`} 
              className="rounded-3xl shadow-2xl grayscale border border-[#D4AF37]/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { t: "Specialized Search", d: "We perform deep market and keyword research to ensure your book ranks for the right terms." },
             { t: "Strategic Publishing", d: "At Gold Leaf, our Amazon book publishing experts guide you through every KDP hurdle." },
             { t: "Author Branding", d: "We build custom author websites that act as a hub for your digital presence and book sales." }
           ].map((item, i) => (
             <div key={i} className="p-10 border border-neutral-100 dark:border-neutral-800 rounded-2xl hover:border-[#D4AF37] transition-all bg-white dark:bg-neutral-900/30">
               <h3 className="text-xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">{item.t}</h3>
               <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;