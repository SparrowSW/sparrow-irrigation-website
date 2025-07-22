
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-3xl shadow-xl border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/sparrow.png"
            alt="Sparrow Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-primary-foreground drop-shadow-lg">Sparrow</span>
        </Link>
        <div className="space-x-4 text-primary">
          <Button variant="ghost" asChild>
            <Link href="#hero">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#who-are-we">Who Are We</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#our-product">Our Product</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/pre-order">Pre-order</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
