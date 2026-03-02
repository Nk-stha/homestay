import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* ── Types matching API responses ── */

interface Category {
  id: number;
  name: string;
  slug: string;
  display_order: number;
  is_active: boolean;
}

interface Package {
  id: number;
  category_id: number;
  icon: string;
  name: string;
  duration: string;
  price: number;
  currency: string;
  price_note: string;
  description: string;
  is_featured: boolean;
  display_order: number;
  is_active: boolean;
  category_name: string;
  category_slug: string;
  features: string[];
}

const API_BASE = 'https://api.bardiaecofriendlyhomestay.com/api';

/* ── Component ── */

export function PackagesPage() {
  const hero = useScrollAnimation();
  const grid = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const [categories, setCategories] = useState<Category[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, pkgRes] = await Promise.all([
          fetch(`${API_BASE}/package-categories/list`),
          fetch(`${API_BASE}/packages/list`),
        ]);
        const catData = await catRes.json();
        const pkgData = await pkgRes.json();

        const cats: Category[] = catData.data || [];
        const pkgs: Package[] = pkgData.data || [];

        setCategories(cats);
        setPackages(pkgs);
        if (cats.length > 0) setActiveSlug(cats[0].slug);
      } catch (err) {
        console.error('Failed to fetch packages:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = packages.filter((p) => p.category_slug === activeSlug);

  const formatPrice = (price: number) =>
    price.toLocaleString('en-IN');

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="pt-36 sm:pt-44 pb-16 md:pb-20 px-6 sm:px-10 text-center max-w-4xl mx-auto">
        <div
          ref={hero.ref}
          className={`scroll-fade-in ${hero.isVisible ? 'visible' : ''}`}
        >
          <span className="font-accent text-[11px] tracking-[0.25em] uppercase text-golden-hour inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-golden-hour" />
            Choose Your Journey
            <span className="w-8 h-px bg-golden-hour" />
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-bark-soil leading-[1.15] mb-7">
            Find Your Perfect
            <br />
            <em className="text-golden-hour italic">Forest Escape</em>
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed-plus text-gray-500 max-w-2xl mx-auto">
            From weekend getaways to extended wilderness immersions, each
            package is designed to help you disconnect from the world and
            reconnect with what matters.
          </p>
        </div>
      </section>

      {/* ════════ TABS ════════ */}
      {categories.length > 1 && (
        <div className="flex justify-center gap-8 mb-14 px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveSlug(cat.slug)}
              className={`font-accent text-xs tracking-[0.16em] uppercase pb-2 border-b-2 transition-all duration-300 ${
                activeSlug === cat.slug
                  ? 'text-bark-soil dark:text-soft-earth border-golden-hour font-semibold'
                  : 'text-gray-400 border-transparent hover:text-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* ════════ PACKAGES GRID ════════ */}
      <section className="px-4 sm:px-10 pb-20 md:pb-28 max-w-[1400px] mx-auto">
        <div
          ref={grid.ref}
          key={activeSlug}
          className={`scroll-fade-in ${grid.isVisible ? 'visible' : ''}`}
        >
          {loading ? (
            <div className="text-center py-20 text-gray-400 font-accent text-sm tracking-widest uppercase">
              Loading packages...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-accent text-sm tracking-widest uppercase">
              No packages available
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 ${filtered.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'} gap-8`}
            >
            {filtered.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-card card-lift relative scroll-fade-in stagger-${i + 1} ${grid.isVisible ? 'visible' : ''} ${
                  pkg.is_featured ? 'border-2 border-golden-hour lg:scale-105' : ''
                }`}
              >
                {pkg.is_featured && (
                  <span className="absolute top-6 right-6 bg-golden-hour text-bark-soil px-4 py-1.5 rounded-full font-accent text-[9px] tracking-[0.18em] uppercase font-semibold z-10 animate-pulse-glow">
                    Most Popular
                  </span>
                )}

                {/* Header */}
                <div className="p-10 sm:p-12 relative overflow-hidden">
                  <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-radial from-golden-hour/5 to-transparent opacity-60 pointer-events-none" />

                  <span className="text-5xl mb-5 block relative z-10 animate-float">{pkg.icon}</span>
                  <h3 className="font-display text-4xl text-bark-soil dark:text-soft-earth mb-2 relative z-10">{pkg.name}</h3>
                  <p className="font-accent text-[11px] tracking-[0.18em] uppercase text-gray-400 mb-6 relative z-10">{pkg.duration}</p>

                  <div className="flex items-baseline gap-2 mb-2 relative z-10">
                    <span className="text-2xl text-golden-hour">{pkg.currency}</span>
                    <span className="font-display text-5xl font-light text-golden-hour leading-none">{formatPrice(pkg.price)}</span>
                    <span className="text-sm text-gray-400">/ person</span>
                  </div>
                  <p className="text-xs text-gray-400 italic relative z-10">{pkg.price_note}</p>
                </div>

                {/* Body */}
                <div className="px-10 sm:px-12 pb-10 sm:pb-12">
                  {pkg.description && (
                    <p className="font-display italic text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{pkg.description}</p>
                  )}

                  {pkg.features.length > 0 && (
                    <ul className="space-y-0">
                      {pkg.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-3 py-3.5 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 hover:pl-2 transition-all duration-300">
                          <span className="text-golden-hour flex-shrink-0 mt-0.5">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section
        className="py-28 md:py-36 px-6 sm:px-10 text-center relative parallax-fixed min-h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/camping.jpg')" }}
      >
        <div className="absolute inset-0 bg-deep-forest/70" />

        <div
          ref={ctaRef.ref}
          className={`max-w-2xl mx-auto relative z-10 scroll-fade-in ${ctaRef.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-earth leading-tight mb-6">
            Ready to <em className="text-golden-hour italic">Disconnect</em>
            <br />
            and Discover?
          </h2>
          <p className="text-base font-light leading-relaxed-plus text-soft-earth/70 mb-10">
            Availability fills up 6-8 weeks ahead, especially for weekends and
            holidays. Reserve your dates now and we'll take care of everything.
          </p>
          <button className="px-10 py-4 border-2 border-soft-earth/30 text-soft-earth font-accent text-[12px] tracking-[0.18em] uppercase font-semibold hover:border-soft-earth transition-all duration-300 hover:-translate-y-0.5">
            Talk to Us First
          </button>
        </div>
      </section>
    </>
  );
}
