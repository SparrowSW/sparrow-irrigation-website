import HeroSection from "@/components/hero-section";
import WhoAreWeSection from "@/components/who-are-we-section";
import OurProductSection from "@/components/our-product-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between snap-y snap-mandatory overflow-y-scroll h-screen scroll-pt-16 snap-stop-always">
      <HeroSection className="snap-start min-h-screen" />
      <WhoAreWeSection className="snap-start min-h-screen" />
      <OurProductSection className="snap-start min-h-screen" />
      <ContactSection className="snap-start min-h-screen" />
    </main>
  );
}
