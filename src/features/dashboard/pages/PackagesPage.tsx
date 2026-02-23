import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* ── Data ── */

type TabKey = 'homestay' | 'safari';

interface PackageData {
  icon: string;
  name: string;
  duration: string;
  price: string;
  note: string;
  description: string;
  features: string[];
  featured?: boolean;
}

interface TabData {
  label: string;
  packages: PackageData[];
}

const TAB_DATA: Record<TabKey, TabData> = {
  homestay: {
    label: 'Homestay',
    packages: [
      {
        icon: '🏡',
        name: 'Rustic',
        duration: '1 Night · 2 Days',
        price: '6,000',
        note: 'Twin sharing',
        description: 'A quick dip into rural tranquility. Wake up to birdsong, eat farm-fresh meals, and breathe.',
        features: [
          'Cozy Room with Garden View',
          'All Organic Meals — Farm to Table',
          'Guided Farm Walk',
          'Evening Bonfire with Tea',
          'Local Village Experience',
        ],
      },
      {
        icon: '🌾',
        name: 'Farmstead',
        duration: '2 Nights · 3 Days',
        price: '14,000',
        note: 'Twin sharing',
        description: 'The perfect weekend escape. Enough time to unwind, explore, and fall in love with the slow life.',
        features: [
          'Premium Room with Forest View',
          'All Organic Meals — Farm to Table',
          'Farm-to-Kitchen Cooking Class',
          'Guided Nature Walk & Birdwatching',
          'Evening Bonfire with Local Stories',
          'Yoga / Meditation Session',
        ],
        featured: true,
      },
      {
        icon: '🌿',
        name: 'Immersion',
        duration: '4 Nights · 5 Days',
        price: '32,000',
        note: 'Twin sharing',
        description: 'Live the farm life fully. By day three, you stop checking your phone. That\'s the point.',
        features: [
          'Best Room with Panoramic View',
          'All Organic Meals + Special Dinners',
          'Daily Farm Activities & Harvest',
          'Cooking Class with Local Chef',
          'Village Cultural Trek',
          'All Transfers Included',
        ],
      },
    ],
  },
  safari: {
    label: 'Safari',
    packages: [
      {
        icon: '🌿',
        name: 'Canopy',
        duration: '2 Nights · 3 Days',
        price: '12,000',
        note: 'Twin sharing',
        description: 'Perfect for those seeking a brief escape. Experience the forest\'s magic in a weekend that feels like a week.',
        features: [
          '2 Guided Morning Walks',
          '1 Jeep Safari at Dawn',
          'All Organic Meals — Farm to Table',
          'Bonfire Evening with Stories',
          'Naturalist Support On-Call',
        ],
      },
      {
        icon: '🐯',
        name: 'Deep Wild',
        duration: '4 Nights · 5 Days',
        price: '28,000',
        note: 'Twin sharing',
        description: 'The sweet spot between exploration and immersion. Enough time to truly slow down and let the forest work its magic.',
        features: [
          '4 Guided Forest Walks (Dawn & Dusk)',
          '3 Jeep Safaris — Core Zone Access',
          'Night Forest Trail Experience',
          'Birdwatching Dawn Walks',
          'Village Trek with Local Meal',
          'Dedicated Naturalist Guide',
        ],
        featured: true,
      },
      {
        icon: '🦅',
        name: 'Sovereignty',
        duration: '7 Nights · 8 Days',
        price: '52,000',
        note: 'Twin sharing',
        description: 'Total immersion. By day five, you stop counting days. This is where transformation happens quietly.',
        features: [
          'Daily Guided Nature Experiences',
          '5 Safaris — Multiple Zones',
          'Wildlife Photography Workshop',
          'Forest Meditation Sessions',
          'Private Wilderness Camp Night',
          'All Transfers Included',
        ],
      },
    ],
  },
};


/* ── Component ── */

export function PackagesPage() {
  const hero = useScrollAnimation();
  const grid = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<TabKey>('homestay');

  const current = TAB_DATA[activeTab];

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
      <div className="flex justify-center gap-8 mb-14 px-4">
        {(Object.keys(TAB_DATA) as TabKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`font-accent text-xs tracking-[0.16em] uppercase pb-2 border-b-2 transition-all duration-300 ${
              activeTab === key
                ? 'text-bark-soil dark:text-soft-earth border-golden-hour font-semibold'
                : 'text-gray-400 border-transparent hover:text-gray-600'
            }`}
          >
            {TAB_DATA[key].label}
          </button>
        ))}
      </div>

      {/* ════════ PACKAGES GRID ════════ */}
      <section className="px-4 sm:px-10 pb-20 md:pb-28 max-w-[1400px] mx-auto">
        <div
          ref={grid.ref}
          key={activeTab}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-fade-in ${grid.isVisible ? 'visible' : ''}`}
        >
          {current.packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-card card-lift relative scroll-fade-in stagger-${i + 1} ${grid.isVisible ? 'visible' : ''} ${
                pkg.featured ? 'border-2 border-golden-hour lg:scale-105' : ''
              }`}
            >
              {pkg.featured && (
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
                  <span className="text-2xl text-golden-hour">₹</span>
                  <span className="font-display text-5xl font-light text-golden-hour leading-none">{pkg.price}</span>
                  <span className="text-sm text-gray-400">/ person</span>
                </div>
                <p className="text-xs text-gray-400 italic relative z-10">{pkg.note}</p>
              </div>

              {/* Body */}
              <div className="px-10 sm:px-12 pb-10 sm:pb-12">
                <p className="font-display italic text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{pkg.description}</p>

                <ul className="space-y-0 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 py-3.5 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 hover:pl-2 transition-all duration-300">
                      <span className="text-golden-hour flex-shrink-0 mt-0.5">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 font-accent text-[11px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-golden-hour text-bark-soil hover:shadow-lg hover:shadow-golden-hour/40 hover:-translate-y-0.5'
                      : 'border-2 border-gray-200 dark:border-gray-700 text-bark-soil dark:text-soft-earth hover:border-golden-hour hover:text-golden-hour hover:-translate-y-0.5'
                  }`}
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
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
