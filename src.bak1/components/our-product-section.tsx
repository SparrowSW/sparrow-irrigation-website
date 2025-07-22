
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurProductSection({ className }: { className?: string }) {
  return (
    <section id="our-product" className={`py-20 bg-secondary ${className} flex items-center justify-center`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold text-primary mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up">
          Introducing The Sparrow Irrigation Controller
        </h2>

        {/* Main Product Overview */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up" data-aos-delay="200">
          <div className="md:w-1/2">
            <Image
              src="/placeholder-product.png" // Replace with actual product image/3D render
              alt="Sparrow Irrigation Controller"
              width={700}
              height={500}
              className="rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 text-left text-foreground">
            <p className="text-xl leading-relaxed mb-6">
              The Sparrow Controller: Smart, Efficient, Reliable. Manage your
              irrigation system with unparalleled ease, optimizing water usage
              and ensuring lush landscapes. Designed for both residential and
              professional applications, our controller brings precision and
              convenience to your fingertips.
            </p>
            <p className="text-lg leading-relaxed">
              Experience the future of irrigation with intuitive controls,
              smart scheduling, and robust performance, all built to last.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-heading font-bold text-primary mb-10 opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up" data-aos-delay="400">
          Choose Your Perfect Tier
        </h3>

        {/* Product Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up" data-aos-delay="600">
          {/* Tier 1 Card */}
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-2xl font-bold text-primary mb-4">Basic Tier</h4>
            <p className="text-muted-foreground mb-6">Ideal for small residential gardens.</p>
            <ul className="text-left text-foreground mb-8 space-y-2">
              <li>✓ 4 Zones Control</li>
              <li>✓ Basic Scheduling</li>
              <li>✓ Manual Operation</li>
              <li>✓ Local Weather Integration</li>
            </ul>
            <div className="text-3xl font-bold text-primary mb-6">$199</div>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link href="/pre-order">Pre-order Basic</Link>
            </Button>
          </div>

          {/* Tier 2 Card */}
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
            <h4 className="text-2xl font-bold text-primary mb-4">Pro Tier</h4>
            <p className="text-muted-foreground mb-6">Advanced features for larger homes and small businesses.</p>
            <ul className="text-left text-foreground mb-8 space-y-2">
              <li>✓ 8 Zones Control</li>
              <li>✓ Advanced Scheduling & Cycles</li>
              <li>✓ Remote Access (App)</li>
              <li>✓ Smart Weather Adjustments</li>
              <li>✓ Flow Sensor Support</li>
            </ul>
            <div className="text-3xl font-bold text-primary mb-6">$349</div>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link href="/pre-order">Pre-order Pro</Link>
            </Button>
          </div>

          {/* Tier 3 Card */}
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-2xl font-bold text-primary mb-4">Elite Tier</h4>
            <p className="text-muted-foreground mb-6">Comprehensive solution for professional landscapers.</p>
            <ul className="text-left text-foreground mb-8 space-y-2">
              <li>✓ 16 Zones Control</li>
              <li>✓ Multi-site Management</li>
              <li>✓ API Integration</li>
              <li>✓ Advanced Reporting & Analytics</li>
              <li>✓ Priority Support</li>
            </ul>
            <div className="text-3xl font-bold text-primary mb-6">$599</div>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link href="/pre-order">Pre-order Elite</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <Button asChild size="lg" className="px-10 py-5 text-xl bg-accent hover:bg-accent/90">
            <Link href="/pre-order">View All Pre-order Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
