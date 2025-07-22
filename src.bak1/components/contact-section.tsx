
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactSection({ className }: { className?: string }) {
  return (
    <section id="contact" className={`py-20 bg-background ${className} flex items-center justify-center`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Contact Form - Left Aligned */}
        <div className="md:w-1/2 opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up">
          <h2 className="text-4xl font-heading font-bold text-primary mb-8">
            Connect With Us
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-foreground mb-2">
                Name
              </label>
              <Input type="text" id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-foreground mb-2">
                Email
              </label>
              <Input type="email" id="email" placeholder="your@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea id="message" rows={5} placeholder="Your message..."></Textarea>
            </div>
            <Button type="submit" className="px-8 py-3 text-lg bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info - Right Aligned */}
        <div className="md:w-1/2 text-foreground opacity-0 translate-y-10 transition-all duration-700 ease-out" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6">
            Reach Out Directly
          </h3>
          <div className="space-y-4 text-lg">
            <p>
              <strong>Email:</strong> <a href="mailto:info@sparrow.com" className="text-accent hover:underline">info@sparrow.com</a>
            </p>
            <p>
              <strong>Phone:</strong> +20 XXX XXX XXXX
            </p>
            <p>
              <strong>Address:</strong> [Your Egypt Location, e.g., 123 Main Street, Cairo, Egypt]
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-accent">
              {/* Placeholder for Social Media Icons */}
              <a href="#" className="hover:text-accent/80">Facebook</a>
              <a href="#" className="hover:text-accent/80">Instagram</a>
              <a href="#" className="hover:text-accent/80">LinkedIn</a>
            </div>
          </div>
        </div>

        <footer className="bg-primary text-primary-foreground py-8 mt-12 rounded-lg shadow-lg">
          <div className="container mx-auto px-4 text-center text-sm">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} Sparrow. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="#" className="hover:underline text-accent-foreground">Privacy Policy</Link>
              <Link href="#" className="hover:underline text-accent-foreground">Terms of Service</Link>
            </div>
            <div className="flex justify-center space-x-4">
              <Link href="/" className="hover:underline text-accent-foreground">Home</Link>
              <Link href="#who-are-we" className="hover:underline text-accent-foreground">Our Story</Link>
              <Link href="#our-product" className="hover:underline text-accent-foreground">Product</Link>
              <Link href="#contact" className="hover:underline text-accent-foreground">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
