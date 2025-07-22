import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Sparrow</h3>
            <p className="text-muted-foreground">
              Professional irrigation controllers designed for Egyptian gardens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#products" className="hover:text-primary">Sparrow Basic</Link></li>
              <li><Link href="#products" className="hover:text-primary">Sparrow Pro</Link></li>
              <li><Link href="#products" className="hover:text-primary">Sparrow Elite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary">Installation Guide</Link></li>
              <li><Link href="#" className="hover:text-primary">Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Facebook</Link></li>
              <li><Link href="#" className="hover:text-primary">Instagram</Link></li>
              <li><Link href="#" className="hover:text-primary">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Sparrow Irrigation. All rights reserved. Made in Egypt 🇪🇬</p>
        </div>
      </div>
    </footer>
  );
}