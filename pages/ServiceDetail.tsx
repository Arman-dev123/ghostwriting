
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';
import { Page } from '../types';

const ServiceDetail: React.FC = () => {
  const location = useLocation();
  const service = SERVICES.find(s => s.slug === location.pathname);

  if (!service) {
    return <Navigate to={Page.Services} />;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <SEO 
        title={`${service.title} | Expert Solutions`} 
        description={service.description}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              {service.title.split(' ')[0]} <span className="gold-text-gradient">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-10">
              {service.fullContent}
            </p>
            <Link to={Page.Quotation} state={{ service: service.id }} className="px-12 py-6 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-sm shadow-2xl inline-block hover:scale-105 transition-all">
              Start Your {service.id === 'memoir' ? 'Legacy' : 'Manuscript'}
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 gold-gradient rounded-3xl opacity-10 transform rotate-3 -z-10"></div>
            <img 
              src={`https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&w=800&q=80`} 
              alt={`${service.title} by Gold Leaf Ghostwriting`} 
              className="rounded-3xl shadow-2xl grayscale"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { t: "Expert Research", d: "We dive deep into your subject matter to ensure absolute accuracy and authoritative tone." },
             { t: "Unlimited Revisions", d: "At Gold Leaf Ghostwriting, we don't stop until every word is exactly as you envisioned it." },
             { t: "Full Ownership", d: "You retain 100% of the copyright, royalties, and all intellectual property rights." }
           ].map((item, i) => (
             <div key={i} className="p-10 border border-neutral-100 rounded-2xl hover:border-[#D4AF37] transition-all">
               <h3 className="text-xl font-serif font-bold mb-4">{item.t}</h3>
               <p className="text-neutral-600 text-sm leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
