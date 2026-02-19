import { Header } from '@/components/layout/Header';
import { IntroSection } from '../components/IntroSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { AccommodationsSection } from '../components/AccommodationsSection';
import { SafariSection } from '../components/SafariSection';
import { PackagesSection } from '../components/PackagesSection';
import { HostsSection } from '../components/HostsSection';
import { WildlifeSection } from '../components/WildlifeSection';

export function HomePage() {
  return (
    <>
      <Header />
      <IntroSection />
      <TestimonialSection />
      <AccommodationsSection />
      <SafariSection />
      <PackagesSection />
      <HostsSection />
      <WildlifeSection />
    </>
  );
}
