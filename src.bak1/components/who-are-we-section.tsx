
import Image from "next/image";

export default function WhoAreWeSection({ className }: { className?: string }) {
  return (
    <section id="who-are-we" className={`py-20 bg-background ${className} flex items-center justify-center`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image/Graphic - Left Aligned */}
        <div className="md:w-1/2 opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up">
          <Image
            src="/placeholder-about.jpg" // Replace with an actual image (e.g., Egyptian landscape, abstract irrigation, or team photo)
            alt="About Sparrow"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Block - Right Aligned */}
        <div className="md:w-1/2 text-foreground opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
            Our Story: Pioneering Irrigation
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Sparrow is an Egyptian company dedicated to revolutionizing
            irrigation control. We combine cutting-edge technology with
            a deep understanding of water conservation to deliver smart,
            efficient, and reliable solutions for both residential and
            professional consumers.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is to empower individuals and businesses to manage
            their landscapes sustainably, ensuring lush greenery while
            preserving precious water resources. We believe in innovation,
            sustainability, and unwavering reliability.
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground">
            <li>Innovation: Continuously pushing the boundaries of smart irrigation.</li>
            <li>Sustainability: Committed to water conservation and environmental responsibility.</li>
            <li>Reliability: Building products that you can trust, day in and day out.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
