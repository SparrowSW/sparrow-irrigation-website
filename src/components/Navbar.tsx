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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Sparrow
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Home
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Products
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold"
            >
              {language}
            </Button>
            <Button size="sm">Pre-Order Now</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <div className="px-3 py-2 space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-full"
              >
                {language === "EN" ? "العربية" : "English"}
              </Button>
              <Button size="sm" className="w-full">Pre-Order Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}