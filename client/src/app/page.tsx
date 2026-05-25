import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import {
  PremiumProducts,
  OfferingsSection,
  FiveReasons,
  // BlogsSection,
} from "@/components/landing/MarketingSections";
import { Partners } from "@/components/landing/Partners";
import { Stats } from "@/components/landing/Stats";
import { VideoTestimonials } from "@/components/landing/VideoTestimonials";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ConnectCTA } from "@/components/landing/ConnectCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1 scroll-mt-0">
        <Hero />
        <PremiumProducts />
        <Stats />
        <VideoTestimonials />
        <OfferingsSection />
        <FiveReasons />
        <Partners />
        <HowItWorks />
        {/* <BlogsSection /> */}
        <ConnectCTA />
      </main>
      <Footer />
    </>
  );
}
