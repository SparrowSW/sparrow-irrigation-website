"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="bg-primary text-white w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand/About */}
          <div className="flex flex-col items-start text-left">
            <Image src="/Logo_White.svg" alt="Sparrow Logo" width={80} height={80} style={{ objectFit: 'contain', objectPosition: 'left' }} />
            <p className="text-sm mt-2">Irregartion that lasts. Performance that stay.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:underline">How It Works</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sparrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}