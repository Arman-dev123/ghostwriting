
// import React from 'react';
// import SEO from '../components/SEO';

// const About: React.FC = () => {
//   return (
//     <div className="pt-32 pb-24 min-h-screen bg-white">
//       <SEO 
//         title="About Our Elite Team | Gold Leaf Ghostwriting" 
//         description="Learn about the mission of Gold Leaf Ghostwriting. We are a premier literary agency dedicated to helping leaders and visionaries share their stories."
//       />
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="mb-20 text-center max-w-3xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">The Story of <span className="gold-text-gradient">Gold Leaf Ghostwriting</span></h1>
//           <p className="text-xl text-neutral-600 leading-relaxed">
//             Founded on the principles of excellence and discretion, Gold Leaf Ghostwriting was established to give a voice to the worlds most influential thinkers.
//           </p>
//         </header>

//         <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
//           <div className="order-2 md:order-1">
//             <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
//             <p className="text-neutral-600 leading-relaxed mb-6">
//               At Gold Leaf Ghostwriting, we believe that every great life and every transformative idea deserves a worthy chronicler. Our mission is to bridge the gap between inspiration and publication by providing world-class writing talent to those who need it most.
//             </p>
//             <p className="text-neutral-600 leading-relaxed">
//               We operate at the intersection of classical literature and modern publishing. Our team consists of award-winning authors, veteran editors from major publishing houses, and strategic marketing experts who understand what it takes to succeed in todays crowded marketplace.
//             </p>
//           </div>
//           <div className="order-1 md:order-2">
//             <img 
//               src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" 
//               alt="The team at Gold Leaf Ghostwriting in action" 
//               className="rounded-3xl shadow-2xl grayscale"
//             />
//           </div>
//         </div>

//         <div className="bg-[#F9F6EE] rounded-3xl p-12 text-center">
//           <h2 className="text-3xl font-serif font-bold mb-8">Why "Gold Leaf"?</h2>
//           <p className="max-w-3xl mx-auto text-neutral-700 leading-relaxed italic">
//             "In the world of rare books, gold leaf signifies a work of high value and enduring quality. It is a thin, precious layer that illuminates the text beneath. That is exactly what we do: we provide the illumination your story needs to stand the test of time."
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white">
      <SEO 
        title="About Our Elite Team | Gold Leaf Ghostwriting" 
        description="Learn about the mission of Gold Leaf Ghostwriting. We are a premier literary agency dedicated to helping leaders share their stories."
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 md:mb-8">The Story of <span className="gold-text-gradient">Gold Leaf Ghostwriting</span></h1>
          <p className="text-base md:text-xl text-neutral-600 leading-relaxed">
            Founded on the principles of excellence and discretion, Gold Leaf Ghostwriting was established to give a voice to the world's most influential thinkers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
              At Gold Leaf Ghostwriting, we believe that every great life and every transformative idea deserves a worthy chronicler. Our mission is to bridge the gap between inspiration and publication.
            </p>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Our team consists of award-winning authors and veteran editors from major publishing houses who understand what it takes to succeed in today's crowded marketplace.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" 
              alt="The team at Gold Leaf Ghostwriting" 
              className="rounded-2xl md:rounded-3xl shadow-2xl grayscale w-full object-cover aspect-[4/3] md:aspect-auto"
            />
          </div>
        </div>

        <div className="bg-[#F9F6EE] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 md:mb-8">Why "Gold Leaf"?</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-neutral-700 leading-relaxed italic">
            "In the world of rare books, gold leaf signifies a work of high value and enduring quality. That is exactly what we do: we provide the illumination your story needs to stand the test of time."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;