import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import ProductShowcase from "../components/ProductShowcase.tsx";
import Pricing from "../components/Pricing.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import WhyChooseSparrow from "../components/WhyChooseSparrow.tsx";
import Testimonials from "../components/Testimonials.tsx";
import About from "../components/About.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";

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