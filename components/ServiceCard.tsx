
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Service, Page } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(Page.Quotation, { state: { service: service.id } })}
      className="glass-card p-10 rounded-2xl group cursor-pointer hover-gold-glow transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="text-8xl font-serif text-[#D4AF37]">{service.id[0].toUpperCase()}</div>
      </div>
      
      <div className="mb-8 text-[#D4AF37] transform group-hover:scale-110 transition-transform duration-500">
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900 group-hover:text-[#D4AF37] transition-colors">
        {service.title}
      </h3>
      
      <p className="text-neutral-600 leading-relaxed mb-8">
        {service.description}
      </p>
      
      <button className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase text-[#D4AF37] group-hover:text-neutral-900 transition-colors">
        <span>Avail Service</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;
