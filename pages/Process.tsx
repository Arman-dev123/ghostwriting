
import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F9F6EE]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">The Journey</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Our Signature <span className="italic gold-text-gradient">Workflow</span></h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Experience a process designed for transparency, excellence, and ease. 
            We handle the heavy lifting while you remain the soul of the project.
          </p>
        </header>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>

          <div className="space-y-16 md:space-y-0 relative">
            {STEPS.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-20`}>
                <div className="md:w-1/2 p-8 text-center md:text-left">
                   <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center`}>
                      <span className="text-6xl font-serif font-black text-[#D4AF37]/20 mb-2">{step.icon}</span>
                      <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">{step.title}</h3>
                      <p className="text-neutral-600 max-w-md leading-relaxed">{step.description}</p>
                   </div>
                </div>
                
                <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0">
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="md:w-1/2 p-8 hidden md:block">
                  {/* Visual Element Placeholder */}
                  <div className="w-full h-48 bg-white/50 border border-[#D4AF37]/20 rounded-2xl flex items-center justify-center">
                     <span className="text-xs tracking-widest uppercase text-neutral-400">Step {step.icon} Module</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 bg-white rounded-3xl text-center border-2 border-[#D4AF37]/20">
          <h3 className="text-3xl font-serif font-bold mb-4">A Stress-Free Experience</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Our project managers act as your single point of contact, ensuring that every milestone is met with 
            clarity and that your feedback is integrated seamlessly into the final product.
          </p>
          <div className="flex justify-center space-x-8 opacity-50 grayscale">
             <div className="font-serif italic text-xl">Confidential</div>
             <div className="font-serif italic text-xl">Transparent</div>
             <div className="font-serif italic text-xl">Elite</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
