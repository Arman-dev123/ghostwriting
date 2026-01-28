import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Page } from '../types';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to={Page.Blog} />;
  }

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white min-h-screen">
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />
      <div className="max-w-4xl mx-auto px-6">
        <Link to={Page.Blog} className="inline-flex items-center text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-8 md:mb-12 hover:underline">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Insights
        </Link>
        
        <header className="mb-8 md:mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 md:px-4 py-1 bg-[#F9F6EE] text-[#D4AF37] text-[10px] font-bold rounded-full uppercase tracking-widest">{post.category}</span>
            <span className="text-xs md:text-sm text-neutral-400">{post.date} • {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">{post.title}</h1>
        </header>

        <div 
          className="prose prose-sm md:prose-lg max-w-none text-neutral-700 leading-relaxed space-y-4 md:space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 md:mt-20 p-8 md:p-12 bg-[#F9F6EE] rounded-2xl md:rounded-3xl border border-[#D4AF37]/20 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">Ready to Start Your Journey?</h3>
            <p className="text-sm md:text-base text-neutral-600">Let Gold Leaf bring your vision to life with professional literary craftsmanship.</p>
          </div>
          <Link to={Page.Quotation} className="w-full lg:w-auto text-center px-8 py-4 md:px-10 md:py-5 gold-gradient text-white rounded-full font-bold tracking-widest uppercase text-xs md:text-sm shadow-xl flex-shrink-0">Get Your Custom Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;