import React from 'react';

const SEO = ({ title, description }: { title: string; description: string }) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
  }, [title, description]);

  return null;
};

export default SEO;
