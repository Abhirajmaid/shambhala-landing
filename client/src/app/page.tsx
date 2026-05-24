import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import {
  PremiumProducts,
  OfferingsSection,
  WhyShambhala,
  FiveReasons,
  MentorsSection,
  // BlogsSection,
} from "@/components/landing/MarketingSections";
import { Partners } from "@/components/landing/Partners";
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
        <VideoTestimonials />
        <OfferingsSection />
        <WhyShambhala />
        <FiveReasons />
        <MentorsSection />
        <Partners />
        <HowItWorks />
        {/* <BlogsSection /> */}
        <ConnectCTA />
      </main>
      <Footer />
    </>
  );
}
