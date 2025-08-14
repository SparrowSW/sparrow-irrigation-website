import GraphicBanner from "@/components/GraphicBanner";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      
      <Hero />
      <ProductShowcase />
      <GraphicBanner src="/optimize-your-garden.png" alt="Optimize your garden's watering today!" />
      <Testimonials />
      <GraphicBanner src="/upgrade-water-management.png" alt="Upgrade to efficient water management today!" />
      <ComingSoon />
      
    </>
  );
}