import { useState, type FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* ── Data ── */

const CONTACT_METHODS = [
  {
    icon: '📞',
    title: 'Call Us',
    detail: '+91 98765 43210',
    href: 'tel:+919876543210',
    desc: 'Available 8 AM – 9 PM daily. We respond fastest to calls and WhatsApp messages.',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    detail: 'hello@bardiahomestay.com',
    href: 'mailto:hello@bardiahomestay.com',
    desc: 'We reply within 4 hours during the day. Detailed questions welcome.',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    detail: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
    desc: 'Fastest way to reach us. Share photos, ask questions, get instant responses.',
  },
];


const SOCIALS = [
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '📘', label: 'Facebook', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '📹', label: 'YouTube', href: '#' },
  { icon: '📌', label: 'Pinterest', href: '#' },
];

const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6+ Guests'];
const PACKAGE_OPTIONS = [
  'Canopy — Weekend (2N/3D)',
  'Deep Wild — Week (4N/5D)',
  'Sovereignty — Extended (7N/8D)',
  'Custom Duration',
];

/* ── Component ── */

export function ContactPage() {
  const hero = useScrollAnimation();
  const methods = useScrollAnimation();
  const formSection = useScrollAnimation();
  const social = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            Get in Touch
            <span className="w-8 h-px bg-golden-hour" />
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-bark-soil leading-[1.15] mb-7">
            Let's Start
            <br />
            <em className="text-golden-hour italic">Planning</em> Your Journey
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed-plus text-gray-500 max-w-2xl mx-auto">
            Whether you're ready to book or just exploring possibilities, we're
            here to answer every question. The forest is waiting.
          </p>
        </div>
      </section>

      {/* ════════ CONTACT METHODS ════════ */}
      <section className="px-4 sm:px-10 pb-20 max-w-[1200px] mx-auto">
        <div
          ref={methods.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-fade-in ${methods.isVisible ? 'visible' : ''}`}
        >
          {CONTACT_METHODS.map((m, i) => (
            <div
              key={i}
              className={`bg-white dark:bg-surface-dark p-10 rounded-2xl text-center shadow-card card-lift relative overflow-hidden scroll-fade-in stagger-${i + 1} ${methods.isVisible ? 'visible' : ''}`}
            >
              <div className="w-[72px] h-[72px] mx-auto mb-6 rounded-full bg-gradient-to-br from-golden-hour to-burnt-rust flex items-center justify-center text-3xl animate-float">
                {m.icon}
              </div>
              <h3 className="font-display text-2xl text-bark-soil dark:text-soft-earth mb-3">{m.title}</h3>
              <a
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-golden-hour hover:text-burnt-rust transition-colors duration-300 font-medium block mb-3"
              >
                {m.detail}
              </a>
              <p className="text-sm font-light leading-relaxed text-gray-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ FORM & MAP ════════ */}
      <section className="py-20 md:py-24 px-4 sm:px-10 bg-deep-forest relative grain-texture">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #C8843A 50%, transparent 100%)' }} />

        <div
          ref={formSection.ref}
          className={`max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 scroll-fade-in ${formSection.isVisible ? 'visible' : ''}`}
        >
          {/* Form Side */}
          <div>
            <div className="mb-10">
              <span className="font-accent text-[10px] tracking-[0.28em] uppercase text-golden-hour block mb-5">
                Send a Message
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-earth leading-tight mb-4">
                Tell Us About
                <br />
                Your <em className="text-golden-hour italic">Travel Plans</em>
              </h2>
              <p className="text-base font-light leading-relaxed text-soft-earth/60">
                Fill out this form and we'll respond within a few hours with
                availability, recommendations, and answers.
              </p>
            </div>

            {submitted ? (
              <div className="py-5 px-6 rounded-lg bg-teal/20 border border-teal text-soft-earth text-center animate-fade-in">
                ✓ Thank you! We've received your message and will respond within 4
                hours.
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth placeholder-soft-earth/30 focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth placeholder-soft-earth/30 focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth placeholder-soft-earth/30 focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none"
                  />
                </div>

                {/* Guests */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium z-10">
                    Number of Guests
                  </label>
                  <select
                    required
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select</option>
                    {GUEST_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                {/* Package */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium z-10">
                    Preferred Package
                  </label>
                  <select
                    required
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select a package</option>
                    {PACKAGE_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium">
                    Travel Dates
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., First week of March 2026"
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth placeholder-soft-earth/30 focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-4 bg-deep-forest px-2 font-accent text-[10px] tracking-[0.16em] uppercase text-golden-hour font-medium">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your interests, special requirements, questions..."
                    className="w-full py-4 px-5 bg-soft-earth/5 border border-soft-earth/15 rounded-lg text-soft-earth placeholder-soft-earth/30 focus:border-golden-hour focus:bg-soft-earth/[0.08] transition-all duration-300 outline-none resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-golden-hour text-bark-soil font-accent text-[12px] tracking-[0.18em] uppercase font-semibold rounded-lg hover:shadow-lg hover:shadow-golden-hour/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map Side */}
          <div className="lg:sticky lg:top-28">
            <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d81.2400799!3d28.4358814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzA5LjIiTiA4McKwMTQnMjQuMyJF!5e0!3m2!1sen!2snp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bardia Eco-Friendly Homestay Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL MEDIA ════════ */}
      <section className="py-20 md:py-24 px-6 sm:px-10 bg-deep-forest text-center grain-texture">
        <div
          ref={social.ref}
          className={`max-w-2xl mx-auto scroll-fade-in ${social.isVisible ? 'visible' : ''}`}
        >
          <span className="font-accent text-[10px] tracking-[0.28em] uppercase text-golden-hour block mb-5">
            Follow Our Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-soft-earth leading-tight mb-5">
            Connect With Us on <em className="text-golden-hour italic">Social Media</em>
          </h2>
          <p className="text-base font-light leading-relaxed-plus text-soft-earth/60 mb-12">
            Daily stories from the forest, guest experiences, wildlife sightings,
            and seasonal updates. Join our community.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-soft-earth/5 border border-soft-earth/15 flex items-center justify-center text-2xl sm:text-3xl hover:bg-golden-hour hover:border-golden-hour hover:-translate-y-2 hover:rotate-6 transition-all duration-400"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
