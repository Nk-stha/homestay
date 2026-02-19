import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const rooms = [
  {
    title: 'The Canopy Suite',
    description: 'Panoramic views of the forest edge with handcrafted interiors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHe3DX3gjfuX_LvCcHO65_oMP7YUAay6SYQcBpAn7MPd3y8_Rlv5-g3gOZJMhwR8X1zy0_fxKBwcB3iTCVi2PSD7uNrTWm7Q7L-Lhy4FBinNPULFgoTibCkchUV4eDNpxpvse0xpQJBW9zJsBbU5t2_aJWHlJ47fhm2pTrN8OOaX2uowneK5Ai-GBCI2KXudBfHVSD1Dlz99r_qQTM5biQ77yb5p12GAHZNxPoBpsg0sGGFnlUE_m_RgGVVFfwlfn6esTuVH-Gsw',
  },
  {
    title: 'Garden Cottage',
    description: 'Private garden access and traditional Tharu architecture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6L180H2Lbc_OpixWKZ9OvC9PMsAfekS4A4q-h4EQtLCe0cI3MjCmxIRj1OQ4tTlwZDd9Elgw0RR_FH1BeBEWl1BB62m3eqbiCNSV99WgWLBBdFJs64ZpwmgsimwfHEGBhHeFrlrAtqQdEIQk6Du0GW0x7H47pjYLBMfUHUy9A5l1gZf5vYlZ6bp6xFbU4rG1mYLhe2SLmVRHK9YoPP9YqkYBOFCK0HSPLm2zhzx-R-w-8-tG1rcRFjxw005Vg0AcmQGOkrJxO7Q',
    offset: true,
  },
  {
    title: 'Heritage Room',
    description: 'Immerse yourself in history with authentic clay walls.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwsRUegpsrfeb-BnMHW9QgFUv0YjZd8gxPxuX8piS3O6_jYP7tErsgJHjkYSjD19-i_BjkeJ4PHwAg_dYelCnwNG0dMCkqeQ-1xhFdVnZmAC1uHGCaPwkPh27qieeHlrEScqqPFpWYGorewRAOgbY4xrfCsSMB7Rzveq9Qwfu23VE9Jhn8YGJY3SW7rrB4WbWpwzt3pCnB0JwMX3frjrVWfVjvs1HrKRafzkqFe2rR3tuuHbIOI8T7rxTdmizaZDOn-rdW2FHFQw',
  },
];

export function AccommodationsSection() {
  const heading = useScrollAnimation();
  const cards = useScrollAnimation({ threshold: 0.1 });
  const cta = useScrollAnimation();

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Binoculars icon like reference site */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 relative scroll-fade-in ${heading.isVisible ? 'visible' : ''}`}
        >
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-secondary dark:text-accent-gold opacity-80" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="20" cy="32" r="14" fill="currentColor" opacity="0.9"/>
              <circle cx="44" cy="32" r="14" fill="currentColor" opacity="0.9"/>
              <circle cx="32" cy="32" r="6" fill="#4A7C3F"/>
              <circle cx="20" cy="32" r="8" fill="#1C2B1A"/>
              <circle cx="44" cy="32" r="8" fill="#1C2B1A"/>
              <circle cx="17" cy="29" r="2" fill="#FFF" opacity="0.3"/>
              <circle cx="41" cy="29" r="2" fill="#FFF" opacity="0.3"/>
            </svg>
          </div>
          <h2 className="font-display text-secondary dark:text-secondary font-bold text-4xl uppercase tracking-widest relative z-10">
            Where You <br />
            <span className="font-script text-6xl text-gray-800 dark:text-gray-100 capitalize normal-case mt-2 block">
              will sleep
            </span>
          </h2>
          <div className="divider-organic" />
        </div>

        <div
          ref={cards.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-xl aspect-[3/4] md:aspect-[4/5] cursor-pointer hover-shine scroll-scale-in stagger-${index + 1} ${
                room.offset ? 'md:-mt-8' : ''
              } ${cards.isVisible ? 'visible' : ''}`}
            >
              <img
                alt={room.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={room.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-display text-2xl mb-2">{room.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {room.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          <button className="w-2.5 h-2.5 rounded-full bg-primary transition-all duration-300" />
          <button className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-primary transition-all duration-300" />
          <button className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-primary transition-all duration-300" />
          <button className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-primary transition-all duration-300" />
        </div>

        <div
          ref={cta.ref}
          className={`text-center mt-12 scroll-fade-in stagger-2 ${cta.isVisible ? 'visible' : ''}`}
        >
          <button className="btn-brush btn-brush-primary">
            View Accommodations
          </button>
        </div>
      </div>
    </section>
  );
}
