"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="bg-primary text-white w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">Sparrow</h3>
            <p className="mt-2 text-sm">Making irrigation simple and efficient.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20}/></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={20}/></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20}/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sparrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}