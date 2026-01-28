
import React from 'react';
import { Service, BlogPost, Page, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ghostwriting',
    title: 'Elite Ghostwriting Services',
    slug: Page.Ghostwriting,
    description: 'Gold Leaf Ghostwriting offers bespoke literary creation for visionaries. We transform your raw ideas into polished manuscripts that command attention.',
    // Added missing icon property
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    fullContent: 'Professional ghostwriting services by Gold Leaf Ghostwriting are designed for individuals who have a story to tell but lack the time or professional training to put it on paper. Our elite writers act as silent partners, adopting your tone and perspective to create a seamless reading experience. Whether you need a business guide, a white paper, or a full-length book, Gold Leaf Ghostwriting ensures the highest standards of literary excellence.'
  },
  {
    id: 'book-writing',
    title: 'Professional Book Ghostwriting',
    slug: Page.BookGhostwriting,
    description: 'Expert book ghostwriting by Gold Leaf Ghostwriting. Whether it is a business guide or a creative novel, our writers ensure your book is market-ready.',
    // Added missing icon property
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    fullContent: 'At Gold Leaf Ghostwriting, we specialize in professional book ghostwriting that spans multiple genres. From high-octane fiction to data-driven non-fiction, our authors understand the structural requirements of a successful book. We handle the heavy lifting of research, drafting, and developmental editing, leaving you with a completed manuscript that is ready for the global stage.'
  },
  {
    id: 'amazon-kdp',
    title: 'Amazon KDP Ghostwriting & Publishing',
    slug: Page.AmazonKDP,
    description: 'Dominate the charts with Gold Leaf Ghostwriting. Our Amazon KDP experts handle everything from keyword optimization to professional cover design.',
    // Added missing icon property
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    fullContent: 'Navigating the Amazon Kindle Direct Publishing (KDP) landscape requires more than just a good book. Gold Leaf Ghostwriting provides end-to-end KDP solutions, including metadata optimization, category selection, and professional formatting. Our goal is to ensure your project doesn’t just sit on a digital shelf—it thrives on the bestseller lists.'
  },
  {
    id: 'memoir',
    title: 'Memoir & Legacy Ghostwriting',
    slug: Page.Memoir,
    description: 'Preserve your history with Gold Leaf Ghostwriting. We specialize in sensitive, high-impact memoirs that capture your true voice for generations.',
    // Added missing icon property
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    fullContent: 'Your legacy deserves to be preserved with the utmost care. Gold Leaf Ghostwriting offers sensitive and insightful memoir ghostwriting for individuals looking to record their life stories. Our process involves deep-dive interviews to capture the nuance of your experiences, ensuring your memoir sounds authentic, intimate, and deeply human.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How Ghostwriting Works for First-Time Authors',
    slug: 'how-ghostwriting-works',
    date: 'March 15, 2024',
    readTime: '12 min read',
    category: 'Guide',
    excerpt: 'Stepping into the world of professional writing can be daunting. Learn how Gold Leaf Ghostwriting navigates the collaborative process...',
    content: `
      <h2>The Collaborative Spirit of Gold Leaf Ghostwriting</h2>
      <p>Ghostwriting is more than just putting words on paper; it is a profound partnership between a visionary and a literary artisan. At <strong>Gold Leaf Ghostwriting</strong>, we demystify this process for first-time authors who are often hesitant to hand over their "creative baby" to another person.</p>
      
      <p>The process starts with an intensive discovery phase. We don't just ask what you want to say; we ask why you want to say it. This allows our writers to capture the emotional core of your story, ensuring that the final manuscript resonates with your target audience on a visceral level.</p>

      <h3>Phase 1: Deep-Dive Discovery</h3>
      <p>Every successful project at Gold Leaf Ghostwriting begins with conversation. Our writers conduct hours of interviews, recording your thoughts, anecdotes, and specific linguistic patterns. This stage is crucial for "finding the voice." We aim for a result that makes your closest friends believe you wrote every word yourself.</p>
      
      <h3>Phase 2: Architectural Outlining</h3>
      <p>A book without a plan is a house without a foundation. We build a comprehensive chapter-by-chapter outline. This gives you a roadmap of where the narrative is going before we even start drafting the prose. This collaborative planning stage ensures that the pacing is perfect and the logic is sound.</p>
      
      <h3>Phase 3: The Drafting Loop</h3>
      <p>We work in iterative cycles. You will receive chapters as they are completed, allowing for real-time feedback. This prevents any "surprises" at the end of the project and ensures the work stays aligned with your vision. Gold Leaf Ghostwriting prides itself on a transparent and communicative drafting process.</p>
      
      <p>By the time we reach the final period of the final sentence, you won't just have a book; you'll have a legacy. Ready to start your journey? <a href="/#/quotation">Click here to get a custom quote</a>.</p>
    `
  },
  {
    id: '2',
    title: 'The Real Cost of Hiring a Professional Ghostwriter in 2024',
    slug: 'ghostwriting-cost-2024',
    date: 'April 2, 2024',
    readTime: '15 min read',
    category: 'Finance',
    excerpt: 'Quality comes at a price. We break down the industry standards and why Gold Leaf Ghostwriting is an investment in your legacy.',
    content: `
      <h2>Why Investment in Quality Matters</h2>
      <p>One of the most common questions we receive is: "What is the cost of hiring a ghostwriter?" At <strong>Gold Leaf Ghostwriting</strong>, we believe in radical transparency. Hiring a professional is an investment in your personal brand and your long-term literary success.</p>
      
      <h3>Understanding the Range</h3>
      <p>Industry standards for high-quality ghostwriting typically fall into three tiers:</p>
      <ul>
        <li><strong>Entry Level:</strong> $10,000 - $25,000 (Often freelancers with limited experience).</li>
        <li><strong>Mid-Tier Professional:</strong> $30,000 - $60,000 (Solid writers with several published credits).</li>
        <li><strong>Elite Premium:</strong> $75,000 - $150,000+ (This is the space Gold Leaf Ghostwriting occupies for our most complex projects, involving world-class editors and publishing strategists).</li>
      </ul>

      <h3>What Are You Paying For?</h3>
      <p>When you work with Gold Leaf Ghostwriting, you aren't just paying for words. You are paying for:</p>
      <p>1. <strong>Exclusivity:</strong> Our top writers only take on 1-2 projects per year to ensure your book gets the attention it deserves.</p>
      <p>2. <strong>Confidentiality:</strong> Premium NDAs and secure data handling to protect your intellectual property.</p>
      <p>3. <strong>Marketability:</strong> We write books that are designed to sell. We understand the current Amazon KDP algorithms and traditional publishing standards.</p>
      
      <p>Don't settle for "cheap" ghostwriting that will require thousands in additional editing fees later. Invest in excellence from day one with <a href="/#/services">Gold Leaf Ghostwriting</a>.</p>
    `
  },
  {
    id: '3',
    title: 'Ghostwriting vs. Self-Writing: Which Path is Right for You?',
    slug: 'ghostwriting-vs-self-writing',
    date: 'May 10, 2024',
    readTime: '10 min read',
    category: 'Strategy',
    excerpt: 'Time is your most valuable asset. Discover why top leaders choose Gold Leaf Ghostwriting over the struggle of solo authorship.',
    content: `
      <h2>The True Value of Your Time</h2>
      <p>Many prospective authors struggle with the decision to write their book themselves or hire a firm like <strong>Gold Leaf Ghostwriting</strong>. While self-writing is a noble goal, it is often the most expensive path when you account for the value of your time.</p>
      
      <h3>The Reality of Manuscript Creation</h3>
      <p>A standard 50,000-word book requires approximately 500 to 700 hours of focused work. For a high-level executive or business owner, those hours are worth far more than the fee for a professional ghostwriter. Gold Leaf Ghostwriting allows you to stay in your "zone of genius" while we stay in ours.</p>
      
      <h3>Professional Polish vs. Amateur Drafts</h3>
      <p>Even the most talented non-professional writers often struggle with "the middle." Pacing, structural transitions, and narrative tension are skills that take decades to master. Gold Leaf Ghostwriting brings that mastery to your project instantly.</p>

      <h3>The Finishing Line</h3>
      <p>Statistically, over 90% of self-started manuscripts are never finished. By hiring Gold Leaf Ghostwriting, you are ensuring that your book actually reaches the finish line. We provide the accountability and the professional horsepower needed to get your story to the public.</p>
      
      <p>Interested in learning about our specific workflow? <a href="/#/process">View our process here</a>.</p>
    `
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is my project confidential with Gold Leaf Ghostwriting?",
    answer: "Absolutely. We provide standard NDAs (Non-Disclosure Agreements) to ensure your identity as the author is protected and all rights remain with you. Most of our clients prefer to remain anonymous, and we have built our reputation on this iron-clad discretion."
  },
  {
    question: "How long does a typical ghostwriting project take?",
    answer: "Most full-length manuscripts at Gold Leaf Ghostwriting take between 4 to 8 months. This includes the initial interview phase, outlining, drafting, and several rounds of professional editing."
  },
  {
    question: "Do I keep 100% of the royalties?",
    answer: "Yes. Gold Leaf Ghostwriting operates on a work-for-hire basis. Once the final payment is made, all intellectual property, copyright, and future earnings belong entirely to you. We do not take a percentage of your book sales."
  },
  {
    question: "Can Gold Leaf Ghostwriting help with Amazon publishing?",
    answer: "Yes, we specialize in Amazon KDP optimization. We handle the formatting, cover design direction, and metadata strategy to ensure your book has the best possible chance of ranking on the bestseller lists."
  }
];

export const STEPS = [
  {
    title: 'Consultation & Gathering',
    description: 'We begin with a deep dive into your vision, requirements, and the essence of your story.',
    icon: '01'
  },
  {
    title: 'Strategy & Planning',
    description: 'Our strategists map out the narrative arc, project milestones, and publishing roadmap.',
    icon: '02'
  },
  {
    title: 'Writing & Development',
    description: 'Top-tier wordsmiths craft your manuscript while keeping you informed at every turn.',
    icon: '03'
  },
  {
    title: 'Review & Revisions',
    description: 'A collaborative process where we refine every word until the work meets perfection.',
    icon: '04'
  },
  {
    title: 'Final Delivery & Support',
    description: 'We hand over your masterpiece and provide ongoing support for marketing and launches.',
    icon: '05'
  }
];
