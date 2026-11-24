import NavBar from "@/component/NavBar";
import HeroSection from "@/component/HeroSection";
import CarouselText from "@/component/CarouselText";
import ReviewCarousel from "@/component/ReviewCarousel";
import Footer from "@/component/Footer";
import Automation from "@/component/Automation";
import CTA from "@/component/CTA";
import ContentText from "@/component/ContentText";
import AboutVogueTech from "@/component/AboutVogueTech";
import Location from "@/component/Location";
import Faq from "@/component/Faq";
import Gallery from "@/component/Gallery";
import RepairPerformance from "@/component/RepairPerformance";
import Services from "@/component/Services";

const baseUrl = "http://localhost:3000/"
export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Engine Rebuild & Repair Specialists in Essex | Vogue Tech",
  description: "Vogue Tech rebuilds, repairs and replaces Range Rover, Land Rover, Jaguar, Audi and BMW engines in Thurrock, Essex. 20+ years' experience. Get a quote.",
  alternates: {
      canonical: "/",
  },  
};

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <CarouselText />
      <ReviewCarousel />
      <Automation />
      <CTA />
      <ContentText />
      <AboutVogueTech />
      <Services />
      <RepairPerformance />
      <Gallery />
      <Faq />
      <Location />
      <Footer />
    </main>
  );
}
