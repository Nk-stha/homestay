import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/features/dashboard/pages/HomePage';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { ContactButtons } from '@/components/common/ContactButtons';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
      <Navbar />
      <HomePage />
      <Footer />
      <ScrollToTop />
      <ContactButtons />
    </div>
  );
}

export default App;
