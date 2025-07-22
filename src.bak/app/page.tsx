import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import OurController from "../components/OurController";
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
      <WhatWeDo />
      <OurController />
      <HowItWorks />
      <WhyChooseSparrow />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}