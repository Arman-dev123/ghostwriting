// import React from 'react';

// interface SEOProps {
//   title: string;
//   description: string;
//   url?: string;
//   image?: string;
// }

// const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
//   return (
//     <>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       {url && <meta property="og:url" content={url} />}
//       {image && <meta property="og:image" content={image} />}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//     </>
//   );
// };

// export default SEO;


import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  siteName?: string; // Added siteName prop
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  url, 
  image, 
  siteName = "Gold Leaf Ghostwriting" // Default value
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* 1. Open Graph Site Name (Crucial for social media and Google) */}
      <meta property="og:site_name" content={siteName} />
      
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* 2. Structured Data (The most powerful way to fix the "Vercel" issue) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": url || "https://goldleaf-ghostwriting-one.vercel.app/"
        })}
      </script>
    </>
  );
};

export default SEO;