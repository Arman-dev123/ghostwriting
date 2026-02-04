

import React, { useState } from 'react';
import { STEPS } from '../constants';
import { useTheme } from '../lib/themeContext';

const Process: React.FC = () => {
  const { isDark } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-[#F9F6EE] transition-colors duration-500 ${isDark ? 'dark bg-neutral-950' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with animation */}
        <header className="mb-12 md:mb-20 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4 block animate-in fade-in slide-in-from-top-2 duration-500">
            The Journey
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 md:mb-8 dark:text-white animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
            Our Signature <span className="italic gold-text-gradient">Workflow</span>
          </h1>
          
          <p className="text-sm md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
            Experience a process designed for transparency, excellence, and ease. 
            We handle the heavy lifting while you remain the soul of the project.
          </p>
        </header>

        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 opacity-50 animate-in fade-in duration-1000 delay-300"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {STEPS.map((step, index) => (
              <div 
                key={index} 
                className={`group flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700`}
                style={{ animationDelay: `${400 + index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-4 md:p-8 text-center">
                   <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center transition-all duration-300 ${hoveredIndex === index ? 'transform md:scale-105' : ''}`}>
                      {/* Large Icon with hover effect */}
                      <span className={`text-4xl md:text-6xl font-serif font-black mb-2 transition-all duration-500 ${hoveredIndex === index ? 'text-[#D4AF37]/40 scale-110' : 'text-[#D4AF37]/20'}`}>
                        {step.icon}
                      </span>
                      
                      {/* Title with hover effect */}
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-4 text-neutral-900 dark:text-white transition-colors duration-300 ${hoveredIndex === index ? 'text-[#D4AF37] dark:text-[#D4AF37]' : ''}`}>
                        {step.title}
                      </h3>
                      
                      {/* Description with improved readability */}
                      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
                        {step.description}
                      </p>
                   </div>
                </div>
                
                {/* Timeline Circle with pulse animation */}
                <div className="relative z-10 flex-shrink-0 my-6 md:my-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 gold-gradient rounded-full flex items-center justify-center border-4 border-white dark:border-neutral-900 shadow-xl transition-all duration-500 ${hoveredIndex === index ? 'scale-125 shadow-2xl shadow-[#D4AF37]/50' : ''}`}>
                    <div className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${hoveredIndex === index ? 'w-3 h-3' : ''}`}></div>
                  </div>
                  
                  {/* Pulse effect on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 gold-gradient rounded-full animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Interactive Module Card */}
                <div className="md:w-1/2 p-8 hidden md:block">
                  <div className={`w-full h-48 bg-white/50 dark:bg-white/5 border border-[#D4AF37]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-all duration-500 cursor-pointer ${hoveredIndex === index ? 'bg-white dark:bg-neutral-900/80 border-[#D4AF37]/60 shadow-2xl transform scale-105' : 'hover:border-[#D4AF37]/40'}`}>
                     <div className="text-center">
                       {/* Step number in dark gold */}
                       <div className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 ${hoveredIndex === index ? 'text-[#B8860B] scale-110' : 'text-[#D4AF37]/60'}`}>
                         {String(index + 1).padStart(2, '0')}
                       </div>
                       {/* Module text - increased size */}
                       <span className={`text-sm md:text-base tracking-widest uppercase transition-all duration-300 ${hoveredIndex === index ? 'text-[#D4AF37] font-bold' : 'text-neutral-400 dark:text-neutral-500'}`}>
                         Step Module
                       </span>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Footer Card with hover effect */}
        <div className="mt-12 md:mt-20 p-8 md:p-12 bg-white dark:bg-neutral-900/50 rounded-2xl md:rounded-3xl text-center border-2 border-[#D4AF37]/20 transition-all duration-500 shadow-lg hover:shadow-2xl hover:border-[#D4AF37]/40 hover:scale-[1.02] cursor-default group/footer">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 dark:text-white transition-colors duration-300 group-hover/footer:text-[#D4AF37]">
            A Stress-Free Experience
          </h3>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our project managers act as your single point of contact, ensuring that every milestone is met with 
            clarity and that your feedback is integrated seamlessly.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-xl italic font-serif">
             <div className="px-6 py-2 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:bg-[#D4AF37]/20 hover:scale-110 cursor-default">
               Confidential
             </div>
             <div className="px-6 py-2 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:bg-[#D4AF37]/20 hover:scale-110 cursor-default">
               Transparent
             </div>
             <div className="px-6 py-2 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:bg-[#D4AF37]/20 hover:scale-110 cursor-default">
               Elite
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;