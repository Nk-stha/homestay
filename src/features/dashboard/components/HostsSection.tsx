import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const hosts = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDLU302qu0mytEl5FJt5dvYI2l0BLdoAQi0X3xItnVmh9uIGkOyOFkAjN4IeMuf1nt2d-9TyUr4spooH3yTZQ0MVepkylpRUxihYl_ky_-CyLx3g6a96PR80qkaGazgj8Se4G3wNTqfVdZzKT4AVVftbPSdzzUR5afEje2CPg0KiHvP8LL6KcaKXvRzvwVzYSBSK3P1uO4Z9j2tKUhPAIEPzezt0l7yDYKGdciUjrtSJ4cmpvYP87KHTbDXXcaSj-RVSmlNmhA1BA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCwD-4Wfj4z5xXo0eybWzcII1E3hPz5k_jT6RLQPsIIyp3l3tKvq0U0vnKFNuojOaRxU06TuS6D0xBwlko7Ea9F4CPUWBm4GuXkuE03d2a8nOOvraFu1-NZGaHkLWbSLjP1N8M5fYZuyU56U7pM_I8EJXmpOETatYC8kvmajCydjGCE8D0ZbS3S4zudfNdov1kXEI85VYHh0WFCwdccDP8Hm2sCQ8NU4oV9rTRAThGdjwm_47gYGfeaggZqesgIbBHdyUZ3yXGA_g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8LN7OYx4Hgj-XHqu78v-dsRlNfuUu-yHMxYrsOfI8ybHnfav6L0RmaUocv0y6k-cN8IYH4zpI0D1zaMZoHHxFuJvApC3q3hwrSkJAHNGLMEOyb_A7w9V_DeOBkL_7XR_M_auT7PVUwTwg4vjWDv2MpPswUA3vZiFmB-Lk_pRRAj271bsUxuWS5k4zxw9Vxy0PP_mVecav8WJtA7-uEb8Mi46gY6-UfGHN3Oa65CKcQ2sUZXAhjg6GulRuIS9QGKeualDGtv1f9w',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA4MChtdFL8T6skUWEj1x5xvzzR135E3uf13olnq6_yW2haBvSaatVq4Pm_l2I6rXcCxV3EXX2hAJIb90wzA4YsaaI0z12MkfZUzjp18cd3wNxhIeCw5R0FpeCVDDuDi9q_mKcnZ8EAovdB8nIffgIx--Rztr06x9NZTKdhXFjp-7KMar4FtOK3S9WpRMoTvh8Y0lwF8l5unneBn6AtSw2H4IgQzllxmOTZx9zyR-HLgsZSxiPRbr_2YmDbQJhGcCea5emL90lYDA',
];

export function HostsSection() {
  const heading = useScrollAnimation();
  const grid = useScrollAnimation({ threshold: 0.1 });
  const cta = useScrollAnimation();

  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={heading.ref}
          className={`text-center mb-16 scroll-fade-in ${heading.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-secondary font-bold text-xl uppercase tracking-widest mb-2">
            Meet <br />
            <span className="font-script text-6xl text-white capitalize normal-case">your hosts</span>
          </h2>
          <div className="divider-organic" />
        </div>

        <div
          ref={grid.ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {hosts.map((host, index) => (
            <div
              key={index}
              className={`aspect-square overflow-hidden rounded-lg group relative hover-shine scroll-scale-in stagger-${index + 1} ${grid.isVisible ? 'visible' : ''}`}
            >
              <img
                alt="Host portrait"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                src={host}
              />
              {/* Golden frame on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold/40 rounded-lg transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div
          ref={cta.ref}
          className={`text-center mt-12 scroll-fade-in stagger-2 ${cta.isVisible ? 'visible' : ''}`}
        >
          <button className="btn-brush btn-brush-gold">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}
