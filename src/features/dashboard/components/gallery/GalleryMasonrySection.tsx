import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeSlug, setActiveSlug] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/gallery-categories/list`).then((r) => r.json()),
      fetch(`${API_BASE}/gallery-images/list`).then((r) => r.json()),
    ])
      .then(([catData, imgData]) => {
        const cats: GalleryCategory[] = catData.data || [];
        setCategories(cats);
        setImages(imgData.data || []);
        if (cats.length > 0) setActiveSlug(cats[0].slug);
      })
      .catch((err) => console.error('Failed to fetch gallery:', err));
  }, []);

  const filtered = images.filter((img) => img.categorySlug === activeSlug);
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
      {categories.length > 1 && (
        <div className="flex justify-center gap-8 mb-14">
          {categories.map((cat) => (
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
      </div>
    </section>
  );
}
