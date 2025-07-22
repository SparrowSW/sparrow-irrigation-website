"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

// Dummy context for demonstration - replace with your actual implementation
// import { useLanguage } from "@/contexts/LanguageContext";
const useLanguage = () => {
    const [lang, setLang] = useState<'en' | 'ar'>('en');
    return { lang, setLang };
};

const navigationLinks = [
  { href: "#home", en: "Home", ar: "الرئيسية" },
  { href: "#products", en: "Products", ar: "المنتجات" },
  { href: "#about", en: "About", ar: "عنّا" },
  { href: "#contact", en: "Contact", ar: "اتصل" },
];

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-10xl -translate-x-1/2"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="rounded-2xl border border-white/10 bg-primary/10 p-4 shadow-lg backdrop-blur-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold text-blue-500 transition-opacity hover:opacity-80">
            Sparrow
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-dark/80 transition-colors hover:text-white"
              >
                {link[lang]}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleLanguage}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-text-dark/20 text-sm font-semibold text-text-dark/80 transition-colors hover:bg-white/30"
              aria-label="Toggle Language"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <Link
              href="#coming-soon"
              className="rounded-full bg-blue-600 px-5 py-2 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.8)]"
            >
              {lang === "en" ? "Coming Soon" : "قريباً"}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-4 pt-6 text-lg">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white"
                onClick={handleLinkClick}
              >
                {link[lang]}
              </Link>
            ))}
             <button
              onClick={() => {
                toggleLanguage();
                handleLinkClick();
              }}
              className="w-full text-left font-semibold text-white/80 hover:text-white"
              aria-label="Toggle Language"
            >
               {lang === "en" ? "العربية" : "English"}
            </button>
            <Link
              href="#coming-soon"
              className="mt-4 block rounded-full bg-blue-600 px-5 py-2 text-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.8)]"
              onClick={handleLinkClick}
            >
              {lang === "en" ? "Get Notified" : "اشترك الآن"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}