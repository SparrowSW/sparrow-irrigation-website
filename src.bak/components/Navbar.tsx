"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "AR" : "EN");
  };

  return (
    <nav className="fixed top-0 w-full glass-card z-50 transition-all duration-300 hover:shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-200">
              Sparrow
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-foreground hover:text-primary px-3 py-2 transition-colors duration-200">
                Home
              </Link>
              <Link href="#products" className="text-foreground hover:text-primary px-3 py-2 transition-colors duration-200">
                Products
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary px-3 py-2 transition-colors duration-200">
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary px-3 py-2 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold text-foreground hover:text-primary hover:bg-transparent transition-colors duration-200"
            >
              {language}
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">Pre-Order Now</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card border-t border-primary/10">
            <Link href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="#products" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200">
              Products
            </Link>
            <Link href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </Link>
            <div className="px-3 py-2 space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-full text-foreground hover:text-primary hover:bg-transparent transition-colors duration-200"
              >
                {language === "EN" ? "العربية" : "English"}
              </Button>
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">Pre-Order Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}