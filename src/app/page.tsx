import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import PricingCards from "@/components/PricingCards";
import HowItWorks from "@/components/HowItWorks";
import WhySparrow from "@/components/WhySparrow";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import LocateUs from "@/components/LocateUs";
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
      <LocateUs />
      <section id="shop-sparrow" className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Shop Sparrow
        </h2>
        <p className="text-lg text-gray-700">
          {/* This section is coming soon! It will feature options to shop Sparrow products. */}
        </p>
      </section>
      <ComingSoon />
      <Contact />
      <Footer />
    </>
  );
}