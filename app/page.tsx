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
import ContactComponent from "@/component/ContactComponent";
import RepairPerformance from "@/component/RepairPerformance";
import Services from "@/component/Services";

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
      <ContactComponent />
      <Gallery />
      <Faq />
      <Location />
      <Footer />
    </main>
  );
}
