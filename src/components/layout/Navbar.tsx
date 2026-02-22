import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-dark/95 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <svg className="w-10 h-10 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            <span className="text-white font-display font-bold text-xl tracking-widest uppercase">
              Vanavasam
            </span>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a className="text-white hover:text-accent-gold px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#lodge">
                The Lodge
              </a>
              <a className="text-white hover:text-accent-gold px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#safaris">
                Safaris
              </a>
              <a className="text-white hover:text-accent-gold px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#gallery">
                Gallery
              </a>
              <a className="text-white hover:text-accent-gold px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#blog">
                Blogs
              </a>
              <a className="text-white hover:text-accent-gold px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#farm-to-table">
                Farm to Table
              </a>
              <a className="text-white hover:text-accent-gold px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#story">
                Our Story
              </a>
              <a className="bg-primary hover:bg-opacity-90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-primary/50" href="#book">
                Book Now
              </a>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-gold focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-dark/95 backdrop-blur-md">
            <a className="text-white hover:text-accent-gold block px-3 py-2 rounded-md text-base font-medium" href="#lodge">
              The Lodge
            </a>
            <a className="text-white hover:text-accent-gold block px-3 py-2 rounded-md text-base font-medium" href="#safaris">
              Safaris
            </a>
            <a className="text-white hover:text-accent-gold block px-3 py-2 rounded-md text-base font-medium" href="#gallery">
              Gallery
            </a>
            <a className="text-white hover:text-accent-gold block px-3 py-2 rounded-md text-base font-medium" href="#blog">
              Blogs
            </a>
            <a className="text-white hover:text-accent-gold block px-3 py-2 rounded-md text-base font-medium" href="#farm-to-table">
              Farm to Table
            </a>
            <a className="text-white hover:text-accent-gold block px-3 py-2 rounded-md text-base font-medium" href="#story">
              Our Story
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
