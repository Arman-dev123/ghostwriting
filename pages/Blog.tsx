
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BLOG_POSTS } from '../constants';
// import SEO from '../components/SEO';
// import { Page } from '../types';

// const Blog: React.FC = () => {
//   return (
//     <div className="pt-32 pb-24 bg-white min-h-screen">
//       <SEO 
//         title="Literary Insights & Blog | Gold Leaf Ghostwriting" 
//         description="Explore articles on ghostwriting costs, the publishing process, and expert tips from Gold Leaf Ghostwriting. Build your authority as an author today."
//       />
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="mb-16">
//           <h1 className="text-5xl font-serif font-bold mb-4 text-neutral-900">The Gold Leaf <span className="italic gold-text-gradient">Review</span></h1>
//           <p className="text-neutral-500 text-lg">Industry insights, guides, and strategic advice for aspiring authors and established leaders.</p>
//         </header>

//         <div className="grid md:grid-cols-3 gap-12">
//           {BLOG_POSTS.map((post) => (
//             <Link 
//               key={post.id} 
//               to={`${Page.Blog}/${post.slug}`} 
//               className="group flex flex-col h-full bg-white border border-neutral-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
//             >
//               <div className="h-64 bg-neutral-100 overflow-hidden">
//                 <img 
//                   src={`https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80`} 
//                   alt={post.title} 
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
//                 />
//               </div>
//               <div className="p-8 flex-grow flex flex-col">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">{post.category}</span>
//                   <span className="text-xs text-neutral-400">{post.date}</span>
//                 </div>
//                 <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">{post.title}</h2>
//                 <p className="text-neutral-600 mb-8 line-clamp-3">{post.excerpt}</p>
//                 <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-widest text-neutral-900">
//                   Read Article
//                   <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;



import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import { Page } from '../types';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white min-h-screen">
      <SEO 
        title="Literary Insights & Blog | Gold Leaf Ghostwriting" 
        description="Explore articles on ghostwriting costs, publishing, and expert tips from Gold Leaf Ghostwriting."
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 md:mb-16 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">The Gold Leaf <span className="italic gold-text-gradient">Review</span></h1>
          <p className="text-neutral-500 text-base md:text-lg">Industry insights, guides, and strategic advice for established leaders.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.id} 
              to={`${Page.Blog}/${post.slug}`} 
              className="group flex flex-col h-full bg-white border border-neutral-100 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-48 md:h-64 bg-neutral-100 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80`} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{post.category}</span>
                  <span className="text-[10px] text-neutral-400">{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors line-clamp-2">{post.title}</h2>
                <p className="text-sm text-neutral-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex items-center text-[10px] font-bold uppercase tracking-widest text-neutral-900">
                  Read Article
                  <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;