"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/contexts/LanguageContext";

const navigationLinks = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/about", en: "About Us", ar: "عنّا" },
  { href: "/how-it-works", en: "How It Works", ar: "كيفية العمل" },
  { href: "/products", en: "Products", ar: "المنتجات" },
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
      className="fixed top-0 left-0 z-50 w-full bg-white shadow-md"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary transition-opacity hover:opacity-80">
          <Image src="/Logo_Blue.svg" alt="Sparrow Logo" width={80} height={80} />
          {/* <span className="text-text">Sparrow</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text transition-colors hover:text-primary"
            >
              {link[lang]}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleLanguage}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm font-semibold text-text transition-colors hover:bg-gray-200"
            aria-label="Toggle Language"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-white shadow-lg transition-all hover:bg-primary/90"
          >
            {lang === "en" ? "Contact Us" : "اتصل بنا"}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="text-text" /> : <Menu className="text-text" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-background",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 p-4 text-lg">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text hover:text-primary"
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
            className="w-full text-left font-semibold text-text hover:text-primary"
            aria-label="Toggle Language"
          >
             {lang === "en" ? "العربية" : "English"}
          </button>
          <Link
            href="/contact"
            className="mt-4 block rounded-full bg-primary px-5 py-2 text-center text-white shadow-lg transition-all hover:bg-primary/90"
            onClick={handleLinkClick}
          >
            {lang === "en" ? "Contact Us" : "اتصل بنا"}
          </Link>
        </nav>
      </div>
    </header>
  );
}