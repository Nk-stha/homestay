import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type TabKey = 'gallery' | 'wildlife';

const GALLERY_IMAGES = [
  '/gallery/homestay.jpg',
  '/gallery/homestay1.jpg',
  '/gallery/homestay2.jpg',
  '/gallery/homestay3.jpg',
  '/gallery/homestay4.jpg',
  '/gallery/homestay6.jpg',
  '/gallery/room.jpg',
  '/gallery/room1.jpg',
  '/gallery/room2.jpg',
  '/gallery/room5.jpg',
  '/gallery/room6.jpg',
];

const WILDLIFE_IMAGES = [
  '/gallery/tiger.jpg',
  '/gallery/tiger1.jpg',
  '/gallery/tiger2.jpg',
  '/gallery/tiger3.jpg',
  '/gallery/tiger4.jpg',
  '/gallery/tiger5.jpg',
  '/gallery/tiger6.jpg',
  '/gallery/tiger7.jpg',
  '/gallery/tiger9.jpg',
  '/gallery/tiger10.jpg',
  '/gallery/owl.jpg',
  '/gallery/rhino.jpg',
  '/gallery/deer.jpg',
  '/gallery/elephent.jpg',
];

const INITIAL_COUNT = 6;

const HEIGHTS = ['380px', '480px', '320px', '420px', '540px', '360px', '460px', '300px'];

export function GalleryMasonrySection() {
  const section = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<TabKey>('gallery');
  const [galleryCount, setGalleryCount] = useState(INITIAL_COUNT);
  const [wildlifeCount, setWildlifeCount] = useState(INITIAL_COUNT);

  const currentImages = activeTab === 'gallery' ? GALLERY_IMAGES : WILDLIFE_IMAGES;
  const visibleCount = activeTab === 'gallery' ? galleryCount : wildlifeCount;
  const visibleImages = currentImages.slice(0, visibleCount);
  const hasMore = visibleCount < currentImages.length;

  const handleSeeMore = () => {
    if (activeTab === 'gallery') {
      setGalleryCount(GALLERY_IMAGES.length);
    } else {
      setWildlifeCount(WILDLIFE_IMAGES.length);
    }
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
  };

  return (
    <section className="px-5 pb-24 sm:px-10 max-w-[1400px] mx-auto">
      {/* Divider */}
      <div className="divider-organic mb-12" />

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-14">
        <button
          onClick={() => handleTabChange('gallery')}
          className={`font-accent text-xs tracking-[0.16em] uppercase pb-2 border-b-2 transition-all duration-300 ${
            activeTab === 'gallery'
              ? 'text-bark-soil border-golden-hour font-semibold'
              : 'text-gray-400 border-transparent hover:text-gray-600'
          }`}
        >
          Gallery
        </button>
        <button
          onClick={() => handleTabChange('wildlife')}
          className={`font-accent text-xs tracking-[0.16em] uppercase pb-2 border-b-2 transition-all duration-300 ${
            activeTab === 'wildlife'
              ? 'text-bark-soil border-golden-hour font-semibold'
              : 'text-gray-400 border-transparent hover:text-gray-600'
          }`}
        >
          Wildlife
        </button>
      </div>

      {/* Masonry Grid */}
      <div
        ref={section.ref}
        className={`scroll-fade-in ${section.isVisible ? 'visible' : ''}`}
      >
        <div className="masonry-grid" key={activeTab}>
          {visibleImages.map((src, index) => (
            <div key={`${activeTab}-${index}`} className="masonry-item group">
              <div
                className="w-full overflow-hidden rounded-card"
                style={{ height: HEIGHTS[index % HEIGHTS.length] }}
              >
                <img
                  src={src}
                  alt={
                    activeTab === 'gallery'
                      ? `Homestay gallery photo ${index + 1}`
                      : `Wildlife photo ${index + 1}`
                  }
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
