
// import React, { useEffect } from 'react';
// import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import ServiceDetail from './pages/ServiceDetail';
// import Quotation from './pages/Quotation';
// import Process from './pages/Process';
// import About from './pages/About';
// import FAQ from './pages/FAQ';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
// import { Page } from './types';
// import './index.css';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path={Page.Home} element={<Home />} />
//             <Route path={Page.Services} element={<Services />} />
            
//             {/* SEO Specific Service Slugs */}
//             <Route path={Page.Ghostwriting} element={<ServiceDetail />} />
//             <Route path={Page.BookGhostwriting} element={<ServiceDetail />} />
//             <Route path={Page.AmazonKDP} element={<ServiceDetail />} />
//             <Route path={Page.Memoir} element={<ServiceDetail />} />
            
//             <Route path={Page.Quotation} element={<Quotation />} />
//             <Route path={Page.Process} element={<Process />} />
//             <Route path={Page.About} element={<About />} />
//             <Route path={Page.FAQ} element={<FAQ />} />
            
//             {/* Blog Routes */}
//             <Route path={Page.Blog} element={<Blog />} />
//             <Route path={`${Page.Blog}/:slug`} element={<BlogPost />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Quotation from './pages/Quotation';
import Process from './pages/Process';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { Page } from './types';
import { ThemeProvider } from './lib/themeContext'; // Added ThemeProvider
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        {/* Updated main wrapper with dark mode support and smooth transitions */}
        <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path={Page.Home} element={<Home />} />
              <Route path={Page.Services} element={<Services />} />
              
              {/* SEO Specific Service Slugs */}
              <Route path={Page.Ghostwriting} element={<ServiceDetail />} />
              <Route path={Page.BookGhostwriting} element={<ServiceDetail />} />
              <Route path={Page.AmazonKDP} element={<ServiceDetail />} />
              <Route path={Page.Memoir} element={<ServiceDetail />} />
              
              <Route path={Page.Quotation} element={<Quotation />} />
              <Route path={Page.Process} element={<Process />} />
              <Route path={Page.About} element={<About />} />
              <Route path={Page.FAQ} element={<FAQ />} />
              
              {/* Blog Routes */}
              <Route path={Page.Blog} element={<Blog />} />
              <Route path={`${Page.Blog}/:slug`} element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;