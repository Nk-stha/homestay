import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/features/dashboard/pages/HomePage';
import { GalleryPage } from '@/features/dashboard/pages/GalleryPage';
import { BlogPage } from '@/features/dashboard/pages/BlogPage';
import { FarmToTablePage } from '@/features/dashboard/pages/FarmToTablePage';
import { PackagesPage } from '@/features/dashboard/pages/PackagesPage';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { ContactButtons } from '@/components/common/ContactButtons';

function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (page) {
      case '#gallery':
        return <GalleryPage />;
      case '#blog':
        return <BlogPage />;
      case '#farm-to-table':
        return <FarmToTablePage />;
      case '#packages':
        return <PackagesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
      <Navbar />
      {renderPage()}
      <Footer />
      <ScrollToTop />
      <ContactButtons />
    </div>
  );
}

export default App;

