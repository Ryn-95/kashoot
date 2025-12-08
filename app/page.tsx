import Hero from '@/components/sections/Hero';
import QuoteSection from '@/components/sections/QuoteSection';
import WhyKashoot from '@/components/sections/WhyKashoot';
import Services from '@/components/sections/Services';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import BlogGrid from '@/components/sections/BlogGrid';
import Pricing from '@/components/sections/Pricing';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuoteSection />
      <PortfolioGrid />
      <WhyKashoot />
      
      <Services />
      <Pricing />
      
      <BlogGrid />
      <Testimonials />
      {/* <Gallery /> */}
      
      <CTA />
    </div>
  );
}

