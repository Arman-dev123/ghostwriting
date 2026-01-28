



import React from 'react';
import SEO from '../components/SEO';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white">
      <SEO 
        title="Common Questions | Gold Leaf Ghostwriting" 
        description="Get answers to frequently asked questions about ghostwriting costs, confidentiality, and the Gold Leaf Ghostwriting process."
      />
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12 md:mb-20 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 md:mb-8">Questions About <span className="gold-text-gradient">Gold Leaf</span></h1>
          <p className="text-sm md:text-lg text-neutral-600">
            Transparency is a core value at Gold Leaf Ghostwriting. Here are the answers to the questions we hear most often.
          </p>
        </header>

        <div className="space-y-6 md:space-y-8">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all">
              <h2 className="text-lg md:text-xl font-serif font-bold mb-3 md:mb-4 text-neutral-900">{faq.question}</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center p-8 md:p-12 bg-neutral-950 text-white rounded-2xl md:rounded-3xl">
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">Still Have Questions?</h3>
          <p className="text-sm md:text-base text-neutral-400 mb-8">Every project is unique. We would love to discuss your specific needs in a private consultation.</p>
          <a href="/#/quotation" className="px-8 py-4 md:px-10 md:py-5 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-xs md:text-sm inline-block shadow-xl">Contact Us Directly</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;