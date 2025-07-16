import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Pricing from "../components/Pricing";
import HowItWorks from "../components/HowItWorks";
import WhyChooseSparrow from "../components/WhyChooseSparrow";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Pricing />
      <HowItWorks />
      <WhyChooseSparrow />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}