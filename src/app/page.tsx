import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import PricingCards from "@/components/PricingCards";
import HowItWorks from "@/components/HowItWorks";
import WhySparrow from "@/components/WhySparrow";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ProductShowcase />
      <PricingCards />
      <HowItWorks />
      <WhySparrow />
      <Testimonials />
      <About />
      <ComingSoon />
      <Contact />
      <Footer />
    </>
  );
}