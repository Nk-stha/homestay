import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useApi } from '@/hooks/useApi';

/* ── Types ── */

interface GalleryCategory {
  id: number;
  name: string;
  slug: string;
  display_order: number;
  is_active: boolean;
}

interface GalleryImage {
  id: number;
  categoryId: number;
  categorySlug: string;
  categoryName: string;
  imageUrl: string;
  altText: string;
  displayOrder: number;
  isActive: boolean;
}

const API_BASE = 'https://api.bardiaecofriendlyhomestay.com/api';
const INITIAL_COUNT = 6;
const HEIGHTS = ['380px', '480px', '320px', '420px', '540px', '360px', '460px', '300px'];

export function GalleryMasonrySection() {
  const section = useScrollAnimation();
  const [activeSlug, setActiveSlug] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const { data: categories = [], loading: loadingCats } = useApi<GalleryCategory[]>({
    url: `${API_BASE}/gallery-categories/list`
  });

  const { data: images = [], loading: loadingImgs } = useApi<GalleryImage[]>({
    url: `${API_BASE}/gallery-images/list`
  });

  const loading = loadingCats || loadingImgs;

  const safetyCategories = categories || [];
  useEffect(() => {
    if (safetyCategories.length > 0 && !activeSlug) {
      setActiveSlug(safetyCategories[0].slug);
    }
  }, [categories, activeSlug, safetyCategories]);

  const safeCategories = categories || [];
  const safeImages = images || [];

  const filtered = safeImages.filter((img) => img.categorySlug === activeSlug);
  const visibleImages = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleTabChange = (slug: string) => {
    setActiveSlug(slug);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleSeeMore = () => {
    setVisibleCount(filtered.length);
  };

  return (
    <section className="px-5 pb-24 sm:px-10 max-w-[1400px] mx-auto">
      {/* Divider */}
      <div className="divider-organic mb-12" />

      {/* Tabs */}
      {safeCategories.length > 1 && (
        <div className="flex justify-center gap-8 mb-14">
          {safeCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.slug)}
              className={`font-accent text-xs tracking-[0.16em] uppercase pb-2 border-b-2 transition-all duration-300 ${
                activeSlug === cat.slug
                  ? 'text-bark-soil border-golden-hour font-semibold'
                  : 'text-gray-400 border-transparent hover:text-gray-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <div
        ref={section.ref}
        className={`scroll-fade-in ${section.isVisible ? 'visible' : ''}`}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-12 h-12 border-4 border-golden-hour/20 border-t-golden-hour rounded-full animate-spin mb-4" />
            <p className="text-gray-400 font-accent text-xs tracking-widest uppercase">Loading gallery...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-accent text-sm tracking-widest uppercase">
            No images found
          </div>
        ) : (
          <>
            <div className="masonry-grid" key={activeSlug}>
              {visibleImages.map((img, index) => (
            <div key={img.id} className="masonry-item group">
              <div
                className="w-full overflow-hidden rounded-card"
                style={{ height: HEIGHTS[index % HEIGHTS.length] }}
              >
                <img
                  src={img.imageUrl}
                  alt={img.altText || `${img.categoryName} photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

            {/* See More Button */}
            {hasMore && (
              <div className="text-center mt-14">
                <button
                  onClick={handleSeeMore}
                  className="btn-brush btn-brush-gold"
                >
                  See More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
