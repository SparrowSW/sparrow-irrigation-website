
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection({ className }: { className?: string }) {
  return (
    <section
      id="hero"
      className={`relative h-screen w-full flex items-center justify-center text-center bg-primary ${className}`}
    >
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/placeholder-hero.jpg')" }} // Replace with actual image/video
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-gradient-xy"></div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto text-white h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-4 drop-shadow-lg animate-fade-in-up" data-aos="fade-up">
          Innovating Irrigation for a Greener Tomorrow
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md animate-fade-in-up animation-delay-200" data-aos="fade-up" data-aos-delay="200">
          Smart Solutions for Residential & Professional Needs
        </p>
        <Button asChild size="lg" className="px-8 py-4 text-lg bg-accent hover:bg-accent/90">
          <Link href="#our-product">Discover Our Products</Link>
        </Button>
      </div>
    </section>
  );
}
