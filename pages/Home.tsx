
// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Page } from '../types';
// import SEO from '../components/SEO';
// import { SERVICES } from '../constants';

// const Home: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col">
//      <SEO 
//   title="Gold Leaf Ghostwriting | Premium Professional Ghostwriting Services" 
//   description="GoldLeaf Ghostwriting is the premier choice for professional ghostwriting, book publishing, and Amazon KDP optimization. We craft legacies with discretion."
//   url="https://goldleaf-ghostwriting-one.vercel.app/"
//   image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
// />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F6EE] -z-10"></div>
        
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight mb-8">
//               Your Vision, <br />
//               <span className="gold-text-gradient italic">Gold Leaf Ghostwriting</span> Excellence.
//             </h1>
//             <p className="text-xl text-neutral-600 leading-relaxed mb-10 border-l-4 border-[#D4AF37] pl-6">
//               Gold Leaf Ghostwriting provides elite literary services for visionaries. We transform expertise into authority through world-class manuscripts and strategic publishing.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link to={Page.Quotation} className="px-10 py-5 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-sm shadow-xl hover:shadow-2xl transition-all">
//                 Get a Quote
//               </Link>
//               <Link to={Page.Services} className="px-10 py-5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#D4AF37] hover:text-white transition-all">
//                 Our Services
//               </Link>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="w-full aspect-square gold-gradient opacity-10 absolute rounded-full blur-3xl -top-20 -right-20 animate-pulse"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80" 
//               alt="Professional writing by Gold Leaf Ghostwriting" 
//               className="rounded-2xl shadow-2xl relative z-10 border border-[#D4AF37]/20 grayscale hover:grayscale-0 transition-all duration-1000"
//             />
//           </div>
//         </div>
//       </section>

//       {/* SEO Service Grid */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-serif font-bold mb-4">Master Every Genre</h2>
//             <p className="text-neutral-500 max-w-2xl mx-auto">From memoirs to business strategy, Gold Leaf Ghostwriting delivers excellence across all literary categories.</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {SERVICES.map((s) => (
//               <Link key={s.id} to={s.slug} className="glass-card p-8 rounded-xl hover:border-[#D4AF37] transition-all group">
//                 <div className="text-[#D4AF37] mb-6 transform group-hover:scale-110 transition-transform">{s.icon}</div>
//                 <h3 className="text-xl font-serif font-bold mb-3">{s.title}</h3>
//                 <p className="text-sm text-neutral-600 mb-4">{s.description}</p>
//                 <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest group-hover:underline">Learn More</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trust Signals */}
//       <section className="py-20 bg-neutral-950 text-white overflow-hidden relative">
//         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//           <h2 className="text-3xl font-serif font-bold mb-12">The Gold Leaf Ghostwriting Guarantee</h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             <div>
//               <div className="text-4xl font-bold gold-text-gradient mb-2">100%</div>
//               <p className="text-neutral-400 uppercase tracking-widest text-sm">Confidentiality</p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold gold-text-gradient mb-2">500+</div>
//               <p className="text-neutral-400 uppercase tracking-widest text-sm">Manuscripts Delivered</p>
//             </div>
//             <div>
//               <div className="text-4xl font-bold gold-text-gradient mb-2">Zero</div>
//               <p className="text-neutral-400 uppercase tracking-widest text-sm">AI-Generated Content</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import SEO from '../components/SEO';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Gold Leaf Ghostwriting | Premium Professional Ghostwriting Services" 
        description="Gold Leaf Ghostwriting is the premier choice for professional ghostwriting, book publishing, and Amazon KDP optimization. We craft legacies with discretion."
        url="https://goldleaf-ghostwriting-one.vercel.app/"
        image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 md:pt-32 pb-16">
        {/* Responsive Background: Hidden on mobile for better contrast, visible on large screens */}
        <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-[#F9F6EE] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black leading-tight mb-6 md:mb-8">
              Your Vision, <br />
              <span className="gold-text-gradient italic">Gold Leaf Ghostwriting</span> Excellence.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 md:mb-10 border-l-0 md:border-l-4 border-[#D4AF37] md:pl-6">
              Gold Leaf Ghostwriting provides elite literary services for visionaries. We transform expertise into authority through world-class manuscripts and strategic publishing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to={Page.Quotation} className="px-8 py-4 md:px-10 md:py-5 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-sm shadow-xl hover:shadow-2xl transition-all">
                Get a Quote
              </Link>
              <Link to={Page.Services} className="px-8 py-4 md:px-10 md:py-5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#D4AF37] hover:text-white transition-all">
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative px-4 md:px-0">
            <div className="w-full aspect-square gold-gradient opacity-10 absolute rounded-full blur-3xl -top-10 -right-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80" 
              alt="Professional writing by Gold Leaf Ghostwriting" 
              className="rounded-2xl shadow-2xl relative z-10 border border-[#D4AF37]/20 grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEO Service Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Master Every Genre</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">From memoirs to business strategy, Gold Leaf Ghostwriting delivers excellence across all literary categories.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.id} to={s.slug} className="glass-card p-6 md:p-8 rounded-xl hover:border-[#D4AF37] transition-all group">
                <div className="text-[#D4AF37] mb-4 md:mb-6 transform group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-lg md:text-xl font-serif font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{s.description}</p>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest group-hover:underline">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-neutral-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 md:12">The Gold Leaf Ghostwriting Guarantee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border-b border-neutral-800 md:border-0 pb-8 md:pb-0">
              <div className="text-3xl md:text-4xl font-bold gold-text-gradient mb-2">100%</div>
              <p className="text-neutral-400 uppercase tracking-widest text-xs md:text-sm">Confidentiality</p>
            </div>
            <div className="border-b border-neutral-800 md:border-0 pb-8 md:pb-0">
              <div className="text-3xl md:text-4xl font-bold gold-text-gradient mb-2">500+</div>
              <p className="text-neutral-400 uppercase tracking-widest text-xs md:text-sm">Manuscripts Delivered</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gold-text-gradient mb-2">Zero</div>
              <p className="text-neutral-400 uppercase tracking-widest text-xs md:text-sm">AI-Generated Content</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;